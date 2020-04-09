import './sr.scss'
import '../../components/logo/logo.svg'

import '../../images/rooms/888/image1.png'
import '../../images/rooms/840/image1.png'
import '../../images/rooms/980/image1.png'
import '../../images/rooms/856/image1.png'
import '../../images/rooms/740/image1.png'
import '../../images/rooms/982/image1.png'
import '../../images/rooms/678/image1.png'
import '../../images/rooms/450/image1.png'
import '../../images/rooms/350/image1.png'
import '../../images/rooms/666/image1.png'
import '../../images/rooms/444/image1.png'
import '../../images/rooms/352/image1.png'

import '../../favicons/favicons'

import '../../../node_modules/jquery/dist/jquery'
import '../../components/header-menu/header-menu'

import '../../components/item-quantity-dropdown/item-quantity-dropdown'

import '../../../node_modules/air-datepicker/dist/js/datepicker'
import '../../components/datepicker/datepicker'

import '../../components/guests-input/guests-input'

import '../../../node_modules/ion-rangeslider/js/ion.rangeSlider'
import '../../components/range-slider/range-slider'

import '../../components/comfort-input/comfort-input'
import '../../components/expandable-checkbox-list/expandable-checkbox-list'

import '../../components/pagination/pagination'

$(document).ready(function () {

  let dp = $('#filters_di').data('datepicker');
  dp.update('dateFormat', 'dd M');

  dp.update('onSelect', function (fd, d, picker) {
    picker.$el.val(fd.toLowerCase());
  });

  // Only for pixel perfect  
  dp.update('minDate', null);  
  dp.selectDate([new Date("2019-08-19"), new Date("2019-08-23")]);
})

