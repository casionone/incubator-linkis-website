"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[41482],{3905:(n,e,i)=>{i.d(e,{Zo:()=>p,kt:()=>d});var t=i(67294);function r(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function a(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,t)}return i}function l(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){r(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function o(n,e){if(null==n)return{};var i,t,r=function(n,e){if(null==n)return{};var i,t,r={},a=Object.keys(n);for(t=0;t<a.length;t++)i=a[t],e.indexOf(i)>=0||(r[i]=n[i]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)i=a[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}var s=t.createContext({}),c=function(n){var e=t.useContext(s),i=e;return n&&(i="function"==typeof n?n(e):l(l({},e),n)),i},p=function(n){var e=c(n.components);return t.createElement(s.Provider,{value:e},n.children)},u="mdxType",g={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},k=t.forwardRef((function(n,e){var i=n.components,r=n.mdxType,a=n.originalType,s=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),u=c(i),k=r,d=u["".concat(s,".").concat(k)]||u[k]||g[k]||a;return i?t.createElement(d,l(l({ref:e},p),{},{components:i})):t.createElement(d,l({ref:e},p))}));function d(n,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=i.length,l=new Array(a);l[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o[u]="string"==typeof n?n:r,l[1]=o;for(var c=2;c<a;c++)l[c]=i[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}k.displayName="MDXCreateElement"},18463:(n,e,i)=>{i.r(e),i.d(e,{contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var t=i(87462),r=(i(67294),i(3905));const a={title:"Linkis1.0 \u4e0e Linkis0.X \u7684\u533a\u522b\u7b80\u8ff0",sidebar_position:1},l=void 0,o={unversionedId:"architecture/difference-between-1.0-and-0.x",id:"version-1.2.0/architecture/difference-between-1.0-and-0.x",isDocsHomePage:!1,title:"Linkis1.0 \u4e0e Linkis0.X \u7684\u533a\u522b\u7b80\u8ff0",description:"1. \u7b80\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/architecture/difference-between-1.0-and-0.x.md",sourceDirName:"architecture",slug:"/architecture/difference-between-1.0-and-0.x",permalink:"/zh-CN/docs/latest/architecture/difference-between-1.0-and-0.x",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/architecture/difference-between-1.0-and-0.x.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{title:"Linkis1.0 \u4e0e Linkis0.X \u7684\u533a\u522b\u7b80\u8ff0",sidebar_position:1},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/latest/architecture/overview"},next:{title:"\u81ea\u5b9a\u4e49\u53d8\u91cf\u8bbe\u8ba1",permalink:"/zh-CN/docs/latest/architecture/commons/variable"}},s=[{value:"1. \u7b80\u8ff0",id:"1-\u7b80\u8ff0",children:[]},{value:"2. \u4e3b\u8981\u7279\u70b9",id:"2-\u4e3b\u8981\u7279\u70b9",children:[]},{value:"3. \u670d\u52a1\u5bf9\u6bd4",id:"3-\u670d\u52a1\u5bf9\u6bd4",children:[]},{value:"4. Linkis Manager\u7b80\u4ecb",id:"4-linkis-manager\u7b80\u4ecb",children:[]},{value:"5. Linkis EngineConnPlugin\u7b80\u4ecb",id:"5-linkis-engineconnplugin\u7b80\u4ecb",children:[{value:"5.1 \u65b0\u5f15\u64ce\u5b9e\u73b0\u5bf9\u6bd4",id:"51-\u65b0\u5f15\u64ce\u5b9e\u73b0\u5bf9\u6bd4",children:[]},{value:"5.2 \u65b0\u5f15\u64ce\u542f\u52a8\u6d41\u7a0b",id:"52-\u65b0\u5f15\u64ce\u542f\u52a8\u6d41\u7a0b",children:[]}]},{value:"6. Linkis EngineConn\u7b80\u4ecb",id:"6-linkis-engineconn\u7b80\u4ecb",children:[]}],c={toc:s};function p(n){let{components:e,...a}=n;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u7b80\u8ff0"},"1. \u7b80\u8ff0"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  \u9996\u5148\uff0cLinkis1.0 \u67b6\u6784\u4e0b\u7684 Entrance \u548c EngineConnManager\uff08\u539fEngineManager\uff09\u670d\u52a1\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u5f15\u64ce")," \u5df2\u5b8c\u5168\u65e0\u5173\uff0c\u5373\uff1a\n\u5728 Linkis1.0 \u67b6\u6784\u4e0b\uff0c\u6bcf\u4e2a\u5f15\u64ce\u65e0\u9700\u518d\u914d\u5957\u5b9e\u73b0\u5e76\u542f\u52a8\u5bf9\u5e94\u7684 Entrance \u548c EngineConnManager\uff0cLinkis1.0 \u7684\u6bcf\u4e2a Entrance \u548c EngineConnManager \u90fd\u53ef\u4ee5\u7ed9\u6240\u6709\u5f15\u64ce\u5171\u7528\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  \u5176\u6b21\uff0cLinkis1.0 \u65b0\u589e\u4e86Linkis-Manager\u670d\u52a1\u7528\u4e8e\u5bf9\u5916\u63d0\u4f9b AppManager\uff08\u5e94\u7528\u7ba1\u7406\uff09\u3001ResourceManager\uff08\u8d44\u6e90\u7ba1\u7406\uff0c\u539fResourceManager\u670d\u52a1\uff09\u548c LabelManager\uff08\u6807\u7b7e\u7ba1\u7406\uff09\u7684\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  \u7136\u540e\uff0c\u4e3a\u4e86\u964d\u4f4e\u5927\u5bb6\u5b9e\u73b0\u548c\u90e8\u7f72\u4e00\u4e2a\u65b0\u5f15\u64ce\u7684\u96be\u5ea6\uff0cLinkis 1.0 \u91cd\u65b0\u67b6\u6784\u4e86\u4e00\u4e2a\u53eb EngineConnPlugin \u7684\u6a21\u5757\uff0c\u6bcf\u4e2a\u65b0\u5f15\u64ce\u53ea\u9700\u8981\u5b9e\u73b0 EngineConnPlugin \u63a5\u53e3\u5373\u53ef\uff0c\nLinkis EngineConnPluginServer \u652f\u6301\u4ee5\u63d2\u4ef6\u7684\u5f62\u5f0f\u52a8\u6001\u52a0\u8f7d EngineConnPlugin\uff08\u65b0\u5f15\u64ce\uff09\uff0c\u4e00\u65e6 EngineConnPluginServer \u52a0\u8f7d\u6210\u529f\uff0cEngineConnManager \u4fbf\u53ef\u4e3a\u7528\u6237\u5feb\u901f\u542f\u52a8\u4e00\u4e2a\u8be5\u5f15\u64ce\u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  \u6700\u540e\uff0c\u5bf9Linkis\u7684\u6240\u6709\u5fae\u670d\u52a1\u8fdb\u884c\u4e86\u5f52\u7eb3\u5206\u7c7b\uff0c\u603b\u4f53\u5206\u4e3a\u4e86\u4e09\u4e2a\u5927\u5c42\u6b21\uff1a\u516c\u5171\u589e\u5f3a\u670d\u52a1\u3001\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1\u548c\u5fae\u670d\u52a1\u6cbb\u7406\u670d\u52a1\uff0c\u4ece\u4ee3\u7801\u5c42\u7ea7\u7ed3\u6784\u3001\u5fae\u670d\u52a1\u547d\u540d\u548c\u5b89\u88c5\u76ee\u5f55\u7ed3\u6784\u7b49\u591a\u4e2a\u65b9\u9762\u6765\u89c4\u8303Linkis1.0\u7684\u5fae\u670d\u52a1\u4f53\u7cfb\u3002"),(0,r.kt)("h2",{id:"2-\u4e3b\u8981\u7279\u70b9"},"2. \u4e3b\u8981\u7279\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5f3a\u5316\u8ba1\u7b97\u6cbb\u7406"),"\uff0cLinkis1.0\u4e3b\u8981\u4ece\u5f15\u64ce\u7ba1\u7406\u3001\u6807\u7b7e\u7ba1\u7406\u3001ECM\u7ba1\u7406\u548c\u8d44\u6e90\u7ba1\u7406\u7b49\u51e0\u4e2a\u65b9\u9762\uff0c\u5168\u9762\u5f3a\u5316\u4e86\u8ba1\u7b97\u6cbb\u7406\u7684\u7efc\u5408\u7ba1\u63a7\u80fd\u529b\uff0c\u57fa\u4e8e\u6807\u7b7e\u5316\u7684\u5f3a\u5927\u7ba1\u63a7\u8bbe\u8ba1\u7406\u5ff5\uff0c\u4f7f\u5f97Linkis1.0\u5411\u591aIDC\u5316\u3001\u591a\u96c6\u7fa4\u5316\u3001\u591a\u5bb9\u5668\u5316\uff0c\u8fc8\u51fa\u4e86\u575a\u5b9e\u7684\u4e00\u5927\u6b65\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b80\u5316\u7528\u6237\u5b9e\u73b0\u65b0\u5f15\u64ce"),"\uff0cEnginePlugin\u7528\u4e8e\u5c06\u539f\u672c\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce\uff0c\u9700\u8981\u5b9e\u73b0\u7684\u76f8\u5173\u63a5\u53e3\u548c\u7c7b\uff0c\u4ee5\u53ca\u9700\u8981\u62c6\u5206\u7684Entrance-EngineManager-Engine\u4e09\u5c42\u6a21\u5757\u4f53\u7cfb\uff0c\u878d\u5408\u5230\u4e86\u4e00\u4e2a\u63a5\u53e3\u4e4b\u4e2d\uff0c\u7b80\u5316\u7528\u6237\u5b9e\u73b0\u65b0\u5f15\u64ce\u7684\u6d41\u7a0b\u548c\u4ee3\u7801\uff0c\u771f\u6b63\u505a\u5230\u53ea\u8981\u5b9e\u73b0\u4e00\u4e2a\u7c7b\uff0c\u5c31\u80fd\u63a5\u5165\u4e00\u4e2a\u65b0\u5f15\u64ce\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5168\u6808\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u652f\u6301"),"\uff0c\u5b9e\u73b0\u5bf9\u8ba1\u7b97\u8bf7\u6c42\u573a\u666f\uff08\u5982Spark\uff09\u3001\u5b58\u50a8\u8bf7\u6c42\u573a\u666f\uff08\u5982HBase\uff09\u548c\u5e38\u9a7b\u96c6\u7fa4\u578b\u670d\u52a1\uff08\u5982SparkStreaming\uff09\u7684\u5168\u9762\u8986\u76d6\u652f\u6301\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u9ad8\u7ea7\u8ba1\u7b97\u7b56\u7565\u80fd\u529b\u6539\u8fdb"),"\uff0c\u65b0\u589eOrchestrator\u5b9e\u73b0\u4e30\u5bcc\u8ba1\u7b97\u4efb\u52a1\u7ba1\u7406\u7b56\u7565\uff0c\u4e14\u652f\u6301\u57fa\u4e8e\u6807\u7b7e\u7684\u89e3\u6790\u548c\u7f16\u6392\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u90e8\u7f72\u6539\u8fdb"),"  \u4f18\u5316\u4e00\u952e\u5b89\u88c5\u811a\u672c\uff0c\u652f\u6301\u5bb9\u5668\u5316\u90e8\u7f72\uff0c\u7b80\u5316\u7528\u6237\u914d\u7f6e\u3002"))),(0,r.kt)("h2",{id:"3-\u670d\u52a1\u5bf9\u6bd4"},"3. \u670d\u52a1\u5bf9\u6bd4"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  \u8bf7\u53c2\u8003\u4ee5\u4e0b\u4e24\u5f20\u56fe\uff1a"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  Linkis0.X \u5fae\u670d\u52a1\u5217\u8868\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Linkis0.X\u670d\u52a1\u5217\u8868",src:i(96892).Z})),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  Linkis1.0 \u5fae\u670d\u52a1\u5217\u8868\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Linkis1.0\u670d\u52a1\u5217\u8868",src:i(42362).Z})),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  \u4ece\u4e0a\u9762\u4e24\u4e2a\u56fe\u4e2d\u770b\uff0cLinkis1.0 \u5c06\u670d\u52a1\u5206\u4e3a\u4e86\u4e09\u7c7b\u670d\u52a1\uff1a\u8ba1\u7b97\u6cbb\u7406\uff08\u82f1\u6587\u7f29\u5199CG\uff09/\u5fae\u670d\u52a1\u6cbb\u7406\uff08MG\uff09/\u516c\u5171\u589e\u5f3a\u670d\u52a1(PS)\u3002\u5176\u4e2d\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8ba1\u7b97\u6cbb\u7406\u7684\u4e00\u5927\u53d8\u5316\u662f\uff0cEntrance \u548c EngineConnManager\u670d\u52a1\u4e0e\u5f15\u64ce\u518d\u4e0d\u76f8\u5173\uff0c\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce\u53ea\u9700\u5b9e\u73b0 EngineConnPlugin\u63d2\u4ef6\u5373\u53ef\uff0cEngineConnPluginServer\u4f1a\u52a8\u6001\u52a0\u8f7d EngineConnPlugin \u63d2\u4ef6\uff0c\u505a\u5230\u5f15\u64ce\u70ed\u63d2\u62d4\u5f0f\u66f4\u65b0\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8ba1\u7b97\u6cbb\u7406\u7684\u53e6\u4e00\u5927\u53d8\u5316\u662f\uff0cLinkisManager\u4f5c\u4e3a Linkis \u7684\u7ba1\u7406\u5927\u8111\uff0c\u62bd\u8c61\u548c\u5b9a\u4e49\u4e86 AppManager\uff08\u5e94\u7528\u7ba1\u7406\uff09\u3001ResourceManager\uff08\u8d44\u6e90\u7ba1\u7406\uff09\u548cLabelManager\uff08\u6807\u7b7e\u7ba1\u7406\uff09\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5fae\u670d\u52a1\u6cbb\u7406\u670d\u52a1\uff0c\u5c060.X\u90e8\u5206\u7684Eureka\u548cGateway\u670d\u52a1\u8fdb\u884c\u4e86\u5f52\u5e76\u7edf\u4e00\uff0c\u5e76\u5bf9Gateway\u670d\u52a1\u8fdb\u884c\u4e86\u529f\u80fd\u589e\u5f3a\uff0c\u652f\u6301\u6309\u7167Label\u8fdb\u884c\u8def\u7531\u8f6c\u53d1\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u516c\u5171\u589e\u5f3a\u670d\u52a1\uff0c\u4e3b\u8981\u5c060.X\u90e8\u5206\u7684BML\u670d\u52a1/\u4e0a\u4e0b\u6587\u670d\u52a1/\u6570\u636e\u6e90\u670d\u52a1/\u516c\u5171\u670d\u52a1\u8fdb\u884c\u4e86\u4f18\u5316\u548c\u5f52\u5e76\u7edf\u4e00\uff0c\u4fbf\u4e8e\u5927\u5bb6\u7ba1\u7406\u548c\u67e5\u770b\u3002"))),(0,r.kt)("h2",{id:"4-linkis-manager\u7b80\u4ecb"},"4. Linkis Manager\u7b80\u4ecb"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  Linkis Manager \u4f5c\u4e3a Linkis \u7684\u7ba1\u7406\u5927\u8111\uff0c\u4e3b\u8981\u7531 AppManager\u3001ResourceManager \u548c LabelManager \u7ec4\u6210\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  ResourceManager \u4e0d\u4ec5\u5177\u5907 Linkis0.X \u5bf9 Yarn \u548c Linkis EngineManager \u7684\u8d44\u6e90\u7ba1\u7406\u80fd\u529b\uff0c\u8fd8\u5c06\u63d0\u4f9b\u57fa\u4e8e\u6807\u7b7e\u7684\u591a\u7ea7\u8d44\u6e90\u5206\u914d\u548c\u56de\u6536\u80fd\u529b\uff0c\u8ba9 ResourceManager \u5177\u5907\u8de8\u96c6\u7fa4\u3001\u8de8\u8ba1\u7b97\u8d44\u6e90\u7c7b\u578b\u7684\u5168\u8d44\u6e90\u7ba1\u7406\u80fd\u529b\uff1b"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  AppManager \u5c06\u7edf\u7b79\u7ba1\u7406\u6240\u6709\u7684 EngineConnManager \u548c EngineConn\uff0cEngineConn \u7684\u7533\u8bf7\u3001\u590d\u7528\u3001\u521b\u5efa\u3001\u5207\u6362\u3001\u9500\u6bc1\u7b49\u751f\u547d\u5468\u671f\u5168\u4ea4\u4e88 AppManager\u8fdb\u884c\u7ba1\u7406\uff1b"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  \u800c LabelManager \u5c06\u57fa\u4e8e\u591a\u7ea7\u7ec4\u5408\u6807\u7b7e\uff0c\u63d0\u4f9b\u8de8IDC\u3001\u8de8\u96c6\u7fa4\u7684 EngineConn \u548c EngineConnManager \u8def\u7531\u548c\u7ba1\u63a7\u80fd\u529b\uff1b"),(0,r.kt)("h2",{id:"5-linkis-engineconnplugin\u7b80\u4ecb"},"5. Linkis EngineConnPlugin\u7b80\u4ecb"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  EngineConnPlugin \u4e3b\u8981\u7528\u4e8e\u964d\u4f4e\u65b0\u8ba1\u7b97\u5b58\u50a8\u7684\u63a5\u5165\u548c\u90e8\u7f72\u6210\u672c\uff0c\u771f\u6b63\u505a\u5230\u8ba9\u7528\u6237\u201c\u53ea\u9700\u5b9e\u73b0\u4e00\u4e2a\u7c7b\uff0c\u5c31\u80fd\u63a5\u5165\u4e00\u4e2a\u5168\u65b0\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\uff1b\u53ea\u9700\u6267\u884c\u4e00\u4e0b\u811a\u672c\uff0c\u5373\u53ef\u5feb\u901f\u90e8\u7f72\u4e00\u4e2a\u5168\u65b0\u5f15\u64ce\u201d\u3002"),(0,r.kt)("h3",{id:"51-\u65b0\u5f15\u64ce\u5b9e\u73b0\u5bf9\u6bd4"},"5.1 \u65b0\u5f15\u64ce\u5b9e\u73b0\u5bf9\u6bd4"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  \u4ee5\u4e0b\u662f\u7528\u6237Linkis0.X\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce\u9700\u8981\u5b9e\u73b0\u7684\u76f8\u5173\u63a5\u53e3\u548c\u7c7b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Linkis0.X \u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u5168\u65b0\u5f15\u64ce",src:i(60848).Z})),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  \u4ee5\u4e0b\u4e3aLinkis1.0.0\uff0c\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce\uff0c\u7528\u6237\u9700\u5b9e\u73b0\u7684\u63a5\u53e3\u548c\u7c7b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Linkis1.0 \u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u5168\u65b0\u5f15\u64ce",src:i(16014).Z})),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  \u5176\u4e2dEngineConnResourceFactory\u548cEngineLaunchBuilder\u4e3a\u975e\u5fc5\u9700\u5b9e\u73b0\u63a5\u53e3\uff0c\u53ea\u6709EngineConnFactory\u4e3a\u5fc5\u9700\u5b9e\u73b0\u63a5\u53e3\u3002"),(0,r.kt)("h3",{id:"52-\u65b0\u5f15\u64ce\u542f\u52a8\u6d41\u7a0b"},"5.2 \u65b0\u5f15\u64ce\u542f\u52a8\u6d41\u7a0b"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  EngineConnPlugin \u63d0\u4f9b\u4e86 Server \u670d\u52a1\uff0c\u7528\u4e8e\u542f\u52a8\u548c\u52a0\u8f7d\u6240\u6709\u7684\u5f15\u64ce\u63d2\u4ef6\uff0c\u4ee5\u4e0b\u7ed9\u51fa\u4e86\u4e00\u4e2a\u65b0\u5f15\u64ce\u542f\u52a8\uff0c\u8bbf\u95ee\u4e86 EngineConnPlugin-Server \u7684\u5168\u90e8\u6d41\u7a0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Linkis \u5f15\u64ce\u542f\u52a8\u6d41\u7a0b",src:i(79776).Z})),(0,r.kt)("h2",{id:"6-linkis-engineconn\u7b80\u4ecb"},"6. Linkis EngineConn\u7b80\u4ecb"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  EngineConn\uff0c\u5373\u539f Engine \u6a21\u5757\uff0c\u4f5c\u4e3a Linkis \u4e0e\u5e95\u5c42\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u8fdb\u884c\u8fde\u63a5\u548c\u4ea4\u4e92\u7684\u5b9e\u9645\u5355\u5143\uff0c\u662f Linkis \u63d0\u4f9b\u8ba1\u7b97\u5b58\u50a8\u80fd\u529b\u7684\u57fa\u7840\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  Linkis1.0 \u7684 EngineConn \u4e3b\u8981\u7531 EngineConn \u548c Executor\u6784\u6210\u3002\u5176\u4e2d\uff1a"),(0,r.kt)("p",null,"a)\tEngineConn \u4e3a\u8fde\u63a5\u5668\uff0c\u5305\u542b\u5f15\u64ce\u4e0e\u5177\u4f53\u96c6\u7fa4\u7684\u4f1a\u8bdd\u4fe1\u606f\u3002\u5b83\u53ea\u662f\u8d77\u5230\u4e00\u4e2a\u8fde\u63a5\uff0c\u4e00\u4e2a\u5ba2\u6237\u7aef\u7684\u4f5c\u7528\uff0c\u5e76\u4e0d\u771f\u6b63\u7684\u53bb\u6267\u884c\u8ba1\u7b97\u3002"),(0,r.kt)("p",null,"b)\tExecutor \u4e3a\u6267\u884c\u5668\uff0c\u4f5c\u4e3a\u771f\u6b63\u7684\u8ba1\u7b97\u573a\u666f\u6267\u884c\u5668\uff0c\u662f\u5b9e\u9645\u7684\u8ba1\u7b97\u903b\u8f91\u6267\u884c\u5355\u5143\uff0c\u4e5f\u5bf9\u5f15\u64ce\u5404\u79cd\u5177\u4f53\u80fd\u529b\u7684\u62bd\u8c61\uff0c\u4f8b\u5982\u63d0\u4f9b\u52a0\u9501\u3001\u8bbf\u95ee\u72b6\u6001\u3001\u83b7\u53d6\u65e5\u5fd7\u7b49\u591a\u79cd\u4e0d\u540c\u7684\u670d\u52a1\u3002"),(0,r.kt)("p",null,"c)\tExecutor \u901a\u8fc7 EngineConn \u4e2d\u7684\u4f1a\u8bdd\u4fe1\u606f\u8fdb\u884c\u521b\u5efa\uff0c\u4e00\u4e2a\u5f15\u64ce\u7c7b\u578b\u53ef\u4ee5\u652f\u6301\u591a\u79cd\u4e0d\u540c\u79cd\u7c7b\u7684\u8ba1\u7b97\u4efb\u52a1\uff0c\u6bcf\u79cd\u5bf9\u5e94\u4e00\u4e2a Executor \u7684\u5b9e\u73b0\uff0c\u8ba1\u7b97\u4efb\u52a1\u5c06\u88ab\u63d0\u4ea4\u5230\u5bf9\u5e94\u7684 Executor \u8fdb\u884c\u6267\u884c\u3002\n\u8fd9\u6837\uff0c\u540c\u4e00\u4e2a\u5f15\u64ce\u80fd\u591f\u6839\u636e\u4e0d\u540c\u7684\u8ba1\u7b97\u573a\u666f\u63d0\u4f9b\u4e0d\u540c\u7684\u670d\u52a1\u3002\u6bd4\u5982\u5e38\u9a7b\u5f0f\u5f15\u64ce\u542f\u52a8\u540e\u4e0d\u9700\u8981\u52a0\u9501\uff0c\u4e00\u6b21\u6027\u5f15\u64ce\u542f\u52a8\u540e\u4e0d\u9700\u8981\u652f\u6301 Receiver \u548c\u8bbf\u95ee\u72b6\u6001\u7b49\u3002"),(0,r.kt)("p",null,"d)\t\u91c7\u7528 Executor \u548c EngineConn \u5206\u79bb\u7684\u65b9\u5f0f\u7684\u597d\u5904\u662f\uff0c\u53ef\u4ee5\u907f\u514d Receiver \u8026\u5408\u4e1a\u52a1\u903b\u8f91\uff0c\u672c\u8eab\u53ea\u4fdd\u7559 RPC \u901a\u4fe1\u529f\u80fd\u3002\u5c06\u670d\u52a1\u5206\u6563\u5728\u591a\u4e2a Executor \u6a21\u5757\u4e2d\uff0c\u5e76\u4e14\u62bd\u8c61\u6210\u51e0\u5927\u7c7b\u5f15\u64ce\uff1a\u4ea4\u4e92\u5f0f\u8ba1\u7b97\u5f15\u64ce\u3001\u6d41\u5f0f\u5f15\u64ce\u3001\u4e00\u6b21\u6027\u5f15\u64ce\u7b49\u7b49\u53ef\u80fd\u7528\u5230\u7684\uff0c\u6784\u5efa\u6210\u7edf\u4e00\u7684\u5f15\u64ce\u6846\u67b6\uff0c\u4fbf\u4e8e\u540e\u671f\u7684\u6269\u5145\u3002\n\u8fd9\u6837\u4e0d\u540c\u7c7b\u578b\u5f15\u64ce\u53ef\u4ee5\u6839\u636e\u9700\u8981\u5206\u522b\u52a0\u8f7d\u5176\u4e2d\u9700\u8981\u7684\u80fd\u529b\uff0c\u5927\u5927\u51cf\u5c11\u5f15\u64ce\u5b9e\u73b0\u7684\u5197\u4f59\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","  \u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Linkis EngineConn\u67b6\u6784\u56fe",src:i(43570).Z})))}p.isMDXComponent=!0},60848:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/Linkis0.X-NewEngine-architecture-0f48d98c61e8330b747a15ea5f895f76.png"},96892:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/Linkis0.X-services-list-bd33f6fbc559bd0e75c97233ebe6b23f.png"},43570:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/Linkis1.0-EngineConn-architecture-367e10108a33edc9c0babcc82a11fe7b.png"},16014:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/Linkis1.0-NewEngine-architecture-02f0d38d3ba1639b1c974fdb849825be.png"},79776:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/Linkis1.0-newEngine-initialization-9a35b37d0a904fd177d753639fbc807b.png"},42362:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/Linkis1.0-services-list-121f63288d78b64fcffe807d4e47c421.png"}}]);