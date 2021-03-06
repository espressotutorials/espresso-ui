import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
export class ButtonComponent {
    constructor() {
        this.clickEvent = new EventEmitter();
    }
    onClick(value) {
        this.clickEvent.emit(value);
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-button',
                template: "<button class=\"button\" [class.button--secondary]=\"secondary\" (click)=\"onClick(value)\">\n    <ng-content></ng-content>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [":host{font-family:var(--et-ui-font-sans)}.button{width:100%;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:var(--et-ui-color-blue-400);color:var(--et-ui-color-white);font-size:.875rem;font-weight:700;cursor:pointer;padding:.5rem 1rem;border-radius:var(--et-ui-radius)}.button--secondary,.button:hover{background:var(--et-ui-color-orange-400)}.button--secondary:hover{background:var(--et-ui-color-blue-400)}"]
            },] }
];
ButtonComponent.propDecorators = {
    value: [{ type: Input }],
    secondary: [{ type: Input }],
    clickEvent: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VzcHJlc3NvLXVpL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNuSCxNQUFNLE9BQU8sZUFBZTtJQVA1QjtRQWFhLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBTWxELENBQUM7SUFKRyxPQUFPLENBQUMsS0FBVztRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQWpCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLG9KQUFzQztnQkFFdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTOzthQUM3Qzs7O29CQUdJLEtBQUs7d0JBQ0wsS0FBSzt5QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1idXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQubGVzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuXG4gICAgQElucHV0KCkgdmFsdWU/OiBzdHJpbmc7XG4gICAgQElucHV0KCkgc2Vjb25kYXJ5PzogYm9vbGVhbjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHJlYWRvbmx5IGNsaWNrRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIG9uQ2xpY2sodmFsdWU/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5jbGlja0V2ZW50LmVtaXQodmFsdWUpO1xuICAgIH1cblxufVxuIl19