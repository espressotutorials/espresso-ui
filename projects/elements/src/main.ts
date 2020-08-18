import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {ButtonElementModule} from './espresso-ui/button/button.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(ButtonElementModule)
    .catch(err => console.error(err));
