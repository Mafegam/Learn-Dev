import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";

import { Router } from '@angular/router';

import { NavbarComponent } from '../home/navbar/navbar.component';
import { FooterComponent } from '../home/footer/footer.component';
import { ContactService } from '../../Services/contact.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, FormsModule, ReactiveFormsModule],
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
}
