class ToxinDatepicker {
  constructor(data) {
    const { rootElementClass, htmlButtonsTemplate } = data;

    this.$rootElementClass = $(rootElementClass);
    this.htmlButtonsTemplate = htmlButtonsTemplate;

    this.initPlugin_datepicker();
    this.addButtons();
  }

  initPlugin_datepicker() {
    if (this.$rootElementClass.length)
      this.$rootElementClass.datepicker({
        moveToOtherMonthsOnSelect: false,
        minDate: new Date(),
        range: true,
        multipleDatesSeparator: ' - ',
        prevHtml: 'arrow_back',
        nextHtml: 'arrow_forward',
        navTitles: { days: 'MM yyyy' },
      });
  }

  addButtons() {
    let DatePickers = $('.datepicker');
    DatePickers.append(htmlButtons);
    const $clears = $('.js-datepicker__button-clear');
    $clears.each((index, element) => {
      $(element).on('click.clearButton', (i, el) => {
        let dp = this.findDatepicker(this.$rootElementClass, $(element).parent().parent());
        if (dp) dp.clear();
      })
    })
    const $apply = $('.js-datepicker__button-apply');
    $apply.each((index, element) => {
      $(element).on('click.applyButton', () => {
        let dp = this.findDatepicker(this.$rootElementClass, $(element).parent().parent());
        if (dp) dp.hide();
      })
    })
  }

  findDatepicker(tds, d) {
    let result = null;
    tds.each(function () {
      const $td = $(this);
      if ($td.data('datepicker').$datepicker.is(d))
        result = $td.data('datepicker');
    })
    return result;
  }
}

let htmlButtons =
  '<div class="datepicker__buttons">' +
  '<span class="datepicker__button-clear js-datepicker__button-clear">Очистить</span>' +
  '<span class="datepicker__button-apply js-datepicker__button-apply">Применить</span>' +
  '</div';

new ToxinDatepicker({ rootElementClass: '.js-toxin-datepicker', htmlButtonsTemplate: htmlButtons });