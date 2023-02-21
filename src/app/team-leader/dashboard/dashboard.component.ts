import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { ProjectService } from 'src/services/project.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  role: string;
  username: string;
  project: any;

  constructor(
    private authService: AuthService,
    private projectService: ProjectService
  ) {

  }

  ngOnInit() {
    const user = jwt_decode(this.authService.getToken()) as {
      role: string,
      id: string,
      username: string
    }

    this.role = this.authService.getAuthenticatedUserRole() as string
    this.username = user.username
    this.projectService.getUserProjects(user.id).subscribe(res => {
      console.log(res);
    })

    console.log(this.project);
  }
}