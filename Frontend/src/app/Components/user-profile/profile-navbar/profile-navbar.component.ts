import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { LoginService } from '../../../Services/login.service';


@Component({
  selector: 'app-profile-navbar',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatRippleModule],
  templateUrl: './profile-navbar.component.html',
  styleUrl: './profile-navbar.component.css'
})
export class ProfileNavbarComponent {
// COLOR RIPPLE
color: string = "#38bff856"
  
loginService = inject(LoginService);


}
