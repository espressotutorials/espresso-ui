import { ɵɵdefineComponent, ɵɵprojectionDef, ɵɵelementStart, ɵɵprojection, ɵɵelementEnd, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

var _c0 = ["*"];
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    /** @nocollapse */ ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
    /** @nocollapse */ ButtonComponent.ɵcmp = ɵɵdefineComponent({ type: ButtonComponent, selectors: [["lib-button"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "btn"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "button", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } }, styles: ["[_nghost-%COMP%]{display:block;width:-webkit-max-content;width:-moz-max-content;width:max-content}.btn[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:var(--color-blue-400);color:var(--color-white);font-size:.875rem;font-weight:700;cursor:pointer;padding:.5rem 1rem;border-radius:.25rem}.btn[_ngcontent-%COMP%]:hover{background:var(--color-orange-400)}"], changeDetection: 0 });
    return ButtonComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'lib-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();

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
        } }, styles: [":host{display:block;width:-webkit-max-content;width:-moz-max-content;width:max-content}.card{position:relative;background:var(--color-white);border-radius:.25rem;box-shadow:var(--shadow-lg);display:flex;flex-direction:row;justify-content:flex-start}"], encapsulation: 3, changeDetection: 0 });
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

/*
 * Public API Surface of angular-components-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule, CardComponent, CardModule };
//# sourceMappingURL=espresso-ui.js.map
