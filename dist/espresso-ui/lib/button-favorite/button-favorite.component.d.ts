import { EventEmitter } from '@angular/core';
export declare class ButtonFavoriteComponent {
    favorite: boolean;
    id: string;
    title?: string;
    cover?: string;
    type?: string;
    readonly favoriteChange: EventEmitter<any>;
    toggleValueChange(): void;
}
