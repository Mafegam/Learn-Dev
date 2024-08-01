import { Component } from '@angular/core';
import { WatchLaterService } from '../../../Services/watch-later.service';
import { inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-watch-later',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './watch-later.component.html',
  styleUrl: './watch-later.component.css'
})
export class WatchLaterComponent {
  router = inject(Router);
  watchLaterService = inject(WatchLaterService)

  retrievedList: any[] = [];
  tutorialID: string = ""

  retrieveList() {
    this.watchLaterService.retrieveList().subscribe((respuesta: any) => {
      console.log("Respuesta de retrieve list:", respuesta);
      if (respuesta) {
        console.log("Hay respuesta");
        this.retrievedList = respuesta.datos
        this.tutorialID = respuesta.datos._id
      } else {
        console.log("Errpr 404, no hay respuesta");
      }
    })
  }

  removeTutorial(tutorialID: string) {
    
    this.watchLaterService.removeTutorial(tutorialID).subscribe((respuesta: any) => {
      if (respuesta) {
        console.log("Tutorial: ", tutorialID);
        this.ngOnInit();
      } else {
        console.log("Error eliminando tutorial");
      }
    })
  }

  ngOnInit(){
    this.retrieveList();
    console.log("Tut id", this.tutorialID);
  }
}
