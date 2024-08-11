import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  httpClient = inject(HttpClient);
  router = inject(Router); 

  API_URL = "http://localhost:3000";

  createMessage(messageSubmitted: any){
    return this.httpClient.post(this.API_URL + "/contact", messageSubmitted);
  }

}
