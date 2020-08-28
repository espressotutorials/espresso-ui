/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class CardBodyComponent {
    constructor() {
        this.overlay = false;
    }
}
CardBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-card-body',
                template: "<div class=\"card__body\"  [class.card__body--overlay]=\"overlay\">\n    <ng-content></ng-content>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [":host{font-family:var(--et-ui-font-sans)}.card__body:hover .card__overlay{display:flex}"]
            }] }
];
CardBodyComponent.propDecorators = {
    overlay: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CardBodyComponent.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1ib2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Blc3ByZXNzb3R1dG9yaWFsc2dtYmgvZXNwcmVzc28tdWkvIiwic291cmNlcyI6WyJsaWIvY2FyZC1ib2R5L2NhcmQtYm9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzdGLE1BQU0sT0FBTyxpQkFBaUI7SUFQOUI7UUFTVyxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBRTNCLENBQUM7OztZQVhBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsd0hBQXlDO2dCQUV6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7O2FBQzNDOzs7c0JBR0UsS0FBSzs7OztJQUFOLG9DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2FyZC1ib2R5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtYm9keS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQtYm9keS5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tXG59KVxuZXhwb3J0IGNsYXNzIENhcmRCb2R5Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBvdmVybGF5ID0gZmFsc2U7XG5cbn1cbiJdfQ==