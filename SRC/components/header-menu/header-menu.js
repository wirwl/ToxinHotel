function CloseAllOpenMenuItems(li) {
  let ulChild = li.find('> ul');
  ulChild.css('display', 'none');
  ulChild.children().each(function () {
    CloseAllOpenMenuItems($(this))
  })
}

$('.js-menu__link').on('click.menu', function (e) {
  let li = $(this).parent();
  let ul = li.find('> ul');
  let ulParent = li.parent();
  ulParent.children().each(function () {
    let item = $(this);
    if (item.is(li)) {
      if (ul.css('display') === 'none')
        ul.css('display', 'block');
      else
        ul.css('display', 'none');
    }
    else CloseAllOpenMenuItems(item);
  })
});

$('.js-menu__icon').on('click.menu', function (e) {
  if ($(this).hasClass('header-menu_show')) {
    $(this).removeClass('header-menu_show');
    $(this).addClass('header-menu_hide');
  }
  else {
    $(this).removeClass('header-menu_hide');
    $(this).addClass('header-menu_show');
  }
})

$('.js-menu > .js-menu__list').on('mouseleave.menu', function () {
  if ($(this).parent().find('.header-menu_show')) {
    $(this).children().each(function () {
      CloseAllOpenMenuItems($(this));
    })
    $(this).parent().find('.header-menu__icon').removeClass('header-menu_show');
    $(this).parent().find('.header-menu__icon').addClass('header-menu_hide');

  }
})