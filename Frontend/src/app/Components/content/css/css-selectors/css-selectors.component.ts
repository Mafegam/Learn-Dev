import { Component } from '@angular/core';
import { NavbarComponent } from '../../../home/navbar/navbar.component';
import { FooterComponent } from '../../../home/footer/footer.component';
import { SidebarComponent } from '../../../home/sidebar/sidebar.component';
import { AddToListBtnComponent

 } from '../../add-to-list-btn/add-to-list-btn.component';
@Component({
  selector: 'app-css-selectors',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, SidebarComponent, AddToListBtnComponent],
  templateUrl: './css-selectors.component.html',
  styleUrl: './css-selectors.component.css'
})
export class CssSelectorsComponent {

}
