import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'my-app',
  template: '<h1 *ngIf="HostInfo">My first {{HostInfo}} app is up and running</h1>',
  providers: [DashboardService]
})

export class HostInfoComponent implements OnInit{
  private HostInfo: string;

  constructor (private DashboardData: DashboardService) {}

  ngOnInit() {
    this.DashboardData.getHostInfo().then(HostInfoData => this.HostInfo = HostInfoData[0]);
  }
}