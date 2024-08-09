import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RouterLink } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { LoginService } from '../../../Services/login.service';

import { WatchLaterService } from '../../../Services/watch-later.service';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, MatSidenavModule, CardComponent, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  loginService = inject(LoginService);
  watchLaterService = inject(WatchLaterService);
  toastrService = inject(ToastrService);
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
    const list = { title, link, status }
    this.toastrService.success("Added to your list")

    this.watchLaterService.addToList(list).subscribe(() => {
      console.log();
    })
  }
}
