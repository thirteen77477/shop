(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-122363b0"],{"2c3e":function(t,e,n){var r=n("da84"),i=n("83ab"),o=n("9f7f").MISSED_STICKY,a=n("c6b6"),c=n("edd0"),s=n("69f3").get,u=RegExp.prototype,l=r.TypeError;i&&o&&c(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===a(this))return!!s(this).sticky;throw l("Incompatible receiver, RegExp required")}}})},"2dfa":function(t,e,n){"use strict";var r=n("ba91");n.n(r).a},"4d63":function(t,e,n){var r=n("83ab"),i=n("da84"),o=n("e330"),a=n("94ca"),c=n("7156"),s=n("9112"),u=n("241c").f,l=n("3a9b"),d=n("44e7"),f=n("577e"),h=n("90d8"),g=n("9f7f"),p=n("aeb0"),m=n("cb2d"),v=n("d039"),y=n("1a2d"),b=n("69f3").enforce,w=n("2626"),x=n("b622"),_=n("fce3"),k=n("107c"),O=x("match"),j=i.RegExp,E=j.prototype,L=i.SyntaxError,C=o(E.exec),R=o("".charAt),S=o("".replace),D=o("".indexOf),I=o("".slice),M=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,P=/a/g,$=/a/g,N=(n=new j(P)!==P,g.MISSED_STICKY),V=g.UNSUPPORTED_Y;x=r&&(!n||N||_||k||v((function(){return $[O]=!1,j(P)!=P||j($)==$||"/a/i"!=j(P,"i")})));if(a("RegExp",x)){function T(t,e){var n,r,i=l(E,this),o=d(t),a=void 0===e,u=[],g=t;if(!i&&o&&a&&t.constructor===T)return t;if((o||l(E,t))&&(t=t.source,a&&(e=h(g))),t=void 0===t?"":f(t),e=void 0===e?"":f(e),g=t,o=e=_&&"dotAll"in P&&(n=!!e&&-1<D(e,"s"))?S(e,/s/g,""):e,N&&"sticky"in P&&(r=!!e&&-1<D(e,"y"))&&V&&(e=S(e,/y/g,"")),k&&(t=(a=function(t){for(var e,n=t.length,r=0,i="",o=[],a={},c=!1,s=!1,u=0,l="";r<=n;r++){if("\\"===(e=R(t,r)))e+=R(t,++r);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:C(M,I(t,r+1))&&(r+=2,s=!0),i+=e,u++;continue;case">"===e&&s:if(""===l||y(a,l))throw new L("Invalid capture group name");a[l]=!0,s=!(o[o.length]=[l,u]),l="";continue}s?l+=e:i+=e}return[i,o]}(t))[0],u=a[1]),a=c(j(t,e),i?this:E,T),(n||r||u.length)&&(e=b(a),n&&(e.dotAll=!0,e.raw=T(function(t){for(var e,n=t.length,r=0,i="",o=!1;r<=n;r++)"\\"===(e=R(t,r))?i+=e+R(t,++r):o||"."!==e?("["===e?o=!0:"]"===e&&(o=!1),i+=e):i+="[\\s\\S]";return i}(t),o)),r&&(e.sticky=!0),u.length&&(e.groups=u)),t!==g)try{s(a,"source",""===g?"(?:)":g)}catch(t){}return a}for(var W=u(j),z=0;W.length>z;)p(T,j,W[z++]);(E.constructor=T).prototype=E,m(i,"RegExp",T,{constructor:!0})}w("RegExp")},"61f7":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return u}));var r=n("fc11"),i=n("f3f3");function o(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n,r,i={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(n in i)new RegExp("(".concat(n,")")).test(e)&&(r=i[n]+"",e=e.replace(RegExp.$1,1===RegExp.$1.length?r:("00"+r).substr(r.length)));return e}n("ac1f"),n("00b4"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("498a"),n("d3b7"),n("b64b"),n("99af");var a={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};function c(t,e){t.message=function(t){return e.replace("%s",t||"")}}function s(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)({required:!0,message:t,type:"string"},e)}function u(t){return l.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}c(s,"请输入%s"),c(u,"%s格式不正确");var l=Object.keys(a).reduce((function(t,e){return t[e]=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},a="range"===e?{min:t[0],max:t[1]}:Object(r.a)({},e,t);return Object(i.a)(Object(i.a)({message:n.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},a),o)},c(t[e],a[e]),t}),{})},aa0e:function(t,e,n){"use strict";n.r(e),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("159b"),n("b0c0"),n("131a"),n("fb6a");var r=n("0122"),i=n("c964"),o=n("f3f3"),a=(n("a434"),n("2f62")),c=n("bbbc"),s=n("61f7");function u(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */u=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(e){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o,a,c,s;e=e&&e.prototype instanceof g?e:g,e=Object.create(e.prototype),r=new k(r||[]);return i(e,"_invoke",{value:(o=t,a=n,c=r,s="suspendedStart",function(t,e){if("executing"===s)throw new Error("Generator is already running");if("completed"===s){if("throw"===t)throw e;return j()}for(c.method=t,c.arg=e;;){var n=c.delegate;if(n&&(n=function t(e,n){var r=n.method,i=e.iterator[r];return void 0===i?(n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=void 0,t(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h):(r=f(i,e.iterator,n.arg),"throw"===r.type?(n.method="throw",n.arg=r.arg,n.delegate=null,h):(i=r.arg,i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)))}(n,c),n)){if(n===h)continue;return n}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if("suspendedStart"===s)throw s="completed",c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);if(s="executing",n=f(o,a,c),"normal"===n.type){if(s=c.done?"completed":"suspendedYield",n.arg===h)continue;return{value:n.arg,done:c.done}}"throw"===n.type&&(s="completed",c.method="throw",c.arg=n.arg)}})}),e}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var h={};function g(){}function p(){}function m(){}o={};var v=(l(o,a,(function(){return this})),Object.getPrototypeOf),y=(v=v&&v(v(O([]))),v&&v!==e&&n.call(v,a)&&(o=v),m.prototype=g.prototype=Object.create(o));function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;i(this,"_invoke",{value:function(i,a){function c(){return new e((function(o,c){!function i(o,a,c,s){var u;o=f(t[o],t,a);if("throw"!==o.type)return(a=(u=o.arg).value)&&"object"==Object(r.a)(a)&&n.call(a,"__await")?e.resolve(a.__await).then((function(t){i("next",t,c,s)}),(function(t){i("throw",t,c,s)})):e.resolve(a).then((function(t){u.value=t,c(u)}),(function(t){return i("throw",t,c,s)}));s(o.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}})}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e,r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(r=function r(){for(;++e<t.length;)if(n.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r}).next=r}return{next:j}}function j(){return{value:void 0,done:!0}}return i(y,"constructor",{value:p.prototype=m,configurable:!0}),i(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){return t="function"==typeof t&&t.constructor,!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new w(d(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(y),l(y,s,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,n=Object(t),r=[];for(e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;0<=i;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}var a=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n,r,i=this.tryEntries[e];if(i.tryLoc===t)return"throw"===(n=i.completion).type&&(r=n.arg,_(i)),r}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}o={name:"agent_extra",data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},total:0,total2:0,userLists:[],formInline:{uid:0,proportion:0,image:""},columns2:[{title:"用户UID",key:"uid",width:80},{title:"头像",slot:"avatars",minWidth:60},{title:"姓名",slot:"nickname",minWidth:150},{title:"分销比例",slot:"division_percent",minWidth:100}],columns:[{title:"用户UID",key:"uid",width:80},{title:"头像",slot:"avatars",minWidth:60},{title:"姓名",slot:"nickname",minWidth:150},{title:"分销比例",slot:"division_percent",minWidth:100},{title:"员工数量",key:"agent_count",minWidth:100},{title:"订单数量",key:"order_count",minWidth:100},{title:"截止时间",slot:"division_end_time",minWidth:100},{title:"状态",slot:"status",minWidth:100},{title:"操作",slot:"action",fixed:"right",minWidth:120}],FromData:null,loading:!1,current:0,formValidate:{page:1,limit:15,keyword:""},staffModal:!1,clerkReqData:{uid:0,page:1,limit:15},clerkLists:[]}},filters:{formatDate:function(t){if(0!==t)return t=new Date(1e3*t),Object(s.a)(t,"yyyy-MM-dd hh:mm")}},computed:Object(o.a)(Object(o.a)({},Object(a.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){this.getList()},methods:{userSearchs:function(){this.formValidate.page=1,this.getList()},jump:function(t){this.clerkReqData.uid=t,this.getClerkList()},getClerkList:function(){var t=this;this.clerkReqData.division_type=3,Object(c.d)(this.clerkReqData).then((function(e){t.clerkLists=e.data.list,t.total2=e.data.count,t.staffModal=!0}))},getList:function(){var t=this;this.loading=!0,this.formValidate.division_type=2,Object(c.l)(this.formValidate).then(function(){var e=Object(i.a)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.data,t.userLists=r.list,t.total=r.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},clerkPageChange:function(){this.clerkReqData.page=index,this.getClerkList()},groupAdd:function(t){var e=this;this.$modalForm(Object(c.a)(t)).then((function(t){e.getList()})).catch((function(t){}))},onchangeIsShow:function(t){var e=this;t={id:t.uid,status:t.division_status};Object(c.g)(t).then(function(){var t=Object(i.a)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$Message.success(n.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},edit:function(t){},del:function(t,e,n){var r=this;e={title:e,method:"DELETE",uid:t.uid,url:"agent/division/del/2/".concat(t.uid)};this.$modalSure(e).then((function(t){r.$Message.success(t.msg),r.userLists.splice(n,1)})).catch((function(t){r.$Message.error(t.msg)}))}}},n("2dfa"),a=n("2877"),n=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[n("Row",{attrs:{type:"flex",gutter:24,align:"middle"}},[n("Col",t._b({},"Col",t.grid,!1),[n("FormItem",{attrs:{label:"搜索：","label-for":"status"}},[n("Input",{staticStyle:{width:"300px"},attrs:{search:"","enter-button":"",placeholder:"请输入姓名、UID"},on:{"on-search":t.userSearchs},model:{value:t.formValidate.keyword,callback:function(e){t.$set(t.formValidate,"keyword",e)},expression:"formValidate.keyword"}})],1)],1)],1)],1)],1),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Row",{staticClass:"ivu-mt box-wrapper"},[n("Col",{ref:"rightBox",attrs:{xs:24,sm:24}},[n("Row",{attrs:{type:"flex"}},[n("Col",t._b({},"Col",t.grid,!1),[n("Button",{staticClass:"mr20",attrs:{type:"primary"},on:{click:function(e){return t.groupAdd("0")}}},[t._v("添加代理商")])],1)],1),n("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns,data:t.userLists,loading:t.loading,"highlight-row":"","no-formValidate-text":"暂无数据","no-filtered-formValidate-text":"暂无筛选结果"},scopedSlots:t._u([{key:"avatars",fn:function(t){var e=t.row;return t.index,[n("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"row.avatar"}]})])]}},{key:"nickname",fn:function(e){var r=e.row;return e.index,[n("div",{staticClass:"acea-row"},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:"男"===r.sex,expression:"row.sex === '男'"}],staticClass:"mr5",attrs:{type:"md-male",color:"#2db7f5",size:"15"}}),n("Icon",{directives:[{name:"show",rawName:"v-show",value:"女"===r.sex,expression:"row.sex === '女'"}],staticClass:"mr5",attrs:{type:"md-female",color:"#ed4014",size:"15"}}),n("div",{domProps:{textContent:t._s(r.nickname)}})],1)]}},{key:"status",fn:function(e){var r=e.row;return e.index,[n("i-switch",{attrs:{value:r.division_status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(r)}},model:{value:r.division_status,callback:function(e){t.$set(r,"division_status",e)},expression:"row.division_status"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"division_end_time",fn:function(e){var r=e.row;return e.index,[n("span",[t._v(" "+t._s(r.division_end_time))])]}},{key:"division_percent",fn:function(e){var r=e.row;return e.index,[n("span",[t._v(" "+t._s(r.division_percent)+"%")])]}},{key:"action",fn:function(e){var r=e.row,i=e.index;return[n("a",{on:{click:function(e){return t.jump(r.uid)}}},[t._v("查看员工")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.groupAdd(r.uid)}}},[t._v("编辑")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.del(r,"删除代理商",i)}}},[t._v("删除")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1)],1)],1),n("Modal",{staticClass:"order_box",attrs:{scrollable:"",title:"员工列表",width:"800","footer-hide":""},model:{value:t.staffModal,callback:function(e){t.staffModal=e},expression:"staffModal"}},[n("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns2,data:t.clerkLists,loading:t.loading,"highlight-row":"","no-formValidate-text":"暂无数据","no-filtered-formValidate-text":"暂无筛选结果"},scopedSlots:t._u([{key:"avatars",fn:function(t){var e=t.row;return t.index,[n("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"row.avatar"}]})])]}},{key:"nickname",fn:function(e){var r=e.row;return e.index,[n("div",{staticClass:"acea-row"},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:"男"===r.sex,expression:"row.sex === '男'"}],staticClass:"mr5",attrs:{type:"md-male",color:"#2db7f5",size:"15"}}),n("Icon",{directives:[{name:"show",rawName:"v-show",value:"女"===r.sex,expression:"row.sex === '女'"}],staticClass:"mr5",attrs:{type:"md-female",color:"#ed4014",size:"15"}}),n("div",{domProps:{textContent:t._s(r.nickname)}})],1)]}},{key:"agent_end_time",fn:function(e){var r=e.row;return e.index,[n("span",[t._v(" "+t._s(t._f("formatDate")(r.agent_end_time)))])]}},{key:"division_percent",fn:function(e){var r=e.row;return e.index,[n("span",[t._v(" "+t._s(r.division_percent)+"%")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total2,current:t.clerkReqData.page,"show-elevator":"","show-total":"","page-size":t.clerkReqData.limit},on:{"on-change":t.clerkPageChange}})],1)],1)],1)}),[],!1,null,"4b6307c2",null),e.default=n.exports},ba91:function(t,e,n){},bbbc:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"n",(function(){return a})),n.d(e,"m",(function(){return c})),n.d(e,"h",(function(){return s})),n.d(e,"j",(function(){return u})),n.d(e,"i",(function(){return l})),n.d(e,"o",(function(){return d})),n.d(e,"l",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"a",(function(){return g})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return m})),n.d(e,"d",(function(){return v})),n.d(e,"g",(function(){return y})),n("99af");var r=n("6b6c");function i(t){return Object(r.a)({url:"agent/index",method:"get",params:t})}function o(t){return Object(r.a)({url:"agent/spread",method:"PUT",data:t})}function a(t){return Object(r.a)({url:"agent/statistics",method:"get",params:t})}function c(t,e){return Object(r.a)({url:t,method:"get",params:e})}function s(t){return Object(r.a)({url:"agent/look_code",method:"get",params:t})}function u(t){return Object(r.a)({url:"agent/look_xcx_code",method:"get",params:t})}function l(t){return Object(r.a)({url:"agent/look_h5_code",method:"get",params:t})}function d(t){return Object(r.a)({url:"export/userAgent",method:"get",params:t})}function f(t){return Object(r.a)({url:"agent/division/list",method:"get",params:t})}function h(t){return Object(r.a)({url:"agent/division/agent_apply/list",method:"get",params:t})}function g(t){return Object(r.a)({url:"agent/division/agent/create/".concat(t),method:"get"})}function p(t,e){return Object(r.a)({url:"agent/division/examine_apply/".concat(t,"/").concat(e),method:"get"})}function m(t){return Object(r.a)({url:"agent/division/create/".concat(t),method:"get"})}function v(t){return Object(r.a)({url:"agent/division/down_list",method:"get",params:t})}function y(t){return Object(r.a)({url:"agent/division/set_status/".concat(t.status,"/").concat(t.id),method:"put"})}},c607:function(t,e,n){var r=n("da84"),i=n("83ab"),o=n("fce3"),a=n("c6b6"),c=n("edd0"),s=n("69f3").get,u=RegExp.prototype,l=r.TypeError;i&&o&&c(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===a(this))return!!s(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})},edd0:function(t,e,n){var r=n("13d2"),i=n("9bf2");t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}}}]);