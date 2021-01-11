import './room-details.scss';

import * as c from 'components/components';

new c.HeaderMenu();

new c.Flexslider({ rootElementClass: '.flexslider', options: { animation: 'fade', touch: true } });

new c.DonutChart({
  id: 'donut-chart',
  width: 120,
  height: 120,
  items: [{ text: 'Великолепно', count: 58, color: '#FFE39C' },
    { text: 'Хорошо', count: 58, color: '#6FCF97' },
    { text: 'Удовлетворительно', count: 144, color: '#BC9CFF' },
    { text: 'Разочарован', count: 0, color: '#919191' },
  ],
});

new c.LikeButton('.js-like-button__input');

new c.GuestsInput({
  placeholder: 'Сколько гостей',
  rootElementClass: '.js-guests-input',
  guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
  babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] },
});

const $datepickerInputRanges = $('.js-datepicker-input-range');
$datepickerInputRanges.each(
  (_, datepickerInputRange) => new c.DatepickerInputRange(datepickerInputRange),
);

new c.OrderInfoForm('.order-info-form__arrival', '.order-info-form__checkout');
