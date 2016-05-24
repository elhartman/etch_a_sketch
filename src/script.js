$(document).ready(function(){
	var wid = prompt("Enter a size for your workspace (divisible by 100)");
	for (widStart=1;widStart <= wid;widStart++){
		$('.contain').append('<div class="etchbox"></div>');
	};
	$('.etchbox').hover(function(){
		$(this).css("background-color","#111");
	});
	$('#reset').click(function(){
		$('.etchbox').css("background-color","#FFF")
	});

});