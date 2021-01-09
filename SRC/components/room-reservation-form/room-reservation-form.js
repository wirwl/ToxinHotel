export default class RoomReservationForm {
  constructor(arrivalClass, checkoutClass) {
    this._initMembers(arrivalClass, checkoutClass);
    this._initPluginDatePicker();
    this._bindThis();
    this._addEventListeners();
  }

  _initMembers(arrivalClass, checkoutClass) {
    this._$arrival = $(arrivalClass).find('.datepicker-input__input');
    this._$checkout = $(checkoutClass).find('.datepicker-input__input');
  }

  _initPluginDatePicker() {
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

  _bindThis() {
    this._handleDatePickerInputInputClick = this._handleDatePickerInputInputClick.bind(this);
  }

  _addEventListeners() {
    if (this._$checkout.length) {
      this._$checkout.on('click', this._handleDatePickerInputInputClick);
    }
  }

  _setMaxWidth(inst, animationCompleted) {
    if (!animationCompleted) {
      const newMaxWidth = $('.room-reservation-form__dates-list').width();
      inst.$datepicker.css('width', newMaxWidth);
    }
  }

  _handleDatePickerInputInputClick() {
    this._$arrival.data('datepicker').show();
  }
}
