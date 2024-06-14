import { Routes } from '@angular/router';
import { BodyHomeComponent } from './Components/body-home/body-home.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
    { path: 'home', title: "Home", component: BodyHomeComponent },
    { path: 'login', title: "Login", component: LoginComponent },
    { path: '', redirectTo: "home", pathMatch: "full" },
];
