import { ChangeDetectionStrategy, Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
export class CardTopButtonComponent {
    constructor() {
        this.cardTopBtnEvent = new EventEmitter();
    }
    clickHandler() {
        this.cardTopBtnEvent.emit(this.id);
    }
}
CardTopButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-card-top-button',
                template: "<button class=\"card__top__button\" (click)=\"clickHandler()\">\n    <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"trash-alt\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"></path></svg>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [":host{font-family:var(--et-ui-font-sans)}.card__top__button{box-sizing:border-box;position:absolute;left:0;top:0;width:32px;height:32px;background-color:var(--et-ui-color-orange-400);color:var(--et-ui-color-white);display:flex;justify-content:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;border-bottom-right-radius:.25rem;cursor:pointer}.card__top__button:focus{outline:none}.card__top__button:hover{background-color:var(--et-ui-color-blue-400)}.card__top__button svg{box-sizing:border-box;width:16px;height:16px;pointer-events:none;display:block}"]
            },] }
];
CardTopButtonComponent.propDecorators = {
    id: [{ type: Input }],
    cardTopBtnEvent: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10b3AtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VzcHJlc3NvLXVpL3NyYy9saWIvY2FyZC10b3AtYnV0dG9uL2NhcmQtdG9wLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNuSCxNQUFNLE9BQU8sc0JBQXNCO0lBUG5DO1FBVVksb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTWpELENBQUM7SUFKQyxZQUFZO1FBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQix5cEJBQStDO2dCQUUvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7O2FBQzNDOzs7aUJBR0UsS0FBSzs4QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2FyZC10b3AtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtdG9wLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQtdG9wLWJ1dHRvbi5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tXG59KVxuZXhwb3J0IGNsYXNzIENhcmRUb3BCdXR0b25Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGlkOiBhbnk7XG4gIEBPdXRwdXQoKSBjYXJkVG9wQnRuRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY2xpY2tIYW5kbGVyKCkge1xuICAgIHRoaXMuY2FyZFRvcEJ0bkV2ZW50LmVtaXQodGhpcy5pZCk7XG4gIH1cblxufVxuIl19