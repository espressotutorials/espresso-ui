import { EventEmitter, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵelementStart, ɵɵlistener, ɵɵprojection, ɵɵelementEnd, ɵɵclassProp, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵelementContainerStart, ɵɵnamespaceSVG, ɵɵelement, ɵɵelementContainerEnd, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵadvance, ɵɵproperty, ɵɵtext, ɵɵsanitizeUrl, ɵɵtextInterpolate1, ɵɵnamespaceHTML, ɵɵtextInterpolate } from '@angular/core';
import { CommonModule, NgIf, NgForOf } from '@angular/common';

var _c0 = ["*"];
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.clickEvent = new EventEmitter();
    }
    ButtonComponent.prototype.onClick = function (value) {
        this.clickEvent.emit(value);
    };
    /** @nocollapse */ ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
    /** @nocollapse */ ButtonComponent.ɵcmp = ɵɵdefineComponent({ type: ButtonComponent, selectors: [["lib-button"]], inputs: { value: "value", secondary: "secondary" }, outputs: { clickEvent: "clickEvent" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "button", 3, "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "button", 0);
            ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.onClick(ctx.value); });
            ɵɵprojection(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassProp("button--secondary", ctx.secondary);
        } }, styles: [".button{width:100%;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:var(--color-blue-400);color:var(--color-white);font-size:.875rem;font-weight:700;cursor:pointer;padding:.5rem 1rem;border-radius:.25rem}.button--secondary,.button:hover{background:var(--color-orange-400)}.button--secondary:hover{background:var(--color-blue-400)}"], encapsulation: 3, changeDetection: 0 });
    return ButtonComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'lib-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, { value: [{
            type: Input
        }], secondary: [{
            type: Input
        }], clickEvent: [{
            type: Output
        }] }); })();

var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    /** @nocollapse */ ButtonModule.ɵmod = ɵɵdefineNgModule({ type: ButtonModule });
    /** @nocollapse */ ButtonModule.ɵinj = ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
                CommonModule
            ]] });
    return ButtonModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ButtonModule, { declarations: [ButtonComponent], imports: [CommonModule], exports: [ButtonComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    ButtonComponent
                ],
            }]
    }], null, null); })();

function ButtonFavoriteComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 3);
    ɵɵelement(2, "path", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function ButtonFavoriteComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 5);
    ɵɵelement(1, "path", 6);
    ɵɵelementEnd();
} }
var ButtonFavoriteComponent = /** @class */ (function () {
    function ButtonFavoriteComponent() {
        this.favorite = false;
        this.favoriteChange = new EventEmitter();
    }
    ButtonFavoriteComponent.prototype.toggleValueChange = function () {
        if (this.favorite) {
            this.favoriteChange.emit([false, this.id, this.title, this.cover, this.type]);
            this.favorite = false;
        }
        else {
            this.favoriteChange.emit([true, this.id, this.title, this.cover, this.type]);
            this.favorite = true;
        }
    };
    /** @nocollapse */ ButtonFavoriteComponent.ɵfac = function ButtonFavoriteComponent_Factory(t) { return new (t || ButtonFavoriteComponent)(); };
    /** @nocollapse */ ButtonFavoriteComponent.ɵcmp = ɵɵdefineComponent({ type: ButtonFavoriteComponent, selectors: [["lib-button-favorite"]], inputs: { favorite: "favorite", id: "id", title: "title", cover: "cover", type: "type" }, outputs: { favoriteChange: "favoriteChange" }, decls: 4, vars: 4, consts: [[1, "button-favorite", 3, "click"], [4, "ngIf", "ngIfElse"], ["isFav", ""], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"]], template: function ButtonFavoriteComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "button", 0);
            ɵɵlistener("click", function ButtonFavoriteComponent_Template_button_click_0_listener() { return ctx.toggleValueChange(); });
            ɵɵtemplate(1, ButtonFavoriteComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
            ɵɵtemplate(2, ButtonFavoriteComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r1 = ɵɵreference(3);
            ɵɵclassProp("button-favorite--active", ctx.favorite);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.favorite)("ngIfElse", _r1);
        } }, directives: [NgIf], styles: [".button-favorite{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0;display:flex;justify-content:center;align-items:center;width:28px;height:28px;color:var(--color-gray-500);cursor:pointer}.button-favorite:hover{color:var(--color-red-400)}.button-favorite svg{width:26px;height:26px;display:block;fill:currentColor;pointer-events:none}.button-favorite--active{color:var(--color-red-400)}"], encapsulation: 3, changeDetection: 0 });
    return ButtonFavoriteComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonFavoriteComponent, [{
        type: Component,
        args: [{
                selector: 'lib-button-favorite',
                templateUrl: './button-favorite.component.html',
                styleUrls: ['./button-favorite.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, { favorite: [{
            type: Input
        }], id: [{
            type: Input
        }], title: [{
            type: Input
        }], cover: [{
            type: Input
        }], type: [{
            type: Input
        }], favoriteChange: [{
            type: Output
        }] }); })();

var ButtonFavoriteModule = /** @class */ (function () {
    function ButtonFavoriteModule() {
    }
    /** @nocollapse */ ButtonFavoriteModule.ɵmod = ɵɵdefineNgModule({ type: ButtonFavoriteModule });
    /** @nocollapse */ ButtonFavoriteModule.ɵinj = ɵɵdefineInjector({ factory: function ButtonFavoriteModule_Factory(t) { return new (t || ButtonFavoriteModule)(); }, imports: [[
                CommonModule
            ]] });
    return ButtonFavoriteModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ButtonFavoriteModule, { declarations: [ButtonFavoriteComponent], imports: [CommonModule], exports: [ButtonFavoriteComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonFavoriteModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonFavoriteComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    ButtonFavoriteComponent
                ]
            }]
    }], null, null); })();

