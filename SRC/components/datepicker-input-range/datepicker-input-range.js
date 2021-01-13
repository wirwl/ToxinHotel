import ToxinDatepicker from '../toxin-datepicker/toxin-datepicker';

export default class DatepickerInputRange {
  constructor(htmlRootElement, data) {
    this._$htmlRootElement = $(htmlRootElement);
    this._initMembers(data);
    this._initPluginDatepicker();
    this._bindThis();
    this._addEventListeners();
    return this._datepicker;
  }

  _initMembers(data) {
    this._$inputs = this._$htmlRootElement.find('.datepicker-input__input');
    this._isTwoDatepickerInputs = this._$inputs.length > 1;
    this._datepicker = new ToxinDatepicker(this._$inputs[0], data);
  }

  _initPluginDatepicker() {
    if (this._isTwoDatepickerInputs) {
      this._datepicker.update('onSelect', ((formattedDate) => {            
        [this._$inputs[0].value, this._$inputs[1].value=''] = formattedDate.split('-');
      }));
    } else {
      this._datepicker.update('dateFormat', 'dd M');
      this._datepicker.update('onSelect', (formattedDate, _, picker) => {
        picker.$el.val(formattedDate.toLowerCase());
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
