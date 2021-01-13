export default class LikeButton {
  constructor(rootElementClass) {
    this._$rootElementClass = $(rootElementClass);
    this._handleRootElementClassClick = this._handleRootElementClassClick.bind(this);
    this._initMembers();
    this._addEventListeners();
  }

  _initMembers() {
    this.CLASSES = {
      input: '.like-button__input',
      count: '.like-button__count'
    }
    this._$input = this._$rootElementClass.find(this.CLASSES.input);
    this._$count = this._$rootElementClass.find(this.CLASSES.count);
  }

  _addEventListeners() {
    this._$input.on('click.like-button', this._handleRootElementClassClick);
  }

  _handleRootElementClassClick() {    
    const currentValue = parseInt(this._$count.text(), 10);
    this._$count.text(this._$input.is(':checked') ? currentValue + 1 : currentValue - 1);
  }
}
