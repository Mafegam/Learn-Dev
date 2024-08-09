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
  // toastrService = inject(ToastrService);
  router = inject(Router);
  userID: string = "";

  ngOnInit() {
    const token: any = localStorage.getItem("token")
    if (token) {
      this.loginService.verifyToken(token).subscribe((response: any) => {
        console.log(response);

        if (response.resultado === "Successful") {
          this.username = response.data.username;
          this.userID = response.data.id;
          console.log(this.userID);

        } else {
          this.loginService.logout();
        }
      });
    } else {
      this.loginService.logout();
    }
  }

}
