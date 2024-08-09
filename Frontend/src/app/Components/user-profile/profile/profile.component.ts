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

  // DELETE ACCT
  // handleDelete(userID: string) {
  //   const decision = confirm("Click ACCEPT to confirm")

  //   if (decision) {
  //     this.loginService.deleteUser(userID).subscribe((respuesta: any) => {
  //       if (respuesta.resultado === 'Exitoso') {
  //         this.toastrService.success("Account deleted");
  //         this.loginService.logout();
  //         this.router.navigateByUrl("/")
          
  //       } else {
  //         this.toastrService.error('An error ocurred');
  //         console.log(respuesta);
  //       }
  //     });
  //   } else {
      
  //   }
  // }

}
