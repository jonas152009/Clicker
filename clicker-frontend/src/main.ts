import { provideHttpClient } from '@angular/common/http';
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import routeConfig from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig),
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));
