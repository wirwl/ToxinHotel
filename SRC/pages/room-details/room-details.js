import '../../../node_modules/jquery/dist/jquery'
import '../../../node_modules/flexslider/jquery.flexslider'
import '../../../node_modules/air-datepicker/dist/js/datepicker.js'
import '../../components/datepicker/datepicker.js'
import { DrawDonutChart } from '../../components/donut-chart/donut-chart'
import '../../components/logo/logo.svg'
import '../../components/room-images/image-1.jpg'
import '../../components/room-images/image-2.jpg'
import '../../components/room-images/image-3.jpg'
import '../../images/avatar.jpg'
import '../../images/avatar-2.jpg'
import '../../favicons/favicons'
import '../../components/order-info-form/order-info-form.js'
import '../../components/header-menu/header-menu'
import '../../components/item-quantity-dropdown/item-quantity-dropdown'
import '../../components/guests-input/guests-input'
import './room-details.scss'

$(document).ready(function () {
  $('.flexslider').flexslider({
    animation: "fade",
    touch: true
  });

  DrawDonutChart([{ text: "Великолепно", count: 58, color: "#FFE39C" },
  { text: "Хорошо", count: 58, color: "#6FCF97" },
  { text: "Удовлетворительно", count: 144, color: "#BC9CFF" },
  { text: "Разочарован", count: 0, color: "#919191" },
  ]);
})

