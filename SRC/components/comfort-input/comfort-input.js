$(document).ready(() => {
  let $iq =$('.comfort-input').find('.iqdropdown');  
  $iq.iqDropdown({
    entities : {placeholder: 'Выберите удобства',
                total:{   isShow:false,                          
                          cases:[{ n: 1, text: 'удобство'},
                                 { n: 2, text: 'удобства'},
                                 { n: 5, text: 'удобств' }]},
                fields:[{ id: 'bedrooms', 
                          isShow:true,
                          isNotInTotal:false,
                          cases: [{ n: 1, text: 'спальня' }, 
                                  { n: 2, text: 'спальни' }, 
                                  { n: 5, text: 'спален' }] },
                        { id: 'beds', 
                          isShow:true,
                          isNotInTotal:false,
                          cases: [{ n: 1, text: 'кровать' }, 
                                  { n: 2, text: 'кровати' }, 
                                  { n: 5, text: 'кроватей' }] },
                        { id: 'bathrooms', 
                          isShow:true,
                          isNotInTotal:false,
                          cases: [{ n: 1, text: 'ванная комната' },
                                  { n: 2, text: 'ванные комнаты' }, 
                                  { n: 5, text: 'ванных комнат' }]}]
  }})//$iq.iqDropdown({
})//$(document).ready(() => {