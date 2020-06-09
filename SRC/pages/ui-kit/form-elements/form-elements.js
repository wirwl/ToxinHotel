import './form-elements.scss';

import '../../../favicons/favicons';

const fonts = require.context('../../../fonts', true, /\.css$/);
fonts.keys().forEach(fonts);

const imports = require.context('../../../components/', true, /\.(scss|js)$/);
imports.keys().forEach(imports);

// Only for watch pixel perfect for range-slider;
$('.js-range-slider__values').text('5 000₽ - 10 000₽');


const datepickerInputArrival = $('.form-elements__column-left-datepicker-input-arrival').find('.datepicker-input__input');
const datepickerArrival = $('.form-elements__column-left-datepicker-input-arrival').find('.datepicker-input__input').data('datepicker');

const datepickerInputCheckout = $('.form-elements__column-left-datepicker-input-checkout').find('.datepicker-input__input');

datepickerArrival.update('minDate', null);

datepickerArrival.update('onSelect', ((fd) => {
  datepickerInputArrival.val(fd.split('-')[0]);
  datepickerInputCheckout.val(fd.split('-')[1]);
}));

if (datepickerInputCheckout.length) {
  datepickerInputCheckout.on('click', () => { datepickerArrival.show(); });
}

const rs = $('.js-range-slider__input').data('ionRangeSlider');
rs.update({
  from: 4300,
  to: 9500,
});

const dp = $('.form-elements__column-left-wrapper-for-fdd-input').find('.datepicker-input__input').data('datepicker');
dp.update('dateFormat', 'dd M');
dp.update('onSelect', (fd, d, picker) => {
  picker.$el.val(fd.toLowerCase());
});
// Only for pixel perfect
dp.update('minDate', null);
dp.selectDate([new Date('2019-08-19'), new Date('2019-08-23')]);
