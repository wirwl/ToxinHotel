import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import 'air-datepicker/dist/css/datepicker.css';
import './landing.scss';

import HeaderMenu from '../../header-menu/header-menu';
import GuestsInput from '../../guests-input/guests-input';
import ToxinDatepicker from '../../toxin-datepicker/toxin-datepicker';
import RoomReservationForm from '../../room-reservation-form/room-reservation-form';

new HeaderMenu();

new GuestsInput({
  placeholder: 'Сколько гостей',
  rootElementClass: '.js-guests-input',
  guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
  babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] },
});

const htmlButtons = '<div class="datepicker__buttons">'
  + '<span class="datepicker__button-clear js-datepicker__button-clear">Очистить</span>'
  + '<span class="datepicker__button-apply js-datepicker__button-apply">Применить</span>'
  + '</div';
new ToxinDatepicker({ rootElementClass: '.js-toxin-datepicker', htmlButtonsTemplate: htmlButtons });

new RoomReservationForm('.room-reservation-form__arrival', '.room-reservation-form__checkout');
