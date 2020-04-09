$(document).ready(() => {

  function CloseAllOpenMenuItems(li) {
    let ulChild = li.find('> ul');
    ulChild.css('display', 'none');
    ulChild.children().each(function () {
      CloseAllOpenMenuItems($(this))
    })
  }

  $('.menu__link').click(function (e) {
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

  $('.menu__icon').click(function (e) {
    if ($(this).hasClass('menu_show')) {
      $(this).removeClass('menu_show');
      $(this).addClass('menu_hide');
    }
    else {
      $(this).removeClass('menu_hide');
      $(this).addClass('menu_show');
    }    
  })

  $('.menu > .menu__list').mouseleave(function () {
    if ($(this).parent().find('.menu_show')) {
      $(this).children().each(function () {
        CloseAllOpenMenuItems($(this));
      })
      $(this).parent().find('.menu__icon').removeClass('menu_show');
      $(this).parent().find('.menu__icon').addClass('menu_hide');
      
    }
  })
  
})