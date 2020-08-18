import { ɵɵdefineComponent, ɵɵprojectionDef, ɵɵelementStart, ɵɵprojection, ɵɵelementEnd, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, EventEmitter, ɵɵlistener, ɵɵproperty, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';

var _c0 = ["*"];
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    /** @nocollapse */ ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
    /** @nocollapse */ ButtonComponent.ɵcmp = ɵɵdefineComponent({ type: ButtonComponent, selectors: [["lib-button"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "et-bg-blue-500", "hover:et-bg-orange-500", "et-text-white", "et-font-bold", "et-py-2", "et-px-4", "et-rounded", "et-no-underline"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "button", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } }, styles: [""], changeDetection: 0 });
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
    /** @nocollapse */ ButtonModule.ɵinj = ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[CommonModule]] });
    return ButtonModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ButtonModule, { declarations: [ButtonComponent], imports: [CommonModule], exports: [ButtonComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonComponent],
                imports: [CommonModule],
                exports: [ButtonComponent],
            }]
    }], null, null); })();

var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.value = '';
        this.placeholder = '';
        this.valueChange = new EventEmitter();
    }
    InputComponent.prototype.onInputValueChange = function (value) {
        this.valueChange.emit(value);
    };
    /** @nocollapse */ InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
    /** @nocollapse */ InputComponent.ɵcmp = ɵɵdefineComponent({ type: InputComponent, selectors: [["lib-input"]], inputs: { value: "value", placeholder: "placeholder" }, outputs: { valueChange: "valueChange" }, decls: 1, vars: 2, consts: [[1, "et-appearance-none", "et-border", "et-border-gray-200", "et-border-solid", "et-rounded", "et-w-full", "et-py-2", "et-px-3", "et-text-gray-800", "et-leading-tight", "focus:et-outline-none", 3, "placeholder", "ngModel", "ngModelChange"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "input", 0);
            ɵɵlistener("ngModelChange", function InputComponent_Template_input_ngModelChange_0_listener($event) { return ctx.onInputValueChange($event); });
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("placeholder", ctx.placeholder)("ngModel", ctx.value);
        } }, directives: [DefaultValueAccessor, NgControlStatus, NgModel], styles: [""], changeDetection: 0 });
    return InputComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputComponent, [{
        type: Component,
        args: [{
                selector: 'lib-input',
                templateUrl: './input.component.html',
                styleUrls: ['./input.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { value: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], valueChange: [{
            type: Output
        }] }); })();

var InputModule = /** @class */ (function () {
    function InputModule() {
    }
    /** @nocollapse */ InputModule.ɵmod = ɵɵdefineNgModule({ type: InputModule });
    /** @nocollapse */ InputModule.ɵinj = ɵɵdefineInjector({ factory: function InputModule_Factory(t) { return new (t || InputModule)(); }, imports: [[CommonModule, FormsModule]] });
    return InputModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(InputModule, { declarations: [InputComponent], imports: [CommonModule, FormsModule], exports: [InputComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputModule, [{
        type: NgModule,
        args: [{
                declarations: [InputComponent],
                imports: [CommonModule, FormsModule],
                exports: [InputComponent],
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-components-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule, InputComponent, InputModule };
//# sourceMappingURL=espresso-ui.js.map
