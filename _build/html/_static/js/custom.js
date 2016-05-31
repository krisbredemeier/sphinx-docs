$(document).ready(function(){
	var pathname = $(location).attr('pathname');
	var split = pathname.split("/");
	var last = split[split.length -1];
	if( last == "index.html") {
		$(".toctree-l0, .toctree-l0 a").addClass("current");
	}
});
