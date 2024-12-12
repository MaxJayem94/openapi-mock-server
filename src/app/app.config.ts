import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
/*import { BASE_PATH as BASE_PATH_MOCK_API } from './api/mock';*/

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    /*    { provide: BASE_PATH_MOCK_API, useValue: 'http://localhost:56001' },*/
  ],
};
