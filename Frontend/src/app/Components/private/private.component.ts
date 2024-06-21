import { Component, inject } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';
import { FooterComponent } from '../home/footer/footer.component';
import { BodyComponent } from './body/body.component';


@Component({
  selector: 'app-private',
  standalone: true,
  imports: [NavbarComponent, ProfileBarComponent, FooterComponent, BodyComponent],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent {
  
}
