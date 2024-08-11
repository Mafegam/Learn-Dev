import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { inject } from '@angular/core';
import { LoginService } from '../../../Services/login.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../../home/navbar/navbar.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NavbarComponent, WatchLaterComponent,
    MatRippleModule, RouterLink
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
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
