import { Component } from '@angular/core';
import { NavbarComponent } from '../../../home/navbar/navbar.component';
import { FooterComponent } from '../../../home/footer/footer.component';
import { SidebarComponent } from '../../../home/sidebar/sidebar.component';
import { BoredComponent } from '../../../bored/bored.component';
import { AddToListBtnComponent } from '../../add-to-list-btn/add-to-list-btn.component';

@Component({
  selector: 'app-css-basics',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, BoredComponent, FooterComponent, AddToListBtnComponent],
  templateUrl: './css-basics.component.html',
  styleUrl: './css-basics.component.css'
})
export class CssBasicsComponent {

}
