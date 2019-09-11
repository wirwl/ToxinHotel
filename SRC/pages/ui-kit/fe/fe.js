import './fe.scss';

import '../../../components/comfort-status/smile.svg';
import '../../../components/comfort-status/home.svg';
import '../../../components/message-control/avatar.jpg';

import '../../../jquery/jquery-3.4.1.min.js'
import '../../../jquery/plugins/jquery.maskedinput.min.js'
import '../../../jquery/plugins/item-quantity-dropdown/item-quantity-dropdown.min.js'
import '../../../jquery/plugins/item-quantity-dropdown/item-quantity-dropdown.min.css'
import '../../../jquery/plugins/item-quantity-dropdown/item-quantity-dropdown.min.js.map'
import '../../../jquery/plugins/item-quantity-dropdown/item-quantity-dropdown.min.css.map'
import '../../../../node_modules/ion-rangeslider/js/ion.rangeSlider'


import '../../../components/masked-input/masked-input.js'
import '../../../components/dd-input/dd-input.js'
import '../../../components/fdd-input/fdd-input.js'
import '../../../components/comfort-input/comfort-input.js'
import '../../../components/expandable-checkbox-list/expandable-checkbox-list.js'
import '../../../components/like-button/like-button.js'
import '../../../components/guests-input/guests-input.js'
import '../../../components/range-slider/range-slider.js';
import '../../../components/pagination/pagination.js';

$(document).ready(() => {
  //Only for watch pixel perfect for range-slider;
  $('.js-range-slider__values').text('5 000₽ - 10 000₽');
});
