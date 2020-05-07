class LikeButton {
  constructor(rootElementClass) {
    this._init(rootElementClass);
  }

  _init(rootElementClass) {
    this._$rootElementClass = $(rootElementClass);
    this._$rootElementClass.on('click.like-button', this._onClickButton)
  }

  _onClickButton(e) {
    const $button = $(e.currentTarget);
    const $count = $button.parent().find('.js-like-button__count');
    ($button.is(':checked')) ? $count.text(+$count.text() + 1) : $count.text(+$count.text() - 1);
  }
}

new LikeButton('.js-like-button__input');