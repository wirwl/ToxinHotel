$(document).ready(() => {
  
  let $iq =$('.guests-input').find('.iqdropdown');  
  $iq.iqDropdown({
    isShowButtons:true,
    entities : {placeholder:'Сколько гостей',
                total:{   isShow:true,                          
                          cases:[{ n: 1, text: 'гость'},
                                 { n: 2, text: 'гостя'},
                                 { n: 5, text: 'гостей' }]},
                fields:[{ id: 'adults', 
                          isShow:false,
                          isNotInTotal:false,
                          cases: [{ n: 1, text: 'взрослый' }, 
                                  { n: 2, text: 'взрослых' }, 
                                  { n: 5, text: 'взрослых' }] },
                        { id: 'childs', 
                          isShow:false,
                          isNotInTotal:false,
                          cases: [{ n: 1, text: 'ребёнок' }, 
                                  { n: 2, text: 'детей' }, 
                                  { n: 5, text: 'детей' }] },
                        { id: 'babies', 
                          isShow:true,
                          isNotInTotal:true,
                          cases: [{ n: 1, text: 'младенец' },
                                  { n: 2, text: 'младенца' }, 
                                  { n: 5, text: 'младенцев' }]}]
  }})
})