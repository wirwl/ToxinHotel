$(document).ready(function () {
  $('.js-like-button__input').click(function () {    
    let $count = $(this).parent().find('.js-like-button__count');
    ($(this).is(':checked')) ? $count.text(+$count.text() + 1) : $count.text(+$count.text() - 1)
  })
})