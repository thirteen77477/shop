(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/diy/index"],{"08e8":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.pageShow&&!t.errorNetwork&&1==t.isSortType?t.sortList.children&&t.sortList.children.length:null),o=t.pageShow&&!t.errorNetwork&&1==t.isSortType&&n?t.__map(t.sortList.children,(function(e,n){var o=t.__get_orig(e),i=t.$t(e.cate_name);return{$orig:o,m0:i}})):null,i=t.pageShow&&!t.errorNetwork&&1==t.isSortType?t.goodList.length:null,a=t.pageShow&&!t.errorNetwork&&1==t.isSortType&&i?t.__map(t.goodList,(function(e,n){var o=t.__get_orig(e),i=e.activity&&"1"===e.activity.type?t.$t("秒杀"):null,a=e.activity&&"2"===e.activity.type?t.$t("砍价"):null,r=e.activity&&"3"===e.activity.type?t.$t("拼团"):null,c=e.checkCoupon?t.$t("券"):null,s=t.$t("￥");return{$orig:o,m1:i,m2:a,m3:r,m4:c,m5:s}})):null,r=t.pageShow&&!t.errorNetwork&&1==t.isSortType?0==t.goodList.length&&t.loaded:null,c=t.pageShow&&!t.errorNetwork&&1==t.isSortType&&r?t.$t("暂无数据"):null,s=t.pageShow&&t.errorNetwork?t.$t("网络连接断开"):null,u=t.pageShow&&t.errorNetwork?t.$t("请检查情况："):null,d=t.pageShow&&t.errorNetwork?t.$t("在设置中是否已开启网络权限："):null,l=t.pageShow&&t.errorNetwork?t.$t("当前是否处于弱网环境"):null,h=t.pageShow&&t.errorNetwork?t.$t("版本是否过低，升级试试吧"):null,g=t.pageShow&&t.errorNetwork?t.$t("重新连接"):null;t.$mp.data=Object.assign({},{$root:{g0:n,l0:o,g1:i,l1:a,g2:r,m6:c,m7:s,m8:u,m9:d,m10:l,m11:h,m12:g}})},i=[]},"3e31":function(t,e,n){"use strict";var o=n("583e"),i=n.n(o);i.a},"583e":function(t,e,n){},"88c3":function(t,e,n){"use strict";n.r(e);var o=n("d25f"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},a79f:function(t,e,n){"use strict";n.r(e);var o=n("08e8"),i=n("88c3");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("3e31");var r=n("f0c5"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=c.exports},d25f:function(t,e,n){"use strict";(function(t,o){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,r=i(n("9523")),c=i(n("66ca")),s=n("d322"),u=n("2038"),d=n("26cb"),l=n("1579"),h=n("2c78"),g=n("451d"),f=n("666f"),p=n("989b"),m=(getApp(),a={computed:(0,d.mapGetters)(["isLogin","uid"]),mixins:[c.default],components:{recommend:function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("f1f8"))}.bind(null,n)).catch(n.oe)},Loading:function(){n.e("components/Loading/index").then(function(){return resolve(n("9bda"))}.bind(null,n)).catch(n.oe)},pageFoot:function(){Promise.all([n.e("common/vendor"),n.e("components/pageFooter/index")]).then(function(){return resolve(n("d9b2"))}.bind(null,n)).catch(n.oe)},couponWindow:function(){Promise.all([n.e("common/vendor"),n.e("components/couponWindow/index")]).then(function(){return resolve(n("4928"))}.bind(null,n)).catch(n.oe)},authorize:function(){n.e("components/Authorize").then(function(){return resolve(n("b29f"))}.bind(null,n)).catch(n.oe)},activeParty:function(){n.e("pages/index/diy/components/activeParty").then(function(){return resolve(n("9c80"))}.bind(null,n)).catch(n.oe)},headerSerch:function(){n.e("pages/index/diy/components/headerSerch").then(function(){return resolve(n("2833"))}.bind(null,n)).catch(n.oe)},swipers:function(){n.e("pages/index/diy/components/swipers").then(function(){return resolve(n("3947"))}.bind(null,n)).catch(n.oe)},coupon:function(){n.e("pages/index/diy/components/coupon").then(function(){return resolve(n("17e9"))}.bind(null,n)).catch(n.oe)},articleList:function(){n.e("pages/index/diy/components/articleList").then(function(){return resolve(n("fdb5"))}.bind(null,n)).catch(n.oe)},bargain:function(){Promise.all([n.e("common/vendor"),n.e("pages/index/diy/components/bargain")]).then(function(){return resolve(n("5b3b"))}.bind(null,n)).catch(n.oe)},blankPage:function(){n.e("pages/index/diy/components/blankPage").then(function(){return resolve(n("475f"))}.bind(null,n)).catch(n.oe)},combination:function(){Promise.all([n.e("common/vendor"),n.e("pages/index/diy/components/combination")]).then(function(){return resolve(n("a27f"))}.bind(null,n)).catch(n.oe)},customerService:function(){Promise.all([n.e("common/vendor"),n.e("pages/index/diy/components/customerService")]).then(function(){return resolve(n("2ba9"))}.bind(null,n)).catch(n.oe)},goodList:function(){n.e("pages/index/diy/components/goodList").then(function(){return resolve(n("c459"))}.bind(null,n)).catch(n.oe)},guide:function(){n.e("pages/index/diy/components/guide").then(function(){return resolve(n("6521"))}.bind(null,n)).catch(n.oe)},liveBroadcast:function(){n.e("pages/index/diy/components/liveBroadcast").then(function(){return resolve(n("126a"))}.bind(null,n)).catch(n.oe)},menus:function(){n.e("pages/index/diy/components/menus").then(function(){return resolve(n("f016"))}.bind(null,n)).catch(n.oe)},pictureCube:function(){n.e("pages/index/diy/components/pictureCube").then(function(){return resolve(n("9eca"))}.bind(null,n)).catch(n.oe)},news:function(){n.e("pages/index/diy/components/news").then(function(){return resolve(n("3ec6"))}.bind(null,n)).catch(n.oe)},promotionList:function(){n.e("pages/index/diy/components/promotionList").then(function(){return resolve(n("60e9"))}.bind(null,n)).catch(n.oe)},richText:function(){n.e("pages/index/diy/components/richText").then(function(){return resolve(n("e543"))}.bind(null,n)).catch(n.oe)},seckill:function(){Promise.all([n.e("common/vendor"),n.e("pages/index/diy/components/seckill")]).then(function(){return resolve(n("126f"))}.bind(null,n)).catch(n.oe)},swiperBg:function(){n.e("pages/index/diy/components/swiperBg").then(function(){return resolve(n("a09d"))}.bind(null,n)).catch(n.oe)},tabNav:function(){n.e("pages/index/diy/components/tabNav").then(function(){return resolve(n("4487"))}.bind(null,n)).catch(n.oe)},titles:function(){n.e("pages/index/diy/components/titles").then(function(){return resolve(n("25e1"))}.bind(null,n)).catch(n.oe)},appUpdate:function(){n.e("components/update/app-update").then(function(){return resolve(n("c2ad"))}.bind(null,n)).catch(n.oe)}}},(0,r.default)(a,"computed",(0,d.mapGetters)(["isLogin","cartNum"])),(0,r.default)(a,"data",(function(){return{imgHost:p.HTTP_REQUEST_URL,showSkeleton:!0,isNodes:0,styleConfig:[],tempArr:[],goodType:3,loading:!1,page:1,limit:this.$config.LIMIT,iSshowH:!1,numConfig:0,code:"",isCouponShow:!1,couponObj:{},couponObjs:{show:!1},shareInfo:{},footConfig:{},isSortType:0,sortList:"",sortAll:[],goodPage:1,goodList:[],newData:{},sid:0,curSort:0,sortMpTop:0,loaded:!1,hostProduct:[],hotScroll:!1,hotPage:1,hotLimit:10,domOffsetTop:50,isFixed:!0,site_config:"",errorNetwork:!1,privacyStatus:!1,isHeaderSerch:!1,bgColor:"",bgPic:"",bgTabVal:"",pageShow:!0,windowHeight:0,activeRouter:"",countNum:0}})),(0,r.default)(a,"onPullDownRefresh",(function(){this.diyData()})),(0,r.default)(a,"created",(function(e){var n=this,i=this;this.$nextTick((function(){t.getSystemInfo({success:function(t){i.windowHeight=t.windowHeight}})}));var a=getCurrentPages(),r=a[a.length-1].route;this.activeRouter="/"+r,this.diyData(),this.getIndexData(),this.getTempIds(),(0,s.siteConfig)().then((function(t){n.site_config=t.data.record_No})).catch((function(t){})),this.isLogin&&(this.getCoupon(),(0,g.getCartCounts)().then((function(e){n.countNum=e.data.count,n.$store.commit("indexData/setCartNum",e.data.count>99?"..":e.data.count+""),e.data.count>0?o.setTabBarBadge({index:Number(t.getStorageSync("FOOTER_ADDCART"))||2,text:e.data.count+""}):o.hideTabBarRedDot({index:Number(t.getStorageSync("FOOTER_ADDCART"))||2})})))})),(0,r.default)(a,"watch",{isLogin:{deep:!0,handler:function(e,n){var o=(new Date).toLocaleDateString();if(e){try{var i=t.getStorageSync("oldDate")||""}catch(a){}i!=o&&this.getCoupon()}}}}),(0,r.default)(a,"onReady",(function(){})),(0,r.default)(a,"methods",{reconnect:function(){var e=this;t.showLoading({title:this.$t("加载中")}),this.diyData(),this.getIndexData(),getShare().then((function(t){e.shareInfo=t.data}))},goICP:function(){t.navigateTo({url:"/pages/annex/web_view/index?url=https://beian.miit.gov.cn/"})},bindHeighta:function(t){},bindHeight:function(e){t.hideLoading(),this.domOffsetTop=e.top},goGoodsDetail:function(e){(0,h.goShopDetail)(e,this.uid).then((function(n){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))},get_host_product:function(){var t=this;t.hotScroll||(0,l.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))},changeSort:function(t,e){this.curSort!=e&&(this.curSort=e,this.sid=t.id,this.goodList=[],this.goodPage=1,this.loaded=!1,this.getGoodsList())},bindSortId:function(t){this.isSortType=-99==t?0:1,this.getProductList(t),0==this.hostProduct.length&&this.get_host_product()},getProductList:function(t){var e=this;this.curSort=0,this.loaded=!1,this.sortAll.length>0?(this.sortAll.forEach((function(n,o){n.id==t&&(e.$set(e,"sortList",n),e.sid=n.children.length?n.children[0].id:"")})),this.goodList=[],this.goodPage=1,this.$nextTick((function(){""!=e.sortList&&e.getGoodsList()}))):(0,l.getCategoryList)().then((function(n){e.sortAll=n.data,n.data.forEach((function(n,o){n.id==t&&(e.sortList=n,e.sid=n.children.length?n.children[0].id:"")})),e.goodList=[],e.goodPage=1,e.$nextTick((function(){""!=e.sortList&&e.getGoodsList()}))}))},getGoodsList:function(){var t=this;this.loading||this.loaded||(this.loading=!0,(0,l.getProductslist)({sid:this.sid,keyword:"",priceOrder:"",salesOrder:"",news:0,page:this.goodPage,limit:10,cid:this.sortList.id}).then((function(e){t.loading=!1,t.loaded=e.data.length<10,t.goodPage++,t.goodList=t.goodList.concat(e.data)})))},getNewCoupon:function(){var e=this,n=t.getStorageSync("oldUser")||0;n||(0,s.getCouponNewUser)().then((function(n){var o=n.data;o.show?o.list.length&&(e.isCouponShow=!0,e.couponObj=o,t.setStorageSync("oldUser",1)):t.setStorageSync("oldUser",1)}))},getCoupon:function(){var e=this,n=t.getStorageSync("tagDate")||"",o=(new Date).toLocaleDateString();n===o?this.getNewCoupon():(0,s.getCouponV2)().then((function(n){var o=n.data;o.list.length?(e.isCouponShow=!0,e.couponObj=o,t.setStorageSync("tagDate",(new Date).toLocaleDateString())):e.getNewCoupon()}))},couponClose:function(){this.isCouponShow=!1,t.getStorageSync("oldUser")||this.getNewCoupon()},onLoadFun:function(){},getTempIds:function(){(0,s.getTempIds)().then((function(t){t.data&&o.setStorageSync(u.SUBSCRIBE_MESSAGE,JSON.stringify(t.data))}))},objToArr:function(t){var e=Object.keys(t),n=e.map((function(e){return t[e]}));return n},diyData:function(){var e=this,n=this;(0,s.getDiy)(0).then((function(o){t.hideLoading(),t.setStorageSync("DIY_DATA",o.data),setTimeout((function(){e.isNodes++}),0),e.errorNetwork=!1;var i=o.data;i.is_bg_color&&(e.bgColor=i.color_picker),i.is_bg_pic&&(e.bgPic=i.bg_pic,e.bgTabVal=i.bg_tab_val),e.pageShow=i.is_show,t.setNavigationBarTitle({title:e.$t(o.data.title)});var a=[],r=n.objToArr(o.data.value);r.forEach((function(t,o,i){"headerSerch"==t.name&&(e.isHeaderSerch=!0),"promotionList"==t.name&&(n.numConfig=t.numConfig.val,n.goodType=t.tabConfig.list[0].link.activeVal,n.getGroomList()),a=i})),a.sort((function(t,e){return t.timestamp-e.timestamp})),n.styleConfig=a,setTimeout((function(){e.showSkeleton=!1}),300),t.stopPullDownRefresh({success:function(t){}})})).catch((function(t){}))},getIndexData:function(){},changeBarg:function(e){this.isLogin?t.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(e.id,"&bargain=").concat(this.$store.state.app.uid)}):(0,f.toLogin)()},changeTab:function(t){this.goodType=t,this.page=1;this.getGroomList(!0)},getGroomList:function(t){var e=this,n=e.goodType;return!e.loadend&&(!e.loading&&(t&&e.$set(e,"iSshowH",!0),void(0,l.getGroomList)(n,{page:e.page,limit:this.numConfig}).then((function(t){var n=t.data;e.$set(e,"iSshowH",!1);n.list;e.$set(e,"tempArr",n.list),e.loading=!1})).catch((function(t){}))))},goRouter:function(e){var n=getCurrentPages(),o=n[n.length-1].$page.fullPath;e.link!=o&&t.switchTab({url:e.link,fail:function(n){t.redirectTo({url:e.link})}})},goDetail:function(e){(0,h.goShopDetail)(e,this.$store.state.app.uid).then((function(n){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))},onsollBotton:function(){0==this.isSortType||this.getGoodsList()}}),(0,r.default)(a,"onReachBottom",(function(){})),(0,r.default)(a,"onPageScroll",(function(e){t.$emit("scroll")})),(0,r.default)(a,"onShareAppMessage",(function(){return{title:this.shareInfo.title,path:"/pages/index/index"}})),(0,r.default)(a,"onShareTimeline",(function(){return{title:this.shareInfo.title,imageUrl:this.shareInfo.img}})),a);e.default=m}).call(this,n("543d")["default"],n("bc2e")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/diy/index-create-component',
    {
        'pages/index/diy/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a79f"))
        })
    },
    [['pages/index/diy/index-create-component']]
]);
