import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonModule, CardModule} from 'projects/espresso-ui/src/public-api';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ButtonModule, CardModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
