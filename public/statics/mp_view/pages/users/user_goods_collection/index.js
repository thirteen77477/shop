require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_goods_collection/index"],{"1a33":function(t,e,o){"use strict";o.r(e);var l=o("f21e"),i=o.n(l);for(var c in l)["default"].indexOf(c)<0&&function(t){o.d(e,t,(function(){return l[t]}))}(c);e["default"]=i.a},"28b5":function(t,e,o){"use strict";(function(t,e){var l=o("4ea4");o("248d");l(o("66fd"));var i=l(o("b118"));t.__webpack_require_UNI_MP_PLUGIN__=o,e(i.default)}).call(this,o("bc2e")["default"],o("543d")["createPage"])},"4e66":function(t,e,o){"use strict";o.d(e,"b",(function(){return l})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){}));var l=function(){var t=this,e=t.$createElement,o=(t._self._c,t.collectProductList.length),l=o?t.$t("当前共"):null,i=o?t.$t("件商品"):null,c=o&&t.checkbox_show?t.$t("取消"):null,n=o&&!t.checkbox_show?t.$t("管理"):null,s=o?t.__map(t.collectProductList,(function(e,o){var l=t.__get_orig(e),i=e.pid.toString(),c=t.$t("￥");return{$orig:l,g1:i,m4:c}})):null,u=o?null:!t.collectProductList.length&&t.page>1,a=t.checkbox_show&&t.collectProductList.length,d=a?t.$t("全选"):null,r=a?t.ids.length:null,h=a?t.$t("取关"):null;t.$mp.data=Object.assign({},{$root:{g0:o,m0:l,m1:i,m2:c,m3:n,l0:s,g2:u,g3:a,m5:d,g4:r,m6:h}})},i=[]},"78ce":function(t,e,o){},b118:function(t,e,o){"use strict";o.r(e);var l=o("4e66"),i=o("1a33");for(var c in i)["default"].indexOf(c)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(c);o("ce5b");var n=o("f0c5"),s=Object(n["a"])(i["default"],l["b"],l["c"],!1,null,"f903b780",null,!1,l["a"],void 0);e["default"]=s.exports},ce5b:function(t,e,o){"use strict";var l=o("78ce"),i=o.n(l);i.a},f21e:function(t,e,o){"use strict";(function(t){var l=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,c=l(o("9523")),n=o("1579"),s=o("26cb"),u=o("666f"),a=l(o("66ca")),d=o("989b"),r=(i={components:{recommend:function(){Promise.all([o.e("common/vendor"),o.e("components/recommend/index")]).then(function(){return resolve(o("f1f8"))}.bind(null,o)).catch(o.oe)},authorize:function(){o.e("components/Authorize").then(function(){return resolve(o("b29f"))}.bind(null,o)).catch(o.oe)},home:function(){Promise.all([o.e("common/vendor"),o.e("components/home/index")]).then(function(){return resolve(o("03ff"))}.bind(null,o)).catch(o.oe)}},mixins:[a.default],data:function(){return{imgHost:d.HTTP_REQUEST_URL,ids:[],hostProduct:[],checkbox_show:!1,loadTitle:this.$t("加载更多"),loading:!1,loadend:!1,collectProductList:[],count:0,limit:15,page:1,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,isAllSelect:!1}},computed:(0,s.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?(this.loadend=!1,this.page=1,this.collectProductList=[],this.getUserCollectProduct()):(0,u.toLogin)()},onShow:function(){this.loadend=!1,this.page=1,this.$set(this,"collectProductList",[]),this.getUserCollectProduct()},onReachBottom:function(){this.getUserCollectProduct()},methods:{showRadio:function(){this.checkbox_show=!this.checkbox_show},checkboxChange:function(t){t.detail.value.length<this.ids.length?this.$set(this,"isAllSelect",!1):t.detail.value.length===this.collectProductList.length&&this.$set(this,"isAllSelect",!0),this.$set(this,"ids",t.detail.value)},subDel:function(){var t=this,e=this;if(!this.ids.length)return e.$util.Tips({title:e.$t("请选择商品")});(0,n.collectDel)(e.ids).then((function(o){e.loadend=!1,e.$util.Tips({title:o.msg}),e.page=1,e.collectProductList=[],t.getUserCollectProduct(),t.ids.length=""}))},checkboxAllChange:function(t){var e=t.detail.value;e.length>0?this.setAllSelectValue(1):this.setAllSelectValue(0)},setAllSelectValue:function(t){var e=this,o=[],l=e.collectProductList;if(l.length>0){var i=l.map((function(l){return t?(l.checked=!0,o.push(l.pid),e.isAllSelect=!0):(l.checked=!1,e.isAllSelect=!1),l}));e.$set(e,"collectProductList",i),e.$set(e,"ids",o)}},jump:function(e){e.is_show?t.navigateTo({url:"/pages/goods_details/index?id="+e.pid}):this.$util.Tips({title:that.$t("该商品已下架")})},onLoadFun:function(){this.loadend=!1,this.page=1,this.$set(this,"collectProductList",[]),this.getUserCollectProduct()},authColse:function(t){this.isShowAuth=t},getUserCollectProduct:function(){var t=this,e=this;this.loading||this.loadend||(e.loading=!0,e.loadTitle="",(0,n.getCollectUserList)({page:e.page,limit:e.limit}).then((function(o){t.count=o.data.count;var l=o.data.list;l.map((function(t){t.checked=!1}));var i=l.length<e.limit;e.collectProductList=e.$util.SplitArray(l,e.collectProductList),e.$set(e,"collectProductList",e.collectProductList),e.loadend=i,e.loadTitle=i?e.$t("我也是有底线的"):e.$t("加载更多"),e.collectProductList.length||1!=e.page||t.get_host_product(),e.page=e.page+1,e.loading=!1})).catch((function(t){e.loading=!1,e.loadTitle=e.$t("加载更多")})))},get_host_product:function(){var t=this;t.hotScroll||(0,n.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))}}},(0,c.default)(i,"onReachBottom",(function(){this.getUserCollectProduct()})),(0,c.default)(i,"onPageScroll",(function(e){t.$emit("scroll")})),i);e.default=r}).call(this,o("543d")["default"])}},[["28b5","common/runtime","common/vendor"]]]);