import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileNavbarComponent } from '../profile-navbar/profile-navbar.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { RouterLink } from '@angular/router';

import { LoginService } from '../../../Services/login.service';


@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [ProfileNavbarComponent, EditFormComponent, RouterLink],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  loginService = inject(LoginService)
  user: any[] = [];
  username: string = "";
  router = inject(Router);
  userID: string = "";
  usernameLower: string = "";

  ngOnInit() {
    const token: any = localStorage.getItem("token")
    if (token) {
      this.loginService.verifyToken(token).subscribe((response: any) => {
        if (response.resultado === "Successful") {
          this.username = response.data.username;
          this.userID = response.data.id;
          this.usernameLower = response.data.username;
          this.username = this.usernameLower[0].toUpperCase() + this.usernameLower.slice(1);

        } else {
          this.loginService.logout();
        }
      });
    } else {
      this.loginService.logout();
    }
  }

  logout(){
    this.loginService.logout()
  }
}
