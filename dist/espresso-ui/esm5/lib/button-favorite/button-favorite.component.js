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
var ButtonFavoriteComponent = /** @class */ (function () {
    function ButtonFavoriteComponent() {
        this.favorite = false;
        this.favoriteChange = new EventEmitter();
    }
    ButtonFavoriteComponent.prototype.toggleValueChange = function () {
        if (this.favorite) {
            this.favoriteChange.emit(false);
        }
        else {
            this.favoriteChange.emit(true);
        }
    };
    /** @nocollapse */ ButtonFavoriteComponent.ɵfac = function ButtonFavoriteComponent_Factory(t) { return new (t || ButtonFavoriteComponent)(); };
    /** @nocollapse */ ButtonFavoriteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonFavoriteComponent, selectors: [["lib-button-favorite"]], inputs: { favorite: "favorite" }, outputs: { favoriteChange: "favoriteChange" }, decls: 4, vars: 4, consts: [[1, "button-favorite", 3, "click"], [4, "ngIf", "ngIfElse"], ["isFav", ""], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"]], template: function ButtonFavoriteComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ButtonFavoriteComponent_Template_button_click_0_listener() { return ctx.toggleValueChange(); });
            i0.ɵɵtemplate(1, ButtonFavoriteComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
            i0.ɵɵtemplate(2, ButtonFavoriteComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r1 = i0.ɵɵreference(3);
            i0.ɵɵclassProp("button-favorite--active", ctx.favorite);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.favorite)("ngIfElse", _r1);
        } }, directives: [i1.NgIf], styles: [".button-favorite{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0;display:flex;justify-content:center;align-items:center;width:28px;height:28px;color:var(--color-gray-500);cursor:pointer}.button-favorite:hover{color:var(--color-red-400)}.button-favorite svg{width:26px;height:26px;display:block;fill:currentColor;pointer-events:none}.button-favorite--active{color:var(--color-red-400)}"], encapsulation: 3, changeDetection: 0 });
    return ButtonFavoriteComponent;
}());
export { ButtonFavoriteComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWZhdm9yaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbi1mYXZvcml0ZS9idXR0b24tZmF2b3JpdGUuY29tcG9uZW50LnRzIiwibGliL2J1dHRvbi1mYXZvcml0ZS9idXR0b24tZmF2b3JpdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ0N2SCw2QkFDSTtJQUFBLG1CQUFrSjtJQUFsSiw4QkFBa0o7SUFBQSwwQkFBZ2M7SUFBQSxpQkFBTTtJQUM1bEIsMEJBQWU7OztJQUVYLG1CQUFrSjtJQUFsSiw4QkFBa0o7SUFBQSwwQkFBcVA7SUFBQSxpQkFBTTs7QURIclo7SUFBQTtRQVVFLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHUixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7S0FVdkQ7SUFSQyxtREFBaUIsR0FBakI7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztxSEFkVSx1QkFBdUI7bUZBQXZCLHVCQUF1QjtZQ1RwQyxpQ0FDSTtZQUR1RSxvR0FBUyx1QkFBbUIsSUFBQztZQUNwRywwRkFDSTtZQUVKLHlIQUNJO1lBRVIsaUJBQVM7OztZQVB1Qix1REFBMEM7WUFDeEQsZUFBNkI7WUFBN0Isb0NBQTZCLGlCQUFBOztrQ0REL0M7Q0F5QkMsQUF2QkQsSUF1QkM7U0FoQlksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FQbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2dCQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7YUFDM0M7Z0JBSUMsUUFBUTtrQkFEUCxLQUFLO1lBSUcsY0FBYztrQkFEdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYnV0dG9uLWZhdm9yaXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1mYXZvcml0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1mYXZvcml0ZS5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkZhdm9yaXRlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBmYXZvcml0ZSA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBmYXZvcml0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICB0b2dnbGVWYWx1ZUNoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5mYXZvcml0ZSkge1xuICAgICAgdGhpcy5mYXZvcml0ZUNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mYXZvcml0ZUNoYW5nZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLWZhdm9yaXRlXCIgW2NsYXNzLmJ1dHRvbi1mYXZvcml0ZS0tYWN0aXZlXT1cImZhdm9yaXRlXCIgKGNsaWNrKT1cInRvZ2dsZVZhbHVlQ2hhbmdlKClcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZhdm9yaXRlOyBlbHNlIGlzRmF2XCI+XG4gICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cImhlYXJ0XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00NTguNCA2NC4zQzQwMC42IDE1LjcgMzExLjMgMjMgMjU2IDc5LjMgMjAwLjcgMjMgMTExLjQgMTUuNiA1My42IDY0LjMtMjEuNiAxMjcuNi0xMC42IDIzMC44IDQzIDI4NS41bDE3NS40IDE3OC43YzEwIDEwLjIgMjMuNCAxNS45IDM3LjYgMTUuOSAxNC4zIDAgMjcuNi01LjYgMzcuNi0xNS44TDQ2OSAyODUuNmM1My41LTU0LjcgNjQuNy0xNTcuOS0xMC42LTIyMS4zem0tMjMuNiAxODcuNUwyNTkuNCA0MzAuNWMtMi40IDIuNC00LjQgMi40LTYuOCAwTDc3LjIgMjUxLjhjLTM2LjUtMzcuMi00My45LTEwNy42IDcuMy0xNTAuNyAzOC45LTMyLjcgOTguOS0yNy44IDEzNi41IDEwLjVsMzUgMzUuNyAzNS0zNS43YzM3LjgtMzguNSA5Ny44LTQzLjIgMTM2LjUtMTAuNiA1MS4xIDQzLjEgNDMuNSAxMTMuOSA3LjMgMTUwLjh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjaXNGYXY+XG4gICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImhlYXJ0XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00NjIuMyA2Mi42QzQwNy41IDE1LjkgMzI2IDI0LjMgMjc1LjcgNzYuMkwyNTYgOTYuNWwtMTkuNy0yMC4zQzE4Ni4xIDI0LjMgMTA0LjUgMTUuOSA0OS43IDYyLjZjLTYyLjggNTMuNi02Ni4xIDE0OS44LTkuOSAyMDcuOWwxOTMuNSAxOTkuOGMxMi41IDEyLjkgMzIuOCAxMi45IDQ1LjMgMGwxOTMuNS0xOTkuOGM1Ni4zLTU4LjEgNTMtMTU0LjMtOS44LTIwNy45elwiPjwvcGF0aD48L3N2Zz5cbiAgICA8L25nLXRlbXBsYXRlPlxuPC9idXR0b24+XG4iXX0=