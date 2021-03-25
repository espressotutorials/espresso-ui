import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class CardBodyComponent {
    constructor() {
        this.overlay = false;
    }
}
CardBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-card-body',
                template: "<div class=\"card__body\"  [class.card__body--overlay]=\"overlay\">\n    <ng-content></ng-content>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [":host{font-family:var(--et-ui-font-sans)}.card__body:hover .card__overlay{display:flex}"]
            },] }
];
CardBodyComponent.propDecorators = {
    overlay: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1ib2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VzcHJlc3NvLXVpL3NyYy9saWIvY2FyZC1ib2R5L2NhcmQtYm9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTN0YsTUFBTSxPQUFPLGlCQUFpQjtJQVA5QjtRQVNXLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFFM0IsQ0FBQzs7O1lBWEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qix3SEFBeUM7Z0JBRXpDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsU0FBUzs7YUFDM0M7OztzQkFHRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jYXJkLWJvZHknLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1ib2R5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC1ib2R5LmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEJvZHlDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG92ZXJsYXkgPSBmYWxzZTtcblxufVxuIl19