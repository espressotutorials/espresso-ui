import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent} from './app.component';
import { ButtonModule, ButtonLinkModule, CardAuthorModule, CardModule, CardTitleModule, CardTimeModule, CardOverlayModule, CardDescriptionModule, CardFooterModule, ButtonFavoriteModule, CardContentModule, CardImageModule, RatingModule, CardMetaModule, CardBodyModule } from 'projects/espresso-ui/src/public-api';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ButtonModule,
        CardModule,
        CardImageModule,
        CardContentModule,
        CardTimeModule,
        CardTitleModule,
        CardAuthorModule,
        CardFooterModule,
        CardOverlayModule,
        RatingModule,
        ButtonFavoriteModule,
        CardMetaModule,
        CardDescriptionModule,
        ButtonLinkModule,
        CardBodyModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}
