import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import env from 'src/environments/environment';
import { IProject } from '../models/project.model';
import { AuthService } from './auth.service';

function getElapsedTime(start: number, end: number) {
    let duration = end - start
    let remaining = end - Date.now()
    let elapsed = Math.max(Math.min(100, remaining / duration * 100), 0)

    return elapsed;
}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private apiUrl = env.apiUrl;
    private token: string;

    constructor(private http: HttpClient, private authService: AuthService) {
        this.token = this.authService.getToken()
    }


    getProjectByID(id: string): Observable<IProject> {
        return this.http.get<IProject>(`${this.apiUrl}/project/${id}`);
    }

    // Get all projects
    getProjects(): Observable<IProject[]> {
        return this.http.get<IProject[]>(`${this.apiUrl}/project`);
    }

    getUserProjects(id: string) {
        return this.http.get<IProject[]>(`${this.apiUrl}/project/by/${id}`);
    }

    processProjectData(projects: IProject[]): IProject[] {
        const result = projects.map((project): IProject => {
            let temp = { ...project };
            temp.startDate = new Date(project.startDate)
            temp.endDate = new Date(project.endDate)
            temp.remainTime = getElapsedTime(temp.startDate.getTime(), temp.endDate.getTime())
            // temp.employees = project.tasks.map((t: any) => t.assignedTo)
            temp.overdue = temp.remainTime * 100 < 0 ? true : false;

            return temp;
        })
        return result;
    }

    // Create a project
    createProject(project: IProject): Observable<IProject> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        });
        return this.http.post<IProject>(`${this.apiUrl}/project`, project, { headers });
    }

    // Update a project
    updateProject(projectID: string, project: IProject): Observable<IProject> {
        return this.http.put<IProject>(`${this.apiUrl}/project/${projectID}`, project);
    }

    // Delete a project
    deleteProject(id: string): Observable<IProject> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        });
        return this.http.delete<IProject>(`${this.apiUrl}/project/${id}`, { headers });
    }
}