import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

const NUMERALS = {
  singular: 0,
  plural2items: 1,
  plural5items: 4,
};
export default class ComfortInput {
  constructor(rootElementClass, data) {
    this._$rootElement = $(rootElementClass);
    this._initMembers(data);
    this._bindThis();
    this._initPluginIqDropdown();
    this._addEventListeners();
  }

  _bindThis() {
    this._handleDocumentMouseUp = this._handleDocumentMouseUp.bind(this);
    this._setSelectionText = this._setSelectionText.bind(this);
  }

  _initMembers({items, placeholder }) {
    this._placeholder = placeholder;    
    this._$iqdropdowns = this._$rootElement.find('.iqdropdown');
    this._items = items;
  }

  _initPluginIqDropdown() {
    if (this._$iqdropdowns.length) {
      this._$iqdropdowns.iqDropdown({
        setSelectionText: this._setSelectionText,
      });
    }
  }

  _setSelectionText(itemCount, totalItems) {
    let text = this._placeholder;
    if (totalItems > 0) {
      text = '';
      this._items.forEach((value) => {
        const { id, singular, plurals } = value;
        const [numeral2items, numeral5items] = plurals;

        Object.keys(itemCount).forEach((key) => {
          if (id === key) {
            let word = singular;
            const number = itemCount[key];

            if (number > NUMERALS.singular) {
              if (number > NUMERALS.plural5items) word = numeral5items;
              else if (number > NUMERALS.plural2items) word = numeral2items;
              text += `${number} ${word}, `;
            }
          }
        });
      });
      text = text.slice(0, -2);
    }
    return text;
  }

  _addEventListeners() {
    this._$iqdropdowns.find('.iqdropdown-menu').on('click.iqdropdown', this._handleIqdropdownMenuClick);
    $(document).on('mouseup.iqdropdown', this._handleDocumentMouseUp);
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
}
