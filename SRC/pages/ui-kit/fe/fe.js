import './fe.scss';

import '../../../images/avatar.jpg';

import '../../../../node_modules/jquery/dist/jquery.js'
import '../../../../node_modules/ion-rangeslider/js/ion.rangeSlider'
import '../../../../node_modules/jquery-mask-plugin/dist/jquery.mask.js'
import '../../../components/masked-input/masked-input.js'
import '../../../../node_modules/air-datepicker/dist/js/datepicker.js'
import '../../../components/datepicker/datepicker.js'
import '../../../components/datepicker-input/datepicker-input.js'
import '../../../components/fdd-input/fdd-input.js'
import '../../../components/comfort-input/comfort-input.js'
import '../../../components/expandable-checkbox-list/expandable-checkbox-list.js'
import '../../../components/like-button/like-button.js'
import '../../../components/guests-input/guests-input.js'
import '../../../components/range-slider/range-slider.js';
import '../../../components/pagination/pagination.js';
import '../../../components/item-quantity-dropdown/item-quantity-dropdown.js'

$(document).ready(() => {
  //Only for watch pixel perfect for range-slider;
  $('.js-range-slider__values').text('5 000₽ - 10 000₽');
  let datepicker = $('#fe-di2').data('datepicker');

  let rs = $('.js-range-slider__input').data('ionRangeSlider');  
  rs.update({
    from: 4000,
    to: 8000
  });  
  datepicker.update('minDate', null);
  datepicker.selectDate([new Date("2019-08-19")]);
});
