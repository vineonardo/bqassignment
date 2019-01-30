/*
Main js
*/

$(function(){

	var map = [];

	setTimeout(function() {
		$(".cell.diamond").each(function(){
			map.push($(this).data("id"));
		});
		console.log(map);
	}, 100);


	function closest (num, arr) {
        var curr = arr[0];
        var diff = Math.abs (num - curr);
        for (var val = 0; val < arr.length; val++) {
            var newdiff = Math.abs (num - arr[val]);
            if (newdiff < diff) {
                diff = newdiff;
                curr = arr[val];
            }
        }
        return curr;
    }
	

	$(".cell").on("click",function(){
		//$(".cell").removeClass("active");
		if ($(this).hasClass('open')) {
			//do nothing, or may be show arrow
		}else{
			$(this).attr("disabled", true);
			$(this).addClass("open");
		}

		if ($(this).hasClass("empty")) {
			$(".cell").removeClass("arrow left right");
			$(this).addClass("arrow");

			//get current data id
			var item = $(this).data("id");

			//get the nearest diamond id
			var next = closest(item,map);

			if (item > next) {
				$(this).addClass("left");
			}else{
				$(this).addClass("right");
			}
			
		}

		if ($(this).hasClass("diamond")) {
			//get current data id
			var item = $(this).data("id");

			//remove data id from map so that it'll not be hinted again
			map.splice( $.inArray(item, map), 1);
		}
	});

});