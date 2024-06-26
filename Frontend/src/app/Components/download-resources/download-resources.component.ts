import { Component } from '@angular/core';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { SidebarComponent } from '../home/sidebar/sidebar.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-download-resources',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, FooterComponent],
  templateUrl: './download-resources.component.html',
  styleUrl: './download-resources.component.css'
})
export class DownloadResourcesComponent {

}
