class OrderInfoForm {
	constructor(arrivalClass, checkoutClass) {
		this.$arrival = $(arrivalClass);
		this.$checkout = $(checkoutClass);

		this.initPlugin_datepicker();

		if (this.$checkout.length)
			this.$checkout.on('click', () => {
				this.$arrival.data('datepicker').show();
			})
	}

	initPlugin_datepicker() {
		if (this.$arrival.length)
			this.$arrival.datepicker({
				onSelect: (fd) => {
					this.$arrival.val(fd.split("-")[0]);
					this.$checkout.val(fd.split("-")[1]);
				}
			});

	}
}

new OrderInfoForm('#oi-form__start-input', '#oi-form__end-input')

