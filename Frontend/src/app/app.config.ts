import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Input, initTWE } from "tw-elements";
initTWE({ Input }, { allowReinits: true });

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
