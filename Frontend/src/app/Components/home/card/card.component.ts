import { Component, input } from '@angular/core';
import {Ripple,initTWE} from "tw-elements";

initTWE({ Ripple });

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
