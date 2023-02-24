import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', redirectTo: '/', pathMatch: 'full' },
  { path: 'new-project', component: AddProjectComponent },
  { path: 'update-project/:id', component: UpdateProjectComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamLeaderRoutingModule { }
