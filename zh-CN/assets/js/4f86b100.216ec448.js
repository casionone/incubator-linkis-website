"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[75606],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>c});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var k=a.createContext({}),u=function(t){var e=a.useContext(k),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=u(t.components);return a.createElement(k.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,k=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),d=u(n),s=l,c=d["".concat(k,".").concat(s)]||d[s]||m[s]||r;return n?a.createElement(c,i(i({ref:e},o),{},{components:n})):a.createElement(c,i({ref:e},o))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p[d]="string"==typeof t?t:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},96798:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var a=n(87462),l=(n(67294),n(3905));const r={title:"Linkis-Cli \u65b9\u5f0f\u4f7f\u7528",sidebar_position:2},i=void 0,p={unversionedId:"user-guide/linkiscli-manual",id:"version-1.1.2/user-guide/linkiscli-manual",isDocsHomePage:!1,title:"Linkis-Cli \u65b9\u5f0f\u4f7f\u7528",description:"1. \u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/user-guide/linkiscli-manual.md",sourceDirName:"user-guide",slug:"/user-guide/linkiscli-manual",permalink:"/zh-CN/docs/1.1.2/user-guide/linkiscli-manual",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/user-guide/linkiscli-manual.md",tags:[],version:"1.1.2",sidebarPosition:2,frontMatter:{title:"Linkis-Cli \u65b9\u5f0f\u4f7f\u7528",sidebar_position:2},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"\u5982\u4f55\u4f7f\u7528 Linkis1.0",permalink:"/zh-CN/docs/1.1.2/user-guide/how-to-use"},next:{title:"UDF \u7684\u4f7f\u7528",permalink:"/zh-CN/docs/1.1.2/user-guide/udf"}},k=[{value:"1. \u4ecb\u7ecd",id:"1-\u4ecb\u7ecd",children:[]},{value:"2. \u57fa\u7840\u6848\u4f8b",id:"2-\u57fa\u7840\u6848\u4f8b",children:[]},{value:"3. \u4f7f\u7528\u65b9\u5f0f",id:"3-\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"4. \u652f\u6301\u7684\u53c2\u6570\u5217\u8868",id:"4-\u652f\u6301\u7684\u53c2\u6570\u5217\u8868",children:[]},{value:"5. \u8be6\u7ec6\u793a\u4f8b",id:"5-\u8be6\u7ec6\u793a\u4f8b",children:[{value:"5.1 \u5ba2\u6237\u7aef\u53c2\u6570",id:"51-\u5ba2\u6237\u7aef\u53c2\u6570",children:[]},{value:"5.2 \u6dfb\u52a0\u5f15\u64ce\u542f\u52a8\u53c2\u6570",id:"52-\u6dfb\u52a0\u5f15\u64ce\u542f\u52a8\u53c2\u6570",children:[]},{value:"5.2 \u6dfb\u52a0\u5f15\u64ce\u8fd0\u884c\u53c2\u6570",id:"52-\u6dfb\u52a0\u5f15\u64ce\u8fd0\u884c\u53c2\u6570",children:[]},{value:"5.3 \u6dfb\u52a0\u6807\u7b7e",id:"53-\u6dfb\u52a0\u6807\u7b7e",children:[]},{value:"5.4 \u53d8\u91cf\u66ff\u6362",id:"54-\u53d8\u91cf\u66ff\u6362",children:[]},{value:"5.5 \u4f7f\u7528\u7528\u6237\u7684\u914d\u7f6e\u6587\u4ef6",id:"55-\u4f7f\u7528\u7528\u6237\u7684\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"5.6 \u8f93\u51fa\u7ed3\u679c\u96c6\u5230\u6587\u4ef6",id:"56-\u8f93\u51fa\u7ed3\u679c\u96c6\u5230\u6587\u4ef6",children:[]}]}],u={toc:k};function o(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u4ecb\u7ecd"},"1. \u4ecb\u7ecd"),(0,l.kt)("p",null,"Linkis-Cli \u662f\u4e00\u4e2a\u7528\u4e8e\u5411Linkis\u63d0\u4ea4\u4efb\u52a1\u7684Shell\u547d\u4ee4\u884c\u7a0b\u5e8f\u3002"),(0,l.kt)("h2",{id:"2-\u57fa\u7840\u6848\u4f8b"},"2. \u57fa\u7840\u6848\u4f8b"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u53c2\u7167\u4e0b\u9762\u7684\u4f8b\u5b50\u7b80\u5355\u5730\u5411Linkis\u63d0\u4ea4\u4efb\u52a1"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b65\uff0c\u68c0\u67e5conf/\u76ee\u5f55\u4e0b\u662f\u5426\u5b58\u5728\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-cli.properties"),"\uff0c\u4e14\u5305\u542b\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"   #linkis-mg-gateway\u670d\u52a1\u5730\u5740\n   wds.linkis.client.common.gatewayUrl=http://127.0.0.1:9001\n   #\u8ba4\u8bc1\u9274\u6743\u7b56\u7565 token/static \n   wds.linkis.client.common.authStrategy=token\n   #static \u6a21\u5f0f\u4e0b\u4e3a\u7528\u6237\u540d/\u5bc6\u7801\uff0ctoken\u6a21\u5f0f\u4e0b\u4e3alinkis-mg-gateway_auth_token\u8868\u4e2dtoken_name \u548clogal_users\n   wds.linkis.client.common.tokenKey=Validation-Code\n   wds.linkis.client.common.tokenValue=BML-AUTH\n")),(0,l.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff0c\u8fdb\u5165linkis\u5b89\u88c5\u76ee\u5f55\uff0c\u8f93\u5165\u6307\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'    ./bin/linkis-cli -engineType spark-2.4.3 -codeType sql -code "select count(*) from testdb.test;"  -submitUser hadoop -proxyUser hadoop \n')),(0,l.kt)("p",null,"\u7b2c\u4e09\u6b65\uff0c\u60a8\u4f1a\u5728\u63a7\u5236\u53f0\u770b\u5230\u4efb\u52a1\u88ab\u63d0\u4ea4\u5230linkis,\u5e76\u5f00\u59cb\u6267\u884c\u7684\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"linkis-cli\u76ee\u524d\u4ec5\u652f\u6301\u540c\u6b65\u63d0\u4ea4\uff0c\u5373\u5411linkis\u63d0\u4ea4\u4efb\u52a1\u540e\uff0c\u4e0d\u65ad\u8be2\u95ee\u4efb\u52a1\u72b6\u6001\u3001\u62c9\u53d6\u4efb\u52a1\u65e5\u5fd7\uff0c\u76f4\u81f3\u4efb\u52a1\u7ed3\u675f\u3002\u4efb\u52a1\u7ed3\u675f\u65f6\u72b6\u6001\u5982\u679c\u4e3a\u6210\u529f\uff0clinkis-cli\u8fd8\u4f1a\u4e3b\u52a8\u62c9\u53d6\u7ed3\u679c\u96c6\u5e76\u8f93\u51fa\u3002"),(0,l.kt)("h2",{id:"3-\u4f7f\u7528\u65b9\u5f0f"},"3. \u4f7f\u7528\u65b9\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"   ./bin/linkis-cli   [\u5ba2\u6237\u7aef\u53c2\u6570][\u5f15\u64ce\u53c2\u6570] [\u542f\u52a8\u8fd0\u884c\u53c2\u6570]\n")),(0,l.kt)("h2",{id:"4-\u652f\u6301\u7684\u53c2\u6570\u5217\u8868"},"4. \u652f\u6301\u7684\u53c2\u6570\u5217\u8868"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\u53c2\u6570"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--gatewayUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"\u624b\u52a8\u6307\u5b9alinkis-mg-gateway\u670d\u52a1\u7684\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--authStg"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8ba4\u8bc1\u7b56\u7565   token/static"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--authKey"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8ba4\u8bc1key"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--authVal"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8ba4\u8bc1value"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--userConf"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--kill"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9akill\u7684taskId\uff0c\u6267\u884c\u4efb\u52a1\u505c\u6b62\u547d\u4ee4"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--log"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6267\u884c\u7684\u76f8\u5173\u65e5\u5fd7\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--result"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--status"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--async"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--mode"),(0,l.kt)("td",{parentName:"tr",align:null},"ujes/once"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f15\u64ce\u76f8\u5173\u53c2\u6570 "),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-engineType"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6b64\u4efb\u52a1\u7684\u5f15\u64ce\u7c7b\u578b\uff0c\u5e26\u7248\u672c\u53f7 \u5982 hive-2.3.3"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-codeType"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a\u6b64\u4f5c\u4e1a\u6307\u5b9a linkis\u7684runType \u5982sql/hql/shell"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-codePath"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u6267\u884c\u4ee3\u7801\u6587\u4ef6\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-code"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u6267\u884c\u7684\u4ee3\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-scriptPath"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a\u4e0a\u4f20\u7684\u811a\u672c\u6307\u5b9a\u8fdc\u7a0b\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-submitUser"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u7684\u7528\u6237"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-proxyUser"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5728 Linkis \u670d\u52a1\u5668\u7aef\u6267\u884c\u60a8\u7684\u4ee3\u7801\u7684\u4ee3\u7406\u7528\u6237"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-creator"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6b64\u4efb\u52a1\u7684\u521b\u5efa\u8005\uff0c\u7cfb\u7edf\u7ea7\u522b \u5982 IDE/LINKISCLI"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-outPath"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7ed3\u679c\u96c6\u7684\u8f93\u51fa\u8def\u5f84\u3002 \u5982\u679c\u672a\u6307\u5b9a\uff0c\u5219\u8f93\u51fa\u91cd\u7f6e\u4e3a\u5c4f\u5e55\uff08\u6807\u51c6\u8f93\u51fa\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Map\u542f\u52a8\u8fd0\u884c\u53c2\u6570"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-confMap"),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u52a8\u53c2\u6570\uff0c\u53ef\u4ee5\u5c06\u4efb\u4f55\u542f\u52a8\u53c2\u6570\u653e\u5165\u6b64 Map\uff08\u4f8b\u5982 spark.executor.instances\uff09\uff0c\u8f93\u5165\u683c\u5f0f\uff1a-confMap key1=value1 -confMap key2=value2"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-runtimeMap"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u53c2\u6570\uff0c\u53ef\u4ee5\u5c06\u4efb\u4f55\u8fd0\u884c\u53c2\u6570\u653e\u5165\u6b64 Map\uff08\u4f8b\u5982 jdbc.url=jdbc:hive2://xxx:10000\uff09\uff0c \u8f93\u5165\u683c\u5f0f\uff1a-runtimeMap key1=value1 -runtimeMap key2=value2"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-varMap"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u53d8\u91cf\u6620\u5c04\uff0c\u53d8\u91cf\u7528\u4e8e\u5173\u952e\u5b57\u66ff\u6362\u3002\u5982\u6267\u884c\u8bed\u53e5'select form ${table_x} limit ${limit_y}' \u901a\u8fc7varMap\u6307\u5b9a\u5173\u952e\u5b57\u53d8\u91cf\u66ff\u6362\uff0c -varMap table_x=test -varMap limit_y=100"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-labelMap"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6807\u7b7e\u6620\u5c04"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-jobContentMap"),(0,l.kt)("td",{parentName:"tr",align:null},"jobContent \u6620\u5c04"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))))),(0,l.kt)("h2",{id:"5-\u8be6\u7ec6\u793a\u4f8b"},"5. \u8be6\u7ec6\u793a\u4f8b"),(0,l.kt)("h3",{id:"51-\u5ba2\u6237\u7aef\u53c2\u6570"},"5.1 \u5ba2\u6237\u7aef\u53c2\u6570"),(0,l.kt)("p",null,"\u5ba2\u6237\u7aef\u53c2\u6570\u53ef\u4ee5\u901a\u8fc7\u624b\u52a8\u6307\u5b9a\u7684\u65b9\u5f0f\u4f20\u5165\uff0c\u6b64\u65b9\u5f0f\u4f1a\u8986\u76d6\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-cli.properties"),"\u4e2d\u7684\u51b2\u7a81\u914d\u7f6e\u9879\n\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'    ./bin/linkis-cli --gatewayUrl http://127.0.0.1:9001  --authStg token --authKey [tokenKey] --authVal [tokenValue]  -engineType spark-2.4.3 -codeType sql -code "select count(*) from testdb.test;"  -submitUser hadoop -proxyUser hadoop  \n')),(0,l.kt)("h3",{id:"52-\u6dfb\u52a0\u5f15\u64ce\u542f\u52a8\u53c2\u6570"},"5.2 \u6dfb\u52a0\u5f15\u64ce\u542f\u52a8\u53c2\u6570"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6309\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u5982\u679c\u4e0d\u6d89\u53ca \u53ef\u4ee5\u4e0d\u914d\u7f6e")),(0,l.kt)("p",null,"\u5f15\u64ce\u7684\u521d\u59cb\u53c2\u6570\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"-confMap"),"\u53c2\u6570\u6dfb\u52a0\uff0c\u6ce8\u610f\u53c2\u6570\u7684\u6570\u636e\u7c7b\u578b\u662fMap\uff0c\u547d\u4ee4\u884c\u7684\u8f93\u5165\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"-confMap key1=val1 -confMap key2=val2 ...\n")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a\u4ee5\u4e0b\u793a\u4f8b\u8bbe\u7f6e\u4e86\u5f15\u64ce\u542f\u52a8\u7684yarn\u961f\u5217\u3001spark executor\u4e2a\u6570\u7b49\u542f\u52a8\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'   ./bin/linkis-cli -engineType spark-2.4.3 -codeType sql -confMap wds.linkis.yarnqueue=q02 -confMap spark.executor.instances=3 -code "select count(*) from testdb.test;"  -submitUser hadoop -proxyUser hadoop  \n')),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u8fd9\u4e9b\u53c2\u6570\u4e5f\u652f\u6301\u4ee5\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u8bfb\u53d6\uff0c\u89c1\u30105.5 \u4f7f\u7528\u7528\u6237\u7684\u914d\u7f6e\u6587\u4ef6\u3011"),(0,l.kt)("h3",{id:"52-\u6dfb\u52a0\u5f15\u64ce\u8fd0\u884c\u53c2\u6570"},"5.2 \u6dfb\u52a0\u5f15\u64ce\u8fd0\u884c\u53c2\u6570"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6309\u5b9e\u9645\u4f7f\u7528\u573a\u666f\uff0c\u5982\u679c\u4e0d\u6d89\u53ca \u53ef\u4ee5\u4e0d\u914d\u7f6e")),(0,l.kt)("p",null,"\u5f15\u64ce\u7684\u521d\u59cb\u53c2\u6570\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"-runtimeMap"),"\u53c2\u6570\u6dfb\u52a0\uff0c\u6ce8\u610f\u53c2\u6570\u7684\u6570\u636e\u7c7b\u578b\u662fMap\uff0c\u547d\u4ee4\u884c\u7684\u8f93\u5165\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"-runtimeMap key1=val1 -confMap key2=val2 ...\n")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a\u4ee5\u4e0b\u793a\u4f8b\u8bbe\u7f6e\u4e86jdbc\u5f15\u64ce\u8fd0\u884c\u662f\u9700\u8981\u7684\u8fde\u63a5\u5730\u5740/\u7528\u6237\u540d/\u5bc6\u7801 \u7b49\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},' sh ./bin/linkis-cli -submitUser hadoop   -engineType jdbc-4 -codeType jdbc  -code "show tables" -runtimeMap jdbc.url=jdbc:mysql://127.0.0.1:36000/hive_meta  -runtimeMap jdbc.username=test -runtimeMap  jdbc.password=test@123\n')),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u8fd9\u4e9b\u53c2\u6570\u4e5f\u652f\u6301\u4ee5\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u8bfb\u53d6\uff0c\u89c1\u30105.5 \u4f7f\u7528\u7528\u6237\u7684\u914d\u7f6e\u6587\u4ef6\u3011"),(0,l.kt)("h3",{id:"53-\u6dfb\u52a0\u6807\u7b7e"},"5.3 \u6dfb\u52a0\u6807\u7b7e"),(0,l.kt)("p",null,"\u6807\u7b7e\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"-labelMap"),"\u53c2\u6570\u6dfb\u52a0\uff0c\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"-confMap"),"\u4e00\u6837\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"-labelMap"),"\u53c2\u6570\u7684\u7c7b\u578b\u4e5f\u662fMap:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'   /bin/linkis-cli -engineType spark-2.4.3 -codeType sql -labelMap labelKey=labelVal -code "select count(*) from testdb.test;"  -submitUser hadoop -proxyUser hadoop  \n')),(0,l.kt)("h3",{id:"54-\u53d8\u91cf\u66ff\u6362"},"5.4 \u53d8\u91cf\u66ff\u6362"),(0,l.kt)("p",null,"Linkis-cli\u7684\u53d8\u91cf\u66ff\u6362\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"${}"),"\u7b26\u53f7\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"-varMap"),"\u5171\u540c\u5b9e\u73b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'   ./bin/linkis-cli -engineType spark-2.4.3 -codeType sql -code "select count(*) from \\${key};" -varMap key=testdb.test  -submitUser hadoop -proxyUser hadoop  \n')),(0,l.kt)("p",null,"\u6267\u884c\u8fc7\u7a0b\u4e2dsql\u8bed\u53e5\u4f1a\u88ab\u66ff\u6362\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql-sql"},"   select count(*) from testdb.test\n")),(0,l.kt)("p",null,"\u6ce8\u610f",(0,l.kt)("inlineCode",{parentName:"p"},"'\\$'"),"\u4e2d\u7684\u8f6c\u4e49\u7b26\u662f\u4e3a\u4e86\u9632\u6b62\u53c2\u6570\u88ablinux\u63d0\u524d\u89e3\u6790\uff0c\u5982\u679c\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"-codePath"),"\u6307\u5b9a\u672c\u5730\u811a\u672c\u65b9\u5f0f\uff0c\u5219\u4e0d\u9700\u8981\u8f6c\u4e49\u7b26"),(0,l.kt)("h3",{id:"55-\u4f7f\u7528\u7528\u6237\u7684\u914d\u7f6e\u6587\u4ef6"},"5.5 \u4f7f\u7528\u7528\u6237\u7684\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"linkis-cli\u652f\u6301\u52a0\u8f7d\u7528\u6237\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\uff0c\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"--userConf"),"\u53c2\u6570\u6307\u5b9a\uff0c\u914d\u7f6e\u6587\u4ef6\u9700\u8981\u662f",(0,l.kt)("inlineCode",{parentName:"li"},".properties"),"\u6587\u4ef6\u683c\u5f0f,\u9ed8\u8ba4\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"conf/linkis-cli/linkis-cli.properties")," \u914d\u7f6e\u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'   ./bin/linkis-cli -engineType spark-2.4.3 -codeType sql -code "select count(*) from testdb.test;"  -submitUser hadoop -proxyUser hadoop  --userConf [\u914d\u7f6e\u6587\u4ef6\u8def\u5f84]\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u54ea\u4e9b\u53c2\u6570\u53ef\u4ee5\u914d\u7f6e\uff1f")),(0,l.kt)("p",null,"\u6240\u6709\u53c2\u6570\u90fd\u53ef\u4ee5\u914d\u7f6e\u5316\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("p",null,"cli\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"   wds.linkis.client.common.gatewayUrl=http://127.0.0.1:9001\n   wds.linkis.client.common.authStrategy=static\n   wds.linkis.client.common.tokenKey=[\u9759\u6001\u8ba4\u8bc1key]\n   wds.linkis.client.common.tokenValue=[\u9759\u6001\u8ba4\u8bc1value]\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"   wds.linkis.client.label.engineType=spark-2.4.3\n   wds.linkis.client.label.codeType=sql\n")),(0,l.kt)("p",null,"Map\u7c7b\u53c2\u6570\u914d\u7f6e\u5316\u65f6\uff0ckey\u7684\u683c\u5f0f\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    [Map\u524d\u7f00] + [key]\n    \n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u524d\u7f00\u533a\u5206\u53c2\u6570\u7684\u7c7b\u578b(\u542f\u52a8\u53c2\u6570\uff0c\u8fd0\u884c\u53c2\u6570\u7b49)")),(0,l.kt)("p",null,"Map\u524d\u7f00\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"executionMap\u524d\u7f00: wds.linkis.client.exec"),(0,l.kt)("li",{parentName:"ul"},"sourceMap\u524d\u7f00: wds.linkis.client.source"),(0,l.kt)("li",{parentName:"ul"},"confMap\u524d\u7f00: wds.linkis.client.param.conf"),(0,l.kt)("li",{parentName:"ul"},"runtimeMap\u524d\u7f00: wds.linkis.client.param.runtime"),(0,l.kt)("li",{parentName:"ul"},"labelMap\u524d\u7f00: wds.linkis.client.label")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"variableMap\u4e0d\u652f\u6301\u914d\u7f6e\u5316")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f53\u914d\u7f6e\u7684key\u548c\u6307\u4ee4\u53c2\u6570\u4e2d\u5df2\u8f93\u5165\u7684key\u5b58\u5728\u51b2\u7a81\u65f6\uff0c\u4f18\u5148\u7ea7\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\u6307\u4ee4\u53c2\u6570 > \u6307\u4ee4Map\u7c7b\u578b\u53c2\u6570\u4e2d\u7684key > \u7528\u6237\u914d\u7f6e > \u9ed8\u8ba4\u914d\u7f6e\n")))),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("p",null,"\u914d\u7f6e\u5f15\u64ce\u542f\u52a8\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"   wds.linkis.client.param.conf.spark.executor.instances=3\n   wds.linkis.client.param.conf.wds.linkis.yarnqueue=q02\n")),(0,l.kt)("p",null,"\u914d\u7f6elabelMap\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"   wds.linkis.client.label.myLabel=label123\n")),(0,l.kt)("h3",{id:"56-\u8f93\u51fa\u7ed3\u679c\u96c6\u5230\u6587\u4ef6"},"5.6 \u8f93\u51fa\u7ed3\u679c\u96c6\u5230\u6587\u4ef6"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"-outPath"),"\u53c2\u6570\u6307\u5b9a\u4e00\u4e2a\u8f93\u51fa\u76ee\u5f55\uff0clinkis-cli\u4f1a\u5c06\u7ed3\u679c\u96c6\u8f93\u51fa\u5230\u6587\u4ef6\uff0c\u6bcf\u4e2a\u7ed3\u679c\u96c6\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\uff0c\u8f93\u51fa\u5f62\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    task-[taskId]-result-[idx].txt\n    \n")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"    task-906-result-1.txt\n    task-906-result-2.txt\n    task-906-result-3.txt\n")))}o.isMDXComponent=!0}}]);