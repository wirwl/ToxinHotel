$(document).ready(function () {
  let count = -1;

  $('.rate-button').each(function () {
    setStarsCount($(this));      
  })
  

/*   function stars(t) {
    let $rateButtons = $(t).parent().children();    
    let clickedButton = $(t);
    let findex = -1;
    $rateButtons.each(function (index) {
      if (clickedButton.is($(this))) findex = index;      
      if (findex == -1 || findex == index) $(this).text('star')
      else if (index > findex) $(this).text('star_border');
    })
  }

  function setStars(element) {        
    let count=$(element).data('count');    
    $(element).children().each(function(index){                 
      (index>count-1) ? $(this).text('star_border') : $(this).text('star');
    })
  } */

  function setStarsCount(element, cnt=-1) {
    let count=$(element).data('count');    
    if (cnt>-1) count=cnt;
    $(element).children().each(function(index){                 
      (index>count-1) ? $(this).text('star_border') : $(this).text('star');
    })

  }


  $('.rate-button').children().click(function () {
    $(this).parent().data('count', $(this).parent().children().index($(this))+1);        
    setStarsCount($(this));
  });

  $('.rate-button').children().hover(
    function () {      
      setStarsCount($(this).parent(),$(this).parent().children().index($(this))+1);
    },
    function () {            
      setStarsCount($(this).parent());
    }
  ); 

});