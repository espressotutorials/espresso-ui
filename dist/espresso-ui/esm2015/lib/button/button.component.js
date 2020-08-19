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
    } }, styles: [".button{width:100%;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:var(--color-blue-400);color:var(--color-white);font-size:.875rem;font-weight:700;cursor:pointer;padding:.5rem 1rem;border-radius:.25rem}.button--secondary,.button:hover{background:var(--color-orange-400)}.button--secondary:hover{background:var(--color-blue-400)}"], encapsulation: 3, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBU25ILE1BQU0sT0FBTyxlQUFlO0lBUDVCO1FBYWEsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FNcEQ7SUFKRyxPQUFPLENBQUMsS0FBYztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOztpR0FWUSxlQUFlO3VFQUFmLGVBQWU7O1FDVDVCLGlDQUNJO1FBRHlELDRGQUFTLHNCQUFjLElBQUM7UUFDakYsa0JBQVk7UUFDaEIsaUJBQVM7O1FBRmMsa0RBQXFDOztrRERTL0MsZUFBZTtjQVAzQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7YUFDN0M7Z0JBR1ksS0FBSztrQkFBYixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUdHLFVBQVU7a0JBRGxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWJ1dHRvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5sZXNzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKSB2YWx1ZT86IHN0cmluZztcbiAgICBASW5wdXQoKSBzZWNvbmRhcnk/OiBib29sZWFuO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcmVhZG9ubHkgY2xpY2tFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgb25DbGljayh2YWx1ZT86IHN0cmluZykge1xuICAgICAgICB0aGlzLmNsaWNrRXZlbnQuZW1pdCh2YWx1ZSk7XG4gICAgfVxuXG59XG4iLCI8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgW2NsYXNzLmJ1dHRvbi0tc2Vjb25kYXJ5XT1cInNlY29uZGFyeVwiIChjbGljayk9XCJvbkNsaWNrKHZhbHVlKVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvYnV0dG9uPlxuIl19