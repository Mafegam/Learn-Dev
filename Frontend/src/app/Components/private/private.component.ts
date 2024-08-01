import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';
import { FooterComponent } from '../home/footer/footer.component';
// import { BodyComponent } from './body/body.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';


@Component({
  selector: 'app-private',
  standalone: true,
  imports: [NavbarComponent, ProfileBarComponent, WatchLaterComponent, FooterComponent],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent {
  
}
