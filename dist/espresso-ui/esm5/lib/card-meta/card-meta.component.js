import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CardMetaComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 7);
    i0.ɵɵelement(2, "path", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function CardMetaComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 9);
    i0.ɵɵelement(1, "path", 10);
    i0.ɵɵelementEnd();
} }
function CardMetaComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 11);
    i0.ɵɵelement(2, "path", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function CardMetaComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 13);
    i0.ɵɵelement(1, "path", 14);
    i0.ɵɵelementEnd();
} }
var CardMetaComponent = /** @class */ (function () {
    function CardMetaComponent() {
    }
    /** @nocollapse */ CardMetaComponent.ɵfac = function CardMetaComponent_Factory(t) { return new (t || CardMetaComponent)(); };
    /** @nocollapse */ CardMetaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CardMetaComponent, selectors: [["lib-card-meta"]], inputs: { type: "type", typeTitle: "typeTitle", duration: "duration", level: "level" }, decls: 21, vars: 7, consts: [[1, "card__meta"], [1, "card__meta__entry"], [4, "ngIf", "ngIfElse"], ["isVideo", ""], ["isDuration", ""], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "award", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 384 512"], ["fill", "currentColor", "d", "M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "book", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512"], ["fill", "currentColor", "d", "M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "film", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "copy", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512"], ["fill", "currentColor", "d", "M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "stopwatch", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512"], ["fill", "currentColor", "d", "M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"]], template: function CardMetaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "i");
            i0.ɵɵtemplate(3, CardMetaComponent_ng_container_3_Template, 3, 0, "ng-container", 2);
            i0.ɵɵtemplate(4, CardMetaComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 1);
            i0.ɵɵelementStart(9, "i");
            i0.ɵɵtemplate(10, CardMetaComponent_ng_container_10_Template, 3, 0, "ng-container", 2);
            i0.ɵɵtemplate(11, CardMetaComponent_ng_template_11_Template, 2, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "span");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 1);
            i0.ɵɵelementStart(16, "i");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(17, "svg", 5);
            i0.ɵɵelement(18, "path", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(19, "span");
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r1 = i0.ɵɵreference(5);
            var _r4 = i0.ɵɵreference(12);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.type === "book")("ngIfElse", _r1);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.typeTitle);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.type === "book")("ngIfElse", _r4);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.duration);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.level);
        } }, directives: [i1.NgIf], styles: [".card__meta{box-sizing:border-box;padding:0 0 1rem;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center}.card__meta .card__meta__entry{width:auto;margin-right:.45rem;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;font-size:.75rem;color:var(--color-gray-400)}.card__meta .card__meta__entry i,.card__meta .card__meta__entry i svg{width:12px;height:12px;color:var(--color-blue-400)}.card__meta .card__meta__entry span{padding-left:.15rem}"], encapsulation: 3, changeDetection: 0 });
    return CardMetaComponent;
}());
export { CardMetaComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardMetaComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card-meta',
                templateUrl: './card-meta.component.html',
                styleUrls: ['./card-meta.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, { type: [{
            type: Input
        }], typeTitle: [{
            type: Input
        }], duration: [{
            type: Input
        }], level: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2NhcmQtbWV0YS9jYXJkLW1ldGEuY29tcG9uZW50LnRzIiwibGliL2NhcmQtbWV0YS9jYXJkLW1ldGEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUNHakYsNkJBQ0k7SUFBQSxtQkFBaUo7SUFBakosOEJBQWlKO0lBQUEsMEJBQTRkO0lBQUEsaUJBQU07SUFDdm5CLDBCQUFlOzs7SUFFWCxtQkFBaUo7SUFBakosOEJBQWlKO0lBQUEsMkJBQTBtQztJQUFBLGlCQUFNOzs7SUFPcndDLDZCQUNJO0lBQUEsbUJBQWlKO0lBQWpKLCtCQUFpSjtJQUFBLDJCQUFxWTtJQUFBLGlCQUFNO0lBQ2hpQiwwQkFBZTs7O0lBRVgsbUJBQXNKO0lBQXRKLCtCQUFzSjtJQUFBLDJCQUE0YztJQUFBLGlCQUFNOztBRGhCeG5CO0lBQUE7S0FjQzt5R0FQWSxpQkFBaUI7NkVBQWpCLGlCQUFpQjtZQ1Q5Qiw4QkFDSTtZQUFBLDhCQUNJO1lBQUEseUJBQ0k7WUFBQSxvRkFDSTtZQUVKLG1IQUNJO1lBRVIsaUJBQUk7WUFDSiw0QkFBTTtZQUFBLFlBQWE7WUFBQSxpQkFBTztZQUM5QixpQkFBTTtZQUNOLDhCQUNJO1lBQUEseUJBQ0k7WUFBQSxzRkFDSTtZQUVKLHFIQUNJO1lBRVIsaUJBQUk7WUFDSiw2QkFBTTtZQUFBLGFBQVk7WUFBQSxpQkFBTztZQUM3QixpQkFBTTtZQUNOLCtCQUNJO1lBQUEsMEJBQ0k7WUFBQSxtQkFBa0o7WUFBbEosK0JBQWtKO1lBQUEsMkJBQXc4QztZQUFBLGlCQUFNO1lBQ3BtRCxpQkFBSTtZQUNKLG9CQUFNO1lBQU4sNkJBQU07WUFBQSxhQUFTO1lBQUEsaUJBQU87WUFDMUIsaUJBQU07WUFDVixpQkFBTTs7OztZQTFCb0IsZUFBcUM7WUFBckMsMENBQXFDLGlCQUFBO1lBT2pELGVBQWE7WUFBYixtQ0FBYTtZQUlELGVBQXdDO1lBQXhDLDBDQUF3QyxpQkFBQTtZQU9wRCxlQUFZO1lBQVosa0NBQVk7WUFNWixlQUFTO1lBQVQsK0JBQVM7OzRCRDNCdkI7Q0FnQkMsQUFkRCxJQWNDO1NBUFksaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FQN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTO2FBQzNDO2dCQUdVLElBQUk7a0JBQVosS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jYXJkLW1ldGEnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1tZXRhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC1tZXRhLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZE1ldGFDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZVRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxldmVsOiBzdHJpbmc7XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkX19tZXRhXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRfX21ldGFfX2VudHJ5XCI+XG4gICAgICAgIDxpPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT09ICdib29rJzsgZWxzZSBpc1ZpZGVvXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiYm9va1wiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDQ4IDM2MFYyNGMwLTEzLjMtMTAuNy0yNC0yNC0yNEg5NkM0MyAwIDAgNDMgMCA5NnYzMjBjMCA1MyA0MyA5NiA5NiA5NmgzMjhjMTMuMyAwIDI0LTEwLjcgMjQtMjR2LTE2YzAtNy41LTMuNS0xNC4zLTguOS0xOC43LTQuMi0xNS40LTQuMi01OS4zIDAtNzQuNyA1LjQtNC4zIDguOS0xMS4xIDguOS0xOC42ek0xMjggMTM0YzAtMy4zIDIuNy02IDYtNmgyMTJjMy4zIDAgNiAyLjcgNiA2djIwYzAgMy4zLTIuNyA2LTYgNkgxMzRjLTMuMyAwLTYtMi43LTYtNnYtMjB6bTAgNjRjMC0zLjMgMi43LTYgNi02aDIxMmMzLjMgMCA2IDIuNyA2IDZ2MjBjMCAzLjMtMi43IDYtNiA2SDEzNGMtMy4zIDAtNi0yLjctNi02di0yMHptMjUzLjQgMjUwSDk2Yy0xNy43IDAtMzItMTQuMy0zMi0zMiAwLTE3LjYgMTQuNC0zMiAzMi0zMmgyODUuNGMtMS45IDE3LjEtMS45IDQ2LjkgMCA2NHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaXNWaWRlbz5cbiAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJmaWxtXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00ODggNjRoLTh2MjBjMCA2LjYtNS40IDEyLTEyIDEyaC00MGMtNi42IDAtMTItNS40LTEyLTEyVjY0SDk2djIwYzAgNi42LTUuNCAxMi0xMiAxMkg0NGMtNi42IDAtMTItNS40LTEyLTEyVjY0aC04QzEwLjcgNjQgMCA3NC43IDAgODh2MzM2YzAgMTMuMyAxMC43IDI0IDI0IDI0aDh2LTIwYzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2MjBoMzIwdi0yMGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjIwaDhjMTMuMyAwIDI0LTEwLjcgMjQtMjRWODhjMC0xMy4zLTEwLjctMjQtMjQtMjR6TTk2IDM3MmMwIDYuNi01LjQgMTItMTIgMTJINDRjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDBjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MHptMC05NmMwIDYuNi01LjQgMTItMTIgMTJINDRjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDBjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MHptMC05NmMwIDYuNi01LjQgMTItMTIgMTJINDRjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDBjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MHptMjcyIDIwOGMwIDYuNi01LjQgMTItMTIgMTJIMTU2Yy02LjYgMC0xMi01LjQtMTItMTJ2LTk2YzAtNi42IDUuNC0xMiAxMi0xMmgyMDBjNi42IDAgMTIgNS40IDEyIDEydjk2em0wLTE2OGMwIDYuNi01LjQgMTItMTIgMTJIMTU2Yy02LjYgMC0xMi01LjQtMTItMTJ2LTk2YzAtNi42IDUuNC0xMiAxMi0xMmgyMDBjNi42IDAgMTIgNS40IDEyIDEydjk2em0xMTIgMTUyYzAgNi42LTUuNCAxMi0xMiAxMmgtNDBjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDBjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MHptMC05NmMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJ2LTQwYzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2NDB6bTAtOTZjMCA2LjYtNS40IDEyLTEyIDEyaC00MGMtNi42IDAtMTItNS40LTEyLTEydi00MGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwelwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvaT5cbiAgICAgICAgPHNwYW4+e3t0eXBlVGl0bGV9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fbWV0YV9fZW50cnlcIj5cbiAgICAgICAgPGk+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PT0gJ2Jvb2snOyBlbHNlIGlzRHVyYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJjb3B5XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zMjAgNDQ4djQwYzAgMTMuMjU1LTEwLjc0NSAyNC0yNCAyNEgyNGMtMTMuMjU1IDAtMjQtMTAuNzQ1LTI0LTI0VjEyMGMwLTEzLjI1NSAxMC43NDUtMjQgMjQtMjRoNzJ2Mjk2YzAgMzAuODc5IDI1LjEyMSA1NiA1NiA1NmgxNjh6bTAtMzQ0VjBIMTUyYy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR2MzY4YzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgyNzJjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0VjEyOEgzNDRjLTEzLjIgMC0yNC0xMC44LTI0LTI0em0xMjAuOTcxLTMxLjAyOUwzNzUuMDI5IDcuMDI5QTI0IDI0IDAgMCAwIDM1OC4wNTkgMEgzNTJ2OTZoOTZ2LTYuMDU5YTI0IDI0IDAgMCAwLTcuMDI5LTE2Ljk3elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNpc0R1cmF0aW9uPlxuICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInN0b3B3YXRjaFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDMyIDMwNGMwIDExNC45LTkzLjEgMjA4LTIwOCAyMDhTMTYgNDE4LjkgMTYgMzA0YzAtMTA0IDc2LjMtMTkwLjIgMTc2LTIwNS41VjY0aC0yOGMtNi42IDAtMTItNS40LTEyLTEyVjEyYzAtNi42IDUuNC0xMiAxMi0xMmgxMjBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMmgtMjh2MzQuNWMzNy41IDUuOCA3MS43IDIxLjYgOTkuNyA0NC42bDI3LjUtMjcuNWM0LjctNC43IDEyLjMtNC43IDE3IDBsMjguMyAyOC4zYzQuNyA0LjcgNC43IDEyLjMgMCAxN2wtMjkuNCAyOS40LS42LjZDNDE5LjcgMjIzLjMgNDMyIDI2Mi4yIDQzMiAzMDR6bS0xNzYgMzZWMTg4LjVjMC02LjYtNS40LTEyLTEyLTEyaC00MGMtNi42IDAtMTIgNS40LTEyIDEyVjM0MGMwIDYuNiA1LjQgMTIgMTIgMTJoNDBjNi42IDAgMTItNS40IDEyLTEyelwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvaT5cbiAgICAgICAgPHNwYW4+e3tkdXJhdGlvbn19PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkX19tZXRhX19lbnRyeVwiPlxuICAgICAgICA8aT5cbiAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImF3YXJkXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk05Ny4xMiAzNjIuNjNjLTguNjktOC42OS00LjE2LTYuMjQtMjUuMTItMTEuODUtOS41MS0yLjU1LTE3Ljg3LTcuNDUtMjUuNDMtMTMuMzJMMS4yIDQ0OC43Yy00LjM5IDEwLjc3IDMuODEgMjIuNDcgMTUuNDMgMjIuMDNsNTIuNjktMi4wMUwxMDUuNTYgNTA3YzggOC40NCAyMi4wNCA1LjgxIDI2LjQzLTQuOTZsNTIuMDUtMTI3LjYyYy0xMC44NCA2LjA0LTIyLjg3IDkuNTgtMzUuMzEgOS41OC0xOS41IDAtMzcuODItNy41OS01MS42MS0yMS4zN3pNMzgyLjggNDQ4LjdsLTQ1LjM3LTExMS4yNGMtNy41NiA1Ljg4LTE1LjkyIDEwLjc3LTI1LjQzIDEzLjMyLTIxLjA3IDUuNjQtMTYuNDUgMy4xOC0yNS4xMiAxMS44NS0xMy43OSAxMy43OC0zMi4xMiAyMS4zNy01MS42MiAyMS4zNy0xMi40NCAwLTI0LjQ3LTMuNTUtMzUuMzEtOS41OEwyNTIgNTAyLjA0YzQuMzkgMTAuNzcgMTguNDQgMTMuNCAyNi40MyA0Ljk2bDM2LjI1LTM4LjI4IDUyLjY5IDIuMDFjMTEuNjIuNDQgMTkuODItMTEuMjcgMTUuNDMtMjIuMDN6TTI2MyAzNDBjMTUuMjgtMTUuNTUgMTcuMDMtMTQuMjEgMzguNzktMjAuMTQgMTMuODktMy43OSAyNC43NS0xNC44NCAyOC40Ny0yOC45OCA3LjQ4LTI4LjQgNS41NC0yNC45NyAyNS45NS00NS43NSAxMC4xNy0xMC4zNSAxNC4xNC0yNS40NCAxMC40Mi0zOS41OC03LjQ3LTI4LjM4LTcuNDgtMjQuNDIgMC01Mi44MyAzLjcyLTE0LjE0LS4yNS0yOS4yMy0xMC40Mi0zOS41OC0yMC40MS0yMC43OC0xOC40Ny0xNy4zNi0yNS45NS00NS43NS0zLjcyLTE0LjE0LTE0LjU4LTI1LjE5LTI4LjQ3LTI4Ljk4LTI3Ljg4LTcuNjEtMjQuNTItNS42Mi00NC45NS0yNi40MS0xMC4xNy0xMC4zNS0yNS0xNC40LTM4Ljg5LTEwLjYxLTI3Ljg3IDcuNi0yMy45OCA3LjYxLTUxLjkgMC0xMy44OS0zLjc5LTI4LjcyLjI1LTM4Ljg5IDEwLjYxLTIwLjQxIDIwLjc4LTE3LjA1IDE4LjgtNDQuOTQgMjYuNDEtMTMuODkgMy43OS0yNC43NSAxNC44NC0yOC40NyAyOC45OC03LjQ3IDI4LjM5LTUuNTQgMjQuOTctMjUuOTUgNDUuNzUtMTAuMTcgMTAuMzUtMTQuMTUgMjUuNDQtMTAuNDIgMzkuNTggNy40NyAyOC4zNiA3LjQ4IDI0LjQgMCA1Mi44Mi0zLjcyIDE0LjE0LjI1IDI5LjIzIDEwLjQyIDM5LjU5IDIwLjQxIDIwLjc4IDE4LjQ3IDE3LjM1IDI1Ljk1IDQ1Ljc1IDMuNzIgMTQuMTQgMTQuNTggMjUuMTkgMjguNDcgMjguOThDMTA0LjYgMzI1Ljk2IDEwNi4yNyAzMjUgMTIxIDM0MGMxMy4yMyAxMy40NyAzMy44NCAxNS44OCA0OS43NCA1LjgyYTM5LjY3NiAzOS42NzYgMCAwIDEgNDIuNTMgMGMxNS44OSAxMC4wNiAzNi41IDcuNjUgNDkuNzMtNS44MnpNOTcuNjYgMTc1Ljk2YzAtNTMuMDMgNDIuMjQtOTYuMDIgOTQuMzQtOTYuMDJzOTQuMzQgNDIuOTkgOTQuMzQgOTYuMDItNDIuMjQgOTYuMDItOTQuMzQgOTYuMDItOTQuMzQtNDIuOTktOTQuMzQtOTYuMDJ6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICA8L2k+XG4gICAgICAgIDxzcGFuPnt7bGV2ZWx9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19