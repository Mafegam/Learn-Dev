import { Component } from '@angular/core';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';

import { inject } from '@angular/core';
import { LoginService} from '../../../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-acct-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgFor, RouterLink, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './delete-acct-form.component.html',
  styleUrl: './delete-acct-form.component.css'
})
export class DeleteAcctFormComponent {
  loginService = inject(LoginService)
  router = inject(Router);


  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('Enter your old password');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  handleDelete(userID: string) {
    const decision = confirm("Click ACCEPT to confirm")

    if (decision) {
      this.loginService.deleteUser(userID).subscribe((respuesta: any) => {
        if (respuesta.resultado === 'Exitoso') {
          this.loginService.logout();
          this.router.navigateByUrl("/")
          
        } else {
          console.log(respuesta);
        }
      });
    } else {
      
    }
  }
}
