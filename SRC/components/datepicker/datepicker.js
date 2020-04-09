$(document).ready(() => {

  let $ToxinDatepickers = $('.js-toxin-datepicker');

  htmlButtons =
    '<div class="datepicker__buttons">' +
    '<span class="datepicker__button-clear js-datepicker__button-clear">Очистить</span>' +
    '<span class="datepicker__button-apply js-datepicker__button-apply">Применить</span>' +
    '</div';

  $ToxinDatepickers.datepicker({
    moveToOtherMonthsOnSelect: false,
    minDate: new Date(),
    range: true,
    multipleDatesSeparator: ' - ',
    prevHtml: 'arrow_back',
    nextHtml: 'arrow_forward',
    navTitles: { days: 'MM yyyy' },
  });
  
  function FindDatepicker(tds, d) {
    let result = null;
    tds.each(function () {
      $td = $(this);
      if ($td.data('datepicker').$datepicker.is(d))
        result = $td.data('datepicker');
    })
    return result;
  }
  
  let DatePickers = $('.datepicker');
  DatePickers.append(htmlButtons);

  $clears = $('.js-datepicker__button-clear');
  $clears.each(function () {
    $(this).on('click', (i, el) => {
      let dp = FindDatepicker($ToxinDatepickers, $(this).parent().parent());
      dp.clear();
    })
  })

  $apply = $('.js-datepicker__button-apply');
  $apply.each(function () {
    $(this).on('click', (i, el) => {
      let dp = FindDatepicker($ToxinDatepickers, $(this).parent().parent());
      dp.hide();
    })
  })

});