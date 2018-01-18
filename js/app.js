!(function() {
	"use strict";
    function fullScreen() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) { 
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    };
    var Home = { 
        template: '#home',
        mounted:function(){
            console.log('首页  将获取用户信息的ajax操作放在该位置')
        },
        data: function () {
            return {
                collapsed:false,
                user:{
                    name:'炖萝卜',
                    type:'白金代理商'
                }
            }
        },
        methods:{
            handleopen:function() {
                //console.log('handleopen');
            },
            handleclose:function() {
                //console.log('handleclose');
            },
            handleselect: function (a, b) {

            },
        }
    };

    var Login = { 
        template: '#login',
        data: function () {
            return {
                user:{
                    username:'admin',
                    password:'admin',
                    vCode:'6077'
                },
                serverData:{},
                apiUrl: '/js/datass.json'
            }
        },
        methods:{
            handleSubmit:function() {
                if(this.user.vCode!='6077'){ 
                    this.$notify({
                        title: '请输入验证码',
                        message: '请输入验证码',
                        type: 'warning'
                    });
                    return false;
                };
                this.$http.get(this.apiUrl).then(function(response){
                    var resData = JSON.parse(response.body);
                    if(resData.status){
                        if(this.user.username==resData.result.username && this.user.password==resData.result.password){
                            this.$notify({
                                title: '成功',
                                message: '登录成功',
                                type: 'success'
                            });
                            this.$router.push({ path: '/home/index' });
                        }else {
                            this.$notify({
                                title: '输入信息不对',
                                message: '账号或密码错误',
                                type: 'warning'
                            });
                        }
                    }else {
                    	this.$notify({
                            title: '登录失败',
                            message: '登录失败',
                            type: 'warning'
                        });
                        return false;
                    }
                }).catch(function(response) {
                	this.$notify({
                        title: '登录失败',
                        message: response,
                        type: 'warning'
                    });
                    console.log(response)
                })
            },
        }  
    };
    var Reg = { template: '#reg' };

    var huafei = { template: '#huafei' };
    var liuliang = { template: '#liuliang' };
    var qq = { template: '#qq' };
    var game = { template: '#game' };
    var guhua = { template: '#guhua' };
    var kuandai = { template: '#kuandai' };
    var alipay = { template: '#alipay' };
    var xycard = { template: '#xycard' };
    var jycard = { template: '#jycard' };
    var hfcard = { template: '#hfcard' };
    var shjiaofei = { template: '#shjiaofei' };

    var index = { template: '#index' };
    var order = { 
        template: '#order',
        mounted:function(){
            console.log('订单')
        },
        'data':function () {
            return {
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick:function(picker) {
                            var end = new Date();
                            var start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick:function(picker) {
                            var end = new Date();
                            var start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick:function(picker) {
                            var end = new Date();
                            var start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                value4: '',
                selectoptions: [
                    {value: 'success',label: '充值成功'}, 
                    {value: 'failed',label: '充值失败'}, 
                    {value: 'weating',label: '处理中'}
                ],
                value: ''
            }
        }
    };
    var total = { 
        template: '#total',
        mounted:function(){
            console.log('统计')
        },
        methods:{
            goDetial:function(){
                this.$router.push({ path: '/home/order/detial' });
            }
        }
    };
    var totalTableDetial = {
        template:'#totalTableDetial',
        mounted:function(){
            console.log('统计详情')
        },
        data:function() {
            return {
                tableData:[
                    {sid:"568654565420170501",phone:"13578145246",product:"全国电信10元",rcount:"1",spirce:"9.9元",date:"2016-03-18 16:35:58",status:"充值成功"},
                    {sid:"568654565420170502",phone:"13578145246",product:"全国电信10元",rcount:"1",spirce:"9.9元",date:"2016-03-18 16:35:58",status:"充值成功"},
                    {sid:"568654565420170503",phone:"13578145246",product:"全国电信10元",rcount:"1",spirce:"9.9元",date:"2016-03-18 16:35:58",status:"充值成功"},
                    {sid:"568654565420170504",phone:"13578145246",product:"全国电信10元",rcount:"1",spirce:"9.9元",date:"2016-03-18 16:35:58",status:"充值成功"},
                    {sid:"568654565420170505",phone:"13578145246",product:"全国电信10元",rcount:"1",spirce:"9.9元",date:"2016-03-18 16:35:58",status:"充值成功"},
                    {sid:"568654565420170506",phone:"13578145246",product:"全国电信10元",rcount:"1",spirce:"9.9元",date:"2016-03-18 16:35:58",status:"充值成功"},
                    {sid:"568654565420170507",phone:"13578145246",product:"全国电信10元",rcount:"1",spirce:"9.9元",date:"2016-03-18 16:35:58",status:"充值成功"},
                    {sid:"568654565420170508",phone:"13578145246",product:"全国电信10元",rcount:"1",spirce:"9.9元",date:"2016-03-18 16:35:58",status:"充值成功"},
                    {sid:"568654565420170509",phone:"13578145246",product:"全国电信10元",rcount:"1",spirce:"9.9元",date:"2016-03-18 16:35:58",status:"充值成功"},
                    {sid:"568654565420170510",phone:"13578145246",product:"全国电信10元",rcount:"1",spirce:"9.9元",date:"2016-03-18 16:35:58",status:"充值成功"}
                ],
                currentPage4: 4
            }
        },
        methods: {
            handleEdit:function(index, row) {
                console.log(index, row);
                var self = this;
                self.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          			confirmButtonText: '确定',
          			cancelButtonText: '取消',
          			type: 'warning'
	        	}).then(function(){
	          		self.$message({
	            		type: 'success',
	            		message: '删除成功!'
	          		});
	        	}).catch(function(){
	          		self.$message({
	            		type: 'info',
	            		message: '已取消删除'
	          		});          
        		});
            },
            handleDelete:function(index, row) {
                console.log(index, row);
            },
            handleSizeChange:function(val) {
                console.log('每页 '+val+' 条');
            },
            handleCurrentChange:function(val) {
                console.log('当前页:'+ val);
            }
        }
    };

    var otosy = { template: '#otosy' };
    var accont = { 
        template: '#accont',
        mounted:function(){
            console.log('账户')
        },
        data:function(){
            return {
                tableData: [
                    {date:'-',name:'-',address:'-'}, 
                    {date:'-',name:'-',address:'-'}, 
                    {date:'-',name:'-',address:'-'}, 
                    {date:'-',name:'-',address:'-'}, 
                    {date:'-',name:'-',address:'-'}
                ]
            }
        }
    };
    var setting = { template: '#setting'};
    var s1 = { template: '#s1' };
    var s2 = { template: '#s2' };
    var s3 = { template: '#s3' };
    var cavse = { 
        template: '#cavse',
        mounted:function(){
            console.log(this.$route.params.id);
        },
        data:function(){
            return {
                cs:this.$route.params.id
            }
        }
    };
    var voucher={template:'#voucher'};
    var vcs1={template:'#vcs1'};
    var vcs2={template:'#vcs2',
		data:function(){
			return {
				tableData:[
					{a2:'[518]活动5元直减券',a3:'直减券',a4:'立减5.0元',a5:'话费、流量、电费',a6:'2017-05-19 08:00:00至2017-05-19 08:00:00',a7:'短信',a8:'500',a9:'2017-05-19 08:00:00',a10:'明细',a11:''},
					{a2:'[518]活动5元直减券',a3:'直减券',a4:'立减5.0元',a5:'话费、流量、电费',a6:'2017-05-19 08:00:00至2017-05-19 08:00:00',a7:'短信',a8:'500',a9:'2017-05-19 08:00:00',a10:'明细',a11:''},
					{a2:'[518]活动5元直减券',a3:'直减券',a4:'立减5.0元',a5:'话费、流量、电费',a6:'2017-05-19 08:00:00至2017-05-19 08:00:00',a7:'短信',a8:'500',a9:'2017-05-19 08:00:00',a10:'明细',a11:''}
				],
				currentPage4: 4
			}
		}
	};
    var vcs3={
    	template:'#vcs3',
    	data:function(){
			return {
				tableData:[
					{a2:'65548036554803655483',a3:'活动5元直减券',a4:'未使用',a5:'话费、流量、电费',a6:'a2f4y0t02532312198745',a7:'2017-05-19 08:00:00'},
					{a2:'65548036554803655483',a3:'活动5元直减券',a4:'未使用',a5:'话费、流量、电费',a6:'a2f4y0t02532312198745',a7:'2017-05-19 08:00:00'},
					{a2:'65548036554803655483',a3:'活动5元直减券',a4:'未使用',a5:'话费、流量、电费',a6:'a2f4y0t02532312198745',a7:'2017-05-19 08:00:00'},
					{a2:'65548036554803655483',a3:'活动5元直减券',a4:'未使用',a5:'话费、流量、电费',a6:'a2f4y0t02532312198745',a7:'2017-05-19 08:00:00'}
				],
				currentPage4: 4
			}
		}
	};
    var routes = [
        { 
            path: '/', 
            redirect: '/login' ,
        },{ 
            path: '/home', 
            component: Home, 
            name:'代理商户平台',
            show:true,
            children:[
                { 
                    path: '/home/index', 
                    component: index,
                    name:'首页',
                    hidden:true
                },{ 
                    path: '/home/recharge', 
                    component: Reg,
                    iconCls:'icon23',
                    redirect: '/home/recharge/huafei',
                    name:'充值中心',
                    leaf:true,
                    children:[
                        {path:'/home/recharge/huafei',name:'话费充值',component:huafei},
                        {path:'/home/recharge/liuliang',name:'流量充值',component:liuliang},
                        {path:'/home/recharge/qq',name:'QQ充值',component:qq},
                        {path:'/home/recharge/game',name:'网游充值',component:game},
                        {path:'/home/recharge/guhua',name:'固话充值',component:guhua},
                        {path:'/home/recharge/kuandai',name:'宽带充值',component:kuandai},
                        {path:'/home/recharge/alipay',name:'支付宝充值',component:alipay},
                        {path:'/home/recharge/xycard',name:'信用卡还款',component:xycard},
                        {path:'/home/recharge/jycard',name:'加油卡',component:jycard},
                        {path:'/home/recharge/hfcard',name:'话费卡',component:hfcard},
                        {path:'/home/recharge/shjiaofei',name:'生活缴费',component:shjiaofei}
                    ]
                },{ 
                    path: '/home/voucher',
                    component: voucher,
                    name:'卡券核销',
                    iconCls:'icon27',
                    leaf:false,
                    children:[
                        { path:'/home/voucher/index',name:'卡券发布',component:vcs1},
                        { path:'/home/voucher/manage',name:'卡券管理',component:vcs2},
                        { path:'/home/voucher/order',name:'卡券记录',component:vcs3}
                    ]
                },{ 
                    path: '/home/order', 
                    component: order,
                    iconCls:'icon24',
                    redirect: '/home/order/index',
                    name:'订单管理',
                    leaf:true,
                    children:[
                        {path:'/home/order/index',name:'订单统计',component:total},
                        {path:'/home/order/cavse/:id',name:'订单详情',component:cavse},
                        {path:'/home/order/detial',name:'订单列表',component:totalTableDetial}
                    ]
                },{ 
                    path: '/home/otosy', 
                    name:'oto收银台',
                    iconCls:'icon25',
                    leaf:true,
                    component: otosy
                },{ 
                    path: '/home/accont', 
                    component: accont,
                    iconCls:'icon26',
                    leaf:true,
                    name:'账户管理'
                },{ 
                    path: '/home/setting',
                    component: setting,
                    name:'系统设置',
                    iconCls:'icon31',
                    leaf:false,
                    children:[
                        { path:'/home/setting/s1',name:'安全设置',component:s1},
                        { path:'/home/setting/s2',name:'菜品管理',component:s2},
                        { path:'/home/setting/s3',name:'餐桌管理',component:s3}
                    ]
                }
            ]
        },{ 
            path: '/login', 
            component: Login,
            name:'登录'
        }
    ];

    var router = new VueRouter({
        routes
    });

    var app = new Vue({
        router:router
    }).$mount('#app');

})()