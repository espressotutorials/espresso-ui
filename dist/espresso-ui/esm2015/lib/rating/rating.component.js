/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class RatingComponent {
    constructor() {
        this.MAX_NUMBER_OF_STARS = 5;
        this.rating = 0;
    }
    /**
     * @private
     * @return {?}
     */
    get numberOfFullStars() {
        return Math.floor(this.rating);
    }
    /**
     * @private
     * @return {?}
     */
    get numberOfEmptyStars() {
        return this.MAX_NUMBER_OF_STARS - Math.ceil(this.rating);
    }
    /**
     * @return {?}
     */
    get fullStars() {
        return Array(this.numberOfFullStars);
    }
    /**
     * @return {?}
     */
    get emptyStars() {
        return Array(this.numberOfEmptyStars);
    }
    /**
     * @return {?}
     */
    get hasAnHalfStar() {
        return this.rating % 1 !== 0;
    }
}
RatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-rating',
                template: "<div class=\"rating\">\n    <span *ngFor=\"let fullStar of fullStars\" class=\"fa fa-star checked\">\n        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" class=\"svg-inline--fa fa-star fa-w-18\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"currentColor\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\"></path></svg>\n    </span>\n    <span *ngIf=\"hasAnHalfStar\" class=\"fa fa-star-half-empty\">\n        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star-half-alt\" class=\"svg-inline--fa fa-star-half-alt fa-w-17\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 536 512\"><path fill=\"currentColor\" d=\"M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z\"></path></svg>\n    </span>\n    <span *ngFor=\"let emptyStar of emptyStars\" class=\"fa fa-star-o\">\n        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"star\" class=\"svg-inline--fa fa-star fa-w-18\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"currentColor\" d=\"M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z\"></path></svg>\n    </span>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [".rating{box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;width:100%}.rating .fa-star,.rating .fa-star-half-empty,.rating .fa-star-o{color:var(--et-ui-color-yellow-400)}.rating .fa-star svg,.rating .fa-star-half-empty svg,.rating .fa-star-o svg{display:block;width:22px;height:22px}"]
            }] }
];
RatingComponent.propDecorators = {
    rating: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    RatingComponent.prototype.MAX_NUMBER_OF_STARS;
    /** @type {?} */
    RatingComponent.prototype.rating;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Blc3ByZXNzb3R1dG9yaWFsc2dtYmgvZXNwcmVzc28tdWkvIiwic291cmNlcyI6WyJsaWIvcmF0aW5nL3JhdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzdGLE1BQU0sT0FBTyxlQUFlO0lBUDVCO1FBUW1CLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUd6QyxXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBc0JiLENBQUM7Ozs7O0lBcEJDLElBQVksaUJBQWlCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxJQUFZLGtCQUFrQjtRQUM1QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixxdEVBQXNDO2dCQUV0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7O2FBQzNDOzs7cUJBSUUsS0FBSzs7Ozs7OztJQUZOLDhDQUF5Qzs7SUFFekMsaUNBQ1ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXJhdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYXRpbmcuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQge1xuICBwcml2YXRlIHJlYWRvbmx5IE1BWF9OVU1CRVJfT0ZfU1RBUlMgPSA1O1xuXG4gIEBJbnB1dCgpXG4gIHJhdGluZyA9IDA7XG5cbiAgcHJpdmF0ZSBnZXQgbnVtYmVyT2ZGdWxsU3RhcnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnJhdGluZyk7XG4gIH1cblxuICBwcml2YXRlIGdldCBudW1iZXJPZkVtcHR5U3RhcnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5NQVhfTlVNQkVSX09GX1NUQVJTIC0gTWF0aC5jZWlsKHRoaXMucmF0aW5nKTtcbiAgfVxuXG4gIGdldCBmdWxsU3RhcnMoKTogYW55W10ge1xuICAgIHJldHVybiBBcnJheSh0aGlzLm51bWJlck9mRnVsbFN0YXJzKTtcbiAgfVxuXG4gIGdldCBlbXB0eVN0YXJzKCk6IGFueVtdIHtcbiAgICByZXR1cm4gQXJyYXkodGhpcy5udW1iZXJPZkVtcHR5U3RhcnMpO1xuICB9XG5cbiAgZ2V0IGhhc0FuSGFsZlN0YXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmF0aW5nICUgMSAhPT0gMDtcbiAgfVxuXG59XG4iXX0=