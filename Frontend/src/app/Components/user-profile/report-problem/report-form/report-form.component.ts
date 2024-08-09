import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../../../Services/contact.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-report-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './report-form.component.html',
  styleUrl: './report-form.component.css'
})
export class ReportFormComponent {
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
