// eslint-disable-next-line no-unused-vars
import iqDropdown from 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

class GuestsInput {
  constructor(data) {
    this._init(data);
  }

  _init({
    rootElementClass, guests, babies, placeholder,
  }) {
    this._$rootElement = $(rootElementClass);
    this._guests = guests;
    this._babies = babies;
    this._placeholder = placeholder;

    this.$iqdropdown = this._$rootElement.find('.iqdropdown');
    if (this.$iqdropdown.length) {
      this.$iqdropdown.iqDropdown({
        setSelectionText: (itemCount, totalItems) => {
          let result = this._placeholder;
          const babiesCount = itemCount[this._babies.id];
          const guestsCount = totalItems - babiesCount;

          if (totalItems > 0) {
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
            if (guestsCount > 0) result = `${guestsCount} ${wordGuests}${babiesCount > 0 ? `, ${babiesCount} ${wordBabies}` : ''}`;
          }
          return result;
        },
      });
    }

    this.$buttonClear = this._$rootElement.find('.guests-input__button-simple-clear').find('.button-simple');
    this.$buttonClear.on('click.buttonClear', this._handleButtonClearClick.bind(this));
  }

  _handleButtonClearClick(e) {
    const $button = $(e.currentTarget);
    const $iqdropdown = $button.closest('.iqdropdown');
    $iqdropdown.find('.iqdropdown-content').removeClass('iqdropdown-content');
    $iqdropdown.find('.iqdropdown-item-controls').remove();
    $iqdropdown.off();
    $iqdropdown.find('.iqdropdown-menu-option').removeData('defaultcount');
    $iqdropdown.find('.iqdropdown-menu-option').removeAttr('data-defaultcount');
    this.init_Plugin_ItemQuantityDropdown($iqdropdown);
    $iqdropdown.toggleClass('menu-open');
  }
}

new GuestsInput({
  placeholder: 'Сколько гостей',
  rootElementClass: '.js-guests-input',
  guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
  babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] },
});
