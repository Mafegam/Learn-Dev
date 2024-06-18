import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ContentComponent } from './Components/content/content.component';
import { SidebarComponent } from './Components/home/sidebar/sidebar.component';

export const routes: Routes = [
    { path: 'home', title: "Home", component: HomeComponent },
    { path: 'side', title: "Home", component: SidebarComponent },

    { path: 'home/login', title: "Login", component: LoginComponent },
    { path: 'home/signup', title: "Sign Up", component: SignUpComponent },
    { path: 'content', title: "Sign Up", component: ContentComponent },
    { path: '', redirectTo: "home", pathMatch: "full" },
    { path: '**', title: "404 Page Not Found", component: PageNotFoundComponent }

];
