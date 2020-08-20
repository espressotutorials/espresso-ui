import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent() {
    }
    /** @nocollapse */ TestimonialComponent.ɵfac = function TestimonialComponent_Factory(t) { return new (t || TestimonialComponent)(); };
    /** @nocollapse */ TestimonialComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TestimonialComponent, selectors: [["lib-testimonial"]], inputs: { name: "name", text: "text", image: "image", position: "position" }, decls: 13, vars: 5, consts: [[1, "testimonial"], [1, "testimonial__icon"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 975.036 975.036"], ["d", "M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"], [1, "testimonial__text", 3, "innerHTML"], [1, "testimonial__meta"], [1, "testimonial__meta__image"], [3, "src", "alt"], [1, "testimonial__meta__info"]], template: function TestimonialComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 2);
            i0.ɵɵelement(3, "path", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(4, "div", 4);
            i0.ɵɵelementStart(5, "div", 5);
            i0.ɵɵelementStart(6, "div", 6);
            i0.ɵɵelement(7, "img", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 8);
            i0.ɵɵelementStart(9, "h3");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "h4");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("innerHTML", ctx.text, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("src", ctx.image, i0.ɵɵsanitizeUrl)("alt", ctx.name);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.position);
        } }, styles: [".testimonial[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;padding:1rem}.testimonial[_ngcontent-%COMP%]   .testimonial__icon[_ngcontent-%COMP%], .testimonial[_ngcontent-%COMP%]   .testimonial__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{box-sizing:border-box;display:block;width:1.25rem;height:1.25rem;color:var(--color-blue-400);margin-bottom:1rem}.testimonial[_ngcontent-%COMP%]   .testimonial__meta[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin-top:1rem;margin-bottom:0}.testimonial[_ngcontent-%COMP%]   .testimonial__meta[_ngcontent-%COMP%]   .testimonial__meta__image[_ngcontent-%COMP%]{box-sizing:border-box;width:90px;height:90px;margin:0}.testimonial[_ngcontent-%COMP%]   .testimonial__meta[_ngcontent-%COMP%]   .testimonial__meta__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90px;height:90px;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;border-radius:var(--radius-full)}.testimonial[_ngcontent-%COMP%]   .testimonial__meta[_ngcontent-%COMP%]   .testimonial__meta__info[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;padding-left:0}@media (min-width:680px){.testimonial[_ngcontent-%COMP%]   .testimonial__meta[_ngcontent-%COMP%]   .testimonial__meta__info[_ngcontent-%COMP%]{width:calc(100% - 96px);padding-left:.75rem}}.testimonial[_ngcontent-%COMP%]   .testimonial__meta[_ngcontent-%COMP%]   .testimonial__meta__info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{box-sizing:border-box;color:var(--color-gray-500);font-size:1rem;margin:0 0 .25rem;font-weight:400}.testimonial[_ngcontent-%COMP%]   .testimonial__meta[_ngcontent-%COMP%]   .testimonial__meta__info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{box-sizing:border-box;color:var(--color-gray-300);font-size:.75rem;margin:0;font-weight:400}.testimonial[_ngcontent-%COMP%]   .testimonial__text[_ngcontent-%COMP%]{box-sizing:border-box;font-size:1rem;line-height:1.625;color:var(--color-gray-500)}.testimonial[_ngcontent-%COMP%]   .testimonial__text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-blue-400)}.testimonial[_ngcontent-%COMP%]   .testimonial__text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--color-orange-400)}.testimonial[_ngcontent-%COMP%]   .testimonial__text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .testimonial[_ngcontent-%COMP%]   .testimonial__text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:1rem}.testimonial[_ngcontent-%COMP%]   .testimonial__text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .testimonial[_ngcontent-%COMP%]   .testimonial__text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.25rem}.testimonial[_ngcontent-%COMP%]   .testimonial__text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, .testimonial[_ngcontent-%COMP%]   .testimonial__text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, .testimonial[_ngcontent-%COMP%]   .testimonial__text[_ngcontent-%COMP%]:last-child{margin-bottom:0}"] });
    return TestimonialComponent;
}());
export { TestimonialComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TestimonialComponent, [{
        type: Component,
        args: [{
                selector: 'lib-testimonial',
                templateUrl: './testimonial.component.html',
                styleUrls: ['./testimonial.component.less']
            }]
    }], null, { name: [{
            type: Input
        }], text: [{
            type: Input
        }], image: [{
            type: Input
        }], position: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGltb25pYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXNwcmVzc28tdWkvIiwic291cmNlcyI6WyJsaWIvdGVzdGltb25pYWwvdGVzdGltb25pYWwuY29tcG9uZW50LnRzIiwibGliL3Rlc3RpbW9uaWFsL3Rlc3RpbW9uaWFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVqRDtJQUFBO0tBWUM7K0dBUFksb0JBQW9CO2dGQUFwQixvQkFBb0I7WUNQakMsOEJBQ0k7WUFBQSw4QkFDSTtZQUFBLG1CQUNJO1lBREosOEJBQ0k7WUFBQSwwQkFBK3NCO1lBQ250QixpQkFBTTtZQUNWLGlCQUFNO1lBQ04sb0JBQXdEO1lBQXhELHlCQUF3RDtZQUN4RCw4QkFDSTtZQUFBLDhCQUNJO1lBQUEseUJBQ0o7WUFBQSxpQkFBTTtZQUNOLDhCQUNJO1lBQUEsMEJBQUk7WUFBQSxhQUFRO1lBQUEsaUJBQUs7WUFDakIsMkJBQUk7WUFBQSxhQUFZO1lBQUEsaUJBQUs7WUFDekIsaUJBQU07WUFDVixpQkFBTTtZQUNWLGlCQUFNOztZQVY2QixlQUFrQjtZQUFsQix1REFBa0I7WUFHcEMsZUFBYTtZQUFiLGlEQUFhLGlCQUFBO1lBR2QsZUFBUTtZQUFSLDhCQUFRO1lBQ1IsZUFBWTtZQUFaLGtDQUFZOzsrQkRiNUI7Q0FjQyxBQVpELElBWUM7U0FQWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7Z0JBR1UsSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRlc3RpbW9uaWFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rlc3RpbW9uaWFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGVzdGltb25pYWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZXN0aW1vbmlhbENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBzdHJpbmc7XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0ZXN0aW1vbmlhbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXN0aW1vbmlhbF9faWNvblwiPlxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCA5NzUuMDM2IDk3NS4wMzZcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTI1LjAzNiA1Ny4xOTdoLTMwNGMtMjcuNiAwLTUwIDIyLjQtNTAgNTB2MzA0YzAgMjcuNjAxIDIyLjQgNTAgNTAgNTBoMTQ1LjVjLTEuOSA3OS42MDEtMjAuNCAxNDMuMy01NS40IDE5MS4yLTI3LjYgMzcuOC02OS4zOTkgNjkuMS0xMjUuMyA5My44LTI1LjcgMTEuMy0zNi44IDQxLjctMjQuOCA2Ny4xMDFsMzYgNzZjMTEuNiAyNC4zOTkgNDAuMyAzNS4xIDY1LjEgMjQuMzk5IDY2LjItMjguNiAxMjIuMTAxLTY0LjggMTY3LjctMTA4LjggNTUuNjAxLTUzLjcgOTMuNy0xMTQuMyAxMTQuMy0xODEuOSAyMC42MDEtNjcuNiAzMC45LTE1OS44IDMwLjktMjc2Ljh2LTIzOWMwLTI3LjU5OS0yMi40MDEtNTAtNTAtNTB6TTEwNi4wMzYgOTEzLjQ5N2M2NS40LTI4LjUgMTIxLTY0LjY5OSAxNjYuOS0xMDguNiA1Ni4xLTUzLjcgOTQuNC0xMTQuMSAxMTUtMTgxLjIgMjAuNi02Ny4xIDMwLjg5OS0xNTkuNiAzMC44OTktMjc3LjV2LTIzOWMwLTI3LjYtMjIuMzk5LTUwLTUwLTUwaC0zMDRjLTI3LjYgMC01MCAyMi40LTUwIDUwdjMwNGMwIDI3LjYwMSAyMi40IDUwIDUwIDUwaDE0NS41Yy0xLjkgNzkuNjAxLTIwLjQgMTQzLjMtNTUuNCAxOTEuMi0yNy42IDM3LjgtNjkuNCA2OS4xLTEyNS4zIDkzLjgtMjUuNyAxMS4zLTM2LjggNDEuNy0yNC44IDY3LjEwMWwzNS45IDc1LjhjMTEuNjAxIDI0LjM5OSA0MC41MDEgMzUuMiA2NS4zMDEgMjQuMzk5elwiPjwvcGF0aD5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRlc3RpbW9uaWFsX190ZXh0XCIgW2lubmVySFRNTF09XCJ0ZXh0XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRlc3RpbW9uaWFsX19tZXRhXCIgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGVzdGltb25pYWxfX21ldGFfX2ltYWdlXCI+XG4gICAgICAgICAgICA8aW1nIFtzcmNdPVwiaW1hZ2VcIiBbYWx0XT1cIm5hbWVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXN0aW1vbmlhbF9fbWV0YV9faW5mb1wiPlxuICAgICAgICAgICAgPGgzPnt7bmFtZX19PC9oMz5cbiAgICAgICAgICAgIDxoND57e3Bvc2l0aW9ufX08L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19