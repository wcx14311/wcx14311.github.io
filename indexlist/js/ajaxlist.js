(function($) {
	var inner = $('.list-indexed-inner');
	var listView = $('.list-table-view');
	var topHeader = $('.list-top');
    var searchInput = $('.list-search-input');
    var bar = $('.list-indexed-bar');
    var alert = $('.list-indexed-alert');
    var liArray;
    var hotItems = $('.list-hot-box');
    var styleForSearch = $('<style>');
    var hiddenGroups = [];
    var pointElement = null;
	inintList();
    function inintList() {
        $.ajax({
            type: 'GET',
            url: './data.json',
            data: { name: 'Zepto.js' },
            dataType: 'json',
            timeout: 300,
            context: $('body'),
            success: function(data) {
            	listView.empty();
            	var daxiezimu = "A";
            	$.each(data.gamelist,function(index,value){
            		var zimu = pinyin.getFullChars(value.gameName).charAt(0);
            		var str = '[data-group="'+zimu+'"]';
            		if(listView.find(str).length<1){
            			if(!(/^\d+$/.test(zimu))){
            				listView.append('<li data-group="'+zimu+'" class="list-indexed-group">'+zimu+'</li>');
            			}
            		}
            		listView.append('<li data-value="'+pinyin.getFullChars(value.gameName)+'" data-tags="'+pinyin.getCamelChars(value.gameName)+'" class="list-indexed-item">'+value.gameName+'</li>');
            	});
            	inner.removeClass("loading");
            	bingOpriate();
            },
            error: function(xhr, type) {
                alert('Ajax error!')
            }
        })
    }

    function bingOpriate() {
//  	inner.on('scroll',function(){
//  		if($(this).scrollTop()>10){
//  			bar.css({
//  				'-webkit-transform':'translateX(0)',
//  				'-webkit-transform':'translateX(0)'
//  			})
//  		}else{
//  			bar.removeAttr('style')
//  		}
//  	})
    	liArray = $('.list-indexed-inner li');
        inner.height($('body').height() - topHeader.height());
        bar.on('touchmove', function(event) {
            findStart(event);
        }, false);
        bar.on('touchstart', function(event) {
            findStart(event);
        }, false);
        $('body').on('touchend', function(event) {
            findEnd(event);
        }, false);
        $('body').on('touchcancel', function(event) {
            findEnd(event);
        }, false);
        searchInput.on('input', function() {
            var keyword = $(this).val();
            if (keyword.length > 0) {
                $(this).css('text-align', 'left');
                hotItems.hide();
            } else {
                $(this).removeAttr('style');
                hotItems.show();
            }
            search(keyword);
        });

        function search(keyword) {
	        var keyword = (keyword || '').toLowerCase();
	        console.log(keyword);
	        var selectorBuffer = [];
	        var groupIndex = -1;
	        var itemCount = 0;
	        var itemTotal = liArray.length;
	        var checkGroup = function(currentIndex, last) {
	            if (itemCount >= currentIndex - groupIndex - (last ? 0 : 1)) {
	                selectorBuffer.push('.list-indexed-inner li:nth-child(' + (groupIndex + 1) + ')');
	                hiddenGroups.push(liArray[groupIndex]);
	            };
	            groupIndex = currentIndex;
	            itemCount = 0;
	        }
	        liArray.each(function(index, item) {
	        	console.log('')
	            var currentIndex = index;
	            var _item = $(item);
	            var styeName = _item.attr('class').toLowerCase();
	            if (styeName.indexOf('group') > 0) {
	                checkGroup(currentIndex, false);
	            } else {
	                var text = _item.text().toLowerCase();
	                var value = _item.attr('data-value').toLowerCase();
	                var tags = _item.attr('data-tags').toLowerCase();
	                if (keyword && text.indexOf(keyword) < 0 && value.indexOf(keyword) < 0 && tags.indexOf(keyword) < 0) {
	                    selectorBuffer.push('.list-indexed-inner li:nth-child(' + (currentIndex + 1) + ')');
	                    itemCount++;
	                }
	                if (currentIndex >= itemTotal - 1) {
	                    checkGroup(currentIndex, true);
	                }
	            }
	        });
	        if (selectorBuffer.length >= itemTotal) {
	            inner.addClass('empty');
	        } else if (selectorBuffer.length > 0) {
	            inner.removeClass('empty');
	            styleForSearch.text(selectorBuffer.join(',') + "{display:none;}");
	        } else {
	            inner.removeClass('empty');
	            styleForSearch.text("");
	        }
	        scrollTo('A')
	        $('html head').append(styleForSearch);
	    };

	    function findStart(event) {
	        if (pointElement) {
	            $(pointElement).removeClass('on');
	            pointElement = null;
	        }
	        bar.addClass('on');
	        var point = event.changedTouches ? event.changedTouches[0] : event;
	        pointElement = document.elementFromPoint(point.pageX, point.pageY);
	        if (pointElement) {
	            var group = $(pointElement).text();
	            if (group && group.length == 1) {
	                $(pointElement).addClass('on');
	                alert.text(group);
	                alert.addClass('on');
	                scrollTo(group);
	            }
	        }
	        event.preventDefault();
	    };

	    function findEnd(event) {
	        alert.removeClass('on');
	        bar.removeClass('on');
	        if (pointElement) {
	            $(pointElement).removeClass('on');
	            pointElement = null;
	        }
	    };

	    function scrollTo(group) {
	        var groupElement = $('[data-group="' + group + '"]');
	        var distanseObg = groupElement.offset();
	        if (distanseObg) {
	            var scroll_distance = Math.round(distanseObg.top) - topHeader.height();
	            var sssss = inner.scrollTop();
	            inner.scrollTop(scroll_distance + sssss);
	        }
	    };
    }

})(Zepto);
