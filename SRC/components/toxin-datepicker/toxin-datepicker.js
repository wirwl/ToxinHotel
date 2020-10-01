import 'air-datepicker/dist/js/datepicker';

export default class ToxinDatepicker {
  constructor(data) {
    this._initMembers(data);
    this._initPluginDatepicker();
    this._addButtons();
    this._bindThis();
    this._addEventListeners();
    return this._datepicker;
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
    this._datepicker = this._$rootElementClass.data('datepicker');
  }

  _addButtons() {
    this._datepicker.$content.append(this._htmlButtonsTemplate);
    this.$clears = this._datepicker.$content.find('.js-datepicker__button-clear');
    this.$apply = this._datepicker.$content.find('.js-datepicker__button-apply');
  }

  _bindThis() {
    this._handleDatepickerButtonClearClick = this._handleDatepickerButtonClearClick.bind(this);
    this._handleDatepickerButtonApplyClick = this._handleDatepickerButtonApplyClick.bind(this);
  }

  _addEventListeners() {
    this.$clears.on('click.clearButton', this._handleDatepickerButtonClearClick);
    this.$apply.on('click.applyButton', this._handleDatepickerButtonApplyClick);
  }

  _handleDatepickerButtonClearClick() {
    this._datepicker.clear();
  }

  _handleDatepickerButtonApplyClick() {
    this._datepicker.hide();
  }
}
