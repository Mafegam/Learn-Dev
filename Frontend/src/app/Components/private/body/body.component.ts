import { Component, Input } from '@angular/core';
import { inject } from '@angular/core';
import { LoginService } from '../../../Services/login.service';
import { CardComponent } from '../../home/card/card.component';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  loginService = inject(LoginService)
  username: string = "";

  // ngOnInit() {
  //   const token: any = localStorage.getItem("token")
  //   if (token) {
  //     this.loginService.verifyToken(token).subscribe((response: any) => {
  //       if (response.resultado === "Successful") {
  //         this.username = response.data.username;
  //       } else {
  //         this.loginService.logout();
  //       }
  //     });
  //   } else {
  //     this.loginService.logout();
  //   }
  // }
}
