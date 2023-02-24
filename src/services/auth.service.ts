import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import environment from 'src/environments/environment';
import jwt_decode from 'jwt-decode';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient, private router: Router) { }

    // Logs in a user and returns the JWT token
    login(username: string, password: string): Observable<string> {
        return this.http.post<any>(`${this.apiUrl}/user/login`, { username: username, password: password }, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        })
            .pipe(
                map(response => {
                    if (response && response.token) {
                        localStorage.setItem('currentUser', JSON.stringify(response));
                        return response.token;
                    }
                })
            );
    }

    register(username: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/user/register`, { username, password })
            .pipe(
                map(response => {
                    if (response && response.token) {
                        console.log(response);
                        localStorage.setItem('currentUser', JSON.stringify(response));
                        return response.token;
                    }
                })
            );
    }

    // Logs out the current user
    logout(): void {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }


    // Checks if a user is logged in
    isLoggedIn(): boolean {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
        return !!currentUser && !!currentUser.token;
    }

    // Gets the JWT token for the current user
    getToken(): string {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
        return currentUser ? currentUser.token : '';
    }

    getAuthenticatedUserRole(): string | null {
        const token = this.getToken()
        if (!token) {
            return null;
        }
        try {
            const decodedToken = jwt_decode(token) as { role: string };

            return decodedToken.role;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    getUser(userID: string) {
        return this.http.get<any>(`${this.apiUrl}/user/${userID}`, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        })
    }
}