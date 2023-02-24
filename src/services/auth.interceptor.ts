import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // Get the JWT token from the AuthService
        const authToken = this.authService.getToken();

        // Clone the request and add the authorization header with the JWT token
        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${authToken}`)
        });

        // Pass the modified request on to the next handler
        return next.handle(authReq);
    }
}