"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[86739],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},v=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(t),v=r,d=c["".concat(p,".").concat(v)]||c[v]||k[v]||a;return t?i.createElement(d,l(l({ref:n},s),{},{components:t})):i.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=v;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}v.displayName="MDXCreateElement"},28808:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const a={title:"Hive \u5f15\u64ce",sidebar_position:2},l=void 0,o={unversionedId:"engine-usage/hive",id:"version-0.11.0/engine-usage/hive",isDocsHomePage:!1,title:"Hive \u5f15\u64ce",description:"1 Hive\u5f15\u64ce\u7684\u4f7f\u7528",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/engine-usage/hive.md",sourceDirName:"engine-usage",slug:"/engine-usage/hive",permalink:"/zh-CN/docs/0.11.0/engine-usage/hive",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/engine-usage/hive.md",tags:[],version:"0.11.0",sidebarPosition:2,frontMatter:{title:"Hive \u5f15\u64ce",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"1.0 SDK\u7684\u4f7f\u7528",permalink:"/zh-CN/docs/0.11.0/user-guide/1.0-sdk-manual"},next:{title:"Python\u5f15\u64ce",permalink:"/zh-CN/docs/0.11.0/engine-usage/python"}},p=[{value:"1 Hive\u5f15\u64ce\u7684\u4f7f\u7528",id:"1-hive\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"1.1 \u73af\u5883\u53d8\u91cf\u914d\u7f6e",id:"11-\u73af\u5883\u53d8\u91cf\u914d\u7f6e",children:[]},{value:"1.2 \u4f9d\u8d56\u670d\u52a1\u542f\u52a8",id:"12-\u4f9d\u8d56\u670d\u52a1\u542f\u52a8",children:[]},{value:"1.3\t\u81ea\u5b9a\u4e49\u53c2\u6570\u914d\u7f6e",id:"13\u81ea\u5b9a\u4e49\u53c2\u6570\u914d\u7f6e",children:[]},{value:"1.4 \u524d\u7aef\u90e8\u7f72",id:"14-\u524d\u7aef\u90e8\u7f72",children:[]}]},{value:"2 Hive\u5f15\u64ce\u5b9e\u73b0\u65b9\u5f0f",id:"2-hive\u5f15\u64ce\u5b9e\u73b0\u65b9\u5f0f",children:[]},{value:"3 \u9002\u914d\u81ea\u5df1\u7684hive\u7248\u672c",id:"3-\u9002\u914d\u81ea\u5df1\u7684hive\u7248\u672c",children:[]},{value:"4 \u672a\u6765\u7684\u76ee\u6807",id:"4-\u672a\u6765\u7684\u76ee\u6807",children:[]}],u={toc:p};function s(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-hive\u5f15\u64ce\u7684\u4f7f\u7528"},"1 Hive\u5f15\u64ce\u7684\u4f7f\u7528"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis\u5b9e\u73b0\u7684Hive\u6267\u884c\u5f15\u64ce\u73b0\u5728\u652f\u6301HiveQL\u7684\u63d0\u4ea4\uff0c\u7528\u6237\u901a\u8fc7Linkis\u4f7f\u7528\u6587\u6863\u4e2d\u7684\u4e09\u79cd\u63a5\u53e3\u65b9\u5f0f(SDK, HTTP, WebSocket)\u63d0\u4ea4\u81ea\u5df1\u7684\u6267\u884c\u4ee3\u7801\uff0c\u5c31\u53ef\u4ee5\u5c06\u81ea\u5df1\u7684HiveQL\u63d0\u4ea4\u5230\u7684\u96c6\u7fa4\u4e2d\u8fdb\u884c\u6267\u884c\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u60f3\u8981\u4f7f\u7528Linkis\u7cfb\u7edf\u6267\u884cHiveQL\u7a0b\u5e8f\uff0c\u9700\u8981\u4e0b\u8f7dLinkis\u7684release\u5b89\u88c5\u5305\u5e76\u914d\u7f6e\u3001\u5b89\u88c5\u5e76\u542f\u52a8\u6307\u5b9a\u7684\u6307\u5b9a\u7684\u5fae\u670d\u52a1\u3002"),(0,r.kt)("h3",{id:"11-\u73af\u5883\u53d8\u91cf\u914d\u7f6e"},"1.1 \u73af\u5883\u53d8\u91cf\u914d\u7f6e"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Hive\u5f15\u64ce\u4f9d\u8d56\u7684\u73af\u5883\u53d8\u91cf:HADOOP_HOME\u3001HADOOP_CONF_DIR\u3001HIVE_HOME\u4ee5\u53caHIVE_CONF_DIR\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u5728\u542f\u52a8hive\u6267\u884c\u5f15\u64ce\u76f8\u5173\u7684\u5fae\u670d\u52a1\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4ee5\u4e0a\u73af\u5883\u53d8\u91cf\u662f\u5df2\u7ecf\u8bbe\u7f6e\u7684\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u7684\u8bdd\uff0c\u8bf7\u5148\u5728/home/${USER}/.bash_rc \u6216 linkis-ujes-spark-enginemanager/conf\u76ee\u5f55\u4e2d\u7684 linkis.properties\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u3002\u5982\u4ee5\u4e0b\u6240\u793a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"  HADOOP_HOME=${\u771f\u5b9e\u7684hadoop\u5b89\u88c5\u76ee\u5f55}\n  HADOOP_CONF_DIR=${\u771f\u5b9e\u7684hadoop\u914d\u7f6e\u76ee\u5f55}\n  HIVE_CONF_DIR=${\u771f\u5b9e\u7684hive\u914d\u7f6e\u76ee\u5f55}\n  HIVE_HOME=${\u771f\u5b9e\u7684hive\u5b89\u88c5\u76ee\u5f55 }\n")),(0,r.kt)("h3",{id:"12-\u4f9d\u8d56\u670d\u52a1\u542f\u52a8"},"1.2 \u4f9d\u8d56\u670d\u52a1\u542f\u52a8"),(0,r.kt)("p",null,"Hive\u5f15\u64ce\u7684\u542f\u52a8\uff0c\u9700\u8981\u4f9d\u8d56\u4ee5\u4e0b\u7684Linkis\u5fae\u670d\u52a1:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1)\u3001Eureka: \u7528\u4e8e\u670d\u52a1\u6ce8\u518c\u4e8e\u53d1\u73b0\u3002"),(0,r.kt)("li",{parentName:"ul"},"2)\u3001Linkis-gateway: \u7528\u4e8e\u7528\u6237\u8bf7\u6c42\u8f6c\u53d1\u3002"),(0,r.kt)("li",{parentName:"ul"},"3)\u3001Linkis-publicService: \u63d0\u4f9b\u6301\u4e45\u5316\u3001udf\u7b49\u57fa\u7840\u529f\u80fd\u3002"),(0,r.kt)("li",{parentName:"ul"},"4)\u3001Linkis-ResourceManager:\u63d0\u4f9bLinkis\u7684\u8d44\u6e90\u7ba1\u7406\u529f\u80fd\u3002")),(0,r.kt)("h3",{id:"13\u81ea\u5b9a\u4e49\u53c2\u6570\u914d\u7f6e"},"1.3\t\u81ea\u5b9a\u4e49\u53c2\u6570\u914d\u7f6e"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u6b63\u5e38\u4f7f\u7528hive\uff0c\u8fd8\u9700\u8981\u542f\u52a8HiveEntrance \u548c HiveEngineManager\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","HiveEntrance\u662fhive\u4f5c\u4e1a\u7684\u63a5\u53d7\u8005\uff0cHiveEngineManager\u662fHiveEngine\u7684\u542f\u52a8\u8005\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u542f\u52a8\u4e4b\u524d\uff0c\u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u5173\u4e8ehive\u5f15\u64ce\u7684\u81ea\u5b9a\u4e49\u53c2\u6570\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis\u8003\u8651\u5230\u7528\u6237\u5e0c\u671b\u80fd\u591f\u66f4\u81ea\u7531\u5730\u8bbe\u7f6e\u53c2\u6570\uff0c\u63d0\u4f9b\u4e86\u8bb8\u591a\u7684\u914d\u7f6e\u53c2\u6570\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u4e0b\u8868\u6709\u4e00\u4e9b\u5e38\u7528\u7684\u53c2\u6570\uff0cHive\u5f15\u64ce\u652f\u6301\u914d\u7f6e\u66f4\u591a\u7684\u53c2\u6570\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\uff0c\u5982\u60a8\u6709\u8c03\u4f18\u9700\u6c42\uff0c\u6b22\u8fce\u9605\u8bfb\u8c03\u4f18\u624b\u518c\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u7528\u6237\u53ef\u4ee5\u5728linkis.properties\u4e2d\u914d\u7f6e\u8fd9\u4e9b\u53c2\u6570\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u8003\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.memory.max"),(0,r.kt)("td",{parentName:"tr",align:null},"40G"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6307\u5b9ahiveEM\u542f\u52a8\u7684\u6240\u6709\u5f15\u64ce\u7684\u5ba2\u6237\u7aef\u7684\u603b\u5185\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.cores.max"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6307\u5b9ahiveEM\u542f\u52a8\u7684\u6240\u6709\u5f15\u64ce\u7684\u5ba2\u6237\u7aef\u7684\u603bCPU\u6838\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.engine.instances.max"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6307\u5b9ahiveEM\u53ef\u4ee5\u542f\u52a8\u7684\u5f15\u64ce\u4e2a\u6570")))),(0,r.kt)("h3",{id:"14-\u524d\u7aef\u90e8\u7f72"},"1.4 \u524d\u7aef\u90e8\u7f72"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u4e0a\u8ff0\u5fae\u670d\u52a1\u542f\u52a8\u90e8\u7f72\u542f\u52a8\u6210\u529f\u4e4b\u540e\uff0c\u7528\u6237\u5982\u9700\u8981\u901a\u8fc7web\u6d4f\u89c8\u5668\u6765\u63d0\u4ea4\u81ea\u5df1\u7684HiveQL\u4ee3\u7801\u3002\u53ef\u4ee5\u901a\u8fc7\u90e8\u7f72\u914d\u7f6e\u5fae\u4f17\u53e6\u4e00\u6b3e\u5f00\u6e90\u7684\u524d\u7aef\u4ea7\u54c1",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis/blob/master/docs/zh_CN/ch1/%E5%89%8D%E5%8F%B0%E9%83%A8%E7%BD%B2%E6%96%87%E6%A1%A3.md"},"Scriptis"),"\uff0c\u8be5\u4ea7\u54c1\u8ba9\u7528\u6237\u80fd\u5728web\u9875\u9762\u4e0a\u7f16\u8f91\u3001\u63d0\u4ea4\u4ee3\u7801\uff0c\u5e76\u80fd\u591f\u5b9e\u65f6\u63a5\u6536\u540e\u53f0\u7ed9\u7684\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.5\u8fd0\u884c\u6548\u679c\u56fe")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hive\u8fd0\u884c\u6548\u679c\u56fe1",src:t(27659).Z}),(0,r.kt)("br",null),"\n\u56fe1 Hive\u8fd0\u884c\u6548\u679c\u56fe1"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hive\u8fd0\u884c\u6548\u679c\u56fe2",src:t(71698).Z}),(0,r.kt)("br",null),"\n\u56fe2 Hive\u8fd0\u884c\u6548\u679c\u56fe2"),(0,r.kt)("h2",{id:"2-hive\u5f15\u64ce\u5b9e\u73b0\u65b9\u5f0f"},"2 Hive\u5f15\u64ce\u5b9e\u73b0\u65b9\u5f0f"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Hive\u6267\u884c\u5f15\u64ce\u7684\u5b9e\u73b0\uff0c\u662f\u53c2\u7167Linkis\u5f00\u53d1\u6587\u6863\u5b9e\u73b0\u4e86Entrance\u3001EngineManager\u548cEngine\u4e09\u4e2a\u6a21\u5757\u7684\u5fc5\u8981\u63a5\u53e3\uff0c\u5176\u4e2dEngine\u6a21\u5757\u662f\u6700\u7279\u6b8a\u7684\uff0cHive\u5b9e\u73b0\u7684\u65b9\u5f0f\u4e5f\u6709\u81ea\u5df1\u7684\u4e00\u5957\u903b\u8f91\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis\u73b0\u5728\u63d0\u4f9b\u7684Release\u7248\u672c\u57fa\u4e8e\u7684hadoop\u7248\u672c\u662f2.7.2\uff0c hive\u7248\u672c\u662f1.2.1\uff0c\u4e24\u8005\u90fd\u662fapache\u7248\u672c\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis\u7684Hive\u5f15\u64ce\u4e0e\u5e95\u5c42hive\u8fdb\u884c\u4ea4\u4e92\u4e3b\u8981\u662f\u901a\u8fc7HiveEngineExecutor\u8fd9\u4e2a\u7c7b\uff0c\u8be5\u7c7b\u662f\u7531HiveEngineExecutorFactory\u8fd9\u4e2abean\u8fdb\u884c\u5b9e\u4f8b\u5316\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","HiveEngineExecutor\u5b9e\u73b0\u7684executeLine\u63a5\u53e3\u4e2d\uff0cLinkis\u901a\u8fc7\u4f7f\u7528\u7684hive\u63d0\u4f9b\u7684CommandProcessorFactory\u7c7b\uff0c\u4f20\u5165\u672c\u5730\u7684hive\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u5f97\u5230\u4e00\u4e2aorg.apache.hadoop.hive.ql.Driver\u7c7b\uff0cDriver\u7c7b\u63d0\u4f9b\u4e86API\u5e2e\u52a9\u63d0\u4ea4\u7528\u6237\u7684\u811a\u672c\u4ee3\u7801\u5230\u96c6\u7fa4\u4e2d\u6267\u884c\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Driver\u5728\u63d0\u4ea4hive sql\u4ee3\u7801\u4e4b\u540e\uff0c\u6709\u63d0\u4f9b\u6267\u884c\u662f\u5426\u6210\u529f\u4ee5\u53ca\u83b7\u53d6\u6210\u529f\u4e4b\u540e\u83b7\u53d6\u7ed3\u679c\u96c6\u7684API\u3002\u5982\u679c\u6267\u884c\u6210\u529f,\u501f\u52a9Linkis\u63d0\u4f9b\u7684\u7edf\u4e00\u5b58\u50a8\u670d\u52a1\uff0c\u5c06\u7ed3\u679c\u96c6\u5b58\u50a8\u5230\u6307\u5b9a\u7684\u76ee\u5f55\u5f53\u4e2d\u4ee5\u4f9b\u7528\u6237\u67e5\u770b\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u53e6\u5916\uff0cDriver\u5728\u63d0\u4ea4hive sql\u4e4b\u540e\uff0c\u5982\u679c\u4ea7\u751f\u4e86mapreduce\u4efb\u52a1\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7HadoopJobExecHelper\u63d0\u4f9b\u7684killRunningJobs\u7684API\u5c06\u5df2\u7ecf\u63d0\u4ea4\u7684hive\u67e5\u8be2\u4efb\u52a1\u6740\u6b7b\uff0c\u8fd9\u5c31\u662f\u7528\u6237\u524d\u53f0kill\u4efb\u52a1\u7684\u903b\u8f91\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u8fd8\u6709\u4e00\u70b9\uff0cLinkis\u7684hive\u5f15\u64ce\u8fd8\u5b9e\u73b0\u4e86\u8fdb\u5ea6\u529f\u80fd\u3002\u5177\u4f53\u662f\u901a\u8fc7HadoopJobExecHelper\u7684runningJobs\u5b57\u6bb5\uff0c\u83b7\u53d6\u6b63\u5728\u8fd0\u884c\u7684MR\u4efb\u52a1\uff0c\u7136\u540e\u8fd9\u4e9bMR\u4efb\u52a1\u90fd\u6709\u76f8\u5e94map\u548creduce\u7684\u8fdb\u5ea6\uff0c\u5c06\u4ed6\u4eec\u505a\u4e00\u4e2a\u6570\u5b66\u8ba1\u7b97\u5c31\u53ef\u4ee5\u83b7\u5f97\u4efb\u52a1\u7684\u603b\u8fdb\u5ea6\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662frunningJobs\u662f\u6b63\u5728\u8fd0\u884c\u7684MR job\uff0c\u4e00\u65e6\u6267\u884c\u5b8c\u5c31\u4f1a\u4eceList\u4e2d\u5220\u9664\uff0c\u6240\u4ee5\u6700\u5f00\u59cb\u8fd8\u9700\u8981\u83b7\u53d6sql\u7684\u6267\u884c\u8ba1\u5212\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u770b\u4ee3\u7801\u7684\u5b9e\u73b0\u3002"),(0,r.kt)("h2",{id:"3-\u9002\u914d\u81ea\u5df1\u7684hive\u7248\u672c"},"3 \u9002\u914d\u81ea\u5df1\u7684hive\u7248\u672c"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u7531\u4e8eLinkis\u73b0\u5728\u7684\u7248\u672c\u662f\u652f\u63011.2.1\u7684apache\u7248\u672c\uff0c\u5f88\u591a\u7528\u6237\u7684\u96c6\u7fa4\u53ef\u80fd\u5e76\u4e0d\u548c\u6211\u4eec\u516c\u53f8\u4e00\u81f4\uff0c\u6240\u4ee5\u9700\u8981\u81ea\u5df1\u91cd\u65b0\u7f16\u8bd1Hive\u6267\u884c\u5f15\u64ce\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u4e3e\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5982\u679c\u7528\u6237\u4f7f\u7528\u7684\u662f1.1.0\u7684cdh\u7248\u672c\uff0c\u4ed6\u9700\u8981\u5728\u9876\u5c42\u7684pom.xml\u5c06hive.version\u6539\u6210\u6307\u5b9a\u7684\u7248\u672c\u7136\u540e\u8fdb\u884c\u7f16\u8bd1\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5728\u9002\u914d\u7684\u65f6\u5019\uff0c\u4e5f\u53d1\u73b0\u6709jar\u5305\u6709\u51b2\u7a81\uff0c\u8fd9\u9700\u8981\u7528\u6237\u67e5\u770b\u65e5\u5fd7\u6765\u8fdb\u884c\u6392\u9664\uff0c\u5982\u679c\u8fd8\u662f\u65e0\u6cd5\u786e\u5b9a\u539f\u56e0\uff0c\u6b22\u8fce\u52a0\u7fa4\u54a8\u8be2\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5fae\u4fe1\u53caQQ\u7fa4",src:t(10601).Z}),(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"4-\u672a\u6765\u7684\u76ee\u6807"},"4 \u672a\u6765\u7684\u76ee\u6807"),(0,r.kt)("p",null,"1.\u65e0\u7f1d\u5730\u9002\u914d\u66f4\u591a\u7684hive\u7248\u672c\u3002\n2.\u90e8\u7f72\u65b9\u5f0f\u66f4\u52a0\u7b80\u5355\uff0c\u5c1d\u8bd5\u4f7f\u7528\u5bb9\u5668\u5316\u7684\u65b9\u5f0f\u3002\n3.\u529f\u80fd\u66f4\u52a0\u5b8c\u5584\uff0c\u5728\u6267\u884c\u8fdb\u5ea6\u3001\u6570\u636e\u7cbe\u5ea6\u7b49\u65b9\u9762\u505a\u7684\u66f4\u52a0\u51c6\u786e\u548c\u5b8c\u5907"))}s.isMDXComponent=!0},10601:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/group-8e93c2460f179fabea51336c34b1ddd2.png"},27659:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hive_run1-2cba80843a820e163a00ab67ed701a4e.png"},71698:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hive_run2-7b1f2e0dac6f683d5d53a9d42098e9b1.png"}}]);