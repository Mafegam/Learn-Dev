import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Credentials } from '../Interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class ContentManagerService {

  constructor() { }
  httpClient = inject(HttpClient);

  API_URL ='http://3000/contentManager';

  // addContent(
  //   title: string,
  //   content: any,
  //   icon: File,
  //   added: any
  // ){
  //   const formData = new FormData(){

  //   }
  // }

}
