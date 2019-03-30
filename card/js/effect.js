$(function(){
	var dropdown = $('.dropdown');
	dropdown.find('.dropdown-show').click(function () {
		dropdown.find('.dropdown-menu').show();
	});
	dropdown.find('li').click(function() {
		dropdown.find('.dropdown-val').text($(this).text());
		dropdown.find('.dropdown-menu').hide();
	})

	var container = $('.container');
	container.find('.tabs li').click(function() {
		var _index = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		container.find('.tab').addClass('hide').eq(_index).removeClass('hide');
	});

	var selector = $('.selector');
	selector.find('span').click(function() {
		$(this).addClass('on').siblings().removeClass('on');
	})
})