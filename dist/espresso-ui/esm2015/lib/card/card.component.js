import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class CardComponent {
    constructor() {
        this.overlay = false;
    }
}
/** @nocollapse */ CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
/** @nocollapse */ CardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CardComponent, selectors: [["lib-card"]], inputs: { overlay: "overlay" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "card"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("card--overlay", ctx.overlay);
    } }, styles: [".card{box-sizing:border-box;position:relative;background:var(--color-white);border-radius:.25rem;box-shadow:var(--shadow-lg);display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;height:100%}.card--overlay .card__body:hover .card__overlay{display:flex}"], encapsulation: 3, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, { overlay: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lc3ByZXNzby11aS8iLCJzb3VyY2VzIjpbImxpYi9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwibGliL2NhcmQvY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUzdGLE1BQU0sT0FBTyxhQUFhO0lBUDFCO1FBU1csWUFBTyxHQUFHLEtBQUssQ0FBQztLQUUxQjs7NkZBSlksYUFBYTtxRUFBYixhQUFhOztRQ1QxQiw4QkFDSTtRQUFBLGtCQUFZO1FBQ2hCLGlCQUFNOztRQUZZLDRDQUErQjs7a0REU3BDLGFBQWE7Y0FQekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDcEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTO2FBQzNDO2dCQUdVLE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG92ZXJsYXkgPSBmYWxzZTtcblxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmRcIiBbY2xhc3MuY2FyZC0tb3ZlcmxheV09XCJvdmVybGF5XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=