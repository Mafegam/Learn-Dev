import { Component } from '@angular/core';
import { WatchLaterService } from '../../../../Services/watch-later.service';
import { inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-watch-later',
  standalone: true,
  imports: [RouterLink, CdkDropList, CdkDrag, CdkDragPlaceholder],
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

  ngOnInit() {
    this.retrieveList();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.retrievedList, event.previousIndex, event.currentIndex);
  }
}
