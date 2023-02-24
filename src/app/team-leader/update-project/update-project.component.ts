import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { IProject } from 'src/models/project.model';
import { AuthService } from 'src/services/auth.service';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent {
  project: IProject;
  updateForm: FormGroup;
  projectID: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private authService: AuthService) {

  }

  ngOnInit() {
    this.projectID = this.route.snapshot.paramMap.get('id') as string
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['', Validators.required],
      teamLeaderID: ['', Validators.required]
    });


    this.projectService.getProjectByID(this.projectID).subscribe((data) => {
      this.updateForm.patchValue(data);
    });
  }
  get f() { return this.updateForm.controls; }

  onSubmit() {

    // stop here if form is invalid
    if (this.updateForm.invalid) return;
    if (!confirm("Do you want to update this project?")) return

    this.projectService.updateProject(this.projectID, this.updateForm.value)
      .subscribe(() => {
        this.router.navigate(['/team-leader']);
      });
  }
}
