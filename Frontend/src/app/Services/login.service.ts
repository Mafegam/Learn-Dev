import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Credentials } from '../Interfaces/credentials';
import { SignUpCredentials } from '../Interfaces/sign-up-credentials';
import { UpdatePasswordCredentials } from '../Interfaces/updatePassword-credentials';
import { DeleteCredentials } from '../Interfaces/delete-credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  httpClient = inject(HttpClient);
  API_URL = "http://3.140.246.28:3000";
  router = inject(Router);

  // INICIO DE SESION
  login(credentials: Credentials) {
    return this.httpClient.post(this.API_URL + "/login", credentials);
  }
  // CRECION DE USUARIO
  signup(signUpCredentials: SignUpCredentials) {
    return this.httpClient.post(this.API_URL + "/users", signUpCredentials);
  }
  // LEER USER
  readUser(localID: string) {
    return this.httpClient.get(`${this.API_URL}/users/${localID}`)
  }

  //  LEER TODOS USERS
  retrieveUsers() {
    return this.httpClient.get(this.API_URL + "/users")
  }

  // VERIFICA EL TOKEN GENERADO
  verifyToken(token: string) {
    return this.httpClient.get(`${this.API_URL}/login/${token}`);
  }
  // ACTUALIZA EL PASSWORD
  updatePassword(credentials: Credentials, userID: string) {
    return this.httpClient.put(`${this.API_URL}/users/${userID}`, credentials);
  }
  // ESTA LOGUEADO
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

  // CERRAR SESION
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/"])
  }


}