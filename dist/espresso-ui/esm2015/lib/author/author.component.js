/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class AuthorComponent {
}
AuthorComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-author',
                template: "<div class=\"author\">\n    <div class=\"author__meta\" [class.author__meta--no-image]=\"!image\">\n        <ng-container *ngIf=\"image\">\n            <div class=\"author__meta__image\">\n                <img [src]=\"image\" [alt]=\"name\">\n            </div>\n        </ng-container>\n        <div class=\"author__meta__info\">\n            <h3>{{name}}</h3>\n            <ng-container *ngIf=\"position\">\n                <h4>{{position}}</h4>\n            </ng-container>\n        </div>\n    </div>\n    <div class=\"author__description\" [innerHTML]=\"text\"></div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [".author{width:100%;box-sizing:border-box;padding:1rem}.author .author__meta{width:100%;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin-bottom:1rem}.author .author__meta .author__meta__image{box-sizing:border-box;width:90px;height:90px;margin:0}.author .author__meta .author__meta__image img{width:90px;height:90px;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;border-radius:var(--radius-full)}.author .author__meta .author__meta__info{box-sizing:border-box;width:100%;padding-left:0}.author .author__meta .author__meta__info h3{box-sizing:border-box;color:var(--color-gray-500);font-size:1rem;margin:0 0 .25rem;font-weight:400}.author .author__meta .author__meta__info h4{box-sizing:border-box;color:var(--color-gray-300);font-size:.75rem;margin:0;font-weight:400}@media (min-width:680px){.author .author__meta .author__meta__info{width:calc(100% - 96px);padding-left:.75rem}.author .author__meta--no-image .author__meta__info{width:100%;padding-left:0}}.author .author__description{box-sizing:border-box;font-size:.875rem;line-height:1.3;color:var(--color-gray-400)}.author .author__description a{color:var(--color-blue-400)}.author .author__description a:hover{color:var(--color-orange-400)}.author .author__description ol,.author .author__description ul{padding-left:1rem}.author .author__description ol li,.author .author__description ul li{margin-bottom:.25rem}.author .author__description ol li:last-child,.author .author__description ul li:last-child,.author .author__description:last-child{margin-bottom:0}"]
            }] }
];
AuthorComponent.propDecorators = {
    name: [{ type: Input }],
    text: [{ type: Input }],
    image: [{ type: Input }],
    position: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VzcHJlc3NvLXVpLyIsInNvdXJjZXMiOlsibGliL2F1dGhvci9hdXRob3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVM3RixNQUFNLE9BQU8sZUFBZTs7O1lBUDNCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsa2xCQUFzQztnQkFFdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTOzthQUMzQzs7O21CQUdFLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFITiwrQkFBc0I7O0lBQ3RCLCtCQUFzQjs7SUFDdEIsZ0NBQXdCOztJQUN4QixtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWF1dGhvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRob3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRob3IuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBBdXRob3JDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBpbWFnZT86IHN0cmluZztcbiAgQElucHV0KCkgcG9zaXRpb24/OiBzdHJpbmc7XG5cbn1cbiJdfQ==