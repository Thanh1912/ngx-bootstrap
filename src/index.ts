/* tslint:disable: max-classes-per-file */
import { BsDaterangepickerConfig } from './datepicker/bs-daterangepicker.config';
import { DatepickerModule } from './datepicker/datepicker.module';
import { BsDropdownModule } from './dropdown/bs-dropdown.module';
import { ModalModule } from './modal/modal.module';
import { PaginationModule } from './pagination/pagination.module';
import { TimepickerModule } from './timepicker/timepicker.module';
import { TypeaheadModule } from './typeahead/typeahead.module';

export { listLocales } from './chronos/locale/locales';
export { setTheme } from './utils/theme-provider';

export {
  DateFormatter,
  DatePickerComponent,
  DatepickerConfig,
  DatepickerModule,
  DayPickerComponent,
  MonthPickerComponent,
  YearPickerComponent,
  BsDatepickerModule,
  BsDatepickerConfig,
  BsDaterangepickerConfig,
  BsLocaleService,
  BsDaterangepickerDirective,
  BsDatepickerDirective
} from './datepicker/index';

export {
  ModalDirective,
  ModalOptions,
  ModalBackdropOptions,
  ModalBackdropComponent,
  ModalModule,
  BsModalRef,
  BsModalService
} from './modal/index';

export {
  BsDropdownModule,
  BsDropdownConfig,
  BsDropdownState,
  BsDropdownContainerComponent,
  BsDropdownDirective,
  BsDropdownMenuDirective,
  BsDropdownToggleDirective
} from './dropdown/index';

export {
  PagerComponent,
  PaginationComponent,
  PaginationConfig,
  PaginationModule,
  PageChangedEvent
} from './pagination/index';

export {
  TimepickerComponent,
  TimepickerConfig,
  TimepickerModule
} from './timepicker/index';

export {
  TypeaheadOptions,
  TypeaheadContainerComponent,
  TypeaheadDirective,
  TypeaheadMatch,
  TypeaheadModule
} from './typeahead/index';

export { OnChange, LinkedList, isBs3, Trigger, Utils } from './utils/index';

export {
  ComponentLoader,
  ComponentLoaderFactory,
  ContentRef
} from './component-loader/index';

export {
  Positioning,
  PositioningOptions,
  PositioningService,
  positionElements
} from './positioning/index';

export { defineLocale, getSetGlobalLocale, LocaleData } from './chronos/index';

export * from './locale';
