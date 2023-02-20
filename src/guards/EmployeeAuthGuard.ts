import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class EmployeeAuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        // Get the authenticated user's role from the auth service
        const userRole = this.authService.getAuthenticatedUserRole();

        // If the user is an employee, allow access to the route
        if (userRole === 'Employee') {
            return true;
        }

        // If the user is not an employee, redirect to the home page
        this.router.navigate(['/home']);
        return false;
    }
}