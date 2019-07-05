var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimepickerComponent } from './timepicker.component';
import { TimepickerActions } from './reducer/timepicker.actions';
import { TimepickerConfig } from './timepicker.config';
import { TimepickerStore } from './reducer/timepicker.store';
var TimepickerModule = /** @class */ (function () {
    function TimepickerModule() {
    }
    TimepickerModule_1 = TimepickerModule;
    TimepickerModule.forRoot = function () {
        return {
            ngModule: TimepickerModule_1,
            providers: [TimepickerConfig, TimepickerActions, TimepickerStore]
        };
    };
    TimepickerModule = TimepickerModule_1 = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [TimepickerComponent],
            exports: [TimepickerComponent]
        })
    ], TimepickerModule);
    return TimepickerModule;
    var TimepickerModule_1;
}());
export { TimepickerModule };
//# sourceMappingURL=timepicker.module.js.map