import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class ButtonComponent {
    constructor() {
        this.clickEvent = new EventEmitter();
    }
    onClick(value) {
        this.clickEvent.emit(value);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBU25ILE1BQU0sT0FBTyxlQUFlO0lBUDVCO1FBYWEsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7S0FNakQ7SUFKRyxPQUFPLENBQUMsS0FBVztRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2lHQVZRLGVBQWU7dUVBQWYsZUFBZTs7UUNUNUIsaUNBQ0k7UUFEeUQsNEZBQVMsc0JBQWMsSUFBQztRQUNqRixrQkFBWTtRQUNoQixpQkFBUzs7UUFGYyxrREFBcUM7O2tERFMvQyxlQUFlO2NBUDNCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsU0FBUzthQUM3QztnQkFHWSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBR0csVUFBVTtrQkFEbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50Lmxlc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIHZhbHVlPzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNlY29uZGFyeT86IGJvb2xlYW47XG5cbiAgICBAT3V0cHV0KClcbiAgICByZWFkb25seSBjbGlja0V2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBvbkNsaWNrKHZhbHVlPzogYW55KSB7XG4gICAgICAgIHRoaXMuY2xpY2tFdmVudC5lbWl0KHZhbHVlKTtcbiAgICB9XG5cbn1cbiIsIjxidXR0b24gY2xhc3M9XCJidXR0b25cIiBbY2xhc3MuYnV0dG9uLS1zZWNvbmRhcnldPVwic2Vjb25kYXJ5XCIgKGNsaWNrKT1cIm9uQ2xpY2sodmFsdWUpXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9idXR0b24+XG4iXX0=