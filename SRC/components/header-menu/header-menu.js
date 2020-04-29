class HeaderMenu {
  constructor() {
    $('.js-menu__link').on('click.menu', this.onClick_link.bind(this));
    $('.js-menu__icon').on('click.menu', this.onClick_icon);
    $('.js-menu .js-menu__list').on('mouseleave.menu', this.onMouseleave_list.bind(this));
  }

  CloseAllOpenMenuItems($li) {
    let ulChild = $li.find('> ul');
    ulChild.css('display', 'none');
    ulChild.children().each((index, element) => { this.CloseAllOpenMenuItems($(element)) })
  }

  onClick_link(e) {
    let li = $(e.currentTarget).parent();
    let ul = li.find('> ul');
    let ulParent = li.parent();
    ulParent.children().each((index, element) => {
      let item = $(element);
      if (item.is(li)) {
        if (ul.css('display') === 'none') ul.css('display', 'block'); else ul.css('display', 'none');
      } else
        this.CloseAllOpenMenuItems(item);
    })
  }

  onClick_icon(e) {
    const $icon = $(e.currentTarget);
    if ($icon.hasClass('header-menu_show')) {
      $icon.removeClass('header-menu_show');
      $icon.addClass('header-menu_hide');
    }
    else {
      $icon.removeClass('header-menu_hide');
      $icon.addClass('header-menu_show');
    }
  }

  onMouseleave_list(e) {
    const $list = $(e.currentTarget);
    if ($list.parent().find('.header-menu_show')) {
      $list.children().each((index, element) => {
        this.CloseAllOpenMenuItems($(element));
      })
      $list.parent().find('.header-menu__icon').removeClass('header-menu_show');
      $list.parent().find('.header-menu__icon').addClass('header-menu_hide');

    }
  }
}
new HeaderMenu();
