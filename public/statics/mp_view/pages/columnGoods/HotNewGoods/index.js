(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/columnGoods/HotNewGoods/index"],{"128c":function(t,n,e){},4261:function(t,n,e){"use strict";var o=e("128c"),i=e.n(o);i.a},"4bd7":function(t,n,e){"use strict";e.r(n);var o=e("bbf0"),i=e("df93");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("4261");var c=e("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=s.exports},"6a25":function(t,n,e){"use strict";(function(t){var o=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("1579"),a=e("2c78"),c=o(e("66ca")),s={name:"HotNewGoods",components:{GoodList:function(){Promise.all([e.e("common/vendor"),e.e("components/goodList/index")]).then(function(){return resolve(e("812b"))}.bind(null,e)).catch(e.oe)},emptyPage:function(){e.e("components/emptyPage").then(function(){return resolve(e("2baa"))}.bind(null,e)).catch(e.oe)},home:function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("03ff"))}.bind(null,e)).catch(e.oe)},pageFooter:function(){Promise.all([e.e("common/vendor"),e.e("components/pageFooter/index")]).then(function(){return resolve(e("d9b2"))}.bind(null,e)).catch(e.oe)}},props:{},mixins:[c.default],data:function(){return{imgUrls:[],goodsList:[],name:"",icon:"",type:0,typeName:["",this.$t("精品推荐"),this.$t("热门榜单"),this.$t("首发新品"),this.$t("促销单品")],autoplay:!0,circular:!0,interval:3e3,duration:500,page:1,limit:8,isScroll:!0}},onLoad:function(n){this.type=n.type,this.titleInfo(),this.name=n.name,t.setNavigationBarTitle({title:n.name}),this.getIndexGroomList()},methods:{titleInfo:function(){"1"===this.type?this.icon="icon-jingpintuijian":"2"===this.type?this.icon="icon-remen":("3"===this.type||"4"===this.type)&&(this.icon="icon-xinpin")},goPages:function(n){var e=n.link||"";(0,a.goPage)().then((function(n){-1!=e.indexOf("http")||(["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(e),t.navigateTo({url:e}))}))},getIndexGroomList:function(){if(this.isScroll){var t=this,n=this.type;(0,i.getGroomList)(n,{page:this.page,limit:this.limit}).then((function(n){t.imgUrls=n.data.banner,t.goodsList=t.goodsList.concat(n.data.list),t.isScroll=n.data.list.length>=t.limit,t.page++})).catch((function(n){t.$util.Tips({title:n})}))}},onReachBottom:function(){this.getIndexGroomList()}}};n.default=s}).call(this,e("543d")["default"])},bbf0:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var o=function(){var t=this.$createElement,n=(this._self._c,0==this.goodsList.length&&!this.isScroll),e=n?this.$t("暂无数据"):null;this.$mp.data=Object.assign({},{$root:{g0:n,m0:e}})},i=[]},df93:function(t,n,e){"use strict";e.r(n);var o=e("6a25"),i=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},fa1b:function(t,n,e){"use strict";(function(t,n){var o=e("4ea4");e("248d");o(e("66fd"));var i=o(e("4bd7"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])}},[["fa1b","common/runtime","common/vendor"]]]);