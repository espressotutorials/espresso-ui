(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('espresso-ui', ['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (global = global || self, factory(global['espresso-ui'] = {}, global.ng.core, global.ng.common, global.ng.forms));
}(this, (function (exports, core, common, forms) { 'use strict';

    var _c0 = ["*"];
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        /** @nocollapse */ ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
        /** @nocollapse */ ButtonComponent.ɵcmp = core.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["lib-button"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "native-button"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "button", 0);
                core.ɵɵprojection(1);
                core.ɵɵelementEnd();
            } }, styles: ["[_nghost-%COMP%]{display:block;width:-webkit-max-content;width:-moz-max-content;width:max-content}.native-button[_ngcontent-%COMP%]{padding:16px 24px;border-radius:4px}.native-button[_ngcontent-%COMP%]:hover{cursor:pointer}"], changeDetection: 0 });
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
        /** @nocollapse */ ButtonModule.ɵinj = core.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[common.CommonModule]] });
        return ButtonModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(ButtonModule, { declarations: [ButtonComponent], imports: [common.CommonModule], exports: [ButtonComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ButtonModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [ButtonComponent],
                    imports: [common.CommonModule],
                    exports: [ButtonComponent],
                }]
        }], null, null); })();

    var InputComponent = /** @class */ (function () {
        function InputComponent() {
            this.value = '';
            this.placeholder = '';
            this.valueChange = new core.EventEmitter();
        }
        InputComponent.prototype.onInputValueChange = function (value) {
            this.valueChange.emit(value);
        };
        /** @nocollapse */ InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
        /** @nocollapse */ InputComponent.ɵcmp = core.ɵɵdefineComponent({ type: InputComponent, selectors: [["lib-input"]], inputs: { value: "value", placeholder: "placeholder" }, outputs: { valueChange: "valueChange" }, decls: 1, vars: 2, consts: [[1, "native-input", 3, "placeholder", "ngModel", "ngModelChange"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "input", 0);
                core.ɵɵlistener("ngModelChange", function InputComponent_Template_input_ngModelChange_0_listener($event) { return ctx.onInputValueChange($event); });
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("placeholder", ctx.placeholder)("ngModel", ctx.value);
            } }, directives: [forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel], styles: ["[_nghost-%COMP%]{display:block;width:-webkit-max-content;width:-moz-max-content;width:max-content}.native-input[_ngcontent-%COMP%]{padding:16px;border-radius:4px}"], changeDetection: 0 });
        return InputComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(InputComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-input',
                    templateUrl: './input.component.html',
                    styleUrls: ['./input.component.less'],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                }]
        }], null, { value: [{
                type: core.Input
            }], placeholder: [{
                type: core.Input
            }], valueChange: [{
                type: core.Output
            }] }); })();

    var InputModule = /** @class */ (function () {
        function InputModule() {
        }
        /** @nocollapse */ InputModule.ɵmod = core.ɵɵdefineNgModule({ type: InputModule });
        /** @nocollapse */ InputModule.ɵinj = core.ɵɵdefineInjector({ factory: function InputModule_Factory(t) { return new (t || InputModule)(); }, imports: [[common.CommonModule, forms.FormsModule]] });
        return InputModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(InputModule, { declarations: [InputComponent], imports: [common.CommonModule, forms.FormsModule], exports: [InputComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(InputModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [InputComponent],
                    imports: [common.CommonModule, forms.FormsModule],
                    exports: [InputComponent],
                }]
        }], null, null); })();

    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;
    exports.InputComponent = InputComponent;
    exports.InputModule = InputModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=espresso-ui.umd.js.map
