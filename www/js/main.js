/*
Main js
*/

$(function(){

	$(".cell").on("click",function(){
		//$(".cell").removeClass("active");
		if ($(this).hasClass('open')) {
			//do nothing, or may be show arrow
		}else{
			$(this).attr("disabled", true);
			$(this).addClass("open");
		}
	});

});