var ButtonLinkComponent = /** @class */ (function () {
    function ButtonLinkComponent() {
    }
    /** @nocollapse */ ButtonLinkComponent.ɵfac = function ButtonLinkComponent_Factory(t) { return new (t || ButtonLinkComponent)(); };
    /** @nocollapse */ ButtonLinkComponent.ɵcmp = ɵɵdefineComponent({ type: ButtonLinkComponent, selectors: [["lib-button-link"]], inputs: { url: "url", label: "label", title: "title", rel: "rel", target: "target", secondary: "secondary" }, decls: 2, vars: 7, consts: [[1, "button-link", 3, "href", "title", "target", "rel"]], template: function ButtonLinkComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "a", 0);
            ɵɵtext(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassProp("button-link--secondary", ctx.secondary);
            ɵɵproperty("href", ctx.url, ɵɵsanitizeUrl)("title", ctx.title)("target", ctx.target)("rel", ctx.rel);
            ɵɵadvance(1);
            ɵɵtextInterpolate1(" ", ctx.label, "\n");
        } }, styles: [".button-link{box-sizing:border-box;width:100%;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:var(--color-blue-400);color:var(--color-white);font-size:.875rem;font-weight:700;cursor:pointer;padding:.5rem 1rem;border-radius:.25rem;text-decoration:none;text-align:center}.button-link--secondary,.button-link:hover{background:var(--color-orange-400)}.button-link--secondary:hover{background:var(--color-blue-400)}"], encapsulation: 3, changeDetection: 0 });
    return ButtonLinkComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonLinkComponent, [{
        type: Component,
        args: [{
                selector: 'lib-button-link',
                templateUrl: './button-link.component.html',
                styleUrls: ['./button-link.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, { url: [{
            type: Input
        }], label: [{
            type: Input
        }], title: [{
            type: Input
        }], rel: [{
            type: Input
        }], target: [{
            type: Input
        }], secondary: [{
            type: Input
        }] }); })();

var ButtonLinkModule = /** @class */ (function () {
    function ButtonLinkModule() {
    }
    /** @nocollapse */ ButtonLinkModule.ɵmod = ɵɵdefineNgModule({ type: ButtonLinkModule });
    /** @nocollapse */ ButtonLinkModule.ɵinj = ɵɵdefineInjector({ factory: function ButtonLinkModule_Factory(t) { return new (t || ButtonLinkModule)(); }, imports: [[
                CommonModule
            ]] });
    return ButtonLinkModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ButtonLinkModule, { declarations: [ButtonLinkComponent], imports: [CommonModule], exports: [ButtonLinkComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonLinkModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonLinkComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    ButtonLinkComponent
                ]
            }]
    }], null, null); })();

