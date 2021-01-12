export default class ExpandableCheckboxList {
  constructor(htmlRootElement) {
    this._$htmlRootElement = $(htmlRootElement);
    this._initMembers();
    this._bindThis();
    this._addEventListeners(this._$caption);
  }

  _initMembers() {
    this._$expandableCheckboxList = this._$htmlRootElement.find('.expandable-checkbox-list__list');
    this._$caption = this._$htmlRootElement.find('.js-expandable-checkbox-list__caption');
  }

  _bindThis() {
    this._handleElementClick = this._handleElementClick.bind(this);
    this._handleDocumentMouseUp = this._handleDocumentMouseUp.bind(this);
  }

  _addEventListeners() {
    this._$caption.on('click.caption', this._handleElementClick);    
    $(document).on('mouseup.document', this._handleDocumentMouseUp);
  }

  _handleDocumentMouseUp(event) {
    console.log(event.target);
    if (!this._$caption.is(event.target) &&
        !this._$expandableCheckboxList.is(event.target) && 
         this._$expandableCheckboxList.has(event.target).length === 0
    ) {
      this._$expandableCheckboxList.removeClass('expandable-checkbox-list__list_shown');
      this._$caption.removeClass('expandable-checkbox-list__caption_shown');
    }
  }

  _handleElementClick() {
    this._$expandableCheckboxList.toggleClass('expandable-checkbox-list__list_shown');
    this._$caption.toggleClass('expandable-checkbox-list__caption_shown');
  }
}
