var serverInterface = {
	login:'',
	orderlist:'',
	addOperators:'',
};
var orderQueryParamet = {
	pageNo:1,
	typeName:'话费',
	pageSize:10,
	startData:'',
	endData:''
}
var myApp = new Framework7({
	pushState:true,
	notificationCloseButtonText: "关闭",
	modalPreloaderTitle: "加载中... ",
	modalTitle: "永乐生活",
	modalButtonOk: "确定",
    modalButtonCancel: "取消",
    modalUsernamePlaceholder: "账号",
    modalPasswordPlaceholder: "密码",
    smartSelectPopupCloseText: "完成",
    smartSelectPickerCloseText: "关闭",
});
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
	dynamicNavbar: true
});
$$(document).on('ajaxStart', function(e) {
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function() {
    myApp.hideIndicator();
});
$$(document).on('navbarInit', function (e) {
  	var navbar = e.detail.navbar;
});
stopDrop();
$$(document).on('plusready',function(){
	plus.navigator.setStatusBarStyle("UIStatusBarStyleBlackOpaque");
	plus.navigator.setStatusBarBackground("#e94b3a");
	if(!(plus.storage.getItem("isLogin")=='true')){
		myApp.alert('你还没登录',function(){
			mainView.router.load({
				url:"page/login.html"	
			});
		});
	}
});
//$$(document).on('visibilitychange',function(){
//	alert('123')
//	if(document.visibilityState == 'hidden'){
//		
//	}
//});

$$('.coolico1').click(function(){
	if(!(plus.storage.getItem("isLogin")=='true')){
		myApp.alert('你还没登录',function(){
		});
	}
})
$$('.coolico2').click(function(){
	if(!(plus.storage.getItem("isLogin")=='true')){
		myApp.alert('你还没登录',function(){
		});
	}
})
$$('.coolico3').click(function(){
	if(!(plus.storage.getItem("isLogin")=='true')){
		myApp.alert('你还没登录',function(){
		});
	}
});

$$('.toolbar a').on('click',function(){
	var cvs = $$(this).attr('href');
	if(cvs=='#home'){
		$$('.navbar-inner').html('<div class="left"></div><div class="center"></div><div class="right"></div>')
	}else if(cvs=='#order'){
		$$('.navbar-inner').html('<div class="left sliding"><a class="link"><img class="img-icon" src="images/icon-funnel.png"/>筛选</a></div><div class="center sliding">订单</div><div class="right"><a class="link"><img class="img-icon" src="images/icon-search.png"/>查询</a></div>')
	}else if(cvs=='#wallet'){
		$$('.navbar-inner').html('<div class="left sliding"><a class="link"><img class="img-icon" src="images/icon-tixian.png"/>提现</a></div><div class="center sliding">钱包</div><div class="right"><a class="link"><img class="img-icon" src="images/icon-zhzhan.png"/>转账</a></div>')
	}else if(cvs=='#user'){
		$$('.navbar-inner').html('<div class="left"></div><div class="center sliding">个人店铺</div><div class="right"></div>');
	};
});

$$('#order').on('click','.order-item-flex',function(){
	myApp.showIndicator();
	setTimeout(function(){
		myApp.hideIndicator();
		createOrderDetialPage();
	},500);
});
 
myApp.onPageInit('setting', function(page) {
   	$$('#tachu').click(function(){
		myApp.alert('真要退出吗',function(){
			plus.storage.setItem('isLogin','false');
		});
	});
});
myApp.onPageInit('mobile-phone-recharge',function(page){
	$$(page.container).on('touchstart',function(){
		$$('input').blur();
	}).on('touchmove',function(){
		$$('input').blur();
	});
	$$('.me-item').on('click',function(){
		$$(this).addClass('on').parents('li').siblings().find('.me-item').removeClass('on');
	})
});
myApp.onPageInit('mobile-flow-recharge',function(page){
	$$(page.container).on('touchstart',function(){
		$$('input').blur();
	}).on('touchmove',function(){
		$$('input').blur();
	});
	$$('.me-item').on('click',function(){
		$$(this).addClass('on').parents('li').siblings().find('.me-item').removeClass('on');
	})
});
myApp.onPageInit('mobile-qq-recharge',function(page){
	$$(page.container).on('touchstart',function(){
		$$('input').blur();
	}).on('touchmove',function(){
		$$('input').blur();
	});
	$$('.me-item').on('click',function(page){
		$$(this).addClass('on').parents('li').siblings().find('.me-item').removeClass('on');
	})
});

myApp.onPageInit('login-screen', function (page) {
    $$(page.container).on('touchstart',function(){
		$$('input').blur();
	}).on('touchmove',function(){
		$$('input').blur();
	});
    pageContainer.find('.list-button').on('click', function () {
      	var username = pageContainer.find('input[name="username"]').val();
      	var password = pageContainer.find('input[name="password"]').val();
      	plus.storage.setItem('isLogin','true');
      	mainView.router.back({
			url:"index.html"	
		})
    });
});
/**
 * 禁止浏览器下拉回弹
 */
function stopDrop() {
    var lastY;//最后一次y坐标点
    $$('body').on('touchstart', function(event) {
        lastY = event.originalEvent.changedTouches[0].clientY;//点击屏幕时记录最后一次Y度坐标。
    });
    $$('body').on('touchmove', function(event) {
        var y = event.originalEvent.changedTouches[0].clientY;
        var st = $(this).scrollTop(); //滚动条高度  
        if (y >= lastY && st <= 10) {//如果滚动条高度小于0，可以理解为到顶了，且是下拉情况下，阻止touchmove事件。
            lastY = y;
            event.preventDefault();
        }
        lastY = y;
    });
}
var openw=null,waiting=null;
function clicked(id,wa,ns,ws){
	openw=plus.webview.create(id,id,ws);
	openw.show("pop-in");
};
function createOrderDetialPage() {
	var html='<div data-page="order-detials" class="page page-order-detials no-toolbar no-navbar"><div class="page-content"><section class="bar-area order-detials-hd"><div class="bar tall"><div class="title"><span>交易成功</span></div><div class="money"><span>12.50</span></div><div><span style="color:#45C01A">佣金:<span>+1.00</span></span></div></div></section><section class="bar-area order-detials-bd"><div class="bar-flex"><div class="left"><span class="title">充值类型</span></div><div class="right"><span class="content">话费充值</span>                </div>            </div>            <div class="bar-flex">                <div class="left">                    <span class="title">充值面额</span></div><div class="right"><span class="content">100元</span></div></div><div class="bar-flex"><div class="left"><span class="title">充值账号</span></div><div class="right"><span class="content">15171471245</span></div></div><div class="bar-flex"><div class="left"><span class="title">号码归属地</span></div><div class="right"><span class="content">湖北武汉</span></div></div><div class="bar-flex"><div class="left"><span class="title">支付方式</span>                </div><div class="right"><span class="content">余额支付</span></div></div><div class="bar-flex"><div class="left"><span class="title">流水号</span></div><div class="right"><span class="content">465465132496546546546546</span></div></div><div class="bar-flex"><div class="left"><span class="title">交易时间</span></div><div class="right"><span class="content">2015-12-12 10:12:45</span></div></div></section></div></div>';
    mainView.router.loadContent(html);
};
function requestAjaxGet(url,data, successFunction){
    $$.ajax({
        url:url,
        type:'GET',
        dataType:'json',
        data: data,
        success: function (responseData) {
            if (isNotBlank(successFunction)) {
                successFunction(responseData);
            }
        },
        error: function (responseData) {
        	myApp.alert('请求失败');
        }
    });
}