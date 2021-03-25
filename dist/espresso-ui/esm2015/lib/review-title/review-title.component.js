import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
export class ReviewTitleComponent {
}
ReviewTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-review-title',
                template: "<h3 class=\"review__title\">\n    <ng-content></ng-content>\n</h3>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [":host{font-family:var(--et-ui-font-sans)}.review__title{width:100%;box-sizing:border-box;color:var(--et-ui-color-gray-500);font-size:1.15rem;margin:1rem 0 .5rem;font-weight:400}"]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VzcHJlc3NvLXVpL3NyYy9saWIvcmV2aWV3LXRpdGxlL3Jldmlldy10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN0RixNQUFNLE9BQU8sb0JBQW9COzs7WUFQaEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGdGQUE0QztnQkFFNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTOzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1yZXZpZXctdGl0bGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV2aWV3LXRpdGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmV2aWV3LXRpdGxlLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgUmV2aWV3VGl0bGVDb21wb25lbnQge31cbiJdfQ==