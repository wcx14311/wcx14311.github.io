$(function(){
	//省市联动	
	$('.select-ctiy').click(function(){
		var htmlstring = '<ul><a class="zmspan txtcolorred">热门</a><li data-code="420000">湖北省</li><li data-code="340000">安徽省</li></ul>';
		$('.select-ctiyer').find('.hideOption').hide().removeClass('on');
		var data = ChineseDistricts['86'];
		$.each(data,function(index1,ele1){
			htmlstring += '<ul>';
			htmlstring += '<a class="zmspan">'+index1+'</a>';
			$.each(ele1,function(index2,ele2){
				htmlstring +='<li data-code="'+ ele2.code +'">'+ele2.address+'</li>';
			})
			htmlstring += '</ul>';
		});
		$(this).find('.select-ctiy-box').html(htmlstring);
		
		$('.select-ctiy li').click(function(){
			$(this).parents('.hideOption').prev().attr('data-code',$(this).attr('data-code'));
			$(this).parents('.hideOption').prev().text($(this).text());
			$(this).parents('.hideOption').hide().removeClass('on');
			$('.select-ctiyer').find('.select-val').text('请选择城市')
		});
	});
	
	$('.select-ctiy li').click(function(){
		$(this).parents('.hideOption').prev().attr('data-code',$(this).attr('data-code'));
	})
	
	$('.select-ctiyer').click(function(){
		$('.select-ctiy').find('.hideOption').hide().removeClass('on');
		renderctiyer($('.select-ctiy').find('.select-val').attr('data-code'));
		
	})
	function renderctiyer(string){
		var data = ChineseDistricts[string];
		var htmlstring = '';
		htmlstring+='<ul>';
		$.each(data,function(ind,ele){
			htmlstring+='<li data-code="'+ ind +'">'+ele+'</li>';
		})
		htmlstring+='</ul>';
		$('.select-ctiyer-box').html(htmlstring);
		
		$('.select-ctiyer li').click(function(){
			$(this).parents('.hideOption').prev().attr('data-code',$(this).attr('data-code'));
			$(this).parents('.hideOption').prev().text($(this).text());
			$(this).parents('.hideOption').hide().removeClass('on');
		});
	}
})
