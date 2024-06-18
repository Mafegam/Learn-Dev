import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { SidebarComponent } from '../home/sidebar/sidebar.component';
import { PostComponent } from './post/post.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, PostComponent, NavbarComponent, NavbarComponent, SidebarComponent,FooterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
