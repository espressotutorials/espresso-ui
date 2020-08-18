import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.value = '';
        this.placeholder = '';
        this.valueChange = new EventEmitter();
    }
    InputComponent.prototype.onInputValueChange = function (value) {
        this.valueChange.emit(value);
    };
    /** @nocollapse */ InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
    /** @nocollapse */ InputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InputComponent, selectors: [["lib-input"]], inputs: { value: "value", placeholder: "placeholder" }, outputs: { valueChange: "valueChange" }, decls: 1, vars: 2, consts: [[1, "et-appearance-none", "et-border", "et-border-gray-200", "et-border-solid", "et-rounded", "et-w-full", "et-py-2", "et-px-3", "et-text-gray-800", "et-leading-tight", "focus:et-outline-none", 3, "placeholder", "ngModel", "ngModelChange"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵlistener("ngModelChange", function InputComponent_Template_input_ngModelChange_0_listener($event) { return ctx.onInputValueChange($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("placeholder", ctx.placeholder)("ngModel", ctx.value);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel], styles: [""], changeDetection: 0 });
    return InputComponent;
}());
export { InputComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputComponent, [{
        type: Component,
        args: [{
                selector: 'lib-input',
                templateUrl: './input.component.html',
                styleUrls: ['./input.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { value: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], valueChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXNwcmVzc28tdWkvIiwic291cmNlcyI6WyJsaWIvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwibGliL2lucHV0L2lucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV0RztJQUFBO1FBUUksVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdYLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBR1IsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0tBS3JEO0lBSEcsMkNBQWtCLEdBQWxCLFVBQW1CLEtBQWE7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzttR0FaUSxjQUFjOzBFQUFkLGNBQWM7WUNSM0IsZ0NBTUE7WUFGSSxnSEFBaUIsOEJBQTBCLElBQUM7WUFKaEQsaUJBTUE7O1lBSkksNkNBQTJCLHNCQUFBOzt5QkRGL0I7Q0FxQkMsQUFuQkQsSUFtQkM7U0FiWSxjQUFjO2tEQUFkLGNBQWM7Y0FOMUIsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDbEQ7Z0JBR0csS0FBSztrQkFESixLQUFLO1lBSU4sV0FBVztrQkFEVixLQUFLO1lBSUcsV0FBVztrQkFEbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1pbnB1dCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQubGVzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCB7XG4gICAgQElucHV0KClcbiAgICB2YWx1ZSA9ICcnO1xuXG4gICAgQElucHV0KClcbiAgICBwbGFjZWhvbGRlciA9ICcnO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgfVxufVxuIiwiPGlucHV0XG4gICAgY2xhc3M9XCJldC1hcHBlYXJhbmNlLW5vbmUgZXQtYm9yZGVyIGV0LWJvcmRlci1ncmF5LTIwMCBldC1ib3JkZXItc29saWQgZXQtcm91bmRlZCBldC13LWZ1bGwgZXQtcHktMiBldC1weC0zIGV0LXRleHQtZ3JheS04MDAgZXQtbGVhZGluZy10aWdodCBmb2N1czpldC1vdXRsaW5lLW5vbmVcIlxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbi8+XG4iXX0=