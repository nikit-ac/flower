$(document).ready(function(){
  var doc_w = $(document).width();

  $('#feedback').click(function(){
    $('body, html').scrollTop(0);
    $("#form").css('top', doc_w);
    $('#form').css('display','block');
    $('#form').animate({top: 0},600);
    $('body, html').css('overflow-y','hidden');
  })

  $('.form').focus(function(){
    $(this).animate({borderColor: "rgb(136, 183, 179)"},200, 'swing');
  })

  $('.form').focusout(function(){
    $(this).animate({borderColor: "white"},200, 'swing');
  })

  $('#cross').click(function(){
    $('#form').animate({top: doc_w},600);
    $('body, html').css('overflow-y','visible');
  })

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 25){
      $('.phone-up').animate({bottom: 0}, 400)
      $('.phone-up, img').animate({opacity: 1}, 400)
    }


    // ====================================================СЮДА БУДУ ВСТАВЛЯТЬ ПОДСВЕТКУ МЕНЮ
  });

  $('#slider').owlCarousel({
    navigation: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    navigationText: false
  })

  $('#nav-0').click(function(){
    $('#nav-1').css('opacity','0.5')
    $('#nav-0').css('opacity','1')
    $('#slide-1').animate({opacity: 0},600)
    $('#slide-0').css('opacity','0');
    $('#slider').trigger('owl.jumpTo', 0)
    $('#slide-0').animate({opacity: 1},600)
    $('#slide-1').css('opacity','1');

  });

  $('#nav-1').click(function(){
    $('#nav-0').css('opacity','0.5')
    $('#nav-1').css('opacity','1')
    $('#slide-0').animate({opacity: 0},600)
    $('#slide-1').css('opacity','0');
    $('#slider').trigger('owl.jumpTo', 1)
    $('#slide-1').animate({opacity: 1},600)
    $('#slide-0').css('opacity','1');

  });


})

