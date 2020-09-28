import 'inputmask/dist/jquery.inputmask';

export default class MaskedInput {
  constructor(rootElementClass) {
    this._init(rootElementClass);
  }

  _init(rootElementClass) {
    this._$rootElementClass = $(rootElementClass);
    this._$rootElementClass.inputmask();
  }
}
