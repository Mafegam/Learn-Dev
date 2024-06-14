import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyHomeComponent } from './Components/body-home/body-home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { CardComponent } from './Components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BodyHomeComponent, NavbarComponent, SidebarComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learn_Dev';
}
