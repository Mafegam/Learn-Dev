import { Component, input, Output } from '@angular/core';
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

  watchLaterArray: any[] = [];
  $element1 = document.getElementById('element1')
  $emptyField: HTMLElement | null = document.getElementById('emptyField');

  

  
  addToList(link: string, title: string) {
    console.log("click test");
    console.log(link);
    console.log(title);
    this.watchLaterArray.push({ link, title });
    console.log(this.watchLaterArray);
    this.toastrService.success("Added to your list")
  }

  isLogedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

 
}






