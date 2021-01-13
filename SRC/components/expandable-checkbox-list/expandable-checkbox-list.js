import  block  from 'bem-cn-fast';
export default class ExpandableCheckboxList {
  constructor(htmlRootElement) {
    this._$htmlRootElement = $(htmlRootElement);
    this._initMembers();
    this._bindThis();
    this._addEventListeners(this._$caption);
  }

  _initMembers() {
    const b = block('expandable-checkbox-list');                
    this.CLASSES = {
      caption: `.${b('caption')}`,      
      captionShown: `${b()}__caption_shown`,
      list: `.${b('list')}`,
      listShown: `${b()}__list_shown`,
    };    
    this._$expandableCheckboxList = this._$htmlRootElement.find(this.CLASSES.list);
    this._$caption = this._$htmlRootElement.find(this.CLASSES.caption);
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
    if (!this._$caption.is(event.target) &&
      !this._$expandableCheckboxList.is(event.target) &&
      this._$expandableCheckboxList.has(event.target).length === 0
    ) {
      this._$expandableCheckboxList.removeClass(this.CLASSES.listShown);
      this._$caption.removeClass(this.CLASSES.captionShown);
    }
  }

  _handleElementClick() {
    this._$expandableCheckboxList.toggleClass(this.CLASSES.listShown);
    this._$caption.toggleClass(this.CLASSES.captionShown);
  }
}
