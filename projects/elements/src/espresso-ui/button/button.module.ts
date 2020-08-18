import { Injector, NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { ElementModule } from '../../abstract/element.module';
import { ButtonModule, ButtonComponent } from '../../../../espresso-ui/src/public-api';

@NgModule({
    imports: [BrowserModule, ButtonModule],
    entryComponents: [ButtonComponent],
})
export class ButtonElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, ButtonComponent, 'button');
    }
}
