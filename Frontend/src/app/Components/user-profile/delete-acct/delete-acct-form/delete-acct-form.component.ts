import { Component } from '@angular/core';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge, Subscriber } from 'rxjs';
import { DeleteCredentials } from '../../../../Interfaces/delete-credentials';

import { inject } from '@angular/core';
import { LoginService } from '../../../../Services/login.service';
import { Router } from '@angular/router';

import { Credentials } from '../../../../Interfaces/credentials';
import { __classPrivateFieldGet } from 'tslib';

@Component({
  selector: 'app-delete-acct-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgFor, RouterLink, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './delete-acct-form.component.html',
  styleUrl: './delete-acct-form.component.css'
})
export class DeleteAcctFormComponent {
  loginService = inject(LoginService)
  router = inject(Router);
  localID: string = "";

  retrievedEmail: string = ""
  retrievedPassword: string = ""

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
            if(decision) {
              this.loginService.deleteUser(this.localID).subscribe((respuesta: any) => {
                console.log("Eliminada");
                this.loginService.logout();
                this.router.navigateByUrl("/")
              })
            }
          } else {
            console.log("Invalid credentials")
          }
        });

      } else {
        console.log("Form invalid");
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