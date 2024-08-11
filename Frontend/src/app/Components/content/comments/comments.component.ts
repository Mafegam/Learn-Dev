import { Component, inject } from '@angular/core';
import { RouterLink, Router, ChildActivationEnd } from '@angular/router';
import { NgIf } from '@angular/common';

import { ReactiveFormsModule, FormControl, FormGroup, Validator, FormGroupName, Validators } from '@angular/forms';

import { CommentService } from '../../../Services/comment.service';
import { LoginService } from '../../../Services/login.service';


@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
  template: `
  <button class="inline-flex items-center ">
    <svg class="delete-btn" height="18px" width="18px" version="1.1" id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 330 330" xml:space="preserve" stroke="#e6e6e6">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="XMLID_6_">
                                    <g id="XMLID_11_">
                                        <path
                                            d="M240,121.076H30V275c0,8.284,6.716,15,15,15h60h37.596c19.246,24.348,49.031,40,82.404,40c57.897,0,105-47.103,105-105 C330,172.195,290.816,128.377,240,121.076z M225,300c-41.355,0-75-33.645-75-75s33.645-75,75-75s75,33.645,75,75 S266.355,300,225,300z">
                                        </path>
                                    </g>
                                    <g id="XMLID_18_">
                                        <path
                                            d="M240,90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15v45H45 H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15H240z M90,30h90v30h-15h-60H90V30z">
                                        </path>
                                    </g>
                                    <g id="XMLID_23_">
                                        <path
                                            d="M256.819,193.181c-5.857-5.858-15.355-5.858-21.213,0L225,203.787l-10.606-10.606c-5.857-5.858-15.355-5.858-21.213,0 c-5.858,5.858-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.858-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394L225,246.213l10.606,10.606 c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.465,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L246.213,225 l10.606-10.606C262.678,208.535,262.678,199.039,256.819,193.181z">
                                        </path>
                                    </g>
                                </g>
                            </g>
    </svg>
  </button>`
})
export class CommentsComponent {
  commentService = inject(CommentService)
  loginService = inject(LoginService)
  router = inject(Router)

  //COMMENTS EN BASDE DE DATOS
  retrievedComments: any[] = [];
  retrievedEmails: string[] = [];
  retrievedDate: string[] = [];

  // DATOS DEL USER LOGUEADO
  retrievedUsername: string = '';
  retrievedMail: string = '';
  localID: string = '';
  currentDate: string | null = null;

  emailMatch: boolean = true;

  //FORMATO COMMENT NUEVO
  newComment = new FormGroup({
    comment: new FormControl('', Validators.required),
  })

  handleSubmit() {
    // ENVIAR COMMENT
    if (this.newComment) {
      const comment = this.newComment.value.comment;
      const username = this.retrievedUsername;
      const email = this.retrievedMail;
      // DATE
      const date = new Date();
      const options = { month: 'long' } as const; // 'long' for full month name
      const monthName = date.toLocaleString('default', options);
      const day = date.getDate();
      const year = date.getFullYear();
      const formattedDate = `${monthName} ${day}, ${year}`;

      const commentSubmitted = { comment, username, email, formattedDate }

      this.commentService.createComment(commentSubmitted).subscribe()
      this.newComment.reset();

    } else {
      console.log("Form not filled!");
    }
  }

  retrieveComments() {
    this.commentService.retrieveComments().subscribe((respuesta: any) => {
      if (respuesta) {
        this.retrievedComments = respuesta.datos //RETRIEVE ALL COMMENTS
        this.retrievedEmails = this.retrievedComments.map(obj => obj.email); // RETRIEVE EMAIL ON EACH COMMENT

      } else {
        console.log("Errror fatal", Error);
      }
    })
  }

  verifyCommenter() {
    this.emailMatch = this.retrievedEmails.includes(this.retrievedMail);
  }

  removeComment(commentID: string) {
    this.commentService.removeComment(commentID).subscribe((respuesta: any) => {
      console.log("eliminado");
    })
  }

  ngOnInit() {
    // OBTENER USERNAME, EMAIL Y ID  DEL USUARIO LOGUEADO
    const token: any = localStorage.getItem("token")
    if (token) {
      this.loginService.verifyToken(token).subscribe((response: any) => {
        if (response.resultado === "Successful") {
          this.retrievedUsername = response.data.username;
          this.localID = response.data.id;
          if (this.localID) {
            this.loginService.readUser(this.localID).subscribe((respuesta: any) => {
              this.retrievedMail = respuesta.datos.email
            })
          }
        }
      })
    }

    // OBTENER COMENTARIOS
    this.retrieveComments()
  }


}







