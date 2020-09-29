export default class LikeButton {
  constructor(rootElementClass) {
    this._$rootElementClass = $(rootElementClass);
    this._addEventListeners();
  }

  _addEventListeners() {
    this._$rootElementClass.on('click.like-button', this._handleRootElementClassClick);
  }

  _handleRootElementClassClick(e) {
    const $button = $(e.currentTarget);
    const $count = $button.parent().find('.js-like-button__count');
    const currentValue = +$count.text();
    $count.text($button.is(':checked') ? currentValue + 1 : currentValue - 1);
  }
}
