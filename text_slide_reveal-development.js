var animating;
function slideReveal(event) {
	var element = $(event.target).parent(".reveal_event");
	var slide_element = $(element).next(".slide_reveal_container");

	/* if($(slide_element).hasClass("reveal_open")){
		$(".reveal_open").animate({width:"0"},1000,function(){
				$(this).height("0");
				$(this).removeClass("reveal_open");
			});
	}
	else {
		if($(".reveal_open").length > 0){
			$(".reveal_open").animate({width:"0"},1000,function(){
				$(this).height("0");
				$(this).removeClass("reveal_open");
			});
			
		} */
		
		var container_width = $(element).parent().innerWidth() - $(element).outerWidth(true);
		$(slide_element).height($(element).parent().height());
		//if(animating){
			$(slide_element).animate({width:container_width},1000,function(){
				$(this).addClass(" reveal_open");
				//animating = false;
			});
		//}
	//}
}

$(document).ready(function(){
	$(".reveal_event").click(function(e){
		slideReveal(e);
	});
});