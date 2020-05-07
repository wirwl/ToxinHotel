class HeaderMenu {
  constructor() {
    this._addEventListeners();
  }

  _addEventListeners() {
    $('.js-menu__link').on('click.menu', this._onClickLink.bind(this));
    $('.js-header-menu__icon').on('click.menu', this._onClickIcon);
    $('.js-menu .js-menu__list').on('mouseleave.menu', this._onMouseLeaveList.bind(this));
  }

  _closeAllOpenMenuItems($li) {
    const ulChild = $li.find('> ul');
    ulChild.css('display', 'none');
    ulChild.children().each((index, element) => { this._closeAllOpenMenuItems($(element)); });
  }

  _onClickLink(e) {
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

  _onClickIcon(e) {
    const $icon = $(e.currentTarget);
    const $list = $icon.parent().find('.header-menu__list');
    if ($list.hasClass('header-menu__list_show')) {
      $list.removeClass('header-menu__list_show');
      $list.addClass('header-menu__list_hide');
    } else {
      $list.removeClass('header-menu__list_hide');
      $list.addClass('header-menu__list_show');
    }
  }

  _onMouseLeaveList(e) {
    const $list = $(e.currentTarget);
    if ($list.parent().find('.header-menu__list_show')) {
      $list.children().each((index, element) => {
        this._closeAllOpenMenuItems($(element));
      });
      $list.parent().find('.header-menu__list').removeClass('header-menu__list_show');
      $list.parent().find('.header-menu__list').addClass('header-menu__list_hide');
    }
  }
}

new HeaderMenu();
