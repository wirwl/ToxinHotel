class LikeButton {
  constructor(rootElementClass) {
    this._init(rootElementClass);
  }

  _init(rootElementClass) {
    this._$rootElementClass = $(rootElementClass);
    this._$rootElementClass.on('click.like-button', this._onClickButton);
  }

  _onClickButton(e) {
    const $button = $(e.currentTarget);
    const $count = $button.parent().find('.js-like-button__count');
    const currentValue = +$count.text();
    $count.text($button.is(':checked') ? currentValue + 1 : currentValue - 1);
  }
}

new LikeButton('.js-like-button__input');
