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
            this.favoriteChange.emit([false, this.id, this.title, this.cover, this.type]);
            this.favorite = false;
        }
        else {
            this.favoriteChange.emit([true, this.id, this.title, this.cover, this.type]);
            this.favorite = true;
        }
    };
    /** @nocollapse */ ButtonFavoriteComponent.ɵfac = function ButtonFavoriteComponent_Factory(t) { return new (t || ButtonFavoriteComponent)(); };
    /** @nocollapse */ ButtonFavoriteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonFavoriteComponent, selectors: [["lib-button-favorite"]], inputs: { favorite: "favorite", id: "id", title: "title", cover: "cover", type: "type" }, outputs: { favoriteChange: "favoriteChange" }, decls: 4, vars: 4, consts: [[1, "button-favorite", 3, "click"], [4, "ngIf", "ngIfElse"], ["isFav", ""], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"]], template: function ButtonFavoriteComponent_Template(rf, ctx) { if (rf & 1) {
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
        }], id: [{
            type: Input
        }], title: [{
            type: Input
        }], cover: [{
            type: Input
        }], type: [{
            type: Input
        }], favoriteChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWZhdm9yaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbi1mYXZvcml0ZS9idXR0b24tZmF2b3JpdGUuY29tcG9uZW50LnRzIiwibGliL2J1dHRvbi1mYXZvcml0ZS9idXR0b24tZmF2b3JpdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ0MvRyw2QkFDSTtJQUFBLG1CQUFrSjtJQUFsSiw4QkFBa0o7SUFBQSwwQkFBZ2M7SUFBQSxpQkFBTTtJQUM1bEIsMEJBQWU7OztJQUVYLG1CQUFrSjtJQUFsSiw4QkFBa0o7SUFBQSwwQkFBcVA7SUFBQSxpQkFBTTs7QURIclo7SUFBQTtRQVNXLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFPakIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBWW5EO0lBVkMsbURBQWlCLEdBQWpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNILENBQUM7cUhBbkJVLHVCQUF1QjttRkFBdkIsdUJBQXVCO1lDVHBDLGlDQUNJO1lBRHVFLG9HQUFTLHVCQUFtQixJQUFDO1lBQ3BHLDBGQUNJO1lBRUoseUhBQ0k7WUFFUixpQkFBUzs7O1lBUHVCLHVEQUEwQztZQUN4RCxlQUE2QjtZQUE3QixvQ0FBNkIsaUJBQUE7O2tDREQvQztDQThCQyxBQTVCRCxJQTRCQztTQXJCWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQVBuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7Z0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsU0FBUzthQUMzQztnQkFHVSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csRUFBRTtrQkFBVixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBR0csY0FBYztrQkFEdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWJ1dHRvbi1mYXZvcml0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tZmF2b3JpdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24tZmF2b3JpdGUuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25GYXZvcml0ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZmF2b3JpdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvdmVyPzogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlPzogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBmYXZvcml0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHRvZ2dsZVZhbHVlQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLmZhdm9yaXRlKSB7XG4gICAgICB0aGlzLmZhdm9yaXRlQ2hhbmdlLmVtaXQoW2ZhbHNlLCB0aGlzLmlkLCB0aGlzLnRpdGxlLCB0aGlzLmNvdmVyLCB0aGlzLnR5cGVdKTtcbiAgICAgIHRoaXMuZmF2b3JpdGUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mYXZvcml0ZUNoYW5nZS5lbWl0KFt0cnVlLCB0aGlzLmlkLCB0aGlzLnRpdGxlLCB0aGlzLmNvdmVyLCB0aGlzLnR5cGVdKTtcbiAgICAgIHRoaXMuZmF2b3JpdGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLWZhdm9yaXRlXCIgW2NsYXNzLmJ1dHRvbi1mYXZvcml0ZS0tYWN0aXZlXT1cImZhdm9yaXRlXCIgKGNsaWNrKT1cInRvZ2dsZVZhbHVlQ2hhbmdlKClcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZhdm9yaXRlOyBlbHNlIGlzRmF2XCI+XG4gICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cImhlYXJ0XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00NTguNCA2NC4zQzQwMC42IDE1LjcgMzExLjMgMjMgMjU2IDc5LjMgMjAwLjcgMjMgMTExLjQgMTUuNiA1My42IDY0LjMtMjEuNiAxMjcuNi0xMC42IDIzMC44IDQzIDI4NS41bDE3NS40IDE3OC43YzEwIDEwLjIgMjMuNCAxNS45IDM3LjYgMTUuOSAxNC4zIDAgMjcuNi01LjYgMzcuNi0xNS44TDQ2OSAyODUuNmM1My41LTU0LjcgNjQuNy0xNTcuOS0xMC42LTIyMS4zem0tMjMuNiAxODcuNUwyNTkuNCA0MzAuNWMtMi40IDIuNC00LjQgMi40LTYuOCAwTDc3LjIgMjUxLjhjLTM2LjUtMzcuMi00My45LTEwNy42IDcuMy0xNTAuNyAzOC45LTMyLjcgOTguOS0yNy44IDEzNi41IDEwLjVsMzUgMzUuNyAzNS0zNS43YzM3LjgtMzguNSA5Ny44LTQzLjIgMTM2LjUtMTAuNiA1MS4xIDQzLjEgNDMuNSAxMTMuOSA3LjMgMTUwLjh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjaXNGYXY+XG4gICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImhlYXJ0XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00NjIuMyA2Mi42QzQwNy41IDE1LjkgMzI2IDI0LjMgMjc1LjcgNzYuMkwyNTYgOTYuNWwtMTkuNy0yMC4zQzE4Ni4xIDI0LjMgMTA0LjUgMTUuOSA0OS43IDYyLjZjLTYyLjggNTMuNi02Ni4xIDE0OS44LTkuOSAyMDcuOWwxOTMuNSAxOTkuOGMxMi41IDEyLjkgMzIuOCAxMi45IDQ1LjMgMGwxOTMuNS0xOTkuOGM1Ni4zLTU4LjEgNTMtMTU0LjMtOS44LTIwNy45elwiPjwvcGF0aD48L3N2Zz5cbiAgICA8L25nLXRlbXBsYXRlPlxuPC9idXR0b24+XG4iXX0=