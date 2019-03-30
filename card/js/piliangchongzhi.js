$(function(){
	var morePNE = $('#more-tel-rechange-input');
	var input_element = $('#input_element');
	var numberRepeatPrompt = $('.number-repeat-prompt');

	
	morePNE.change(function () {
		refreshNumbers();
	});
	
	input_element.keyup(function(){
		if($(this).val().length===13){
			var tplll=$(this).val().substr(0,13);
			addNumber(tplll);
			
		}else if($(this).val().length>14){
			addNumbers($(this).val());
		}
	}).keydown(function(){
		numberRepeatPrompt.text('');
	});
	
	var removeNumber = function (text) {
		var numbersBefore = morePNE.val().split(',');
		var numbersAfter = [];
		$.each(numbersBefore, function (key, value) {
			if (value !== text && value !== '') {
				numbersAfter.push(value);
			}
		});
		morePNE.val(numbersAfter.join(','));
	};
	
	var hasNumber = function (text) {
		var numbers = morePNE.val().split(',');
		var hasNumber = false;
		$.each(numbers, function (key, value) {
			if ($.trim(value) === $.trim(text)) {
				hasNumber = true;
			}
		});
		return hasNumber;
	};
	
	var addNumber = function (text) {
		text = text.substr(0,13);
		if (!hasNumber(text)) {
			morePNE.val(morePNE.val() + (morePNE.val() !== '' ? ',' : '') + text);
			morePNE.trigger('change');
		}else{
			numberRepeatPrompt.text('号码重复,请重新输入');
		}
		input_element.val('');
	};
	var addNumbers = function(longtxt){
		longtxt=longtxt.replace(/，/g,',').replace(/[^\d|,]/g,'');
		var phones = longtxt.split(',');
		$.each(phones, function (key, value) {
			var temp = value.replace(/[\s]/g, '').replace(/((^\d{3})(?=\d)|(\d{4})(?=\d))/g, '$1 ');
			addNumber(temp);
		})
	};
	var refreshNumbers = function () {
		$('.numbers-list').empty();
		var numbers = morePNE.val().split(',');
		$.each(numbers, function (key, value) {
			if (value !== ''){
				var number_element = document.createElement('div');
				$(number_element).addClass('number-item');
				$(number_element).html(value);
				// remove button
				var button_remove_element = document.createElement('div');
				$(button_remove_element).data('text', value);
				$(button_remove_element).addClass('number-remove');
				$(button_remove_element).bind('mousedown', function (e) {
					e.preventDefault();
					e.stopPropagation();
				});
				$(button_remove_element).bind('mouseup', function (e) {
					e.preventDefault();
					e.stopPropagation();
					removeNumber($(this).data('text'));
					morePNE.trigger('change');
				});
				
				$(button_remove_element).html(' ');
				$(number_element).append(button_remove_element);
				// clear
				var clear_element = document.createElement('div');
				clear_element.style.clear='both';
				$(number_element).append(clear_element);
				$('.numbers-list').append(number_element);
			}
		});
	};
	$('.p-left-titlebig').on('click',function(){
		getNumbers();
	})
	var getNumbers = function(){
		var numbers = morePNE.val().replace(/[\s]/g, '').split(',');
		console.log(numbers);
	};
})