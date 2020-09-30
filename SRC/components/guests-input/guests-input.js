import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

export default class GuestsInput {
  constructor(data) {
    this._initMembers(data);
    this._initPluginItemQuantityDropdown(this._$iqdropdowns);
    this._bindThis();
    this._addEventListeners();
  }

  _bindThis() {
    this._handleButtonClearClick = this._handleButtonClearClick.bind(this);
    this._handleButtonApplyClick = this._handleButtonApplyClick.bind(this);
    this._handleDocumentMouseUp = this._handleDocumentMouseUp.bind(this);
  }

  _initMembers({
    rootElementClass, guests, babies, placeholder,
  }) {
    this._$rootElement = $(rootElementClass);
    this._guests = guests;
    this._babies = babies;
    this._placeholder = placeholder;
    this._$iqdropdowns = this._$rootElement.find('.iqdropdown');
    this._$buttonClear = this._$rootElement.find('.guests-input__button-simple-clear').find('.button');
    this._$buttonApply = this._$rootElement.find('.guests-input__button-simple-apply').find('.button');
  }

  _addEventListeners() {
    this._$buttonClear.on('click.buttonClear', this._handleButtonClearClick);
    this._$buttonApply.on('click.buttonApply', this._handleButtonApplyClick);
    this._$iqdropdowns.find('.iqdropdown-menu').on('click.iqdropdown', this._handleIqdropdownMenuClick);
    $(document).on('mouseup.iqdropdown', this._handleDocumentMouseUp);
  }

  _initPluginItemQuantityDropdown($iqdropdowns) {
    $iqdropdowns.each((index, $iqdropdown) => {
      $($iqdropdown).iqDropdown({
        setSelectionText: (itemCount, totalItems) => {
          let result = this._placeholder;
          const babiesCount = itemCount[this._babies.id];
          const guestsCount = totalItems - babiesCount;
          const $buttonClear = $($iqdropdown).find('.guests-input__button-simple-clear').find('.button');

          if (totalItems > 0) {
            $buttonClear.removeClass('button_hidden');
            let wordGuests = this._guests.singular;
            if (guestsCount > 0) {
              const [number2, number5] = this._guests.plurals;
              if (guestsCount > 4) wordGuests = number5;
              else if (guestsCount > 1) wordGuests = number2;
            }
            let wordBabies = this._babies.singular;
            if (babiesCount > 0) {
              const [number2, number5] = this._babies.plurals;
              if (babiesCount > 4) wordBabies = number5;
              else if (babiesCount > 1) wordBabies = number2;
            }
            if (guestsCount > 0) {
              result = `${guestsCount} ${wordGuests}${babiesCount > 0 ? `, ${babiesCount} ${wordBabies}` : ''}`;
            }
          } else {
            $buttonClear.addClass('button_hidden');
          }

          return result;
        },
      });
    });
  }

  _handleDocumentMouseUp(event) {
    if (!this._$iqdropdowns.is(event.target)
      && this._$iqdropdowns.has(event.target).length === 0) {
      this._$iqdropdowns.removeClass('menu-open');
    }
  }

  _handleIqdropdownMenuClick(event) {
    event.stopPropagation();
  }

  _handleButtonClearClick(event) {
    const $button = $(event.currentTarget);
    const $iqdropdown = $button.closest('.iqdropdown');
    $iqdropdown.find('.iqdropdown-content').removeClass('iqdropdown-content');
    $iqdropdown.find('.iqdropdown-item-controls').remove();
    $iqdropdown.off();
    $iqdropdown.find('.iqdropdown-menu-option').removeData('defaultcount');
    $iqdropdown.find('.iqdropdown-menu-option').removeAttr('data-defaultcount');
    this._initPluginItemQuantityDropdown($iqdropdown);
  }

  _handleButtonApplyClick(event) {
    const $button = $(event.currentTarget);
    const $iqdropdown = $button.closest('.iqdropdown');
    $iqdropdown.removeClass('menu-open');
  }
}
