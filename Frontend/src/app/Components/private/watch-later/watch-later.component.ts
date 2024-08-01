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
      if (respuesta) {
        this.retrievedList = respuesta.datos
        this.tutorialID = respuesta.datos._id
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

  removeAll(retrievedList: any) {
    this.watchLaterService.removeAllTutorials(retrievedList).subscribe((respuesta: any) => {
      if (respuesta) {
        this.ngOnInit();
      } else {
        console.log("Error eliminando todos");
      }
    })
  }

  ngOnInit(){
    this.retrieveList();
  }
}
