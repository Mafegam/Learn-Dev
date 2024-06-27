import { Component } from '@angular/core';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { SidebarComponent } from '../home/sidebar/sidebar.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, FooterComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
