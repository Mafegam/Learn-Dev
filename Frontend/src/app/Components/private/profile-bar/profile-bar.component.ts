import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { LoginService } from '../../../Services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import {
  Modal,
  Ripple,
  initTWE,
} from "tw-elements";

initTWE({ Modal, Ripple });

@Component({
  selector: 'app-profile-bar',
  standalone: true,
  imports: [],
  templateUrl: './profile-bar.component.html',
  styleUrl: './profile-bar.component.css'
})
export class ProfileBarComponent {
  
  loginService = inject(LoginService)
  user: any[] = [];
  username: string = "";
  toastrService = inject(ToastrService);
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

  handleDelete(userID: string) {
    const decision = confirm("Click ACCEPT to confirm")

    if (decision) {
      this.loginService.deleteUser(userID).subscribe((respuesta: any) => {
        if (respuesta.resultado === 'Exitoso') {
          this.toastrService.success("Account deleted");
          this.loginService.logout();
          this.router.navigateByUrl("/")
          
        } else {
          this.toastrService.error('An error ocurred');
          console.log(respuesta);
        }
      });
    } else {
      
    }
  }

  handleClick() {
    console.log('Button clicked!');
  }

  
}

