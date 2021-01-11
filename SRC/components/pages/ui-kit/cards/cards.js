import './cards.scss';

import * as c from 'components/components';

new c.GuestsInput({
  placeholder: 'Сколько гостей',
  rootElementClass: '.js-guests-input',
  guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
  babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] },
});

new c.ToxinDatepicker({ rootElementClass: '.standalone-datepicker', buttonClearText: 'Очистить', buttonApplyText: 'Применить' });

const $datepickerInputRanges = $('.js-datepicker-input-range');
$datepickerInputRanges.each(
  (_, datepickerInputRange) => new c.DatepickerInputRange(datepickerInputRange),
);

new c.RoomReservationForm('.room-reservation-form__arrival', '.room-reservation-form__checkout');

new c.OrderInfoForm('.order-info-form__arrival', '.order-info-form__checkout');
