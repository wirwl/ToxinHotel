import './search-room.scss'

import '../../favicons/favicons'

import '../../../node_modules/air-datepicker/dist/js/datepicker'
import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min'

const fonts = require.context('../../fonts', true, /\.css$/);
fonts.keys().forEach(fonts);

const imports = require.context('../../components/', true, /\.(scss|js)$/)
imports.keys().forEach(imports);

let dp = $('#filters_di').data('datepicker');
dp.update('dateFormat', 'dd M');
dp.update('onSelect', function (fd, d, picker) {
  picker.$el.val(fd.toLowerCase());
});

// Only for pixel perfect  
dp.update('minDate', null);
dp.selectDate([new Date("2019-08-19"), new Date("2019-08-23")]);