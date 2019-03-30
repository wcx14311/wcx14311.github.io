$(function(){
	$('#mainchengebox').load('网游充值1.html');
	$('.top-nav-tabs li span').click(function(){
		var dlink = $(this).attr('data-link');
		$('#mainchengebox').load(dlink);
		$('.top-nav-tabs li a').removeClass('on');
		$(this).parent().addClass('on');
	})
})
