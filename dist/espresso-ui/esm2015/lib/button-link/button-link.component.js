import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class ButtonLinkComponent {
}
ButtonLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-button-link',
                template: "<a class=\"button-link\" [href]=\"url\" [title]=\"title\" [target]=\"target\" [rel]=\"rel\" [class.button-link--secondary]=\"secondary\">\n    {{label}}\n</a>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [":host{font-family:var(--et-ui-font-sans)}.button-link{box-sizing:border-box;width:100%;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:var(--et-ui-color-blue-400);color:var(--et-ui-color-white);font-size:.875rem;font-weight:700;cursor:pointer;padding:.5rem 1rem;border-radius:var(--et-ui-radius);text-decoration:none;text-align:center}.button-link--secondary,.button-link:hover{background:var(--et-ui-color-orange-400)}.button-link--secondary:hover{background:var(--et-ui-color-blue-400)}"]
            },] }
];
ButtonLinkComponent.propDecorators = {
    url: [{ type: Input }],
    label: [{ type: Input }],
    title: [{ type: Input }],
    rel: [{ type: Input }],
    target: [{ type: Input }],
    secondary: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXNwcmVzc28tdWkvc3JjL2xpYi9idXR0b24tbGluay9idXR0b24tbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTN0YsTUFBTSxPQUFPLG1CQUFtQjs7O1lBUC9CLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw0S0FBMkM7Z0JBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsU0FBUzs7YUFDM0M7OztrQkFHRSxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztrQkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYnV0dG9uLWxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24tbGluay5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkxpbmtDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSByZWw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRhcmdldD86IHN0cmluZztcblxuICBASW5wdXQoKSBzZWNvbmRhcnk/OiBib29sZWFuO1xuXG59XG4iXX0=