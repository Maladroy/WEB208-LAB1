import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamLeaderRoutingModule } from './team-leader-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { AddProjectComponent } from './add-project/add-project.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    TeamLeaderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeamLeaderModule { }
