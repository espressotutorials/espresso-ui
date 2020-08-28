/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
var AuthorComponent = /** @class */ (function () {
    function AuthorComponent() {
    }
    AuthorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-author',
                    template: "<div class=\"author\">\n    <div class=\"author__meta\" [class.author__meta--no-image]=\"!image\">\n        <ng-container *ngIf=\"image\">\n            <div class=\"author__meta__image\">\n                <img [src]=\"image\" [alt]=\"name\">\n            </div>\n        </ng-container>\n        <div class=\"author__meta__info\">\n            <h3>{{name}}</h3>\n            <ng-container *ngIf=\"position\">\n                <h4>{{position}}</h4>\n            </ng-container>\n        </div>\n    </div>\n    <div class=\"author__description\" [innerHTML]=\"text\"></div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [":host{font-family:var(--et-ui-font-sans)}.author{width:100%;box-sizing:border-box;padding:1rem}@media (min-width:360px){.author{padding:1.5rem}}.author .author__meta{width:100%;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin-bottom:1rem}.author .author__meta .author__meta__image{box-sizing:border-box;width:90px;height:90px;margin:0}.author .author__meta .author__meta__image img{width:80px;height:80px;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;border-radius:var(--et-ui-radius-full)}.author .author__meta .author__meta__info{box-sizing:border-box;width:100%;padding-left:0}.author .author__meta .author__meta__info h3{box-sizing:border-box;color:var(--et-ui-color-gray-500);font-size:1rem;margin:0 0 .25rem;font-weight:500}.author .author__meta .author__meta__info h4{box-sizing:border-box;color:var(--et-ui-color-gray-300);font-size:.875rem;margin:0;font-weight:400}@media (min-width:680px){.author .author__meta .author__meta__info{width:calc(100% - 96px);padding-left:.75rem}.author .author__meta--no-image .author__meta__info{width:100%;padding-left:0}}.author .author__description{box-sizing:border-box;font-size:1rem;line-height:1.4;color:var(--et-ui-color-gray-400)}.author .author__description a{color:var(--et-ui-color-blue-400)}.author .author__description a:hover{color:var(--et-ui-color-orange-400)}.author .author__description ol,.author .author__description ul{padding-left:1rem}.author .author__description ol li,.author .author__description ul li{margin-bottom:.25rem}.author .author__description ol li:last-child,.author .author__description ul li:last-child,.author .author__description:last-child{margin-bottom:0}"]
                }] }
    ];
    AuthorComponent.propDecorators = {
        name: [{ type: Input }],
        text: [{ type: Input }],
        image: [{ type: Input }],
        position: [{ type: Input }]
    };
    return AuthorComponent;
}());
export { AuthorComponent };
if (false) {
    /** @type {?} */
    AuthorComponent.prototype.name;
    /** @type {?} */
    AuthorComponent.prototype.text;
    /** @type {?} */
    AuthorComponent.prototype.image;
    /** @type {?} */
    AuthorComponent.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Blc3ByZXNzb3R1dG9yaWFsc2dtYmgvZXNwcmVzc28tdWkvIiwic291cmNlcyI6WyJsaWIvYXV0aG9yL2F1dGhvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGO0lBQUE7SUFjQSxDQUFDOztnQkFkQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLGtsQkFBc0M7b0JBRXRDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsU0FBUzs7aUJBQzNDOzs7dUJBR0UsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzs7SUFFUixzQkFBQztDQUFBLEFBZEQsSUFjQztTQVBZLGVBQWU7OztJQUUxQiwrQkFBc0I7O0lBQ3RCLCtCQUFzQjs7SUFDdEIsZ0NBQXdCOztJQUN4QixtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWF1dGhvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRob3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRob3IuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBBdXRob3JDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBpbWFnZT86IHN0cmluZztcbiAgQElucHV0KCkgcG9zaXRpb24/OiBzdHJpbmc7XG5cbn1cbiJdfQ==