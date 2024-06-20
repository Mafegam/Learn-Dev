import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Credentials } from '../Interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  httpClient = inject(HttpClient);
  API_URL = "http://localhost:3000/login/";
  router = inject(Router);

  // MANEJA EL INICIO DE SESION
  login(credentials: Credentials) {
    return this.httpClient.post(this.API_URL, credentials);
  }
  // VERIFICA EL TOKEN GENERADO
  verifyToken(token: string) {
    return this.httpClient.get(`${this.API_URL}/${token}`);
  }
  // VERIFICA QUE EL USUARIO ESTE LOGUEADO
  isLogedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  // PARA CERRAR SESION
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/"])
  }
}