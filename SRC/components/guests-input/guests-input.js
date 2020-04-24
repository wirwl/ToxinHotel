const $guestsInputs = $('.js-guests-input');
const $iqdropdown = $guestsInputs.find('.iqdropdown');
const options =
{
  setSelectionText: (itemCount, totalItems) => {
    let { babies } = itemCount;

    const guests = totalItems - babies;
    let result = 'Сколько гостей'

    if (guests > 0) {
      let guestsWord = 'гость';
      if (guests > 4) guestsWord = 'гостей'
      else if (guests > 1) guestsWord = 'гостя';

      result = guests + ' ' + guestsWord;

      let babiesWord = 'младенец';
      if (babies > 4) babiesWord = 'младенцев'
      else if (babies > 1) babiesWord = 'младенца';
      if (guests > 0 && babies > 0) result += ', ' + babies + ' ' + babiesWord;
    }

    return result;
  }
}

$iqdropdown.iqDropdown(options);

const $buttonClear = $guestsInputs.find('.guests-input__button-simple-clear').find('.button-simple');
$buttonClear.on('click.buttonClear', function () {
  $button = $(this);
  const $iqdropdown = $button.closest('.iqdropdown');
  $iqdropdown.find('.iqdropdown-content').removeClass('iqdropdown-content');
  $iqdropdown.find('.iqdropdown-item-controls').remove();
  $iqdropdown.off();
  $iqdropdown.find('.iqdropdown-menu-option').removeData("defaultcount");
  $iqdropdown.find('.iqdropdown-menu-option').removeAttr("data-defaultcount");
  $iqdropdown.iqDropdown(options);  
  $iqdropdown.toggleClass('menu-open');
});
