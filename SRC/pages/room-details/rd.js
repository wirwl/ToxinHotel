import './rd.scss'

import '../../components/logo/logo.svg'
import '../../components/room-images/image1.jpg'
import '../../components/room-images/image2.jpg'
import '../../components/room-images/image3.jpg'

import '../../favicons/favicons'

import '../../../node_modules/jquery/dist/jquery'
import '../../components/header-menu/header-menu'

import '../../../node_modules/flexslider/jquery.flexslider'

$(document).ready(function(){
  $('.flexslider').flexslider({
    animation: "fade",    
    touch: true
  });
})

