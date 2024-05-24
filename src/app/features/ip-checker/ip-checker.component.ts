import { Component } from '@angular/core';
import { IpValidatorService } from '../../core/services/ip-validator.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyIpComponent } from '../my-ip/my-ip.component';

@Component({
  selector: 'app-ip-checker',
  standalone: true,
  imports: [
    FormsModule, 
    MyIpComponent
  ],
  providers: [HttpClient, IpValidatorService],
  templateUrl: './ip-checker.component.html',
  styleUrl: './ip-checker.component.css'
})
export class IpCheckerComponent {
  ipAddress: string = '';
  validationMessage: string = '';

  constructor(private ipValidatorService: IpValidatorService) {}

  checkIP(): void {
    if (this.ipValidatorService.isAllowed(this.ipAddress)) {
      this.validationMessage = 'IP address is allowed.';
    } else {
      this.validationMessage = 'IP address is not allowed.';
    }
  }
}
