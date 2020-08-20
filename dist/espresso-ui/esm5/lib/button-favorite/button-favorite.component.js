/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
var ButtonFavoriteComponent = /** @class */ (function () {
    function ButtonFavoriteComponent() {
        this.favorite = false;
        this.favoriteChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ButtonFavoriteComponent.prototype.toggleValueChange = /**
     * @return {?}
     */
    function () {
        if (this.favorite) {
            this.favoriteChange.emit([false, this.id, this.title, this.cover, this.type]);
            this.favorite = false;
        }
        else {
            this.favoriteChange.emit([true, this.id, this.title, this.cover, this.type]);
            this.favorite = true;
        }
    };
    ButtonFavoriteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-button-favorite',
                    template: "<button class=\"button-favorite\" [class.button-favorite--active]=\"favorite\" (click)=\"toggleValueChange()\">\n    <ng-container *ngIf=\"!favorite; else isFav\">\n        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"heart\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z\"></path></svg>\n    </ng-container>\n    <ng-template #isFav>\n        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"heart\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z\"></path></svg>\n    </ng-template>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".button-favorite{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0;display:flex;justify-content:center;align-items:center;width:28px;height:28px;color:var(--color-gray-500);cursor:pointer}.button-favorite:hover{color:var(--color-red-400)}.button-favorite svg{width:26px;height:26px;display:block;fill:currentColor;pointer-events:none}.button-favorite--active{color:var(--color-red-400)}"]
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
    return ButtonFavoriteComponent;
}());
export { ButtonFavoriteComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWZhdm9yaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbi1mYXZvcml0ZS9idXR0b24tZmF2b3JpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5IO0lBQUE7UUFTVyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBT2pCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQVlwRCxDQUFDOzs7O0lBVkMsbURBQWlCOzs7SUFBakI7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiw0eENBQStDO29CQUUvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7O2lCQUMzQzs7OzJCQUdFLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSztpQ0FFTCxNQUFNOztJQWFULDhCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0FyQlksdUJBQXVCOzs7SUFFbEMsMkNBQTBCOztJQUMxQixxQ0FBb0I7O0lBQ3BCLHdDQUF3Qjs7SUFDeEIsd0NBQXdCOztJQUN4Qix1Q0FBdUI7O0lBRXZCLGlEQUNrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWJ1dHRvbi1mYXZvcml0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tZmF2b3JpdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24tZmF2b3JpdGUuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25GYXZvcml0ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZmF2b3JpdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvdmVyPzogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlPzogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBmYXZvcml0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHRvZ2dsZVZhbHVlQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLmZhdm9yaXRlKSB7XG4gICAgICB0aGlzLmZhdm9yaXRlQ2hhbmdlLmVtaXQoW2ZhbHNlLCB0aGlzLmlkLCB0aGlzLnRpdGxlLCB0aGlzLmNvdmVyLCB0aGlzLnR5cGVdKTtcbiAgICAgIHRoaXMuZmF2b3JpdGUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mYXZvcml0ZUNoYW5nZS5lbWl0KFt0cnVlLCB0aGlzLmlkLCB0aGlzLnRpdGxlLCB0aGlzLmNvdmVyLCB0aGlzLnR5cGVdKTtcbiAgICAgIHRoaXMuZmF2b3JpdGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=