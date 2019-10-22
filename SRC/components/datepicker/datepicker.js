$(document).ready(() => {

  let allDatepickers = $('.toxin-datepicker');

  htmlButtons =
    '<div class="datepicker__buttons">' +
    '<span class="datepicker__button-clear">Очистить</span>' +
    '<span class="datepicker__button-apply">Применить</span>' +
    '</div';
  allDatepickers.each(function (index, el) {
    $(el).datepicker({
      moveToOtherMonthsOnSelect: false,
      minDate: new Date(),
      range: true,
      multipleDatesSeparator: ' - ',
      prevHtml: 'arrow_back',
      nextHtml: 'arrow_forward',
      navTitles: { days: 'MM yyyy' }
    });
  })

  let allDatepickersFromDOM = $('.datepicker');    
  allDatepickersFromDOM.append(htmlButtons);
  allDatepickersFromDOM.find('.datepicker__button-clear').on('click', () => datepicker.clear());
  allDatepickersFromDOM.find('.datepicker__button-apply').on('click', () => datepicker.hide());
  
});