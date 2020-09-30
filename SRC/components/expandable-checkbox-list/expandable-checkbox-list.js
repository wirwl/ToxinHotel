export default class ExpandableCheckboxList {
  constructor(element) {
    this._$expandableCheckboxList = $(element).parent().find('.expandable-checkbox-list__list');
    this._bindThis();
    this._addEventListeners(element);
  }

  _bindThis() {
    this._handleDocumentMouseUp = this._handleDocumentMouseUp.bind(this);
  }

  _addEventListeners(element) {
    $(element).on('click.expandableCheckboxList', this._handleElementClick);
    $(element).find('.expandable-checkbox-list__list').on('click.expandable-checkbox-list', this._handleIqdropdownMenuClick);
    $(document).on('mouseup.expandable-checkbox-list', this._handleDocumentMouseUp);
  }

  _handleDocumentMouseUp(event) {
    if (!this._$expandableCheckboxList.is(event.target)
     && this._$expandableCheckboxList.has(event.target).length === 0
    ) {
      this._$expandableCheckboxList.removeClass('expandable-checkbox-list__list_shown');
      const $caption = this._$expandableCheckboxList.parent().find('.expandable-checkbox-list__caption');
      $caption.removeClass('expandable-checkbox-list__caption_shown');
    }
  }

  _handleIqdropdownMenuClick(event) {
    event.stopPropagation();
  }

  _handleElementClick() {
    const $list = $(this).parent().find('.expandable-checkbox-list__list');
    $list.toggleClass('expandable-checkbox-list__list_shown');
    const $caption = $(this).parent().find('.expandable-checkbox-list__caption');
    $caption.toggleClass('expandable-checkbox-list__caption_shown');
  }
}
