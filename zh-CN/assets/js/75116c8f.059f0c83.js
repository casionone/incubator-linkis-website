"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[27154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),u=m(n),s=r,g=u["".concat(o,".").concat(s)]||u[s]||c[s]||l;return n?a.createElement(g,i(i({ref:t},k),{},{components:n})):a.createElement(g,i({ref:t},k))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},39493:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"ResourceManager \u67b6\u6784",sidebar_position:3},i=void 0,p={unversionedId:"architecture/computation-governance-services/linkis-manager/resource-manager",id:"version-1.1.3/architecture/computation-governance-services/linkis-manager/resource-manager",isDocsHomePage:!1,title:"ResourceManager \u67b6\u6784",description:"ResourceManager\uff08\u7b80\u79f0RM\uff09\uff0c\u662fLinkis\u7684\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406\u6a21\u5757\uff0c\u6240\u6709\u7684EngineConn\uff08\u7b80\u79f0EC\uff09\u3001EngineConnManager\uff08\u7b80\u79f0ECM\uff09\uff0c\u751a\u81f3\u5305\u62ecYarn\u5728\u5185\u7684\u5916\u90e8\u8d44\u6e90\uff0c\u90fd\u7531RM\u8d1f\u8d23\u7edf\u7b79\u7ba1\u7406\u3002RM\u80fd\u591f\u57fa\u4e8e\u7528\u6237\u3001ECM\u6216\u5176\u5b83\u901a\u8fc7\u590d\u6742\u6807\u7b7e\u5b9a\u4e49\u7684\u7c92\u5ea6\u5bf9\u8d44\u6e90\u8fdb\u884c\u7ba1\u63a7\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/architecture/computation-governance-services/linkis-manager/resource-manager.md",sourceDirName:"architecture/computation-governance-services/linkis-manager",slug:"/architecture/computation-governance-services/linkis-manager/resource-manager",permalink:"/zh-CN/docs/1.1.3/architecture/computation-governance-services/linkis-manager/resource-manager",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/architecture/computation-governance-services/linkis-manager/resource-manager.md",tags:[],version:"1.1.3",sidebarPosition:3,frontMatter:{title:"ResourceManager \u67b6\u6784",sidebar_position:3},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"LabelManager \u67b6\u6784",permalink:"/zh-CN/docs/1.1.3/architecture/computation-governance-services/linkis-manager/label-manager"},next:{title:"EngineConn\u67b6\u6784",permalink:"/zh-CN/docs/1.1.3/architecture/computation-governance-services/engine/engine-conn"}},o=[{value:"RM\u5728Linkis\u4e2d\u7684\u4f5c\u7528",id:"rm\u5728linkis\u4e2d\u7684\u4f5c\u7528",children:[]},{value:"\u8d44\u6e90\u7684\u7c7b\u578b\u4e0e\u683c\u5f0f",id:"\u8d44\u6e90\u7684\u7c7b\u578b\u4e0e\u683c\u5f0f",children:[]},{value:"\u53ef\u7528\u8d44\u6e90\u7ba1\u7406",id:"\u53ef\u7528\u8d44\u6e90\u7ba1\u7406",children:[]},{value:"\u8d44\u6e90\u4f7f\u7528\u7ba1\u7406",id:"\u8d44\u6e90\u4f7f\u7528\u7ba1\u7406",children:[]},{value:"\u5916\u90e8\u8d44\u6e90\u7ba1\u7406",id:"\u5916\u90e8\u8d44\u6e90\u7ba1\u7406",children:[]}],m={toc:o};function k(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ResourceManager\uff08\u7b80\u79f0RM\uff09\uff0c\u662fLinkis\u7684\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406\u6a21\u5757\uff0c\u6240\u6709\u7684EngineConn\uff08\u7b80\u79f0EC\uff09\u3001EngineConnManager\uff08\u7b80\u79f0ECM\uff09\uff0c\u751a\u81f3\u5305\u62ecYarn\u5728\u5185\u7684\u5916\u90e8\u8d44\u6e90\uff0c\u90fd\u7531RM\u8d1f\u8d23\u7edf\u7b79\u7ba1\u7406\u3002RM\u80fd\u591f\u57fa\u4e8e\u7528\u6237\u3001ECM\u6216\u5176\u5b83\u901a\u8fc7\u590d\u6742\u6807\u7b7e\u5b9a\u4e49\u7684\u7c92\u5ea6\u5bf9\u8d44\u6e90\u8fdb\u884c\u7ba1\u63a7\u3002"),(0,r.kt)("h3",{id:"rm\u5728linkis\u4e2d\u7684\u4f5c\u7528"},"RM\u5728Linkis\u4e2d\u7684\u4f5c\u7528"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"01",src:n(87907).Z}),"\n",(0,r.kt)("img",{alt:"02",src:n(27576).Z})),(0,r.kt)("p",null,"RM\u4f5c\u4e3aLinkis Manager\u7684\u4e00\u90e8\u5206\uff0c\u4e3b\u8981\u4f5c\u7528\u4e3a\uff1a\u7ef4\u62a4ECM\u4e0a\u62a5\u7684\u53ef\u7528\u8d44\u6e90\u4fe1\u606f\uff0c\u5904\u7406ECM\u63d0\u51fa\u7684\u8d44\u6e90\u7533\u8bf7\uff0c\u8bb0\u5f55\u6210\u529f\u7533\u8bf7\u540e\uff0cEC\u5728\u751f\u547d\u5468\u671f\u5185\u5b9e\u65f6\u4e0a\u62a5\u7684\u5b9e\u9645\u8d44\u6e90\u4f7f\u7528\u4fe1\u606f\uff0c\u5e76\u63d0\u4f9b\u67e5\u8be2\u5f53\u524d\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u7684\u76f8\u5173\u63a5\u53e3\u3002"),(0,r.kt)("p",null,"Linkis\u4e2d\uff0c\u4e0eRM\u4ea7\u751f\u4ea4\u4e92\u7684\u5176\u5b83\u670d\u52a1\u4e3b\u8981\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u7ba1\u7406\u5668\uff0c\u7b80\u79f0ECM"),"\uff1a\u5904\u7406\u542f\u52a8\u5f15\u64ce\u8fde\u63a5\u5668\u8bf7\u6c42\u7684\u5fae\u670d\u52a1\u3002ECM\u4f5c\u4e3a\u8d44\u6e90\u7684\u63d0\u4f9b\u8005\uff0c\u8d1f\u8d23\u5411RM\u6ce8\u518c\u8d44\u6e90(register)\u548c\u4e0b\u7ebf\u8d44\u6e90(unregister)\u3002\u540c\u65f6\uff0cECM\u4f5c\u4e3a\u5f15\u64ce\u7684\u7ba1\u7406\u8005\uff0c\u8d1f\u8d23\u4ee3\u66ff\u51c6\u5907\u542f\u52a8\u7684\u65b0\u5f15\u64ce\u8fde\u63a5\u5668\u5411RM\u7533\u8bf7\u8d44\u6e90\u3002\u6bcf\u4e00\u4e2aECM\u5b9e\u4f8b\uff0c\u5747\u5728RM\u4e2d\u6709\u4e00\u6761\u5bf9\u5e94\u7684\u8d44\u6e90\u8bb0\u5f55\uff0c\u5305\u542b\u5b83\u63d0\u4f9b\u7684\u603b\u8d44\u6e90\u3001\u4fdd\u62a4\u8d44\u6e90\u7b49\u4fe1\u606f\uff0c\u5e76\u52a8\u6001\u66f4\u65b0\u5df2\u4f7f\u7528\u8d44\u6e90\u3002\n",(0,r.kt)("img",{alt:"03",src:n(99382).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u8fde\u63a5\u5668\uff0c\u7b80\u79f0EC"),"\uff0c\u662f\u7528\u6237\u4f5c\u4e1a\u7684\u5b9e\u9645\u6267\u884c\u5355\u5143\u3002\u540c\u65f6\uff0cEC\u4f5c\u4e3a\u8d44\u6e90\u7684\u5b9e\u9645\u4f7f\u7528\u8005\uff0c\u8d1f\u8d23\u5411RM\u4e0a\u62a5\u5b9e\u9645\u4f7f\u7528\u8d44\u6e90\u3002\u6bcf\u4e00\u4e2aEC\uff0c\u5747\u5728RM\u4e2d\u6709\u4e00\u6761\u5bf9\u5e94\u7684\u8d44\u6e90\u8bb0\u5f55\uff1a\u5728\u542f\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u4f53\u73b0\u4e3a\u9501\u5b9a\u8d44\u6e90\uff1b\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u4f53\u73b0\u4e3a\u5df2\u4f7f\u7528\u8d44\u6e90\uff1b\u5728\u88ab\u7ed3\u675f\u4e4b\u540e\uff0c\u8be5\u8d44\u6e90\u8bb0\u5f55\u968f\u4e4b\u88ab\u5220\u9664\u3002\n",(0,r.kt)("img",{alt:"04",src:n(56657).Z})))),(0,r.kt)("h3",{id:"\u8d44\u6e90\u7684\u7c7b\u578b\u4e0e\u683c\u5f0f"},"\u8d44\u6e90\u7684\u7c7b\u578b\u4e0e\u683c\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"05",src:n(66094).Z})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u6240\u6709\u7684\u8d44\u6e90\u7c7b\u5747\u5b9e\u73b0\u4e00\u4e2a\u9876\u5c42\u7684Resource\u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u5b9a\u4e49\u4e86\u6240\u6709\u8d44\u6e90\u7c7b\u5747\u9700\u8981\u652f\u6301\u7684\u8ba1\u7b97\u548c\u6bd4\u8f83\u7684\u65b9\u6cd5\uff0c\u5e76\u8fdb\u884c\u76f8\u5e94\u7684\u6570\u5b66\u8fd0\u7b97\u7b26\u7684\u91cd\u8f7d\uff0c\u4f7f\u5f97\u8d44\u6e90\u4e4b\u95f4\u80fd\u591f\u50cf\u6570\u5b57\u4e00\u6837\u76f4\u63a5\u88ab\u8ba1\u7b97\u548c\u6bd4\u8f83\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd0\u7b97\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5bf9\u5e94\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd0\u7b97\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5bf9\u5e94\u65b9\u6cd5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"add"),(0,r.kt)("td",{parentName:"tr",align:null},">"),(0,r.kt)("td",{parentName:"tr",align:null},"moreThan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"minus"),(0,r.kt)("td",{parentName:"tr",align:null},"\\<"),(0,r.kt)("td",{parentName:"tr",align:null},"lessThan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"multiply"),(0,r.kt)("td",{parentName:"tr",align:null},"="),(0,r.kt)("td",{parentName:"tr",align:null},"equals")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"divide"),(0,r.kt)("td",{parentName:"tr",align:null},">","="),(0,r.kt)("td",{parentName:"tr",align:null},"notLessThan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\<="),(0,r.kt)("td",{parentName:"tr",align:null},"notMoreThan"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"\u5f53\u524d\u652f\u6301\u7684\u8d44\u6e90\u7c7b\u578b\u5982\u4e0b\u8868\u6240\u793a\uff0c\u6240\u6709\u7684\u8d44\u6e90\u90fd\u6709\u5bf9\u5e94\u7684json\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316\u65b9\u6cd5\uff0c\u80fd\u591f\u901a\u8fc7json\u683c\u5f0f\u8fdb\u884c\u5b58\u50a8\u548c\u5728\u7f51\u7edc\u95f4\u4f20\u9012\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8d44\u6e90\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MemoryResource"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u8d44\u6e90")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPUResource"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU\u8d44\u6e90")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadResource"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u65f6\u5177\u5907\u5185\u5b58\u4e0eCPU\u7684\u8d44\u6e90")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"YarnResource"),(0,r.kt)("td",{parentName:"tr",align:null},"Yarn\u961f\u5217\u8d44\u6e90\uff08\u961f\u5217\uff0c\u961f\u5217\u5185\u5b58\uff0c\u961f\u5217CPU\uff0c\u961f\u5217\u5b9e\u4f8b\u6570\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadInstanceResource"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5668\u8d44\u6e90\uff08\u5185\u5b58\uff0cCPU\uff0c\u5b9e\u4f8b\u6570\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DriverAndYarnResource"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9a71\u52a8\u5668\u4e0e\u6267\u884c\u5668\u8d44\u6e90\uff08\u540c\u65f6\u5177\u5907\u670d\u52a1\u5668\u8d44\u6e90\uff0cYarn\u961f\u5217\u8d44\u6e90\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SpecialResource"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5176\u5b83\u81ea\u5b9a\u4e49\u8d44\u6e90")))),(0,r.kt)("h3",{id:"\u53ef\u7528\u8d44\u6e90\u7ba1\u7406"},"\u53ef\u7528\u8d44\u6e90\u7ba1\u7406"),(0,r.kt)("p",null,"RM\u4e2d\u7684\u53ef\u7528\u8d44\u6e90\uff0c\u4e3b\u8981\u6709\u4e24\u4e2a\u6765\u6e90\uff1aECM\u4e0a\u62a5\u7684\u53ef\u7528\u8d44\u6e90\uff0c\u4ee5\u53caConfiguration\u6a21\u5757\u4e2d\u6839\u636e\u6807\u7b7e\u914d\u7f6e\u7684\u8d44\u6e90\u9650\u5236\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"ECM\u8d44\u6e90\u4e0a\u62a5"),"\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"ECM\u542f\u52a8\u65f6\uff0c\u4f1a\u5e7f\u64adECM\u6ce8\u518c\u7684\u6d88\u606f\uff0cRM\u63a5\u6536\u5230\u6d88\u606f\u540e\uff0c\u6839\u636e\u6d88\u606f\u4e2d\u5305\u542b\u7684\u5185\u5bb9\u8fdb\u884c\u8d44\u6e90\u6ce8\u518c\uff0c\u8d44\u6e90\u76f8\u5173\u7684\u5185\u5bb9\u5305\u62ec\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u603b\u8d44\u6e90\uff1a\u8be5ECM\u80fd\u591f\u63d0\u4f9b\u7684\u8d44\u6e90\u603b\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u62a4\u8d44\u6e90\uff1a\u5f53\u5269\u4f59\u8d44\u6e90\u5c0f\u4e8e\u8be5\u8d44\u6e90\u65f6\uff0c\u4e0d\u518d\u5141\u8bb8\u7ee7\u7eed\u5206\u914d\u8d44\u6e90\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u7c7b\u578b\uff1a\u5982LoadResource\uff0cDriverAndYarnResource\u7b49\u7c7b\u578b\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u4fe1\u606f\uff1a\u673a\u5668\u540d\u52a0\u7aef\u53e3\u540d\u3002")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"RM\u5728\u6536\u5230\u8d44\u6e90\u6ce8\u518c\u8bf7\u6c42\u540e\uff0c\u5728\u8d44\u6e90\u8868\u4e2d\u65b0\u589e\u4e00\u6761\u8bb0\u5f55\uff0c\u5185\u5bb9\u4e0e\u63a5\u53e3\u7684\u53c2\u6570\u4fe1\u606f\u4e00\u81f4\uff0c\u5e76\u901a\u8fc7\u5b9e\u4f8b\u4fe1\u606f\u627e\u5230\u4ee3\u8868\u8be5ECM\u7684\u6807\u7b7e\uff0c\u5728\u8d44\u6e90\u3001\u6807\u7b7e\u5173\u8054\u8868\u4e2d\u65b0\u589e\u4e00\u6761\u5173\u8054\u8bb0\u5f55\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"ECM\u5728\u5173\u95ed\u65f6\uff0c\u4f1a\u5e7f\u64adECM\u5173\u95ed\u7684\u6d88\u606f\uff0cRM\u63a5\u6536\u5230\u6d88\u606f\u540e\uff0c\u6839\u636e\u6d88\u606f\u4e2d\u7684ECM\u5b9e\u4f8b\u4fe1\u606f\u6765\u8fdb\u884c\u8d44\u6e90\u7684\u4e0b\u7ebf\uff0c\u5373\u5220\u9664\u8be5ECM\u5b9e\u4f8b\u6807\u7b7e\u5bf9\u5e94\u7684\u8d44\u6e90\u548c\u5173\u8054\u8bb0\u5f55\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configuration\u6a21\u5757\u6807\u7b7e\u8d44\u6e90\u914d\u7f6e"),"\uff1a"),(0,r.kt)("p",null,"\u7528\u6237\u80fd\u591f\u5728Configuration\u6a21\u5757\u4e2d\uff0c\u6839\u636e\u4e0d\u540c\u7684\u6807\u7b7e\u7ec4\u5408\u8fdb\u884c\u8d44\u6e90\u6570\u91cf\u9650\u5236\u7684\u914d\u7f6e\uff0c\u5982\u9650\u5236User/Creator/EngineType\u7ec4\u5408\u7684\u6700\u5927\u53ef\u7528\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"RM\u901a\u8fc7RPC\u6d88\u606f\uff0c\u4ee5\u7ec4\u5408\u6807\u7b7e\u4e3a\u67e5\u8be2\u6761\u4ef6\uff0c\u5411Configuration\u6a21\u5757\u67e5\u8be2\u8d44\u6e90\u4fe1\u606f\uff0c\u5e76\u8f6c\u6362\u6210Resource\u5bf9\u8c61\u53c2\u4e0e\u540e\u7eed\u7684\u6bd4\u8f83\u548c\u8bb0\u5f55\u3002"),(0,r.kt)("h3",{id:"\u8d44\u6e90\u4f7f\u7528\u7ba1\u7406"},"\u8d44\u6e90\u4f7f\u7528\u7ba1\u7406"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u6536\u7528\u6237\u7684\u8d44\u6e90\u7533\u8bf7")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"LinkisManager\u5728\u6536\u5230\u542f\u52a8EngineConn\u7684\u8bf7\u6c42\u65f6\uff0c\u4f1a\u8c03\u7528RM\u7684\u8d44\u6e90\u7533\u8bf7\u63a5\u53e3\uff0c\u8fdb\u884c\u8d44\u6e90\u7533\u8bf7\u3002\u8d44\u6e90\u7533\u8bf7\u63a5\u53e3\u63a5\u53d7\u4e00\u4e2a\u53ef\u9009\u7684\u65f6\u95f4\u53c2\u6570\uff0c\u5f53\u7533\u8bf7\u8d44\u6e90\u7684\u7b49\u5f85\u65f6\u95f4\u8d85\u51fa\u8be5\u65f6\u95f4\u53c2\u6570\u7684\u9650\u5236\u65f6\uff0c\u8be5\u8d44\u6e90\u7533\u8bf7\u5c06\u81ea\u52a8\u4f5c\u4e3a\u5931\u8d25\u5904\u7406\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5224\u65ad\u662f\u5426\u6709\u8db3\u591f\u7684\u8d44\u6e90")),(0,r.kt)("p",null,"\u5373\u4e3a\u5224\u65ad\u5269\u4f59\u53ef\u7528\u8d44\u6e90\u662f\u5426\u5927\u4e8e\u7533\u8bf7\u8d44\u6e90\uff0c\u5982\u679c\u5927\u4e8e\u6216\u7b49\u4e8e\uff0c\u5219\u8d44\u6e90\u5145\u8db3\uff1b\u5426\u5219\u8d44\u6e90\u4e0d\u5145\u8db3\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"RM\u9884\u5904\u7406\u8d44\u6e90\u7533\u8bf7\u4e2d\u9644\u5e26\u7684\u6807\u7b7e\u4fe1\u606f\uff0c\u6839\u636e\u89c4\u5219\u5c06\u539f\u59cb\u7684\u6807\u7b7e\u8fdb\u884c\u8fc7\u6ee4\u3001\u7ec4\u5408\u548c\u8f6c\u6362\u7b49\u64cd\u4f5c\uff08\u5982\u5c06User/Creator\u6807\u7b7e\u548cEngineType\u6807\u7b7e\u8fdb\u884c\u7ec4\u5408\uff09\uff0c\u8fd9\u4f7f\u5f97\u540e\u7eed\u7684\u8d44\u6e90\u5224\u65ad\u7684\u7c92\u5ea6\u66f4\u52a0\u7075\u6d3b\u591a\u53d8\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6bcf\u4e2a\u8f6c\u6362\u540e\u7684\u6807\u7b7e\u4e0a\u9010\u4e00\u52a0\u9501\uff0c\u4f7f\u5f97\u5b83\u4eec\u6240\u5bf9\u5e94\u7684\u8d44\u6e90\u8bb0\u5f55\u5728\u8d44\u6e90\u7533\u8bf7\u7684\u5904\u7406\u671f\u95f4\u4fdd\u6301\u4e0d\u53d8\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6839\u636e\u6bcf\u4e2a\u6807\u7b7e\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7Persistence\u6a21\u5757\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u5bf9\u5e94\u7684\u8d44\u6e90\u8bb0\u5f55\uff0c\u5982\u679c\u8be5\u8bb0\u5f55\u5305\u542b\u5269\u4f59\u53ef\u7528\u8d44\u6e90\uff0c\u5219\u76f4\u63a5\u7528\u6765\u6bd4\u8f83\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u76f4\u63a5\u7684\u5269\u4f59\u53ef\u7528\u8d44\u6e90\u8bb0\u5f55\uff0c\u5219\u901a\u8fc7","[\u5269\u4f59\u53ef\u7528\u8d44\u6e90=\u6700\u5927\u53ef\u7528\u8d44\u6e90-\u5df2\u7528\u8d44\u6e90-\u5df2\u9501\u5b9a\u8d44\u6e90-\u4fdd\u62a4\u8d44\u6e90]","\u516c\u5f0f\u8fdb\u884c\u8ba1\u7b97\u5f97\u51fa\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u6700\u5927\u53ef\u7528\u8d44\u6e90\u8bb0\u5f55\uff0c\u5219\u8bf7\u6c42Configuration\u6a21\u5757\uff0c\u770b\u662f\u5426\u6709\u914d\u7f6e\u7684\u8d44\u6e90\u4fe1\u606f\uff0c\u5982\u679c\u6709\u5219\u4f7f\u7528\u5230\u516c\u5f0f\u4e2d\u8fdb\u884c\u8ba1\u7b97\uff0c\u5982\u679c\u6ca1\u6709\u5219\u8df3\u8fc7\u9488\u5bf9\u8fd9\u4e2a\u6807\u7b7e\u7684\u8d44\u6e90\u5224\u65ad\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u4efb\u4f55\u8d44\u6e90\u8bb0\u5f55\uff0c\u5219\u8df3\u8fc7\u9488\u5bf9\u8fd9\u4e2a\u6807\u7b7e\u7684\u8d44\u6e90\u5224\u65ad\u3002")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53ea\u8981\u6709\u4e00\u4e2a\u6807\u7b7e\u88ab\u5224\u65ad\u4e3a\u8d44\u6e90\u4e0d\u5145\u8db3\uff0c\u5219\u8d44\u6e90\u7533\u8bf7\u5931\u8d25\uff0c\u5bf9\u6bcf\u4e2a\u6807\u7b7e\u9010\u4e00\u89e3\u9501\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53ea\u6709\u6240\u6709\u6807\u7b7e\u90fd\u5224\u65ad\u4e3a\u8d44\u6e90\u5145\u8db3\u7684\u60c5\u51b5\u4e0b\uff0c\u624d\u6210\u529f\u901a\u8fc7\u8d44\u6e90\u7533\u8bf7\uff0c\u8fdb\u5165\u4e0b\u4e00\u6b65\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9501\u5b9a\u7533\u8bf7\u901a\u8fc7\u7684\u8d44\u6e90")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6839\u636e\u7533\u8bf7\u901a\u8fc7\u7684\u8d44\u6e90\u6570\u91cf\uff0c\u5728\u8d44\u6e90\u8868\u4e2d\u751f\u6210\u4e00\u6761\u65b0\u7684\u8bb0\u5f55\uff0c\u5e76\u4e0e\u6bcf\u4e2a\u6807\u7b7e\u8fdb\u884c\u5173\u8054\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5bf9\u5e94\u7684\u6807\u7b7e\u6709\u5269\u4f59\u53ef\u7528\u8d44\u6e90\u8bb0\u5f55\uff0c\u5219\u6263\u51cf\u5bf9\u5e94\u7684\u6570\u91cf\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u751f\u6210\u4e00\u4e2a\u5b9a\u65f6\u4efb\u52a1\uff0c\u5728\u4e00\u5b9a\u65f6\u95f4\u540e\u68c0\u67e5\u8fd9\u6279\u9501\u5b9a\u7684\u8d44\u6e90\u662f\u5426\u88ab\u5b9e\u9645\u4f7f\u7528\uff0c\u5982\u679c\u8d85\u65f6\u672a\u4f7f\u7528\uff0c\u5219\u5f3a\u5236\u56de\u6536\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u6bcf\u4e2a\u6807\u7b7e\u8fdb\u884c\u89e3\u9501\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0a\u62a5\u5b9e\u9645\u4f7f\u7528\u8d44\u6e90")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"EngineConn\u542f\u52a8\u540e\uff0c\u5e7f\u64ad\u8d44\u6e90\u4f7f\u7528\u6d88\u606f\u3002RM\u6536\u5230\u6d88\u606f\u540e\uff0c\u68c0\u67e5\u8be5EngineConn\u5bf9\u5e94\u7684\u6807\u7b7e\u662f\u5426\u6709\u9501\u5b9a\u8d44\u6e90\u8bb0\u5f55\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u5219\u62a5\u9519\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u6709\u9501\u5b9a\u8d44\u6e90\uff0c\u5219\u5bf9\u8be5EngineConn\u6709\u5173\u8054\u7684\u6240\u6709\u6807\u7b7e\u8fdb\u884c\u52a0\u9501\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u6bcf\u4e2a\u6807\u7b7e\uff0c\u5c06\u5bf9\u5e94\u7684\u9501\u5b9a\u8d44\u6e90\u8bb0\u5f55\u8f6c\u6362\u4e3a\u5df2\u4f7f\u7528\u8d44\u6e90\u8bb0\u5f55\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u89e3\u9501\u6240\u6709\u6807\u7b7e\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u91ca\u653e\u5b9e\u9645\u4f7f\u7528\u8d44\u6e90")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"EngineConn\u7ed3\u675f\u751f\u547d\u5468\u671f\u540e\uff0c\u5e7f\u64ad\u8d44\u6e90\u56de\u6536\u6d88\u606f\u3002RM\u6536\u5230\u6d88\u606f\u540e\uff0c\u68c0\u67e5\u8be5EngineConn\u5bf9\u5e94\u7684\u6807\u7b7e\u662f\u5426\u6709\u5df2\u4f7f\u7528\u8d44\u6e90\u8bb0\u5f55\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u6709\uff0c\u5219\u5bf9\u8be5EngineConn\u6709\u5173\u8054\u7684\u6240\u6709\u6807\u7b7e\u8fdb\u884c\u52a0\u9501\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u6bcf\u4e2a\u6807\u7b7e\uff0c\u5728\u5df2\u4f7f\u7528\u8d44\u6e90\u8bb0\u5f55\u4e2d\u51cf\u53bb\u5bf9\u5e94\u7684\u6570\u91cf\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5bf9\u5e94\u7684\u6807\u7b7e\u6709\u5269\u4f59\u53ef\u7528\u8d44\u6e90\u8bb0\u5f55\uff0c\u5219\u589e\u52a0\u5bf9\u5e94\u7684\u6570\u91cf\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u6bcf\u4e2a\u6807\u7b7e\u89e3\u9501"))),(0,r.kt)("h3",{id:"\u5916\u90e8\u8d44\u6e90\u7ba1\u7406"},"\u5916\u90e8\u8d44\u6e90\u7ba1\u7406"),(0,r.kt)("p",null,"\u5728RM\u4e2d\uff0c\u4e3a\u4e86\u66f4\u52a0\u7075\u6d3b\u5e76\u6709\u62d3\u5c55\u6027\u5bf9\u8d44\u6e90\u8fdb\u884c\u5206\u7c7b\uff0c\u652f\u6301\u591a\u96c6\u7fa4\u7684\u8d44\u6e90\u7ba1\u63a7\u7684\u540c\u65f6\uff0c\u4f7f\u5f97\u63a5\u5165\u65b0\u7684\u5916\u90e8\u8d44\u6e90\u66f4\u52a0\u4fbf\u5229\uff0c\u5728\u8bbe\u8ba1\u4e0a\u8fdb\u884c\u4e86\u4ee5\u4e0b\u51e0\u70b9\u7684\u8003\u8651\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7\u6807\u7b7e\u6765\u5bf9\u8d44\u6e90\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u3002\u8d44\u6e90\u6ce8\u518c\u540e\uff0c\u4e0e\u6807\u7b7e\u8fdb\u884c\u5173\u8054\uff0c\u4f7f\u5f97\u8d44\u6e90\u7684\u5c5e\u6027\u80fd\u591f\u65e0\u9650\u62d3\u5c55\u3002\u540c\u65f6\uff0c\u8d44\u6e90\u7533\u8bf7\u4e5f\u90fd\u5e26\u4e0a\u6807\u7b7e\uff0c\u5b9e\u73b0\u7075\u6d3b\u7684\u5339\u914d\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u96c6\u7fa4\u62bd\u8c61\u6210\u4e00\u4e2a\u6216\u591a\u4e2a\u6807\u7b7e\uff0c\u5e76\u5728\u5916\u90e8\u8d44\u6e90\u7ba1\u7406\u6a21\u5757\u4e2d\u7ef4\u62a4\u6bcf\u4e2a\u96c6\u7fa4\u6807\u7b7e\u5bf9\u5e94\u7684\u73af\u5883\u4fe1\u606f\uff0c\u5b9e\u73b0\u52a8\u6001\u7684\u5bf9\u63a5\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u62bd\u8c61\u51fa\u901a\u7528\u7684\u5916\u90e8\u8d44\u6e90\u7ba1\u7406\u6a21\u5757\uff0c\u5982\u9700\u63a5\u5165\u65b0\u7684\u5916\u90e8\u8d44\u6e90\u7c7b\u578b\uff0c\u53ea\u8981\u5b9e\u73b0\u56fa\u5b9a\u7684\u63a5\u53e3\uff0c\u5373\u53ef\u5c06\u4e0d\u540c\u7c7b\u578b\u7684\u8d44\u6e90\u4fe1\u606f\u8f6c\u6362\u4e3aRM\u4e2d\u7684Resource\u5b9e\u4f53\uff0c\u5b9e\u73b0\u7edf\u4e00\u7ba1\u7406\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"06",src:n(91462).Z})),(0,r.kt)("p",null,"RM\u7684\u5176\u5b83\u6a21\u5757\uff0c\u901a\u8fc7ExternalResourceService\u63d0\u4f9b\u7684\u63a5\u53e3\u6765\u8fdb\u884c\u5916\u90e8\u8d44\u6e90\u4fe1\u606f\u7684\u83b7\u53d6\u3002"),(0,r.kt)("p",null,"\u800cExternalResourceService\u901a\u8fc7\u8d44\u6e90\u7c7b\u578b\u548c\u6807\u7b7e\u6765\u83b7\u53d6\u5916\u90e8\u8d44\u6e90\u7684\u4fe1\u606f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6240\u6709\u5916\u90e8\u8d44\u6e90\u7684\u7c7b\u578b\u3001\u6807\u7b7e\u3001\u914d\u7f6e\u7b49\u5c5e\u6027\uff08\u5982\u96c6\u7fa4\u540d\u79f0\u3001Yarn\u7684web\nurl\u3001Hadoop\u7248\u672c\u7b49\u4fe1\u606f\uff09\uff0c\u90fd\u7ef4\u62a4\u5728linkis","_","external","_","resource","_","provider\u8868\u4e2d\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9488\u5bf9\u6bcf\u79cd\u8d44\u6e90\u7c7b\u578b\uff0c\u5747\u6709\u4e00\u4e2aExternalResourceProviderParser\u63a5\u53e3\u7684\u5b9e\u73b0\uff0c\u5c06\u5916\u90e8\u8d44\u6e90\u7684\u5c5e\u6027\u8fdb\u884c\u89e3\u6790\uff0c\u5c06\u80fd\u591f\u5339\u914d\u5230Label\u7684\u4fe1\u606f\u8f6c\u6362\u6210\u5bf9\u5e94\u7684Label\uff0c\u5c06\u80fd\u591f\u4f5c\u4e3a\u53c2\u6570\u53bb\u8bf7\u6c42\u8d44\u6e90\u63a5\u53e3\u7684\u90fd\u8f6c\u6362\u6210params\u3002\u6700\u540e\u6784\u5efa\u6210\u4e00\u4e2a\u80fd\u591f\u4f5c\u4e3a\u5916\u90e8\u8d44\u6e90\u4fe1\u606f\u67e5\u8be2\u4f9d\u636e\u7684ExternalResourceProvider\u5b9e\u4f8b\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6839\u636eExternalResourceService\u65b9\u6cd5\u7684\u53c2\u6570\u4e2d\u7684\u8d44\u6e90\u7c7b\u578b\u548c\u6807\u7b7e\u4fe1\u606f\uff0c\u627e\u5230\u5339\u914d\u7684ExternalResourceProvider\uff0c\u6839\u636e\u5176\u4e2d\u7684\u4fe1\u606f\u751f\u6210ExternalResourceRequest\uff0c\u6b63\u5f0f\u8c03\u7528\u5916\u90e8\u8d44\u6e90\u63d0\u4f9b\u7684API\uff0c\u53d1\u8d77\u8d44\u6e90\u4fe1\u606f\u8bf7\u6c42\u3002"))))}k.isMDXComponent=!0},87907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rm-01-2fb943aa9216c45fdbbfdfae8e4d6ab2.png"},27576:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rm-02-4d64a8e6aa03fd99bb46fcc9dba1dd8b.png"},99382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rm-03-729d9f223ac0f5111b0dcb0e0d26792a.png"},56657:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rm-04-1d3bc2058d477c1c3498b8f6076c851b.png"},66094:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rm-05-fcca9073b4eba3afa8e7bf22c7b096b5.png"},91462:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rm-06-20c8ef614561c8c23052d6e59ec4360a.png"}}]);