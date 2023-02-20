import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamLeaderAuthGuard } from 'src/guards/TeamLeaderAuthGuard';
import { EmployeeAuthGuard } from 'src/guards/EmployeeAuthGuard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  { path: 'leader', loadChildren: () => import('./team-leader/team-leader.module').then(m => m.TeamLeaderModule), canActivate: [TeamLeaderAuthGuard] },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule), canActivate: [EmployeeAuthGuard] },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
