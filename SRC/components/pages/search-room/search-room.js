import './search-room.scss';

import * as c from 'components/components';

new c.HeaderMenu();

new c.GuestsInput({
  placeholder: 'Сколько гостей',
  rootElementClass: '.js-guests-input',
  guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
  babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] },
});

new c.RangeSlider('.js-range-slider__input', '.js-range-slider__values');

new c.ComfortInput({
  placeholder: 'Выберите удобства',
  rootElementClass: '.js-comfort-input',
  items: [
    { id: 'bedrooms', singular: 'спальня', plurals: ['спальни', 'спален'] },
    { id: 'beds', singular: 'кровать', plurals: ['кровати', 'кроватей'] },
    { id: 'bathrooms', singular: 'ванная комната', plurals: ['ванных комнаты', 'ванных комнат'] },
  ],
});

new c.ExpandableCheckboxList('.js-expandable-checkbox-list__caption');

const $datepickerInputRanges = $('.js-datepicker-input-range');
$datepickerInputRanges.each(
  (_, datepickerInputRange) => new c.DatepickerInputRange(datepickerInputRange),
);

const $paginations = $('.px-pagination');
$paginations.each(
  (_, pagination) => new c.PxPagination(pagination),
);
