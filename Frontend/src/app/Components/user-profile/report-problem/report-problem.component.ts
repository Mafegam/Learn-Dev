import { Component } from '@angular/core';
import { NavbarComponent } from '../../home/navbar/navbar.component';
import { ReportFormComponent } from './report-form/report-form.component';

import { inject } from '@angular/core';
import { LoginService } from '../../../Services/login.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-problem',
  standalone: true,
  imports: [ReportFormComponent, NavbarComponent, RouterLink],
  templateUrl: './report-problem.component.html',
  styleUrl: './report-problem.component.css'
})
export class ReportProblemComponent {
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
        console.log(response);

        if (response.resultado === "Successful") {
          this.usernameLower = response.data.username;
          this.username = this.usernameLower[0].toUpperCase() + this.usernameLower.slice(1);
          this.userID = response.data.id;

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
