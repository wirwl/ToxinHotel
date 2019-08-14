import './fe.scss';

import '../../../jquery/jquery-3.4.1.min.js'
import '../../../jquery/plugins/jquery.maskedinput.min.js'
import '../../../jquery/plugins/item-quantity-dropdown/item-quantity-dropdown.min.js'
import '../../../jquery/plugins/item-quantity-dropdown/item-quantity-dropdown.min.css'
import '../../../jquery/plugins/item-quantity-dropdown/item-quantity-dropdown.min.js.map'
import '../../../jquery/plugins/item-quantity-dropdown/item-quantity-dropdown.min.css.map'

import '../../../components/masked-input/masked-input.js'
import '../../../components/dd-input/dd-input.js'
import '../../../components/fdd-input/fdd-input.js'
import '../../../components/comfort-input/comfort-input.js'

$(document).ready(() => {
  var $qs = $(document).find('.iqdropdown');
  $qs.each(function () {
    var $b = $(this).find('button.button-increment');
    $b[0].click(); $b[0].click();
    $b[1].click(); $b[1].click();
  })
});


//import $ from 'jquery';
//global.jQuery = global.$ = $;
//console.log('---');
//console.log($);
//$(".fdd-input__input").val('19 авг - 23 авг');