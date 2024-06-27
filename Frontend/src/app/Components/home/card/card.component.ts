import { Component, input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ripple, initTWE } from "tw-elements";
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { LoginService } from '../../../Services/login.service';
import { BodyComponent } from '../../private/body/body.component';

initTWE({ Ripple });

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, NgFor, BodyComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  loginService = inject(LoginService);
  toastrService = inject(ToastrService);
  httpClient = inject(HttpClient);

  // watchLaterList: any[] = [];
  $element1 = document.getElementById('element1')
  $emptyField: HTMLElement | null = document.getElementById('emptyField');
  userID: string = "";
  API_URL = "http://localhost:3000";

  isLogedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    const token: any = localStorage.getItem("token")
    if (token) {
      this.loginService.verifyToken(token).subscribe((response: any) => {
        if (response.resultado === "Successful") {
          this.userID = response.data.id;
        } else {
          this.loginService.logout();
        }
      });
    } else {
      this.loginService.logout();
    }
  }

  // addToList(link: string, title: string) {
  //   console.log(this.userID);
  //   this.watchLaterList.push({ link, title });
  //   console.log(this.watchLaterList);
  //   this.toastrService.success("Added to your list")

  //   const payload = {watchLaterList: [this.watchLaterList]};
  //   console.log("Payload: " ,payload);

  //   this.httpClient.put(`http://localhost:3000/users/${this.userID}`, payload).subscribe((respuesta: any) => {
  //     console.log("Respuesta: ", respuesta);
  //   });

  // };
}






