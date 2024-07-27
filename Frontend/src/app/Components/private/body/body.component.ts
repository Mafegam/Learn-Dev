import { Component, Input } from '@angular/core';
import { inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validator, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { LoginService } from '../../../Services/login.service';
import { CardComponent } from '../../home/card/card.component';
import { Credentials } from '../../../Interfaces/credentials';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgFor, CardComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  loginService = inject(LoginService)
  username: string = "";
  router = inject(Router);
  user: any[] = [];
  toastrService = inject(ToastrService);
  userID: string = "";
  retrievedEmail: string = "";


  ngOnInit() {
    const token: any = localStorage.getItem("token")
    if (token) {
      this.loginService.verifyToken(token).subscribe((response: any) => {
        console.log(response);

        if (response.resultado === "Successful") {
          this.username = response.data.username;
          this.userID = response.data.id;
          this.retrievedEmail = response.data.email;
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
    const decision = confirm("Want to delete?")

    if (decision) {
      this.loginService.deleteUser(userID).subscribe((respuesta: any) => {
        if (respuesta.resultado === 'Exitoso') {
          this.toastrService.success("Account deleted");
          this.loginService.logout();
          this.router.navigateByUrl("/introduction")
          
        } else {
          this.toastrService.error('An error ocurred');
          console.log(respuesta);
        }
      });
    } else {
      alert("Bye!")
    }
  }

  handleClick() {
    console.log('Button clicked!');
  }

  

  newPasswordForm = new FormGroup({
    currentPassword: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  // handleSubmit() {
  //   if (this.newPassword.valid) {
  //     const currentPassword = this.newPassword.value.currentPassword;
  //     const password = this.newPassword.value.password;
  //     const confirmPassword = this.newPassword.value.confirmPassword;

  //     console.log("Se recibieron las credenciales");
  //     if (typeof currentPassword === "string" && typeof password === "string" && typeof confirmPassword === "string") {
  //       const updatePasswordCredentials: UpdatePasswordCredentials = {
  //         currentPassword: currentPassword,
  //         password: password,
  //         confirmPassword: confirmPassword
  //       };
  //       if(password != confirmPassword){
  //         console.log("Passwords don't match");
  //       }
  //     }
  //   } else {
  //     console.log("Please fill all fields");
  //   }
  // }

  handleSubmit() {
    if (this.newPasswordForm.valid) {
      const email = this.retrievedEmail;
      const currentPassword = this.newPasswordForm.value.currentPassword;
      const password = this.newPasswordForm.value.password;
      const confirmPassword = this.newPasswordForm.value.confirmPassword;

      if (typeof currentPassword === "string" && typeof password === "string" && typeof confirmPassword === "string") {
        const credentials: Credentials = {
          email: email,
          currentPassword: currentPassword,
          password: password,
          confirmPassword: confirmPassword
        };
        if (password != confirmPassword) {
          this.toastrService.warning("Passwords don't match")
        } else {
          console.log("Vamos bien");

          this.loginService.updatePassword(credentials, this.userID).subscribe((respuesta: any) => {
            if (respuesta.resultado === "Successful") {
              console.log("Vamos excelente");
              this.toastrService.warning("Por favor inicia sesion de nuevo")

            } else {

              console.log("Respuesta", respuesta);
            }
          })
        }
      }
    } else {
      this.toastrService.warning("Please fill all fields")
    }
  }
}