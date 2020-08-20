/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
var CardBodyComponent = /** @class */ (function () {
    function CardBodyComponent() {
        this.overlay = false;
    }
    CardBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-body',
                    template: "<div class=\"card__body\"  [class.card__body--overlay]=\"overlay\">\n    <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".card__body:hover .card__overlay{display:flex}"]
                }] }
    ];
    CardBodyComponent.propDecorators = {
        overlay: [{ type: Input }]
    };
    return CardBodyComponent;
}());
export { CardBodyComponent };
if (false) {
    /** @type {?} */
    CardBodyComponent.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1ib2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2NhcmQtYm9keS9jYXJkLWJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RjtJQUFBO1FBU1csWUFBTyxHQUFHLEtBQUssQ0FBQztJQUUzQixDQUFDOztnQkFYQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHdIQUF5QztvQkFFekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTOztpQkFDM0M7OzswQkFHRSxLQUFLOztJQUVSLHdCQUFDO0NBQUEsQUFYRCxJQVdDO1NBSlksaUJBQWlCOzs7SUFFNUIsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jYXJkLWJvZHknLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1ib2R5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC1ib2R5LmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEJvZHlDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG92ZXJsYXkgPSBmYWxzZTtcblxufVxuIl19