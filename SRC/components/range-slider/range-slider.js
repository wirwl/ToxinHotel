import '../../../node_modules/ion-rangeslider/js/ion.rangeSlider'

let $values = $('.js-range-slider__values');
$('.js-range-slider__input').ionRangeSlider({
  skin: "round",
  type: "double",
  hide_min_max: true,
  hide_from_to: true,
  prettify_enabled: true,
  prettify_separator: " ",
  onStart: function (data) {
    $values.text(data.from_pretty + '₽ - ' + data.to_pretty + '₽');
  },
  onChange: function (data) {
    $values.text('.js-range-slider__values').text(data.from_pretty + '₽ - ' + data.to_pretty + '₽');
  },
});