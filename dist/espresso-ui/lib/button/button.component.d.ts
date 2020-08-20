import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    value?: string;
    secondary?: boolean;
    readonly clickEvent: EventEmitter<any>;
    onClick(value?: any): void;
    static ɵfac: i0.ɵɵFactoryDef<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ButtonComponent, "lib-button", never, { "value": "value"; "secondary": "secondary"; }, { "clickEvent": "clickEvent"; }, never, ["*"]>;
}