var _c0$1 = ["*"];
var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    /** @nocollapse */ CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
    /** @nocollapse */ CardComponent.ɵcmp = ɵɵdefineComponent({ type: CardComponent, selectors: [["lib-card"]], ngContentSelectors: _c0$1, decls: 2, vars: 0, consts: [[1, "card"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } }, styles: [".card{box-sizing:border-box;position:relative;background:var(--color-white);border-radius:.25rem;box-shadow:var(--shadow-lg);display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;height:100%}"], encapsulation: 3, changeDetection: 0 });
    return CardComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, null); })();

var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    /** @nocollapse */ CardModule.ɵmod = ɵɵdefineNgModule({ type: CardModule });
    /** @nocollapse */ CardModule.ɵinj = ɵɵdefineInjector({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, imports: [[
                CommonModule
            ]] });
    return CardModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CardModule, { declarations: [CardComponent], imports: [CommonModule], exports: [CardComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardModule, [{
        type: NgModule,
        args: [{
                declarations: [CardComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    CardComponent
                ]
            }]
    }], null, null); })();

var _c0$2 = ["*"];
var CardBodyComponent = /** @class */ (function () {
    function CardBodyComponent() {
        this.overlay = false;
    }
    /** @nocollapse */ CardBodyComponent.ɵfac = function CardBodyComponent_Factory(t) { return new (t || CardBodyComponent)(); };
    /** @nocollapse */ CardBodyComponent.ɵcmp = ɵɵdefineComponent({ type: CardBodyComponent, selectors: [["lib-card-body"]], inputs: { overlay: "overlay" }, ngContentSelectors: _c0$2, decls: 2, vars: 2, consts: [[1, "card__body"]], template: function CardBodyComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassProp("card__body--overlay", ctx.overlay);
        } }, styles: [".card__body:hover .card__overlay{display:flex}"], encapsulation: 3, changeDetection: 0 });
    return CardBodyComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardBodyComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card-body',
                templateUrl: './card-body.component.html',
                styleUrls: ['./card-body.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, { overlay: [{
            type: Input
        }] }); })();

