import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/services/project.service';
import { AuthService } from 'src/services/auth.service';
import jwt_decode from 'jwt-decode';
import * as uuid from 'uuid';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private projectService: ProjectService,
    private authService: AuthService) {


  }

  ngOnInit(): void {
    const user = jwt_decode(this.authService.getToken()) as {
      role: string,
      id: string,
      username: string
    }

    this.projectForm = this.fb.group({
      _id: [uuid.v4()],
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      status: ['', Validators.required],
      teamLeaderID: [user.id],
      tasks: [[]]

    });
  }

  onSubmit(): void {
    if (this.projectForm.valid && confirm("Confirm creating task")) {
      this.projectService.createProject(this.projectForm.value).subscribe(() => {
        this.router.navigate(['/team-leader']);
      });
    }
    else {
      // Mark all fields as touched to trigger validation messages
      this.projectForm.markAllAsTouched();
    }
  }
  get f() { return this.projectForm.controls; }
}
