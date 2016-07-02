$(document).ready(function(){
	$(".slider").slider();	//alert("Listo");
});

$(document).on("scroll", function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 300){
			$("#brand-logo").css({"margin-top":"0%",
														"font-size":"2em",
														"color":"white"
													});
		}else{
			$("#brand-logo").css({"margin-top":"22%",
														"font-size":"6em",
														"color":"#c2185b"
													});
		}
	});