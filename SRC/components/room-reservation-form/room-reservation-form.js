class RoomReservationForm {
	constructor(arrivalClass, checkoutClass) {
		this._init(arrivalClass, checkoutClass);
	}

	_init(arrivalClass, checkoutClass) {
		this._$arrival = $(arrivalClass);
		this._$checkout = $(checkoutClass);

		if (this._$arrival.length)
			this._$arrival.datepicker({
				onSelect: (fd) => {
					this._$arrival.val(fd.split("-")[0]);
					this._$checkout.val(fd.split("-")[1]);
				}
			});

		if (this._$checkout.length)
			this._$checkout.on('click', () => {
				this._$arrival.data('datepicker').show();
			})
	}
}

new RoomReservationForm('#rr-form__start-input', '#rr-form__end-input');