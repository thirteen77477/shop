(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/Authorize"],{"534f":function(t,e,n){"use strict";var o=n("e00c"),a=n.n(o);a.a},b29f:function(t,e,n){"use strict";n.r(e);var o=n("c015"),a=n("e4b0");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("534f");var u=n("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"0246b62e",null,!1,o["a"],void 0);e["default"]=s.exports},c015:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},a=[]},cefb:function(t,e,n){"use strict";(function(t,o){var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("ebdf")),u=n("a9a5"),s=n("2038"),c=n("26cb"),d=a(n("7635")),f=(a(n("b120")),getApp()),r={name:"Authorize",props:{isAuto:{type:Boolean,default:!0},isGoIndex:{type:Boolean,default:!0},isShowAuth:{type:Boolean,default:!1}},data:function(){return{logoUrl:"",authKey:""}},computed:(0,c.mapGetters)(["isLogin","userInfo"]),watch:{isLogin:function(t){!0===t&&this.$emit("onLoadFun",this.userInfo)}},mounted:function(){this.getLogoUrl();this.isLogin||i.default.has(s.STATE_R_KEY)?this.setAuthStatus():t.login({success:function(t){i.default.set(s.STATE_R_KEY,t.code,10800);f.globalData.spid&&f.globalData.spid}})},methods:{setAuthStatus:function(){var t=this;d.default.authorize().then((function(e){!1===e.islogin?t.setUserInfo():t.$emit("onLoadFun",t.userInfo)})).catch((function(e){t.isAuto&&t.$emit("authColse",!0)}))},getUserInfo:function(t){var e=this;d.default.getUserInfo().then((function(n){var a=n.userInfo;a.code=t,a.spread_spid=f.globalData.spid,a.spread_code=f.globalData.code,d.default.authUserInfo(a).then((function(t){o.hideLoading(),e.$emit("authColse",!1),e.$emit("onLoadFun",e.userInfo)})).catch((function(t){o.hideLoading(),o.showToast({title:t.msg,icon:"none",duration:2e3})}))})).catch((function(t){o.hideLoading()}))},getUserPhoneNumber:function(t,e,n){var a=this;(0,u.getUserPhone)({encryptedData:t,iv:e,code:n,spid:f.globalData.spid,spread:f.globalData.code}).then((function(t){var e=t.data.expires_time-a.$Cache.time();a.$store.commit("LOGIN",{token:t.data.token,time:e}),a.$emit("authColse",!1),a.$emit("onLoadFun",t.data.userInfo),o.hideLoading()})).catch((function(t){o.hideLoading()}))},setUserInfo:function(t){var e=this;o.showLoading({title:"正在登录中"}),d.default.getCode().then((function(n){e.getUserPhoneNumber(t.detail.encryptedData,t.detail.iv,n)})).catch((function(t){o.hideLoading()}))},getLogoUrl:function(){var t=this;i.default.has(s.LOGO_URL)?this.logoUrl=i.default.get(s.LOGO_URL):(0,u.getLogo)().then((function(e){t.logoUrl=e.data.logo_url,i.default.set(s.LOGO_URL,t.logoUrl)}))},close:function(){var t=getCurrentPages();t[t.length-1];this.isGoIndex?o.navigateTo({url:"/pages/index/index"}):this.$emit("authColse",!1)}}};e.default=r}).call(this,n("bc2e")["default"],n("543d")["default"])},e00c:function(t,e,n){},e4b0:function(t,e,n){"use strict";n.r(e);var o=n("cefb"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/Authorize-create-component',
    {
        'components/Authorize-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b29f"))
        })
    },
    [['components/Authorize-create-component']]
]);
