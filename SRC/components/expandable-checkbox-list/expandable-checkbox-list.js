class ExpandableCheckboxList {
  constructor(element) {    
    $(element).on('click.ecl', this.onClickEvent)
  }

  onClickEvent() {    
    const $list = $(this).parent().find('.expandable-checkbox-list__list');
    $list.toggleClass('expandable-checkbox-list__list_show');
    const $caption =$(this).parent().find('.expandable-checkbox-list__caption');
    $caption.toggleClass('expandable-checkbox-list__caption_show');
  }
}

new ExpandableCheckboxList('.js-expandable-checkbox-list__caption');