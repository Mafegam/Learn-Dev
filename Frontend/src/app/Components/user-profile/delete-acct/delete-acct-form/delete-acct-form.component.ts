import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';

import { LoginService } from '../../../../Services/login.service';
import { Credentials } from '../../../../Interfaces/credentials';

import { __classPrivateFieldGet } from 'tslib';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-acct-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgFor, RouterLink, ReactiveFormsModule, MatSnackBarModule
  ],

  templateUrl: './delete-acct-form.component.html',
  styleUrl: './delete-acct-form.component.css'
})
export class DeleteAcctFormComponent {

  loginService = inject(LoginService)
  router = inject(Router);
  toastr = inject(ToastrService)
  snackBar = inject(MatSnackBar)

  retrievedEmail: string = ""
  retrievedPassword: string = ""
  localID: string = "";

  deleteForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })


  retrieveUser() {
    this.loginService.readUser(this.localID).subscribe((respuesta: any) => {
      this.retrievedEmail = respuesta.datos.email
      this.retrievedPassword = respuesta.datos.password
    })

  }

  deleteUser() {
    if (this.deleteForm.valid) {
      const email = this.deleteForm.value.email
      const password = this.deleteForm.value.password
      if (typeof password === "string" && typeof email === "string") {
        const credentials: Credentials = {
          email: email,
          password: password,
          currentPassword: '',
          confirmPassword: ''
        };
        this.loginService.login(credentials).subscribe((respuesta: any) => {
          if (respuesta.resultado === "Successful") {
            const decision = confirm("Click ACCEPT to confirm")
            if (decision) {
              this.loginService.deleteUser(this.localID).subscribe((respuesta: any) => {
                console.log("Eliminada");
                this.loginService.logout();
                this.router.navigateByUrl("/")
              })
            }
          } else {
            this.snackBar.open('Invalid credentials!', 'Close', {
              duration: 4000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
              panelClass: ['red-snackbar','login-snackbar'],
            });
          }
        });

      }
    }

  }

  ngOnInit() {
    const token: any = localStorage.getItem("token")
    if (token) {
      this.loginService.verifyToken(token).subscribe((response: any) => {
        if (response.resultado === "Successful") {
          this.localID = response.data.id;
          this.retrieveUser()
        } else {
          this.loginService.logout();
        }
      });
    } else {
      this.loginService.logout();
    }
  }
}