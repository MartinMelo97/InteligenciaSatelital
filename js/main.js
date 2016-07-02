$(document).ready(function(){
	$(".slider").slider({
		interval:2500,
		indicators:false,
		transition:800

	});
	$(".nav").css({ "background-color":"#333333",
									"box-shadow":"none",
									"height": "100px"
										});
	$(".nav-li").css({"padding-top": "20px"});
});

$(document).on("scroll", function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 100){
			$(".nav").css({ "background-color":"#D9443F",
											"box-shadow":"0px 3px 5px #656565",
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