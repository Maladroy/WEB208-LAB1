import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { ProjectService } from 'src/services/project.service';
import { TaskService } from 'src/services/task.service';
import jwt_decode from 'jwt-decode';
import { IProject } from 'src/models/project.model';
import { map } from 'rxjs';
import { ITask } from 'src/models/task.model';
import { assign } from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  role: string;
  username: string;
  projects: IProject[];
  detailProject: IProject | null;
  detailTasks: ITask[] = [];

  constructor(
    private authService: AuthService,
    private projectService: ProjectService,
    private taskService: TaskService,

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
      this.projects = this.projectService.processProjectData(res);
    })
  }

  logout() {
    this.authService.logout()
  }

  toggleProject(_id: string) {
    if (this.detailProject?._id == _id) this.detailProject = null
    else this.detailProject = this.projects.filter(p => p._id == _id)[0];

    this.detailTasks.length = 0;
    this.taskService.getAllTasksByProjectId((this.detailProject as IProject)._id as string).subscribe(res => {
      this.detailTasks = res
      this.detailTasks.forEach(async task => {
        let members: string[] = [];

        task.assignedTo.forEach(id => this.authService.getUser(id).subscribe(res => members.push(res.username)))
        task.members = await members;
      })
      console.log(this.detailTasks);
    })

  }
}