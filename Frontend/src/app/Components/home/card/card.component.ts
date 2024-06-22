import { Component, input, Output } from '@angular/core';
import { Ripple, initTWE } from "tw-elements";
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { NgFor } from '@angular/common';

initTWE({ Ripple });

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  toastrService = inject(ToastrService);

  watchLaterArray: any[] = [];
  $element1 = document.getElementById('element1')
  $emptyField: HTMLElement | null = document.getElementById('emptyField');

 @Output() handleClick(link: string, title: string) {
    console.log("click test");
    console.log(link);
    console.log(title);
    this.watchLaterArray.push({ link, title });
    console.log(this.watchLaterArray);
    this.toastrService.success("Added to your list")
  }
  
}







