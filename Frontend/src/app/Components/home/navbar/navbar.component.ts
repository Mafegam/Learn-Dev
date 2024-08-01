import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

import { LoginService } from '../../../Services/login.service';
import { WatchLaterService } from '../../../Services/watch-later.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  loginService = inject(LoginService);
  watchLaterService = inject(WatchLaterService);

  retrievedList: any[] = [];

  retrieveList() {
    this.watchLaterService.retrieveList().subscribe((respuesta: any) => {
      if (respuesta) {
        this.retrievedList = respuesta.datos
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

  ngOnInit(){
    this.retrieveList();
  }


}
