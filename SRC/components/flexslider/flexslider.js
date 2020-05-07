import '../../../node_modules/flexslider/jquery.flexslider'

class Flexslider {
  constructor(data) {
    this._init(data);
  }

  _init({ rootElementClass, options }) {
    $(rootElementClass).flexslider(options);
  }
}

new Flexslider({ rootElementClass: '.flexslider', options: { animation: "fade", touch: true } });