import './form-elements.scss';

import GuestsInput from '../../../guests-input/guests-input';
import MaskedInput from '../../../masked-input/masked-input';
import ComfortInput from '../../../comfort-input/comfort-input';
import RangeSlider from '../../../range-slider/range-slider';
import ExpandableCheckboxList from '../../../expandable-checkbox-list/expandable-checkbox-list';
import PxPagination from '../../../px-pagination/px-pagination';
import RateButton from '../../../rate-button/rate-button';
import LikeButton from '../../../like-button/like-button';
import DatepickerInputRange from '../../../datepicker-input-range/datepicker-input-range';

new GuestsInput({
  placeholder: 'Сколько гостей',
  rootElementClass: '.js-guests-input',
  guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
  babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] },
});

new MaskedInput('.js-masked-input__input');

const $datepickerInputRanges = $('.js-datepicker-input-range');
$datepickerInputRanges.each(
  (_, datepickerInputRange) => new DatepickerInputRange(datepickerInputRange),
);

new ComfortInput({
  placeholder: 'Выберите удобства',
  rootElementClass: '.js-comfort-input',
  items: [
    { id: 'bedrooms', singular: 'спальня', plurals: ['спальни', 'спален'] },
    { id: 'beds', singular: 'кровать', plurals: ['кровати', 'кроватей'] },
    { id: 'bathrooms', singular: 'ванная комната', plurals: ['ванных комнаты', 'ванных комнат'] },
  ],
});

new LikeButton('.js-like-button__input');

new ExpandableCheckboxList('.js-expandable-checkbox-list__caption');

new RangeSlider('.js-range-slider__input', '.js-range-slider__values');

const $paginations = $('.px-pagination');
$paginations.each(
  (_, pagination) => new PxPagination(pagination),
);

const $rateButtons = $('.js-rate-button');
$rateButtons.each((_, rateButton) => new RateButton(rateButton));
