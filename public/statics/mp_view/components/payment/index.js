(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/payment/index"],{"2ff1":function(e,t,n){},b140:function(e,t,n){"use strict";n.r(t);var i=n("ed46"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},b647:function(e,t,n){"use strict";n.r(t);var i=n("cd18"),a=n("b140");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("da9e");var r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"e80d69e8",null,!1,i["a"],void 0);t["default"]=u.exports},cd18:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$t("选择付款方式")),i=e.__map(e.payMode,(function(t,n){var i=e.__get_orig(t),a="yue"==t.value?e.$t("￥"):null;return{$orig:i,m1:a}})),a=e.$t("支付"),o=e.$t("￥"),r=e.$t("去付款");e.$mp.data=Object.assign({},{$root:{m0:n,l0:i,m2:a,m3:o,m4:r}})},a=[]},da9e:function(e,t,n){"use strict";var i=n("2ff1"),a=n.n(i);a.a},ed46:function(e,t,n){"use strict";(function(e,i){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("451d"),r=a(n("66ca")),u={props:{payMode:{type:Array,default:function(){return[]}},pay_close:{type:Boolean,default:!1},order_id:{type:String,default:""},totalPrice:{type:String,default:"0"},isCall:{type:Boolean,default:!1},friendPay:{type:Boolean,default:!1}},mixins:[r.default],data:function(){return{formContent:"",active:0,paytype:"",number:0}},watch:{payMode:{handler:function(e,t){var n=[];e.forEach((function(e,t){e.payStatus&&(e.index=t,n.push(e))})),this.active=n[0].index,this.paytype=n[0].value,this.number=n[0].number||0},immediate:!0,deep:!0}},methods:{payType:function(e,t,n){this.active=n,this.paytype=t,this.number=e,this.$emit("changePayType",t)},formpost:function(e,t){var n=document.createElement("form");for(var i in n.action=e,n.method="post",n.target="_self",n.style.display="none",t){var a=document.createElement("input");a.name=i,a.value=t[i],n.appendChild(a)}document.body.appendChild(n),this.$nextTick((function(e){n.submit()}))},close:function(){this.$emit("onChangeFun",{action:"payClose"})},goPay:function(t,n){var a=this;if(this.isCall)return this.$emit("onChangeFun",{action:"payCheck",value:n});var r=this;return r.order_id?"yue"==n&&parseFloat(t)<parseFloat(r.totalPrice)?r.$util.Tips({title:r.$t("余额不足")}):(e.showLoading({title:r.$t("支付中")}),"friend"==n&&r.order_id?e.navigateTo({url:"/pages/users/payment_on_behalf/index?order_id="+r.order_id+"&spread="+this.$store.state.app.uid,success:function(e){},fail:function(){},complete:function(){}}):void(0,o.orderPay)({uni:r.order_id,paytype:n,type:r.friendPay?1:0,from:"routine"}).then((function(t){var o=t.data.result.jsConfig;if("ALLINPAY_PAY"==t.data.status)e.hideLoading(),i.openEmbeddedMiniProgram({appId:"wxef277996acc166c3",extraData:{cusid:o.cusid,appid:o.appid,version:o.version,trxamt:o.trxamt,reqsn:o.reqsn,notify_url:o.notify_url,body:o.body,remark:o.remark,validtime:o.validtime,randomstr:o.randomstr,paytype:o.paytype,sign:o.sign,signtype:o.signtype}}),a.jumpData={orderId:t.data.result.orderId,msg:t.msg};else switch(n){case"weixin":if(void 0===t.data.result)return r.$util.Tips({title:r.$t("缺少支付参数")});var u="";u=e.requestOrderPayment?"requestOrderPayment":"requestPayment",e[u]({timeStamp:o.timestamp,nonceStr:o.nonceStr,package:o.package,signType:o.signType,paySign:o.paySign,success:function(t){return e.hideLoading(),r.$util.Tips({title:t.msg,icon:"success"},(function(){r.$emit("onChangeFun",{action:"pay_complete"})}))},fail:function(t){return e.hideLoading(),r.$util.Tips({title:r.$t("取消支付")},(function(){r.$emit("onChangeFun",{action:"pay_fail"})}))},complete:function(t){if(e.hideLoading(),"requestPayment:cancel"==t.errMsg||"requestOrderPayment:cancel"==t.errMsg)return r.$util.Tips({title:r.$t("取消支付")},(function(){r.$emit("onChangeFun",{action:"pay_fail"})}))}});break;case"yue":return e.hideLoading(),r.$util.Tips({title:t.msg,icon:"success"},(function(){r.$emit("onChangeFun",{action:"pay_complete"})}));case"offline":return e.hideLoading(),r.$util.Tips({title:t.msg,icon:"success"},(function(){r.$emit("onChangeFun",{action:"pay_complete"})}));case"friend":return e.hideLoading(),r.$util.Tips({title:t.msg,icon:"success"},(function(){r.$emit("onChangeFun",{action:"pay_complete"})}));case"alipay":e.hideLoading(),e.navigateTo({url:"/pages/users/alipay_invoke/index?id=".concat(t.data.result.order_id,"&link=").concat(t.data.result.jsConfig.qrCode)});break}})).catch((function(t){return e.hideLoading(),r.$util.Tips({title:t},(function(){r.$emit("onChangeFun",{action:"pay_fail"})}))}))):r.$util.Tips({title:r.$t("请选择要支付的订单")})}}};t.default=u}).call(this,n("543d")["default"],n("bc2e")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/payment/index-create-component',
    {
        'components/payment/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b647"))
        })
    },
    [['components/payment/index-create-component']]
]);
