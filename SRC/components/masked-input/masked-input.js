import '../../../node_modules/jquery-mask-plugin/dist/jquery.mask'

class MaskedInput {
  constructor(rootElementClass) {
    this.$rootElementClass = $(rootElementClass);
    this.$rootElementClass.mask('00.00.0000');
  }
}

new MaskedInput('.js-masked-input__input');


