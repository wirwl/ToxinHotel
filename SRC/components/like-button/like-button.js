$('.js-like-button__input').on('click.like-button', function () {
  let $count = $(this).parent().find('.js-like-button__count');
  ($(this).is(':checked')) ? $count.text(+$count.text() + 1) : $count.text(+$count.text() - 1)
})
