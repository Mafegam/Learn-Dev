import { Component, inject } from '@angular/core';
import { WatchLaterService } from '../../../Services/watch-later.service';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-to-list-btn',
  standalone: true,
  imports: [MatSnackBarModule],
  templateUrl: './add-to-list-btn.component.html',
  styleUrl: './add-to-list-btn.component.css'
})
export class AddToListBtnComponent {
  watchLaterService = inject(WatchLaterService);
  snackBar = inject(MatSnackBar)

  // addToList(title: string, link: string, status: boolean) {
  //   const list = { title, link, status }

  //   this.watchLaterService.addToList(list).subscribe(() => {
  //     this.snackBar.open('Added to your list', 'Close', {
  //       duration: 4000,
  //       verticalPosition: 'top',
  //       horizontalPosition: 'center',
  //       panelClass: ['red-snackbar', 'login-snackbar'],
  //     });
  //   })
  // }

  addToList(title: string, link: string, status: boolean) {
    this.watchLaterService.alreadyExists(link).subscribe((respuesta: any) => {
      if (respuesta.resultado === "Successful") {
        this.snackBar.open('This link is already in your list', 'Close', {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['red-snackbar', 'login-snackbar'],
        });
      } else {
        const list = { title, link, status }

        this.watchLaterService.addToList(list).subscribe(() => {
          this.snackBar.open('Added to your list', 'Close', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['red-snackbar', 'login-snackbar'],
          });
        })
      }
    })
  }
}
