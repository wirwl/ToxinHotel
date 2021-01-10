import './cards.scss';

import GuestsInput from '../../../guests-input/guests-input';
import RoomReservationForm from '../../../room-reservation-form/room-reservation-form';
import OrderInfoForm from '../../../order-info-form/order-info-form';
import ToxinDatepicker from '../../../toxin-datepicker/toxin-datepicker';
import DatepickerInputRange from '../../../datepicker-input-range/datepicker-input-range';

new GuestsInput({
  placeholder: 'Сколько гостей',
  rootElementClass: '.js-guests-input',
  guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
  babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] },
});

new ToxinDatepicker({ rootElementClass: '.standalone-datepicker', buttonClearText: 'Очистить', buttonApplyText: 'Применить' });

const $datepickerInputRanges = $('.js-datepicker-input-range');
$datepickerInputRanges.each(
  (_, datepickerInputRange) => new DatepickerInputRange(datepickerInputRange),
);

new RoomReservationForm('.room-reservation-form__arrival', '.room-reservation-form__checkout');

new OrderInfoForm('.order-info-form__arrival', '.order-info-form__checkout');
