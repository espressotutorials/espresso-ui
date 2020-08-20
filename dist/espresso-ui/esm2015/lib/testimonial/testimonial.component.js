import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TestimonialComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGltb25pYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXNwcmVzc28tdWkvIiwic291cmNlcyI6WyJsaWIvdGVzdGltb25pYWwvdGVzdGltb25pYWwuY29tcG9uZW50LnRzIiwibGliL3Rlc3RpbW9uaWFsL3Rlc3RpbW9uaWFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9qRCxNQUFNLE9BQU8sb0JBQW9COzsyR0FBcEIsb0JBQW9COzRFQUFwQixvQkFBb0I7UUNQakMsOEJBQ0k7UUFBQSw4QkFDSTtRQUFBLG1CQUNJO1FBREosOEJBQ0k7UUFBQSwwQkFBK3NCO1FBQ250QixpQkFBTTtRQUNWLGlCQUFNO1FBQ04sb0JBQXdEO1FBQXhELHlCQUF3RDtRQUN4RCw4QkFDSTtRQUFBLDhCQUNJO1FBQUEseUJBQ0o7UUFBQSxpQkFBTTtRQUNOLDhCQUNJO1FBQUEsMEJBQUk7UUFBQSxhQUFRO1FBQUEsaUJBQUs7UUFDakIsMkJBQUk7UUFBQSxhQUFZO1FBQUEsaUJBQUs7UUFDekIsaUJBQU07UUFDVixpQkFBTTtRQUNWLGlCQUFNOztRQVY2QixlQUFrQjtRQUFsQix1REFBa0I7UUFHcEMsZUFBYTtRQUFiLGlEQUFhLGlCQUFBO1FBR2QsZUFBUTtRQUFSLDhCQUFRO1FBQ1IsZUFBWTtRQUFaLGtDQUFZOztrREROZixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDO2dCQUdVLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10ZXN0aW1vbmlhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXN0aW1vbmlhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Rlc3RpbW9uaWFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGVzdGltb25pYWxDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xuICBASW5wdXQoKSBwb3NpdGlvbjogc3RyaW5nO1xuXG59XG4iLCI8ZGl2IGNsYXNzPVwidGVzdGltb25pYWxcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGVzdGltb25pYWxfX2ljb25cIj5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgOTc1LjAzNiA5NzUuMDM2XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkyNS4wMzYgNTcuMTk3aC0zMDRjLTI3LjYgMC01MCAyMi40LTUwIDUwdjMwNGMwIDI3LjYwMSAyMi40IDUwIDUwIDUwaDE0NS41Yy0xLjkgNzkuNjAxLTIwLjQgMTQzLjMtNTUuNCAxOTEuMi0yNy42IDM3LjgtNjkuMzk5IDY5LjEtMTI1LjMgOTMuOC0yNS43IDExLjMtMzYuOCA0MS43LTI0LjggNjcuMTAxbDM2IDc2YzExLjYgMjQuMzk5IDQwLjMgMzUuMSA2NS4xIDI0LjM5OSA2Ni4yLTI4LjYgMTIyLjEwMS02NC44IDE2Ny43LTEwOC44IDU1LjYwMS01My43IDkzLjctMTE0LjMgMTE0LjMtMTgxLjkgMjAuNjAxLTY3LjYgMzAuOS0xNTkuOCAzMC45LTI3Ni44di0yMzljMC0yNy41OTktMjIuNDAxLTUwLTUwLTUwek0xMDYuMDM2IDkxMy40OTdjNjUuNC0yOC41IDEyMS02NC42OTkgMTY2LjktMTA4LjYgNTYuMS01My43IDk0LjQtMTE0LjEgMTE1LTE4MS4yIDIwLjYtNjcuMSAzMC44OTktMTU5LjYgMzAuODk5LTI3Ny41di0yMzljMC0yNy42LTIyLjM5OS01MC01MC01MGgtMzA0Yy0yNy42IDAtNTAgMjIuNC01MCA1MHYzMDRjMCAyNy42MDEgMjIuNCA1MCA1MCA1MGgxNDUuNWMtMS45IDc5LjYwMS0yMC40IDE0My4zLTU1LjQgMTkxLjItMjcuNiAzNy44LTY5LjQgNjkuMS0xMjUuMyA5My44LTI1LjcgMTEuMy0zNi44IDQxLjctMjQuOCA2Ny4xMDFsMzUuOSA3NS44YzExLjYwMSAyNC4zOTkgNDAuNTAxIDM1LjIgNjUuMzAxIDI0LjM5OXpcIj48L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXN0aW1vbmlhbF9fdGV4dFwiIFtpbm5lckhUTUxdPVwidGV4dFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXN0aW1vbmlhbF9fbWV0YVwiID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRlc3RpbW9uaWFsX19tZXRhX19pbWFnZVwiPlxuICAgICAgICAgICAgPGltZyBbc3JjXT1cImltYWdlXCIgW2FsdF09XCJuYW1lXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGVzdGltb25pYWxfX21ldGFfX2luZm9cIj5cbiAgICAgICAgICAgIDxoMz57e25hbWV9fTwvaDM+XG4gICAgICAgICAgICA8aDQ+e3twb3NpdGlvbn19PC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==