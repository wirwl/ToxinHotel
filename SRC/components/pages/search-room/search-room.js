import './search-room.scss';

import 'ion-rangeslider/css/ion.rangeSlider.css';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import 'air-datepicker/dist/css/datepicker.css';

import HeaderMenu from '../../header-menu/header-menu';
import DatepickerInputRange from '../../datepicker-input-range/datepicker-input-range';
import GuestsInput from '../../guests-input/guests-input';
import RangeSlider from '../../range-slider/range-slider';
import ComfortInput from '../../comfort-input/comfort-input';
import ExpandableCheckboxList from '../../expandable-checkbox-list/expandable-checkbox-list';
import Pagination from '../../pagination/pagination';

new HeaderMenu();

new GuestsInput({
  placeholder: 'Сколько гостей',
  rootElementClass: '.js-guests-input',
  guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
  babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] },
});

new RangeSlider('.js-range-slider__input', '.js-range-slider__values');

new ComfortInput({
  placeholder: 'Выберите удобства',
  rootElementClass: '.js-comfort-input',
  items: [
    { id: 'bedrooms', singular: 'спальня', plurals: ['спальни', 'спален'] },
    { id: 'beds', singular: 'кровать', plurals: ['кровати', 'кроватей'] },
    { id: 'bathrooms', singular: 'ванная комната', plurals: ['ванных комнаты', 'ванных комнат'] },
  ],
});

new ExpandableCheckboxList('.js-expandable-checkbox-list__caption');

new Pagination('.js-pagination__buttons');

const $datepickerInputRanges = $('.js-datepicker-input-range');
$datepickerInputRanges.each(
  (_, datepickerInputRange) => new DatepickerInputRange(datepickerInputRange),
);
