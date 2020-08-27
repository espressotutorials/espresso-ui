/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
var CardTopButtonComponent = /** @class */ (function () {
    function CardTopButtonComponent() {
        this.cardTopBtnEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CardTopButtonComponent.prototype.clickHandler = /**
     * @return {?}
     */
    function () {
        this.cardTopBtnEvent.emit(this.id);
    };
    CardTopButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-top-button',
                    template: "<button class=\"card__top__button\" (click)=\"clickHandler()\">\n    <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"trash-alt\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"></path></svg>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".card__top__button{box-sizing:border-box;position:absolute;left:0;top:0;width:32px;height:32px;background-color:var(--et-ui-color-orange-400);color:var(--et-ui-color-white);display:flex;justify-content:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;border-bottom-right-radius:.25rem;cursor:pointer}.card__top__button:focus{outline:0}.card__top__button:hover{background-color:var(--et-ui-color-blue-400)}.card__top__button svg{box-sizing:border-box;width:16px;height:16px;pointer-events:none;display:block}"]
                }] }
    ];
    CardTopButtonComponent.propDecorators = {
        id: [{ type: Input }],
        cardTopBtnEvent: [{ type: Output }]
    };
    return CardTopButtonComponent;
}());
export { CardTopButtonComponent };
if (false) {
    /** @type {?} */
    CardTopButtonComponent.prototype.id;
    /** @type {?} */
    CardTopButtonComponent.prototype.cardTopBtnEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10b3AtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Blc3ByZXNzb3R1dG9yaWFsc2dtYmgvZXNwcmVzc28tdWkvIiwic291cmNlcyI6WyJsaWIvY2FyZC10b3AtYnV0dG9uL2NhcmQtdG9wLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkg7SUFBQTtRQVVZLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU1qRCxDQUFDOzs7O0lBSkMsNkNBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQix5cEJBQStDO29CQUUvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7O2lCQUMzQzs7O3FCQUdFLEtBQUs7a0NBQ0wsTUFBTTs7SUFNVCw2QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBVFksc0JBQXNCOzs7SUFFakMsb0NBQWlCOztJQUNqQixpREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jYXJkLXRvcC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC10b3AtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC10b3AtYnV0dG9uLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZFRvcEJ1dHRvbkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgaWQ6IGFueTtcbiAgQE91dHB1dCgpIGNhcmRUb3BCdG5FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjbGlja0hhbmRsZXIoKSB7XG4gICAgdGhpcy5jYXJkVG9wQnRuRXZlbnQuZW1pdCh0aGlzLmlkKTtcbiAgfVxuXG59XG4iXX0=