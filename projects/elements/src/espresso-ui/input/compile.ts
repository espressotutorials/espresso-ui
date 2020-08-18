import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {InputElementModule} from './input.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(InputElementModule)
    .catch(err => console.error(err));
