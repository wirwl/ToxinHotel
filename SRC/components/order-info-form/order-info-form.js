export default class OrderInfoForm {
  constructor(htmlRootElementClass) {
    this._$htmlRootElementClass = $(htmlRootElementClass);
    this._initMembers();
    this._bindThis();
    this._initPluginDatepicker();
    this._addEventListeners();
  }

  _bindThis() {
    this._handleDatepickerInputInputClick = this._handleDatepickerInputInputClick.bind(this);
    this._setMaxWidth = this._setMaxWidth.bind(this);
  }

  _initMembers() {
    this._$list = this._$htmlRootElementClass.find('.datepicker-input-range__list')
    const $inputs = this._$htmlRootElementClass.find('.datepicker-input__input');
    [this._arrival, this._checkout] = $inputs;
    this._$arrival = $(this._arrival);
    this._$checkout = $(this._checkout);
  }

  _initPluginDatepicker() {
    if (this._$arrival.length) {
      this._$arrival.datepicker({
        onSelect: (formattedDate) => {
          this._$arrival.val(formattedDate.split('-')[0]);
          this._$checkout.val(formattedDate.split('-')[1]);
        },
      });
    }
    this.datepicker = this._$arrival.data('datepicker');

    if (this.datepicker) {
      this.datepicker.update('onShow', this._setMaxWidth);
    }
  }

  _addEventListeners() {
    if (this._$checkout.length) {
      this._$checkout.on('click', this._handleDatepickerInputInputClick);
    }
  }

  _setMaxWidth(inst, animationCompleted) {
    if (!animationCompleted) {
      const newMaxWidth = this._$list.width();
      inst.$datepicker.css('max-width', newMaxWidth);
    }
  }

  _handleDatepickerInputInputClick() {
    this.datepicker.show();
  }
}
