import ToxinDatepicker from '../toxin-datepicker/toxin-datepicker';

export default class DatepickerInputRange {
  constructor(htmlRootElement) {
    this._$htmlRootElement = $(htmlRootElement);
    this._initMembers();
    this._initPluginDatepicker();
    this._bindThis();
    this._addEventListeners();
    return this._datepicker;
  }

  _initMembers() {
    this._$inputs = this._$htmlRootElement.find('.datepicker-input__input');
    this._isTwoDatepickerInputs = this._$inputs.length > 1;
    this._datepicker = new ToxinDatepicker({ rootElementClass: this._$inputs[0], buttonClearText: 'Очистить', buttonApplyText: 'Применить' });
  }

  _initPluginDatepicker() {
    if (this._isTwoDatepickerInputs) {
      this._datepicker.update('onSelect', ((fd) => {
        this._$inputs[0].value = fd.split('-')[0] || '';
        this._$inputs[1].value = fd.split('-')[1] || '';
      }));
    } else {
      this._datepicker.update('dateFormat', 'dd M');
      this._datepicker.update('onSelect', (fd, _, picker) => {
        picker.$el.val(fd.toLowerCase());
      });
    }
  }

  _bindThis() {
    this._handleDatePickerInputInputClick = this._handleDatePickerInputInputClick.bind(this);
  }

  _addEventListeners() {
    if (this._isTwoDatepickerInputs) {
      this._$inputs[1].addEventListener('click', this._handleDatePickerInputInputClick);
    }
  }

  _handleDatePickerInputInputClick() {
    this._datepicker.show();
  }
}
