export default class LikeButton {
  constructor(rootElementClass) {
    this._$rootElementClass = $(rootElementClass);
    this._$input = this._$rootElementClass.find('.js-like-button__input');    
    this._addEventListeners();
  }

  _addEventListeners() {
    this._$input.on('click.like-button', this._handleRootElementClassClick);
  }

  _handleRootElementClassClick(e) {
    const $button = $(e.currentTarget);
    const $count = $button.parent().find('.js-like-button__count');
    const currentValue = parseInt($count.text(), 10);
    $count.text($button.is(':checked') ? currentValue + 1 : currentValue - 1);
  }
}
