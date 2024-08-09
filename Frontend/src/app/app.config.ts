import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Input, initTWE } from "tw-elements";
initTWE({ Input }, { allowReinits: true });
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// ngrx
import { provideState, provideStore } from '@ngrx/store';
import { cartReducer } from './ngrx/cart.reducer';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideToastr(), provideAnimationsAsync(),
  
    // provideStore(),
    // provideState({ name: 'cartState', reducer: cartReducer })
  ],
};
