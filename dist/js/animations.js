$(document).ready(function(){
//	var t = document.getElementsByClassName('decal_right')
//	var w = new Array();
//	for(var i=0;i<t.length;i++){
//		console.info(t[i].offsetWidth)
//		w[i] = 592-t[i].offsetWidth;
//		t[i].style.right = w[i]+"px";
//		console.info(t[i] +' = '+ t[i].style.right)
//	}
	$(".decal_left").removeClass('decal_left');
	$(".decal_right").removeClass('decal_right');
	$(".decal_top").removeClass('decal_top');
	$(".decal_bot").removeClass('decal_bot');
	$(".fading").removeClass('fading');


	console.info($(".fading"));
});

function display_txt(x,y){
	console.info(x);
	$('#competence li').removeClass('isactive');
	$(x).addClass("isactive");
	$('#competence article').css({opacity : 0});
	setTimeout(function(){
		document.getElementById(y).style.opacity = 1;
	},500);

};

var clickDelay      = 500,
    clickDelayTimer = null;

$('.burger-click-region').on('click', function () {

  if(clickDelayTimer === null) {

    var $burger = $(this);
    $burger.toggleClass('active');
    $burger.parent().toggleClass('is-open');
	$(".nav").css({display:"block"});
	$(".site-wrapper-inner").css({padding:"300px;"});

    if(!$burger.hasClass('active')) {
      $burger.addClass('closing');
		$(".nav").css({display:"none"});
    }

    clickDelayTimer = setTimeout(function () {
      $burger.removeClass('closing');
      clearTimeout(clickDelayTimer);
      clickDelayTimer = null;
    }, clickDelay);
  }
});

