export default class RateButton {
  constructor(rateButton) {
    this._$rateButton = $(rateButton);
    this._initMembers();
    this._addEventListeners();
  }

  _initMembers(rateButton) {    
    this.$stars = this._$rateButton.find('.rate-button__star');
    this._starsCount = this._$rateButton.data('count');
  }

  _addEventListeners() {
    this.$stars.each((index, star) => {
      $(star).on('click.star', this._handleStarClick.bind(this, index, this.$stars));
      $(star).hover(
        this._handleStarMouseEnter.bind(this, index, this.$stars),
        this._handleStarMouseLeave.bind(this, this.$stars),
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
