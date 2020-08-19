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
            this.favoriteChange.emit([false, this.id, this.title, this.cover, this.type]);
            this.favorite = false;
        }
        else {
            this.favoriteChange.emit([true, this.id, this.title, this.cover, this.type]);
            this.favorite = true;
        }
    }
}
/** @nocollapse */ ButtonFavoriteComponent.ɵfac = function ButtonFavoriteComponent_Factory(t) { return new (t || ButtonFavoriteComponent)(); };
/** @nocollapse */ ButtonFavoriteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonFavoriteComponent, selectors: [["lib-button-favorite"]], inputs: { favorite: "favorite", id: "id", title: "title", cover: "cover", type: "type" }, outputs: { favoriteChange: "favoriteChange" }, decls: 4, vars: 4, consts: [[1, "button-favorite", 3, "click"], [4, "ngIf", "ngIfElse"], ["isFav", ""], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"]], template: function ButtonFavoriteComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWZhdm9yaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbi1mYXZvcml0ZS9idXR0b24tZmF2b3JpdGUuY29tcG9uZW50LnRzIiwibGliL2J1dHRvbi1mYXZvcml0ZS9idXR0b24tZmF2b3JpdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ0N2SCw2QkFDSTtJQUFBLG1CQUFrSjtJQUFsSiw4QkFBa0o7SUFBQSwwQkFBZ2M7SUFBQSxpQkFBTTtJQUM1bEIsMEJBQWU7OztJQUVYLG1CQUFrSjtJQUFsSiw4QkFBa0o7SUFBQSwwQkFBcVA7SUFBQSxpQkFBTTs7QURJclosTUFBTSxPQUFPLHVCQUF1QjtJQVBwQztRQVNXLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFPakIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBWW5EO0lBVkMsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNILENBQUM7O2lIQW5CVSx1QkFBdUI7K0VBQXZCLHVCQUF1QjtRQ1RwQyxpQ0FDSTtRQUR1RSxvR0FBUyx1QkFBbUIsSUFBQztRQUNwRywwRkFDSTtRQUVKLHlIQUNJO1FBRVIsaUJBQVM7OztRQVB1Qix1REFBMEM7UUFDeEQsZUFBNkI7UUFBN0Isb0NBQTZCLGlCQUFBOztrRERRbEMsdUJBQXVCO2NBUG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTO2FBQzNDO2dCQUdVLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFHRyxjQUFjO2tCQUR0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1idXR0b24tZmF2b3JpdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWZhdm9yaXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWZhdm9yaXRlLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRmF2b3JpdGVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGZhdm9yaXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nO1xuICBASW5wdXQoKSBjb3Zlcj86IHN0cmluZztcbiAgQElucHV0KCkgdHlwZT86IHN0cmluZztcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZmF2b3JpdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICB0b2dnbGVWYWx1ZUNoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5mYXZvcml0ZSkge1xuICAgICAgdGhpcy5mYXZvcml0ZUNoYW5nZS5lbWl0KFtmYWxzZSwgdGhpcy5pZCwgdGhpcy50aXRsZSwgdGhpcy5jb3ZlciwgdGhpcy50eXBlXSk7XG4gICAgICB0aGlzLmZhdm9yaXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmF2b3JpdGVDaGFuZ2UuZW1pdChbdHJ1ZSwgdGhpcy5pZCwgdGhpcy50aXRsZSwgdGhpcy5jb3ZlciwgdGhpcy50eXBlXSk7XG4gICAgICB0aGlzLmZhdm9yaXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxufVxuIiwiPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi1mYXZvcml0ZVwiIFtjbGFzcy5idXR0b24tZmF2b3JpdGUtLWFjdGl2ZV09XCJmYXZvcml0ZVwiIChjbGljayk9XCJ0b2dnbGVWYWx1ZUNoYW5nZSgpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmYXZvcml0ZTsgZWxzZSBpc0ZhdlwiPlxuICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJoZWFydFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDU4LjQgNjQuM0M0MDAuNiAxNS43IDMxMS4zIDIzIDI1NiA3OS4zIDIwMC43IDIzIDExMS40IDE1LjYgNTMuNiA2NC4zLTIxLjYgMTI3LjYtMTAuNiAyMzAuOCA0MyAyODUuNWwxNzUuNCAxNzguN2MxMCAxMC4yIDIzLjQgMTUuOSAzNy42IDE1LjkgMTQuMyAwIDI3LjYtNS42IDM3LjYtMTUuOEw0NjkgMjg1LjZjNTMuNS01NC43IDY0LjctMTU3LjktMTAuNi0yMjEuM3ptLTIzLjYgMTg3LjVMMjU5LjQgNDMwLjVjLTIuNCAyLjQtNC40IDIuNC02LjggMEw3Ny4yIDI1MS44Yy0zNi41LTM3LjItNDMuOS0xMDcuNiA3LjMtMTUwLjcgMzguOS0zMi43IDk4LjktMjcuOCAxMzYuNSAxMC41bDM1IDM1LjcgMzUtMzUuN2MzNy44LTM4LjUgOTcuOC00My4yIDEzNi41LTEwLjYgNTEuMSA0My4xIDQzLjUgMTEzLjkgNy4zIDE1MC44elwiPjwvcGF0aD48L3N2Zz5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2lzRmF2PlxuICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJoZWFydFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDYyLjMgNjIuNkM0MDcuNSAxNS45IDMyNiAyNC4zIDI3NS43IDc2LjJMMjU2IDk2LjVsLTE5LjctMjAuM0MxODYuMSAyNC4zIDEwNC41IDE1LjkgNDkuNyA2Mi42Yy02Mi44IDUzLjYtNjYuMSAxNDkuOC05LjkgMjA3LjlsMTkzLjUgMTk5LjhjMTIuNSAxMi45IDMyLjggMTIuOSA0NS4zIDBsMTkzLjUtMTk5LjhjNTYuMy01OC4xIDUzLTE1NC4zLTkuOC0yMDcuOXpcIj48L3BhdGg+PC9zdmc+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbjwvYnV0dG9uPlxuIl19