import './landing.scss';

import * as c from 'components/components';

new c.HeaderMenu();

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

new c.RoomReservationForm('.room-reservation-form__arrival', '.room-reservation-form__checkout');
