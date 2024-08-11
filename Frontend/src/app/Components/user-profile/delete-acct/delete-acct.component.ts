import { Component } from '@angular/core';
import { NavbarComponent } from '../../home/navbar/navbar.component';
import { DeleteAcctFormComponent } from './delete-acct-form/delete-acct-form.component';

import { RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-acct',
  standalone: true,
  imports: [NavbarComponent, DeleteAcctFormComponent, RouterLink],
  templateUrl: './delete-acct.component.html',
  styleUrl: './delete-acct.component.css'
})
export class DeleteAcctComponent {
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
