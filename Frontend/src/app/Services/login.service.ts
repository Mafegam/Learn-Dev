import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Credentials } from '../Interfaces/credentials';
import { SignUpCredentials } from '../Interfaces/sign-up-credentials';
import { UpdatePasswordCredentials } from '../Interfaces/updatePassword-credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  httpClient = inject(HttpClient);
  API_URL = "http://3.14.1.48:3000";
  router = inject(Router);

  // MANEJA EL INICIO DE SESION
  login(credentials: Credentials) {
    return this.httpClient.post(this.API_URL + "/login", credentials);
  }
  // MANEJA LA CRECION DE USUARIO
  signup(signUpCredentials: SignUpCredentials) {
    return this.httpClient.post(this.API_URL + "/users", signUpCredentials);
  }
  // VERIFICA EL TOKEN GENERADO
  verifyToken(token: string) {
    return this.httpClient.get(`${this.API_URL}/login/${token}`);
  }
  // ACTUALIZA EL PASSWORD
  updatePassword(credentials: Credentials, userID: string){
    return this.httpClient.put(`${this.API_URL}/users/${userID}`, credentials);

  }
  // VERIFICA QUE EL USUARIO ESTE LOGUEADO
  isLogedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  // DELETE ACCT
  deleteUser(userID: string) {
    return this.httpClient.delete(`${this.API_URL}/users/${userID}`);
  }

  // PARA CERRAR SESION
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/"])
  }
}