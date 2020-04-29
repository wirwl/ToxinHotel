import '../../../node_modules/flexslider/jquery.flexslider'

class Flexslider {
  constructor(data) {
    const { rootElementClass, options } = data;
    $(rootElementClass).flexslider(options);
  }
}

new Flexslider({ rootElementClass: '.flexslider', options: { animation: "fade", touch: true } });