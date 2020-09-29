import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

export default class ComfortInput {
  constructor(data) {
    this._initMembers(data);
    this._initPluginIqDropdown();
    this._addEventListeners();
  }

  _initMembers({ rootElementClass, items, placeholder }) {
    this._placeholder = placeholder;
    this._$rootElement = $(rootElementClass);
    this._$iqdropdowns = this._$rootElement.find('.iqdropdown');
    this._items = items;
  }

  _initPluginIqDropdown() {
    if (this._$iqdropdowns.length) {
      this._$iqdropdowns.iqDropdown({
        setSelectionText: (itemCount, totalItems) => {
          let result = this._placeholder;
          if (totalItems > 0) {
            result = '';
            this._items.forEach((value) => {
              const { id, singular, plurals } = value;
              const [number2, number5] = plurals;

              Object.keys(itemCount).forEach((key) => {
                if (id === key) {
                  let word = singular;
                  const count = itemCount[key];

                  if (count > 0) {
                    if (count > 4) word = number5;
                    else if (count > 1) word = number2;
                    result += `${itemCount[key]} ${word}, `;
                  }
                }
              });
            });
            result = result.slice(0, -2);
          }
          return result;
        },
      });
    }
  }

  _addEventListeners() {
    this._$iqdropdowns.find('.iqdropdown-menu').on('click.iqdropdown', this._handleIqdropdownMenuClick);
    $(document).on('mouseup.iqdropdown', this._handleDocumentMouseUp.bind(this));
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
