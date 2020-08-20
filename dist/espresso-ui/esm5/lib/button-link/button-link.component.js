/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
var ButtonLinkComponent = /** @class */ (function () {
    function ButtonLinkComponent() {
    }
    ButtonLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-button-link',
                    template: "<a class=\"button-link\" [href]=\"url\" [title]=\"title\" [target]=\"target\" [rel]=\"rel\" [class.button-link--secondary]=\"secondary\">\n    {{label}}\n</a>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".button-link{box-sizing:border-box;width:100%;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:var(--color-blue-400);color:var(--color-white);font-size:.875rem;font-weight:700;cursor:pointer;padding:.5rem 1rem;border-radius:var(--radius);text-decoration:none;text-align:center}.button-link--secondary,.button-link:hover{background:var(--color-orange-400)}.button-link--secondary:hover{background:var(--color-blue-400)}"]
                }] }
    ];
    ButtonLinkComponent.propDecorators = {
        url: [{ type: Input }],
        label: [{ type: Input }],
        title: [{ type: Input }],
        rel: [{ type: Input }],
        target: [{ type: Input }],
        secondary: [{ type: Input }]
    };
    return ButtonLinkComponent;
}());
export { ButtonLinkComponent };
if (false) {
    /** @type {?} */
    ButtonLinkComponent.prototype.url;
    /** @type {?} */
    ButtonLinkComponent.prototype.label;
    /** @type {?} */
    ButtonLinkComponent.prototype.title;
    /** @type {?} */
    ButtonLinkComponent.prototype.rel;
    /** @type {?} */
    ButtonLinkComponent.prototype.target;
    /** @type {?} */
    ButtonLinkComponent.prototype.secondary;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXNwcmVzc28tdWkvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uLWxpbmsvYnV0dG9uLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RjtJQUFBO0lBaUJBLENBQUM7O2dCQWpCQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsNEtBQTJDO29CQUUzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7O2lCQUMzQzs7O3NCQUdFLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFFTCxLQUFLOztJQUVSLDBCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FWWSxtQkFBbUI7OztJQUU5QixrQ0FBcUI7O0lBQ3JCLG9DQUF1Qjs7SUFDdkIsb0NBQXVCOztJQUN2QixrQ0FBc0I7O0lBQ3RCLHFDQUF5Qjs7SUFFekIsd0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1idXR0b24tbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1saW5rLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTGlua0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlbD86IHN0cmluZztcbiAgQElucHV0KCkgdGFyZ2V0Pzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNlY29uZGFyeT86IGJvb2xlYW47XG5cbn1cbiJdfQ==