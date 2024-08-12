import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WatchLaterService {
  httpClient = inject(HttpClient);

  API_URL = "http://localhost:3000";

  allTutorials: any[] = [];


  addToList(list: any): Observable<any> {
    return this.httpClient.post(this.API_URL + "/watchLater", list)
  }

  retrieveList() {
    return this.httpClient.get(this.API_URL + "/watchLater")
  }

  removeTutorial(tutorialID: string) {
    return this.httpClient.delete(`${this.API_URL}/watchLater/${tutorialID}`)
  }

  removeAllTutorials(allTutorials: any){
    return this.httpClient.delete(this.API_URL + "/watchLater")  
  }

  alreadyExists($link: string) {
    return this.httpClient.get(`${this.API_URL}/watchLater/exists?link=${$link}`);
  }
}


