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
})