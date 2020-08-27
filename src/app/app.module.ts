import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent} from './app.component';
import {
    ButtonModule,
    AuthorModule,
    ReviewDescriptionModule,
    ReviewModule,
    ReviewTitleModule,
    ReviewAuthorModule,
    ButtonLinkModule,
    CardAuthorModule,
    CardModule,
    CardTitleModule,
    CardTimeModule,
    CardTopButtonModule,
    CardOverlayModule,
    CardDescriptionModule,
    CardFooterModule,
    ButtonFavoriteModule,
    CardContentModule,
    CardImageModule,
    RatingModule,
    CardMetaModule,
    CardBodyModule,
    CardInfoModule
} from 'projects/espresso-ui/src/public-api';
import { TestimonialModule } from 'espresso-ui';

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
        CardInfoModule,
        RatingModule,
        ButtonFavoriteModule,
        CardMetaModule,
        CardDescriptionModule,
        ButtonLinkModule,
        CardBodyModule,
        AuthorModule,
        ReviewModule,
        ReviewTitleModule,
        ReviewDescriptionModule,
        ReviewAuthorModule,
        TestimonialModule,
        CardInfoModule,
        CardTopButtonModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}
