import { Component } from '@angular/core';
import { IpService } from '../../core/services/ip.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-ip',
  standalone: true,
  imports: [],
  providers: [HttpClient, IpService],
  templateUrl: './my-ip.component.html',
  styleUrl: './my-ip.component.css'
})
export class MyIpComponent {
  ipAddress: string;

  constructor(private ipService: IpService) { 
    this.ipAddress = '';
  }

  ngOnInit() {
    this.ipService.getIP().subscribe((data: any) => {
      this.ipAddress = data.ip;
    });
  }
}
