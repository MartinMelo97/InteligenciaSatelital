$(document).ready(function(){
	$(".slider").slider({
		interval:2500,
		indicators:true,
		transition:800

	});


	$(".button-collapse").sideNav();
	$(".dropdown-button").dropdown({
		hover: true,
		belowOrigin: true,
		constrain_width: false
	});
	/*$(".nav").css({ "background-color":"#333333",
									"box-shadow":"none",
									"height": "100px"
										});
	$(".nav-li").css({"padding-top": "20px"});
	*/
});

/*
$(document).on("scroll", function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 300){
			$(".nav").css({ "background-color":"#333333",
											"box-shadow":"0px 3px 5px rgba(0,0,0,.45)",
											"height": "64px"
										});
			$(".nav-li").css({"padding-top": "0px"});
		}else{
			$(".nav").css({ "background-color":"#333333",
									"box-shadow":"none",
									"height": "100px"
										});
			$(".nav-li").css({"padding-top": "20px"});
		}
});

*/

$(document).on("scroll", function(){

	var scrollTop = $(document).scrollTop();
	if(scrollTop > 200){
		$('a.ancla').fadeIn('slow');
		/*$(".ancla").css({
			"display":"block"
		});*/
	}
	else{
		$('a.ancla').fadeOut('slow');
		/*$(".ancla").css({
			"display":"none"*/
		}
});

/*$('a.ancla').click(function(){
	$('html, body').animate({
		scrollTop: 0
	}, 700);

	return false;
});
*/
function gototop(){
	$('html, body').animate({
		scrollTop: 0	
	}, 500);
}

