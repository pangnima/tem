$(function(){
	
	// 헤더 상단 붙임
	$(window).on('scroll' , headerFixed)

	function headerFixed(){
		var headerEl = $("header");
		var headerH = headerEl.height();
		var windowT = $(window).scrollTop();

		if(windowT >= headerH){
			headerEl.addClass('active');
		} else {
			headerEl.removeClass('active');
		}
	}
})