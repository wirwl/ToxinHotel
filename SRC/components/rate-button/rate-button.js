$(document).ready(function () {

  function stars(t) {
    let $rateButtons = $(t).parent().children();
    //console.log($(t));
    let clickedButton = $(t);
    let findex = -1;
    $rateButtons.each(function (index) {
      if (clickedButton.is($(this))) findex = index;
      if (findex == -1 || findex == index) $(this).text('star')
      else if (index > findex) $(this).text('star_border');
    })    
  }

  $('.rate-button').children().click(function() { 
    stars($(this)); 
  });
  $('.rate-button').children().hover(function() { 
    stars($(this), 
    function() {
      
    }); 
  });  

});