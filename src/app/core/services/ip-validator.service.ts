import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpValidatorService {
  
  public redirectUrl: string = '/forbidden';

  private ipifyUrl = 'https://api.ipify.org?format=json';
  private whitelist: string[] = [
    '192.168.0.1/24',
    '192.168.1.1/24',
    '192.168.5.1/24',
    '112.215.228.6',
    '112.215.225.228'
  ];

  constructor(private router: Router, private http: HttpClient) {
  }

  // Function to validate the IP format
  private isValid(ip: string): boolean {
    const ipPattern = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;
    return ipPattern.test(ip);
  }

  // Function to convert IP to integer for comparison
  private ipToInt(ip: string): number {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0);
  }

  // Function to check if IP is in range
  private isIPInRange(ip: string, range: string): boolean {
    const [rangeIP, prefixLength] = range.split('/');
    const ipInt = this.ipToInt(ip);
    const rangeInt = this.ipToInt(rangeIP);
    const mask = -1 << (32 - parseInt(prefixLength));
    return (ipInt & mask) === (rangeInt & mask);
  }

  // Function to get current ip address
  getIP(): Observable<any> {
    return this.http.get(this.ipifyUrl);
  }

  // Function to check is IP allowed by async task
  public async isAllowAsync(policy: any) {
    const data = await lastValueFrom(this.getIP());
    const config: any = await lastValueFrom(this.http.get('assets/config/network.policy.json'));

    if (!config.hasOwnProperty(policy.scheme)){
      return true;
    }

    const scheme = config[policy.scheme];
    if (!scheme.hasOwnProperty('Allow')) {
      return true;
    }

    this.whitelist = scheme.Allow;

    console.log('network-policy-scheme', scheme);
    console.log('my-ip', data.ip);
    return this.isAllowed(data.ip);
  }

  // Main function to check if the IP is allowed
  public isAllowed(ip: string): boolean {
    if (!this.isValid(ip)) {
      return false;
    }

    for (const allowedIP of this.whitelist) {
      if (allowedIP.includes('/')) {
        if (this.isIPInRange(ip, allowedIP)) {
          return true;
        }
      } else {
        if (ip === allowedIP) {
          return true;
        }
      }
    }
    // return this.allowedRanges.some(range => this.isIPInRange(ip, range));

    return false;
  }

  // Function for next action
  public next(isAllow: boolean): boolean {
    if (isAllow) {
      return true;
    }
    
    this.router.navigateByUrl(this.redirectUrl);
    return false;
  }
}
