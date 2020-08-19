import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { CardImageElementModule } from './card-image.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(CardImageElementModule)
    .catch(err => console.error(err));
