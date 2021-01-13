import 'inputmask/dist/jquery.inputmask';

export default class MaskedInput {
  constructor(rootElementClass, data) {
    this._$rootElementClass = $(rootElementClass);
    this._$input = this._$rootElementClass.find('.masked-input__input');    
    this._$input.inputmask(data);
  }
}
