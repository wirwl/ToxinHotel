import 'air-datepicker/dist/js/datepicker';

export default class ToxinDatepicker {
  constructor(data) {
    this._initMembers(data);
    this._initPluginDatepicker();
    this._addButtons();
    this._bindThis();
    this._addEventListeners();
  }

  _initMembers({ rootElementClass, buttonClearText = 'Clear', buttonApplyText = 'Apply' }) {
    this._$rootElementClass = $(rootElementClass);

    this._htmlButtonsTemplate = `<div class="datepicker__buttons">
      <span class="datepicker__button-clear js-datepicker__button-clear">${buttonClearText}</span>
      <span class="datepicker__button-apply js-datepicker__button-apply">${buttonApplyText}</span>
     </div`;
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
    this.$clears = $('.js-datepicker__button-clear');
    this.$apply = $('.js-datepicker__button-apply');
  }

  _bindThis() {
    this._handleDatepickerButtonClearClick = this._handleDatepickerButtonClearClick.bind(this);
    this._handleDatepickerButtonApplyClick = this._handleDatepickerButtonApplyClick.bind(this);
  }

  _addEventListeners() {
    this.$clears.each((index, element) => {
      $(element).on('click.clearButton', this._handleDatepickerButtonClearClick);
    });
    this.$apply.each((index, element) => {
      $(element).on('click.applyButton', this._handleDatepickerButtonApplyClick);
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
