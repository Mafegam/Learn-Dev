import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor() { }

  httpClient = inject(HttpClient)

  API_URL1 = "https://dog.ceo/api/breeds/image/random"

  API_URL2 = "https://dogapi.dog/api/v2/facts"

  getImage() { 
    return this.httpClient.get(this.API_URL1)
  }

  getFact(){
    return this.httpClient.get(this.API_URL2)
  }
}
