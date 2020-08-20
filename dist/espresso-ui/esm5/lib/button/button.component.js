/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.clickEvent = new EventEmitter();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    ButtonComponent.prototype.onClick = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        this.clickEvent.emit(value);
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-button',
                    template: "<button class=\"button\" [class.button--secondary]=\"secondary\" (click)=\"onClick(value)\">\n    <ng-content></ng-content>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".button{width:100%;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:var(--color-blue-400);color:var(--color-white);font-size:.875rem;font-weight:700;cursor:pointer;padding:.5rem 1rem;border-radius:var(--radius)}.button--secondary,.button:hover{background:var(--color-orange-400)}.button--secondary:hover{background:var(--color-blue-400)}"]
                }] }
    ];
    ButtonComponent.propDecorators = {
        value: [{ type: Input }],
        secondary: [{ type: Input }],
        clickEvent: [{ type: Output }]
    };
    return ButtonComponent;
}());
export { ButtonComponent };
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.value;
    /** @type {?} */
    ButtonComponent.prototype.secondary;
    /** @type {?} */
    ButtonComponent.prototype.clickEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5IO0lBQUE7UUFhYSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQU1sRCxDQUFDOzs7OztJQUpHLGlDQUFPOzs7O0lBQVAsVUFBUSxLQUFXO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBakJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsb0pBQXNDO29CQUV0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7O2lCQUM3Qzs7O3dCQUdJLEtBQUs7NEJBQ0wsS0FBSzs2QkFFTCxNQUFNOztJQU9YLHNCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FaWSxlQUFlOzs7SUFFeEIsZ0NBQXdCOztJQUN4QixvQ0FBNkI7O0lBRTdCLHFDQUM4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50Lmxlc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIHZhbHVlPzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNlY29uZGFyeT86IGJvb2xlYW47XG5cbiAgICBAT3V0cHV0KClcbiAgICByZWFkb25seSBjbGlja0V2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBvbkNsaWNrKHZhbHVlPzogYW55KSB7XG4gICAgICAgIHRoaXMuY2xpY2tFdmVudC5lbWl0KHZhbHVlKTtcbiAgICB9XG5cbn1cbiJdfQ==