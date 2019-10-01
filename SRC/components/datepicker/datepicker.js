$(document).ready(() => {

  let allDatepickers = $('.toxin-datepicker');
  htmlButtons =
    '<div class="datepicker__buttons">' +
    '<span class="datepicker__button-clear">Очистить</span>' +
    '<span class="datepicker__button-apply">Применить</span>' +
    '</div';

  allDatepickers.datepicker({
    moveToOtherMonthsOnSelect: false,
    minDate: new Date(),
    range: true,
    multipleDatesSeparator: ' - ',
    prevHtml: 'arrow_back',
    nextHtml: 'arrow_forward',
    navTitles: { days: 'MM yyyy' },
    onShow: function (datepicker, animationCompleted) {
      if (!animationCompleted) {
        let count = datepicker.$datepicker.find('.datepicker__buttons').length;
        if (count == 0) {
          datepicker.$datepicker.append(htmlButtons);
          datepicker.$datepicker.find('.datepicker__button-clear').on('click', () => datepicker.clear());
          datepicker.$datepicker.find('.datepicker__button-apply').on('click', () => datepicker.hide());
        }
      }
    }
  });

  allDatepickers.closest('.standalone-datepicker').each(function () {
    let datepicker = $(this).data('datepicker');
    datepicker.$datepicker.append(htmlButtons);
    datepicker.$datepicker.find('.datepicker__button-clear').on('click', () => datepicker.clear());
    datepicker.$datepicker.find('.datepicker__button-apply').on('click', () => datepicker.hide());
  })
});