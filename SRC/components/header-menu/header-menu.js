export default class HeaderMenu {
  constructor() {
    this._bindThis();
    this._addEventListeners();
  }

  _bindThis() {
    this._handleMenuLinkClick = this._handleMenuLinkClick.bind(this);
    this._handleMenuListMouseLeave = this._handleMenuListMouseLeave.bind(this);
  }

  _addEventListeners() {
    $('.js-menu__link').on('click.menu', this._handleMenuLinkClick);
    $('.js-header__icon').on('click.menu', this._handleHeaderMenuIconClick);
    $('.js-menu__list').on('mouseleave.menu', this._handleMenuListMouseLeave);
  }

  _closeAllOpenMenuItems($li) {
    const menu = $li.find('> ul');
    menu.css('display', 'none');
    menu.children().each((index, element) => { this._closeAllOpenMenuItems($(element)); });
  }

  _handleMenuLinkClick(e) {
    const menuItem = $(e.currentTarget).parent();
    const childMenu = menuItem.find('> ul');
    const parentListItemForChildMenu = menuItem.parent();
    parentListItemForChildMenu.children().each((index, element) => {
      const item = $(element);
      if (item.is(menuItem)) {
        if (childMenu.css('display') === 'none') childMenu.css('display', 'block');
        else childMenu.css('display', 'none');
      } else { this._closeAllOpenMenuItems(item); }
    });
  }

  _handleHeaderMenuIconClick(e) {
    const $icon = $(e.currentTarget);
    const $list = $icon.parent().find('.header__menu-and-auth-area');
    $list.toggleClass('header__menu-and-auth-area_shown');
  }

  _handleMenuListMouseLeave(e) {
    const $list = $(e.currentTarget);
    if ($list.parent().find('.header-menu__list_shown')) {
      $list.children().each((index, element) => {
        this._closeAllOpenMenuItems($(element));
      });
      $list.parent().find('.header-menu__list').removeClass('header-menu__list_shown');
      $list.parent().find('.header-menu__list').addClass('header-menu__list_hidden');
    }
  }
}
