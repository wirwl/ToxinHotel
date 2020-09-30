import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import 'air-datepicker/dist/css/datepicker.css';
import './cards.scss';

import GuestsInput from '../../../guests-input/guests-input';
import ToxinDatepicker from '../../../toxin-datepicker/toxin-datepicker';
import RoomReservationForm from '../../../room-reservation-form/room-reservation-form';
import OrderInfoForm from '../../../order-info-form/order-info-form';

new GuestsInput({
  placeholder: 'Сколько гостей',
  rootElementClass: '.js-guests-input',
  guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
  babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] },
});

new ToxinDatepicker({ rootElementClass: '.js-toxin-datepicker', buttonClearText: 'Очистить', buttonApplyText: 'Применить' });

new RoomReservationForm('.room-reservation-form__arrival', '.room-reservation-form__checkout');

new OrderInfoForm('.order-info-form__arrival', '.order-info-form__checkout');
