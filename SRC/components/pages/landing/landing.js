import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import 'air-datepicker/dist/css/datepicker.css';
import './landing.scss';

import HeaderMenu from '../../header-menu/header-menu';
import GuestsInput from '../../guests-input/guests-input';
import DatepickerInputRange from '../../datepicker-input-range/datepicker-input-range';
import RoomReservationForm from '../../room-reservation-form/room-reservation-form';

new HeaderMenu();

new GuestsInput({
  placeholder: 'Сколько гостей',
  rootElementClass: '.js-guests-input',
  guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
  babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] },
});

const $datepickerInputRanges = $('.js-datepicker-input-range');
$datepickerInputRanges.each(
  (_, datepickerInputRange) => new DatepickerInputRange(datepickerInputRange),
);

new RoomReservationForm('.room-reservation-form__arrival', '.room-reservation-form__checkout');
