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
    var ctx_r0 = i0.ɵɵnextContext();
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
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.position);
} }
var AuthorComponent = /** @class */ (function () {
    function AuthorComponent() {
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
    return AuthorComponent;
}());
export { AuthorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2F1dGhvci9hdXRob3IuY29tcG9uZW50LnRzIiwibGliL2F1dGhvci9hdXRob3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUNFckYsNkJBQ0k7SUFBQSw4QkFDSTtJQUFBLHlCQUNKO0lBQUEsaUJBQU07SUFDViwwQkFBZTs7O0lBRkYsZUFBYTtJQUFiLG9EQUFhLG9CQUFBOzs7SUFLdEIsNkJBQ0k7SUFBQSwwQkFBSTtJQUFBLFlBQVk7SUFBQSxpQkFBSztJQUN6QiwwQkFBZTs7O0lBRFAsZUFBWTtJQUFaLHFDQUFZOztBRFJoQztJQUFBO0tBY0M7cUdBUFksZUFBZTsyRUFBZixlQUFlO1lDVDVCLDhCQUNJO1lBQUEsOEJBQ0k7WUFBQSxrRkFDSTtZQUlKLDhCQUNJO1lBQUEsMEJBQUk7WUFBQSxZQUFRO1lBQUEsaUJBQUs7WUFDakIsa0ZBQ0k7WUFFUixpQkFBTTtZQUNWLGlCQUFNO1lBQ04seUJBQTBEO1lBQzlELGlCQUFNOztZQWR3QixlQUF1QztZQUF2QyxvREFBdUM7WUFDL0MsZUFBYTtZQUFiLGdDQUFhO1lBTW5CLGVBQVE7WUFBUiw4QkFBUTtZQUNFLGVBQWdCO1lBQWhCLG1DQUFnQjtZQUtMLGVBQWtCO1lBQWxCLHVEQUFrQjs7MEJEZHZEO0NBZ0JDLEFBZEQsSUFjQztTQVBZLGVBQWU7a0RBQWYsZUFBZTtjQVAzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7YUFDM0M7Z0JBR1UsSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYXV0aG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGhvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dGhvci5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhvckNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGltYWdlPzogc3RyaW5nO1xuICBASW5wdXQoKSBwb3NpdGlvbj86IHN0cmluZztcblxufVxuIiwiPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgIDxkaXYgY2xhc3M9XCJhdXRob3JfX21ldGFcIiBbY2xhc3MuYXV0aG9yX19tZXRhLS1uby1pbWFnZV09XCIhaW1hZ2VcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImltYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yX19tZXRhX19pbWFnZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJpbWFnZVwiIFthbHRdPVwibmFtZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yX19tZXRhX19pbmZvXCI+XG4gICAgICAgICAgICA8aDM+e3tuYW1lfX08L2gzPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInBvc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGg0Pnt7cG9zaXRpb259fTwvaDQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImF1dGhvcl9fZGVzY3JpcHRpb25cIiBbaW5uZXJIVE1MXT1cInRleHRcIj48L2Rpdj5cbjwvZGl2PlxuIl19