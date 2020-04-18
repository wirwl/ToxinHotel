$(document).ready(function () {      
  $('.js-ecl__caption').on('click.ecl',function () {    
    $(this).parent().toggleClass('expandable-checkbox-list_show');
  })
})