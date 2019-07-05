var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatePickerComponent } from './datepicker.component';
import { DatepickerConfig } from './datepicker.config';
import { DayPickerComponent } from './daypicker.component';
import { MonthPickerComponent } from './monthpicker.component';
import { YearPickerComponent } from './yearpicker.component';
var DatepickerModule = /** @class */ (function () {
    function DatepickerModule() {
    }
    DatepickerModule_1 = DatepickerModule;
    DatepickerModule.forRoot = function () {
        return { ngModule: DatepickerModule_1, providers: [DatepickerConfig] };
    };
    DatepickerModule = DatepickerModule_1 = __decorate([
        NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [
                DatePickerComponent,
                DatePickerInnerComponent,
                DayPickerComponent,
                MonthPickerComponent,
                YearPickerComponent
            ],
            exports: [
                DatePickerComponent,
                DatePickerInnerComponent,
                DayPickerComponent,
                MonthPickerComponent,
                YearPickerComponent
            ],
            entryComponents: [DatePickerComponent]
        })
    ], DatepickerModule);
    return DatepickerModule;
    var DatepickerModule_1;
}());
export { DatepickerModule };
//# sourceMappingURL=datepicker.module.js.map