import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  private ipifyUrl = 'https://api.ipify.org?format=json';

  constructor(private http: HttpClient) { }

  getIP(): Observable<any> {
    return this.http.get(this.ipifyUrl);
  }
}
