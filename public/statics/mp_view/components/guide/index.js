(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/guide/index"],{"510d":function(t,e,n){},a0c5:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{autoplay:!1,duration:500,jumpover:this.$t("跳过"),experience:this.$t("立即体验"),timecount:void 0,times:0}},props:{advData:{type:Object,default:function(){}},closeType:{type:Number,default:1}},mounted:function(){this.timer()},onHide:function(){clearInterval(this.timecount)},methods:{timer:function(){var t=this;this.times=this.advData.time;var e=this.advData.time||5;this.timecount=setInterval((function(){e--,t.times=e,e<=0&&(clearInterval(t.timecount),t.launchFlag())}),1e3)},launchFlag:function(){clearInterval(this.timecount),t.switchTab({url:"/pages/index/index"})},jump:function(e){e&&(clearInterval(this.timecount),-1!=e.indexOf("http")?t.navigateTo({url:"/pages/annex/web_view/index?url=".concat(e)}):t.reLaunch({url:e,fail:function(){t.switchTab({url:e})}}))}}};e.default=n}).call(this,n("543d")["default"])},d50a:function(t,e,n){"use strict";n.r(e);var a=n("a0c5"),i=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a},dfb9:function(t,e,n){"use strict";n.r(e);var a=n("e3d6"),i=n("d50a");for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("eca5");var c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"6a35f090",null,!1,a["a"],void 0);e["default"]=r.exports},e3d6:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=(this._self._c,"pic"==this.advData.type&&this.advData.value.length),n=this.$t("跳过");this.$mp.data=Object.assign({},{$root:{g0:e,m0:n}})},i=[]},eca5:function(t,e,n){"use strict";var a=n("510d"),i=n.n(a);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/guide/index-create-component',
    {
        'components/guide/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("dfb9"))
        })
    },
    [['components/guide/index-create-component']]
]);
