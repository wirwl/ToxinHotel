$(document).ready(() => {

  let ToxinDatepickers = $('.toxin-datepicker');

  htmlButtons =
    '<div class="datepicker__buttons">' +
    '<span class="datepicker__button-clear">Очистить</span>' +
    '<span class="datepicker__button-apply">Применить</span>' +
    '</div';

  ToxinDatepickers.datepicker({
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
      if ($(this).data('datepicker').$datepicker.is(d))
        result = $(this).data('datepicker');
    })
    return result;
  }

  let DatePickers = $('.datepicker');
  DatePickers.append(htmlButtons);

  $clears = $('.datepicker__button-clear');
  $clears.each(function () {
    $(this).on('click', (i, el) => {
      let dp = FindDatepicker(ToxinDatepickers, $(this).parent().parent());
      dp.clear();
    })
  })

  $apply = $('.datepicker__button-apply');
  $apply.each(function () {
    $(this).on('click', (i, el) => {
      let dp = FindDatepicker(ToxinDatepickers, $(this).parent().parent());
      dp.hide();
    })
  })

});