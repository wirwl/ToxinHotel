import 'ion-rangeslider';

export default class RangeSlider {
  constructor(rootElementClass, valuesClass) {
    this._initMembers(rootElementClass, valuesClass);
    this._initPluginIonRangeSlider();
  }

  _initPluginIonRangeSlider() {
    if (this._$rootElementClass.length) {
      this._$rootElementClass.ionRangeSlider({
        skin: 'round',
        type: 'double',
        hide_min_max: true,
        hide_from_to: true,
        prettify_enabled: true,
        prettify_separator: ' ',
        onStart: (data) => {
          this._$values.text(`${data.from_pretty}₽ - ${data.to_pretty}₽`);
        },
        onChange: (data) => {
          this._$values.text(`${data.from_pretty}₽ - ${data.to_pretty}₽`);
        },
      });
    }
  }

  _initMembers(rootElementClass, valuesClass) {
    this._$rootElementClass = $(rootElementClass);
    this._$values = $(valuesClass);
  }
}
