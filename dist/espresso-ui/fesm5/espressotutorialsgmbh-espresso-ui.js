import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.clickEvent = new EventEmitter();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    ButtonComponent.prototype.onClick = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        this.clickEvent.emit(value);
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-button',
                    template: "<button class=\"button\" [class.button--secondary]=\"secondary\" (click)=\"onClick(value)\">\n    <ng-content></ng-content>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".button{width:100%;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:var(--et-ui-color-blue-400);color:var(--et-ui-color-white);font-size:.875rem;font-weight:700;cursor:pointer;padding:.5rem 1rem;border-radius:var(--et-ui-radius)}.button--secondary,.button:hover{background:var(--et-ui-color-orange-400)}.button--secondary:hover{background:var(--et-ui-color-blue-400)}"]
                }] }
    ];
    ButtonComponent.propDecorators = {
        value: [{ type: Input }],
        secondary: [{ type: Input }],
        clickEvent: [{ type: Output }]
    };
    return ButtonComponent;
}());
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.value;
    /** @type {?} */
    ButtonComponent.prototype.secondary;
    /** @type {?} */
    ButtonComponent.prototype.clickEvent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ButtonComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ButtonComponent
                    ],
                },] }
    ];
    return ButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    return ButtonFavoriteComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonFavoriteModule = /** @class */ (function () {
    function ButtonFavoriteModule() {
    }
    ButtonFavoriteModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ButtonFavoriteComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ButtonFavoriteComponent
                    ]
                },] }
    ];
    return ButtonFavoriteModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonLinkComponent = /** @class */ (function () {
    function ButtonLinkComponent() {
    }
    ButtonLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-button-link',
                    template: "<a class=\"button-link\" [href]=\"url\" [title]=\"title\" [target]=\"target\" [rel]=\"rel\" [class.button-link--secondary]=\"secondary\">\n    {{label}}\n</a>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".button-link{box-sizing:border-box;width:100%;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:var(--et-ui-color-blue-400);color:var(--et-ui-color-white);font-size:.875rem;font-weight:700;cursor:pointer;padding:.5rem 1rem;border-radius:var(--et-ui-radius);text-decoration:none;text-align:center}.button-link--secondary,.button-link:hover{background:var(--et-ui-color-orange-400)}.button-link--secondary:hover{background:var(--et-ui-color-blue-400)}"]
                }] }
    ];
    ButtonLinkComponent.propDecorators = {
        url: [{ type: Input }],
        label: [{ type: Input }],
        title: [{ type: Input }],
        rel: [{ type: Input }],
        target: [{ type: Input }],
        secondary: [{ type: Input }]
    };
    return ButtonLinkComponent;
}());
if (false) {
    /** @type {?} */
    ButtonLinkComponent.prototype.url;
    /** @type {?} */
    ButtonLinkComponent.prototype.label;
    /** @type {?} */
    ButtonLinkComponent.prototype.title;
    /** @type {?} */
    ButtonLinkComponent.prototype.rel;
    /** @type {?} */
    ButtonLinkComponent.prototype.target;
    /** @type {?} */
    ButtonLinkComponent.prototype.secondary;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonLinkModule = /** @class */ (function () {
    function ButtonLinkModule() {
    }
    ButtonLinkModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ButtonLinkComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ButtonLinkComponent
                    ]
                },] }
    ];
    return ButtonLinkModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card',
                    template: "<div class=\"card\">\n    <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".card{box-sizing:border-box;position:relative;background:var(--et-ui-color-white);border-radius:var(--et-ui-radius);box-shadow:var(--et-ui-shadow-lg);display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;height:100%}"]
                }] }
    ];
    return CardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CardComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        CardComponent
                    ]
                },] }
    ];
    return CardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardBodyComponent = /** @class */ (function () {
    function CardBodyComponent() {
        this.overlay = false;
    }
    CardBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-body',
                    template: "<div class=\"card__body\"  [class.card__body--overlay]=\"overlay\">\n    <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".card__body:hover .card__overlay{display:flex}"]
                }] }
    ];
    CardBodyComponent.propDecorators = {
        overlay: [{ type: Input }]
    };
    return CardBodyComponent;
}());
if (false) {
    /** @type {?} */
    CardBodyComponent.prototype.overlay;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardBodyModule = /** @class */ (function () {
    function CardBodyModule() {
    }
    CardBodyModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CardBodyComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        CardBodyComponent
                    ]
                },] }
    ];
    return CardBodyModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardContentComponent = /** @class */ (function () {
    function CardContentComponent() {
    }
    CardContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-content',
                    template: "<div class=\"card__content\">\n    <slot name=\"time\"></slot>\n    <slot name=\"title\"></slot>\n    <slot name=\"info\"></slot>\n    <slot name=\"author\"></slot>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".card__content{box-sizing:border-box;padding:1rem;width:100%}"]
                }] }
    ];
    return CardContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardContentModule = /** @class */ (function () {
    function CardContentModule() {
    }
    CardContentModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CardContentComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        CardContentComponent
                    ]
                },] }
    ];
    return CardContentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardImageComponent = /** @class */ (function () {
    function CardImageComponent() {
    }
    CardImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-image',
                    template: "<div class=\"card__image\">\n    <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".card__image{box-sizing:border-box;display:block;width:100%;height:auto;margin:0 auto;border-top-left-radius:.25rem;border-top-right-radius:.25rem;overflow:hidden}.card__image img{vertical-align:bottom;box-sizing:border-box;width:100%}"]
                }] }
    ];
    return CardImageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardImageModule = /** @class */ (function () {
    function CardImageModule() {
    }
    CardImageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CardImageComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        CardImageComponent
                    ]
                },] }
    ];
    return CardImageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardTimeComponent = /** @class */ (function () {
    function CardTimeComponent() {
    }
    CardTimeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-time',
                    template: "<time class=\"card__time\">\n    <ng-content></ng-content>\n</time>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".card__time{box-sizing:border-box;text-align:left;display:block;font-size:.75rem;color:var(--et-ui-color-gray-400);margin-bottom:.25rem}"]
                }] }
    ];
    return CardTimeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardTimeModule = /** @class */ (function () {
    function CardTimeModule() {
    }
    CardTimeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CardTimeComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        CardTimeComponent
                    ]
                },] }
    ];
    return CardTimeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardTitleComponent = /** @class */ (function () {
    function CardTitleComponent() {
    }
    /**
     * @return {?}
     */
    CardTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-title',
                    template: "<h3 class=\"card__title\">\n    <ng-content></ng-content>\n</h3>\n",
                    styles: [".card__title{box-sizing:border-box;text-align:left;color:var(--et-ui-color-gray-500);font-size:1.25rem;margin:0 0 .5rem;font-weight:400}"]
                }] }
    ];
    /** @nocollapse */
    CardTitleComponent.ctorParameters = function () { return []; };
    return CardTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardTitleModule = /** @class */ (function () {
    function CardTitleModule() {
    }
    CardTitleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CardTitleComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        CardTitleComponent
                    ]
                },] }
    ];
    return CardTitleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardInfoComponent = /** @class */ (function () {
    function CardInfoComponent() {
    }
    CardInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-info',
                    template: "<div class=\"card__info\">\n    <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".card__info{box-sizing:border-box;color:var(--et-ui-color-gray-300);font-size:.8rem;margin:.5rem 0;text-align:left}"]
                }] }
    ];
    return CardInfoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardInfoModule = /** @class */ (function () {
    function CardInfoModule() {
    }
    CardInfoModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CardInfoComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        CardInfoComponent
                    ]
                },] }
    ];
    return CardInfoModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardAuthorComponent = /** @class */ (function () {
    function CardAuthorComponent() {
    }
    CardAuthorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-author',
                    template: "<p class=\"card__author\">\n    <ng-content></ng-content>\n</p>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".card__author{box-sizing:border-box;color:var(--et-ui-color-gray-300);font-size:.8rem;margin:.5rem 0;text-align:left}.card__author p{margin-top:0;margin-bottom:0;color:var(--et-ui-color-gray-300);font-size:.8rem;text-align:left}"]
                }] }
    ];
    return CardAuthorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardAuthorModule = /** @class */ (function () {
    function CardAuthorModule() {
    }
    CardAuthorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CardAuthorComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        CardAuthorComponent
                    ]
                },] }
    ];
    return CardAuthorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardFooterComponent = /** @class */ (function () {
    function CardFooterComponent() {
    }
    CardFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-footer',
                    template: "<div class=\"card__footer\">\n    <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".card__footer{align-self:flex-end;padding:0 1rem 1rem}"]
                }] }
    ];
    return CardFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardFooterModule = /** @class */ (function () {
    function CardFooterModule() {
    }
    CardFooterModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CardFooterComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        CardFooterComponent
                    ]
                },] }
    ];
    return CardFooterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardOverlayComponent = /** @class */ (function () {
    function CardOverlayComponent() {
    }
    CardOverlayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-overlay',
                    template: "<div class=\"card__overlay\">\n    <ng-content></ng-content>\n</div>\n",
                    styles: [".card__overlay{box-sizing:border-box;display:none;z-index:10;position:absolute;bottom:0;left:0;right:0;box-shadow:var(--et-ui-shadow-lg);padding:.75rem;min-height:100%;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;border-radius:var(--et-ui-radius);background-color:var(--et-ui-color-gray-100)}"]
                }] }
    ];
    return CardOverlayComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardOverlayModule = /** @class */ (function () {
    function CardOverlayModule() {
    }
    CardOverlayModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CardOverlayComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        CardOverlayComponent
                    ]
                },] }
    ];
    return CardOverlayModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardMetaComponent = /** @class */ (function () {
    function CardMetaComponent() {
    }
    CardMetaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-meta',
                    template: "<div class=\"card__meta\">\n    <div class=\"card__meta__entry\">\n        <i>\n            <ng-container *ngIf=\"type === 'book'; else isVideo\">\n                <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"book\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z\"></path></svg>\n            </ng-container>\n            <ng-template #isVideo>\n                <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"film\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z\"></path></svg>\n            </ng-template>\n        </i>\n        <span>{{typeTitle}}</span>\n    </div>\n    <div class=\"card__meta__entry\">\n        <i>\n            <ng-container *ngIf=\"type === 'book'; else isDuration\">\n                <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"copy\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z\"></path></svg>\n            </ng-container>\n            <ng-template #isDuration>\n                <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"stopwatch\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z\"></path></svg>\n            </ng-template>\n        </i>\n        <span>{{duration}}</span>\n    </div>\n    <div class=\"card__meta__entry\">\n        <i>\n            <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"award\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path fill=\"currentColor\" d=\"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z\"></path></svg>\n        </i>\n        <span>{{level}}</span>\n    </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".card__meta{box-sizing:border-box;padding:0 0 1rem;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center}.card__meta .card__meta__entry{box-sizing:border-box;width:auto;margin-right:.45rem;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;font-size:.75rem;color:var(--et-ui-color-gray-400)}.card__meta .card__meta__entry i,.card__meta .card__meta__entry i svg{box-sizing:border-box;width:12px;height:12px;color:var(--et-ui-color-blue-400)}.card__meta .card__meta__entry span{box-sizing:border-box;padding-left:.15rem}"]
                }] }
    ];
    CardMetaComponent.propDecorators = {
        type: [{ type: Input }],
        typeTitle: [{ type: Input }],
        duration: [{ type: Input }],
        level: [{ type: Input }]
    };
    return CardMetaComponent;
}());
if (false) {
    /** @type {?} */
    CardMetaComponent.prototype.type;
    /** @type {?} */
    CardMetaComponent.prototype.typeTitle;
    /** @type {?} */
    CardMetaComponent.prototype.duration;
    /** @type {?} */
    CardMetaComponent.prototype.level;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardMetaModule = /** @class */ (function () {
    function CardMetaModule() {
    }
    CardMetaModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CardMetaComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        CardMetaComponent
                    ]
                },] }
    ];
    return CardMetaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardDescriptionComponent = /** @class */ (function () {
    function CardDescriptionComponent() {
    }
    CardDescriptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-card-description',
                    template: "<div class=\"card__description\">\n    <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".card__description{box-sizing:border-box;text-align:left;padding-bottom:1rem}.card__description a,.card__description ol,.card__description p,.card__description ul{font-size:.875rem;box-sizing:border-box;text-align:left}.card__description ol,.card__description p,.card__description ul{color:var(--et-ui-color-gray-400)}.card__description a{color:var(--et-ui-color-blue-400)}.card__description a:hover{color:var(--et-ui-color-orange-400)}.card__description ol,.card__description ul{padding-left:1rem}.card__description ol li,.card__description ul li{margin-bottom:.25rem}.card__description ol li:last-child,.card__description ul li:last-child,.card__description:last-child{margin-bottom:0}"]
                }] }
    ];
    return CardDescriptionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardDescriptionModule = /** @class */ (function () {
    function CardDescriptionModule() {
    }
    CardDescriptionModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CardDescriptionComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        CardDescriptionComponent
                    ]
                },] }
    ];
    return CardDescriptionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                    styles: [".rating{box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;width:100%}.rating .fa-star,.rating .fa-star-half-empty,.rating .fa-star-o{color:var(--et-ui-color-yellow-400)}.rating .fa-star svg,.rating .fa-star-half-empty svg,.rating .fa-star-o svg{display:block;width:22px;height:22px}"]
                }] }
    ];
    RatingComponent.propDecorators = {
        rating: [{ type: Input }]
    };
    return RatingComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    RatingComponent.prototype.MAX_NUMBER_OF_STARS;
    /** @type {?} */
    RatingComponent.prototype.rating;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RatingModule = /** @class */ (function () {
    function RatingModule() {
    }
    RatingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [RatingComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        RatingComponent
                    ]
                },] }
    ];
    return RatingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthorComponent = /** @class */ (function () {
    function AuthorComponent() {
    }
    AuthorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-author',
                    template: "<div class=\"author\">\n    <div class=\"author__meta\" [class.author__meta--no-image]=\"!image\">\n        <ng-container *ngIf=\"image\">\n            <div class=\"author__meta__image\">\n                <img [src]=\"image\" [alt]=\"name\">\n            </div>\n        </ng-container>\n        <div class=\"author__meta__info\">\n            <h3>{{name}}</h3>\n            <ng-container *ngIf=\"position\">\n                <h4>{{position}}</h4>\n            </ng-container>\n        </div>\n    </div>\n    <div class=\"author__description\" [innerHTML]=\"text\"></div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".author{width:100%;box-sizing:border-box;padding:1rem}@media (min-width:360px){.author{padding:1.5rem}}.author .author__meta{width:100%;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin-bottom:1rem}.author .author__meta .author__meta__image{box-sizing:border-box;width:90px;height:90px;margin:0}.author .author__meta .author__meta__image img{width:80px;height:80px;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;border-radius:var(--et-ui-radius-full)}.author .author__meta .author__meta__info{box-sizing:border-box;width:100%;padding-left:0}.author .author__meta .author__meta__info h3{box-sizing:border-box;color:var(--et-ui-color-gray-500);font-size:1rem;margin:0 0 .25rem;font-weight:500}.author .author__meta .author__meta__info h4{box-sizing:border-box;color:var(--et-ui-color-gray-300);font-size:.875rem;margin:0;font-weight:400}@media (min-width:680px){.author .author__meta .author__meta__info{width:calc(100% - 96px);padding-left:.75rem}.author .author__meta--no-image .author__meta__info{width:100%;padding-left:0}}.author .author__description{box-sizing:border-box;font-size:1rem;line-height:1.4;color:var(--et-ui-color-gray-400)}.author .author__description a{color:var(--et-ui-color-blue-400)}.author .author__description a:hover{color:var(--et-ui-color-orange-400)}.author .author__description ol,.author .author__description ul{padding-left:1rem}.author .author__description ol li,.author .author__description ul li{margin-bottom:.25rem}.author .author__description ol li:last-child,.author .author__description ul li:last-child,.author .author__description:last-child{margin-bottom:0}"]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthorModule = /** @class */ (function () {
    function AuthorModule() {
    }
    AuthorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AuthorComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        AuthorComponent
                    ]
                },] }
    ];
    return AuthorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
    }
    ReviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-review',
                    template: "<div class=\"review\">\n    <slot name=\"rating\"></slot>\n    <slot name=\"title\"></slot>\n    <slot name=\"description\"></slot>\n    <slot name=\"author\"></slot>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".review{width:100%;box-sizing:border-box;padding:1rem}"]
                }] }
    ];
    return ReviewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReviewModule = /** @class */ (function () {
    function ReviewModule() {
    }
    ReviewModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ReviewComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ReviewComponent
                    ]
                },] }
    ];
    return ReviewModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReviewDescriptionComponent = /** @class */ (function () {
    function ReviewDescriptionComponent() {
    }
    ReviewDescriptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-review-description',
                    template: "<div class=\"review__description\">\n    <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".review__description{margin-top:.875rem;width:100%;box-sizing:border-box;font-size:1rem;line-height:1.4;color:var(--et-ui-color-gray-400)}.review__description a{color:var(--et-ui-color-blue-400)}.review__description a:hover{color:var(--et-ui-color-orange-400)}.review__description ol,.review__description ul{padding-left:1rem}.review__description ol li,.review__description ul li{margin-bottom:.25rem}.review__description ol li:last-child,.review__description ul li:last-child,.review__description:last-child{margin-bottom:0}"]
                }] }
    ];
    return ReviewDescriptionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReviewDescriptionModule = /** @class */ (function () {
    function ReviewDescriptionModule() {
    }
    ReviewDescriptionModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ReviewDescriptionComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ReviewDescriptionComponent
                    ]
                },] }
    ];
    return ReviewDescriptionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReviewTitleComponent = /** @class */ (function () {
    function ReviewTitleComponent() {
    }
    ReviewTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-review-title',
                    template: "<h3 class=\"review__title\">\n    <ng-content></ng-content>\n</h3>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".review__title{width:100%;box-sizing:border-box;color:var(--et-ui-color-gray-500);font-size:1.15rem;margin:1rem 0 .5rem;font-weight:400}"]
                }] }
    ];
    return ReviewTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReviewTitleModule = /** @class */ (function () {
    function ReviewTitleModule() {
    }
    ReviewTitleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ReviewTitleComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ReviewTitleComponent
                    ]
                },] }
    ];
    return ReviewTitleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReviewAuthorComponent = /** @class */ (function () {
    function ReviewAuthorComponent() {
    }
    ReviewAuthorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-review-author',
                    template: "<p class=\"review__author\">\n    <ng-content></ng-content>\n</p>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".review__author{width:100%;box-sizing:border-box;color:var(--et-ui-color-gray-300);font-size:.75rem;margin:.5rem 0 0;font-weight:400}"]
                }] }
    ];
    return ReviewAuthorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReviewAuthorModule = /** @class */ (function () {
    function ReviewAuthorModule() {
    }
    ReviewAuthorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ReviewAuthorComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ReviewAuthorComponent
                    ]
                },] }
    ];
    return ReviewAuthorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent() {
    }
    TestimonialComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-testimonial',
                    template: "<div class=\"testimonial\">\n    <div class=\"testimonial__icon\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 975.036 975.036\">\n            <path d=\"M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z\"></path>\n        </svg>\n    </div>\n    <div class=\"testimonial__text\" [innerHTML]=\"text\"></div>\n    <div class=\"testimonial__meta\" >\n        <div class=\"testimonial__meta__image\">\n            <img [src]=\"image\" [alt]=\"name\">\n        </div>\n        <div class=\"testimonial__meta__info\">\n            <h3>{{name}}</h3>\n            <h4>{{position}}</h4>\n        </div>\n    </div>\n</div>\n",
                    styles: [".testimonial{width:100%;box-sizing:border-box;padding:1rem}.testimonial .testimonial__icon,.testimonial .testimonial__icon svg{box-sizing:border-box;display:block;width:1.25rem;height:1.25rem;color:var(--et-ui-color-blue-400);margin-bottom:1rem}.testimonial .testimonial__meta{width:100%;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin-top:1rem;margin-bottom:0}.testimonial .testimonial__meta .testimonial__meta__image{box-sizing:border-box;width:80px;height:80px;margin:0}.testimonial .testimonial__meta .testimonial__meta__image img{width:80px;height:80px;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;border-radius:var(--et-ui-radius-full)}.testimonial .testimonial__meta .testimonial__meta__info{box-sizing:border-box;width:100%;padding-left:0;text-align:left}@media (min-width:680px){.testimonial .testimonial__meta .testimonial__meta__info{width:calc(100% - 86px);padding-left:.75rem}}.testimonial .testimonial__meta .testimonial__meta__info h3{box-sizing:border-box;color:var(--et-ui-color-gray-500);font-size:1rem;margin:0 0 .25rem;font-weight:400}.testimonial .testimonial__meta .testimonial__meta__info h4{box-sizing:border-box;color:var(--et-ui-color-gray-300);font-size:.75rem;margin:0;font-weight:400}.testimonial .testimonial__text{box-sizing:border-box;font-size:1rem;line-height:1.625;color:var(--et-ui-color-gray-500);text-align:left}.testimonial .testimonial__text a{color:var(--et-ui-color-blue-400)}.testimonial .testimonial__text a:hover{color:var(--et-ui-color-orange-400)}.testimonial .testimonial__text ol,.testimonial .testimonial__text ul{padding-left:1rem}.testimonial .testimonial__text ol li,.testimonial .testimonial__text ul li{margin-bottom:.25rem}.testimonial .testimonial__text ol li:last-child,.testimonial .testimonial__text ul li:last-child,.testimonial .testimonial__text:last-child{margin-bottom:0}"]
                }] }
    ];
    TestimonialComponent.propDecorators = {
        name: [{ type: Input }],
        text: [{ type: Input }],
        image: [{ type: Input }],
        position: [{ type: Input }]
    };
    return TestimonialComponent;
}());
if (false) {
    /** @type {?} */
    TestimonialComponent.prototype.name;
    /** @type {?} */
    TestimonialComponent.prototype.text;
    /** @type {?} */
    TestimonialComponent.prototype.image;
    /** @type {?} */
    TestimonialComponent.prototype.position;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestimonialModule = /** @class */ (function () {
    function TestimonialModule() {
    }
    TestimonialModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TestimonialComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        TestimonialComponent
                    ]
                },] }
    ];
    return TestimonialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AuthorComponent, AuthorModule, ButtonComponent, ButtonFavoriteComponent, ButtonFavoriteModule, ButtonLinkComponent, ButtonLinkModule, ButtonModule, CardAuthorComponent, CardAuthorModule, CardBodyComponent, CardBodyModule, CardComponent, CardContentComponent, CardContentModule, CardDescriptionComponent, CardDescriptionModule, CardFooterComponent, CardFooterModule, CardImageComponent, CardImageModule, CardInfoComponent, CardInfoModule, CardMetaComponent, CardMetaModule, CardModule, CardOverlayComponent, CardOverlayModule, CardTimeComponent, CardTimeModule, CardTitleComponent, CardTitleModule, RatingComponent, RatingModule, ReviewAuthorComponent, ReviewAuthorModule, ReviewComponent, ReviewDescriptionComponent, ReviewDescriptionModule, ReviewModule, ReviewTitleComponent, ReviewTitleModule, TestimonialComponent, TestimonialModule };
//# sourceMappingURL=espressotutorialsgmbh-espresso-ui.js.map
