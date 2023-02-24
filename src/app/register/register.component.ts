import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // const role = this.authService.getAuthenticatedUserRole();
  }

  onSubmit() {
    const username: string = this.registerForm.get('username')?.value;
    const password: string = this.registerForm.get('password')?.value;

    this.authService.register(username, password)
      .subscribe(
        () => {
          this.router.navigate(['/']);
        }
      );

  }

  get f() { return this.registerForm.controls; }

}
