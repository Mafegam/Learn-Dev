import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validator, FormGroupName, Validators } from '@angular/forms';
import { Credentials } from '../../Interfaces/credentials';
import { LoginService } from '../../Services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  router = inject(Router);
  loginService: LoginService = inject(LoginService);
  toastrService = inject(ToastrService);

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
        };
        this.loginService.login(credentials).subscribe((response: any) => {
          if (response.resultado === "Successful") {
            localStorage.setItem('token', response.data.token)
            this.router.navigateByUrl("/private")
          } else {
            this.toastrService.warning("Invalid credentials")
          }
        });
      }
    } else {
      this.toastrService.warning("Please fill all fields")
    }
  }
}
