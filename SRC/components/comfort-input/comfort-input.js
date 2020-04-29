class ComfortInput {
  constructor(data) {
    const { rootElementClass, items, placeholder } = data;

    this.placeholder = placeholder;
    this.$rootElement = $(rootElementClass);
    this.$iqdropdown = this.$rootElement.find('.iqdropdown');
    this.items = items;
    if (this.$iqdropdown.length)
      this.init_Plugin_ItemQuantityDropdown();
  }

  init_Plugin_ItemQuantityDropdown() {
    this.$iqdropdown.iqDropdown({
      setSelectionText: (itemCount, totalItems) => {
        let result = this.placeholder;
        if (totalItems > 0) {

          result = '';
          this.items.forEach(function (value, index, items) {
            const { id, singular, plurals } = value;
            const [number2, number5] = plurals;

            for (const prop in itemCount) {
              if (id == prop) {
                let word = singular;
                const count = itemCount[prop];

                if (count > 0) {
                  if (count > 4) word = number5;
                  else if (count > 1) word = number2;
                  result += itemCount[prop] + ' ' + word + ', ';
                }
              }
            }
          })
          result = result.slice(0, -2);
        }
        return result;
      },
    })
  }
}

new ComfortInput({
  placeholder: 'Выберите удобства',
  rootElementClass: '.js-comfort-input',
  items: [
    { id: 'bedrooms', singular: 'спальня', plurals: ['спальни', 'спален'] },
    { id: 'beds', singular: 'кровать', plurals: ['кровати', 'кроватей'] },
    { id: 'bathrooms', singular: 'ванная комната', plurals: ['ванных комнаты', 'ванных комнат'] }
  ]
})