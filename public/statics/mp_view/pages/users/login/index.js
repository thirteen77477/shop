require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/login/index"],{"067d":function(t,e,n){"use strict";n.r(e);var i=n("2ab9"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"1ab5":function(t,e,n){},"1e04":function(t,e,n){"use strict";var i=n("86ca"),r=n.n(i);r.a},"2ab9":function(t,e,n){"use strict";(function(t){var i=n("4ea4"),r=n("7037");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2eee")),o=i(n("c973")),c=(i(n("78e3")),i(n("3de7"))),u=n("8ba8"),s=(function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var n=f(e);if(n&&n.has(t))return n.get(t);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var c=a?Object.getOwnPropertyDescriptor(t,o):null;c&&(c.get||c.set)?Object.defineProperty(i,o,c):i[o]=t[o]}i.default=t,n&&n.set(t,i)}(n("e056")),n("a9a5")),l=n("94de"),p=i(n("66ca"));function f(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(f=function(t){return t?n:e})(t)}var d="login_back_url",h={name:"Login",components:{Verify:function(){n.e("pages/users/components/verify/index").then(function(){return resolve(n("233b"))}.bind(null,n)).catch(n.oe)}},mixins:[c.default,p.default],data:function(){return{copyRight:"",inAnimation:!1,protocol:!1,navList:[this.$t("快速登录"),this.$t("账号登录")],current:1,account:"",password:"",captcha:"",formItem:1,type:"login",logoUrl:"",keyCode:"",codeUrl:"",codeVal:"",isShowCode:!1,appLoginStatus:!1,appUserInfo:null,appleLoginStatus:!1,appleUserInfo:null,appleShow:!1,keyLock:!0}},watch:{formItem:function(t,e){this.type=1==t?"login":"register"}},onLoad:function(){var e=this,n=this;t.getSystemInfo({success:function(t){"ios"==t.platform.toLowerCase()&&e.getSystem(t.system)&&(n.appleShow=!0)}}),t.getStorageSync("copyRight").copyrightContext&&(this.copyRight=t.getStorageSync("copyRight").copyrightContext)},mounted:function(){this.getLogoImage()},methods:{ChangeIsDefault:function(t){this.$set(this,"protocol",!this.protocol)},privacy:function(e){t.navigateTo({url:"/pages/users/privacy/index?type="+e})},getSystem:function(t){var e;return e=-1===t.toLowerCase().indexOf("ios")?t:t.split(" ")[1],e.indexOf(".")?e.split(".")[0]>=13:e>=13},appleLogin:function(){var e=this;if(this.account="",this.captcha="",!e.protocol)return this.inAnimation=!0,e.$util.Tips({title:"请先阅读并同意协议"});t.showLoading({title:this.$t("登录中")}),t.login({provider:"apple",timeout:1e4,success:function(n){t.getUserInfo({provider:"apple",success:function(t){e.appleUserInfo=t.userInfo,e.appleLoginApi()},fail:function(){t.showToast({title:e.$t("获取用户信息失败"),icon:"none",duration:2e3})},complete:function(){t.hideLoading()}})},fail:function(t){}})},appleLoginApi:function(){var e=this;(0,u.appleLogin)({openId:e.appleUserInfo.openId,email:e.appleUserInfo.email||"",phone:this.account,captcha:this.captcha}).then((function(n){var i=n.data;if(i.isbind)t.showModal({title:e.$t("提示"),content:e.$t("请绑定手机号后，继续操作"),showCancel:!1,success:function(t){t.confirm&&(e.current=1,e.appleLoginStatus=!0)}});else{e.$store.commit("LOGIN",{token:i.token,time:i.expires_time-e.$Cache.time()});var r=e.$Cache.get(d)||"/pages/index/index";e.$Cache.clear(d),e.$store.commit("SETUID",i.userInfo.uid),t.reLaunch({url:r})}})).catch((function(n){t.showModal({title:e.$t("提示"),content:e.$t("错误信息")+"".concat(n),success:function(t){t.confirm||t.cancel}})}))},wxLogin:function(){var e=this;if(this.account="",this.captcha="",!e.protocol)return this.inAnimation=!0,e.$util.Tips({title:"请先阅读并同意协议"});t.showLoading({title:e.$t("登录中")}),t.login({provider:"weixin",success:function(n){t.getUserInfo({provider:"weixin",success:function(t){e.appUserInfo=t.userInfo,e.wxLoginApi()},fail:function(){t.showToast({title:e.$t("获取用户信息失败"),icon:"none",duration:2e3})},complete:function(){t.hideLoading()}})},fail:function(){t.showToast({title:e.$t("登录失败"),icon:"none",duration:2e3})}})},wxLoginApi:function(){var e=this;wechatAppAuth({userInfo:e.appUserInfo,phone:this.account,code:this.captcha}).then((function(n){var i=n.data;if(i.isbind)t.showModal({title:e.$t("提示"),content:e.$t("请绑定手机号后，继续操作"),showCancel:!1,success:function(t){t.confirm&&(e.current=1,e.appLoginStatus=!0)}});else{e.$store.commit("LOGIN",{token:i.token,time:i.expires_time-e.$Cache.time()});var r=e.$Cache.get(d)||"/pages/index/index";e.$Cache.clear(d),e.$store.commit("SETUID",i.userInfo.uid),t.reLaunch({url:r})}})).catch((function(n){t.showModal({title:e.$t("提示"),content:e.$t("错误信息")+"".concat(n),success:function(t){t.confirm||t.cancel}})}))},again:function(){this.codeUrl=l.VUE_APP_API_URL+"/sms_captcha?key="+this.keyCode+Date.parse(new Date)},success:function(t){var e=this;this.$refs.verify.hide(),(0,u.getCodeApi)().then((function(n){e.keyCode=n.data.key,e.getCode(t)})).catch((function(t){e.$util.Tips({title:t})}))},code:function(){return this.protocol?this.account?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.account)?void this.$refs.verify.show():this.$util.Tips({title:this.$t("请输入正确的手机号码")}):this.$util.Tips({title:this.$t("请填写手机号码")}):(this.inAnimation=!0,this.$util.Tips({title:"请先阅读并同意协议"}))},getLogoImage:function(){var t=this;return(0,o.default)(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t,(0,s.getLogo)(2).then((function(t){n.logoUrl=t.data.logo_url}));case 2:case"end":return e.stop()}}),e)})))()},loginMobile:function(){var e=this;return(0,o.default)(a.default.mark((function n(){var i;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e,i.protocol){n.next=4;break}return e.inAnimation=!0,n.abrupt("return",i.$util.Tips({title:"请先阅读并同意协议"}));case 4:if(i.account){n.next=6;break}return n.abrupt("return",i.$util.Tips({title:i.$t("请填写手机号码")}));case 6:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(i.account)){n.next=8;break}return n.abrupt("return",i.$util.Tips({title:i.$t("请输入正确的手机号码")}));case 8:if(i.captcha){n.next=10;break}return n.abrupt("return",i.$util.Tips({title:i.$t("请填写验证码")}));case 10:if(/^[\w\d]+$/i.test(i.captcha)){n.next=12;break}return n.abrupt("return",i.$util.Tips({title:i.$t("请输入正确的验证码")}));case 12:if(!i.appLoginStatus){n.next=16;break}i.wxLoginApi(),n.next=26;break;case 16:if(!i.appleLoginStatus){n.next=20;break}i.appleLoginApi(),n.next=26;break;case 20:if(!e.keyLock){n.next=24;break}e.keyLock=!e.keyLock,n.next=25;break;case 24:return n.abrupt("return",i.$util.Tips({title:i.$t("请勿重复点击")}));case 25:(0,u.loginMobile)({phone:i.account,captcha:i.captcha,spread:i.$Cache.get("spread")}).then((function(n){var r=n.data;i.$store.commit("LOGIN",{token:r.token,time:r.expires_time-e.$Cache.time()});var a=i.$Cache.get(d)||"/pages/index/index";i.$Cache.clear(d),(0,u.getUserInfo)().then((function(n){e.keyLock=!0,i.$store.commit("SETUID",n.data.uid),-1!==a.indexOf("/pages/users/login/index")&&(a="/pages/index/index"),t.reLaunch({url:a})}))})).catch((function(t){e.keyLock=!0,i.$util.Tips({title:t})}));case 26:case"end":return n.stop()}}),n)})))()},register:function(){var t=this;return(0,o.default)(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.protocol){e.next=4;break}return t.inAnimation=!0,e.abrupt("return",n.$util.Tips({title:"请先阅读并同意协议"}));case 4:if(n.account){e.next=6;break}return e.abrupt("return",n.$util.Tips({title:n.$t("请填写手机号码")}));case 6:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=8;break}return e.abrupt("return",n.$util.Tips({title:n.$t("请输入正确的手机号码")}));case 8:if(n.captcha){e.next=10;break}return e.abrupt("return",n.$util.Tips({title:n.$t("请填写验证码")}));case 10:if(/^[\w\d]+$/i.test(n.captcha)){e.next=12;break}return e.abrupt("return",n.$util.Tips({title:n.$t("请输入正确的验证码")}));case 12:if(n.password){e.next=14;break}return e.abrupt("return",n.$util.Tips({title:n.$t("请填写密码")}));case 14:if(!/^([0-9]|[a-z]|[A-Z]){0,6}$/i.test(n.password)){e.next=16;break}return e.abrupt("return",n.$util.Tips({title:n.$t("您输入的密码过于简单")}));case 16:(0,u.register)({account:n.account,captcha:n.captcha,password:n.password,spread:n.$Cache.get("spread")}).then((function(t){n.$util.Tips({title:t}),n.formItem=1})).catch((function(t){n.$util.Tips({title:t})}));case 17:case"end":return e.stop()}}),e)})))()},getCode:function(t){var e=this;return(0,o.default)(a.default.mark((function n(){var i;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e,i.protocol){n.next=4;break}return e.inAnimation=!0,n.abrupt("return",i.$util.Tips({title:"请先阅读并同意协议"}));case 4:if(i.account){n.next=6;break}return n.abrupt("return",i.$util.Tips({title:i.$t("请填写手机号码")}));case 6:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(i.account)){n.next=8;break}return n.abrupt("return",i.$util.Tips({title:i.$t("请输入正确的手机号码")}));case 8:return 2==i.formItem&&(i.type="register"),n.next=11,(0,u.registerVerify)({phone:i.account,type:i.type,key:i.keyCode,captchaType:"blockPuzzle",captchaVerification:t.captchaVerification}).then((function(t){e.sendCode(),i.$util.Tips({title:t.msg})})).catch((function(t){i.$util.Tips({title:t})}));case 11:case"end":return n.stop()}}),n)})))()},navTap:function(t){this.current=t},submit:function(){var e=this;return(0,o.default)(a.default.mark((function n(){var i;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e,i.protocol){n.next=4;break}return e.inAnimation=!0,n.abrupt("return",i.$util.Tips({title:"请先阅读并同意协议"}));case 4:if(i.account){n.next=6;break}return n.abrupt("return",i.$util.Tips({title:i.$t("请填写账号")}));case 6:if(/^[\w\d]{5,16}$/i.test(i.account)){n.next=8;break}return n.abrupt("return",i.$util.Tips({title:i.$t("请输入正确的账号")}));case 8:if(i.password){n.next=10;break}return n.abrupt("return",i.$util.Tips({title:i.$t("请填写密码")}));case 10:if(!e.keyLock){n.next=14;break}e.keyLock=!e.keyLock,n.next=15;break;case 14:return n.abrupt("return",i.$util.Tips({title:i.$t("请勿重复点击")}));case 15:(0,u.loginH5)({account:i.account,password:i.password,spread:i.$Cache.get("spread")}).then((function(n){var r=n.data;i.$store.commit("LOGIN",{token:r.token,time:r.expires_time-e.$Cache.time()});var a=i.$Cache.get(d)||"/pages/index/index";i.$Cache.clear(d),(0,u.getUserInfo)().then((function(n){e.keyLock=!0,i.$store.commit("SETUID",n.data.uid),t.reLaunch({url:a})})).catch((function(t){e.keyLock=!0}))})).catch((function(t){e.keyLock=!0,i.$util.Tips({title:t})}));case 16:case"end":return n.stop()}}),n)})))()}}};e.default=h}).call(this,n("543d")["default"])},"31c8":function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("248d");i(n("66fd"));var r=i(n("d49e"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(r.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"3bf1":function(t,e,n){"use strict";var i=n("1ab5"),r=n.n(i);r.a},"86ca":function(t,e,n){},d49e:function(t,e,n){"use strict";n.r(e);var i=n("e6bf"),r=n("067d");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("3bf1"),n("1e04");var o=n("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=c.exports},e6bf:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,1===t.formItem&&1!==t.current?t.$t("输入手机号码"):null),i=1===t.formItem&&1!==t.current?t.$t("填写登录密码"):null,r=1===t.formItem&&(0!==t.current||t.appLoginStatus||t.appleLoginStatus)?t.$t("输入手机号码"):null,a=1===t.formItem&&(0!==t.current||t.appLoginStatus||t.appleLoginStatus)?t.$t("填写验证码"):null,o=1===t.formItem&&0!==t.current?t.$t("登录"):null,c=1===t.formItem&&0===t.current?t.$t("登录"):null,u=1===t.formItem&&0==t.current?t.$t("快速登录"):null,s=1===t.formItem&&1==t.current?t.$t("账号登录"):null,l=1===t.formItem?t.$t("已阅读并同意"):null,p=1===t.formItem?t.$t("《用户协议》"):null,f=1===t.formItem?t.$t("与"):null,d=1===t.formItem?t.$t("《隐私协议》"):null;t._isMounted||(t.e0=function(e){t.current=1},t.e1=function(e){t.current=0},t.e2=function(e){t.inAnimation=!1}),t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:r,m3:a,m4:o,m5:c,m6:u,m7:s,m8:l,m9:p,m10:f,m11:d}})},r=[]}},[["31c8","common/runtime","common/vendor"]]]);