import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Input, initTWE } from "tw-elements";
initTWE({ Input }, { allowReinits: true });

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
