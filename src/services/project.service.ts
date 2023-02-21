import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import env from 'src/environments/environment';
import { Project } from '../models/project.model';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private apiUrl = env.apiUrl;

    constructor(private http: HttpClient) { }

    // Get all projects
    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${this.apiUrl}/project`);
    }

    getUserProjects(id: string) {
        return this.http.get<Project[]>(`${this.apiUrl}/project/by/${id}`);
    }

    // Create a project
    createProject(project: Project): Observable<Project> {
        return this.http.post<Project>(`${this.apiUrl}/project`, project);
    }

    // Update a project
    updateProject(project: Project): Observable<Project> {
        return this.http.put<Project>(`${this.apiUrl}/project/${project._id}`, project);
    }

    // Delete a project
    deleteProject(id: string): Observable<Project> {
        return this.http.delete<Project>(`${this.apiUrl}/project/${id}`);
    }
}