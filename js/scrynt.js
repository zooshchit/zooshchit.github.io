
$(document).ready(function(){

  // icon menu
  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".menuMob-wrap").slideToggle();
    $('html , body').animate({
      scrollTop : $('.heder').offset().top
     } , 350 );
    return false;
  });

//  menu
  $('#glav a').mouseenter(function(){
    $('.submenu').fadeIn(300);
  });
  $('.menu-wrap').mouseenter(function(){
    $('.submenu').fadeOut(400);
  });
  $('.submenu').mouseleave(function(){
    $(this).fadeOut(400);
  });

$('#about a').mouseenter(function(){
  $('.submenu2').fadeIn(300);
});
$('.menu-wrap').mouseenter(function(){
  $('.submenu2').fadeOut(400);
});
$('.submenu2').mouseleave(function(){
  $(this).fadeOut(400);
});

$('#info a').mouseenter(function(){
  $('.submenu3').fadeIn(300);
});
$('.menu-wrap').mouseenter(function(){
  $('.submenu3').fadeOut(400);
});
$('.submenu3').mouseleave(function(){
  $(this).fadeOut(400);
});

$(".menuMob-wrap").click(function() {
  $(this).fadeOut();
  $(".toggle-mnu").toggleClass("on");
});


// slick h1

$('.heder-slick').slick({
  dots: true,
  swipe : false,
  infinite: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1 

});

//      panginator dogs    

pagination();
function pagination(){
};
var massD = [];
var d =$('.dog-block-wrap');
var n = 5;
var m = d.toArray().length;
var x = 0;
d.slice(0,n).show();
$('#dog-btn').on('click',function(){
       x += n;
    if(x < m){
        d.slice(x,x+n).fadeIn(300);
    }else{
      alert('Каталог закончен !')
      $(this).fadeIn(500);
    }
});
//     news
var w=$(window).width();

jQuery(function($){	
	$('ul#items').easyPaginate({
	});	
}); 

//  -----button top----------------
$(window).scroll(function(){
  if ($(this).scrollTop() > $(this).height())
  {
    $(".btn-up").addClass("act");
  }else{
    $(".btn-up").removeClass("act");
  }
});
$('.btn-up').click(function(){
  $('html , body').stop().animate({scrollTop:0},'slow','swing');
});

// ----------------s-contact----------

// var contactform =  document.getElementById('formaction');
// contactform.setAttribute('action', '//formspree.io/' + 'name' + '@' + 'email' + '.' + 'ua');


});
