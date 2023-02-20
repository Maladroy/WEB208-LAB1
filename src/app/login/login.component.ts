import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  submitted = false;
  submitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    const username: string = this.loginForm.get('username')?.value;
    const password: string = this.loginForm.get('password')?.value;

    this.authService.login(username, password)
      .subscribe(
        () => {
          this.submitted = true;
          const role = this.authService.getAuthenticatedUserRole();
          if (role === 'teamLeader') {
            this.router.navigate(['team-leader']);
          } else if (role === 'employee') {
            this.router.navigate(['employee']);
          }
        },
        (error) => {
          if (error.status === 401) {
            this.errorMessage = 'Invalid email or password';
          } else {
            this.errorMessage = 'An error occurred. Please try again later.';
          }
        }
      );
  }

  get loginFormInstance(): any {
    return this.loginForm.controls;
  }
}
