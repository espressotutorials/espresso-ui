import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AuthorComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelement(2, "img", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r0.image, i0.ɵɵsanitizeUrl)("alt", ctx_r0.name);
} }
function AuthorComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.position);
} }
export class AuthorComponent {
}
/** @nocollapse */ AuthorComponent.ɵfac = function AuthorComponent_Factory(t) { return new (t || AuthorComponent)(); };
/** @nocollapse */ AuthorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AuthorComponent, selectors: [["lib-author"]], inputs: { name: "name", text: "text", image: "image", position: "position" }, decls: 8, vars: 6, consts: [[1, "author"], [1, "author__meta"], [4, "ngIf"], [1, "author__meta__info"], [1, "author__description", 3, "innerHTML"], [1, "author__meta__image"], [3, "src", "alt"]], template: function AuthorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, AuthorComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "h3");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, AuthorComponent_ng_container_6_Template, 3, 1, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(7, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("author__meta--no-image", !ctx.image);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.image);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.name);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.position);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHTML", ctx.text, i0.ɵɵsanitizeHtml);
    } }, directives: [i1.NgIf], styles: [".author{width:100%;box-sizing:border-box;padding:1rem}.author .author__meta{width:100%;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin-bottom:1rem}.author .author__meta .author__meta__image{box-sizing:border-box;width:90px;height:90px;margin:0}.author .author__meta .author__meta__image img{width:90px;height:90px;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;border-radius:var(--radius-full)}.author .author__meta .author__meta__info{box-sizing:border-box;width:100%;padding-left:0}.author .author__meta .author__meta__info h3{box-sizing:border-box;color:var(--color-gray-500);font-size:1rem;margin:0 0 .25rem;font-weight:400}.author .author__meta .author__meta__info h4{box-sizing:border-box;color:var(--color-gray-300);font-size:.75rem;margin:0;font-weight:400}@media (min-width:680px){.author .author__meta .author__meta__info{width:calc(100% - 96px);padding-left:.75rem}.author .author__meta--no-image .author__meta__info{width:100%;padding-left:0}}.author .author__description{box-sizing:border-box;font-size:.875rem;line-height:1.3;color:var(--color-gray-400)}.author .author__description a{color:var(--color-blue-400)}.author .author__description a:hover{color:var(--color-orange-400)}.author .author__description ol,.author .author__description ul{padding-left:1rem}.author .author__description ol li,.author .author__description ul li{margin-bottom:.25rem}.author .author__description ol li:last-child,.author .author__description ul li:last-child,.author .author__description:last-child{margin-bottom:0}"], encapsulation: 3, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthorComponent, [{
        type: Component,
        args: [{
                selector: 'lib-author',
                templateUrl: './author.component.html',
                styleUrls: ['./author.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2F1dGhvci9hdXRob3IuY29tcG9uZW50LnRzIiwibGliL2F1dGhvci9hdXRob3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUNFckYsNkJBQ0k7SUFBQSw4QkFDSTtJQUFBLHlCQUNKO0lBQUEsaUJBQU07SUFDViwwQkFBZTs7O0lBRkYsZUFBYTtJQUFiLG9EQUFhLG9CQUFBOzs7SUFLdEIsNkJBQ0k7SUFBQSwwQkFBSTtJQUFBLFlBQVk7SUFBQSxpQkFBSztJQUN6QiwwQkFBZTs7O0lBRFAsZUFBWTtJQUFaLHFDQUFZOztBRERoQyxNQUFNLE9BQU8sZUFBZTs7aUdBQWYsZUFBZTt1RUFBZixlQUFlO1FDVDVCLDhCQUNJO1FBQUEsOEJBQ0k7UUFBQSxrRkFDSTtRQUlKLDhCQUNJO1FBQUEsMEJBQUk7UUFBQSxZQUFRO1FBQUEsaUJBQUs7UUFDakIsa0ZBQ0k7UUFFUixpQkFBTTtRQUNWLGlCQUFNO1FBQ04seUJBQTBEO1FBQzlELGlCQUFNOztRQWR3QixlQUF1QztRQUF2QyxvREFBdUM7UUFDL0MsZUFBYTtRQUFiLGdDQUFhO1FBTW5CLGVBQVE7UUFBUiw4QkFBUTtRQUNFLGVBQWdCO1FBQWhCLG1DQUFnQjtRQUtMLGVBQWtCO1FBQWxCLHVEQUFrQjs7a0RETDFDLGVBQWU7Y0FQM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTO2FBQzNDO2dCQUdVLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWF1dGhvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRob3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRob3IuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBBdXRob3JDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBpbWFnZT86IHN0cmluZztcbiAgQElucHV0KCkgcG9zaXRpb24/OiBzdHJpbmc7XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yX19tZXRhXCIgW2NsYXNzLmF1dGhvcl9fbWV0YS0tbm8taW1hZ2VdPVwiIWltYWdlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbWFnZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvcl9fbWV0YV9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwiaW1hZ2VcIiBbYWx0XT1cIm5hbWVcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvcl9fbWV0YV9faW5mb1wiPlxuICAgICAgICAgICAgPGgzPnt7bmFtZX19PC9oMz5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJwb3NpdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoND57e3Bvc2l0aW9ufX08L2g0PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhdXRob3JfX2Rlc2NyaXB0aW9uXCIgW2lubmVySFRNTF09XCJ0ZXh0XCI+PC9kaXY+XG48L2Rpdj5cbiJdfQ==