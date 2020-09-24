class HeaderMenu {
  constructor() {
    this._addEventListeners();
  }

  _addEventListeners() {
    $('.js-menu__link').on('click.menu', this._handleMenuLinkClick.bind(this));
    $('.js-header__icon').on('click.menu', this._handleHeaderMenuIconClick);
    $('.js-menu__list').on('mouseleave.menu', this._handleMenuListMouseLeave.bind(this));
  }

  _closeAllOpenMenuItems($li) {
    const ulChild = $li.find('> ul');
    ulChild.css('display', 'none');
    ulChild.children().each((index, element) => { this._closeAllOpenMenuItems($(element)); });
  }

  _handleMenuLinkClick(e) {
    const li = $(e.currentTarget).parent();
    const ul = li.find('> ul');
    const ulParent = li.parent();
    ulParent.children().each((index, element) => {
      const item = $(element);
      if (item.is(li)) {
        if (ul.css('display') === 'none') ul.css('display', 'block'); else ul.css('display', 'none');
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

new HeaderMenu();
