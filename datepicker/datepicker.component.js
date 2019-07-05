var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatepickerConfig } from './datepicker.config';
export var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line
    useExisting: forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
/* tslint:disable:component-selector-name component-selector-type */
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent(config) {
        /** sets datepicker mode, supports: `day`, `month`, `year` */
        this.datepickerMode = 'day';
        /** if false week numbers will be hidden */
        this.showWeeks = true;
        this.selectionDone = new EventEmitter(undefined);
        /** callback to invoke when the activeDate is changed. */
        this.activeDateChange = new EventEmitter(undefined);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
        /** currently active date */
        get: function () {
            return this._activeDate || this._now;
        },
        set: function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    DatePickerComponent.prototype.configureOptions = function () {
        Object.assign(this, this.config);
    };
    DatePickerComponent.prototype.onUpdate = function (event) {
        this.activeDate = event;
        this.onChange(event);
    };
    DatePickerComponent.prototype.onSelectionDone = function (event) {
        this.selectionDone.emit(event);
    };
    DatePickerComponent.prototype.onActiveDateChange = function (event) {
        this.activeDateChange.emit(event);
    };
    // todo: support null value
    DatePickerComponent.prototype.writeValue = function (value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "datepickerMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], DatePickerComponent.prototype, "initDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], DatePickerComponent.prototype, "minDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], DatePickerComponent.prototype, "maxDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "minMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "maxMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "showWeeks", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "formatDay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "formatMonth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "formatYear", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "formatDayHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "formatDayTitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "formatMonthTitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DatePickerComponent.prototype, "startingDay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DatePickerComponent.prototype, "yearRange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "onlyCurrentMonth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "shortcutPropagation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DatePickerComponent.prototype, "monthColLimit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DatePickerComponent.prototype, "yearColLimit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], DatePickerComponent.prototype, "customClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], DatePickerComponent.prototype, "dateDisabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], DatePickerComponent.prototype, "dayDisabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], DatePickerComponent.prototype, "activeDate", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], DatePickerComponent.prototype, "selectionDone", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], DatePickerComponent.prototype, "activeDateChange", void 0);
    __decorate([
        ViewChild(DatePickerInnerComponent),
        __metadata("design:type", DatePickerInnerComponent)
    ], DatePickerComponent.prototype, "_datePicker", void 0);
    DatePickerComponent = __decorate([
        Component({
            selector: 'datepicker',
            template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
            providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
        })
        /* tslint:enable:component-selector-name component-selector-type */
        ,
        __metadata("design:paramtypes", [DatepickerConfig])
    ], DatePickerComponent);
    return DatePickerComponent;
}());
export { DatePickerComponent };
//# sourceMappingURL=datepicker.component.js.map