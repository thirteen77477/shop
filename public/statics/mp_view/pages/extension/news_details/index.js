require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extension/news_details/index"],{"06a5":function(t,e,n){"use strict";var i=n("eea1"),a=n.n(i);a.a},2794:function(t,e,n){"use strict";n.r(e);var i=n("7557"),a=n("648c");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("06a5");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=s.exports},"648c":function(t,e,n){"use strict";n.r(e);var i=n("908c"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},7557:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={jyfParser:function(){return Promise.all([n.e("common/vendor"),n.e("components/jyf-parser/jyf-parser")]).then(n.bind(null,"dce2"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.store_info.id?t.$t("￥"):null),i=t.store_info.id?t.$t("￥"):null,a=t.store_info.id?t.$t("查看商品"):null,o=t.$t("和好友一起分享");t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:a,m3:o}})},o=[]},"908c":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("d322"),o=i(n("66ca")),r=n("8ba8"),s={components:{shareInfo:function(){n.e("pages/extension/components/shareInfo/index").then(function(){return resolve(n("d67f"))}.bind(null,n)).catch(n.oe)},home:function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("03ff"))}.bind(null,n)).catch(n.oe)},"jyf-parser":function(){Promise.all([n.e("common/vendor"),n.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(n("dce2"))}.bind(null,n)).catch(n.oe)}},mixins:[o.default],data:function(){return{id:0,articleInfo:[],store_info:{},content:"",shareInfoStatus:!1,tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"}}},onLoad:function(e){e.hasOwnProperty("id")?this.id=e.id:t.navigateBack({delta:1})},onShow:function(){this.getArticleOne()},onShareAppMessage:function(){return this.$set(this,"actionSheetHidden",!this.actionSheetHidden),(0,r.userShare)(),{title:this.articleInfo.title||"",imageUrl:this.articleInfo.image_input.length?this.articleInfo.image_input[0]:"",path:"/pages/extension/news_details/index?id="+this.id+"&spid="+this.$store.state.app.uid}},onShareTimeline:function(){return(0,r.userShare)(),{title:this.articleInfo.title,query:{id:this.id,spid:this.$store.state.app.uid||0},imageUrl:this.articleInfo.image_input.length?this.articleInfo.image_input[0]:""}},methods:{getArticleOne:function(){var e=this;(0,a.getArticleDetails)(e.id).then((function(n){t.setNavigationBarTitle({title:n.data.title.substring(0,7)+"..."}),e.$set(e,"articleInfo",n.data),e.$set(e,"store_info",n.data.store_info?n.data.store_info:{}),e.content=n.data.content}))},listenerActionSheet:function(){this.shareInfoStatus=!0},setShareInfoStatus:function(){this.shareInfoStatus=!1},setShareInfo:function(){var t=location.href+"&spid="+this.$store.state.app.uid,e={title:this.articleInfo.title,desc:this.articleInfo.synopsis,link:t,imgUrl:this.articleInfo.image_input.length?this.articleInfo.image_input[0]:""};this.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"],e)}}};e.default=s}).call(this,n("543d")["default"])},e863:function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("248d");i(n("66fd"));var a=i(n("2794"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},eea1:function(t,e,n){}},[["e863","common/runtime","common/vendor"]]]);