var CardBodyModule = /** @class */ (function () {
    function CardBodyModule() {
    }
    /** @nocollapse */ CardBodyModule.ɵmod = ɵɵdefineNgModule({ type: CardBodyModule });
    /** @nocollapse */ CardBodyModule.ɵinj = ɵɵdefineInjector({ factory: function CardBodyModule_Factory(t) { return new (t || CardBodyModule)(); }, imports: [[
                CommonModule
            ]] });
    return CardBodyModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CardBodyModule, { declarations: [CardBodyComponent], imports: [CommonModule], exports: [CardBodyComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardBodyModule, [{
        type: NgModule,
        args: [{
                declarations: [CardBodyComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    CardBodyComponent
                ]
            }]
    }], null, null); })();

var CardContentComponent = /** @class */ (function () {
    function CardContentComponent() {
    }
    /** @nocollapse */ CardContentComponent.ɵfac = function CardContentComponent_Factory(t) { return new (t || CardContentComponent)(); };
    /** @nocollapse */ CardContentComponent.ɵcmp = ɵɵdefineComponent({ type: CardContentComponent, selectors: [["lib-card-content"]], decls: 4, vars: 0, consts: [[1, "card__content"], ["name", "time"], ["name", "title"], ["name", "author"]], template: function CardContentComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelement(1, "slot", 1);
            ɵɵelement(2, "slot", 2);
            ɵɵelement(3, "slot", 3);
            ɵɵelementEnd();
        } }, styles: [".card__content{box-sizing:border-box;padding:1rem;width:100%}"], encapsulation: 3, changeDetection: 0 });
    return CardContentComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardContentComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card-content',
                templateUrl: './card-content.component.html',
                styleUrls: ['./card-content.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, null); })();

var CardContentModule = /** @class */ (function () {
    function CardContentModule() {
    }
    /** @nocollapse */ CardContentModule.ɵmod = ɵɵdefineNgModule({ type: CardContentModule });
    /** @nocollapse */ CardContentModule.ɵinj = ɵɵdefineInjector({ factory: function CardContentModule_Factory(t) { return new (t || CardContentModule)(); }, imports: [[
                CommonModule
            ]] });
    return CardContentModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CardContentModule, { declarations: [CardContentComponent], imports: [CommonModule], exports: [CardContentComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardContentModule, [{
        type: NgModule,
        args: [{
                declarations: [CardContentComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    CardContentComponent
                ]
            }]
    }], null, null); })();

var _c0$3 = ["*"];
var CardImageComponent = /** @class */ (function () {
    function CardImageComponent() {
    }
    /** @nocollapse */ CardImageComponent.ɵfac = function CardImageComponent_Factory(t) { return new (t || CardImageComponent)(); };
    /** @nocollapse */ CardImageComponent.ɵcmp = ɵɵdefineComponent({ type: CardImageComponent, selectors: [["lib-card-image"]], ngContentSelectors: _c0$3, decls: 2, vars: 0, consts: [[1, "card__image"]], template: function CardImageComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } }, styles: [".card__image{box-sizing:border-box;display:block;width:100%;height:auto;margin:0 auto;border-top-left-radius:.25rem;border-top-right-radius:.25rem;overflow:hidden}.card__image img{vertical-align:bottom}"], encapsulation: 3, changeDetection: 0 });
    return CardImageComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardImageComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card-image',
                templateUrl: './card-image.component.html',
                styleUrls: ['./card-image.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, null); })();

var CardImageModule = /** @class */ (function () {
    function CardImageModule() {
    }
    /** @nocollapse */ CardImageModule.ɵmod = ɵɵdefineNgModule({ type: CardImageModule });
    /** @nocollapse */ CardImageModule.ɵinj = ɵɵdefineInjector({ factory: function CardImageModule_Factory(t) { return new (t || CardImageModule)(); }, imports: [[
                CommonModule
            ]] });
    return CardImageModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CardImageModule, { declarations: [CardImageComponent], imports: [CommonModule], exports: [CardImageComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardImageModule, [{
        type: NgModule,
        args: [{
                declarations: [CardImageComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    CardImageComponent
                ]
            }]
    }], null, null); })();

var _c0$4 = ["*"];
var CardTimeComponent = /** @class */ (function () {
    function CardTimeComponent() {
    }
    /** @nocollapse */ CardTimeComponent.ɵfac = function CardTimeComponent_Factory(t) { return new (t || CardTimeComponent)(); };
    /** @nocollapse */ CardTimeComponent.ɵcmp = ɵɵdefineComponent({ type: CardTimeComponent, selectors: [["lib-card-time"]], ngContentSelectors: _c0$4, decls: 2, vars: 0, consts: [[1, "card__time"]], template: function CardTimeComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "time", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } }, styles: [".card__time{box-sizing:border-box;display:block;font-size:.75rem;color:var(--color-gray-400);margin-bottom:.25rem}"], encapsulation: 3, changeDetection: 0 });
    return CardTimeComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardTimeComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card-time',
                templateUrl: './card-time.component.html',
                styleUrls: ['./card-time.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, null); })();

var CardTimeModule = /** @class */ (function () {
    function CardTimeModule() {
    }
    /** @nocollapse */ CardTimeModule.ɵmod = ɵɵdefineNgModule({ type: CardTimeModule });
    /** @nocollapse */ CardTimeModule.ɵinj = ɵɵdefineInjector({ factory: function CardTimeModule_Factory(t) { return new (t || CardTimeModule)(); }, imports: [[
                CommonModule
            ]] });
    return CardTimeModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CardTimeModule, { declarations: [CardTimeComponent], imports: [CommonModule], exports: [CardTimeComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardTimeModule, [{
        type: NgModule,
        args: [{
                declarations: [CardTimeComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    CardTimeComponent
                ]
            }]
    }], null, null); })();

var _c0$5 = ["*"];
var CardTitleComponent = /** @class */ (function () {
    function CardTitleComponent() {
    }
    CardTitleComponent.prototype.ngOnInit = function () {
    };
    /** @nocollapse */ CardTitleComponent.ɵfac = function CardTitleComponent_Factory(t) { return new (t || CardTitleComponent)(); };
    /** @nocollapse */ CardTitleComponent.ɵcmp = ɵɵdefineComponent({ type: CardTitleComponent, selectors: [["lib-card-title"]], ngContentSelectors: _c0$5, decls: 2, vars: 0, consts: [[1, "card__title"]], template: function CardTitleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "h3", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } }, styles: [".card__title[_ngcontent-%COMP%]{box-sizing:border-box;color:var(--color-gray-500);font-size:1.25rem;margin:0 0 .5rem;font-weight:400}"] });
    return CardTitleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardTitleComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card-title',
                templateUrl: './card-title.component.html',
                styleUrls: ['./card-title.component.less']
            }]
    }], function () { return []; }, null); })();

