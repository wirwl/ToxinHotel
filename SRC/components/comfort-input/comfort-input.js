class ComfortInput {
  constructor(data) {
    this._init(data);
  }

  _init({ rootElementClass, items, placeholder }) {
    this._placeholder = placeholder;
    this._$rootElement = $(rootElementClass);
    this._$iqdropdown = this._$rootElement.find('.iqdropdown');
    this._items = items;

    if (this._$iqdropdown.length) {
      this._$iqdropdown.iqDropdown({
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
}

new ComfortInput({
  placeholder: 'Выберите удобства',
  rootElementClass: '.js-comfort-input',
  items: [
    { id: 'bedrooms', singular: 'спальня', plurals: ['спальни', 'спален'] },
    { id: 'beds', singular: 'кровать', plurals: ['кровати', 'кроватей'] },
    { id: 'bathrooms', singular: 'ванная комната', plurals: ['ванных комнаты', 'ванных комнат'] },
  ],
});
