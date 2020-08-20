import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
    }
    /** @nocollapse */ ReviewComponent.ɵfac = function ReviewComponent_Factory(t) { return new (t || ReviewComponent)(); };
    /** @nocollapse */ ReviewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ReviewComponent, selectors: [["lib-review"]], decls: 5, vars: 0, consts: [[1, "review"], ["name", "rating"], ["name", "title"], ["name", "description"], ["name", "author"]], template: function ReviewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "slot", 1);
            i0.ɵɵelement(2, "slot", 2);
            i0.ɵɵelement(3, "slot", 3);
            i0.ɵɵelement(4, "slot", 4);
            i0.ɵɵelementEnd();
        } }, styles: [".review{width:100%;box-sizing:border-box;padding:1rem}"], encapsulation: 3, changeDetection: 0 });
    return ReviewComponent;
}());
export { ReviewComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ReviewComponent, [{
        type: Component,
        args: [{
                selector: 'lib-review',
                templateUrl: './review.component.html',
                styleUrls: ['./review.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL3Jldmlldy9yZXZpZXcuY29tcG9uZW50LnRzIiwibGliL3Jldmlldy9yZXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdEY7SUFBQTtLQU8rQjtxR0FBbEIsZUFBZTsyRUFBZixlQUFlO1lDVDVCLDhCQUNJO1lBQUEsMEJBQTJCO1lBQzNCLDBCQUEwQjtZQUMxQiwwQkFBZ0M7WUFDaEMsMEJBQTJCO1lBQy9CLGlCQUFNOzswQkRMTjtDQVMrQixBQVAvQixJQU8rQjtTQUFsQixlQUFlO2tEQUFmLGVBQWU7Y0FQM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXJldmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXZpZXcuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBSZXZpZXdDb21wb25lbnQge31cbiIsIjxkaXYgY2xhc3M9XCJyZXZpZXdcIj5cbiAgICA8c2xvdCBuYW1lPVwicmF0aW5nXCI+PC9zbG90PlxuICAgIDxzbG90IG5hbWU9XCJ0aXRsZVwiPjwvc2xvdD5cbiAgICA8c2xvdCBuYW1lPVwiZGVzY3JpcHRpb25cIj48L3Nsb3Q+XG4gICAgPHNsb3QgbmFtZT1cImF1dGhvclwiPjwvc2xvdD5cbjwvZGl2PlxuIl19