var CardTitleModule = /** @class */ (function () {
    function CardTitleModule() {
    }
    /** @nocollapse */ CardTitleModule.ɵmod = ɵɵdefineNgModule({ type: CardTitleModule });
    /** @nocollapse */ CardTitleModule.ɵinj = ɵɵdefineInjector({ factory: function CardTitleModule_Factory(t) { return new (t || CardTitleModule)(); }, imports: [[
                CommonModule
            ]] });
    return CardTitleModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CardTitleModule, { declarations: [CardTitleComponent], imports: [CommonModule], exports: [CardTitleComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardTitleModule, [{
        type: NgModule,
        args: [{
                declarations: [CardTitleComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    CardTitleComponent
                ]
            }]
    }], null, null); })();

var _c0$6 = ["*"];
var CardAuthorComponent = /** @class */ (function () {
    function CardAuthorComponent() {
    }
    /** @nocollapse */ CardAuthorComponent.ɵfac = function CardAuthorComponent_Factory(t) { return new (t || CardAuthorComponent)(); };
    /** @nocollapse */ CardAuthorComponent.ɵcmp = ɵɵdefineComponent({ type: CardAuthorComponent, selectors: [["lib-card-author"]], ngContentSelectors: _c0$6, decls: 2, vars: 0, consts: [[1, "card__author"]], template: function CardAuthorComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "p", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } }, styles: [".card__author{box-sizing:border-box;color:var(--color-gray-400);font-size:.875rem;margin:.5rem 0}"], encapsulation: 3, changeDetection: 0 });
    return CardAuthorComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardAuthorComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card-author',
                templateUrl: './card-author.component.html',
                styleUrls: ['./card-author.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, null); })();

var CardAuthorModule = /** @class */ (function () {
    function CardAuthorModule() {
    }
    /** @nocollapse */ CardAuthorModule.ɵmod = ɵɵdefineNgModule({ type: CardAuthorModule });
    /** @nocollapse */ CardAuthorModule.ɵinj = ɵɵdefineInjector({ factory: function CardAuthorModule_Factory(t) { return new (t || CardAuthorModule)(); }, imports: [[
                CommonModule
            ]] });
    return CardAuthorModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CardAuthorModule, { declarations: [CardAuthorComponent], imports: [CommonModule], exports: [CardAuthorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardAuthorModule, [{
        type: NgModule,
        args: [{
                declarations: [CardAuthorComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    CardAuthorComponent
                ]
            }]
    }], null, null); })();

var _c0$7 = ["*"];
var CardFooterComponent = /** @class */ (function () {
    function CardFooterComponent() {
    }
    /** @nocollapse */ CardFooterComponent.ɵfac = function CardFooterComponent_Factory(t) { return new (t || CardFooterComponent)(); };
    /** @nocollapse */ CardFooterComponent.ɵcmp = ɵɵdefineComponent({ type: CardFooterComponent, selectors: [["lib-card-footer"]], ngContentSelectors: _c0$7, decls: 2, vars: 0, consts: [[1, "card__footer"]], template: function CardFooterComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } }, styles: [".card__footer{align-self:flex-end;padding:0 1rem 1rem}"], encapsulation: 3, changeDetection: 0 });
    return CardFooterComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardFooterComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card-footer',
                templateUrl: './card-footer.component.html',
                styleUrls: ['./card-footer.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, null); })();

var CardFooterModule = /** @class */ (function () {
    function CardFooterModule() {
    }
    /** @nocollapse */ CardFooterModule.ɵmod = ɵɵdefineNgModule({ type: CardFooterModule });
    /** @nocollapse */ CardFooterModule.ɵinj = ɵɵdefineInjector({ factory: function CardFooterModule_Factory(t) { return new (t || CardFooterModule)(); }, imports: [[
                CommonModule
            ]] });
    return CardFooterModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CardFooterModule, { declarations: [CardFooterComponent], imports: [CommonModule], exports: [CardFooterComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardFooterModule, [{
        type: NgModule,
        args: [{
                declarations: [CardFooterComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    CardFooterComponent
                ]
            }]
    }], null, null); })();

var _c0$8 = ["*"];
var CardOverlayComponent = /** @class */ (function () {
    function CardOverlayComponent() {
    }
    /** @nocollapse */ CardOverlayComponent.ɵfac = function CardOverlayComponent_Factory(t) { return new (t || CardOverlayComponent)(); };
    /** @nocollapse */ CardOverlayComponent.ɵcmp = ɵɵdefineComponent({ type: CardOverlayComponent, selectors: [["lib-card-overlay"]], ngContentSelectors: _c0$8, decls: 2, vars: 0, consts: [[1, "card__overlay"]], template: function CardOverlayComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } }, styles: [".card__overlay[_ngcontent-%COMP%]{box-sizing:border-box;display:none;z-index:10;position:absolute;bottom:0;left:0;right:0;box-shadow:var(--shadow-lg);padding:.75rem;min-height:100%;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;border-radius:.25rem;background-color:var(--color-gray-100)}"] });
    return CardOverlayComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardOverlayComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card-overlay',
                templateUrl: './card-overlay.component.html',
                styleUrls: ['./card-overlay.component.less']
            }]
    }], null, null); })();

