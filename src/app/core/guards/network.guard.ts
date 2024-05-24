import { CanActivateFn, Router } from '@angular/router';
import { IpValidatorService } from '../services/ip-validator.service';
import { inject } from '@angular/core';
import { IpService } from '../services/ip.service';
import { lastValueFrom } from 'rxjs';

export const networkGuard: CanActivateFn = async (route, state) => {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1263447516.
  console.table(route.data);

  const data: any = route.data;
  const ipvalidator = inject(IpValidatorService);
  
  const isAllow = await ipvalidator.isAllowAsync(data.policy);
  return ipvalidator.next(isAllow);
};
