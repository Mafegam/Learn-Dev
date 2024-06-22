import { Component } from '@angular/core';
import { NavbarComponent } from '../../home/navbar/navbar.component';
import { SidebarComponent } from '../../home/sidebar/sidebar.component';
import { FooterComponent } from '../../home/footer/footer.component';

@Component({
  selector: 'app-htmlBasics',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, FooterComponent],
  templateUrl: './htmlBasics.component.html',
  styleUrl: './htmlBasics.component.css'
})
export class htmlBasicsComponent {

}
