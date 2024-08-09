import { Component } from '@angular/core';
import { NavbarComponent } from '../../home/navbar/navbar.component';
import { EditFormComponent } from '../edit-form/edit-form.component';

import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [NavbarComponent, EditFormComponent, RouterLink],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
 
}
