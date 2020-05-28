class RateButton {
  constructor(rateButton) {
    this._$rateButton = $(rateButton);
    this._init();
  }

  _init() {
    const $starsFromRateButtons = this._$rateButton.find('.rate-button__star');
    this._starsCount = this._$rateButton.data('count');
    this._addEventListeners($starsFromRateButtons);
  }

  _addEventListeners($stars) {
    $stars.each((index, star) => {
      $(star).on('click.star', this._handleStarClick.bind(this, index, $stars));
      $(star).hover(
        this._handleStarMouseEnter.bind(this, index, $stars),
        this._handleStarMouseLeave.bind(this, $stars),
      );
    });
  }

  _handleStarClick(currentStarIndex, $stars) {
    this._starsCount = currentStarIndex + 1;
    $stars.each(
      (index, star) => $(star).text(index > currentStarIndex ? 'star_border' : 'star'),
    );
  }

  _handleStarMouseEnter(currentStarIndex, $stars) {
    $stars.each(
      (index, star) => $(star).text(index > currentStarIndex ? 'star_border' : 'star'),
    );
  }

  _handleStarMouseLeave($stars) {
    $stars.each(
      (index, star) => $(star).text(index > this._starsCount - 1 ? 'star_border' : 'star'),
    );
  }
}

const $rateButtons = $('.js-rate-button');
$rateButtons.each((index, rateButton) => new RateButton(rateButton));
