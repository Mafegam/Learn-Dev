import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";

import { Router, RouterLink } from '@angular/router';

import { NavbarComponent } from '../home/navbar/navbar.component';
import { FooterComponent } from '../home/footer/footer.component';
import { ContactService } from '../../Services/contact.service';

import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle, 
} from '@angular/material/dialog';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, FormsModule, ReactiveFormsModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  router = inject(Router);
  imgUpload: File | null = null;
  contactService: ContactService = inject(ContactService)

  newMessage = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  readonly dialog = inject(MatDialog);

  handleSubmit() {
    if (this.newMessage.valid) {
      const name = this.newMessage.value.name;
      const email = this.newMessage.value.email;
      const message = this.newMessage.value.message;

      const messageSubmitted = {
        name: name,
        email: email,
        message: message
      }

      this.contactService.createMessage(messageSubmitted).subscribe((respuesta: any) => {
        console.log("Form sent!", messageSubmitted);
      }),
        (error: any) => {
          console.log("Form not sent: ", error);
        }
    } else {
      console.log("Form not filled!");
    }
  }
  // MODAL
  openDialog() {
    this.dialog.open(Modal, { panelClass: 'mat-dialog-container'});
  }
}

// MODAL COMPONENT
@Component({
  selector: 'modal.component',
  templateUrl: 'modal.component.html',
  styleUrl: './modal.component.css',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modal {
  router = inject(Router);

}