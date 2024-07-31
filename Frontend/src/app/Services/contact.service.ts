import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  httpClient = inject(HttpClient);

  API_URL = "http://localhost:3000";
  // router = inject(Router); activar DESPUES de crear la pagina de redireccionamiento del contactus

  createMessage(messageSubmitted: any){
    return this.httpClient.post(this.API_URL + "/contact", messageSubmitted)
  }

}
