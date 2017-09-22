!(function($,dom) {
    var myScroll,
        pullDownEl, pullDownOffset,
        generatedCount = 0;

    /**
     * 下拉刷新 （自定义实现此方法）
     * myScroll.refresh();      // 数据加载完成后，调用界面更新方法
     */
    function pullDownAction() {
        setTimeout(function() { // <-- Simulate network congestion, remove setTimeout from production!
            var el, li, i;
            el = document.getElementById('thelist');

            for (i = 0; i < 3; i++) {
                li = document.createElement('div');
                li.className = 'list-item';
                var it = '<div class="left-date">';
                it += '<p class="dete1">11-27</p>';
                it += '<p class="dete2">16:30</p>';
                it += '</div>';
                it += '<div class="cent-icon kuandai">';
                it += '</div>';
                it += '<div class="right-">';
                it += '<p class="je">+0.178</p>';
                it += '<p class="info">充固话100元 - 18971612796</p>';
                it += '</div>';
                it += '<a class="status hui">充值成功</a>';
                li.innerHTML = it;
                el.insertBefore(li, el.childNodes[0]);
            }
            myScroll.refresh(); //数据加载完成后，调用界面更新方法   Remember to refresh when contents are loaded (ie: on ajax completion)
        }, 1000); // <-- Simulate network congestion, remove setTimeout from production!
    }
    /**
     * 初始化iScroll控件
     */
    function loaded() {
        pullDownEl = document.getElementById('pullDown');
        pullDownOffset = pullDownEl.offsetHeight;
        myScroll = new iScroll('wrapper', {
            scrollbarClass: 'myScrollbar',
            /* 重要样式 */
            useTransition: false,
            /* 此属性不知用意，本人从true改为false */
            topOffset: pullDownOffset,
            onRefresh: function() {
                if (pullDownEl.className.match('loading')) {
                    pullDownEl.className = '';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
                }
            },
            onScrollMove: function() {
                if (this.y > 5 && !pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'flip';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放刷新';
                    this.minScrollY = 0;
                } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                    pullDownEl.className = '';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
                    this.minScrollY = -pullDownOffset;
                }
            },
            onScrollEnd: function() {
                if (pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'loading';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '正在刷新';
                    pullDownAction(); // Execute custom function (ajax call?)
                }
            }
        });

        setTimeout(function() { document.getElementById('wrapper').style.left = '0'; }, 800);
    }

    //初始化绑定iScroll控件 
    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
    document.addEventListener('DOMContentLoaded', loaded, false);
})(window.jQuery,document)