(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_pwd_edit-index"],{"06e4":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-view",{staticClass:"ChangePassword"},[n("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.editPwd.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"phone"},[t._v(t._s(t.$t("当前手机号"))+"："+t._s(t.phone))]),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-input",{attrs:{type:"password",placeholder:t.$t("设置新密码"),"placeholder-class":"placeholder",name:"password",value:t.password}})],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-input",{attrs:{type:"password",placeholder:t.$t("确认新密码"),"placeholder-class":"placeholder",name:"qr_password",value:t.qr_password}})],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-input",{staticClass:"codeIput",attrs:{type:"number",placeholder:t.$t("填写验证码"),"placeholder-class":"placeholder",name:"captcha",value:t.captcha}}),n("v-uni-button",{staticClass:"code font-num",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)],1),n("v-uni-button",{staticClass:"confirmBnt bg-color",attrs:{"form-type":"submit"}},[t._v(t._s(t.$t("确认修改")))])],1)],1),n("Verify",{ref:"verify",attrs:{captchaType:"blockPuzzle",imgSize:{width:"330px",height:"155px"}},on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.success.apply(void 0,arguments)}}})],1)},i=[]},1421:function(t,e,n){var a=n("a445");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("47fe43be",a,!0,{sourceMap:!1,shadowMode:!1})},"179a":function(t,e,n){"use strict";var a=n("1421"),i=n.n(a);i.a},"4f71":function(t,e,n){"use strict";n.r(e);var a=n("50e4"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"50e4":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("c7eb")),s=a(n("1da1")),o=a(n("3de7")),r=n("d322"),u=n("8ba8"),c=n("666f"),d=n("26cb"),l=a(n("66ca")),f=a(n("233b")),p={mixins:[o.default,l.default],components:{Verify:f.default},data:function(){return{userInfo:{},phone:"",password:"",captcha:"",qr_password:"",isAuto:!1,isShowAuth:!1,key:""}},computed:(0,d.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getUserInfo()},deep:!0}},onLoad:function(){var t=this;this.isLogin?(this.getUserInfo(),(0,r.verifyCode)().then((function(e){t.$set(t,"key",e.data.key)}))):(0,c.toLogin)()},methods:{onLoadFun:function(t){this.getUserInfo()},authColse:function(t){this.isShowAuth=t},getUserInfo:function(){var t=this;(0,u.getUserInfo)().then((function(e){var n=e.data.phone,a=n.substr(0,3)+"****"+n.substr(7);t.$set(t,"userInfo",e.data),t.phone=a}))},code:function(){var t=this;return(0,s.default)((0,i.default)().mark((function e(){var n;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.userInfo.phone){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:n.$t("手机号码不存在,无法发送验证码！")}));case 3:t.$refs.verify.show();case 4:case"end":return e.stop()}}),e)})))()},success:function(t){var e=this;return(0,s.default)((0,i.default)().mark((function n(){var a;return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e,e.$refs.verify.hide(),n.next=4,(0,u.registerVerify)({phone:a.userInfo.phone,type:"reset",key:a.key,captchaType:"blockPuzzle",captchaVerification:t.captchaVerification}).then((function(t){e.sendCode(),a.$util.Tips({title:t.msg})})).catch((function(t){return a.$util.Tips({title:t})}));case 4:case"end":return n.stop()}}),n)})))()},editPwd:function(t){var e=this,n=t.detail.value.password,a=t.detail.value.qr_password,i=t.detail.value.captcha;return n?a!=n?e.$util.Tips({title:e.$t("两次输入的密码不一致！")}):i?void(0,r.phoneRegisterReset)({account:e.userInfo.phone,captcha:i,password:n}).then((function(t){return e.$util.Tips({title:t.msg},{tab:3,url:1})})).catch((function(t){return e.$util.Tips({title:t})})):e.$util.Tips({title:e.$t("请输入验证码")}):e.$util.Tips({title:e.$t("请输入新密码")})}}};e.default=p},5595:function(t,e,n){"use strict";n.r(e);var a=n("06e4"),i=n("4f71");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("179a");var o=n("f0c5"),r=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"6bd8bf80",null,!1,a["a"],void 0);e["default"]=r.exports},a445:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-6bd8bf80]{background-color:#fff!important}body.?%PAGE?%[data-v-6bd8bf80]{background-color:#fff!important}.ChangePassword .phone[data-v-6bd8bf80]{font-size:%?32?%;font-weight:700;text-align:center;margin-top:%?55?%}.ChangePassword .list[data-v-6bd8bf80]{width:%?580?%;margin:%?53?% auto 0 auto}.ChangePassword .list .item[data-v-6bd8bf80]{width:100%;height:%?110?%;border-bottom:%?2?% solid #f0f0f0}.ChangePassword .list .item uni-input[data-v-6bd8bf80]{width:100%;height:100%;font-size:%?32?%}.ChangePassword .list .item .placeholder[data-v-6bd8bf80]{color:#b9b9bc}.ChangePassword .list .item uni-input.codeIput[data-v-6bd8bf80]{width:%?340?%}.ChangePassword .list .item .code[data-v-6bd8bf80]{font-size:%?32?%;background-color:#fff}.ChangePassword .list .item .code.on[data-v-6bd8bf80]{color:#b9b9bc!important}.ChangePassword .confirmBnt[data-v-6bd8bf80]{font-size:%?32?%;width:%?580?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?92?% auto 0 auto;text-align:center;line-height:%?90?%}',""]),t.exports=e}}]);