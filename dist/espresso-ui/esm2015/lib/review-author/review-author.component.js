import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
export class ReviewAuthorComponent {
}
ReviewAuthorComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-review-author',
                template: "<p class=\"review__author\">\n    <ng-content></ng-content>\n</p>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [":host{font-family:var(--et-ui-font-sans)}.review__author{width:100%;box-sizing:border-box;color:var(--et-ui-color-gray-300);font-size:.75rem;margin:.5rem 0 0;font-weight:400}"]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LWF1dGhvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lc3ByZXNzby11aS9zcmMvbGliL3Jldmlldy1hdXRob3IvcmV2aWV3LWF1dGhvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN0RixNQUFNLE9BQU8scUJBQXFCOzs7WUFQakMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLCtFQUE2QztnQkFFN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTOzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1yZXZpZXctYXV0aG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jldmlldy1hdXRob3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXZpZXctYXV0aG9yLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgUmV2aWV3QXV0aG9yQ29tcG9uZW50IHt9XG4iXX0=