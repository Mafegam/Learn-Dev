import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  httpClient = inject(HttpClient);
  router = inject(Router);

  API_URL = "http://localhost:3000";

  createComment(commentSubmitted: any) {
    return this.httpClient.post(this.API_URL + "/comment", commentSubmitted);
  }

  retrieveComments() {
    return this.httpClient.get(this.API_URL + "/comment")
  }

  removeComment(commentID: string) {
    return this.httpClient.delete(`${this.API_URL}/comment/${commentID}`)
  }

}
