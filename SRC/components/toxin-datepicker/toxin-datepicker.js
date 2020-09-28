import 'air-datepicker/dist/js/datepicker';

export default class ToxinDatepicker {
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
      $(element).on('click.clearButton', this._handleDatepickerButtonClearClick.bind(this));
    });
    const $apply = $('.js-datepicker__button-apply');
    $apply.each((index, element) => {
      $(element).on('click.applyButton', this._handleDatepickerButtonApplyClick.bind(this));
    });
  }

  _handleDatepickerButtonClearClick(event) {
    const dp = this._findDatepicker(this._$rootElementClass,
      $(event.currentTarget).parent().parent());
    if (dp) dp.clear();
  }

  _handleDatepickerButtonApplyClick(event) {
    const dp = this._findDatepicker(this._$rootElementClass,
      $(event.currentTarget).parent().parent());
    if (dp) dp.hide();
  }

  _findDatepicker(tds, d) {
    let result = null;
    tds.each((index, element) => {
      const $td = $(element);
      if ($td.data('datepicker').$datepicker.is(d)) {
        result = $td.data('datepicker');
      }
    });
    return result;
  }
}
