import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validator, FormGroupName, Validators } from '@angular/forms';
import { Credentials } from '../../Interfaces/credentials';
import { LoginService } from '../../Services/login.service';


import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  router = inject(Router);
  loginService: LoginService = inject(LoginService);
  snackBar = inject(MatSnackBar)

  credentialsForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  // Esto es para escuchar que se hace clic en boton de Submit
  handleSubmit() {
    if (this.credentialsForm.valid) {
      const email = this.credentialsForm.value.email;
      const password = this.credentialsForm.value.password;
      // Aca se asegura que los datos ingresados sean obligatoriamente strings
      //para poder basarnos en el esquema de credenciales.ts
      if (typeof password === "string" && typeof email === "string") {
        const credentials: Credentials = {
          email: email,
          password: password,
          currentPassword: '',
          confirmPassword: ''
          
        };
        this.loginService.login(credentials).subscribe((respuesta: any) => {
          if (respuesta.resultado === "Successful") {
            localStorage.setItem('token', respuesta.data.token)
            this.router.navigateByUrl("/profile")
          } else {
            this.snackBar.open('Invalid credentials', 'Close', {
              duration: 4000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
              panelClass: ['red-snackbar', 'login-snackbar'],
            });          }
        });
      }
    } else {
      this.snackBar.open('Please, fill all fields!', 'Close', {
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['red-snackbar', 'login-snackbar'],
      });    }
  }
}
