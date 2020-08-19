import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonFavoriteComponent {
    favorite: boolean;
    id: string;
    title?: string;
    cover?: string;
    type?: string;
    readonly favoriteChange: EventEmitter<any>;
    toggleValueChange(): void;
    static ɵfac: i0.ɵɵFactoryDef<ButtonFavoriteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ButtonFavoriteComponent, "lib-button-favorite", never, { "favorite": "favorite"; "id": "id"; "title": "title"; "cover": "cover"; "type": "type"; }, { "favoriteChange": "favoriteChange"; }, never, never>;
}
