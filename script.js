var video_source_obj = {

		bahamas : "https://www.youtube.com/embed/NuuQBODKTTY",
		monaco : "https://www.youtube.com/embed/nXzVTy_ojek",
		panama : "https://www.youtube.com/embed/HzP-861rPV4",
		mauritius : "https://www.youtube.com/embed/ypqgF2pnXe4",
		dubai : "https://www.youtube.com/embed/vQWlNALvbhE",
		cayman : "https://www.youtube.com/embed/hi55RHFqwew",
		oman : "https://www.youtube.com/embed/b4RZiAAXQZQ",
		qatar : "https://www.youtube.com/embed/ukcMJ5zQ5nU",
		bahrain : "https://www.youtube.com/embed/rQsVo4Ha4aA",
		bvi : "https://www.youtube.com/embed/2SatdE-ytCk",
		maldives : "https://www.youtube.com/embed/ofHjiv4YNZY"
	};

$(document).ready(function() {

	$(".imageD").on("click",function() {

		var imageid = $(this).attr("id");
		var new_src = video_source_obj[imageid]; 
		$(".modal").css("display", "block");
		$("#videoFrame").attr("src", new_src);
	});

	$(".close").on("click",function() {
		$("#videoFrame").attr("src", null);
		$(".modal").css("display", "none");
	});
});
