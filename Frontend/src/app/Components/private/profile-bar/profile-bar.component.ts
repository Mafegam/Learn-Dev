import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { LoginService } from '../../../Services/login.service';

@Component({
  selector: 'app-profile-bar',
  standalone: true,
  imports: [],
  templateUrl: './profile-bar.component.html',
  styleUrl: './profile-bar.component.css'
})
export class ProfileBarComponent {
  loginService = inject(LoginService)

  username: string = "";
  ngOnInit() {
    const token: any = localStorage.getItem("token")
    console.log(token);
    if (token) {
      this.loginService.verifyToken(token).subscribe((response: any) => {
        console.log(response);
        if (response.resultado === "Successful") {
          this.username = response.data.username;
        } else {
          this.loginService.logout();
        }
      });
    } else {
      this.loginService.logout();
    }
  }


}

