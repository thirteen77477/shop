(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-15a639cc"],{"0996":function(t,e,n){"use strict";n.r(e),n("d81d"),n("a15b"),n("b0c0");var a=n("a584"),i=n("c71e"),r=n("0c9f"),s=n("61f7"),c=n("9901");a={name:"index",components:{cardsData:a.a,echartsNew:i.a,echartsFrom:c.a},data:function(){return{timeVal:[],style:{height:"400px"},infoList:{},infoList2:{},echartLeft:!0,echartRight:!1,loading:!1,loading2:!1,fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"本周",val:"week"},{text:"本月",val:"month"},{text:"本季度",val:"quarter"},{text:"本年",val:"year"}]},formValidate:{time:""},cardLists:[{col:6,count:0,name:"昨日新增关注",className:"md-rose"},{col:6,count:0,name:"昨日参与",className:"ios-speedometer-outline"},{col:6,count:0,name:"总关注",className:"ios-speedometer-outline"},{col:6,count:0,name:"参与总人数",className:"md-rose"}],optionData:{},spinShow:!1,options:this.$timeOptions,columns:[{title:"序号",type:"index",width:60,align:"center"},{title:"来源",key:"name",minWidth:80,align:"center"},{title:"金额",width:180,key:"value",align:"center"},{title:"占比率",slot:"percent",minWidth:100,align:"center"}]}},created:function(){this.id=this.$route.query.id;var t=new Date,e=new Date;e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-29))),this.timeVal=[e,t],this.formValidate.time=Object(s.a)(e,"yyyy/MM/dd")+"-"+Object(s.a)(t,"yyyy/MM/dd"),this.wechatQrcodeStatistic()},methods:{wechatQrcodeStatistic:function(){var t=this;Object(r.w)(this.id,this.formValidate).then((function(e){var n=["y_follow","y_scan","all_follow","all_scan"];t.cardLists.map((function(t,a){t.count=e.data[n[a]]})),t.getTrend(e.data.trend.series,e.data.trend.xAxis)}))},timeG:function(t){return t=new Date(t),t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},selectChange:function(t){},onchangeTime:function(t){this.timeVal=t,this.formValidate.time=this.timeVal.join("-"),this.name=this.formValidate.time,this.wechatQrcodeStatistic()},getTrend:function(t,e){this.spinShow=!0;var n=t.map((function(t){return t.name})),a=["#5B8FF9","#5AD8A6","#FFAB2B","#5D7092"],i=[];t.map((function(t,e){i.push({name:t.name,type:"line",data:t.data,itemStyle:{normal:{color:a[e]}},smooth:0})})),this.optionData={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{x:"center",data:n},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!0,axisLabel:{interval:0,rotate:40,textStyle:{color:"#000000"}},data:e},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}}},series:i},this.spinShow=!1}}},n("d5c7"),i=n("2877"),c=Object(i.a)(a,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",[e("div",{staticClass:"i-layout-page-header header-title"},[e("div",{staticClass:"fl_header"},[e("span",[e("Button",{attrs:{icon:"ios-arrow-back",size:"small",type:"text"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1),e("Divider",{attrs:{type:"vertical"}}),e("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])],1)]),0<=t.cardLists.length?e("cards-data",{attrs:{cardLists:t.cardLists}}):t._e(),e("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[e("div",{staticClass:"table-head"},[e("h3",[t._v("关注趋势")]),e("DatePicker",{staticClass:"mr20",staticStyle:{width:"200px"},attrs:{editable:!1,clearable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-start",placeholder:"请选择时间",options:t.options},on:{"on-change":t.onchangeTime}})],1),t.optionData?e("echarts-new",{attrs:{"option-data":t.optionData,styles:t.style,height:"100%",width:"100%"}}):t._e()],1),t.spinShow?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)}),[],!1,null,"f0c5628e",null);e.default=c.exports},"0c9f":function(t,e,n){"use strict";n.d(e,"j",(function(){return i})),n.d(e,"o",(function(){return r})),n.d(e,"m",(function(){return s})),n.d(e,"l",(function(){return c})),n.d(e,"p",(function(){return o})),n.d(e,"r",(function(){return u})),n.d(e,"s",(function(){return l})),n.d(e,"v",(function(){return d})),n.d(e,"t",(function(){return h})),n.d(e,"u",(function(){return f})),n.d(e,"q",(function(){return m})),n.d(e,"n",(function(){return g})),n.d(e,"k",(function(){return p})),n.d(e,"e",(function(){return y})),n.d(e,"h",(function(){return b})),n.d(e,"f",(function(){return x})),n.d(e,"i",(function(){return v})),n.d(e,"g",(function(){return w})),n.d(e,"a",(function(){return _})),n.d(e,"c",(function(){return C})),n.d(e,"b",(function(){return O})),n.d(e,"d",(function(){return j})),n.d(e,"w",(function(){return S}));var a=n("6b6c");function i(t){return Object(a.a)({url:"/statistic/product/get_basic",method:"get",params:t})}function r(t){return Object(a.a)({url:"/statistic/product/get_trend",method:"get",params:t})}function s(t){return Object(a.a)({url:"/statistic/product/get_product_ranking",method:"get",params:t})}function c(t){return Object(a.a)({url:"/statistic/product/get_excel",method:"get",params:t})}function o(t){return Object(a.a)({url:"/statistic/user/get_basic",method:"get",params:t})}function u(t){return Object(a.a)({url:"/statistic/user/get_trend",method:"get",params:t})}function l(t){return Object(a.a)({url:"/statistic/user/get_wechat",method:"get",params:t})}function d(t){return Object(a.a)({url:"/statistic/user/get_wechat_trend",method:"get",params:t})}function h(t){return Object(a.a)({url:"/statistic/user/get_region",method:"get",params:t})}function f(t){return Object(a.a)({url:"/statistic/user/get_sex",method:"get",params:t})}function m(t){return Object(a.a)({url:"/statistic/user/get_excel",method:"get",params:t})}function g(t){return Object(a.a)({url:"/statistic/trade/top_trade",method:"get",params:t})}function p(t){return Object(a.a)({url:"/statistic/trade/bottom_trade",method:"get",params:t})}function y(t){return Object(a.a)({url:"/statistic/order/get_basic",method:"get",params:t})}function b(t){return Object(a.a)({url:"/statistic/order/get_trend",method:"get",params:t})}function x(t){return Object(a.a)({url:"/statistic/order/get_channel",method:"get",params:t})}function v(t){return Object(a.a)({url:"/statistic/order/get_type",method:"get",params:t})}function w(t){return Object(a.a)({url:"/statistic/flow/get_record",method:"get",params:t})}function _(t){return Object(a.a)({url:"/statistic/balance/get_basic",method:"get",params:t})}function C(t){return Object(a.a)({url:"/statistic/balance/get_trend",method:"get",params:t})}function O(t){return Object(a.a)({url:"/statistic/balance/get_channel",method:"get",params:t})}function j(t){return Object(a.a)({url:"/statistic/balance/get_type",method:"get",params:t})}function S(t,e){return Object(a.a)({url:"app/wechat_qrcode/statistic/".concat(t),method:"get",params:e})}},"2c3e":function(t,e,n){var a=n("da84"),i=n("83ab"),r=n("9f7f").MISSED_STICKY,s=n("c6b6"),c=n("edd0"),o=n("69f3").get,u=RegExp.prototype,l=a.TypeError;i&&r&&c(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===s(this))return!!o(this).sticky;throw l("Incompatible receiver, RegExp required")}}})},"4d63":function(t,e,n){var a=n("83ab"),i=n("da84"),r=n("e330"),s=n("94ca"),c=n("7156"),o=n("9112"),u=n("241c").f,l=n("3a9b"),d=n("44e7"),h=n("577e"),f=n("90d8"),m=n("9f7f"),g=n("aeb0"),p=n("cb2d"),y=n("d039"),b=n("1a2d"),x=n("69f3").enforce,v=n("2626"),w=n("b622"),_=n("fce3"),C=n("107c"),O=w("match"),j=i.RegExp,S=j.prototype,D=i.SyntaxError,L=r(S.exec),E=r("".charAt),F=r("".replace),A=r("".indexOf),k=r("".slice),R=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,T=/a/g,M=/a/g,$=(n=new j(T)!==T,m.MISSED_STICKY),V=m.UNSUPPORTED_Y;w=a&&(!n||$||_||C||y((function(){return M[O]=!1,j(T)!=T||j(M)==M||"/a/i"!=j(T,"i")})));if(s("RegExp",w)){function I(t,e){var n,a,i=l(S,this),r=d(t),s=void 0===e,u=[],m=t;if(!i&&r&&s&&t.constructor===I)return t;if((r||l(S,t))&&(t=t.source,s&&(e=f(m))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),m=t,r=e=_&&"dotAll"in T&&(n=!!e&&-1<A(e,"s"))?F(e,/s/g,""):e,$&&"sticky"in T&&(a=!!e&&-1<A(e,"y"))&&V&&(e=F(e,/y/g,"")),C&&(t=(s=function(t){for(var e,n=t.length,a=0,i="",r=[],s={},c=!1,o=!1,u=0,l="";a<=n;a++){if("\\"===(e=E(t,a)))e+=E(t,++a);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:L(R,k(t,a+1))&&(a+=2,o=!0),i+=e,u++;continue;case">"===e&&o:if(""===l||b(s,l))throw new D("Invalid capture group name");s[l]=!0,o=!(r[r.length]=[l,u]),l="";continue}o?l+=e:i+=e}return[i,r]}(t))[0],u=s[1]),s=c(j(t,e),i?this:S,I),(n||a||u.length)&&(e=x(s),n&&(e.dotAll=!0,e.raw=I(function(t){for(var e,n=t.length,a=0,i="",r=!1;a<=n;a++)"\\"===(e=E(t,a))?i+=e+E(t,++a):r||"."!==e?("["===e?r=!0:"]"===e&&(r=!1),i+=e):i+="[\\s\\S]";return i}(t),r)),a&&(e.sticky=!0),u.length&&(e.groups=u)),t!==m)try{o(s,"source",""===m?"(?:)":m)}catch(t){}return s}for(var B=u(j),z=0;B.length>z;)g(I,j,B[z++]);(S.constructor=I).prototype=S,p(i,"RegExp",I,{constructor:!0})}v("RegExp")},"61f7":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return u}));var a=n("fc11"),i=n("f3f3");function r(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n,a,i={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(n in i)new RegExp("(".concat(n,")")).test(e)&&(a=i[n]+"",e=e.replace(RegExp.$1,1===RegExp.$1.length?a:("00"+a).substr(a.length)));return e}n("ac1f"),n("00b4"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("498a"),n("d3b7"),n("b64b"),n("99af");var s={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};function c(t,e){t.message=function(t){return e.replace("%s",t||"")}}function o(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)({required:!0,message:t,type:"string"},e)}function u(t){return l.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}c(o,"请输入%s"),c(u,"%s格式不正确");var l=Object.keys(s).reduce((function(t,e){return t[e]=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},s="range"===e?{min:t[0],max:t[1]}:Object(a.a)({},e,t);return Object(i.a)(Object(i.a)({message:n.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},s),r)},c(t[e],s[e]),t}),{})},7443:function(t,e,n){"use strict";var a=n("b627");n.n(a).a},"7e9f":function(t,e,n){},9901:function(t,e,n){"use strict";var a=n("313e"),i=n.n(a);a={name:"index",props:{infoList:{type:Object,default:null},series:Array,echartsTitle:{type:String,default:""},yAxisData:{type:Array,default:function(){return[]}},bingXdata:Array},data:function(){return{infoLists:this.infoList,seriesArray:this.series}},watch:{infoList:{handler:function(t,e){this.infoLists=t,this.handleSetVisitChart()},deep:!0},series:{handler:function(t,e){this.seriesArray=t,this.handleSetVisitChart()},deep:!0}},computed:{echarts:function(){return"echarts"+Math.ceil(100*Math.random())}},mounted:function(){var t=this,e=this;e.$nextTick((function(){e.handleSetVisitChart(),window.addEventListener("resize",t.wsFunc)}))},methods:{wsFunc:function(){this.myChart.resize()},handleSetVisitChart:function(){this.myChart=i.a.init(document.getElementById(this.echarts));var t=null;t="circle"===this.echartsTitle?{tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"right",data:this.infoLists.bing_xdata||[]},series:[{name:"访问来源",type:"pie",radius:"70%",center:["50%","60%"],data:this.infoLists.bing_data||[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}:{tooltip:{trigger:"axis"},toolbox:{},legend:{data:this.infoLists.legend||[]},color:["#1495EB","#00CC66","#F9D249","#ff9900","#9860DF"],grid:{left:16,right:25,bottom:10,top:40,containLabel:!0},xAxis:[{type:"category",axisLine:{lineStyle:{color:"#D7DDE4"}},axisTick:{alignWithLabel:!0,lineStyle:{color:"#D7DDE4"}},splitLine:{show:!1,lineStyle:{color:"#F5F7F9"}},axisLabel:{interval:0,rotate:40,textStyle:{color:"#7F8B9C"}},data:this.infoLists.xAxis}],yAxis:this.yAxisData.length?this.yAxisData:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}},type:"value"},series:this.seriesArray};this.myChart.setOption(t,!0)},handleResize:function(){this.myChart.resize()}},beforeDestroy:function(){window.removeEventListener("resize",this.wsFunc),this.myChart&&(this.myChart.dispose(),this.myChart=null)}},n=n("2877"),n=Object(n.a)(a,(function(){var t=this.$createElement;t=this._self._c||t;return t("div",[t("div",{staticStyle:{height:"300px"},attrs:{id:this.echarts}})])}),[],!1,null,"00217dc6",null);e.a=n.exports},a584:function(t,e,n){"use strict";var a={name:"cards",data:function(){return{}},props:{cardLists:Array},methods:{},created:function(){}};n("7443"),n=n("2877"),n=Object(n.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",{staticClass:"ivu-mt",attrs:{type:"flex",align:"middle",gutter:10}},t._l(t.cardLists,(function(e,a){return n("Col",{key:a,staticClass:"ivu-mb",attrs:{xl:e.col,lg:6,md:12,sm:24,xs:24}},[n("Card",{staticClass:"card_cent",attrs:{shadow:"",padding:0}},[n("div",{staticClass:"card_box"},[n("div",{staticClass:"card_box_cir",class:{one:a%5==0,two:a%5==1,three:a%5==2,four:a%5==3,five:a%5==4}},[n("div",{staticClass:"card_box_cir1",class:{one1:a%5==0,two1:a%5==1,three1:a%5==2,four1:a%5==3,five1:a%5==4}},[n("Icon",{attrs:{type:e.className}})],1)]),n("div",{staticClass:"card_box_txt"},[n("span",{staticClass:"sp1",domProps:{textContent:t._s(e.count||0)}}),n("span",{staticClass:"sp2",domProps:{textContent:t._s(e.name)}})])])])],1)})),1)],1)}),[],!1,null,"e3e38522",null);e.a=n.exports},b627:function(t,e,n){},c607:function(t,e,n){var a=n("da84"),i=n("83ab"),r=n("fce3"),s=n("c6b6"),c=n("edd0"),o=n("69f3").get,u=RegExp.prototype,l=a.TypeError;i&&r&&c(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===s(this))return!!o(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})},c71e:function(t,e,n){"use strict";var a=n("313e"),i=n.n(a);a={name:"Index",props:{styles:{type:Object,default:null},optionData:{type:Object,default:null}},data:function(){return{myChart:null}},computed:{echarts:function(){return"echarts"+Math.ceil(100*Math.random())}},watch:{optionData:{handler:function(t,e){this.handleSetVisitChart()},deep:!0}},mounted:function(){var t=this,e=this;e.$nextTick((function(){e.handleSetVisitChart(),window.addEventListener("resize",t.wsFunc)}))},beforeDestroy:function(){window.removeEventListener("resize",this.wsFunc),this.myChart&&(this.myChart.dispose(),this.myChart=null)},methods:{wsFunc:function(){this.myChart.resize()},handleSetVisitChart:function(){this.myChart=i.a.init(document.getElementById(this.echarts));var t=this.optionData;this.myChart.setOption(t,!0)}}},n=n("2877"),n=Object(n.a)(a,(function(){var t=this.$createElement;t=this._self._c||t;return t("div",[t("div",{style:this.styles,attrs:{id:this.echarts}})])}),[],!1,null,"4a0d7a27",null);e.a=n.exports},d5c7:function(t,e,n){"use strict";var a=n("7e9f");n.n(a).a},edd0:function(t,e,n){var a=n("13d2"),i=n("9bf2");t.exports=function(t,e,n){return n.get&&a(n.get,e,{getter:!0}),n.set&&a(n.set,e,{setter:!0}),i.f(t,e,n)}}}]);