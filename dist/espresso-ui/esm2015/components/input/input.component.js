import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class InputComponent {
    constructor() {
        this.value = '';
        this.placeholder = '';
        this.valueChange = new EventEmitter();
    }
    onInputValueChange(value) {
        this.valueChange.emit(value);
    }
}
/** @nocollapse */ InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
/** @nocollapse */ InputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InputComponent, selectors: [["lib-input"]], inputs: { value: "value", placeholder: "placeholder" }, outputs: { valueChange: "valueChange" }, decls: 1, vars: 2, consts: [[1, "native-input", 3, "placeholder", "ngModel", "ngModelChange"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "input", 0);
        i0.ɵɵlistener("ngModelChange", function InputComponent_Template_input_ngModelChange_0_listener($event) { return ctx.onInputValueChange($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("placeholder", ctx.placeholder)("ngModel", ctx.value);
    } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel], styles: ["[_nghost-%COMP%]{display:block;width:-webkit-max-content;width:-moz-max-content;width:max-content}.native-input[_ngcontent-%COMP%]{padding:16px;border-radius:4px}"], changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXNwcmVzc28tdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBUXRHLE1BQU0sT0FBTyxjQUFjO0lBTjNCO1FBUUksVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdYLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBR1IsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0tBS3JEO0lBSEcsa0JBQWtCLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzsrRkFaUSxjQUFjO3NFQUFkLGNBQWM7UUNSM0IsZ0NBTUE7UUFGSSxnSEFBaUIsOEJBQTBCLElBQUM7UUFKaEQsaUJBTUE7O1FBSkksNkNBQTJCLHNCQUFBOztrRERNbEIsY0FBYztjQU4xQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRDtnQkFHRyxLQUFLO2tCQURKLEtBQUs7WUFJTixXQUFXO2tCQURWLEtBQUs7WUFJRyxXQUFXO2tCQURuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWlucHV0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2lucHV0LmNvbXBvbmVudC5sZXNzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcbiAgICBASW5wdXQoKVxuICAgIHZhbHVlID0gJyc7XG5cbiAgICBASW5wdXQoKVxuICAgIHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgICBAT3V0cHV0KClcbiAgICByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG59XG4iLCI8aW5wdXRcbiAgICBjbGFzcz1cIm5hdGl2ZS1pbnB1dFwiXG4gICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwib25JbnB1dFZhbHVlQ2hhbmdlKCRldmVudClcIlxuLz5cbiJdfQ==