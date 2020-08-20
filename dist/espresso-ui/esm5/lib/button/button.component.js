import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = ["*"];
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.clickEvent = new EventEmitter();
    }
    ButtonComponent.prototype.onClick = function (value) {
        this.clickEvent.emit(value);
    };
    /** @nocollapse */ ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
    /** @nocollapse */ ButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["lib-button"]], inputs: { value: "value", secondary: "secondary" }, outputs: { clickEvent: "clickEvent" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "button", 3, "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.onClick(ctx.value); });
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("button--secondary", ctx.secondary);
        } }, styles: [".button{width:100%;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:var(--color-blue-400);color:var(--color-white);font-size:.875rem;font-weight:700;cursor:pointer;padding:.5rem 1rem;border-radius:var(--radius)}.button--secondary,.button:hover{background:var(--color-orange-400)}.button--secondary:hover{background:var(--color-blue-400)}"], encapsulation: 3, changeDetection: 0 });
    return ButtonComponent;
}());
export { ButtonComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'lib-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, { value: [{
            type: Input
        }], secondary: [{
            type: Input
        }], clickEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRW5IO0lBQUE7UUFhYSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQU1qRDtJQUpHLGlDQUFPLEdBQVAsVUFBUSxLQUFXO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztxR0FWUSxlQUFlOzJFQUFmLGVBQWU7O1lDVDVCLGlDQUNJO1lBRHlELDRGQUFTLHNCQUFjLElBQUM7WUFDakYsa0JBQVk7WUFDaEIsaUJBQVM7O1lBRmMsa0RBQXFDOzswQkRBNUQ7Q0FxQkMsQUFuQkQsSUFtQkM7U0FaWSxlQUFlO2tEQUFmLGVBQWU7Y0FQM0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTO2FBQzdDO2dCQUdZLEtBQUs7a0JBQWIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFHRyxVQUFVO2tCQURsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1idXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQubGVzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuXG4gICAgQElucHV0KCkgdmFsdWU/OiBzdHJpbmc7XG4gICAgQElucHV0KCkgc2Vjb25kYXJ5PzogYm9vbGVhbjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHJlYWRvbmx5IGNsaWNrRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIG9uQ2xpY2sodmFsdWU/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5jbGlja0V2ZW50LmVtaXQodmFsdWUpO1xuICAgIH1cblxufVxuIiwiPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIFtjbGFzcy5idXR0b24tLXNlY29uZGFyeV09XCJzZWNvbmRhcnlcIiAoY2xpY2spPVwib25DbGljayh2YWx1ZSlcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2J1dHRvbj5cbiJdfQ==