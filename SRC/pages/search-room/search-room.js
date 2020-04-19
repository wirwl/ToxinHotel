import '../../../node_modules/jquery/dist/jquery'
import '../../../node_modules/air-datepicker/dist/js/datepicker'
import '../../../node_modules/ion-rangeslider/js/ion.rangeSlider'
import '../../components/datepicker/datepicker'
import '../../components/range-slider/range-slider'
import '../../components/header-menu/header-menu'
import '../../components/logo/logo.svg'
import '../../images/rooms/888/image-1.png'
import '../../images/rooms/840/image-1.png'
import '../../images/rooms/980/image-1.png'
import '../../images/rooms/856/image-1.png'
import '../../images/rooms/740/image-1.png'
import '../../images/rooms/982/image-1.png'
import '../../images/rooms/678/image-1.png'
import '../../images/rooms/450/image-1.png'
import '../../images/rooms/350/image-1.png'
import '../../images/rooms/666/image-1.png'
import '../../images/rooms/444/image-1.png'
import '../../images/rooms/352/image-1.png'
import '../../favicons/favicons'
import '../../components/item-quantity-dropdown/item-quantity-dropdown'
import '../../components/guests-input/guests-input'
import '../../components/comfort-input/comfort-input'
import '../../components/expandable-checkbox-list/expandable-checkbox-list'
import '../../components/pagination/pagination'
import './search-room.scss'

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

