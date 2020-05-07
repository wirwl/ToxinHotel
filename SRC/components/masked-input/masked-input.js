import '../../../node_modules/jquery-mask-plugin/dist/jquery.mask'

class MaskedInput {
  constructor(rootElementClass) {
    this._init(rootElementClass);
  }

  _init(rootElementClass) {
    this._$rootElementClass = $(rootElementClass);
    this._$rootElementClass.mask('00.00.0000');
  }
}

new MaskedInput('.js-masked-input__input');


