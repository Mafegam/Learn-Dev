import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent	 } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { IntroductionComponent } from './introduction/introduction.component';

import { FooterComponent } from './footer/footer.component';
import { TransplantedType } from '@angular/compiler';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FooterComponent, RouterOutlet, NavbarComponent, IntroductionComponent, SidebarComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
