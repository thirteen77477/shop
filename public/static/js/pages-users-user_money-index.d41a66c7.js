(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_money-index"],{"03ff":function(t,e,i){"use strict";i.r(e);var a=i("344e"),n=i("1565");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("15bc");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"5c721f6d",null,!1,a["a"],void 0);e["default"]=s.exports},"13ec":function(t,e,i){t.exports=i.p+"static/img/gift.bde2a03c.png"},1565:function(t,e,i){"use strict";i.r(e);var a=i("539e"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},1579:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.collectAdd=function(t,e){return n.default.post("collect/add",{id:t,product:void 0===e?"product":e})},e.collectAll=function(t,e){return n.default.post("collect/all",{id:t,category:void 0===e?"product":e})},e.collectDel=function(t,e){return n.default.post("collect/del",{id:t,category:void 0===e?"product":e})},e.create=function(t){return n.default.post("agent/apply/".concat(t.id),t)},e.deleteVisitList=function(t){return n.default.delete("user/visit",t)},e.getAgentAgreement=function(t){return n.default.get("agent/get_agent_agreement",{},{noAuth:!0})},e.getAttr=function(t,e){return n.default.get("v2/get_attr/"+t+"/"+e)},e.getCategoryList=function(){return n.default.get("category",{},{noAuth:!0})},e.getCodeApi=function(){return n.default.get("verify_code",{},{noAuth:!0})},e.getCollectUserList=function(t){return n.default.get("collect/user",t)},e.getGoodsDetails=function(){return n.default.get("agent/apply/info",{},{noAuth:!0})},e.getGroomList=function(t,e){return n.default.get("groom/list/"+t,e,{noAuth:!0})},e.getHomeProducts=function(t){return n.default.get("home/products",t,{noAuth:!0})},e.getPresellProductDetail=function(t){return n.default.get("advance/detail/"+t)},e.getProductCode=function(t){return n.default.get("product/code/"+t,{})},e.getProductDetail=function(t){return n.default.get("product/detail/"+t,{},{noAuth:!0})},e.getProductHot=function(t,e){return n.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})},e.getProductslist=function(t){return n.default.get("products",t,{noAuth:!0})},e.getReplyConfig=function(t){return n.default.get("reply/config/"+t)},e.getReplyList=function(t,e){return n.default.get("reply/list/"+t,e)},e.getSearchKeyword=function(){return n.default.get("search/keyword",{},{noAuth:!0})},e.getVisitList=function(t){return n.default.get("user/visit_list",t)},e.postCartAdd=function(t){return n.default.post("cart/add",t)},e.postCartNum=function(t){return n.default.post("v2/set_cart_num",t)},e.registerVerify=function(t){return n.default.post("register/verify",t,{noAuth:!0})},e.storeDiscountsList=function(t){return n.default.get("store_discounts/list/"+t,{},{noAuth:!0})},e.storeListApi=function(t){return n.default.get("store_list",t)};var n=a(i("3160"))},"15bc":function(t,e,i){"use strict";var a=i("c257"),n=i.n(a);n.a},"1a330":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={easyLoadimage:i("9362").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"recommend",style:t.colorStyle},[i("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian"}),i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.$t("热门推荐")))]),i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian lefticon"})],1),i("v-uni-view",{staticClass:"recommendList acea-row row-between-wrapper"},t._l(t.hostProduct,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item",attrs:{"hover-class":"none"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("easy-loadimage",{attrs:{mode:"widthFix","image-src":e.image}}),e.activity&&"1"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("秒杀")))]):t._e(),e.activity&&"2"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("砍价")))]):t._e(),e.activity&&"3"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("拼团")))]):t._e()],1),i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.store_name))]),i("v-uni-view",{staticClass:"money font-color"},[t._v(t._s(t.$t("￥"))),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1),e.vip_price&&e.vip_price>0&&e.base?i("v-uni-view",{staticClass:"vip-money"},[t._v(t._s(t.$t("￥"))+t._s(e.vip_price)),i("v-uni-image",{staticClass:"jvip",attrs:{src:"/static/images/jvip.png"}})],1):t._e(),e.vip_price&&e.vip_price>0&&e.is_vip?i("v-uni-view",{staticClass:"vip-money"},[t._v(t._s(t.$t("￥"))+t._s(e.vip_price)),i("v-uni-image",{attrs:{src:"/static/images/vip.png"}})],1):t._e()],1)})),1)],1)},o=[]},"230d":function(t,e,i){"use strict";var a=i("94bc"),n=i.n(a);n.a},"2c78":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.goPage=function(){return new Promise((function(t){if(0!=a.globalData.isIframe)return!1;t(!0)}))},e.goShopDetail=function(t,e){return new Promise((function(i){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(e)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):i(t)}))},i("d3b7"),i("99af");var a=getApp()},"344e":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},n=[]},"3d8e":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{style:t.colorStyle},[a("v-uni-view",{staticClass:"my-account"},[a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"headerCon"},[a("v-uni-view",{staticClass:"account acea-row row-top row-between"},[a("v-uni-view",{staticClass:"assets"},[a("v-uni-view",[t._v(t._s(t.$t("总资产(元)")))]),a("v-uni-view",{staticClass:"money"},[t._v(t._s(t.userInfo.now_money||0))])],1),a("v-uni-navigator",{staticClass:"recharge",attrs:{url:"/pages/users/user_payment/index","hover-class":"none"}},[t._v(t._s(t.$t("充值")))])],1),a("v-uni-view",{staticClass:"cumulative acea-row row-top"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",[t._v(t._s(t.$t("累计充值(元)")))]),a("v-uni-view",{staticClass:"money"},[t._v(t._s(t.userInfo.recharge||0))])],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",[t._v(t._s(t.$t("累计消费(元)")))]),a("v-uni-view",{staticClass:"money"},[t._v(t._s(t.userInfo.orderStatusSum||0))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"nav acea-row row-middle"},[a("v-uni-navigator",{staticClass:"item",attrs:{"hover-class":"none",url:"/pages/users/user_bill/index"}},[a("v-uni-view",{staticClass:"iconfont icon-s-zhangdanjilu"}),a("v-uni-view",[t._v(t._s(t.$t("账单记录")))])],1),a("v-uni-navigator",{staticClass:"item",attrs:{"hover-class":"none",url:"/pages/users/user_bill/index?type=1"}},[a("v-uni-view",{staticClass:"iconfont icon-s-xiaofeijilu"}),a("v-uni-view",[t._v(t._s(t.$t("消费记录")))])],1),t.recharge_switch?a("v-uni-navigator",{staticClass:"item",attrs:{"hover-class":"none",url:"/pages/users/user_bill/index?type=2"}},[a("v-uni-view",{staticClass:"iconfont icon-s-chongzhijilu"}),a("v-uni-view",[t._v(t._s(t.$t("充值记录")))])],1):t._e(),a("v-uni-navigator",{staticClass:"item",attrs:{"hover-class":"none",url:"/pages/users/user_integral/index"}},[a("v-uni-view",{staticClass:"iconfont icon-jifenzhongxin"}),a("v-uni-view",[t._v(t._s(t.$t("积分中心")))])],1)],1),a("v-uni-view",{staticClass:"advert acea-row row-between-wrapper"},[a("v-uni-navigator",{staticClass:"item acea-row row-between-wrapper",attrs:{"hover-class":"none",url:"/pages/users/user_sgin/index"}},[a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.$t("签到领积分")))]),a("v-uni-view",[t._v(t._s(t.$t("赚积分抵现金")))])],1),a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:i("13ec")}})],1)],1),a("v-uni-navigator",{staticClass:"item on acea-row row-between-wrapper",attrs:{"hover-class":"none",url:"/pages/users/user_get_coupon/index"}},[a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.$t("领取优惠券")))]),a("v-uni-view",[t._v(t._s(t.$t("满减享优惠")))])],1),a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:i("4f41")}})],1)],1)],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"iconfont icon-hebingxingzhuang"}),a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"line1"},[t._v(t._s(t.$t("最新拼团活动")))]),a("v-uni-view",{staticClass:"infor line1"},[t._v(t._s(t.$t("最新的优惠商品上架拼团")))])],1)],1),t.activity.is_pink?a("v-uni-navigator",{staticClass:"bnt",attrs:{"hover-class":"none",url:"/pages/activity/goods_combination/index"}},[t._v(t._s(t.$t("立即参与")))]):a("v-uni-view",{staticClass:"bnt end"},[t._v(t._s(t.$t("已结束")))])],1),a("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"iconfont icon-miaosha yellow"}),a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"line1"},[t._v(t._s(t.$t("当前限时秒杀")))]),a("v-uni-view",{staticClass:"infor line1"},[t._v(t._s(t.$t("最新商品秒杀进行中")))])],1)],1),t.activity.is_seckill?a("v-uni-navigator",{staticClass:"bnt",attrs:{"hover-class":"none",url:"/pages/activity/goods_seckill/index"}},[t._v(t._s(t.$t("立即参与")))]):a("v-uni-view",{staticClass:"bnt end"},[t._v(t._s(t.$t("已结束")))])],1),a("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"iconfont icon-kanjia1 green"}),a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"line1"},[t._v(t._s(t.$t("砍价活动")))]),a("v-uni-view",{staticClass:"infor line1"},[t._v(t._s(t.$t("呼朋唤友来砍价")))])],1)],1),t.activity.is_bargin?a("v-uni-navigator",{staticClass:"bnt",attrs:{"hover-class":"none",url:"/pages/activity/goods_bargain/index"}},[t._v(t._s(t.$t("立即参与")))]):a("v-uni-view",{staticClass:"bnt end"},[t._v(t._s(t.$t("已结束")))])],1)],1)],1),a("recommend",{attrs:{hostProduct:t.hostProduct}})],1),a("home")],1)},n=[]},4194:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.my-account .wrapper[data-v-6c84fd22]{background-color:#fff;padding:%?32?% 0 %?34?% 0;margin-bottom:%?14?%}.my-account .wrapper .header[data-v-6c84fd22]{width:%?690?%;height:%?330?%;background:var(--view-theme);border-radius:%?16?%;margin:0 auto;box-sizing:border-box;color:hsla(0,0%,100%,.6);font-size:%?24?%}.my-account .wrapper .header .headerCon[data-v-6c84fd22]{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArIAAAFKCAYAAADhULxpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEzMUM4RDlEM0YxNTExRTk4OUJFQ0Q4Qjg0RDBCMzQ1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEzMUM4RDlFM0YxNTExRTk4OUJFQ0Q4Qjg0RDBCMzQ1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTMxQzhEOUIzRjE1MTFFOTg5QkVDRDhCODREMEIzNDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTMxQzhEOUMzRjE1MTFFOTg5QkVDRDhCODREMEIzNDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ymvxvAAAIhklEQVR42uzd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");background-repeat:no-repeat;background-size:100%;height:100%;width:100%;padding:%?36?% 0 %?29?% 0;box-sizing:border-box}.my-account .wrapper .header .headerCon .account[data-v-6c84fd22]{padding:0 %?35?%}.my-account .wrapper .header .headerCon .account .assets .money[data-v-6c84fd22]{font-size:%?72?%;color:#fff;margin-top:%?6?%;font-family:Guildford Pro}.my-account .wrapper .header .headerCon .account .recharge[data-v-6c84fd22]{font-size:%?28?%;width:%?150?%;height:%?54?%;border-radius:%?27?%;background-color:#fff9f8;text-align:center;line-height:%?54?%;color:var(--view-theme)}.my-account .wrapper .header .headerCon .cumulative[data-v-6c84fd22]{margin-top:%?46?%}.my-account .wrapper .header .headerCon .cumulative .item[data-v-6c84fd22]{flex:1;padding-left:%?35?%}.my-account .wrapper .header .headerCon .cumulative .item .money[data-v-6c84fd22]{font-size:%?48?%;font-family:Guildford Pro;color:#fff;margin-top:%?6?%}.my-account .wrapper .nav[data-v-6c84fd22]{height:%?155?%;border-bottom:%?1?% solid #f5f5f5}.my-account .wrapper .nav .item[data-v-6c84fd22]{flex:1;text-align:center;font-size:%?26?%;color:#999}.my-account .wrapper .nav .item .iconfont[data-v-6c84fd22]{font-size:%?44?%;margin:0 auto;margin-bottom:%?14?%;color:var(--view-theme)}.my-account .wrapper .advert[data-v-6c84fd22]{padding:0 %?30?%;margin-top:%?30?%}.my-account .wrapper .advert .item[data-v-6c84fd22]{background-color:#fff6d1;width:%?332?%;height:%?118?%;border-radius:%?10?%;padding:0 %?27?% 0 %?25?%;box-sizing:border-box;font-size:%?24?%;color:#e44609;box-shadow:0 1px 4px rgba(0,0,0,.1)}.my-account .wrapper .advert .item.on[data-v-6c84fd22]{background-color:#fff3f3;color:#e96868}.my-account .wrapper .advert .item .pictrue[data-v-6c84fd22]{width:%?78?%;height:%?78?%}.my-account .wrapper .advert .item .pictrue uni-image[data-v-6c84fd22]{width:100%;height:100%}.my-account .wrapper .advert .item .text .name[data-v-6c84fd22]{font-size:%?30?%;font-weight:700;color:#f33c2b;margin-bottom:%?7?%}.my-account .wrapper .advert .item.on .text .name[data-v-6c84fd22]{color:#f64051}.my-account .wrapper .list[data-v-6c84fd22]{padding:0 %?30?%}.my-account .wrapper .list .item[data-v-6c84fd22]{margin-top:%?44?%}.my-account .wrapper .list .item .picTxt .iconfont[data-v-6c84fd22]{width:%?82?%;height:%?82?%;border-radius:50%;background-image:linear-gradient(90deg,#ff9389 0,#f9776b);text-align:center;line-height:%?82?%;color:#fff;font-size:%?40?%}.my-account .wrapper .list .item .picTxt .iconfont.yellow[data-v-6c84fd22]{background-image:linear-gradient(90deg,#fca 0,#fea060)}.my-account .wrapper .list .item .picTxt .iconfont.green[data-v-6c84fd22]{background-image:linear-gradient(90deg,#a1d67c 0,#9dd074)}.my-account .wrapper .list .item .picTxt[data-v-6c84fd22]{width:%?428?%;font-size:%?30?%;color:#282828}.my-account .wrapper .list .item .picTxt .text[data-v-6c84fd22]{width:%?317?%}.my-account .wrapper .list .item .picTxt .text .infor[data-v-6c84fd22]{font-size:%?24?%;color:#999;margin-top:%?5?%}.my-account .wrapper .list .item .bnt[data-v-6c84fd22]{font-size:%?26?%;color:#282828;width:%?156?%;height:%?52?%;border:%?1?% solid #ddd;border-radius:%?26?%;text-align:center;line-height:%?52?%}.my-account .wrapper .list .item .bnt.end[data-v-6c84fd22]{font-size:%?26?%;color:#aaa;background-color:#f2f2f2;border-color:#f2f2f2}',""]),t.exports=e},"4f41":function(t,e,i){t.exports=i.p+"static/img/money.136360a9.png"},"539e":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("26cb"),o=a(i("66ca")),r=i("989b"),s={name:"Home",props:{},mixins:[o.default],data:function(){return{top:"545",imgHost:r.HTTP_REQUEST_URL}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){t.touches[0].clientY<545&&t.touches[0].clientY>66&&(this.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=s},8207:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("26cb"),o=i("2c78"),r=a(i("66ca")),s={computed:(0,n.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[r.default],data:function(){return{}},methods:{goDetail:function(t){(0,o.goShopDetail)(t,this.uid).then((function(e){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))}}};e.default=s},"94bc":function(t,e,i){var a=i("9ff1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5d6072d6",a,!0,{sourceMap:!1,shadowMode:!1})},"9ff1":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.recommend[data-v-2b49a4b7]{background-color:#fff}.recommend .title[data-v-2b49a4b7]{height:%?135?%;font-size:%?28?%;color:#282828}.recommend .title .name[data-v-2b49a4b7]{margin:0 %?28?%}.recommend .title .iconfont[data-v-2b49a4b7]{font-size:%?170?%;color:#454545}.recommend .title .iconfont.lefticon[data-v-2b49a4b7]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.recommend .recommendList[data-v-2b49a4b7]{padding:0 %?30?%}.recommend .recommendList .item[data-v-2b49a4b7]{width:%?335?%;margin-bottom:%?30?%;border-radius:%?20?% %?20?% 0 0;box-shadow:%?0?% %?3?% %?10?% %?2?% rgba(0,0,0,.03);padding-bottom:%?10?%}.recommend .recommendList .item .pictrue[data-v-2b49a4b7]{position:relative;width:100%;height:%?335?%}.recommend .recommendList .item .pictrue[data-v-2b49a4b7] ,\n.recommend .recommendList .item .pictrue[data-v-2b49a4b7] uni-image,\n.recommend .recommendList .item .pictrue[data-v-2b49a4b7] .easy-loadimage,\n.recommend .recommendList .item .pictrue[data-v-2b49a4b7] uni-image{width:100%;height:%?335?%;border-radius:%?20?%}.recommend .recommendList .item .name[data-v-2b49a4b7]{font-size:%?28?%;color:#282828;margin-top:%?20?%;padding:0 %?10?%}.recommend .recommendList .item .money[data-v-2b49a4b7]{font-size:%?20?%;margin-top:%?8?%;padding:0 %?10?% %?0?% %?10?%}.recommend .vip-money[data-v-2b49a4b7]{font-size:%?24?%;color:#282828;font-weight:700;display:flex;align-items:center;padding:%?0?% 0 0 %?10?%}.recommend .vip-money uni-image[data-v-2b49a4b7]{width:%?46?%;height:%?21?%;margin-left:%?4?%}.recommend .recommendList .item .money .num[data-v-2b49a4b7]{font-size:%?28?%}',""]),t.exports=e},a798:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".pictrueBox[data-v-5c721f6d]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-5c721f6d]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-5c721f6d]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-5c721f6d]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important;opacity:.8;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.home .homeCon .iconfont[data-v-5c721f6d]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-5c721f6d]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-5c721f6d]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},c257:function(t,e,i){var a=i("a798");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("f61d2c94",a,!0,{sourceMap:!1,shadowMode:!1})},c4306:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("99af");var n=i("1579"),o=(i("f984"),i("8ba8")),r=i("666f"),s=i("26cb"),c=a(i("f1f8")),u=a(i("03ff")),A=a(i("66ca")),d={components:{recommend:c.default,home:u.default},mixins:[A.default],data:function(){return{userInfo:{},hostProduct:[],isClose:!1,recharge_switch:0,activity:{},isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10}},computed:(0,s.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getUserInfo(),this.get_host_product(),this.get_activity())},deep:!0}},onLoad:function(){this.isLogin?(this.getUserInfo(),this.get_host_product(),this.get_activity()):(0,r.toLogin)()},methods:{onLoadFun:function(){this.getUserInfo(),this.get_host_product(),this.get_activity()},authColse:function(t){this.isShowAuth=t},getUserInfo:function(){var t=this;(0,o.getUserInfo)().then((function(e){t.$set(t,"userInfo",e.data),t.recharge_switch=e.data.recharge_switch}))},get_activity:function(){var t=this;(0,o.userActivity)().then((function(e){t.$set(t,"activity",e.data)}))},get_host_product:function(){var t=this;t.hotScroll||(0,n.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))}},onReachBottom:function(){this.get_host_product()},onPageScroll:function(t){uni.$emit("scroll")}};e.default=d},ddf1:function(t,e,i){"use strict";var a=i("eedd"),n=i.n(a);n.a},eedd:function(t,e,i){var a=i("4194");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("36bfcace",a,!0,{sourceMap:!1,shadowMode:!1})},f1cd:function(t,e,i){"use strict";i.r(e);var a=i("c4306"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},f1f8:function(t,e,i){"use strict";i.r(e);var a=i("1a330"),n=i("fad1");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("230d");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"2b49a4b7",null,!1,a["a"],void 0);e["default"]=s.exports},f6ef:function(t,e,i){"use strict";i.r(e);var a=i("3d8e"),n=i("f1cd");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("ddf1");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"6c84fd22",null,!1,a["a"],void 0);e["default"]=s.exports},f984:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.auth=n,e.openBargainSubscribe=function(){var t=n();return o([t.bargain_success])},e.openExtrctSubscribe=function(){var t=n();return o([t.user_extract])},e.openOrderRefundSubscribe=function(){var t=n();return o([t.order_refund])},e.openOrderSubscribe=function(){var t=n();return o([t.order_take,t.integral_accout])},e.openPaySubscribe=function(){var t=n();return o([t.order_pay_success,t.order_deliver_success,t.order_postage_success])},e.openPinkSubscribe=function(){var t=n();return o([t.order_user_groups_success])},e.openRechargeSubscribe=function(){var t=n();return o([t.recharge_success])},e.subscribe=o,i("d3b7");var a=i("2038");function n(){var t,e=uni.getStorageSync(a.SUBSCRIBE_MESSAGE);return t=e?JSON.parse(e):{},t}function o(t){var e=wx;return new Promise((function(i,a){e.requestSubscribeMessage({tmplIds:t,success:function(t){return i(t)},fail:function(t){return i(t)}})}))}},fad1:function(t,e,i){"use strict";i.r(e);var a=i("8207"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a}}]);