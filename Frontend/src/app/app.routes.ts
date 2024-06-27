import { Routes } from '@angular/router';
import { activateGuard } from './Guards/activate.guard';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { PrivateComponent } from './Components/private/private.component';
import { htmlBasicsComponent } from './Components/content/htmlBasics/htmlBasics.component';
import { HtmlElementsComponent } from './Components/content/html-elements/html-elements.component';
import { FormattingComponent } from './Components/content/formatting/formatting.component';
import { CssBasicsComponent } from './Components/content/css/css-basics/css-basics.component';
import { CssSelectorsComponent } from './Components/content/css/css-selectors/css-selectors.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';

import { DownloadResourcesComponent } from './Components/download-resources/download-resources.component';
import { CarousselComponent } from './Components/caroussel/caroussel.component';

export const routes: Routes = [
    { path: 'landingPage', title: "Welcome to Dev Learn", component: LandingPageComponent },
    { path: 'home', title: "Home", component: HomeComponent },
    {
        path: 'private',
        title: "Private",
        component: PrivateComponent,
        canActivate: [activateGuard]
    },
    { path: 'login', title: "Login", component: LoginComponent },
    { path: 'signup', title: "Sign Up", component: SignUpComponent },
    { path: 'caroussel', title: "Practical Resources", component: CarousselComponent },
    { path: 'additionalResources', title: "Additional Resources", component: DownloadResourcesComponent },
    { path: 'about', title: "About Me", component: AboutMeComponent },


    { path: 'htmlBasics', title: "HTML Basics ", component: htmlBasicsComponent },
    { path: 'htmlElements', title: "HTML Elements", component: HtmlElementsComponent },
    { path: 'htmlFormatting', title: "HTML Formatting", component: FormattingComponent },
    { path: 'cssBasics', title: "CSS Basics", component: CssBasicsComponent },
    { path: 'cssSelectors', title: "CSS Selectors", component: CssSelectorsComponent },

    { path: '', redirectTo: "home", pathMatch: "full" },
    { path: '**', title: "404 Page Not Found", component: PageNotFoundComponent }

];
