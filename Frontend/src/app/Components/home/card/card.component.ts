import { Component, input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ripple, initTWE } from "tw-elements";
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { LoginService } from '../../../Services/login.service';
import { BodyComponent } from '../../private/body/body.component';

import { WatchLaterService } from '../../../Services/watch-later.service';
import { Title } from '@angular/platform-browser';

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
  watchLaterService = inject(WatchLaterService);
  toastrService = inject(ToastrService);
  httpClient = inject(HttpClient);

  watchLaterList: any[] = [];

  $element1 = document.getElementById('element1')
  $emptyField: HTMLElement | null = document.getElementById('emptyField');
  userID: string = "";

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

  addToList(title: string, link: string, status: boolean) {

    const list = { title, link, status }
    this.watchLaterList.push(list);
    this.toastrService.success("Added to your list")

    // const myJSON = JSON.stringify(list);
    // console.log(myJSON);

    // const tutorialAdded = {watchLaterList: this.watchLaterList};
    const tutorialAdded = this.watchLaterList;
    console.log("Payload: ", tutorialAdded);

    this.watchLaterService.addToList(list).subscribe((respuesta: any) => {
      console.log(respuesta);
    })
  }
}




