import { Component } from '@angular/core';
import { NavbarComponent } from '../../home/navbar/navbar.component';
import { SidebarComponent } from '../../home/sidebar/sidebar.component';
import { FooterComponent } from '../../home/footer/footer.component';


@Component({
  selector: 'app-html-elements',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, FooterComponent],
  templateUrl: './html-elements.component.html',
  styleUrl: './html-elements.component.css'
})
export class HtmlElementsComponent {

}
