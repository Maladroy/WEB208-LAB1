import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  role: string;

  constructor(
    private authService: AuthService,
  ) {

  }

  ngOnInit() {
    this.role = this.authService.getAuthenticatedUserRole() as string
  }
}