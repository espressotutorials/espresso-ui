import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function RatingComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 5);
    i0.ɵɵelement(2, "path", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RatingComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 8);
    i0.ɵɵelement(2, "path", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RatingComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 11);
    i0.ɵɵelement(2, "path", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.MAX_NUMBER_OF_STARS = 5;
        this.rating = 0;
    }
    Object.defineProperty(RatingComponent.prototype, "numberOfFullStars", {
        get: function () {
            return Math.floor(this.rating);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RatingComponent.prototype, "numberOfEmptyStars", {
        get: function () {
            return this.MAX_NUMBER_OF_STARS - Math.ceil(this.rating);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RatingComponent.prototype, "fullStars", {
        get: function () {
            return Array(this.numberOfFullStars);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RatingComponent.prototype, "emptyStars", {
        get: function () {
            return Array(this.numberOfEmptyStars);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RatingComponent.prototype, "hasAnHalfStar", {
        get: function () {
            return this.rating % 1 !== 0;
        },
        enumerable: false,
        configurable: true
    });
    /** @nocollapse */ RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); };
    /** @nocollapse */ RatingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RatingComponent, selectors: [["lib-rating"]], inputs: { rating: "rating" }, decls: 4, vars: 3, consts: [[1, "rating"], ["class", "fa fa-star checked", 4, "ngFor", "ngForOf"], ["class", "fa fa-star-half-empty", 4, "ngIf"], ["class", "fa fa-star-o", 4, "ngFor", "ngForOf"], [1, "fa", "fa-star", "checked"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "star", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", 1, "svg-inline--fa", "fa-star", "fa-w-18"], ["fill", "currentColor", "d", "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"], [1, "fa", "fa-star-half-empty"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "star-half-alt", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 536 512", 1, "svg-inline--fa", "fa-star-half-alt", "fa-w-17"], ["fill", "currentColor", "d", "M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"], [1, "fa", "fa-star-o"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "star", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", 1, "svg-inline--fa", "fa-star", "fa-w-18"], ["fill", "currentColor", "d", "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, RatingComponent_span_1_Template, 3, 0, "span", 1);
            i0.ɵɵtemplate(2, RatingComponent_span_2_Template, 3, 0, "span", 2);
            i0.ɵɵtemplate(3, RatingComponent_span_3_Template, 3, 0, "span", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.fullStars);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hasAnHalfStar);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.emptyStars);
        } }, directives: [i1.NgForOf, i1.NgIf], styles: [".rating{box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;width:100%}.rating .fa-star,.rating .fa-star-half-empty,.rating .fa-star-o{color:var(--color-yellow-400)}.rating .fa-star svg,.rating .fa-star-half-empty svg,.rating .fa-star-o svg{display:block;width:22px;height:22px}"], encapsulation: 3, changeDetection: 0 });
    return RatingComponent;
}());
export { RatingComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RatingComponent, [{
        type: Component,
        args: [{
                selector: 'lib-rating',
                templateUrl: './rating.component.html',
                styleUrls: ['./rating.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, { rating: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIiwibGliL3JhdGluZy9yYXRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUNDekYsK0JBQ0k7SUFBQSxtQkFBd0w7SUFBeEwsOEJBQXdMO0lBQUEsMEJBQXNTO0lBQUEsaUJBQU07SUFDeGUsaUJBQU87OztJQUNQLCtCQUNJO0lBQUEsbUJBQTBNO0lBQTFNLDhCQUEwTTtJQUFBLDBCQUFva0I7SUFBQSxpQkFBTTtJQUN4eEIsaUJBQU87OztJQUNQLGdDQUNJO0lBQUEsbUJBQXdMO0lBQXhMLCtCQUF3TDtJQUFBLDJCQUFzWjtJQUFBLGlCQUFNO0lBQ3hsQixpQkFBTzs7QURQWDtJQUFBO1FBUW1CLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUd6QyxXQUFNLEdBQUcsQ0FBQyxDQUFDO0tBc0JaO0lBcEJDLHNCQUFZLDhDQUFpQjthQUE3QjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSwrQ0FBa0I7YUFBOUI7WUFDRSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFTO2FBQWI7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFVO2FBQWQ7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFhO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7cUdBeEJVLGVBQWU7MkVBQWYsZUFBZTtZQ1Q1Qiw4QkFDSTtZQUFBLGtFQUNJO1lBRUosa0VBQ0k7WUFFSixrRUFDSTtZQUVSLGlCQUFNOztZQVRJLGVBQWtDO1lBQWxDLHVDQUFrQztZQUdsQyxlQUFxQjtZQUFyQix3Q0FBcUI7WUFHckIsZUFBb0M7WUFBcEMsd0NBQW9DOzswQkRQOUM7Q0FtQ0MsQUFqQ0QsSUFpQ0M7U0ExQlksZUFBZTtrREFBZixlQUFlO2NBUDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsU0FBUzthQUMzQztnQkFLQyxNQUFNO2tCQURMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXJhdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYXRpbmcuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQge1xuICBwcml2YXRlIHJlYWRvbmx5IE1BWF9OVU1CRVJfT0ZfU1RBUlMgPSA1O1xuXG4gIEBJbnB1dCgpXG4gIHJhdGluZyA9IDA7XG5cbiAgcHJpdmF0ZSBnZXQgbnVtYmVyT2ZGdWxsU3RhcnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnJhdGluZyk7XG4gIH1cblxuICBwcml2YXRlIGdldCBudW1iZXJPZkVtcHR5U3RhcnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5NQVhfTlVNQkVSX09GX1NUQVJTIC0gTWF0aC5jZWlsKHRoaXMucmF0aW5nKTtcbiAgfVxuXG4gIGdldCBmdWxsU3RhcnMoKTogYW55W10ge1xuICAgIHJldHVybiBBcnJheSh0aGlzLm51bWJlck9mRnVsbFN0YXJzKTtcbiAgfVxuXG4gIGdldCBlbXB0eVN0YXJzKCk6IGFueVtdIHtcbiAgICByZXR1cm4gQXJyYXkodGhpcy5udW1iZXJPZkVtcHR5U3RhcnMpO1xuICB9XG5cbiAgZ2V0IGhhc0FuSGFsZlN0YXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmF0aW5nICUgMSAhPT0gMDtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicmF0aW5nXCI+XG4gICAgPHNwYW4gKm5nRm9yPVwibGV0IGZ1bGxTdGFyIG9mIGZ1bGxTdGFyc1wiIGNsYXNzPVwiZmEgZmEtc3RhciBjaGVja2VkXCI+XG4gICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInN0YXJcIiBjbGFzcz1cInN2Zy1pbmxpbmUtLWZhIGZhLXN0YXIgZmEtdy0xOFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU5LjMgMTcuOEwxOTQgMTUwLjIgNDcuOSAxNzEuNWMtMjYuMiAzLjgtMzYuNyAzNi4xLTE3LjcgNTQuNmwxMDUuNyAxMDMtMjUgMTQ1LjVjLTQuNSAyNi4zIDIzLjIgNDYgNDYuNCAzMy43TDI4OCA0MzkuNmwxMzAuNyA2OC43YzIzLjIgMTIuMiA1MC45LTcuNCA0Ni40LTMzLjdsLTI1LTE0NS41IDEwNS43LTEwM2MxOS0xOC41IDguNS01MC44LTE3LjctNTQuNkwzODIgMTUwLjIgMzE2LjcgMTcuOGMtMTEuNy0yMy42LTQ1LjYtMjMuOS01Ny40IDB6XCI+PC9wYXRoPjwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImhhc0FuSGFsZlN0YXJcIiBjbGFzcz1cImZhIGZhLXN0YXItaGFsZi1lbXB0eVwiPlxuICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzdGFyLWhhbGYtYWx0XCIgY2xhc3M9XCJzdmctaW5saW5lLS1mYSBmYS1zdGFyLWhhbGYtYWx0IGZhLXctMTdcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTM2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTUwOC41NSAxNzEuNTFMMzYyLjE4IDE1MC4yIDI5Ni43NyAxNy44MUMyOTAuODkgNS45OCAyNzkuNDIgMCAyNjcuOTUgMGMtMTEuNCAwLTIyLjc5IDUuOS0yOC42OSAxNy44MWwtNjUuNDMgMTMyLjM4LTE0Ni4zOCAyMS4yOWMtMjYuMjUgMy44LTM2Ljc3IDM2LjA5LTE3Ljc0IDU0LjU5bDEwNS44OSAxMDMtMjUuMDYgMTQ1LjQ4Qzg2Ljk4IDQ5NS4zMyAxMDMuNTcgNTEyIDEyMi4xNSA1MTJjNC45MyAwIDEwLTEuMTcgMTQuODctMy43NWwxMzAuOTUtNjguNjggMTMwLjk0IDY4LjdjNC44NiAyLjU1IDkuOTIgMy43MSAxNC44MyAzLjcxIDE4LjYgMCAzNS4yMi0xNi42MSAzMS42Ni0zNy40bC0yNS4wMy0xNDUuNDkgMTA1LjkxLTEwMi45OGMxOS4wNC0xOC41IDguNTItNTAuOC0xNy43My01NC42em0tMTIxLjc0IDEyMy4ybC0xOC4xMiAxNy42MiA0LjI4IDI0Ljg4IDE5LjUyIDExMy40NS0xMDIuMTMtNTMuNTktMjIuMzgtMTEuNzQuMDMtMzE3LjE5IDUxLjAzIDEwMy4yOSAxMS4xOCAyMi42MyAyNS4wMSAzLjY0IDExNC4yMyAxNi42My04Mi42NSA4MC4zOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0Zvcj1cImxldCBlbXB0eVN0YXIgb2YgZW1wdHlTdGFyc1wiIGNsYXNzPVwiZmEgZmEtc3Rhci1vXCI+XG4gICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cInN0YXJcIiBjbGFzcz1cInN2Zy1pbmxpbmUtLWZhIGZhLXN0YXIgZmEtdy0xOFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTI4LjEgMTcxLjVMMzgyIDE1MC4yIDMxNi43IDE3LjhjLTExLjctMjMuNi00NS42LTIzLjktNTcuNCAwTDE5NCAxNTAuMiA0Ny45IDE3MS41Yy0yNi4yIDMuOC0zNi43IDM2LjEtMTcuNyA1NC42bDEwNS43IDEwMy0yNSAxNDUuNWMtNC41IDI2LjMgMjMuMiA0NiA0Ni40IDMzLjdMMjg4IDQzOS42bDEzMC43IDY4LjdjMjMuMiAxMi4yIDUwLjktNy40IDQ2LjQtMzMuN2wtMjUtMTQ1LjUgMTA1LjctMTAzYzE5LTE4LjUgOC41LTUwLjgtMTcuNy01NC42ek0zODguNiAzMTIuM2wyMy43IDEzOC40TDI4OCAzODUuNGwtMTI0LjMgNjUuMyAyMy43LTEzOC40LTEwMC42LTk4IDEzOS0yMC4yIDYyLjItMTI2IDYyLjIgMTI2IDEzOSAyMC4yLTEwMC42IDk4elwiPjwvcGF0aD48L3N2Zz5cbiAgICA8L3NwYW4+XG48L2Rpdj5cbiJdfQ==