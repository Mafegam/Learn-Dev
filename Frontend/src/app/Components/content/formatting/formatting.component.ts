import { Component } from '@angular/core';
import { NavbarComponent } from '../../home/navbar/navbar.component';
import { SidebarComponent } from '../../home/sidebar/sidebar.component';
import { FooterComponent } from '../../home/footer/footer.component';

@Component({
  selector: 'app-formatting',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, FooterComponent],
  templateUrl: './formatting.component.html',
  styleUrl: './formatting.component.css'
})
export class FormattingComponent {

}
