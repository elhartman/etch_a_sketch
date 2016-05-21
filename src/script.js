$(document).ready(function(){
	var wid = prompt("Enter a size for your workspace (400,500,600)");
	for (widStart=1;widStart <= wid;widStart++){
		$('.contain').append('<div class="etchbox"></div>');
	};
});