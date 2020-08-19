import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = ["*"];
var CardBodyComponent = /** @class */ (function () {
    function CardBodyComponent() {
        this.overlay = false;
    }
    /** @nocollapse */ CardBodyComponent.ɵfac = function CardBodyComponent_Factory(t) { return new (t || CardBodyComponent)(); };
    /** @nocollapse */ CardBodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CardBodyComponent, selectors: [["lib-card-body"]], inputs: { overlay: "overlay" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "card__body"]], template: function CardBodyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("card__body--overlay", ctx.overlay);
        } }, styles: [".card__body:hover .card__overlay{display:flex}"], encapsulation: 3, changeDetection: 0 });
    return CardBodyComponent;
}());
export { CardBodyComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardBodyComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card-body',
                templateUrl: './card-body.component.html',
                styleUrls: ['./card-body.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, { overlay: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1ib2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2NhcmQtYm9keS9jYXJkLWJvZHkuY29tcG9uZW50LnRzIiwibGliL2NhcmQtYm9keS9jYXJkLWJvZHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUU3RjtJQUFBO1FBU1csWUFBTyxHQUFHLEtBQUssQ0FBQztLQUUxQjt5R0FKWSxpQkFBaUI7NkVBQWpCLGlCQUFpQjs7WUNUOUIsOEJBQ0k7WUFBQSxrQkFBWTtZQUNoQixpQkFBTTs7WUFGbUIsa0RBQXFDOzs0QkRBOUQ7Q0FhQyxBQVhELElBV0M7U0FKWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQVA3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7YUFDM0M7Z0JBR1UsT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jYXJkLWJvZHknLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1ib2R5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC1ib2R5LmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEJvZHlDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG92ZXJsYXkgPSBmYWxzZTtcblxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIiAgW2NsYXNzLmNhcmRfX2JvZHktLW92ZXJsYXldPVwib3ZlcmxheVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19