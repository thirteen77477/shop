(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-04674c34"],{1698:function(t,e,n){"use strict";n.d(e,"g",(function(){return a})),n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"h",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d}));var r=n("6b6c");function a(t){return Object(r.a)({url:"agent/level",method:"get",params:t})}function i(t,e){return Object(r.a)({url:e,method:"get",params:t})}function o(t,e){return Object(r.a)({url:e,method:"get",params:t})}function s(t){return Object(r.a)({url:t,method:"PUT"})}function c(t){return Object(r.a)({url:t,method:"PUT"})}function u(t){return Object(r.a)({url:"agent/level_task",method:"get",params:t})}function l(t,e){return Object(r.a)({url:e,method:"get",params:t})}function d(t,e){return Object(r.a)({url:e,method:"get",params:t})}},"30cc":function(t,e,n){"use strict";n.r(e),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("159b"),n("b0c0"),n("131a"),n("fb6a");var r=n("0122"),a=n("c964"),i=n("f3f3"),o=(n("99af"),n("a434"),n("2f62")),s=n("1698");function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(e){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var i,o,s,c;e=e&&e.prototype instanceof p?e:p,e=Object.create(e.prototype),r=new L(r||[]);return a(e,"_invoke",{value:(i=t,o=n,s=r,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return O()}for(s.method=t,s.arg=e;;){var n=s.delegate;if(n&&(n=function t(e,n){var r=n.method,a=e.iterator[r];return void 0===a?(n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=void 0,t(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f):(r=h(a,e.iterator,n.arg),"throw"===r.type?(n.method="throw",n.arg=r.arg,n.delegate=null,f):(a=r.arg,a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)))}(n,s),n)){if(n===f)continue;return n}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===c)throw c="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);if(c="executing",n=h(i,o,s),"normal"===n.type){if(c=s.done?"completed":"suspendedYield",n.arg===f)continue;return{value:n.arg,done:s.done}}"throw"===n.type&&(c="completed",s.method="throw",s.arg=n.arg)}})}),e}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var f={};function p(){}function g(){}function v(){}i={};var m=(l(i,o,(function(){return this})),Object.getPrototypeOf),y=(m=m&&m(m(x([]))),m&&m!==e&&n.call(m,o)&&(i=m),v.prototype=p.prototype=Object.create(i));function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var i;a(this,"_invoke",{value:function(a,o){function s(){return new e((function(i,s){!function a(i,o,s,c){var u;i=h(t[i],t,o);if("throw"!==i.type)return(o=(u=i.arg).value)&&"object"==Object(r.a)(o)&&n.call(o,"__await")?e.resolve(o.__await).then((function(t){a("next",t,s,c)}),(function(t){a("throw",t,s,c)})):e.resolve(o).then((function(t){u.value=t,s(u)}),(function(t){return a("throw",t,s,c)}));c(i.arg)}(a,o,i,s)}))}return i=i?i.then(s,s):s()}})}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function x(t){if(t){var e,r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(r=function r(){for(;++e<t.length;)if(n.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r}).next=r}return{next:O}}function O(){return{value:void 0,done:!0}}return a(y,"constructor",{value:g.prototype=v,configurable:!0}),a(v,"constructor",{value:g,configurable:!0}),g.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){return t="function"==typeof t&&t.constructor,!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},k(b.prototype),l(b.prototype,s,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new b(d(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(y),l(y,u,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,n=Object(t),r=[];for(e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=x,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;0<=a;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}var o=(i=i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc?null:i)?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n,r,a=this.tryEntries[e];if(a.tryLoc===t)return"throw"===(n=a.completion).type&&(r=n.arg,_(a)),r}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}i={name:"list",data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},modal1:!1,modal2:!1,formValidate:{status:"",page:1,limit:20,gid:0},taskData:{keyword:"",page:1,limit:20,status:""},total:0,taskTotal:0,tabList:[],taskTabList:[],columns1:[{key:"id",minWidth:35,title:"ID"},{slot:"image",minWidth:35,title:"背景图"},{key:"name",minWidth:35,title:"名称"},{key:"grade",minWidth:35,title:"等级"},{slot:"one_brokerage",minWidth:35,title:"一级上浮比例"},{slot:"one_brokerage_ratio",minWidth:35,title:"一级分佣比例(上浮后)"},{slot:"two_brokerage",minWidth:35,title:"二级上浮比例"},{slot:"two_brokerage_ratio",minWidth:35,title:"二级分佣比例(上浮后)"},{slot:"status",minWidth:35,title:"是否显示"},{minWidth:120,slot:"action",title:"操作"}],columns2:[{key:"id",minWidth:35,title:"ID"},{key:"name",minWidth:35,title:"名称"},{key:"type_name",minWidth:35,title:"任务类型"},{key:"number",minWidth:35,title:"限定数量"},{slot:"status",minWidth:35,title:"是否显示"},{key:"sort",minWidth:35,title:"排序"},{fixed:"right",minWidth:120,slot:"action",title:"操作"}],FromData:null,loading:!1,taskLoading:!1,titleType:"group",groupAll:[],theme3:"light",labelSort:[],sortName:null,current:0,model1:"",value1:""}},computed:Object(i.a)(Object(i.a)({},Object(o.d)("admin/layout",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),watch:{$route:function(t,e){this.$route.params.id}},mounted:function(){this.getList()},methods:{bindMenuItem:function(t,e){this.current=e,this.formValidate.gid=t.id,this.getListHeader(),this.getList()},getList:function(){var t=this;this.loading=!0,Object(s.g)(this.formValidate).then(function(){var e=Object(a.a)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.data,t.tabList=r.list,t.total=r.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},getTaskList:function(){var t=this;this.taskLoading=!0,Object(s.c)(this.taskData).then(function(){var e=Object(a.a)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.data,t.taskTabList=r.list,t.taskTotal=r.count,t.taskLoading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.taskLoading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},pageTaskChange:function(t){this.taskData.page=t,this.getList()},search:function(){this.formValidate.page=1,this.getList()},searchTask:function(){this.taskData.page=1,this.getTaskList()},groupAdd:function(){var t=this;this.$modalForm(Object(s.e)({},"/agent/level/create")).then((function(){return t.getList()}))},taskAdd:function(){var t=this;this.$modalForm(Object(s.a)({},"/agent/level_task/create?level_id="+this.taskData.id)).then((function(){return t.getTaskList()}))},onchangeIsShow:function(t){var e=this;Object(s.h)("agent/level/set_status/".concat(t.id,"/").concat(t.status)).then(function(){var t=Object(a.a)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$Message.success(n.msg),e.getList();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},onchangeTaskIsShow:function(t){var e=this;Object(s.d)("agent/level_task/set_status/".concat(t.id,"/").concat(t.status)).then(function(){var t=Object(a.a)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$Message.success(n.msg),e.getTaskList();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},addTask:function(t){this.id=t.id,this.modal2=!0,this.taskData.id=t.id,this.getTaskList()},edit:function(t){var e=this,n={gid:t.gid};this.$modalForm(Object(s.f)(n,"agent/level/".concat(t.id,"/edit"))).then((function(){return e.getList()}))},editTask:function(t){var e=this,n={gid:t.gid};this.$modalForm(Object(s.b)(n,"agent/level_task/".concat(t.id,"/edit"))).then((function(){return e.getTaskList()}))},del:function(t,e,n){var r=this;e={title:e,num:n,url:"agent/level/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){r.$Message.success(t.msg),r.tabList.splice(n,1)})).catch((function(t){r.$Message.error(t.msg)}))},delTask:function(t,e,n){var r=this;e={title:e,num:n,url:"agent/level_task/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){r.$Message.success(t.msg),r.taskTabList.splice(n,1)})).catch((function(t){r.$Message.error(t.msg)}))}}},n("4dd1"),o=n("2877"),n=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("div",{staticClass:"headers"},[n("div",{staticClass:"search"},[n("div",[n("span",[t._v("是否显示：")]),n("Select",{staticStyle:{width:"200px"},attrs:{clearable:""},model:{value:t.formValidate.status,callback:function(e){t.$set(t.formValidate,"status",e)},expression:"formValidate.status"}},[n("Option",{attrs:{value:1}},[t._v("显示")]),n("Option",{attrs:{value:0}},[t._v("不显示")])],1)],1),n("div",[n("span",[t._v("等级名称：")]),n("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入等级名称"},model:{value:t.formValidate.keyword,callback:function(e){t.$set(t.formValidate,"keyword",e)},expression:"formValidate.keyword"}})],1),n("Button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("搜索")]),n("Button",{staticClass:"ml20",attrs:{type:"success",icon:"md-add"},on:{click:function(e){return t.groupAdd()}}},[t._v("添加等级")])],1)]),n("Row",{attrs:{type:"flex"}},[n("Col",t._b({},"Col",t.grid,!1))],1),n("Table",{ref:"table",attrs:{columns:t.columns1,data:t.tabList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"image",fn:function(t){return t=t.row,[n("viewer",[n("div",{staticClass:"tabBox-img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"row.image"}]})])])]}},{key:"one_brokerage",fn:function(e){return e=e.row,[n("span",[t._v(t._s(e.one_brokerage)+"%")])]}},{key:"one_brokerage_ratio",fn:function(e){return e=e.row,[n("span",[t._v(t._s(e.one_brokerage_ratio)+"%")])]}},{key:"two_brokerage",fn:function(e){return e=e.row,[n("span",[t._v(t._s(e.two_brokerage)+"%")])]}},{key:"two_brokerage_ratio",fn:function(e){return e=e.row,[n("span",[t._v(t._s(e.two_brokerage_ratio)+"%")])]}},{key:"status",fn:function(e){var r=e.row;return[n("i-switch",{attrs:{value:r.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(r)}},model:{value:r.status,callback:function(e){t.$set(r,"status",e)},expression:"row.status"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var r=e.row,a=e.index;return[n("a",{on:{click:function(e){return t.addTask(r)}}},[t._v("等级任务")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.edit(r,"编辑")}}},[t._v("编辑")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.del(r,"删除这条信息",a)}}},[t._v("删除")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),n("div",{staticClass:"task-modal"},[n("Modal",{attrs:{title:"添加任务","footer-hide":"",width:"1000"},model:{value:t.modal2,callback:function(e){t.modal2=e},expression:"modal2"}},[n("div",{staticClass:"header"},[n("h4",[t._v("搜索条件")]),n("div",{staticClass:"search"},[n("div",[n("span",[t._v("是否显示：")]),n("Select",{staticStyle:{width:"200px"},attrs:{clearable:""},model:{value:t.taskData.status,callback:function(e){t.$set(t.taskData,"status",e)},expression:"taskData.status"}},[n("Option",{attrs:{value:1}},[t._v("显示")]),n("Option",{attrs:{value:0}},[t._v("不显示")])],1)],1),n("div",[n("span",[t._v("任务名称：")]),n("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入任务名称"},model:{value:t.taskData.keyword,callback:function(e){t.$set(t.taskData,"keyword",e)},expression:"taskData.keyword"}})],1),n("Button",{attrs:{type:"primary"},on:{click:t.searchTask}},[t._v("搜索")])],1)]),n("div",[n("div",{staticClass:"add-task"},[n("Button",{attrs:{type:"primary"},on:{click:function(e){return t.taskAdd()}}},[t._v("添加等级任务")])],1),n("div",[n("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns2,data:t.taskTabList,loading:t.taskLoading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"status",fn:function(e){var r=e.row;return[n("i-switch",{attrs:{value:r.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeTaskIsShow(r)}},model:{value:r.status,callback:function(e){t.$set(r,"status",e)},expression:"row.status"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])]}},{key:"action",fn:function(e){var r=e.row,a=e.index;return[n("a",{on:{click:function(e){return t.editTask(r,"编辑")}}},[t._v("编辑")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.delTask(r,"删除这条信息",a)}}},[t._v("删除")])]}}])})],1)])])],1)],1)}),[],!1,null,"55c28490",null),e.default=n.exports},"4dd1":function(t,e,n){"use strict";var r=n("871f");n.n(r).a},"871f":function(t,e,n){}}]);