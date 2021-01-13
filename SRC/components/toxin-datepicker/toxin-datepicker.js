import 'air-datepicker/dist/js/datepicker';

export default class ToxinDatepicker {
  constructor(rootElementClass, data) {
    this._$rootElementClass = $(rootElementClass);
    this._initMembers(data);
    this._initPluginDatepicker(data);
    this._addButtons();
    this._bindThis();
    this._addEventListeners();
    return this._datepicker;
  }

  _initMembers({ buttonClearText = 'Clear', buttonApplyText = 'Apply' }) {
    this._htmlButtonsTemplate = `<div class="datepicker__buttons">
      <span class="datepicker__button-clear js-datepicker__button-clear">${buttonClearText}</span>
      <span class="datepicker__button-apply js-datepicker__button-apply">${buttonApplyText}</span>
     </div`;
  }

  _initPluginDatepicker({ datepickerData }) {
    if (this._$rootElementClass.length) {
      this._$rootElementClass.datepicker(datepickerData);
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
