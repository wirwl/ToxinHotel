import './form-elements.scss';

import 'ion-rangeslider/css/ion.rangeSlider.css';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import 'air-datepicker/dist/css/datepicker.css';

import GuestsInput from '../../../guests-input/guests-input';
import MaskedInput from '../../../masked-input/masked-input';
import ToxinDatepicker from '../../../toxin-datepicker/toxin-datepicker';
import ComfortInput from '../../../comfort-input/comfort-input';
import RangeSlider from '../../../range-slider/range-slider';
import ExpandableCheckboxList from '../../../expandable-checkbox-list/expandable-checkbox-list';
import Pagination from '../../../pagination/pagination';
import RateButton from '../../../rate-button/rate-button';

new GuestsInput({
  placeholder: 'Сколько гостей',
  rootElementClass: '.js-guests-input',
  guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
  babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] },
});

new MaskedInput('.js-masked-input__input');

const htmlButtons = '<div class="datepicker__buttons">'
  + '<span class="datepicker__button-clear js-datepicker__button-clear">Очистить</span>'
  + '<span class="datepicker__button-apply js-datepicker__button-apply">Применить</span>'
  + '</div';
new ToxinDatepicker({ rootElementClass: '.js-toxin-datepicker', htmlButtonsTemplate: htmlButtons });

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

new RangeSlider('.js-range-slider__input', '.js-range-slider__values');

new Pagination('.js-pagination__buttons');

const $rateButtons = $('.js-rate-button');
$rateButtons.each((index, rateButton) => new RateButton(rateButton));
