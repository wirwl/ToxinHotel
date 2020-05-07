class ToxinDatepicker {
  constructor(data) {
    this._init(data);
  }

  _init({ rootElementClass, htmlButtonsTemplate }) {
    this._$rootElementClass = $(rootElementClass);
    this._htmlButtonsTemplate = htmlButtonsTemplate;

    this._initPluginDatepicker();
    this._addButtons();
  }

  _initPluginDatepicker() {
    if (this._$rootElementClass.length) {
      this._$rootElementClass.datepicker({
        moveToOtherMonthsOnSelect: false,
        minDate: new Date(),
        range: true,
        multipleDatesSeparator: ' - ',
        prevHtml: 'arrow_back',
        nextHtml: 'arrow_forward',
        navTitles: { days: 'MM yyyy' },
      });
    }
  }

  _addButtons() {
    const DatePickers = $('.datepicker');
    DatePickers.append(this._htmlButtonsTemplate);
    const $clears = $('.js-datepicker__button-clear');
    $clears.each((index, element) => {
      $(element).on('click.clearButton', () => {
        const dp = this.findDatepicker(this._$rootElementClass, $(element).parent().parent());
        if (dp) dp.clear();
      });
    });
    const $apply = $('.js-datepicker__button-apply');
    $apply.each((index, element) => {
      $(element).on('click.applyButton', () => {
        const dp = this.findDatepicker(this._$rootElementClass, $(element).parent().parent());
        if (dp) dp.hide();
      });
    });
  }

  findDatepicker(tds, d) {
    let result = null;
    tds.each((index, element) => {
      const $td = $(element);
      if ($td.data('datepicker').$datepicker.is(d)) { result = $td.data('datepicker'); }
    });
    return result;
  }
}

const htmlButtons = '<div class="datepicker__buttons">'
  + '<span class="datepicker__button-clear js-datepicker__button-clear">Очистить</span>'
  + '<span class="datepicker__button-apply js-datepicker__button-apply">Применить</span>'
  + '</div';

new ToxinDatepicker({ rootElementClass: '.js-toxin-datepicker', htmlButtonsTemplate: htmlButtons });
