class ExpandableCheckboxList {
  constructor(rootElement) {    
    $(rootElement).on('click.ecl', this.onClickEvent)
  }

  onClickEvent() {
    $(this).parent().toggleClass('expandable-checkbox-list_show');
  }
}

new ExpandableCheckboxList('.js-ecl__caption');