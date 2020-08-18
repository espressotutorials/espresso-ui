(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('espresso-ui', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['espresso-ui'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    var _c0 = ["*"];
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        /** @nocollapse */ ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
        /** @nocollapse */ ButtonComponent.ɵcmp = core.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["lib-button"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "btn"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "button", 0);
                core.ɵɵprojection(1);
                core.ɵɵelementEnd();
            } }, styles: ["[_nghost-%COMP%]{display:block;width:-webkit-max-content;width:-moz-max-content;width:max-content}.btn[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:var(--color-blue-400);color:var(--color-white);font-size:.875rem;font-weight:700;cursor:pointer;padding:.5rem 1rem;border-radius:.25rem}.btn[_ngcontent-%COMP%]:hover{background:var(--color-orange-400)}"], changeDetection: 0 });
        return ButtonComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ButtonComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-button',
                    templateUrl: './button.component.html',
                    styleUrls: ['./button.component.less'],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                }]
        }], null, null); })();

    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        /** @nocollapse */ ButtonModule.ɵmod = core.ɵɵdefineNgModule({ type: ButtonModule });
        /** @nocollapse */ ButtonModule.ɵinj = core.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return ButtonModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(ButtonModule, { declarations: [ButtonComponent], imports: [common.CommonModule], exports: [ButtonComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ButtonModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [ButtonComponent],
                    imports: [
                        common.CommonModule
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
        /** @nocollapse */ CardComponent.ɵcmp = core.ɵɵdefineComponent({ type: CardComponent, selectors: [["lib-card"]], ngContentSelectors: _c0$1, decls: 2, vars: 0, consts: [[1, "card"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵprojection(1);
                core.ɵɵelementEnd();
            } }, styles: [":host{display:block;width:-webkit-max-content;width:-moz-max-content;width:max-content}.card{position:relative;background:var(--color-white);border-radius:.25rem;box-shadow:var(--shadow-lg);display:flex;flex-direction:row;justify-content:flex-start}"], encapsulation: 3, changeDetection: 0 });
        return CardComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CardComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-card',
                    templateUrl: './card.component.html',
                    styleUrls: ['./card.component.less'],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.ShadowDom
                }]
        }], null, null); })();

    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        /** @nocollapse */ CardModule.ɵmod = core.ɵɵdefineNgModule({ type: CardModule });
        /** @nocollapse */ CardModule.ɵinj = core.ɵɵdefineInjector({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return CardModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(CardModule, { declarations: [CardComponent], imports: [common.CommonModule], exports: [CardComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CardModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [CardComponent],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [
                        CardComponent
                    ]
                }]
        }], null, null); })();

    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;
    exports.CardComponent = CardComponent;
    exports.CardModule = CardModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=espresso-ui.umd.js.map
