import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class InputComponent {
    value: string;
    placeholder: string;
    readonly valueChange: EventEmitter<string>;
    onInputValueChange(value: string): void;
    static ɵfac: i0.ɵɵFactoryDef<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<InputComponent, "lib-input", never, { "value": "value"; "placeholder": "placeholder"; }, { "valueChange": "valueChange"; }, never, never>;
}
