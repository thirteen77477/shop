(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e658941c"],{"2c3e":function(e,t,r){var i=r("da84"),n=r("83ab"),o=r("9f7f").MISSED_STICKY,a=r("c6b6"),s=r("edd0"),c=r("69f3").get,p=RegExp.prototype,l=i.TypeError;n&&o&&s(p,"sticky",{configurable:!0,get:function(){if(this!==p){if("RegExp"===a(this))return!!c(this).sticky;throw l("Incompatible receiver, RegExp required")}}})},3757:function(e,t,r){},"4d63":function(e,t,r){var i=r("83ab"),n=r("da84"),o=r("e330"),a=r("94ca"),s=r("7156"),c=r("9112"),p=r("241c").f,l=r("3a9b"),u=r("44e7"),d=r("577e"),m=r("90d8"),v=r("9f7f"),f=r("aeb0"),h=r("cb2d"),x=r("d039"),g=r("1a2d"),y=r("69f3").enforce,_=r("2626"),w=r("b622"),b=r("fce3"),k=r("107c"),F=w("match"),C=n.RegExp,E=C.prototype,I=n.SyntaxError,T=o(E.exec),O=o("".charAt),L=o("".replace),j=o("".indexOf),N=o("".slice),$=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,P=/a/g,S=/a/g,R=(r=new C(P)!==P,v.MISSED_STICKY),D=v.UNSUPPORTED_Y;w=i&&(!r||R||b||k||x((function(){return S[F]=!1,C(P)!=P||C(S)==S||"/a/i"!=C(P,"i")})));if(a("RegExp",w)){function V(e,t){var r,i,n=l(E,this),o=u(e),a=void 0===t,p=[],v=e;if(!n&&o&&a&&e.constructor===V)return e;if((o||l(E,e))&&(e=e.source,a&&(t=m(v))),e=void 0===e?"":d(e),t=void 0===t?"":d(t),v=e,o=t=b&&"dotAll"in P&&(r=!!t&&-1<j(t,"s"))?L(t,/s/g,""):t,R&&"sticky"in P&&(i=!!t&&-1<j(t,"y"))&&D&&(t=L(t,/y/g,"")),k&&(e=(a=function(e){for(var t,r=e.length,i=0,n="",o=[],a={},s=!1,c=!1,p=0,l="";i<=r;i++){if("\\"===(t=O(e,i)))t+=O(e,++i);else if("]"===t)s=!1;else if(!s)switch(!0){case"["===t:s=!0;break;case"("===t:T($,N(e,i+1))&&(i+=2,c=!0),n+=t,p++;continue;case">"===t&&c:if(""===l||g(a,l))throw new I("Invalid capture group name");a[l]=!0,c=!(o[o.length]=[l,p]),l="";continue}c?l+=t:n+=t}return[n,o]}(e))[0],p=a[1]),a=s(C(e,t),n?this:E,V),(r||i||p.length)&&(t=y(a),r&&(t.dotAll=!0,t.raw=V(function(e){for(var t,r=e.length,i=0,n="",o=!1;i<=r;i++)"\\"===(t=O(e,i))?n+=t+O(e,++i):o||"."!==t?("["===t?o=!0:"]"===t&&(o=!1),n+=t):n+="[\\s\\S]";return n}(e),o)),i&&(t.sticky=!0),p.length&&(t.groups=p)),e!==v)try{c(a,"source",""===v?"(?:)":v)}catch(e){}return a}for(var G=p(C),Y=0;G.length>Y;)f(V,C,G[Y++]);(E.constructor=V).prototype=E,h(n,"RegExp",V,{constructor:!0})}_("RegExp")},"61f7":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return c})),r.d(t,"b",(function(){return p}));var i=r("fc11"),n=r("f3f3");function o(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var r,i,n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(r in n)new RegExp("(".concat(r,")")).test(t)&&(i=n[r]+"",t=t.replace(RegExp.$1,1===RegExp.$1.length?i:("00"+i).substr(i.length)));return t}r("ac1f"),r("00b4"),r("5319"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("498a"),r("d3b7"),r("b64b"),r("99af");var a={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};function s(e,t){e.message=function(e){return t.replace("%s",e||"")}}function c(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Object(n.a)({required:!0,message:e,type:"string"},t)}function p(e){return l.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,e)}s(c,"请输入%s"),s(p,"%s格式不正确");var l=Object.keys(a).reduce((function(e,t){return e[t]=function(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},a="range"===t?{min:e[0],max:e[1]}:Object(i.a)({},t,e);return Object(n.a)(Object(n.a)({message:r.replace(":".concat(t),"range"===t?"".concat(e[0],"-").concat(e[1]):e),type:"string"},a),o)},s(e[t],a[t]),e}),{})},"7d08":function(e,t,r){"use strict";var i=r("3757");r.n(i).a},afa3:function(e,t,r){e.exports=r.p+"system_static/img/line.05bf1c84.jpg"},c607:function(e,t,r){var i=r("da84"),n=r("83ab"),o=r("fce3"),a=r("c6b6"),s=r("edd0"),c=r("69f3").get,p=RegExp.prototype,l=i.TypeError;n&&o&&s(p,"dotAll",{configurable:!0,get:function(){if(this!==p){if("RegExp"===a(this))return!!c(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})},c7b8:function(e,t,r){"use strict";r.r(t);var i=[function(){var e=this.$createElement;e=this._self._c||e;return e("div",{staticClass:"line"},[e("img",{attrs:{src:r("afa3")}})])}],n=(r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("d9e2"),r("159b"),r("b0c0"),r("131a"),r("fb6a"),r("0122")),o=r("c964"),a=(r("d81d"),r("f8b7"),r("42e3")),s=r("61f7"),c=r("69ae"),p=r("161e");function l(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */l=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function p(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(t){p=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o,a,s,c;t=t&&t.prototype instanceof v?t:v,t=Object.create(t.prototype),n=new k(n||[]);return i(t,"_invoke",{value:(o=e,a=r,s=n,c="suspendedStart",function(e,t){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===e)throw t;return C()}for(s.method=e,s.arg=t;;){var r=s.delegate;if(r&&(r=function e(t,r){var i=r.method,n=t.iterator[i];return void 0===n?(r.delegate=null,"throw"===i&&t.iterator.return&&(r.method="return",r.arg=void 0,e(t,r),"throw"===r.method)||"return"!==i&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+i+"' method")),m):(i=d(n,t.iterator,r.arg),"throw"===i.type?(r.method="throw",r.arg=i.arg,r.delegate=null,m):(n=i.arg,n?n.done?(r[t.resultName]=n.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,m):n:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)))}(r,s),r)){if(r===m)continue;return r}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===c)throw c="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);if(c="executing",r=d(o,a,s),"normal"===r.type){if(c=s.done?"completed":"suspendedYield",r.arg===m)continue;return{value:r.arg,done:s.done}}"throw"===r.type&&(c="completed",s.method="throw",s.arg=r.arg)}})}),t}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var m={};function v(){}function f(){}function h(){}o={};var x=(p(o,a,(function(){return this})),Object.getPrototypeOf),g=(x=x&&x(x(F([]))),x&&x!==t&&r.call(x,a)&&(o=x),h.prototype=v.prototype=Object.create(o));function y(e){["next","throw","return"].forEach((function(t){p(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){var o;i(this,"_invoke",{value:function(i,a){function s(){return new t((function(o,s){!function i(o,a,s,c){var p;o=d(e[o],e,a);if("throw"!==o.type)return(a=(p=o.arg).value)&&"object"==Object(n.a)(a)&&r.call(a,"__await")?t.resolve(a.__await).then((function(e){i("next",e,s,c)}),(function(e){i("throw",e,s,c)})):t.resolve(a).then((function(e){p.value=e,s(p)}),(function(e){return i("throw",e,s,c)}));c(o.arg)}(i,a,o,s)}))}return o=o?o.then(s,s):s()}})}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function b(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function F(e){if(e){var t,i=e[a];if(i)return i.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return t=-1,(i=function i(){for(;++t<e.length;)if(r.call(e,t))return i.value=e[t],i.done=!1,i;return i.value=void 0,i.done=!0,i}).next=i}return{next:C}}function C(){return{value:void 0,done:!0}}return i(g,"constructor",{value:f.prototype=h,configurable:!0}),i(h,"constructor",{value:f,configurable:!0}),f.displayName=p(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){return e="function"==typeof e&&e.constructor,!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,p(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(_.prototype),p(_.prototype,s,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,i,n,o){void 0===o&&(o=Promise);var a=new _(u(t,r,i,n),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(g),p(g,c,"Generator"),p(g,a,(function(){return this})),p(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t,r=Object(e),i=[];for(t in r)i.push(t);return i.reverse(),function e(){for(;i.length;){var t=i.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},e.values=F,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function i(r,i){return a.type="throw",a.arg=e,t.next=r,i&&(t.method="next",t.arg=void 0),!!i}for(var n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;0<=i;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var a=(o=o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc?null:o)?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),b(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r,i,n=this.tryEntries[t];if(n.tryLoc===e)return"throw"===(r=n.completion).type&&(i=r.arg,b(n)),i}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:F(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}p={name:"GoodsDeliver",components:{vuePickers:r.n(p).a},props:{},data:function(){return{pickerVisible:!1,types:[{type:1,title:"发货"},{type:2,title:"送货"},{type:3,title:"无需发货"}],expressType:[{title:"手动填写",key:1},{title:"电子面单打印",key:2}],active:0,activeExpTpe:0,orderId:"",delivery:null,pickData:[],type:"1",result:{},expFrom:{type:1,delivery_name:"",delivery_id:"",delivery_code:"",express_record_type:1,express_temp_id:"",to_name:"",to_tel:"",to_addr:"",sh_delivery_name:"",sh_delivery_id:"",sh_delivery_uid:"",fictitious_content:""},expTemp:[],pickerVisibleName:!1,pickerVisibleExpTemp:!1,expTempData:[],tempName:"",tempImg:"",deliveryList:[]}},watch:{"$route.params.orderId":function(e){null!=e&&(this.orderId=e,this.getIndex())}},created:function(){},mounted:function(){this.orderId=this.$route.params.orderId,this.getIndex(),this.getLogistics()},methods:{showName:function(){this.pickerVisibleName=!0},getDelivery:function(){var e=this;Object(a.r)().then((function(t){var r=[];t.data.map((function(e){r.push({label:e.nickname,value:e.uid,phone:e.phone})})),e.deliveryList=[r],e.expFrom.sh_delivery_name=r[0].label,e.expFrom.sh_delivery_id=r[0].phone,e.expFrom.sh_delivery_uid=r[0].value,2===e.expFrom.express_record_type&&e.getTemp()}))},confirmName:function(e){this.expFrom.sh_delivery_name=e[0].label,this.expFrom.sh_delivery_id=e[0].phone,this.expFrom.sh_delivery_uid=e[0].value},orderDeliveryInfo:function(){var e=this;Object(a.m)().then((function(t){e.expFrom.to_name=t.data.to_name,e.expFrom.to_tel=t.data.to_tel,e.expFrom.to_addr=t.data.to_add}))},cancel:function(){},changeExpTpe:function(e,t){this.expFrom.express_record_type=e.key,this.activeExpTpe=t,2===e.key?(this.orderDeliveryInfo(),this.getTemp()):this.expTemp=[]},getTemp:function(){var e=this;Object(a.y)({com:this.expFrom.delivery_code}).then((function(t){e.expTemp=t.data.data;var r=[];e.expTemp.length&&(e.expTemp.map((function(e){r.push({label:e.title,value:e.temp_id,id:e.id,pic:e.pic,code:e.code})})),e.expTempData=[r],e.expFrom.express_temp_id=r[0].value,e.tempName=r[0].label,e.tempImg=r[0].pic)}))},confirmExpTemp:function(e){this.expFrom.express_temp_id=e[0].value,this.tempName=e[0].label,this.tempImg=e[0].pic},confirm:function(e){this.expFrom.delivery_name=e[0].label,this.expFrom.delivery_code=e[0].value,2===this.expFrom.express_record_type&&this.getTemp()},show:function(){this.pickerVisible=!0},showExpTemp:function(){this.pickerVisibleExpTemp=!0},changeType:function(e,t){this.active=t,this.expFrom.type=e.type,1===t&&this.getDelivery()},getIndex:function(){var e=this;Object(a.u)(this.$route.params.id).then((function(t){e.delivery=t.data})).catch((function(t){e.$dialog.error(t.msg)}))},getLogistics:function(){var e=this;Object(a.t)().then(function(){var t=Object(o.a)(l().mark((function t(r){var i;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=[],r.data.map((function(e){i.push({label:e.value,value:e.code,id:e.id})})),e.pickData=[i],e.expFrom.delivery_name=i[0].label,e.expFrom.delivery_code=i[0].value,2===e.expFrom.express_record_type&&e.getTemp();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},saveInfo:function(){var e=this;return Object(o.a)(l().mark((function t(){var r,i,n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=(r=e).type,n={},t.t0=i,t.next="1"===t.t0?4:"2"===t.t0?12:"3"===t.t0?24:26;break;case 4:if(1!==e.expFrom.type||r.expFrom.delivery_name){t.next=6;break}return t.abrupt("return",r.$dialog.error("请输入快递公司"));case 6:if(1!==e.expFrom.type||1!==e.expFrom.express_record_type||r.expFrom.delivery_id){t.next=8;break}return t.abrupt("return",r.$dialog.error("请输入快递单号"));case 8:if(1!==e.expFrom.type||r.expFrom.express_temp_id||2!==e.expFrom.express_record_type){t.next=10;break}return t.abrupt("return",r.$dialog.error("请选择电子面单"));case 10:return r.setInfo(r.expFrom),t.abrupt("break",26);case 12:return t.prev=12,t.next=15,e.$validator({expressId:[Object(s.c)(s.c.message("发货人姓名"))],expressCode:[Object(s.c)(s.c.message("发货人电话"))]}).validate({expressId:expressId,expressCode:expressCode});case 15:t.next=20;break;case 17:return t.prev=17,t.t1=t.catch(12),t.abrupt("return",Object(c.b)(t.t1));case 20:return n.expressId=expressId,n.expressCode=expressCode,r.setInfo(n),t.abrupt("break",26);case 24:return r.setInfo(n),t.abrupt("break",26);case 26:case"end":return t.stop()}}),t,null,[[12,17]])})))()},setInfo:function(e){var t=this;Object(a.q)(t.$route.params.id,e).then((function(e){t.$dialog.success("发送货成功"),t.$router.go(-1)}),(function(e){t.$dialog.error(e.msg)}))}}};var u=(r("7d08"),r("2877"));u=Object(u.a)(p,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.delivery?r("div",{staticClass:"deliver-goods"},[r("header",[r("div",{staticClass:"order-num acea-row row-between-wrapper"},[r("div",{staticClass:"num line1"},[e._v("订单号："+e._s(e.orderId))]),r("div",{staticClass:"name line1"},[r("span",{staticClass:"iconfontYI icon-yonghu2"}),e._v(e._s(e.delivery.userInfo?e.delivery.userInfo.nickname:"")+"\n      ")])]),r("div",{staticClass:"address"},[r("div",{staticClass:"name"},[e._v("\n        "+e._s(e.delivery.orderInfo.real_name)),r("span",{staticClass:"phone"},[e._v(e._s(e.delivery.orderInfo.phone))])]),r("div",[e._v(e._s(e.delivery.orderInfo.user_address))])]),e._m(0)]),r("div",{staticClass:"wrapper"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("发货方式")]),r("div",{staticClass:"mode acea-row row-middle row-right"},e._l(e.types,(function(t,i){return r("div",{key:i,staticClass:"goods",class:e.active===i?"on":"",on:{click:function(r){return e.changeType(t,i)}}},[e._v("\n          "+e._s(t.title)),r("span",{staticClass:"iconfontYI icon-xuanzhong2"})])})),0)]),0===e.active?r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("发货类型")]),r("div",{staticClass:"mode acea-row row-middle row-right"},e._l(e.expressType,(function(t,i){return r("div",{key:i,staticClass:"goods",class:e.activeExpTpe===i?"on":"",on:{click:function(r){return e.changeExpTpe(t,i)}}},[e._v("\n          "+e._s(t.title)),r("span",{staticClass:"iconfontYI icon-xuanzhong2"})])})),0)]):e._e(),0===e.active?r("div",{staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("快递公司")]),r("span",{staticClass:"checkName",domProps:{textContent:e._s(e.expFrom.delivery_name)},on:{click:e.show}}),r("vue-pickers",{attrs:{data:e.pickData,showToolbar:!0,maskClick:!0,defaultIndex:0,visible:e.pickerVisible},on:{cancel:e.cancel,confirm:e.confirm,"update:visible":function(t){e.pickerVisible=t}}})],1),1===e.expFrom.express_record_type?r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("快递单号")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.delivery_id,expression:"expFrom.delivery_id"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写快递单号"},domProps:{value:e.expFrom.delivery_id},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"delivery_id",t.target.value)}}})]):e._e(),1===e.expFrom.express_record_type?r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",{staticClass:"tip"},[e._v("顺丰请输入单号：收件人或寄件人手机号后四位,")]),r("div",{staticClass:"tip"},[e._v("例如：SF000000000000:3941")])]):e._e()]):e._e(),e.expTemp.length&&0===e.active?r("div",{staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("电子面单")]),r("div",{staticClass:"acea-row"},[r("span",{staticClass:"checkName",domProps:{textContent:e._s(e.expFrom.delivery_name)},on:{click:e.showExpTemp}}),r("vue-pickers",{attrs:{data:e.expTempData,showToolbar:!0,maskClick:!0,defaultIndex:0,visible:e.pickerVisibleExpTemp},on:{confirm:e.confirmExpTemp,"update:visible":function(t){e.pickerVisibleExpTemp=t}}}),r("div",{staticClass:"look"},[r("span",[e._v("预览")]),r("viewer",{ref:"viewer",staticClass:"viewer"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.tempImg,expression:"tempImg"}],staticClass:"image"})])],1)],1)])]):e._e(),2===e.expFrom.express_record_type&&0===e.active?r("div",{staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("寄件人姓名")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.to_name,expression:"expFrom.to_name"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写寄件人姓名"},domProps:{value:e.expFrom.to_name},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"to_name",t.target.value)}}})]),r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("寄件人电话")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.to_tel,expression:"expFrom.to_tel"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写寄件人电话"},domProps:{value:e.expFrom.to_tel},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"to_tel",t.target.value)}}})]),r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("寄件人地址")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.to_addr,expression:"expFrom.to_addr"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写寄件人地址"},domProps:{value:e.expFrom.to_addr},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"to_addr",t.target.value)}}})])]):e._e(),1===e.active?r("div",{staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("送货人")]),r("span",{staticClass:"checkName",domProps:{textContent:e._s(e.expFrom.sh_delivery_name)},on:{click:e.showName}}),r("vue-pickers",{attrs:{data:e.deliveryList,showToolbar:!0,maskClick:!0,defaultIndex:0,visible:e.pickerVisibleName},on:{confirm:e.confirmName,"update:visible":function(t){e.pickerVisibleName=t}}})],1),r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("送货人电话")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.sh_delivery_id,expression:"expFrom.sh_delivery_id"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写送货人电话"},domProps:{value:e.expFrom.sh_delivery_id},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"sh_delivery_id",t.target.value)}}})])]):e._e(),2===e.active?r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.fictitious_content,expression:"expFrom.fictitious_content"}],staticClass:"textarea",attrs:{placeholder:"备注",maxlength:500},domProps:{value:e.expFrom.fictitious_content},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"fictitious_content",t.target.value)}}}):e._e()]),r("div",{staticStyle:{height:"1.2rem"}}),r("div",{staticClass:"confirm",on:{click:e.saveInfo}},[e._v("确认提交")])]):e._e()}),i,!1,null,"485d2ab7",null);t.default=u.exports},edd0:function(e,t,r){var i=r("13d2"),n=r("9bf2");e.exports=function(e,t,r){return r.get&&i(r.get,t,{getter:!0}),r.set&&i(r.set,t,{setter:!0}),n.f(e,t,r)}}}]);