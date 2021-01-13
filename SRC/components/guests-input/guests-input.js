import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

export default class GuestsInput {
  constructor(rootElementClass, data) {
    this._$rootElement = $(rootElementClass);
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

  _initMembers({ guests, babies, placeholder }) {
    this.CLASSES = {
      pluginIqdropdown: '.iqdropdown',
      buttonClear: '.guests-input__button-clear',
      buttonApply: '.guests-input__button-apply',
      button: '.button',
      buttonHidden: 'button_hidden',
      menuOpen: 'menu-open',
      content: '.iqdropdown-content',
      controls: '.iqdropdown-item-controls',
      option: '.iqdropdown-menu-option'
    };
    this._guests = guests;
    this._babies = babies;
    this._placeholder = placeholder;
    this._$iqdropdowns = this._$rootElement.find(this.CLASSES.pluginIqdropdown);
    this._$buttonClear = this._$rootElement.find(this.CLASSES.buttonClear).find(this.CLASSES.button);
    this._$buttonApply = this._$rootElement.find(this.CLASSES.buttonApply).find(this.CLASSES.button);
  }

  _addEventListeners() {
    this._$buttonClear.on('click.buttonClear', this._handleButtonClearClick);
    this._$buttonApply.on('click.buttonApply', this._handleButtonApplyClick);
    this._$iqdropdowns.find('.iqdropdown-menu').on('click.iqdropdown', this._handleIqdropdownMenuClick);
    $(document).on('mouseup.document', this._handleDocumentMouseUp);
  }

  _initPluginItemQuantityDropdown($iqdropdowns) {
    $iqdropdowns.each((_, $iqdropdown) => {
      $($iqdropdown).iqDropdown({
        setSelectionText: (itemCount, totalItems) => {
          let result = this._placeholder;
          const babiesCount = itemCount[this._babies.id];
          const guestsCount = totalItems - babiesCount;
          const $buttonClear = $($iqdropdown).find(this.CLASSES.buttonClear).find('.button');

          if (totalItems > 0) {
            $buttonClear.removeClass(this.CLASSES.buttonHidden);
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
            $buttonClear.addClass(this.CLASSES.buttonHidden);
          }

          return result;
        },
      });
    });
  }

  _handleDocumentMouseUp(event) {
    if (!this._$iqdropdowns.is(event.target)
      && this._$iqdropdowns.has(event.target).length === 0) {
      this._$iqdropdowns.removeClass(this.CLASSES.menuOpen);
    }
  }

  _handleIqdropdownMenuClick(event) {
    event.stopPropagation();
  }

  _handleButtonClearClick(event) {
    const $button = $(event.currentTarget);
    const $iqdropdown = $button.closest(this.CLASSES.pluginIqdropdown);
    $iqdropdown.find(this.CLASSES.content).removeClass('iqdropdown-content');
    $iqdropdown.find(this.CLASSES.controls).remove();
    $iqdropdown.off();
    $iqdropdown.find(this.CLASSES.option).removeData('defaultcount');
    $iqdropdown.find(this.CLASSES.option).removeAttr('data-defaultcount');
    this._initPluginItemQuantityDropdown($iqdropdown);
  }

  _handleButtonApplyClick(event) {
    const $button = $(event.currentTarget);
    const $iqdropdown = $button.closest(this.CLASSES.pluginIqdropdown);
    $iqdropdown.removeClass(this.CLASSES.menuOpen);
  }
}
