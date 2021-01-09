export default class OrderInfoForm {
  constructor(arrivalClass, checkoutClass) {
    this._initMembers(arrivalClass, checkoutClass);
    this._initPluginDatepicker();
    this._bindThis();
    this._addEventListeners();
  }

  _bindThis() {
    this._handleDatepickerInputInputClick = this._handleDatepickerInputInputClick.bind(this);
  }

  _initMembers(arrivalClass, checkoutClass) {
    this._$arrival = $(arrivalClass).find('.datepicker-input__input');
    this._$checkout = $(checkoutClass).find('.datepicker-input__input');
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
    const datepicker = this._$arrival.data('datepicker');
    if (datepicker) {
      datepicker.update('onShow', this._setMaxWidth);
    }
  }

  _addEventListeners() {
    if (this._$checkout.length) {
      this._$checkout.on('click', this._handleDatepickerInputInputClick);
    }
  }

  _setMaxWidth(inst, animationCompleted) {
    if (!animationCompleted) {
      const newMaxWidth = $('.order-info-form__dates-list').width();
      inst.$datepicker.css('max-width', newMaxWidth);
    }
  }

  _handleDatepickerInputInputClick() {
    this._$arrival.data('datepicker').show();
  }
}
