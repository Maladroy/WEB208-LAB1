import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask } from 'src/models/task.model';
import environment from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private apiUrl = environment.apiUrl;


    constructor(private http: HttpClient) { }

    createTask(projectId: string, task: ITask, token: string): Observable<ITask> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });

        return this.http.put<ITask>(`${this.apiUrl}/task/${projectId}/tasks`, task, { headers });
    }

    getAllTasksByProjectId(projectId: string): Observable<ITask[]> {
        return this.http.get<ITask[]>(`${this.apiUrl}/task/${projectId}/tasks`);
    }

    getTask(taskId: string): Observable<ITask> {
        return this.http.get<ITask>(`${this.apiUrl}/task/${taskId}`);
    }
}