import '../../components/pages/room-details/room-details';

const fonts = require.context('../../fonts', true, /\.css$/);
fonts.keys().forEach(fonts);

const imports = require.context('../../components/', true, /^(?!..pages).*(scss|js)$/);
imports.keys().forEach(imports);

// Only for pixel perfect
$('.order-info-form__arrival').find('.datepicker-input__input').data('datepicker').update('minDate', null);
$('.order-info-form__arrival').find('.datepicker-input__input').data('datepicker').selectDate([
  new Date('2019-08-19'),
  new Date('2019-08-23'),
]);
