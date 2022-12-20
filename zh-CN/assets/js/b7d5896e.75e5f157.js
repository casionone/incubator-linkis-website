"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7588],{3905:(t,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>g});var e=n(67294);function l(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function d(t,a){if(null==t)return{};var n,e,l=function(t,a){if(null==t)return{};var n,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||(l[n]=t[n]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=e.createContext({}),m=function(t){var a=e.useContext(p),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},u=function(t){var a=m(t.components);return e.createElement(p.Provider,{value:a},t.children)},k={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},N=e.forwardRef((function(t,a){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),N=m(n),g=l,o=N["".concat(p,".").concat(g)]||N[g]||k[g]||r;return n?e.createElement(o,i(i({ref:a},u),{},{components:n})):e.createElement(o,i({ref:a},u))}));function g(t,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=N;var d={};for(var p in a)hasOwnProperty.call(a,p)&&(d[p]=a[p]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var m=2;m<r;m++)i[m]=n[m];return e.createElement.apply(null,i)}return e.createElement.apply(null,n)}N.displayName="MDXCreateElement"},2409:(t,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var e=n(87462),l=(n(67294),n(3905));const r={title:"UDF \u7684\u8868\u7ed3\u6784",sidebar_position:2},i=void 0,d={unversionedId:"table/udf-table",id:"version-1.3.0/table/udf-table",title:"UDF \u7684\u8868\u7ed3\u6784",description:"1.linkispsudf_baseinfo",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/table/udf-table.md",sourceDirName:"table",slug:"/table/udf-table",permalink:"/zh-CN/docs/latest/table/udf-table",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/table/udf-table.md",tags:[],version:"1.3.0",sidebarPosition:2,frontMatter:{title:"UDF \u7684\u8868\u7ed3\u6784",sidebar_position:2},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"\u4efb\u52a1\u7ba1\u7406",permalink:"/zh-CN/docs/latest/api/http/linkis-cg-entrance-api/task-management-api"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/latest/architecture/overview"}},p={},m=[{value:"1.linkis_ps_udf_baseinfo",id:"1linkis_ps_udf_baseinfo",level:2},{value:"2.linkis_ps_udf_manager",id:"2linkis_ps_udf_manager",level:2},{value:"3.linkis_ps_udf_shared_info",id:"3linkis_ps_udf_shared_info",level:2},{value:"4.linkis_ps_udf_tree",id:"4linkis_ps_udf_tree",level:2},{value:"5.linkis_ps_udf_user_load",id:"5linkis_ps_udf_user_load",level:2},{value:"6.linkis_ps_udf_version",id:"6linkis_ps_udf_version",level:2},{value:"ER\u56fe",id:"er\u56fe",level:2}],u={toc:m};function k(t){let{components:a,...r}=t;return(0,l.kt)("wrapper",(0,e.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1linkis_ps_udf_baseinfo"},"1.linkis_ps_udf_baseinfo"),(0,l.kt)("p",null,"udf\u51fd\u6570\u7684\u57fa\u672c\u4fe1\u606f\u8868\uff0c\u5b58\u50a8udf\u540d\u79f0/\u7c7b\u578b\u7b49\u57fa\u7840\u4fe1\u606f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5e8f\u53f7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u989d\u5916"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u952e\u81ea\u589eid"),(0,l.kt)("td",{parentName:"tr",align:null},"bigint(20)"),(0,l.kt)("td",{parentName:"tr",align:null},"PRI"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"auto_increment"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"create_user")),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7528\u6237"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(50)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"udf_name")),(0,l.kt)("td",{parentName:"tr",align:null},"udf\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(255)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"udf_type")),(0,l.kt)("td",{parentName:"tr",align:null},"udf\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"int(11)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tree_id")),(0,l.kt)("td",{parentName:"tr",align:null},"linkis_ps_udf_tree\u7684id"),(0,l.kt)("td",{parentName:"tr",align:null},"bigint(20)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"create_time")),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"on update CURRENT_TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},"CURRENT_TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"update_time")),(0,l.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"CURRENT_TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sys")),(0,l.kt)("td",{parentName:"tr",align:null},"source system"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(255)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ide")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cluster_name")),(0,l.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u540d \uff0c\u6682\u65f6\u672a\u4f7f\u7528\u5230\uff0c\u9ed8\u8ba4\u90fd\u662fall"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(255)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is_expire")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8fc7\u671f"),(0,l.kt)("td",{parentName:"tr",align:null},"bit(1)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is_shared")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u88ab\u5206\u4eab"),(0,l.kt)("td",{parentName:"tr",align:null},"bit(1)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"udf_type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"udf_type 0\uff1audf\u51fd\u6570-\u901a\u7528\nudf_type 2: udf\u51fd\u6570-spark\n\nudf_type 3:\u81ea\u5b9a\u4e49\u51fd\u6570-python\u51fd\u6570\nudf_type 4:\u81ea\u5b9a\u4e49\u51fd\u6570-scala \u51fd\u6570\n")),(0,l.kt)("h2",{id:"2linkis_ps_udf_manager"},"2.linkis_ps_udf_manager"),(0,l.kt)("p",null,"udf\u51fd\u6570\u7684\u7ba1\u7406\u5458\u7528\u6237\u8868\uff0c\u5177\u6709\u5171\u4eab\u6743\u9650\uff0c\u53ea\u6709udf\u7ba1\u7406\u5458 \u524d\u7aef\u624d\u6709\u5171\u4eab\u7684\u5165\u53e3"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5e8f\u53f7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u989d\u5916"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"bigint(20)"),(0,l.kt)("td",{parentName:"tr",align:null},"PRI"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"auto_increment"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user_name")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(20)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"3linkis_ps_udf_shared_info"},"3.linkis_ps_udf_shared_info"),(0,l.kt)("p",null,"udf\u5171\u4eab\u7684\u8bb0\u5f55\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5e8f\u53f7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u989d\u5916"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"bigint(20)"),(0,l.kt)("td",{parentName:"tr",align:null},"PRI"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"auto_increment"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"udf_id")),(0,l.kt)("td",{parentName:"tr",align:null},"linkis_ps_udf_baseinfo\u7684id"),(0,l.kt)("td",{parentName:"tr",align:null},"bigint(20)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user_name")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5171\u4eab\u4f7f\u7528\u7684\u7528\u6237\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(50)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"4linkis_ps_udf_tree"},"4.linkis_ps_udf_tree"),(0,l.kt)("p",null,"udf\u5206\u7c7b\u7684\u6811\u5f62\u5c42\u7ea7\u8bb0\u5f55\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5e8f\u53f7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u989d\u5916"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"bigint(20)"),(0,l.kt)("td",{parentName:"tr",align:null},"PRI"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"auto_increment"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"parent")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7236\u7ea7\u5206\u7c7b"),(0,l.kt)("td",{parentName:"tr",align:null},"bigint(20)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570\u7684\u5206\u7c7b\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(100)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user_name")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(50)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u4fe1\u606f"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(255)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"create_time")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"on update CURRENT_TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},"CURRENT_TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"update_time")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"CURRENT_TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"category")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c7b\u522b\u533a\u5206 udf / function"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(50)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"5linkis_ps_udf_user_load"},"5.linkis_ps_udf_user_load"),(0,l.kt)("p",null,"udf\u662f\u5426\u9ed8\u8ba4\u52a0\u8f7d\u7684\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5e8f\u53f7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u989d\u5916"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"bigint(20)"),(0,l.kt)("td",{parentName:"tr",align:null},"PRI"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"auto_increment"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"udf_id")),(0,l.kt)("td",{parentName:"tr",align:null},"linkis_ps_udf_baseinfo\u7684id"),(0,l.kt)("td",{parentName:"tr",align:null},"int(11)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user_name")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f52\u5c5e\u7528\u6237"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(50)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"6linkis_ps_udf_version"},"6.linkis_ps_udf_version"),(0,l.kt)("p",null,"udf\u7684\u7248\u672c\u4fe1\u606f\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5e8f\u53f7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u989d\u5916"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"bigint(20)"),(0,l.kt)("td",{parentName:"tr",align:null},"PRI"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"auto_increment"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"udf_id")),(0,l.kt)("td",{parentName:"tr",align:null},"linkis_ps_udf_baseinfo\u7684id"),(0,l.kt)("td",{parentName:"tr",align:null},"bigint(20)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4f20\u7684\u811a\u672c/jar\u5305\u7684\u6587\u4ef6\u672c\u5730\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(255)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bml_resource_id")),(0,l.kt)("td",{parentName:"tr",align:null},"bml\u4e2d\u7684\u7269\u6599\u8d44\u6e90id"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(50)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bml_resource_version")),(0,l.kt)("td",{parentName:"tr",align:null},"bml\u7269\u6599\u7248\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(20)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is_published")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53d1\u5e03"),(0,l.kt)("td",{parentName:"tr",align:null},"bit(1)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"register_format")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6ce8\u518c\u683c\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(255)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"use_format")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u683c\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(255)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7248\u672c\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(255)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"create_time")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"on update CURRENT_TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},"CURRENT_TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"md5")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(100)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"er\u56fe"},"ER\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(59515).Z,width:"994",height:"660"})))}k.isMDXComponent=!0},59515:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/udf-9a81f94cf97ac4620f819f73b4689b45.png"}}]);