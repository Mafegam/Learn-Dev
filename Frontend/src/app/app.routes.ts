import { Routes } from '@angular/router';
import { activateGuard } from './Guards/activate.guard';

import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { htmlBasicsComponent } from './Components/content/htmlBasics/htmlBasics.component';
import { HtmlElementsComponent } from './Components/content/html-elements/html-elements.component';
import { FormattingComponent } from './Components/content/formatting/formatting.component';
import { CssBasicsComponent } from './Components/content/css/css-basics/css-basics.component';
import { CssSelectorsComponent } from './Components/content/css/css-selectors/css-selectors.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { IntroductionComponent } from './Components/home/introduction/introduction.component';
import { ContactComponent } from './Components/contact/contact.component';

import { DownloadResourcesComponent } from './Components/download-resources/download-resources.component';
import { CatsFactsComponent } from './Components/APIs/cats-facts/cats-facts.component';
import { DogsFactsComponent } from './Components/APIs/dogs-facts/dogs-facts.component';

import { ProfileComponent } from './Components/user-profile/profile/profile.component';
import { EditProfileComponent } from './Components/user-profile/edit-profile/edit-profile.component';

export const routes: Routes = [
    {
        path: 'home',
        title: "Home",
        component: HomeComponent,
        canActivate: [activateGuard]
    },
    {
        path: 'profile',
        title: "My Profile",
        component: ProfileComponent,
        canActivate: [activateGuard]
    },
    {
        path: 'profile/edit-profile',
        title: "Edit Profile",
        component: EditProfileComponent,
        canActivate: [activateGuard]
    },
    
    { path: 'login', title: "Login", component: LoginComponent },
    { path: 'signup', title: "Sign Up", component: SignUpComponent },
    { path: 'additionalResources', title: "Additional Resources", component: DownloadResourcesComponent },
    { path: 'introduction', title: "Introduction", component: IntroductionComponent },
    { path: 'about', title: "About Me", component: AboutMeComponent },
    { path: 'contact-us', title: "Contact Us", component: ContactComponent },

    { path: 'htmlBasics', title: "HTML Basics ", component: htmlBasicsComponent, canActivate: [activateGuard] },
    { path: 'htmlElements', title: "HTML Elements", component: HtmlElementsComponent, canActivate: [activateGuard] },
    { path: 'htmlFormatting', title: "HTML Formatting", component: FormattingComponent, canActivate: [activateGuard] },
    { path: 'cssBasics', title: "CSS Basics", component: CssBasicsComponent, canActivate: [activateGuard] },
    { path: 'cssSelectors', title: "CSS Selectors", component: CssSelectorsComponent, canActivate: [activateGuard] },

    { path: 'dogsFacts', title: "Dogs Facts", component: DogsFactsComponent, canActivate: [activateGuard] },
    { path: 'catsFacts', title: "Cats Facts", component: CatsFactsComponent, canActivate: [activateGuard] },


    { path: '', redirectTo: "introduction", pathMatch: "full" },
    { path: '**', title: "404 Page Not Found", component: PageNotFoundComponent },



];
