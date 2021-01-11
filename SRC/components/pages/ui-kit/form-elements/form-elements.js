import './form-elements.scss';

import * as c from 'components/components';

new c.GuestsInput({
  placeholder: 'Сколько гостей',
  rootElementClass: '.js-guests-input',
  guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
  babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] },
});

new c.MaskedInput('.js-masked-input__input');

const $datepickerInputRanges = $('.js-datepicker-input-range');
$datepickerInputRanges.each(
  (_, datepickerInputRange) => new c.DatepickerInputRange(datepickerInputRange),
);

new c.ComfortInput({
  placeholder: 'Выберите удобства',
  rootElementClass: '.js-comfort-input',
  items: [
    { id: 'bedrooms', singular: 'спальня', plurals: ['спальни', 'спален'] },
    { id: 'beds', singular: 'кровать', plurals: ['кровати', 'кроватей'] },
    { id: 'bathrooms', singular: 'ванная комната', plurals: ['ванных комнаты', 'ванных комнат'] },
  ],
});

new c.LikeButton('.js-like-button__input');

new c.ExpandableCheckboxList('.js-expandable-checkbox-list__caption');

new c.RangeSlider('.js-range-slider__input', '.js-range-slider__values');

const $paginations = $('.px-pagination');
$paginations.each(
  (_, pagination) => new c.PxPagination(pagination),
);

const $rateButtons = $('.js-rate-button');
$rateButtons.each((_, rateButton) => new c.RateButton(rateButton));
