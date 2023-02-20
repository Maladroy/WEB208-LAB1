import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamLeaderRoutingModule } from './team-leader-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TeamLeaderRoutingModule
  ]
})
export class TeamLeaderModule { }
