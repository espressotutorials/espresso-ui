import { Component } from '@angular/core';
export class CardOverlayComponent {
}
CardOverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-card-overlay',
                template: "<div class=\"card__overlay\">\n    <ng-content></ng-content>\n</div>\n",
                styles: [":host{font-family:var(--et-ui-font-sans)}.card__overlay{box-sizing:border-box;display:none;z-index:10;position:absolute;bottom:0;left:0;right:0;box-shadow:var(--et-ui-shadow-lg);padding:.75rem;min-height:100%;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;border-radius:var(--et-ui-radius);background-color:var(--et-ui-color-gray-100)}"]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1vdmVybGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VzcHJlc3NvLXVpL3NyYy9saWIvY2FyZC1vdmVybGF5L2NhcmQtb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU9sRCxNQUFNLE9BQU8sb0JBQW9COzs7WUFMaEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGtGQUE0Qzs7YUFFN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2FyZC1vdmVybGF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtb3ZlcmxheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQtb3ZlcmxheS5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRPdmVybGF5Q29tcG9uZW50IHt9XG4iXX0=