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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGVzcHJlc3NvdHV0b3JpYWxzZ21iaC9lc3ByZXNzby11aS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24tbGluay9idXR0b24tbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGO0lBQUE7SUFpQkEsQ0FBQzs7Z0JBakJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw0S0FBMkM7b0JBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsU0FBUzs7aUJBQzNDOzs7c0JBR0UsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUVMLEtBQUs7O0lBRVIsMEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVZZLG1CQUFtQjs7O0lBRTlCLGtDQUFxQjs7SUFDckIsb0NBQXVCOztJQUN2QixvQ0FBdUI7O0lBQ3ZCLGtDQUFzQjs7SUFDdEIscUNBQXlCOztJQUV6Qix3Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWJ1dHRvbi1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWxpbmsuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25MaW5rQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgcmVsPzogc3RyaW5nO1xuICBASW5wdXQoKSB0YXJnZXQ/OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc2Vjb25kYXJ5PzogYm9vbGVhbjtcblxufVxuIl19