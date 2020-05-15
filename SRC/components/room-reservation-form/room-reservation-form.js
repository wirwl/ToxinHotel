class RoomReservationForm {
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
  }

  _handleDatePickerInputInputClick() {
    this._$arrival.data('datepicker').show();
  }
}

new RoomReservationForm('.room-reservation-form__arrival', '.room-reservation-form__checkout');
