$('.js-comfort-input').find('.iqdropdown').iqDropdown({
  setSelectionText: (itemCount, totalItems) => {
    let { bedrooms, beds, bathrooms } = itemCount;
    let result = 'Выберите удобства'

    if (totalItems > 0) {
      result = '';

      let bedroomsWord = 'спальня';
      if (bedrooms > 4) bedroomsWord = 'спален'
      else if (bedrooms > 1) bedroomsWord = 'спальни';
      if (bedrooms > 0) result += bedrooms + ' ' + bedroomsWord + ', ';

      let bedsWord = 'кровать';
      if (beds > 4) bedsWord = 'кроватей'
      else if (beds > 1) bedsWord = 'кровати';
      if (beds > 0) result += beds + ' ' + bedsWord + ', ';

      let bathroomsWord = 'ванная комната';
      if (bathrooms > 4) bathroomsWord = 'ванных комнат'
      else if (bathrooms > 1) bathroomsWord = 'ванных комнаты';
      if (bathrooms > 0) result += bathrooms + ' ' + bathroomsWord;
      else result = result.slice(0, -2);
    }

    return result;
  },
});