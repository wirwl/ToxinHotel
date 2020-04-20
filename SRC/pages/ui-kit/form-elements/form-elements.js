import './form-elements.scss';

import '../../../favicons/favicons'

const fonts = require.context('../../../fonts', true, /\.css$/);
fonts.keys().forEach(fonts);

const imports = require.context('../../../components/', true, /\.(scss|js)$/)
imports.keys().forEach(imports);

$(document).ready(() => {
  //Only for watch pixel perfect for range-slider;
  $('.js-range-slider__values').text('5 000₽ - 10 000₽');
  let datepicker = $('#fe-di2').data('datepicker');
  datepicker.update('minDate', null);
  datepicker.selectDate([new Date("2019-08-19")]);

  let rs = $('.js-range-slider__input').data('ionRangeSlider');
  rs.update({
    from: 4300,
    to: 9500
  });  
  
  let dp = $('#fdd').data('datepicker');
  dp.update('dateFormat', 'dd M');
  dp.update('onSelect', function (fd, d, picker) {
    picker.$el.val(fd.toLowerCase());
  });
  // Only for pixel perfect  
  dp.update('minDate', null);  
  dp.selectDate([new Date("2019-08-19"), new Date("2019-08-23")]);
});
