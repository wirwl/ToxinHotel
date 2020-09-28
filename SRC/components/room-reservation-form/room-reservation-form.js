export default class RoomReservationForm {
  constructor(arrivalClass, checkoutClass) {
    this._init(arrivalClass, checkoutClass);
  }

  _init(arrivalClass, checkoutClass) {
    this._$arrival = $(arrivalClass).find('.datepicker-input__input');
    this._$checkout = $(checkoutClass).find('.datepicker-input__input');

    if (this._$arrival.length) {
      this._$arrival.datepicker({
        onSelect: (fd) => {
          this._$arrival.val(fd.split('-')[0]);
          this._$checkout.val(fd.split('-')[1]);
        },
      });
    }

    if (this._$checkout.length) {
      this._$checkout.on('click', this._handleDatePickerInputInputClick.bind(this));
    }

    const datepicker = this._$arrival.data('datepicker');
    if (datepicker) {
      datepicker.update('onShow', this._setMaxWidth);
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
