import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ElementModule } from '../../abstract/element.module';
import { CardComponent } from '../../../../espresso-ui/src/lib/card/card.component';
import { CardModule } from '../../../../espresso-ui/src/lib/card/card.module';

@NgModule({
    imports: [BrowserModule, CardModule],
    entryComponents: [CardComponent],
})
export class CardElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, CardComponent, 'card');
    }
}