var CardOverlayModule = /** @class */ (function () {
    function CardOverlayModule() {
    }
    /** @nocollapse */ CardOverlayModule.ɵmod = ɵɵdefineNgModule({ type: CardOverlayModule });
    /** @nocollapse */ CardOverlayModule.ɵinj = ɵɵdefineInjector({ factory: function CardOverlayModule_Factory(t) { return new (t || CardOverlayModule)(); }, imports: [[
                CommonModule
            ]] });
    return CardOverlayModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CardOverlayModule, { declarations: [CardOverlayComponent], imports: [CommonModule], exports: [CardOverlayComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardOverlayModule, [{
        type: NgModule,
        args: [{
                declarations: [CardOverlayComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    CardOverlayComponent
                ]
            }]
    }], null, null); })();

function CardMetaComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 7);
    ɵɵelement(2, "path", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function CardMetaComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 9);
    ɵɵelement(1, "path", 10);
    ɵɵelementEnd();
} }
function CardMetaComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 11);
    ɵɵelement(2, "path", 12);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function CardMetaComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 13);
    ɵɵelement(1, "path", 14);
    ɵɵelementEnd();
} }
var CardMetaComponent = /** @class */ (function () {
    function CardMetaComponent() {
    }
    /** @nocollapse */ CardMetaComponent.ɵfac = function CardMetaComponent_Factory(t) { return new (t || CardMetaComponent)(); };
    /** @nocollapse */ CardMetaComponent.ɵcmp = ɵɵdefineComponent({ type: CardMetaComponent, selectors: [["lib-card-meta"]], inputs: { type: "type", typeTitle: "typeTitle", duration: "duration", level: "level" }, decls: 21, vars: 7, consts: [[1, "card__meta"], [1, "card__meta__entry"], [4, "ngIf", "ngIfElse"], ["isVideo", ""], ["isDuration", ""], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "award", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 384 512"], ["fill", "currentColor", "d", "M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "book", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512"], ["fill", "currentColor", "d", "M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "film", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "copy", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512"], ["fill", "currentColor", "d", "M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "stopwatch", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512"], ["fill", "currentColor", "d", "M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"]], template: function CardMetaComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "i");
            ɵɵtemplate(3, CardMetaComponent_ng_container_3_Template, 3, 0, "ng-container", 2);
            ɵɵtemplate(4, CardMetaComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
            ɵɵelementEnd();
            ɵɵelementStart(6, "span");
            ɵɵtext(7);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(8, "div", 1);
            ɵɵelementStart(9, "i");
            ɵɵtemplate(10, CardMetaComponent_ng_container_10_Template, 3, 0, "ng-container", 2);
            ɵɵtemplate(11, CardMetaComponent_ng_template_11_Template, 2, 0, "ng-template", null, 4, ɵɵtemplateRefExtractor);
            ɵɵelementEnd();
            ɵɵelementStart(13, "span");
            ɵɵtext(14);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(15, "div", 1);
            ɵɵelementStart(16, "i");
            ɵɵnamespaceSVG();
            ɵɵelementStart(17, "svg", 5);
            ɵɵelement(18, "path", 6);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵnamespaceHTML();
            ɵɵelementStart(19, "span");
            ɵɵtext(20);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r1 = ɵɵreference(5);
            var _r4 = ɵɵreference(12);
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.type === "book")("ngIfElse", _r1);
            ɵɵadvance(4);
            ɵɵtextInterpolate(ctx.typeTitle);
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.type === "book")("ngIfElse", _r4);
            ɵɵadvance(4);
            ɵɵtextInterpolate(ctx.duration);
            ɵɵadvance(6);
            ɵɵtextInterpolate(ctx.level);
        } }, directives: [NgIf], styles: [".card__meta{box-sizing:border-box;padding:0 0 1rem;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center}.card__meta .card__meta__entry{width:auto;margin-right:.45rem;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;font-size:.75rem;color:var(--color-gray-400)}.card__meta .card__meta__entry i,.card__meta .card__meta__entry i svg{width:12px;height:12px;color:var(--color-blue-400)}.card__meta .card__meta__entry span{padding-left:.15rem}"], encapsulation: 3, changeDetection: 0 });
    return CardMetaComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardMetaComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card-meta',
                templateUrl: './card-meta.component.html',
                styleUrls: ['./card-meta.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, { type: [{
            type: Input
        }], typeTitle: [{
            type: Input
        }], duration: [{
            type: Input
        }], level: [{
            type: Input
        }] }); })();

