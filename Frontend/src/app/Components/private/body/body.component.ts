import { Component, Input } from '@angular/core';
import { inject } from '@angular/core';
import { NgFor } from '@angular/common';

import { LoginService } from '../../../Services/login.service';
import { CardComponent } from '../../home/card/card.component';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgFor, CardComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  loginService = inject(LoginService)
  username: string = "";

  @Input() watchLaterArray: any[] = []; 

  



}
