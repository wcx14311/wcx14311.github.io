webpackJsonp([14],{DW2J:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-view"},[a("div",{staticClass:"page_breadcrumb"},[a("Breadcrumb",[a("BreadcrumbItem",{attrs:{to:"/"}},[t._v("首页")]),t._v(" "),a("BreadcrumbItem",[t._v("查询表格")])],1)],1),t._v(" "),a("div",{staticClass:"page_content"},[a("div",{staticStyle:{padding:"24px","padding-bottom":"0"}},[a("Row",[a("div",{staticClass:"fl mr40 mb20"},[t._v("\n                     规则编号 "),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"订单号码"}})],1),t._v(" "),a("div",{staticClass:"fl mr40 mb20"},[t._v("\n                    使用状态 "),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"订单状态"}})],1),t._v(" "),a("div",{staticClass:"fl mr40 mb20"},[t._v("\n                    调用次数 "),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"订单状态"}})],1),t._v(" "),a("div",{staticClass:"fl mr40 mb20"},[t._v("\n                    更新日期 "),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"订单状态"}})],1),t._v(" "),a("div",{staticClass:"fl mr40 mb20"},[t._v("\n                    使用状态 "),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"订单状态"}})],1),t._v(" "),a("div",{staticClass:"fl mr40 mb20"},[t._v("\n                    使用状态 "),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"订单状态"}})],1),t._v(" "),a("div",{staticClass:"fl mr40 mb20"},[a("Button",{attrs:{type:"primary",icon:"search"}},[t._v("搜索")]),t._v(" "),a("Button",{attrs:{type:"ghost",icon:"refresh"}},[t._v("取消")])],1)]),t._v(" "),a("div",[a("Button",{attrs:{type:"primary",icon:"plus"}},[t._v("新增")]),t._v(" "),a("Button",{attrs:{type:"primary",icon:"trash-a"}},[t._v("删除")]),t._v(" "),a("Button",{attrs:{type:"primary",icon:"compose"}},[t._v("修改")]),t._v(" "),a("Button",{attrs:{type:"primary",icon:"search"}},[t._v("查询")])],1),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("Table",{attrs:{border:"",data:t.tableData1,columns:t.tableColumns1,stripe:""}})],1),t._v(" "),a("div",{staticStyle:{margin:"20px 0 0",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{total:100,current:1},on:{"on-change":t.changePage}})],1)])],1)])])},staticRenderFns:[]},n=a("X4nt")({data:function(){return{tableData1:this.mockTableData1(),tableColumns1:[{title:"姓名",key:"name",width:80,align:"center"},{title:"民族",key:"minzu",width:200},{title:"性别",key:"sex",width:70,align:"center"},{title:"出生",key:"chusheng",width:150,align:"center"},{title:"住址",key:"address"},{title:"身份证号码",key:"ID",width:200,align:"center"}]}},methods:{mockTableData1:function(){return[{name:"方南霜",minzu:"汉",sex:"女",chusheng:"1983年05月03日",address:"内蒙古自治区",ID:"150525198408305320"},{name:"彭振",minzu:"朝鲜族",sex:"男",chusheng:"1983年05月03日",address:"山西省晋城市沁水县",ID:"140521198201304390"},{name:"彭振",minzu:"维吾尔族",sex:"男",chusheng:"1983年05月03日",address:"山西省晋城市沁水县",ID:"140521198201304390"},{name:"彭振",minzu:"汉",sex:"男",chusheng:"1983年05月03日",address:"山西省晋城市沁水县",ID:"140521198201304390"},{name:"彭振",minzu:"汉",sex:"男",chusheng:"1983年05月03日",address:"山西省晋城市沁水县",ID:"140521198201304390"},{name:"彭振",minzu:"汉",sex:"男",chusheng:"1983年05月03日",address:"山西省晋城市沁水县",ID:"140521198201304390"},{name:"彭振",minzu:"汉",sex:"男",chusheng:"1983年05月03日",address:"山西省晋城市沁水县",ID:"140521198201304390"},{name:"彭振",minzu:"汉",sex:"男",chusheng:"1983年05月03日",address:"山西省晋城市沁水县",ID:"140521198201304390"},{name:"彭振",minzu:"汉",sex:"男",chusheng:"1983年05月03日",address:"山西省晋城市沁水县",ID:"140521198201304390"},{name:"宣佳盛",minzu:"汉",sex:"男",chusheng:"1983年05月03日",address:"福建省南平市顺昌县",ID:"140521198201304390"}]},formatDate:function(t){var e=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;var s=t.getDate();return e+"-"+a+"-"+(s=s<10?"0"+s:s)},changePage:function(){this.tableData1=this.mockTableData1()}}},s,!1,null,null,null);e.default=n.exports}});