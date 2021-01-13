export default class HeaderMenu {
  constructor(htmlRootElement) {
    this.$htmlRootElement = $(htmlRootElement);
    this._bindThis();
    this._initMembers();
    this._addEventListeners();
  }

  _bindThis() {
    this._handleMenuLinkClick = this._handleMenuLinkClick.bind(this);
    this._handleMenuListMouseLeave = this._handleMenuListMouseLeave.bind(this);
    this._handleHeaderMenuIconClick = this._handleHeaderMenuIconClick.bind(this);
    this._handleMenuListMouseLeave = this._handleMenuListMouseLeave.bind(this);
  }

  _initMembers() {
    this.CLASSES = {
      link: '.header-menu__link',
      header: '.js-header',
      headerIcon: '.header__icon',
      list: '.header-menu__list',
      listShown: '.header-menu__list_shown',
      listHidden: 'header-menu__list_hidden',
      blockMenuAndAuth: '.header__menu-and-auth-area',
      blockMenuAndAuthShown: 'header__menu-and-auth-area_shown',
    }
    this.$link = this.$htmlRootElement.find(this.CLASSES.link);
    this.$icon = this.$htmlRootElement.closest(this.CLASSES.header).find(this.CLASSES.headerIcon);
    this.$list = this.$htmlRootElement.find(this.CLASSES.list)
  }

  _addEventListeners() {
    this.$link.on('click.menu', this._handleMenuLinkClick);
    this.$icon.on('click.menuicon', this._handleHeaderMenuIconClick);
    this.$list.on('mouseleave.menu', this._handleMenuListMouseLeave);
  }

  _closeAllOpenMenuItems($li) {
    const menu = $li.find('> ul');
    menu.css('display', 'none');
    menu.children().each((_, element) => { this._closeAllOpenMenuItems($(element)); });
  }

  _handleMenuLinkClick(e) {
    const menuItem = $(e.currentTarget).parent();
    const childMenu = menuItem.find('> ul');
    const parentListItemForChildMenu = menuItem.parent();
    parentListItemForChildMenu.children().each((_, element) => {
      const item = $(element);
      if (item.is(menuItem)) {
        if (childMenu.css('display') === 'none') childMenu.css('display', 'block');
        else childMenu.css('display', 'none');
      } else { this._closeAllOpenMenuItems(item); }
    });
  }

  _handleHeaderMenuIconClick(e) {
    const $icon = $(e.currentTarget);
    const $list = $icon.parent().find(this.CLASSES.blockMenuAndAuth);
    $list.toggleClass(this.CLASSES.blockMenuAndAuthShown);
  }

  _handleMenuListMouseLeave(e) {
    const $list = $(e.currentTarget);
    if ($list.parent().find(this.CLASSES.listShown)) {
      $list.children().each((_, element) => {
        this._closeAllOpenMenuItems($(element));
      });
      $list.parent().find(this.CLASSES.list).removeClass(this.CLASSES.listShown);
      $list.parent().find(this.CLASSES.list).addClass(this.CLASSES.listHidden);
    }
  }
}
