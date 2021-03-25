import { Component } from '@angular/core';
export class CardTitleComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-card-title',
                template: "<h3 class=\"card__title\">\n    <ng-content></ng-content>\n</h3>\n",
                styles: [":host{font-family:var(--et-ui-font-sans)}.card__title{box-sizing:border-box;text-align:left;color:var(--et-ui-color-gray-500);font-size:1.25rem;margin:0 0 .5rem;font-weight:400}"]
            },] }
];
/** @nocollapse */
CardTitleComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lc3ByZXNzby11aS9zcmMvbGliL2NhcmQtdGl0bGUvY2FyZC10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU9sRCxNQUFNLE9BQU8sa0JBQWtCO0lBRTdCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsOEVBQTBDOzthQUUzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jYXJkLXRpdGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtdGl0bGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLXRpdGxlLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZFRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==