(function($){
	$(function(){
		//优惠券选择
		var cursorSelect = $('.select-val').parent();
		$('.select-val').click(function(){
		
			$(this).parents('.lines').siblings().find('.hideOption').hide().removeClass('on');
			var temp = $(this).next('.hideOption');
			if(temp.hasClass('on')){
				temp.hide().removeClass('on');
			}else{
				temp.show().addClass('on');
			}
		});
		
		$('.select-bank').click(function(){
			$(this).parents('.lines').siblings().find('.bankhideOption').hide().removeClass('on');
			var temp = $(this).next('.bankhideOption');
			if(temp.hasClass('on')){
				temp.hide().removeClass('on');
			}else{
				temp.show().addClass('on');
			}
		});
		
		
		$('.congzenjiu-dialog').find('.select').click(function(){
			var saer = $(this);
			if (saer.hasClass('is')) {
				saer.removeClass('is').addClass('not').siblings().removeClass('not').addClass('is');
			} else{
				saer.removeClass('not').addClass('is').siblings().removeClass('is').addClass('not');
			}
		})
	
		$('.hideOption li').click(function(){
			var txt = $(this).parents('.hideOption').prev();
			if(txt.is('input')){
				txt.val($(this).text());
				txt.trigger('change');
			}else{
				txt.text($(this).text());
			}
			$(this).parents('.hideOption').hide().removeClass('on');
		});
		
		$('.bankhideOption li').click(function(){
			var dca = $(this).parents('.bankhideOption');
			dca.prev().text($(this).text());
			$(this).addClass('on').siblings().removeClass('on');
			setTimeout(function(){
				dca.hide().removeClass('on');
				console.log($(this));
			},300)
		});

		//面额选择
		var mianeList = $('.miane-list');
		var changecunt = $('.changecunt input');
		mianeList.find('a').click(function(){
			$(this).addClass('on').siblings().removeClass('on').find('ul').hide();
			changecunt.val($(this).text().replace(/[^0-9]/ig,""));
		})
		
		//输入数量是清除选择
		changecunt.keydown(function(){
			mianeList.find('a.other').addClass('on').siblings().removeClass('on');
		})
		
		$('.near-order-link').click(function(){
			var temp = $(this).next('.order-list-dialogbox');
			if(temp.hasClass('loaded')){
				if(temp.hasClass('on')){
					temp.hide().removeClass('on');
				}else{
					temp.show().addClass('on');
				}
			}else{
				temp.addClass('loaded').addClass('on');
				temp.load('近期订单.html').show();
			}
		})
	
		//是否充正
		$('.isrechange').find('span').click(function(){
			$(this).addClass('on').siblings().removeClass('on');
		});
		
		$('.hide-or-show').click(function(){
			var _this =$(this);
			if(_this.find('.op-btn').text()=='查看'){
				_this.find('.op-btn').text('隐藏');
				_this.find('.op-tag').show();
			}else{
				_this.find('.op-btn').text('查看');
				_this.find('.op-tag').hide();
			}
		});
		//折扣进价
		var zkeffect = $('.zkeffect');
		zkeffect.find('.bacx3').click(function(){
			var temp = $(this);
			if (temp.text() == '隐藏') {
				zkeffect.find('.bacx2').hide();
				temp.text('查询');
			} else{
				zkeffect.find('.bacx2').show();
				temp.text('隐藏');
			}
		});
	
		$('.p-right-box input').focus(function(){
			$(this).css('color','#FF5F4E');
			$(this).parent().css('border-color','#FF5F4E')
		}).blur(function(){
			$(this).parent().css('border-color','#D8DDE5')
			$(this).css('color','#595959');
		})
		
		$('.submitbtn a').click(function(){
			window.location.href = "扫码支付.html";
		});
		
		$('.head .lps').click(function(){
			var dlink = $(this).attr('data-link');
			$('#mainchengebox').load(dlink);
			$(this).addClass('on').siblings().removeClass('on');
		});
		
		$('.check-order').click(function(){
			$('.check-order-data-table').show();
		});
		
		$('i.clouse-data-table').click(function(){
			$(this).parent().hide();
			console.log('121321')
		});
	});
})(window.jQuery||jQuery);


//固定电话 
function isTelephone(phone) {
	var phone_reg = new RegExp(/^([+]{0,1}\d{3,4}|\d{3,4}-)?\d{7,8}$/);
	if (!phone_reg.test(phone)) {
		return false;
	}
	return true;
}
//手机号码 
function isMobile(mobile) {
	var mobile_reg = new RegExp(/^0{0,1}1[0-9]{10}$/);
	if (!mobile_reg.test(mobile)) {
		return false;
	}
	return true;
}
//QQ号码从10000开始 
function isQQ(qq) {
	var qq_reg = new RegExp(/^[1-9][0-9]{4,}$/);
	if (!qq_reg.test(qq)) {
		return false;
	}
	return true;
}
//电子邮件 
function isEmail(email) {
	var email_reg = new RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*.\w+([-.]\w+)*$/);
	if (!email_reg.test(email)) {
		return false;
	}
	return true;
}
//身份证 
function isIDCard(str) {
	var IDCardReg = new RegExp(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/);
	if (!IDCardReg.test(str)) {
		return false;
	}
	return true;
}
