class ExpandableCheckboxList {
  constructor(element) {
    this._addEventListeners(element);
  }

  _addEventListeners(element) {
    $(element).on('click.ecl', this._handleElementClick);
  }

  _handleElementClick() {
    const $list = $(this).parent().find('.expandable-checkbox-list__list');
    $list.toggleClass('expandable-checkbox-list__list_show');
    const $caption = $(this).parent().find('.expandable-checkbox-list__caption');
    $caption.toggleClass('expandable-checkbox-list__caption_show');
  }
}

new ExpandableCheckboxList('.js-expandable-checkbox-list__caption');
