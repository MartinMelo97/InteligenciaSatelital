$(document).ready(function(){
	$(".slider").slider({
		interval:2500,
		transition:800
	});
	$(".nav").css({ "background-color":"transparent",
									"box-shadow":"none"
										});
});

$(document).on("scroll", function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 30){
			$(".nav").css({ "background-color":"#D9443F",
											"box-shadow":"0px 3px 5px #656565"
										});
		}else{
			$(".nav").css({ "background-color":"rgba(0,0,0,0)",
									"box-shadow":"none"
										});
		}
});