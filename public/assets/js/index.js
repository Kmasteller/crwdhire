$('.nav-toggle').click(function(){
	$('body').toggleClass('nav-open');

	// $('.nav-main').attr('style', function(index, attr){
	// 	return attr == "display:inline-grid !important;" ? "display: none;" : "display:inline-grid !important;";
	// });

	$('.nav-main').toggleClass('off on');
	


});
