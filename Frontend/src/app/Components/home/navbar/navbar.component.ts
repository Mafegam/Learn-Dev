import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

import { LoginService } from '../../../Services/login.service';
import { WatchLaterService } from '../../../Services/watch-later.service';

import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, MatBadgeModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  loginService = inject(LoginService);
  watchLaterService = inject(WatchLaterService);

  retrievedList: any[] = [];
  numberOfItems: number = 0

  retrieveList() {
    this.watchLaterService.retrieveList().subscribe((respuesta: any) => {
      if (respuesta) {
        this.retrievedList = respuesta.datos
        this.numberOfItems = this.retrievedList.length
        this.ngOnInit();
      } else {
        console.log(Error);
      }
    })
  }

  removeTutorial(tutorialID: string) {

    this.watchLaterService.removeTutorial(tutorialID).subscribe((respuesta: any) => {
      if (respuesta) {
        this.ngOnInit();
      } else {
        console.log("Error eliminando tutorial");
      }
    })
  }

  ngOnInit() {
    this.retrieveList();
  }


}
