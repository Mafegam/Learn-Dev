import { Component } from '@angular/core';
import { NavbarComponent } from '../../home/navbar/navbar.component';
import { SidebarComponent } from '../../home/sidebar/sidebar.component';
import { FooterComponent } from '../../home/footer/footer.component';
import { AddToListBtnComponent } from '../add-to-list-btn/add-to-list-btn.component';

@Component({
  selector: 'app-html-elements',
  standalone: true,
  imports: [AddToListBtnComponent, NavbarComponent, SidebarComponent, FooterComponent],
  templateUrl: './html-elements.component.html',
  styleUrl: './html-elements.component.css'
})
export class HtmlElementsComponent {

}
