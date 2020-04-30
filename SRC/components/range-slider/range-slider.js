import '../../../node_modules/ion-rangeslider/js/ion.rangeSlider'

class RangeSlider {
  constructor(rootElementClass, valuesClass) {
    this.$rootElementClass = $(rootElementClass);
    this.$values = $(valuesClass);

    this.initPlugin_ionRangeSlider();
  }

  initPlugin_ionRangeSlider() {
    this.$rootElementClass.ionRangeSlider({
      skin: "round",
      type: "double",
      hide_min_max: true,
      hide_from_to: true,
      prettify_enabled: true,
      prettify_separator: " ",
      onStart: (data) => {
        this.$values.text(data.from_pretty + '₽ - ' + data.to_pretty + '₽');
      },
      onChange: (data) => {
        this.$values.text(data.from_pretty + '₽ - ' + data.to_pretty + '₽');
      },
    })
  }
}

new RangeSlider('.js-range-slider__input', '.js-range-slider__values');