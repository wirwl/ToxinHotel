import './room-details.scss';

import '../../favicons/favicons';

const fonts = require.context('../../fonts', true, /\.css$/);
fonts.keys().forEach(fonts);

const imports = require.context('../../components/', true, /\.(scss|js)$/);
imports.keys().forEach(imports);

$('.order-info-form__arrival').find('.datepicker-input__input').data('datepicker').update('minDate', null);
$('.order-info-form__arrival').find('.datepicker-input__input').data('datepicker').selectDate([
  new Date('2019-08-19'),
  new Date('2019-08-23'),
]);
