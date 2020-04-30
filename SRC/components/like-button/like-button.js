class LikeButton {
  constructor(rootElementClass) {
    this.$rootElementClass = $(rootElementClass);
    this.$rootElementClass.on('click.like-button', this.onClick_button)
  }

  onClick_button(e) {
    const $button = $(e.currentTarget);
    const $count = $button.parent().find('.js-like-button__count');
    ($button.is(':checked')) ? $count.text(+$count.text() + 1) : $count.text(+$count.text() - 1);
  }
}

new LikeButton('.js-like-button__input');