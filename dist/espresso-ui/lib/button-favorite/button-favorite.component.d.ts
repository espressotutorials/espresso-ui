import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonFavoriteComponent {
    favorite: boolean;
    readonly favoriteChange: EventEmitter<boolean>;
    toggleValueChange(): void;
    static ɵfac: i0.ɵɵFactoryDef<ButtonFavoriteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ButtonFavoriteComponent, "lib-button-favorite", never, { "favorite": "favorite"; }, { "favoriteChange": "favoriteChange"; }, never, never>;
}
