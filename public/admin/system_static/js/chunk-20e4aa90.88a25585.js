(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-20e4aa90"],{"00b8":function(t,e,n){},"1bb0":function(t,e,n){"use strict";var r=n("a056");n.n(r).a},2350:function(t,e,n){"use strict";var r=n("00b8");n.n(r).a},"2c3e":function(t,e,n){var r=n("da84"),i=n("83ab"),u=n("9f7f").MISSED_STICKY,o=n("c6b6"),a=n("edd0"),c=n("69f3").get,s=RegExp.prototype,f=r.TypeError;i&&u&&a(s,"sticky",{configurable:!0,get:function(){if(this!==s){if("RegExp"===o(this))return!!c(this).sticky;throw f("Incompatible receiver, RegExp required")}}})},"3eeb":function(t,e,n){"use strict";n.r(e);var r=n("fc11"),i=(n("4de4"),n("d3b7"),n("b0c0"),{name:"parent",data:function(){return{refreshRouterViewKey:null,keepAliveNameList:[],keepAliveNameNewList:[]}},computed:{},created:function(){var t=this;this.keepAliveNameList=this.getKeepAliveNames(),this.bus.$on("onTagsViewRefreshRouterView",(function(e){if(t.$route.path!==e)return!1;t.keepAliveNameList=t.getKeepAliveNames().filter((function(e){return t.$route.name!==e})),t.refreshRouterViewKey=t.$route.path,t.$nextTick((function(){t.refreshRouterViewKey=null,t.keepAliveNameList=t.getKeepAliveNames()}))}))}});Object(r.a)(i,"computed",{setTransitionName:function(){return this.$store.state.themeConfig.themeConfig.animation}}),Object(r.a)(i,"methods",{getKeepAliveNames:function(){return this.$store.state.keepAliveNames.keepAliveNames}});r=i,i=n("2877"),r=Object(i.a)(r,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",{staticClass:"h100"},[e("transition",{attrs:{name:t.setTransitionName,mode:"out-in"}},[e("keep-alive",{attrs:{include:t.keepAliveNameList}},[e("router-view",{key:t.refreshRouterViewKey})],1)],1)],1)}),[],!1,null,null,null).exports;var u=n("8593"),o={name:"i-copyright",data:function(){return{links:[{title:"官网",key:"官网",href:"https://www.crmeb.com"},{title:"社区",key:"社区",href:"http://q.crmeb.com"},{title:"文档",key:"文档",href:"http://doc.crmeb.com"}],copyright:"Copyright © 2014-2023",version:""}},created:function(){this.getVersion()},methods:{getVersion:function(){var t=this;this.version=this.$store.state.userInfo.version,Object(u.z)().then((function(e){t.copyright=e.data.copyrightContext}))}}};n("1bb0"),o={components:{iCopyright:Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ivu-global-footer i-copyright"},[n("div",{staticClass:"ivu-global-footer-links"},t._l(t.links,(function(e,r){return n("a",{key:r,attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.title))])})),0),t.copyright?n("div",{staticClass:"ivu-global-footer-copyright"},[t._v(t._s(t.copyright))]):n("div",{staticClass:"ivu-global-footer-copyright"},[t._v("\n    Copyright © 2014-2023\n    "),n("a",{attrs:{href:"https://www.crmeb.com",target:"_blank"}},[t._v(t._s(t.version))])])])}),[],!1,null,null,null).exports},name:"layoutFooter",data:function(){return{}}},n("634b"),o=Object(i.a)(o,(function(){var t=this.$createElement;t=this._self._c||t;return t("div",{staticClass:"layout-footer mt15"},[t("div",{staticClass:"layout-footer-warp"},[t("iCopyright")],1)])}),[],!1,null,"74dafe83",null).exports;n("99af"),n("ac1f"),n("5319"),n("25f0"),n("a15b"),n("4d63"),n("c607"),n("2c3e"),n("00b4");var a={name:"layoutLinkView",props:{meta:{type:Object,default:function(){}}},methods:{onGotoFullPage:function(){var t=window.location,e=t.origin;t=t.pathname;/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(this.isLink)?window.open(this.isLink):window.open("".concat(e).concat(t,"#").concat(this.isLink))}}};n("2350"),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",{staticClass:"layout-scrollbar layout-link-container"},[e("div",{staticClass:"layout-view-bg-white flex layout-view-link"},[e("div",{staticClass:"layout-link-warp"},[e("i",{staticClass:"layout-link-icon iconfont icon-xingqiu"}),e("div",{staticClass:"layout-link-msg"},[t._v('页面 "'+t._s(t.$t(t.meta.title))+'" 已在新窗口中打开')]),e("el-button",{staticClass:"mt30",attrs:{round:"",size:"small"},on:{click:t.onGotoFullPage}},[e("i",{staticClass:"iconfont icon-lianjie"}),e("span",[t._v("立即前往")])])],1)])])}),[],!1,null,"386d1451",null).exports,a={name:"layoutIfameView",props:{meta:{type:Object,default:function(){}}},data:function(){return{iframeLoading:!0}},created:function(){var t=this;this.bus.$on("onTagsViewRefreshRouterView",(function(e){if(t.$route.path!==e)return!1;t.$emit("getCurrentRouteMeta")}))},mounted:function(){this.initIframeLoad()},methods:{initIframeLoad:function(){var t=this;this.$nextTick((function(){t.iframeLoading=!0;var e=document.getElementById("iframe");if(!e)return!1;e.onload=function(){t.iframeLoading=!1}}))}}},r={name:"layoutMain",components:{LayoutParentView:r,Footers:o,Links:n,Iframes:Object(i.a)(a,(function(){var t=this.$createElement;t=this._self._c||t;return t("div",[t("div",{directives:[{name:"loading",rawName:"v-loading",value:this.iframeLoading,expression:"iframeLoading"}],staticClass:"layout-view-bg-white flex h100"},[t("iframe",{attrs:{src:this.meta.isLink,frameborder:"0",height:"100%",width:"100%",id:"iframe"}})])])}),[],!1,null,null,null).exports},data:function(){return{headerHeight:"",currentRouteMeta:{},isShowLink:!1}},computed:{getThemeConfig:function(){return this.$store.state.themeConfig.themeConfig}},mounted:function(){this.initHeaderHeight(),this.initCurrentRouteMeta(this.$route.meta)},methods:{initCurrentRouteMeta:function(t){var e=this;this.isShowLink=!1,this.currentRouteMeta=t,setTimeout((function(){e.isShowLink=!0}),100)},initHeaderHeight:function(){var t=this.$store.state.themeConfig.themeConfig.isTagsview;return this.headerHeight=t?"84px":"50px"},onGetCurrentRouteMeta:function(){this.initCurrentRouteMeta(this.$route.meta)}},watch:{"$store.state.themeConfig.themeConfig":{handler:function(t){if(this.headerHeight=t.isTagsview?"84px":"50px",t.isFixedHeaderChange!==t.isFixedHeader){if(!this.$refs.layoutScrollbarRef)return!1;this.$refs.layoutScrollbarRef.update()}},deep:!0},$route:{handler:function(t){this.initCurrentRouteMeta(t.meta),this.$refs.layoutScrollbarRef.wrap.scrollTop=0},deep:!0}}},o=Object(i.a)(r,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("el-main",{staticClass:"layout-main"},[e("el-scrollbar",{directives:[{name:"show",rawName:"v-show",value:!t.currentRouteMeta.isLink&&!t.currentRouteMeta.isIframe,expression:"!currentRouteMeta.isLink && !currentRouteMeta.isIframe"}],ref:"layoutScrollbarRef",staticClass:"layout-scrollbar",style:{minHeight:"calc(100vh - "+t.headerHeight}},[e("LayoutParentView"),t.getThemeConfig.isFooter?e("Footers"):t._e()],1),t.currentRouteMeta.isLink&&!t.currentRouteMeta.isIframe?e("Links",{style:{height:"calc(100vh - "+t.headerHeight},attrs:{meta:t.currentRouteMeta}}):t._e(),t.currentRouteMeta.isLink&&t.currentRouteMeta.isIframe&&t.isShowLink?e("Iframes",{style:{height:"calc(100vh - "+t.headerHeight},attrs:{meta:t.currentRouteMeta},on:{getCurrentRouteMeta:t.onGetCurrentRouteMeta}}):t._e()],1)}),[],!1,null,null,null);e.default=o.exports},"4d63":function(t,e,n){var r=n("83ab"),i=n("da84"),u=n("e330"),o=n("94ca"),a=n("7156"),c=n("9112"),s=n("241c").f,f=n("3a9b"),d=n("44e7"),l=n("577e"),m=n("90d8"),h=n("9f7f"),g=n("aeb0"),b=n("cb2d"),p=n("d039"),y=n("1a2d"),v=n("69f3").enforce,O=n("2626"),j=n("b622"),_=n("fce3"),k=n("107c"),w=j("match"),C=i.RegExp,R=C.prototype,T=i.SyntaxError,E=u(R.exec),x=u("".charAt),L=u("".replace),$=u("".indexOf),S=u("".slice),M=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,I=/a/g,N=/a/g,A=(n=new C(I)!==I,h.MISSED_STICKY),G=h.UNSUPPORTED_Y;j=r&&(!n||A||_||k||p((function(){return N[w]=!1,C(I)!=I||C(N)==N||"/a/i"!=C(I,"i")})));if(o("RegExp",j)){function P(t,e){var n,r,i=f(R,this),u=d(t),o=void 0===e,s=[],h=t;if(!i&&u&&o&&t.constructor===P)return t;if((u||f(R,t))&&(t=t.source,o&&(e=m(h))),t=void 0===t?"":l(t),e=void 0===e?"":l(e),h=t,u=e=_&&"dotAll"in I&&(n=!!e&&-1<$(e,"s"))?L(e,/s/g,""):e,A&&"sticky"in I&&(r=!!e&&-1<$(e,"y"))&&G&&(e=L(e,/y/g,"")),k&&(t=(o=function(t){for(var e,n=t.length,r=0,i="",u=[],o={},a=!1,c=!1,s=0,f="";r<=n;r++){if("\\"===(e=x(t,r)))e+=x(t,++r);else if("]"===e)a=!1;else if(!a)switch(!0){case"["===e:a=!0;break;case"("===e:E(M,S(t,r+1))&&(r+=2,c=!0),i+=e,s++;continue;case">"===e&&c:if(""===f||y(o,f))throw new T("Invalid capture group name");o[f]=!0,c=!(u[u.length]=[f,s]),f="";continue}c?f+=e:i+=e}return[i,u]}(t))[0],s=o[1]),o=a(C(t,e),i?this:R,P),(n||r||s.length)&&(e=v(o),n&&(e.dotAll=!0,e.raw=P(function(t){for(var e,n=t.length,r=0,i="",u=!1;r<=n;r++)"\\"===(e=x(t,r))?i+=e+x(t,++r):u||"."!==e?("["===e?u=!0:"]"===e&&(u=!1),i+=e):i+="[\\s\\S]";return i}(t),u)),r&&(e.sticky=!0),s.length&&(e.groups=s)),t!==h)try{c(o,"source",""===h?"(?:)":h)}catch(t){}return o}for(var V=s(C),H=0;V.length>H;)g(P,C,V[H++]);(R.constructor=P).prototype=R,b(i,"RegExp",P,{constructor:!0})}O("RegExp")},"634b":function(t,e,n){"use strict";var r=n("ba66");n.n(r).a},8593:function(t,e,n){"use strict";n.d(e,"i",(function(){return i})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return o})),n.d(e,"db",(function(){return a})),n.d(e,"m",(function(){return c})),n.d(e,"k",(function(){return s})),n.d(e,"l",(function(){return f})),n.d(e,"j",(function(){return d})),n.d(e,"L",(function(){return l})),n.d(e,"D",(function(){return m})),n.d(e,"K",(function(){return h})),n.d(e,"I",(function(){return g})),n.d(e,"F",(function(){return b})),n.d(e,"G",(function(){return p})),n.d(e,"H",(function(){return y})),n.d(e,"J",(function(){return v})),n.d(e,"Z",(function(){return O})),n.d(e,"fb",(function(){return j})),n.d(e,"s",(function(){return _})),n.d(e,"c",(function(){return k})),n.d(e,"e",(function(){return w})),n.d(e,"b",(function(){return C})),n.d(e,"d",(function(){return R})),n.d(e,"f",(function(){return T})),n.d(e,"w",(function(){return E})),n.d(e,"u",(function(){return x})),n.d(e,"v",(function(){return L})),n.d(e,"Q",(function(){return $})),n.d(e,"P",(function(){return S})),n.d(e,"R",(function(){return M})),n.d(e,"Y",(function(){return I})),n.d(e,"o",(function(){return N})),n.d(e,"n",(function(){return A})),n.d(e,"U",(function(){return G})),n.d(e,"q",(function(){return P})),n.d(e,"t",(function(){return V})),n.d(e,"V",(function(){return H})),n.d(e,"a",(function(){return F})),n.d(e,"A",(function(){return K})),n.d(e,"cb",(function(){return z})),n.d(e,"E",(function(){return q})),n.d(e,"rb",(function(){return U})),n.d(e,"qb",(function(){return D})),n.d(e,"M",(function(){return Y})),n.d(e,"O",(function(){return J})),n.d(e,"B",(function(){return B})),n.d(e,"S",(function(){return Q})),n.d(e,"T",(function(){return W})),n.d(e,"x",(function(){return X})),n.d(e,"ab",(function(){return Z})),n.d(e,"y",(function(){return tt})),n.d(e,"bb",(function(){return et})),n.d(e,"p",(function(){return nt})),n.d(e,"C",(function(){return rt})),n.d(e,"z",(function(){return it})),n.d(e,"W",(function(){return ut})),n.d(e,"lb",(function(){return ot})),n.d(e,"nb",(function(){return at})),n.d(e,"kb",(function(){return ct})),n.d(e,"ob",(function(){return st})),n.d(e,"mb",(function(){return ft})),n.d(e,"r",(function(){return dt})),n.d(e,"pb",(function(){return lt})),n.d(e,"gb",(function(){return mt})),n.d(e,"eb",(function(){return ht})),n.d(e,"hb",(function(){return gt})),n.d(e,"X",(function(){return bt})),n.d(e,"jb",(function(){return pt})),n.d(e,"N",(function(){return yt})),n.d(e,"ib",(function(){return vt})),n("99af");var r=n("6b6c");function i(t){return Object(r.a)({url:"setting/config_class",method:"get",params:t})}function u(t){return Object(r.a)({url:"setting/config_class/create",method:"get"})}function o(t){return Object(r.a)({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function a(t){return Object(r.a)({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function c(t){return Object(r.a)({url:"setting/config",method:"get",params:t})}function s(t){return Object(r.a)({url:"setting/config/create",method:"get",params:t})}function f(t){return Object(r.a)({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function d(t,e){return Object(r.a)({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function l(t){return Object(r.a)({url:"setting/group",method:"get",params:t})}function m(t){return Object(r.a)({url:t.url,method:t.method,data:t.datas})}function h(t){return Object(r.a)({url:"setting/group/".concat(t),method:"get"})}function g(t,e){return Object(r.a)({url:e,method:"get",params:t})}function b(t,e){return Object(r.a)({url:e,method:"get",params:t})}function p(t,e){return Object(r.a)({url:e,method:"get",params:t})}function y(t,e){return Object(r.a)({url:e,method:"get",params:t})}function v(t){return Object(r.a)({url:t,method:"PUT"})}function O(t){return Object(r.a)({url:"system/log/search_admin",method:"GET"})}function j(t){return Object(r.a)({url:"system/log",method:"GET",params:t})}function _(){return Object(r.a)({url:"system/file",method:"GET"})}function k(){return Object(r.a)({url:"system/backup",method:"GET"})}function w(t){return Object(r.a)({url:"system/backup/read",method:"GET",params:t})}function C(t){return Object(r.a)({url:"system/backup/backup",method:"put",data:t})}function R(t){return Object(r.a)({url:"system/backup/optimize",method:"put",data:t})}function T(t){return Object(r.a)({url:"system/backup/repair",method:"put",data:t})}function E(t){return Object(r.a)({url:"system/backup/file_list",method:"GET"})}function x(t){return Object(r.a)({url:"backup/download",method:"get",params:t})}function L(t){return Object(r.a)({url:"system/backup/import",method:"POST",data:t})}function $(t){return Object(r.a)({url:"system/file/login",method:"POST",data:t})}function S(t){return Object(r.a)({url:"system/file/opendir",method:"GET",params:t,file_edit:!0})}function M(t){return Object(r.a)({url:"system/file/openfile",method:"GET",params:t,file_edit:!0})}function I(t){return Object(r.a)({url:"system/file/savefile?fileToken=".concat(t.fileToken),method:"post",data:t,file_edit:!0})}function N(t){return Object(r.a)({url:"system/file/createFolder",method:"GET",params:t,file_edit:!0})}function A(t){return Object(r.a)({url:"system/file/createFile",method:"GET",params:t,file_edit:!0})}function G(t){return Object(r.a)({url:"system/file/rename",method:"GET",params:t,file_edit:!0})}function P(t){return Object(r.a)({url:"system/file/delFolder",method:"GET",params:t,file_edit:!0})}function V(t){return Object(r.a)({url:"system/file/mark",method:"get",params:t,file_edit:!0})}function H(t){return Object(r.a)({url:"system/replace_site_url",method:"post",data:t})}function F(){return Object(r.a)({url:"auth",method:"get"})}function K(){return Object(r.a)({url:"setting/get_kf_adv",method:"get"})}function z(t){return Object(r.a)({url:"setting/set_kf_adv",method:"post",data:t})}function q(){return Object(r.a)({url:"setting/group_all",method:"get"})}function U(t){return Object(r.a)({url:"system/version_list",method:"get",params:t})}function D(t){return Object(r.a)({url:"system/version_crate/".concat(t),method:"get"})}function Y(t){return Object(r.a)({url:"setting/group_data/save_all",method:"POST",data:t})}function J(t){return Object(r.a)({url:"diy/open_adv/add",method:"POST",data:t})}function B(){return Object(r.a)({url:"diy/open_adv/info",method:"get"})}function Q(t){return Object(r.a)({url:"setting/config/get_system/".concat(t),method:"get"})}function W(t){return Object(r.a)({url:"setting/config/save_basics",method:"POST",data:t})}function X(){return Object(r.a)({url:"setting/get_user_agreement",method:"get"})}function Z(t){return Object(r.a)({url:"setting/set_user_agreement",method:"post",data:t})}function tt(t){return Object(r.a)({url:"setting/get_agreement/".concat(t),method:"get"})}function et(t,e){return Object(r.a)({url:"setting/save_agreement",method:"post",data:t})}function nt(t){return Object(r.a)({url:"crmeb_product",method:"get",params:t})}function rt(){return Object(r.a)({url:"setting/get_version",method:"get"})}function it(){return Object(r.a)({url:"copyright",method:"get"})}function ut(t){return Object(r.a)({url:"copyright",method:"post",data:t})}function ot(t){return Object(r.a)({url:"/system/upgrade/list",method:"get",params:t})}function at(){return Object(r.a)({url:"/system/upgrade_progress",method:"get"})}function ct(){return Object(r.a)({url:"/system/upgrade/agreement",method:"get"})}function st(){return Object(r.a)({url:"/system/upgrade_status",method:"get"})}function ft(t){return Object(r.a)({url:"/system/upgrade_log/list",method:"get",params:t})}function dt(t){return Object(r.a)({url:"/system/upgrade_download/"+t,method:"POST"})}function lt(t){return Object(r.a)({url:"/system/upgradeable/list",method:"get",params:t})}function mt(t){return Object(r.a)({url:"system/crontab/list",params:t})}function ht(t,e){return Object(r.a)({url:"system/crontab/set_open/".concat(t,"/").concat(e)})}function gt(t){return Object(r.a)({url:"system/crontab/info/".concat(t)})}function bt(t){return Object(r.a)({url:"system/crontab/save",method:"post",data:t})}function pt(t){return Object(r.a)({url:"system/database/update_mark",method:"post",data:t})}function yt(t,e){return Object(r.a)({url:"system/file/mark/save?fileToken=".concat(t),method:"post",data:e})}function vt(){return Object(r.a)({url:"system/crontab/mark"})}},a056:function(t,e,n){},ba66:function(t,e,n){},c607:function(t,e,n){var r=n("da84"),i=n("83ab"),u=n("fce3"),o=n("c6b6"),a=n("edd0"),c=n("69f3").get,s=RegExp.prototype,f=r.TypeError;i&&u&&a(s,"dotAll",{configurable:!0,get:function(){if(this!==s){if("RegExp"===o(this))return!!c(this).dotAll;throw f("Incompatible receiver, RegExp required")}}})},edd0:function(t,e,n){var r=n("13d2"),i=n("9bf2");t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}}}]);