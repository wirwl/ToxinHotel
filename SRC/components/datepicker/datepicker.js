$(document).ready(() => {

  let allDatepickers = $('.toxin-datepicker');
  saDatepicker = $('.standalone-datepicker');
  htmlButtons =
    '<span class="datepicker--button" data-action="clear">Очистить</span>' +
    '<span class="datepicker__button-apply">Применить</span>';

  allDatepickers.datepicker({
    clearButton: true,
    moveToOtherMonthsOnSelect: false,
    minDate: new Date(),
    range: true,
    multipleDatesSeparator: ' - ',
    prevHtml: 'arrow_back',
    nextHtml: 'arrow_forward',
    navTitles: { days: 'MM yyyy' },
    onShow: function (datepicker, animationCompleted) {
      if (!animationCompleted) {
        console.log('111');
        datepicker.$datepicker.find('.datepicker--buttons').html(htmlButtons);
        datepicker.$datepicker.find('.datepicker__button-apply').on('click',
          function () {
            datepicker.hide();
          })
      }
    }
  });
  saDatepicker.each(function (index, el) {
    console.log('pzd');
    let datepicker = $(el).data('datepicker');
    datepicker.$datepicker.find('.datepicker--buttons').html(htmlButtons);
    datepicker.$datepicker.find('.datepicker__button-apply').on('click',
      function () {
        datepicker.hide();
      })
  })







});