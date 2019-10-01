import './cards.scss';





import '../../../../node_modules/jquery/dist/jquery.js'
import '../../../jquery/plugins/jquery.maskedinput.min.js'
import '../../../../node_modules/air-datepicker/dist/js/datepicker.js'
import '../../../../node_modules/jquery-mask-plugin/dist/jquery.mask.js'
import '../../../components/datepicker/datepicker.js'
// import '../../../../node_modules/jquery/dist/jquery.js'
// import '../../../jquery/plugins/jquery.maskedinput.min.js'
// import '../../../../node_modules/ion-rangeslider/js/ion.rangeSlider'
//import '../../../components/masked-input/masked-input.js'
import '../../../components/datepicker-input/datepicker-input.js'
// import '../../../components/fdd-input/fdd-input.js'
// import '../../../components/comfort-input/comfort-input.js'
// import '../../../components/expandable-checkbox-list/expandable-checkbox-list.js'
// import '../../../components/like-button/like-button.js'
import '../../../components/guests-input/guests-input.js'
// import '../../../components/range-slider/range-slider.js';
// import '../../../components/pagination/pagination.js';
import '../../../components/item-quantity-dropdown/item-quantity-dropdown.js'



$(document).ready(function () {
  //only for pixel perfect
  let datepicker = $('.standalone-datepicker').data('datepicker');
  datepicker.update('minDate', null);
  var currentDate = currentDate = new Date("2019-08-08");
  datepicker.selectDate([
    new Date("2019-08-19"),
    new Date("2019-08-23")
  ]);
  let date8 = new Date("8 Aug, 2019 00:00");
  datepicker.date = date8;
  datepicker.startDay = date8;
  datepicker.update('onRenderCell', (date, cellType) => {
    var day = date.getDate();
    if (cellType == 'day' && date.getTime() === date8.getTime()) {
      return {
        html: '<div style="width:40px;height:40px;background:#6FCF97;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;">' + day + '</div>'
      }
    }
  });

})

