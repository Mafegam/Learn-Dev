import { Component } from '@angular/core';
import { NavbarComponent } from '../../../home/navbar/navbar.component';
import { FooterComponent } from '../../../home/footer/footer.component';
import { SidebarComponent } from '../../../home/sidebar/sidebar.component';
import { BoredComponent } from '../../../bored/bored.component';

@Component({
  selector: 'app-css-basics',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, BoredComponent, FooterComponent],
  templateUrl: './css-basics.component.html',
  styleUrl: './css-basics.component.css'
})
export class CssBasicsComponent {

}
