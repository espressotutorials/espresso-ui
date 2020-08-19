import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonLinkComponent {
}
/** @nocollapse */ ButtonLinkComponent.ɵfac = function ButtonLinkComponent_Factory(t) { return new (t || ButtonLinkComponent)(); };
/** @nocollapse */ ButtonLinkComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonLinkComponent, selectors: [["lib-button-link"]], inputs: { url: "url", label: "label", title: "title", rel: "rel", target: "target", secondary: "secondary" }, decls: 2, vars: 6, consts: [[1, "button-link", 3, "href", "title", "target"]], template: function ButtonLinkComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("button-link--secondary", ctx.secondary);
        i0.ɵɵproperty("href", ctx.url, i0.ɵɵsanitizeUrl)("title", ctx.title)("target", ctx.target);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.label, "\n");
    } }, styles: [".button-link{box-sizing:border-box;width:100%;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:var(--color-blue-400);color:var(--color-white);font-size:.875rem;font-weight:700;cursor:pointer;padding:.5rem 1rem;border-radius:.25rem;text-decoration:none;text-align:center}.button-link--secondary,.button-link:hover{background:var(--color-orange-400)}.button-link--secondary:hover{background:var(--color-blue-400)}"], encapsulation: 3, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXNwcmVzc28tdWkvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uLWxpbmsvYnV0dG9uLWxpbmsuY29tcG9uZW50LnRzIiwibGliL2J1dHRvbi1saW5rL2J1dHRvbi1saW5rLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVM3RixNQUFNLE9BQU8sbUJBQW1COzt5R0FBbkIsbUJBQW1COzJFQUFuQixtQkFBbUI7UUNUaEMsNEJBQ0k7UUFBQSxZQUNKO1FBQUEsaUJBQUk7O1FBRmtFLHVEQUEwQztRQUF6RixnREFBWSxvQkFBQSxzQkFBQTtRQUMvQixlQUNKO1FBREksMkNBQ0o7O2tERE9hLG1CQUFtQjtjQVAvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsU0FBUzthQUMzQztnQkFHVSxHQUFHO2tCQUFYLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFFRyxTQUFTO2tCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1idXR0b24tbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1saW5rLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTGlua0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlbD86IHN0cmluZztcbiAgQElucHV0KCkgdGFyZ2V0Pzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNlY29uZGFyeT86IGJvb2xlYW47XG5cbn1cbiIsIjxhIGNsYXNzPVwiYnV0dG9uLWxpbmtcIiBbaHJlZl09XCJ1cmxcIiBbdGl0bGVdPVwidGl0bGVcIiBbdGFyZ2V0XT1cInRhcmdldFwiIFtjbGFzcy5idXR0b24tbGluay0tc2Vjb25kYXJ5XT1cInNlY29uZGFyeVwiPlxuICAgIHt7bGFiZWx9fVxuPC9hPlxuIl19