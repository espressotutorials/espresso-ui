import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { CardContentElementModule } from './card-content.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(CardContentElementModule)
    .catch(err => console.error(err));
