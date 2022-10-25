"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[52987],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>N});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),c=d(n),N=l,s=c["".concat(m,".").concat(N)]||c[N]||u[N]||r;return n?a.createElement(s,i(i({ref:e},k),{},{components:n})):a.createElement(s,i({ref:e},k))}));function N(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61380:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(87462),l=(n(67294),n(3905));const r={title:"CS \u6e05\u7406\u63a5\u53e3\u7279\u6027",sidebar_position:8,tags:["Feature"]},i=void 0,p={unversionedId:"architecture/public-enhancement-services/context-service/content-service-cleanup",id:"architecture/public-enhancement-services/context-service/content-service-cleanup",isDocsHomePage:!1,title:"CS \u6e05\u7406\u63a5\u53e3\u7279\u6027",description:"1. \u529f\u80fd\u9700\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/public-enhancement-services/context-service/content-service-cleanup.md",sourceDirName:"architecture/public-enhancement-services/context-service",slug:"/architecture/public-enhancement-services/context-service/content-service-cleanup",permalink:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/context-service/content-service-cleanup",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/public-enhancement-services/context-service/content-service-cleanup.md",tags:[{label:"Feature",permalink:"/zh-CN/docs/1.3.0/tags/feature"}],version:"current",sidebarPosition:8,frontMatter:{title:"CS \u6e05\u7406\u63a5\u53e3\u7279\u6027",sidebar_position:8,tags:["Feature"]},sidebar:"tutorialSidebar",previous:{title:"CS Cache \u67b6\u6784",permalink:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/context-service/context-service-cache"},next:{title:"DataSource Manager Server \u67b6\u6784",permalink:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/datasource-manager"}},m=[{value:"1. \u529f\u80fd\u9700\u6c42",id:"1-\u529f\u80fd\u9700\u6c42",children:[{value:"1.1 \u80cc\u666f",id:"11-\u80cc\u666f",children:[]},{value:"1.2 \u76ee\u6807",id:"12-\u76ee\u6807",children:[]}]},{value:"2. \u603b\u4f53\u8bbe\u8ba1",id:"2-\u603b\u4f53\u8bbe\u8ba1",children:[{value:"2.1 \u6280\u672f\u67b6\u6784",id:"21-\u6280\u672f\u67b6\u6784",children:[]},{value:"2.2 \u4e1a\u52a1\u67b6\u6784",id:"22-\u4e1a\u52a1\u67b6\u6784",children:[]}]},{value:"3. \u6a21\u5757\u8bbe\u8ba1",id:"3-\u6a21\u5757\u8bbe\u8ba1",children:[{value:"\u4e3b\u8981\u6267\u884c\u6d41\u7a0b",id:"\u4e3b\u8981\u6267\u884c\u6d41\u7a0b",children:[]}]},{value:"\u901a\u8fc7\u65f6\u95f4\u6e05\u9664\u6240\u4ee5\u4e0a\u4e0b\u6587",id:"\u901a\u8fc7\u65f6\u95f4\u6e05\u9664\u6240\u4ee5\u4e0a\u4e0b\u6587",children:[]},{value:"6. \u975e\u529f\u80fd\u6027\u8bbe\u8ba1",id:"6-\u975e\u529f\u80fd\u6027\u8bbe\u8ba1",children:[{value:"6.1 \u5b89\u5168",id:"61-\u5b89\u5168",children:[]},{value:"6.2 \u6027\u80fd",id:"62-\u6027\u80fd",children:[]},{value:"6.3 \u5bb9\u91cf",id:"63-\u5bb9\u91cf",children:[]},{value:"6.4 \u9ad8\u53ef\u7528",id:"64-\u9ad8\u53ef\u7528",children:[]}]}],d={toc:m};function k(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u529f\u80fd\u9700\u6c42"},"1. \u529f\u80fd\u9700\u6c42"),(0,l.kt)("h3",{id:"11-\u80cc\u666f"},"1.1 \u80cc\u666f"),(0,l.kt)("p",null,"1.1.3\u7248\u672c\u524d\uff0cContextService \u7edf\u4e00\u4e0a\u4e0b\u6587\u670d\u52a1\u7f3a\u5c11\u6e05\u7406\u673a\u5236\uff0c\u4e14\u7f3a\u5c11\u521b\u5efa\u65f6\u95f4\u3001\u66f4\u65b0\u65f6\u95f4\u5b57\u6bb5\u4ee5\u53ca\u6279\u91cf\u6e05\u7406\u7684\u63a5\u53e3\uff0c\n\u5728\u957f\u671f\u7d2f\u79ef\u60c5\u51b5\u4e0b\u53ef\u80fd\u51fa\u73b0\u767e\u4e07\u7ea7\u6570\u636e\uff0c\u5f71\u54cd\u67e5\u8be2\u6548\u7387\u3002"),(0,l.kt)("h3",{id:"12-\u76ee\u6807"},"1.2 \u76ee\u6807"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4fee\u65391ContextService",(0,l.kt)("inlineCode",{parentName:"li"},"\u5e95\u5c42\u5e93\u8868\uff0c\u6dfb\u52a0\u521b\u5efa\u65f6\u95f4\u3001\u4fee\u6539\u65f6\u95f4\u3001\u6700\u540e\u8bbf\u95ee\u65f6\u95f4\u5b57\u6bb5\uff0c\u5b8c\u6210"),"ContextID",(0,l.kt)("inlineCode",{parentName:"li"},"\u548c"),"ContextMap`\u76f8\u5173\u6570\u636e\u7684\u66f4\u65b0\u65f6\u95f4\u5165\u5e93"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6e05\u7406\u6e05\u7406\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"restful"),"\u63a5\u53e3\uff0c\u652f\u6301\u6309\u7167\u65f6\u95f4\u8303\u56f4\u3001\u6309\u7167id\u5217\u8868\u7684\u6279\u96f6\u6e05\u7406\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5bf9\u5e94\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"cs-client"),"\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"java sdk"),"\u63a5\u53e3")),(0,l.kt)("h2",{id:"2-\u603b\u4f53\u8bbe\u8ba1"},"2. \u603b\u4f53\u8bbe\u8ba1"),(0,l.kt)("p",null,"\u672c\u6b21\u9700\u6c42\u6d89\u53ca",(0,l.kt)("inlineCode",{parentName:"p"},"ContextService"),"\u4e0b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"cs-client"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"cs-persistence"),"\u4ee5\u53ca",(0,l.kt)("inlineCode",{parentName:"p"},"cs-server"),"\u6a21\u5757\u3002\n\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"cs-persistence"),"\u6a21\u5757\u6dfb\u52a0\u5df2\u6709\u8868\u76843\u4e2a\u5b57\u6bb5\uff1b\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"cs-server"),"\u6a21\u5757\u6dfb\u52a03\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"restful"),"\u63a5\u53e3\uff0c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"cs-client"),"\u6a21\u5757\u6dfb\u52a03\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"sdk api"),"\u3002"),(0,l.kt)("h3",{id:"21-\u6280\u672f\u67b6\u6784"},"2.1 \u6280\u672f\u67b6\u6784"),(0,l.kt)("p",null,"ContextService \u6574\u4f53\u67b6\u6784\u53ef\u53c2\u8003\u5df2\u6709\u6587\u6863\uff1a ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/context-service/overview"},"ContextService\u67b6\u6784\u6587\u6863")),(0,l.kt)("p",null,"ContestService\u5404\u6a21\u5757\u8bbf\u95ee\u5173\u7cfb\u5982\u4e0b\u56fe\u6240\u793a\n",(0,l.kt)("img",{alt:"linkis-contextservice-clean-01.png",src:n(95434).Z})),(0,l.kt)("p",null," \u8868\u53d8\u66f4\u5747\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"cs-persistence"),"\u6a21\u5757\u3002\u6b64\u6b21\u53d8\u66f4\u6d89\u53ca5\u5f20\u8868",(0,l.kt)("inlineCode",{parentName:"p"},"context_id\u3001 context_map \u3001context_id_listener \u3001context_key_listener \u3001 context_history"),"\u8868\uff0c\u5747\u9700\u8981\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"create_time\uff0cupdate_time\uff0caccess_time")," 3\u4e2a\u5b57\u6bb5\u3002\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"context_id \u3001context_map")," \u8868\u5df2\u542f\u7528\uff0c\u5176\u5b833\u5f20\u8868\u672a\u542f\u7528\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"create_time")," \u5728persistence\u6a21\u5757\u6267\u884cinsert\u64cd\u4f5c\u524d\uff0c\u6dfb\u52a0\u65f6\u95f4\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"update_time")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"access_time")," \u7531\u4e0a\u6e38\u63a5\u53e3\u4e3b\u52a8\u8c03\u7528\uff0c\u5728update\u63a5\u53e3\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"update_time")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"access_time")," \u4e92\u65a5\u66f4\u65b0\uff0c\u5373\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"access_time")," \u5b58\u5728\uff08\u4e0d\u4e3anull\uff09\u5219\u4e0d\u66f4\u65b0",(0,l.kt)("inlineCode",{parentName:"p"},"update_time"),"\uff0c\u5426\u5219\u66f4\u65b0update_time\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"update_time"),"\u5b57\u6bb5\u66f4\u65b0\u5728cs-cache\u6a21\u5757\u4e2d\uff0c\u68c0\u6d4b\u5230\u4ecedb\u52a0\u8f7d\u65b0\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"context_id"),"\u65f6\u7684ADD\u6d88\u606f\uff0c\u6b64\u65f6\u540c\u6b65",(0,l.kt)("inlineCode",{parentName:"p"},"access_time")," \u5230db\u3002\n\u8868\u4e2d\u4ec5\u8bb0\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"context_id")," \u8868\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"create_time\u3001update_time\u3001access_time"),"\u3002\u540e\u7eed\u641c\u7d22\u6e05\u7406\uff0c\u4e5f\u662f\u4ececontext_id \u8868\u8fdb\u884c\u6e05\u7406\u3002"),(0,l.kt)("p",null,"\u589e\u52a03\u4e2a\u6e05\u7406\u76f8\u5173\u63a5\u53e3\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"searchContextIDByTime\u3001clearAllContextByID\u3001clearAllContextByTime")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"searchContextIDByTime"),"\u6309\u71673\u4e2a\u65f6\u95f4\u8d77\u6b62\u8303\u56f4\u641c\u7d22\uff0c\u8fd4\u56decontextID\u5217\u8868"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clearAllContextByID"),"\u6e05\u7406\u8f93\u5165\u7684contextID\u5217\u8868\u4e2dID\u5bf9\u5e94\u7684context_map\u8868\u548ccontext_id\u8868\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clearAllContextByTime")," \u6309\u71673\u4e2a\u65f6\u95f4\u8d77\u6b62\u8303\u56f4\u641c\u7d22\uff0c\u5e76\u4e14\u6e05\u7406\u6240\u6709\u641c\u7d22\u5230\u7684contextID\u5bf9\u5e94\u7684context_map\u8868\u548ccontext_id\u8868\u7684\u5185\u5bb9")),(0,l.kt)("h3",{id:"22-\u4e1a\u52a1\u67b6\u6784"},"2.2 \u4e1a\u52a1\u67b6\u6784"),(0,l.kt)("p",null,"\u6b64\u6b21\u7279\u6027\u662f\u7ed9ContextService\u670d\u52a1\u589e\u52a0\u6279\u91cf\u67e5\u8be2\u548c\u6e05\u7406\u7684\u76f8\u5173\u63a5\u53e3\uff0c\u4ee5\u53ca\u589e\u52a0\u5e95\u5c42\u6570\u636e\u8868\u7684\u66f4\u65b0\u65f6\u95f4\u7b49\u5b57\u6bb5\uff0c\u4fbf\u4e8e\u6839\u636e\u8bbf\u95ee\u60c5\u51b5\u6e05\u7406\u8fc7\u671f\u6570\u636e\u3002\u529f\u80fd\u70b9\u6d89\u53ca\u6a21\u5757\u5982\u4e0b\u8868\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u4e00\u7ea7\u6a21\u5757"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u4e8c\u7ea7\u6a21\u5757"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u529f\u80fd\u70b9"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"linkis-ps-cs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"cs-client"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u589e\u52a0\u6279\u91cf\u6e05\u7406\u63a5\u53e3\u76f8\u5173java sdk api\u63a5\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Linkis-ps-cs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"cs-server"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u589e\u52a0\u6279\u91cf\u6e05\u7406\u63a5\u53e3\u76f8\u5173restful\u63a5\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"linkis-ps-cs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"cs-persistence"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u589e\u52a0\u5e95\u5c42\u8868\u76843\u4e2a\u65f6\u95f4\u76f8\u5173\u5b57\u6bb5")))),(0,l.kt)("h2",{id:"3-\u6a21\u5757\u8bbe\u8ba1"},"3. \u6a21\u5757\u8bbe\u8ba1"),(0,l.kt)("h3",{id:"\u4e3b\u8981\u6267\u884c\u6d41\u7a0b"},"\u4e3b\u8981\u6267\u884c\u6d41\u7a0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efaContextID\u3002\u7528\u6237\u521b\u5efaContextID\u65f6\uff0c\u4f1a\u8bb0\u5f55create_time\uff0c\u540e\u671f\u4e0d\u66f4\u65b0\u8fd9\u4e2a\u5b57\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u65b0ContextID\u3002\u7528\u6237\u66f4\u65b0ContextID\u65f6\uff0c\u4f1a\u66f4\u65b0update_time\u5b57\u6bb5\u3002\u6ce8\u610f\u6b64\u65f6\u66f4\u65b0\u5982\u679c\u662f\u4ececache\u4e2d\u66f4\u65b0\uff0c\u5219\u4e0d\u4f1a\u66f4\u65b0access_time\u5b57\u6bb5\uff1b\u5982\u679c\u4ecedb\u52a0\u8f7d\u5230cache\uff0c\u518d\u66f4\u65b0contextID\uff0c\u5219\u4f1a\u5148\u66f4\u65b0access_time\uff0c\u7136\u540e\u5355\u72ec\u66f4\u65b0update_time"),(0,l.kt)("li",{parentName:"ul"},"\u6839\u636e\u65f6\u95f4\u67e5\u8be2ContextID\u3002\u7528\u6237\u67e5\u8be2\u5bf9\u5e94\u65f6\u95f4\u8303\u56f4\u7684ContextID\uff0c\u4ec5\u4f1a\u8fd4\u56dehaid\u5b57\u7b26\u4e32\u5217\u8868\u3002\u6b64\u63a5\u53e3\u6709\u5206\u9875\uff0c\u9ed8\u8ba4\u4ec5\u96505000\u6761\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u6279\u91cf\u6e05\u7406ContextID\u3002\u4f1a\u6279\u91cf\u6e05\u7406\u4f20\u5165\u7684idList\u5bf9\u5e94\u7684\u6240\u6709contextMap\u6570\u636e\u548ccontextID\u6570\u636e\u3002\u4f20\u5165\u6570\u7ec4\u6700\u59275000\u6761"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u5e76\u6e05\u7406ContextID\uff0c\u5148\u67e5\u8be2\u518d\u6279\u91cf\u6e05\u7406")),(0,l.kt)("p",null,"\u4e0a\u8ff0\u5bf9\u5e94\u65f6\u5e8f\u56fe\u5982\u4e0b\uff1a\n",(0,l.kt)("img",{alt:"linkis-contextservice-clean-02.png",src:n(69632).Z})),(0,l.kt)("p",null,"\u5176\u4e2d\u6709\u4e24\u5904\u9700\u8981\u989d\u5916\u6ce8\u610f\uff1a\n\u2460cs-server\u670d\u52a1\u4e2drestful api\uff0c\u4f1a\u5c06\u8bf7\u6c42\u5c01\u88c5\u6210Job\u63d0\u4ea4\u5230\u961f\u5217\u5e76\u963b\u585e\u7b49\u5f85\u7ed3\u679c\u3002\u65b0\u5b9a\u4e49\u4e86CLEAR \u7684\u64cd\u4f5c\u7c7b\u578b\uff0c\u4fbf\u4e8e\u5339\u914d\u5230\u6e05\u7406\u76f8\u5173\u63a5\u53e3\u3002\n\u2461\u5904\u7406\u2460\u4e2dJob\u7684Service\u670d\u52a1\uff0c\u9700\u8981\u5c06\u540d\u79f0\u5b9a\u4e49\u4e3a\u4e0d\u5305\u542bContextID\uff0c\u6765\u907f\u514dHighAvailable\u6a21\u5757\u7684\u52a8\u6001\u4ee3\u7406\u8f6c\u6362\uff0c\u8fd9\u4e2a\u8f6c\u6362\u4ec5\u5bf9\u4e8e\u8bf7\u6c42\u5185\u53ea\u6709\u4e00\u4e2aContextID\u7684\u63a5\u53e3\uff0c\u5bf9\u4e8e\u6279\u91cf\u6e05\u7406\u548c\u6279\u91cf\u67e5\u8be2\u63a5\u53e3\u65e0\u610f\u4e49\u4e14\u5f71\u54cd\u6027\u80fd\u3002"),(0,l.kt)("p",null,"##4. \u6570\u636e\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u4e3b\u8981\u6d89\u53ca\u7684context_id\u8868\u7ed3\u6784\u5982\u4e0b\uff0c\u589e\u52a0\u4e86create_time\u3001update_time\u3001expire_time\u5b57\u6bb5\nCREATE TABLE `linkis_ps_cs_context_id` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `user` varchar(32) DEFAULT NULL,\n  `application` varchar(32) DEFAULT NULL,\n  `source` varchar(255) DEFAULT NULL,\n  `expire_type` varchar(32) DEFAULT NULL,\n  `expire_time` datetime DEFAULT NULL,\n  `instance` varchar(128) DEFAULT NULL,\n  `backup_instance` varchar(255) DEFAULT NULL,\n  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'update unix timestamp',\n  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',\n  `access_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'last access time',\n  PRIMARY KEY (`id`),\n  KEY `instance` (`instance`(128)),\n  KEY `backup_instance` (`backup_instance`(191)),\n  KEY `instance_2` (`instance`(128),`backup_instance`(128))\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n")),(0,l.kt)("p",null,"##5. \u63a5\u53e3\u8bbe\u8ba1\n###5.1 Restful\u63a5\u53e3"),(0,l.kt)("h4",{id:"\u641c\u7d22\u6587\u672cid\u6267\u884c\u65f6\u95f4"},"\u641c\u7d22\u6587\u672cId\u6267\u884c\u65f6\u95f4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/contextservice/searchContextIDByTime")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,l.kt)("p",null,"\u641c\u7d22\u6587\u672cId\u6267\u884c\u65f6\u95f4")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accessTimeEnd"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u7ed3\u675f\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accessTimeStart"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u5f00\u59cb\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTimeEnd"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7ed3\u675f\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTimeStart"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTimeEnd"),(0,l.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u7ed3\u675f\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTimeStart"),(0,l.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": "/api/contextservice/searchContextIDByTime",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "contextIDs": [\n            "8-8--cs_1_devcs_2_dev10493",\n            "8-8--cs_1_devcs_2_dev10494",\n            "8-8--cs_1_devcs_2_dev10495",\n            "8-8--cs_1_devcs_2_dev10496",\n            "8-8--cs_1_devcs_2_dev10497",\n            "8-8--cs_2_devcs_2_dev10498"\n        ]\n    }\n}\n')),(0,l.kt)("h4",{id:"\u6e05\u7406\u6307\u5b9aid"},"\u6e05\u7406\u6307\u5b9aID"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/contextservice/clearAllContextByID")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,l.kt)("p",null,"\u901a\u8fc7ID\u6e05\u9664\u6240\u4ee5\u4e0a\u4e0b\u6587")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"idList"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4e0b\u6587id\u96c6\u5408"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": "/api/contextservice/clearAllContextByID",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "num": "1"\n    }\n}\n')),(0,l.kt)("h2",{id:"\u901a\u8fc7\u65f6\u95f4\u6e05\u9664\u6240\u4ee5\u4e0a\u4e0b\u6587"},"\u901a\u8fc7\u65f6\u95f4\u6e05\u9664\u6240\u4ee5\u4e0a\u4e0b\u6587"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/contextservice/clearAllContextByTime")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,l.kt)("p",null,"\u901a\u8fc7\u65f6\u95f4\u6e05\u9664\u6240\u4ee5\u4e0a\u4e0b\u6587")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accessTimeEnd"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u65f6\u95f4\u7ed3\u675f"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accessTimeStart"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u65f6\u95f4\u5f00\u59cb"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTimeEnd"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4\u7ed3\u675f"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTimeStart"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTimeStart"),(0,l.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u5f00\u59cb\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "createTimeStart": "2022-06-01 00:00:00",\n    "createTimeEnd": "2022-06-30 00:00:00"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": "/api/contextservice/clearAllContextByTime",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "num": "1"\n    }\n}\n')),(0,l.kt)("p",null,"###5.2 JAVA SDK API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# \u5f15\u5165pom\n<dependency>\n     <groupId>org.apache.linkis</groupId>\n     <artifactId>linkis-cs-client</artifactId>\n     <version>1.1.3</version>\n</dependency>\n\n# \u4ee3\u7801\u53c2\u8003\u5982\u4e0b\n\n        String createTimeStart = "2022-05-26 22:04:00";\n        String createTimeEnd = "2022-06-01 24:00:00";\n\n        ContextClient contextClient = ContextClientFactory.getOrCreateContextClient();\n        \n        # \u63a5\u53e31 searchHAIDByTime\n        List<String> idList =\n                contextClient.searchHAIDByTime(\n                        createTimeStart, createTimeEnd, null, null, null, null, 0, 0);\n\n        for (String id : idList) {\n            System.out.println(id);\n        }\n\n        System.out.println("Got " + idList.size() + " ids.");\n\n        if (idList.size() > 0) {\n            String id1 = idList.get(0);\n            System.out.println("will clear context of id : " + id1);\n        }\n\n        # \u63a5\u53e32 batchClearContextByHAID\n        List<String> tmpList = new ArrayList<>();\n        tmpList.add(id1);\n        int num = contextClient.batchClearContextByHAID(tmpList);\n        System.out.println("Succeed to clear  " + num + " ids.");\n        \n        # \u63a5\u53e33  batchClearContextByTime\n        int num1 =\n                contextClient.batchClearContextByTime(\n                        createTimeStart, createTimeEnd, null, null, null, null);\n        System.out.println("Succeed to clear  " + num1 + " ids by time.");\n\n')),(0,l.kt)("h2",{id:"6-\u975e\u529f\u80fd\u6027\u8bbe\u8ba1"},"6. \u975e\u529f\u80fd\u6027\u8bbe\u8ba1"),(0,l.kt)("h3",{id:"61-\u5b89\u5168"},"6.1 \u5b89\u5168"),(0,l.kt)("p",null,"resultful\u63a5\u53e3\u9700\u8981\u767b\u5f55\u8ba4\u8bc1\uff0c\u4e14\u9700\u8981\u7ba1\u7406\u5458\u624d\u80fd\u64cd\u4f5c\uff0c\u7ba1\u7406\u5458\u7528\u6237\u914d\u7f6e\u5728properties\u6587\u4ef6\u4e2d"),(0,l.kt)("h3",{id:"62-\u6027\u80fd"},"6.2 \u6027\u80fd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2ID\u63a5\u53e3searchContextIDByTime\u6709\u5206\u9875\uff0c\u65e0\u6027\u80fd\u5f71\u54cd"),(0,l.kt)("li",{parentName:"ul"},"\u6e05\u7406\u6307\u5b9aID\u63a5\u53e3clearAllContextByID\u9650\u5236\u64cd\u4f5c\u6570\u636e\u91cf\uff0c\u65e0\u6027\u80fd\u5f71\u54cd"),(0,l.kt)("li",{parentName:"ul"},"\u6839\u636e\u65f6\u95f4\u6e05\u7406\u63a5\u53e3clearAllContextByTime\uff0c\u5982\u679c\u67e5\u8be2\u65f6\u95f4\u8303\u56f4\u8fc7\u5927\uff0c\u53ef\u80fd\u4f1a\u6709\u67e5\u8be2\u8d85\u65f6\uff0c\u4f46\u4e0d\u4f1a\u4efb\u52a1\u5931\u8d25\u3002\u5e76\u4e14\u6e05\u7406\u64cd\u4f5c\u662f\u5355\u4e2a\u64cd\u4f5c\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6\u67e5\u8be2")),(0,l.kt)("h3",{id:"63-\u5bb9\u91cf"},"6.3 \u5bb9\u91cf"),(0,l.kt)("p",null,"\u672c\u9700\u6c42\u63d0\u4f9b\u4e86\u65f6\u95f4\u8303\u56f4\u67e5\u8be2\u548c\u6279\u91cf\u6e05\u7406\u63a5\u53e3\uff0c\u9700\u8981\u4e0a\u5c42\u4f7f\u7528ContextService\u7684\u5e94\u7528\u4e3b\u52a8\u6e05\u7406\u6570\u636e\u3002"),(0,l.kt)("h3",{id:"64-\u9ad8\u53ef\u7528"},"6.4 \u9ad8\u53ef\u7528"),(0,l.kt)("p",null,"\u63a5\u53e3\u590d\u7528ContextService\u5fae\u670d\u52a1\u672c\u8eab\u7684\u9ad8\u53ef\u7528\u80fd\u529b\u3002"))}k.isMDXComponent=!0},95434:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/linkis-contextservice-clean-01-6f4aa01a1d246c06114ec7a26452399f.png"},69632:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/linkis-contextservice-clean-02-5cf135c352337570bf058ce5a60104c0.png"}}]);