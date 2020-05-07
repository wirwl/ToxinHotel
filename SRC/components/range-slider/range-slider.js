import '../../../node_modules/ion-rangeslider/js/ion.rangeSlider'

class RangeSlider {
  constructor(rootElementClass, valuesClass) {
    this._init(rootElementClass, valuesClass);
  }

  _init(rootElementClass, valuesClass) {
    this._$rootElementClass = $(rootElementClass);
    this._$values = $(valuesClass);
    if (this._$rootElementClass.length)
      this._$rootElementClass.ionRangeSlider({
        skin: "round",
        type: "double",
        hide_min_max: true,
        hide_from_to: true,
        prettify_enabled: true,
        prettify_separator: " ",
        onStart: (data) => {
          this._$values.text(data.from_pretty + '₽ - ' + data.to_pretty + '₽');
        },
        onChange: (data) => {
          this._$values.text(data.from_pretty + '₽ - ' + data.to_pretty + '₽');
        },
      })
  }
}

new RangeSlider('.js-range-slider__input', '.js-range-slider__values');