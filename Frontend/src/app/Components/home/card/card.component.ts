import { Component, input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ripple, initTWE } from "tw-elements";
import { RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { LoginService } from '../../../Services/login.service';

import { WatchLaterService } from '../../../Services/watch-later.service';
import { Title } from '@angular/platform-browser';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

initTWE({ Ripple });

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  loginService = inject(LoginService);
  watchLaterService = inject(WatchLaterService);
  snackBar = inject(MatSnackBar)
  httpClient = inject(HttpClient);

  watchLaterList: any[] = [];
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
    this.watchLaterService.alreadyExists(link).subscribe((respuesta: any) => {
      if (respuesta.resultado === "Successful") {
        this.snackBar.open('This tutorial is already in your list', 'Close', {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['red-snackbar', 'login-snackbar'],
        });
      } else {
        const list = { title, link, status }

        this.watchLaterService.addToList(list).subscribe(() => {
          this.snackBar.open('Added to your list', 'Close', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['red-snackbar', 'login-snackbar'],
          });
        })
      }
    })
  }
}




