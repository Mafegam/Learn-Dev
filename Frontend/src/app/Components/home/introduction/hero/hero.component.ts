import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, MatRippleModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  color: string = "#38bff856"

}
