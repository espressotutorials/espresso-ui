/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.MAX_NUMBER_OF_STARS = 5;
        this.rating = 0;
    }
    Object.defineProperty(RatingComponent.prototype, "numberOfFullStars", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return Math.floor(this.rating);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RatingComponent.prototype, "numberOfEmptyStars", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.MAX_NUMBER_OF_STARS - Math.ceil(this.rating);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RatingComponent.prototype, "fullStars", {
        get: /**
         * @return {?}
         */
        function () {
            return Array(this.numberOfFullStars);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RatingComponent.prototype, "emptyStars", {
        get: /**
         * @return {?}
         */
        function () {
            return Array(this.numberOfEmptyStars);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RatingComponent.prototype, "hasAnHalfStar", {
        get: /**
         * @return {?}
         */
        function () {
            return this.rating % 1 !== 0;
        },
        enumerable: false,
        configurable: true
    });
    RatingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-rating',
                    template: "<div class=\"rating\">\n    <span *ngFor=\"let fullStar of fullStars\" class=\"fa fa-star checked\">\n        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" class=\"svg-inline--fa fa-star fa-w-18\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"currentColor\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\"></path></svg>\n    </span>\n    <span *ngIf=\"hasAnHalfStar\" class=\"fa fa-star-half-empty\">\n        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star-half-alt\" class=\"svg-inline--fa fa-star-half-alt fa-w-17\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 536 512\"><path fill=\"currentColor\" d=\"M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z\"></path></svg>\n    </span>\n    <span *ngFor=\"let emptyStar of emptyStars\" class=\"fa fa-star-o\">\n        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"star\" class=\"svg-inline--fa fa-star fa-w-18\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"currentColor\" d=\"M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z\"></path></svg>\n    </span>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".rating{box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;width:100%}.rating .fa-star,.rating .fa-star-half-empty,.rating .fa-star-o{color:var(--color-yellow-400)}.rating .fa-star svg,.rating .fa-star-half-empty svg,.rating .fa-star-o svg{display:block;width:22px;height:22px}"]
                }] }
    ];
    RatingComponent.propDecorators = {
        rating: [{ type: Input }]
    };
    return RatingComponent;
}());
export { RatingComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RatingComponent.prototype.MAX_NUMBER_OF_STARS;
    /** @type {?} */
    RatingComponent.prototype.rating;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Blc3ByZXNzb3R1dG9yaWFsc2dtYmgvZXNwcmVzc28tdWkvIiwic291cmNlcyI6WyJsaWIvcmF0aW5nL3JhdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGO0lBQUE7UUFRbUIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBR3pDLFdBQU0sR0FBRyxDQUFDLENBQUM7SUFzQmIsQ0FBQztJQXBCQyxzQkFBWSw4Q0FBaUI7Ozs7O1FBQTdCO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLCtDQUFrQjs7Ozs7UUFBOUI7WUFDRSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLHF0RUFBc0M7b0JBRXRDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsU0FBUzs7aUJBQzNDOzs7eUJBSUUsS0FBSzs7SUF1QlIsc0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTFCWSxlQUFlOzs7Ozs7SUFDMUIsOENBQXlDOztJQUV6QyxpQ0FDVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcmF0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhdGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JhdGluZy5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tXG59KVxuZXhwb3J0IGNsYXNzIFJhdGluZ0NvbXBvbmVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgTUFYX05VTUJFUl9PRl9TVEFSUyA9IDU7XG5cbiAgQElucHV0KClcbiAgcmF0aW5nID0gMDtcblxuICBwcml2YXRlIGdldCBudW1iZXJPZkZ1bGxTdGFycygpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMucmF0aW5nKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IG51bWJlck9mRW1wdHlTdGFycygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLk1BWF9OVU1CRVJfT0ZfU1RBUlMgLSBNYXRoLmNlaWwodGhpcy5yYXRpbmcpO1xuICB9XG5cbiAgZ2V0IGZ1bGxTdGFycygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIEFycmF5KHRoaXMubnVtYmVyT2ZGdWxsU3RhcnMpO1xuICB9XG5cbiAgZ2V0IGVtcHR5U3RhcnMoKTogYW55W10ge1xuICAgIHJldHVybiBBcnJheSh0aGlzLm51bWJlck9mRW1wdHlTdGFycyk7XG4gIH1cblxuICBnZXQgaGFzQW5IYWxmU3RhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yYXRpbmcgJSAxICE9PSAwO1xuICB9XG5cbn1cbiJdfQ==