import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import 'flexslider/flexslider.css';
import 'air-datepicker/dist/css/datepicker.css';
import './room-details.scss';

import HeaderMenu from '../../header-menu/header-menu';
import Flexslider from '../../flexslider/flexslider';
import DonutChart from '../../donut-chart/donut-chart';
import GuestsInput from '../../guests-input/guests-input';
import DatepickerInputRange from '../../datepicker-input-range/datepicker-input-range';
import OrderInfoForm from '../../order-info-form/order-info-form';
import LikeButton from '../../like-button/like-button';

new HeaderMenu();

new Flexslider({ rootElementClass: '.flexslider', options: { animation: 'fade', touch: true } });

new DonutChart({
  id: 'donut-chart',
  width: 120,
  height: 120,
  items: [{ text: 'Великолепно', count: 58, color: '#FFE39C' },
    { text: 'Хорошо', count: 58, color: '#6FCF97' },
    { text: 'Удовлетворительно', count: 144, color: '#BC9CFF' },
    { text: 'Разочарован', count: 0, color: '#919191' },
  ],
});

new LikeButton('.js-like-button__input');

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

new OrderInfoForm('.order-info-form__arrival', '.order-info-form__checkout');
