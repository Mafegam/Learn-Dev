import { Component } from '@angular/core';
import { NavbarComponent } from '../../home/navbar/navbar.component';
import { SidebarComponent } from '../../home/sidebar/sidebar.component';
import { FooterComponent } from '../../home/footer/footer.component';
import { AddToListBtnComponent } from '../add-to-list-btn/add-to-list-btn.component';

@Component({
  selector: 'app-formatting',
  standalone: true,
  imports: [AddToListBtnComponent, NavbarComponent, SidebarComponent, FooterComponent],
  templateUrl: './formatting.component.html',
  styleUrl: './formatting.component.css'
})
export class FormattingComponent {

}
