import 'flexslider/jquery.flexslider';

export default class Flexslider {
  constructor(htmlRootElement, data) {
    this._$htmlRootElement = $(htmlRootElement);
    this._init(data);
  }

  _init( options ) {
    this._$htmlRootElement.flexslider(options);
  }
}
