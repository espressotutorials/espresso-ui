import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
var ButtonLinkComponent = /** @class */ (function () {
    function ButtonLinkComponent() {
    }
    /** @nocollapse */ ButtonLinkComponent.ɵfac = function ButtonLinkComponent_Factory(t) { return new (t || ButtonLinkComponent)(); };
    /** @nocollapse */ ButtonLinkComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonLinkComponent, selectors: [["lib-button-link"]], inputs: { url: "url", label: "label", title: "title", rel: "rel", target: "target", secondary: "secondary" }, decls: 2, vars: 7, consts: [[1, "button-link", 3, "href", "title", "target", "rel"]], template: function ButtonLinkComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("button-link--secondary", ctx.secondary);
            i0.ɵɵproperty("href", ctx.url, i0.ɵɵsanitizeUrl)("title", ctx.title)("target", ctx.target)("rel", ctx.rel);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.label, "\n");
        } }, styles: [".button-link{box-sizing:border-box;width:100%;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:var(--color-blue-400);color:var(--color-white);font-size:.875rem;font-weight:700;cursor:pointer;padding:.5rem 1rem;border-radius:var(--radius);text-decoration:none;text-align:center}.button-link--secondary,.button-link:hover{background:var(--color-orange-400)}.button-link--secondary:hover{background:var(--color-blue-400)}"], encapsulation: 3, changeDetection: 0 });
    return ButtonLinkComponent;
}());
export { ButtonLinkComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonLinkComponent, [{
        type: Component,
        args: [{
                selector: 'lib-button-link',
                templateUrl: './button-link.component.html',
                styleUrls: ['./button-link.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, { url: [{
            type: Input
        }], label: [{
            type: Input
        }], title: [{
            type: Input
        }], rel: [{
            type: Input
        }], target: [{
            type: Input
        }], secondary: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXNwcmVzc28tdWkvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uLWxpbmsvYnV0dG9uLWxpbmsuY29tcG9uZW50LnRzIiwibGliL2J1dHRvbi1saW5rL2J1dHRvbi1saW5rLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU3RjtJQUFBO0tBaUJDOzZHQVZZLG1CQUFtQjsrRUFBbkIsbUJBQW1CO1lDVGhDLDRCQUNJO1lBQUEsWUFDSjtZQUFBLGlCQUFJOztZQUY4RSx1REFBMEM7WUFBckcsZ0RBQVksb0JBQUEsc0JBQUEsZ0JBQUE7WUFDL0IsZUFDSjtZQURJLDJDQUNKOzs4QkRGQTtDQW1CQyxBQWpCRCxJQWlCQztTQVZZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBUC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTO2FBQzNDO2dCQUdVLEdBQUc7a0JBQVgsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUVHLFNBQVM7a0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWJ1dHRvbi1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWxpbmsuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25MaW5rQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgcmVsPzogc3RyaW5nO1xuICBASW5wdXQoKSB0YXJnZXQ/OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc2Vjb25kYXJ5PzogYm9vbGVhbjtcblxufVxuIiwiPGEgY2xhc3M9XCJidXR0b24tbGlua1wiIFtocmVmXT1cInVybFwiIFt0aXRsZV09XCJ0aXRsZVwiIFt0YXJnZXRdPVwidGFyZ2V0XCIgW3JlbF09XCJyZWxcIiBbY2xhc3MuYnV0dG9uLWxpbmstLXNlY29uZGFyeV09XCJzZWNvbmRhcnlcIj5cbiAgICB7e2xhYmVsfX1cbjwvYT5cbiJdfQ==