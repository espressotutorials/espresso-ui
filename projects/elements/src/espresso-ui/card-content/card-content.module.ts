import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ElementModule } from '../../abstract/element.module';
import { CardContentComponent } from '../../../../espresso-ui/src/lib/card-content/card-content.component';
import { CardContentModule } from '../../../../espresso-ui/src/lib/card-content/card-content.module';

@NgModule({
    imports: [BrowserModule, CardContentModule],
    entryComponents: [CardContentComponent],
})
export class CardContentElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, CardContentComponent, 'card-content');
    }
}