var CardMetaModule = /** @class */ (function () {
    function CardMetaModule() {
    }
    /** @nocollapse */ CardMetaModule.ɵmod = ɵɵdefineNgModule({ type: CardMetaModule });
    /** @nocollapse */ CardMetaModule.ɵinj = ɵɵdefineInjector({ factory: function CardMetaModule_Factory(t) { return new (t || CardMetaModule)(); }, imports: [[
                CommonModule
            ]] });
    return CardMetaModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CardMetaModule, { declarations: [CardMetaComponent], imports: [CommonModule], exports: [CardMetaComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardMetaModule, [{
        type: NgModule,
        args: [{
                declarations: [CardMetaComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    CardMetaComponent
                ]
            }]
    }], null, null); })();

var _c0$9 = ["*"];
var CardDescriptionComponent = /** @class */ (function () {
    function CardDescriptionComponent() {
    }
    /** @nocollapse */ CardDescriptionComponent.ɵfac = function CardDescriptionComponent_Factory(t) { return new (t || CardDescriptionComponent)(); };
    /** @nocollapse */ CardDescriptionComponent.ɵcmp = ɵɵdefineComponent({ type: CardDescriptionComponent, selectors: [["lib-card-description"]], ngContentSelectors: _c0$9, decls: 2, vars: 0, consts: [[1, "card__description"]], template: function CardDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } }, styles: [".card__description{box-sizing:border-box;padding-bottom:1rem}.card__description a,.card__description ol,.card__description p,.card__description ul{font-size:.875rem}.card__description ol,.card__description p,.card__description ul{color:var(--color-gray-400)}.card__description a{color:var(--color-blue-400)}.card__description a:hover{color:var(--color-orange-400)}.card__description ol,.card__description ul{padding-left:1rem}.card__description ol li,.card__description ul li{margin-bottom:.25rem}.card__description ol li:last-child,.card__description ul li:last-child,.card__description:last-child{margin-bottom:0}"], encapsulation: 3, changeDetection: 0 });
    return CardDescriptionComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardDescriptionComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card-description',
                templateUrl: './card-description.component.html',
                styleUrls: ['./card-description.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom
            }]
    }], null, null); })();

