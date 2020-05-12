import './cards.scss';

import '../../../favicons/favicons';

const fonts = require.context('../../../fonts', true, /\.css$/);
fonts.keys().forEach(fonts);

const imports = require.context('../../../components/', true, /\.(scss|js)$/);
imports.keys().forEach(imports);

// only for pixel perfect
const datepicker = $('.standalone-datepicker').data('datepicker');
datepicker.update('minDate', null);
datepicker.selectDate([
  new Date('2019-08-19'),
  new Date('2019-08-23'),
]);
const date8 = new Date('8 Aug, 2019 00:00');
datepicker.date = date8;
datepicker.startDay = date8;
datepicker.update('onRenderCell', (date, cellType) => {
  const day = date.getDate();
  if (cellType === 'day' && date.getTime() === date8.getTime()) {
    return {
      html: `<div style="width:40px;height:40px;background:#6FCF97;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;">${day}</div>`,
    };
  }
  return '';
});

$('#oi-form__start-input').data('datepicker').update('minDate', null);
$('#oi-form__start-input').data('datepicker').selectDate([
  new Date('2019-08-19'),
  new Date('2019-08-23'),
]);
