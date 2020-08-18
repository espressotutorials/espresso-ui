import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { CardElementModule } from './card.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(CardElementModule)
    .catch(err => console.error(err));
