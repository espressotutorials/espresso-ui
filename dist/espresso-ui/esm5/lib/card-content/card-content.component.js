/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
var CardContentComponent = /** @class */ (function () {
    function CardContentComponent() {
    }
    CardContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-content',
                    template: "<div class=\"card__content\">\n    <slot name=\"time\"></slot>\n    <slot name=\"title\"></slot>\n    <slot name=\"info\"></slot>\n    <slot name=\"author\"></slot>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [":host{font-family:var(--et-ui-font-sans)}.card__content{box-sizing:border-box;padding:1rem;width:100%}"]
                }] }
    ];
    return CardContentComponent;
}());
export { CardContentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Blc3ByZXNzb3R1dG9yaWFsc2dtYmgvZXNwcmVzc28tdWkvIiwic291cmNlcyI6WyJsaWIvY2FyZC1jb250ZW50L2NhcmQtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEY7SUFBQTtJQU9tQyxDQUFDOztnQkFQbkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDBMQUE0QztvQkFFNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTOztpQkFDM0M7O0lBQ2tDLDJCQUFDO0NBQUEsQUFQcEMsSUFPb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNhcmQtY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLWNvbnRlbnQuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkQ29udGVudENvbXBvbmVudCB7fVxuIl19