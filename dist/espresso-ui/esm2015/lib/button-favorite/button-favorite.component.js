/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class ButtonFavoriteComponent {
    constructor() {
        this.favorite = false;
        this.favoriteChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
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
ButtonFavoriteComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-button-favorite',
                template: "<button class=\"button-favorite\" [class.button-favorite--active]=\"favorite\" (click)=\"toggleValueChange()\">\n    <ng-container *ngIf=\"!favorite; else isFav\">\n        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"heart\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z\"></path></svg>\n    </ng-container>\n    <ng-template #isFav>\n        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"heart\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z\"></path></svg>\n    </ng-template>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [".button-favorite{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0;display:flex;justify-content:center;align-items:center;width:28px;height:28px;color:var(--et-ui-color-gray-500);cursor:pointer}.button-favorite:hover{color:var(--et-ui-color-red-400)}.button-favorite svg{width:26px;height:26px;display:block;fill:currentColor;pointer-events:none}.button-favorite--active{color:var(--et-ui-color-red-400)}"]
            }] }
];
ButtonFavoriteComponent.propDecorators = {
    favorite: [{ type: Input }],
    id: [{ type: Input }],
    title: [{ type: Input }],
    cover: [{ type: Input }],
    type: [{ type: Input }],
    favoriteChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ButtonFavoriteComponent.prototype.favorite;
    /** @type {?} */
    ButtonFavoriteComponent.prototype.id;
    /** @type {?} */
    ButtonFavoriteComponent.prototype.title;
    /** @type {?} */
    ButtonFavoriteComponent.prototype.cover;
    /** @type {?} */
    ButtonFavoriteComponent.prototype.type;
    /** @type {?} */
    ButtonFavoriteComponent.prototype.favoriteChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWZhdm9yaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Blc3ByZXNzb3R1dG9yaWFsc2dtYmgvZXNwcmVzc28tdWkvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uLWZhdm9yaXRlL2J1dHRvbi1mYXZvcml0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTbkgsTUFBTSxPQUFPLHVCQUF1QjtJQVBwQztRQVNXLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFPakIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBWXBELENBQUM7Ozs7SUFWQyxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw0eENBQStDO2dCQUUvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7O2FBQzNDOzs7dUJBR0UsS0FBSztpQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLOzZCQUVMLE1BQU07Ozs7SUFOUCwyQ0FBMEI7O0lBQzFCLHFDQUFvQjs7SUFDcEIsd0NBQXdCOztJQUN4Qix3Q0FBd0I7O0lBQ3hCLHVDQUF1Qjs7SUFFdkIsaURBQ2tEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYnV0dG9uLWZhdm9yaXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1mYXZvcml0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1mYXZvcml0ZS5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkZhdm9yaXRlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBmYXZvcml0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZztcbiAgQElucHV0KCkgY292ZXI/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGU/OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGZhdm9yaXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgdG9nZ2xlVmFsdWVDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuZmF2b3JpdGUpIHtcbiAgICAgIHRoaXMuZmF2b3JpdGVDaGFuZ2UuZW1pdChbZmFsc2UsIHRoaXMuaWQsIHRoaXMudGl0bGUsIHRoaXMuY292ZXIsIHRoaXMudHlwZV0pO1xuICAgICAgdGhpcy5mYXZvcml0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZhdm9yaXRlQ2hhbmdlLmVtaXQoW3RydWUsIHRoaXMuaWQsIHRoaXMudGl0bGUsIHRoaXMuY292ZXIsIHRoaXMudHlwZV0pO1xuICAgICAgdGhpcy5mYXZvcml0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==