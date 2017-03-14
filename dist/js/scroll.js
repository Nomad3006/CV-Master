$(document).ready(function () {
	$(function() {
		console.log("ok");
		$('a').on('click', function(e) {
			console.log("ok");
			e.preventDefault();
			$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
		});
	});
});

var nav = $(".masthead");
var nav_static = "nav-scaled";
var off_height = document.getElementById('profil').offsetTop;

$(document).ready(function(){
	$(document).scroll(function(){

		if( $(this).scrollTop() > 800 ){
			nav.addClass(nav_static);
		} else {
			nav.removeClass(nav_static);
		}
	});
});




var aChildren = $("nav").children(); // find the a children of the list items
var aArray = []; // create the empty aArray
for (var i=0; i < aChildren.length; i++) {
	var aChild = aChildren[i];
	var ahref = $(aChild).attr('href');
	aArray.push(ahref);
}
$(window).scroll(function(){
	var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
	var windowHeight = $(window).height(); // get the height of the window
	var docHeight = $(document).height();
	for (var i=0; i < aArray.length; i++) {
		var theID = aArray[i];
		var divPos = $(theID).offset().top; // get the offset of the div from the top of page
		var divHeight = $(theID).height(); // get the height of the div in question
		if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
			$("a[href='" + theID + "']").addClass("active");
		} else {
			$("a[href='" + theID + "']").removeClass("active");
		}
	}
	if(windowPos + windowHeight == docHeight) {
		if (!$("nav li:last-child a").hasClass("active")) {
			var navActiveCurrent = $(".active").attr("href");
			$("a[href='" + navActiveCurrent + "']").removeClass("active");
			$("nav li:last-child a").addClass("active");
		}
	}
});

//function animations(element,addedclass){
//	console.log(element);
//$(document).ready(function() {
//    $(window).scroll( function(){
//        $(element).each( function(i){
//            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//            var bottom_of_window = $(window).scrollTop() + $(window).height();
//            if( bottom_of_window > bottom_of_object ){
//                $(this).addClass(addedclass);
//            }
//        });
//    });
//});
//}

//animations('.hiden','fadeInLeft');
//animations('._fadeIn','fadeIn');
////animations('.circle','rotate')


