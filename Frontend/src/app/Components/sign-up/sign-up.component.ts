import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validator, FormGroupName, Validators } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { ToastrService } from 'ngx-toastr';
import { SignUpCredentials } from '../../Interfaces/sign-up-credentials';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  router = inject(Router);
  loginService: LoginService = inject(LoginService);
  toastrService = inject(ToastrService);

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
              this.toastrService.success("User created. Please Sign In!")
            } else {
              this.toastrService.error("User no creado")
            }
          });
        } else {
          this.toastrService.warning("Password doesn't match")
        }
      }
    } else {
      this.toastrService.warning("Please fill all fields")
    }
  }
}
