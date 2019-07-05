var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var BsDatepickerDayDecoratorComponent = /** @class */ (function () {
    function BsDatepickerDayDecoratorComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BsDatepickerDayDecoratorComponent.prototype, "day", void 0);
    BsDatepickerDayDecoratorComponent = __decorate([
        Component({
            selector: '[bsDatepickerDayDecorator]',
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[class.disabled]': 'day.isDisabled',
                '[class.is-highlighted]': 'day.isHovered',
                '[class.is-other-month]': 'day.isOtherMonth',
                '[class.in-range]': 'day.isInRange',
                '[class.select-start]': 'day.isSelectionStart',
                '[class.select-end]': 'day.isSelectionEnd',
                '[class.selected]': 'day.isSelected'
            },
            template: "{{ day.label }}"
        })
    ], BsDatepickerDayDecoratorComponent);
    return BsDatepickerDayDecoratorComponent;
}());
export { BsDatepickerDayDecoratorComponent };
//# sourceMappingURL=bs-datepicker-day-decorator.directive.js.map