class GuestsInput {
  constructor(data) {
    const { rootElementClass, guests, babies, placeholder } = data;

    this.$rootElement = $(rootElementClass);
    this.guests = guests;
    this.babies = babies;
    this.placeholder = placeholder;

    this.$iqdropdown = this.$rootElement.find('.iqdropdown');
    if (this.$iqdropdown.length)
      this.init_Plugin_ItemQuantityDropdown();
  }

  init_Plugin_ItemQuantityDropdown() {
    this.$iqdropdown.iqDropdown({
      setSelectionText: (itemCount, totalItems) => {
        let result = this.placeholder;
        let babiesCount = itemCount[this.babies.id];
        let guestsCount = totalItems - babiesCount;

        if (totalItems > 0) {          
          let wordGuests = this.guests.singular;
          if (guestsCount > 0) {
            const [number2, number5] = this.guests.plurals;
            if (guestsCount > 4) wordGuests = number5;
            else if (guestsCount > 1) wordGuests = number2;
          }
          let wordBabies = this.babies.singular;
          if (babiesCount > 0) {
            const [number2, number5] = this.babies.plurals;
            if (babiesCount > 4) wordBabies = number5;
            else if (babiesCount > 1) wordBabies = number2;
          }
          if (guestsCount > 0)
            result = guestsCount + ' ' + wordGuests + (babiesCount > 0 ? ', ' + babiesCount + ' ' + wordBabies : '');
        }
        return result;
      },
    })
  }
}

new GuestsInput({
  placeholder: 'Выберите удобства',
  rootElementClass: '.js-guests-input',
  guests: { id: ['adults', 'children'], singular: 'гость', plurals: ['гостя', 'гостей'] },
  babies: { id: 'babies', singular: 'младенец', plurals: ['младенца', 'младенев'] }
})