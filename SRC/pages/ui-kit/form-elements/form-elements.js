import './form-elements.scss';

import '../../../favicons/favicons';

import '../../../../node_modules/air-datepicker/dist/js/datepicker';
import '../../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min';

const fonts = require.context('../../../fonts', true, /\.css$/);
fonts.keys().forEach(fonts);

const imports = require.context('../../../components/', true, /\.(scss|js)$/);
imports.keys().forEach(imports);

// Only for watch pixel perfect for range-slider;
$('.js-range-slider__values').text('5 000₽ - 10 000₽');
const datepicker = $('#fe-di2').data('datepicker');
datepicker.update('minDate', null);
datepicker.selectDate([new Date('2019-08-19')]);

const rs = $('.js-range-slider__input').data('ionRangeSlider');
rs.update({
  from: 4300,
  to: 9500,
});

const dp = $('#fdd').data('datepicker');
dp.update('dateFormat', 'dd M');
dp.update('onSelect', (fd, d, picker) => {
  picker.$el.val(fd.toLowerCase());
});
// Only for pixel perfect
dp.update('minDate', null);
dp.selectDate([new Date('2019-08-19'), new Date('2019-08-23')]);
