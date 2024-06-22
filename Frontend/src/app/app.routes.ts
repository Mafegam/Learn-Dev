import { Routes } from '@angular/router';
import { activateGuard } from './Guards/activate.guard';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { htmlBasicsComponent } from './Components/content/htmlBasics/htmlBasics.component';
import { PrivateComponent } from './Components/private/private.component';

export const routes: Routes = [
    { path: 'home', title: "Home", component: HomeComponent },
    {
        path: 'private',
        title: "Private",
        component: PrivateComponent,
        canActivate: [activateGuard]
    },
    { path: 'login', title: "Login", component: LoginComponent },
    { path: 'signup', title: "Sign Up", component: SignUpComponent },
    { path: 'htmlBasics', title: "HTML Basics", component: htmlBasicsComponent },
    { path: '', redirectTo: "home", pathMatch: "full" },
    { path: '**', title: "404 Page Not Found", component: PageNotFoundComponent }

];
