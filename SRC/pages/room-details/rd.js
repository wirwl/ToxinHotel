import './rd.scss'

import '../../components/logo/logo.svg'
import '../../components/room-images/image1.jpg'
import '../../components/room-images/image2.jpg'
import '../../components/room-images/image3.jpg'

import '../../images/avatar.jpg'
import '../../images/avatar2.jpg'

import '../../favicons/favicons'

import '../../../node_modules/jquery/dist/jquery'
import '../../../node_modules/air-datepicker/dist/js/datepicker.js'
import '../../components/datepicker/datepicker.js'
import '../../components/datepicker-input/datepicker-input.js'
import '../../components/order-info-form/order-info-form.js'
import '../../components/header-menu/header-menu'
import '../../../node_modules/flexslider/jquery.flexslider'
import '../../components/item-quantity-dropdown/item-quantity-dropdown'
import '../../components/guests-input/guests-input'
import '../../components/donut-chart/donut-chart'


$(document).ready(function(){
  $('.flexslider').flexslider({
    animation: "fade",    
    touch: true
  });
})

