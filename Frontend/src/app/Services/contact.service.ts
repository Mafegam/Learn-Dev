import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  httpClient = inject(HttpClient);
  router = inject(Router); 

  API_URL = "http://3.140.246.28:3000";

  createMessage(messageSubmitted: any){
    this.router.navigate(["/thanks"])
    return this.httpClient.post(this.API_URL + "/contact", messageSubmitted);
  }

}