var CardDescriptionModule = /** @class */ (function () {
    function CardDescriptionModule() {
    }
    /** @nocollapse */ CardDescriptionModule.ɵmod = ɵɵdefineNgModule({ type: CardDescriptionModule });
    /** @nocollapse */ CardDescriptionModule.ɵinj = ɵɵdefineInjector({ factory: function CardDescriptionModule_Factory(t) { return new (t || CardDescriptionModule)(); }, imports: [[
                CommonModule
            ]] });
    return CardDescriptionModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CardDescriptionModule, { declarations: [CardDescriptionComponent], imports: [CommonModule], exports: [CardDescriptionComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardDescriptionModule, [{
        type: NgModule,
        args: [{
                declarations: [CardDescriptionComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    CardDescriptionComponent
                ]
            }]
    }], null, null); })();

function RatingComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 5);
    ɵɵelement(2, "path", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function RatingComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 8);
    ɵɵelement(2, "path", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function RatingComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 11);
    ɵɵelement(2, "path", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
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
    /** @nocollapse */ RatingComponent.ɵcmp = ɵɵdefineComponent({ type: RatingComponent, selectors: [["lib-rating"]], inputs: { rating: "rating" }, decls: 4, vars: 3, consts: [[1, "rating"], ["class", "fa fa-star checked", 4, "ngFor", "ngForOf"], ["class", "fa fa-star-half-empty", 4, "ngIf"], ["class", "fa fa-star-o", 4, "ngFor", "ngForOf"], [1, "fa", "fa-star", "checked"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "star", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", 1, "svg-inline--fa", "fa-star", "fa-w-18"], ["fill", "currentColor", "d", "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"], [1, "fa", "fa-star-half-empty"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "star-half-alt", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 536 512", 1, "svg-inline--fa", "fa-star-half-alt", "fa-w-17"], ["fill", "currentColor", "d", "M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"], [1, "fa", "fa-star-o"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "star", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", 1, "svg-inline--fa", "fa-star", "fa-w-18"], ["fill", "currentColor", "d", "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵtemplate(1, RatingComponent_span_1_Template, 3, 0, "span", 1);
            ɵɵtemplate(2, RatingComponent_span_2_Template, 3, 0, "span", 2);
            ɵɵtemplate(3, RatingComponent_span_3_Template, 3, 0, "span", 3);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.fullStars);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.hasAnHalfStar);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.emptyStars);
        } }, directives: [NgForOf, NgIf], styles: [".rating{box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;width:100%}.rating .fa-star,.rating .fa-star-half-empty,.rating .fa-star-o{color:var(--color-yellow-400)}.rating .fa-star svg,.rating .fa-star-half-empty svg,.rating .fa-star-o svg{display:block;width:22px;height:22px}"], encapsulation: 3, changeDetection: 0 });
    return RatingComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(RatingComponent, [{
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

var RatingModule = /** @class */ (function () {
    function RatingModule() {
    }
    /** @nocollapse */ RatingModule.ɵmod = ɵɵdefineNgModule({ type: RatingModule });
    /** @nocollapse */ RatingModule.ɵinj = ɵɵdefineInjector({ factory: function RatingModule_Factory(t) { return new (t || RatingModule)(); }, imports: [[
                CommonModule
            ]] });
    return RatingModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(RatingModule, { declarations: [RatingComponent], imports: [CommonModule], exports: [RatingComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(RatingModule, [{
        type: NgModule,
        args: [{
                declarations: [RatingComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    RatingComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-components-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonFavoriteComponent, ButtonFavoriteModule, ButtonLinkComponent, ButtonLinkModule, ButtonModule, CardAuthorComponent, CardAuthorModule, CardBodyComponent, CardBodyModule, CardComponent, CardContentComponent, CardContentModule, CardDescriptionComponent, CardDescriptionModule, CardFooterComponent, CardFooterModule, CardImageComponent, CardImageModule, CardMetaComponent, CardMetaModule, CardModule, CardOverlayComponent, CardOverlayModule, CardTimeComponent, CardTimeModule, CardTitleComponent, CardTitleModule, RatingComponent, RatingModule };
//# sourceMappingURL=espresso-ui.js.map
