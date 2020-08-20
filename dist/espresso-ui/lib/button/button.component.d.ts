import { EventEmitter } from '@angular/core';
export declare class ButtonComponent {
    value?: string;
    secondary?: boolean;
    readonly clickEvent: EventEmitter<any>;
    onClick(value?: any): void;
}
