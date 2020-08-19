import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ElementModule } from '../../abstract/element.module';
import { CardImageComponent } from '../../../../espresso-ui/src/lib/card-image/card-image.component';
import { CardImageModule } from '../../../../espresso-ui/src/lib/card-image/card-image.module';

@NgModule({
    imports: [BrowserModule, CardImageModule],
    entryComponents: [CardImageComponent],
})
export class CardImageElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, CardImageComponent, 'card-image');
    }
}
