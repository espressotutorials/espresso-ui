import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = ["*"];
var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.overlay = false;
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
    return CardComponent;
}());
export { CardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lc3ByZXNzby11aS8iLCJzb3VyY2VzIjpbImxpYi9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwibGliL2NhcmQvY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRTdGO0lBQUE7UUFTVyxZQUFPLEdBQUcsS0FBSyxDQUFDO0tBRTFCO2lHQUpZLGFBQWE7eUVBQWIsYUFBYTs7WUNUMUIsOEJBQ0k7WUFBQSxrQkFBWTtZQUNoQixpQkFBTTs7WUFGWSw0Q0FBK0I7O3dCREFqRDtDQWFDLEFBWEQsSUFXQztTQUpZLGFBQWE7a0RBQWIsYUFBYTtjQVB6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7YUFDM0M7Z0JBR1UsT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgb3ZlcmxheSA9IGZhbHNlO1xuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZFwiIFtjbGFzcy5jYXJkLS1vdmVybGF5XT1cIm92ZXJsYXlcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==