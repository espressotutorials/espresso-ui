import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ButtonFavoriteComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 3);
    i0.ɵɵelement(2, "path", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function ButtonFavoriteComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 5);
    i0.ɵɵelement(1, "path", 6);
    i0.ɵɵelementEnd();
} }
export class ButtonFavoriteComponent {
    constructor() {
        this.favorite = false;
        this.favoriteChange = new EventEmitter();
    }
    toggleValueChange() {
        if (this.favorite) {
            this.favoriteChange.emit(false);
        }
        else {
            this.favoriteChange.emit(true);
        }
    }
}
/** @nocollapse */ ButtonFavoriteComponent.ɵfac = function ButtonFavoriteComponent_Factory(t) { return new (t || ButtonFavoriteComponent)(); };
/** @nocollapse */ ButtonFavoriteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonFavoriteComponent, selectors: [["lib-button-favorite"]], inputs: { favorite: "favorite" }, outputs: { favoriteChange: "favoriteChange" }, decls: 4, vars: 4, consts: [[1, "button-favorite", 3, "click"], [4, "ngIf", "ngIfElse"], ["isFav", ""], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"]], template: function ButtonFavoriteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function ButtonFavoriteComponent_Template_button_click_0_listener() { return ctx.toggleValueChange(); });
        i0.ɵɵtemplate(1, ButtonFavoriteComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
        i0.ɵɵtemplate(2, ButtonFavoriteComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵclassProp("button-favorite--active", ctx.favorite);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.favorite)("ngIfElse", _r1);
    } }, directives: [i1.NgIf], styles: [".button-favorite{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0;display:flex;justify-content:center;align-items:center;width:28px;height:28px;color:var(--color-gray-500);cursor:pointer}.button-favorite:hover{color:var(--color-red-400)}.button-favorite svg{width:26px;height:26px;display:block;fill:currentColor;pointer-events:none}.button-favorite--active{color:var(--color-red-400)}"], encapsulation: 3, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonFavoriteComponent, [{
        type: Component,
        args: [{
                selector: 'lib-button-favorite',
                templateUrl: './button-favorite.component.html',
                styleUrls: ['./button-favorite.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, { favorite: [{
            type: Input
        }], favoriteChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWZhdm9yaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbi1mYXZvcml0ZS9idXR0b24tZmF2b3JpdGUuY29tcG9uZW50LnRzIiwibGliL2J1dHRvbi1mYXZvcml0ZS9idXR0b24tZmF2b3JpdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ0N2SCw2QkFDSTtJQUFBLG1CQUFrSjtJQUFsSiw4QkFBa0o7SUFBQSwwQkFBZ2M7SUFBQSxpQkFBTTtJQUM1bEIsMEJBQWU7OztJQUVYLG1CQUFrSjtJQUFsSiw4QkFBa0o7SUFBQSwwQkFBcVA7SUFBQSxpQkFBTTs7QURJclosTUFBTSxPQUFPLHVCQUF1QjtJQVBwQztRQVVFLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHUixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7S0FVdkQ7SUFSQyxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7aUhBZFUsdUJBQXVCOytFQUF2Qix1QkFBdUI7UUNUcEMsaUNBQ0k7UUFEdUUsb0dBQVMsdUJBQW1CLElBQUM7UUFDcEcsMEZBQ0k7UUFFSix5SEFDSTtRQUVSLGlCQUFTOzs7UUFQdUIsdURBQTBDO1FBQ3hELGVBQTZCO1FBQTdCLG9DQUE2QixpQkFBQTs7a0REUWxDLHVCQUF1QjtjQVBuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7Z0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsU0FBUzthQUMzQztnQkFJQyxRQUFRO2tCQURQLEtBQUs7WUFJRyxjQUFjO2tCQUR0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1idXR0b24tZmF2b3JpdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWZhdm9yaXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWZhdm9yaXRlLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRmF2b3JpdGVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIGZhdm9yaXRlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGZhdm9yaXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHRvZ2dsZVZhbHVlQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLmZhdm9yaXRlKSB7XG4gICAgICB0aGlzLmZhdm9yaXRlQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZhdm9yaXRlQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbn1cbiIsIjxidXR0b24gY2xhc3M9XCJidXR0b24tZmF2b3JpdGVcIiBbY2xhc3MuYnV0dG9uLWZhdm9yaXRlLS1hY3RpdmVdPVwiZmF2b3JpdGVcIiAoY2xpY2spPVwidG9nZ2xlVmFsdWVDaGFuZ2UoKVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmF2b3JpdGU7IGVsc2UgaXNGYXZcIj5cbiAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwiaGVhcnRcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ1OC40IDY0LjNDNDAwLjYgMTUuNyAzMTEuMyAyMyAyNTYgNzkuMyAyMDAuNyAyMyAxMTEuNCAxNS42IDUzLjYgNjQuMy0yMS42IDEyNy42LTEwLjYgMjMwLjggNDMgMjg1LjVsMTc1LjQgMTc4LjdjMTAgMTAuMiAyMy40IDE1LjkgMzcuNiAxNS45IDE0LjMgMCAyNy42LTUuNiAzNy42LTE1LjhMNDY5IDI4NS42YzUzLjUtNTQuNyA2NC43LTE1Ny45LTEwLjYtMjIxLjN6bS0yMy42IDE4Ny41TDI1OS40IDQzMC41Yy0yLjQgMi40LTQuNCAyLjQtNi44IDBMNzcuMiAyNTEuOGMtMzYuNS0zNy4yLTQzLjktMTA3LjYgNy4zLTE1MC43IDM4LjktMzIuNyA5OC45LTI3LjggMTM2LjUgMTAuNWwzNSAzNS43IDM1LTM1LjdjMzcuOC0zOC41IDk3LjgtNDMuMiAxMzYuNS0xMC42IDUxLjEgNDMuMSA0My41IDExMy45IDcuMyAxNTAuOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNpc0Zhdj5cbiAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiaGVhcnRcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ2Mi4zIDYyLjZDNDA3LjUgMTUuOSAzMjYgMjQuMyAyNzUuNyA3Ni4yTDI1NiA5Ni41bC0xOS43LTIwLjNDMTg2LjEgMjQuMyAxMDQuNSAxNS45IDQ5LjcgNjIuNmMtNjIuOCA1My42LTY2LjEgMTQ5LjgtOS45IDIwNy45bDE5My41IDE5OS44YzEyLjUgMTIuOSAzMi44IDEyLjkgNDUuMyAwbDE5My41LTE5OS44YzU2LjMtNTguMSA1My0xNTQuMy05LjgtMjA3Ljl6XCI+PC9wYXRoPjwvc3ZnPlxuICAgIDwvbmctdGVtcGxhdGU+XG48L2J1dHRvbj5cbiJdfQ==