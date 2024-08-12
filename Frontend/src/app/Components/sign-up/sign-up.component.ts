import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validator, FormGroupName, Validators } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { SignUpCredentials } from '../../Interfaces/sign-up-credentials';
import { isEmpty } from 'rxjs';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  router = inject(Router);
  loginService: LoginService = inject(LoginService);
  snackBar = inject(MatSnackBar)

  newCredentials = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  handleSubmit() {
    if (this.newCredentials.valid) {
      console.log("Se guardaron las credenciales");
      const username = this.newCredentials.value.username;
      const password = this.newCredentials.value.password;
      const confirmPassword = this.newCredentials.value.confirmPassword;
      const email = this.newCredentials.value.email;

      if (typeof username === "string" && typeof email === "string" && typeof password === "string" && typeof confirmPassword === "string" /*&& typeof watchLaterList == "undefined"*/) {
        if (password === confirmPassword) {
          const signUpCredentials: SignUpCredentials = {
            username: username,
            password: password,
            confirmPassword: confirmPassword,
            email: email,
          };
          console.log("Datos recibidos: ", signUpCredentials);
          this.loginService.signup(signUpCredentials).subscribe((respuesta: any) => {
            if (signUpCredentials != null) {
              console.log("Success!");
              this.router.navigateByUrl("/profile")
              this.snackBar.open('User created, please log in!!', 'Close', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['red-snackbar', 'login-snackbar'],
              });
            } 
          });
        } else {
          this.snackBar.open('Password doesn`t match!', 'Close', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['red-snackbar', 'login-snackbar'],
          });
        }
      }
    } else {
      this.snackBar.open('Please fill all the fields', 'Close', {
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['red-snackbar', 'login-snackbar'],
      });
    }
  }
}
