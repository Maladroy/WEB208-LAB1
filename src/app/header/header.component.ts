import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logo = "../../assets/logo.png"
  role = 'employee'

  constructor(
    private authService: AuthService,
  ) {
    this.role = this.authService.getAuthenticatedUserRole() as string
  }


  logout() {
    this.authService.logout()
  }
}
