"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[65437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),m=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=m(r),u=n,d=s["".concat(o,".").concat(u)]||s[u]||k[u]||i;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:n,l[1]=p;for(var m=2;m<i;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},81515:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const i={title:"RM \u8bbe\u8ba1",sidebar_position:2},l=void 0,p={unversionedId:"architecture/rm",id:"version-0.11.0/architecture/rm",isDocsHomePage:!1,title:"RM \u8bbe\u8ba1",description:"1 \u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/rm.md",sourceDirName:"architecture",slug:"/architecture/rm",permalink:"/zh-CN/docs/0.11.0/architecture/rm",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/rm.md",tags:[],version:"0.11.0",sidebarPosition:2,frontMatter:{title:"RM \u8bbe\u8ba1",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/0.11.0/architecture/overview"},next:{title:"WebSocket\u8bf7\u6c42\u8f6c\u53d1\u5b9e\u73b0",permalink:"/zh-CN/docs/0.11.0/architecture/websocket"}},o=[{value:"1 \u80cc\u666f",id:"1-\u80cc\u666f",children:[]},{value:"2 \u4ea7\u54c1\u8bbe\u8ba1",id:"2-\u4ea7\u54c1\u8bbe\u8ba1",children:[{value:"2.1 \u603b\u4f53\u67b6\u6784\u56fe",id:"21-\u603b\u4f53\u67b6\u6784\u56fe",children:[]},{value:"2.2 \u6570\u636e\u5e93\u8868\u7ed3\u6784\u8bbe\u8ba1",id:"22-\u6570\u636e\u5e93\u8868\u7ed3\u6784\u8bbe\u8ba1",children:[]},{value:"2.3 \u8d44\u6e90\u7684\u7c7b\u578b\u4e0e\u683c\u5f0f",id:"23-\u8d44\u6e90\u7684\u7c7b\u578b\u4e0e\u683c\u5f0f",children:[]}]},{value:"3 \u8bb0\u5f55EM\u4e0a\u62a5\u7684\u53ef\u7528\u8d44\u6e90",id:"3-\u8bb0\u5f55em\u4e0a\u62a5\u7684\u53ef\u7528\u8d44\u6e90",children:[]},{value:"4 \u8d44\u6e90\u7684\u5206\u914d\u4e0e\u56de\u6536",id:"4-\u8d44\u6e90\u7684\u5206\u914d\u4e0e\u56de\u6536",children:[]},{value:"5 EM\u9501\u4e0e\u7528\u6237\u9501\u7684\u5b9e\u73b0",id:"5-em\u9501\u4e0e\u7528\u6237\u9501\u7684\u5b9e\u73b0",children:[]},{value:"6 RM\u5ba2\u6237\u7aef",id:"6-rm\u5ba2\u6237\u7aef",children:[]},{value:"7 \u591a\u5b9e\u4f8b\u72b6\u6001\u540c\u6b65",id:"7-\u591a\u5b9e\u4f8b\u72b6\u6001\u540c\u6b65",children:[]}],m={toc:o};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-\u80cc\u666f"},"1 \u80cc\u666f"),(0,n.kt)("p",null,"  \u5728\u5fae\u670d\u52a1\u573a\u666f\u4e0b\uff0c\u5404\u79cd\u670d\u52a1\u6240\u9700\u8981\u6d88\u8017\u548c\u5360\u7528\u7684\u8d44\u6e90\u5177\u6709\u591a\u6837\u6027\uff0c\u6bd4\u4f20\u7edf\u5e94\u7528\u66f4\u96be\u7ba1\u7406\u3002Linkis RM\u63d0\u4f9b\u5bf9\u8d44\u6e90\u7684\u7edf\u4e00\u5206\u914d\u548c\u56de\u6536\u7684\u670d\u52a1\uff0c\u5728\u5927\u91cf\u670d\u52a1\u9ad8\u9891\u7387\u542f\u52a8\u548c\u5173\u95ed\u7684\u60c5\u51b5\u4e0b\uff0c\u4fdd\u8bc1\u670d\u52a1\u5bf9\u8d44\u6e90\u7684\u6d88\u8017\u4e0d\u8d85\u51fa\u9650\u5236\u3002"),(0,n.kt)("h2",{id:"2-\u4ea7\u54c1\u8bbe\u8ba1"},"2 \u4ea7\u54c1\u8bbe\u8ba1"),(0,n.kt)("h3",{id:"21-\u603b\u4f53\u67b6\u6784\u56fe"},"2.1 \u603b\u4f53\u67b6\u6784\u56fe"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"RM\u67b6\u6784\u56fe",src:r(16282).Z})),(0,n.kt)("p",null,"  RM\u7ef4\u62a4\u5f15\u64ce\u7ba1\u7406\u5668\u4e0a\u62a5\u7684\u53ef\u7528\u8d44\u6e90\u4fe1\u606f\uff0c\u5904\u7406\u5f15\u64ce\u63d0\u51fa\u7684\u8d44\u6e90\u7533\u8bf7\uff0c\u5e76\u8bb0\u5f55\u6210\u529f\u7533\u8bf7\u540e\u7684\u5b9e\u9645\u8d44\u6e90\u4f7f\u7528\u4fe1\u606f\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5f15\u64ce\u7ba1\u7406\u5668\uff0c\u7b80\u79f0EM\uff1a\u5904\u7406\u542f\u52a8\u5f15\u64ce\u8bf7\u6c42\u7684\u5fae\u670d\u52a1\u3002EM\u4f5c\u4e3a\u8d44\u6e90\u7684\u63d0\u4f9b\u8005\uff0c\u8d1f\u8d23\u5411RM\u6ce8\u518c\u8d44\u6e90(register)\u548c\u4e0b\u7ebf\u8d44\u6e90(unregister)\u3002\u540c\u65f6\uff0cEM\u4f5c\u4e3a\u5f15\u64ce\u7684\u7ba1\u7406\u8005\uff0c\u8d1f\u8d23\u4ee3\u66ff\u5f15\u64ce\u5411RM\u7533\u8bf7\u8d44\u6e90\u3002\u6bcf\u4e00\u4e2aEM\u5b9e\u4f8b\uff0c\u5747\u5728RM\u4e2d\u6709\u4e00\u6761\u5bf9\u5e94\u7684\u8d44\u6e90\u8bb0\u5f55\uff0c\u5305\u542b\u5b83\u63d0\u4f9b\u7684\u603b\u8d44\u6e90\u3001\u4fdd\u62a4\u8d44\u6e90\u7b49\u4fe1\u606f\uff0c\u5e76\u52a8\u6001\u66f4\u65b0\u5df2\u4f7f\u7528\u8d44\u6e90\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5f15\u64ce\uff0cEngine\uff0c\u53c8\u79f0\u5e94\u7528\uff1a\u6267\u884c\u7528\u6237\u4f5c\u4e1a\u7684\u5fae\u670d\u52a1\u3002\u540c\u65f6\uff0c\u5f15\u64ce\u4f5c\u4e3a\u8d44\u6e90\u7684\u5b9e\u9645\u4f7f\u7528\u8005\uff0c\u8d1f\u8d23\u5411RM\u4e0a\u62a5\u5b9e\u9645\u4f7f\u7528\u8d44\u6e90\u548c\u91ca\u653e\u8d44\u6e90\u3002\u6bcf\u4e00\u4e2aEngine\uff0c\u5747\u5728RM\u4e2d\u6709\u4e00\u6761\u5bf9\u5e94\u7684\u8d44\u6e90\u8bb0\u5f55\uff1a\u5728\u542f\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u4f53\u73b0\u4e3a\u9501\u5b9a\u8d44\u6e90\uff1b\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u4f53\u73b0\u4e3a\u5df2\u4f7f\u7528\u8d44\u6e90\uff1b\u5728\u88ab\u7ed3\u675f\u4e4b\u540e\uff0c\u8be5\u8d44\u6e90\u8bb0\u5f55\u968f\u4e4b\u88ab\u5220\u9664\u3002"))),(0,n.kt)("h3",{id:"22-\u6570\u636e\u5e93\u8868\u7ed3\u6784\u8bbe\u8ba1"},"2.2 \u6570\u636e\u5e93\u8868\u7ed3\u6784\u8bbe\u8ba1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\n\u7528\u6237\u8d44\u6e90\u8bb0\u5f55\u8868\uff1a\nlinkis_user_resource_meta_data: \n    id\n    user\n    ticket_id\n    creator\n    em_application_name\n    em_instance\n    engine_application_name\n    engine_instance\n    user_locked_resource: \u76f4\u63a5\u5b58\u50a8json\n    user_used_resource: json\n    resource_type\n    locked_time\n    used_time\n\n\u6a21\u5757\u8d44\u6e90\u8bb0\u5f55\u8868\uff1a\nlinkis_em_resource_meta_data: \n    id\n    em_application_name\n    em_instance\n    total_resource:json\n    protected_resource:json\n    resource_policy\n    used_resource:json\n    left_resource:json\n    locked_resource:json\n    register_time: long\n\n\u6a21\u5757policy\u8868\uff1a\nlinkis_em_meta_data: \n    id\n    em_name\n    resource_request_policy\n\n\u9501\uff1a\u8be5\u8868\u9700\u8981\u6dfb\u52a0unique constraint\uff1a\uff08scope\uff0cuser, module_application_name, module_instance\uff09\uff0c\u7528\u6765\u4fdd\u8bc1\u9501\u4e0d\u88ab\u5f3a\u5236\u591a\u6b21\u540c\u65f6\u83b7\u53d6\u3002\nlinkis_resource_lock: \n    id\n    user\n    em_application_name\n    em_instance\n\n")),(0,n.kt)("h3",{id:"23-\u8d44\u6e90\u7684\u7c7b\u578b\u4e0e\u683c\u5f0f"},"2.3 \u8d44\u6e90\u7684\u7c7b\u578b\u4e0e\u683c\u5f0f"),(0,n.kt)("p",null,"  \u5982\u4e0a\u56fe\u6240\u793a\uff0c\u6240\u6709\u7684\u8d44\u6e90\u7c7b\u5747\u5b9e\u73b0\u4e00\u4e2a\u9876\u5c42\u7684Resource\u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u5b9a\u4e49\u4e86\u6240\u6709\u8d44\u6e90\u7c7b\u5747\u9700\u8981\u652f\u6301\u7684\u8ba1\u7b97\u548c\u6bd4\u8f83\u7684\u65b9\u6cd5\uff0c\u5e76\u8fdb\u884c\u76f8\u5e94\u7684\u6570\u5b66\u8fd0\u7b97\u7b26\u7684\u91cd\u8f7d\uff0c\u4f7f\u5f97\u8d44\u6e90\u4e4b\u95f4\u80fd\u591f\u50cf\u6570\u5b57\u4e00\u6837\u76f4\u63a5\u88ab\u8ba1\u7b97\u548c\u6bd4\u8f83\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8fd0\u7b97\u7b26"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5bf9\u5e94\u65b9\u6cd5"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8fd0\u7b97\u7b26"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5bf9\u5e94\u65b9\u6cd5"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"+"),(0,n.kt)("td",{parentName:"tr",align:"left"},"add"),(0,n.kt)("td",{parentName:"tr",align:"left"},">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"moreThan")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"minus"),(0,n.kt)("td",{parentName:"tr",align:"left"},"<"),(0,n.kt)("td",{parentName:"tr",align:"left"},"lessThan")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"*"),(0,n.kt)("td",{parentName:"tr",align:"left"},"multiply"),(0,n.kt)("td",{parentName:"tr",align:"left"},"="),(0,n.kt)("td",{parentName:"tr",align:"left"},"equals")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"/"),(0,n.kt)("td",{parentName:"tr",align:"left"},"divide"),(0,n.kt)("td",{parentName:"tr",align:"left"},">="),(0,n.kt)("td",{parentName:"tr",align:"left"},"notLessThan")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"<="),(0,n.kt)("td",{parentName:"tr",align:"left"},"notMoreThan"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("p",null,"  \u5f53\u524d\u652f\u6301\u7684\u8d44\u6e90\u7c7b\u578b\u5982\u4e0b\u8868\u6240\u793a\uff0c\u6240\u6709\u7684\u8d44\u6e90\u90fd\u6709\u5bf9\u5e94\u7684json\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316\u65b9\u6cd5\uff0c\u80fd\u591f\u901a\u8fc7json\u683c\u5f0f\u8fdb\u884c\u5b58\u50a8\u548c\u5728\u7f51\u7edc\u95f4\u4f20\u9012\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8d44\u6e90\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MemoryResource"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MemoryResource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPUResource"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU\u8d44\u6e90")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LoadResource"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u540c\u65f6\u5177\u5907\u5185\u5b58\u4e0eCPU\u7684\u8d44\u6e90")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"YarnResource"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yarn\u961f\u5217\u8d44\u6e90\uff08\u961f\u5217\uff0c\u961f\u5217\u5185\u5b58\uff0c\u961f\u5217CPU\uff0c\u961f\u5217\u5b9e\u4f8b\u6570\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LoadInstanceResource"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u8d44\u6e90\uff08\u5185\u5b58\uff0cCPU\uff0c\u5b9e\u4f8b\u6570\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DriverAndYarnResource"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9a71\u52a8\u5668\u4e0e\u6267\u884c\u5668\u8d44\u6e90\uff08\u540c\u65f6\u5177\u5907\u670d\u52a1\u5668\u8d44\u6e90\uff0cYarn\u961f\u5217\u8d44\u6e90\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SpecialResource"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5176\u5b83\u81ea\u5b9a\u4e49\u8d44\u6e90")))),(0,n.kt)("h2",{id:"3-\u8bb0\u5f55em\u4e0a\u62a5\u7684\u53ef\u7528\u8d44\u6e90"},"3 \u8bb0\u5f55EM\u4e0a\u62a5\u7684\u53ef\u7528\u8d44\u6e90"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6301\u6709\u8d44\u6e90\u7684EM\u5728\u542f\u52a8\u65f6\uff0c\u5c06\u901a\u8fc7RPC\u8c03\u7528register\u63a5\u53e3\uff0c\u4f20\u5165json\u683c\u5f0f\u7684\u8d44\u6e90\u6765\u8fdb\u884c\u8d44\u6e90\u6ce8\u518c\u3002\u9700\u8981\u5411register\u63a5\u53e3\u63d0\u4f9b\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,n.kt)("p",{parentName:"li"},"1) \u603b\u8d44\u6e90\uff1a\u8be5EM\u80fd\u591f\u63d0\u4f9b\u7684\u8d44\u6e90\u603b\u6570\u3002"),(0,n.kt)("p",{parentName:"li"},"2) \u4fdd\u62a4\u8d44\u6e90\uff1a\u5f53\u5269\u4f59\u8d44\u6e90\u5c0f\u4e8e\u8be5\u8d44\u6e90\u65f6\uff0c\u4e0d\u518d\u5141\u8bb8\u7ee7\u7eed\u5206\u914d\u8d44\u6e90\u3002"),(0,n.kt)("p",{parentName:"li"},"3) \u8d44\u6e90\u7c7b\u578b\uff1a\u5982LoadResource\uff0cDriverAndYarnResource\u7b49\u7c7b\u578b\u540d\u79f0\u3002"),(0,n.kt)("p",{parentName:"li"},"4) EM\u540d\u79f0\uff1a\u5982sparkEngineManager\u7b49\u63d0\u4f9b\u8d44\u6e90\u7684EM\u540d\u79f0\u3002"),(0,n.kt)("p",{parentName:"li"},"5) EM\u5b9e\u4f8b\uff1a\u673a\u5668\u540d\u52a0\u7aef\u53e3\u540d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"RM\u5728\u6536\u5230\u8d44\u6e90\u6ce8\u518c\u8bf7\u6c42\u540e\uff0c\u5728\u8868linkis_module_resource_meta_data\u4e2d\u65b0\u589e\u4e00\u6761\u8bb0\u5f55\uff0c\u5185\u5bb9\u4e0e\u63a5\u53e3\u7684\u53c2\u6570\u4fe1\u606f\u4e00\u81f4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6301\u6709\u8d44\u6e90\u7684EM\u5728\u5173\u95ed\u65f6\uff0c\u5c06\u901a\u8fc7RPC\u8c03\u7528unregister\u63a5\u53e3\uff0c\u4f20\u5165\u81ea\u5df1\u7684EM\u5b9e\u4f8b\u4fe1\u606f\u4f5c\u4e3a\u53c2\u6570\uff0c\u6765\u8fdb\u884c\u8d44\u6e90\u7684\u4e0b\u7ebf\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"RM\u5728\u6536\u5230\u8d44\u6e90\u4e0b\u7ebf\u8bf7\u6c42\u540e\uff0c\u5728linkis_module_resource_meta_data\u8868\u4e2d\u627e\u5230EM\u5b9e\u4f8b\u4fe1\u606f\u5bf9\u5e94\u7684\u90a3\u4e00\u884c\uff0c\u8fdb\u884c\u5220\u9664\u5904\u7406\uff1b\u540c\u65f6\u5728linkis_user_resource_meta_data\u8868\u4e2d\uff0c\u627e\u5230\u8be5EM\u5b9e\u4f8b\u5bf9\u5e94\u7684\u6240\u6709\u884c\uff0c\u8fdb\u884c\u5220\u9664\u5904\u7406\u3002"))),(0,n.kt)("h2",{id:"4-\u8d44\u6e90\u7684\u5206\u914d\u4e0e\u56de\u6536"},"4 \u8d44\u6e90\u7684\u5206\u914d\u4e0e\u56de\u6536"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u63a5\u6536\u7528\u6237\u7684\u8d44\u6e90\u7533\u8bf7\u3002"),(0,n.kt)("p",{parentName:"li"},"a) RM\u63d0\u4f9brequestResource\u63a5\u53e3\u7ed9EM\u4e0a\u62a5\u8d44\u6e90\u7533\u8bf7\uff0c\u8be5\u63a5\u53e3\u63a5\u53d7EM\u5b9e\u4f8b\u3001\u7528\u6237\u3001Creator\u548cResource\u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\u3002requestResource\u63a5\u53d7\u4e00\u4e2a\u53ef\u9009\u7684\u65f6\u95f4\u53c2\u6570\uff0c\u5f53\u5904\u7406\u4e8b\u4ef6\u8d85\u51fa\u8be5\u65f6\u95f4\u53c2\u6570\u7684\u9650\u5236\u65f6\uff0c\u8be5\u8d44\u6e90\u7533\u8bf7\u5c06\u81ea\u52a8\u4f5c\u4e3a\u5931\u8d25\u5904\u7406\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5224\u65ad\u662f\u5426\u6709\u8db3\u591f\u7684\u8d44\u6e90\u3002"),(0,n.kt)("p",{parentName:"li"},"a) \u6839\u636eEM\u5b9e\u4f8b\u4fe1\u606f\uff0c\u627e\u5230\u8be5EM\u63d0\u4f9b\u7684\u8d44\u6e90\u7c7b\u578b\uff0c\u518d\u627e\u5230\u5bf9\u5e94\u7684RequestResourceService\uff08\u6709\u591a\u4e2a\u5b50\u7c7b\uff0c\u6bcf\u4e2a\u5b50\u7c7b\u5747\u4e0e\u4e00\u79cd\u6216\u591a\u79cd\u8d44\u6e90\u7c7b\u578b\u5bf9\u5e94\uff0c\u6709\u5404\u81ea\u7684\u5904\u7406\u903b\u8f91\uff09\u3002"),(0,n.kt)("p",{parentName:"li"},"b) RequestResourceService\u4ece\u591a\u4e2a\u7ef4\u5ea6\u7edf\u8ba1\u5269\u4f59\u7684\u53ef\u7528\u8d44\u6e90\u3002"),(0,n.kt)("p",{parentName:"li"}," ","\u2002","i. \u6839\u636e\u8be5EM\u7684\u603b\u8d44\u6e90\uff0c\u51cf\u53bb\u5df2\u7528\u8d44\u6e90\u548c\u4fdd\u62a4\u8d44\u6e90\u540e\uff0c\u5f97\u51fa\u5269\u4f59\u7684EM\u53ef\u7528\u8d44\u6e90\u3002"),(0,n.kt)("p",{parentName:"li"}," ","\u2002","ii. \u6839\u636e\u8be5Creator\u5141\u8bb8\u4f7f\u7528\u7684\u8d44\u6e90\u4e0a\u9650\uff0c\u51cf\u53bb\u8be5creator\u5df2\u4f7f\u7528\u7684\u8d44\u6e90\u540e\uff0c\u5f97\u51fa\u5269\u4f59\u7684Creator\u53ef\u7528\u8d44\u6e90\u3002"),(0,n.kt)("p",{parentName:"li"}," ","\u2002","iii. \u6839\u636e\u8be5\u7528\u6237\u5141\u8bb8\u4f7f\u7528\u7684\u8d44\u6e90\u4e0a\u9650\uff0c\u51cf\u53bb\u8be5\u7528\u6237\u5df2\u4f7f\u7528\u7684\u8d44\u6e90\u540e\uff0c\u5f97\u51fa\u5269\u4f59\u7684\u7528\u6237\u53ef\u7528\u8d44\u6e90\u3002"),(0,n.kt)("p",{parentName:"li"}," ","\u2002","iv. \u6839\u636e\u8be5\u7528\u6237\u5168\u5c40\u7684\u5b9e\u4f8b\u6570\u4e0a\u9650\uff0c\u51cf\u53bb\u8be5\u7528\u6237\u5df2\u542f\u52a8\u7684\u5f15\u64ce\u4e2a\u6570\uff0c\u5f97\u51fa\u5269\u4f59\u7684\u53ef\u7528\u5b9e\u4f8b\u6570\u3002"),(0,n.kt)("p",{parentName:"li"},"c) \u5206\u6b65\u9aa4\u5c06\u5269\u4f59\u53ef\u7528\u6570\u91cf\u4e0e\u7533\u8bf7\u7684\u8d44\u6e90\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,n.kt)("p",{parentName:"li"}," ","\u2002","i.\t\u6309b\u4e2d\u6240\u5217\u7684\u987a\u5e8f\uff0c\u4e00\u65e6\u67d0\u4e2a\u6b65\u9aa4\u7684\u5269\u4f59\u53ef\u7528\u6570\u91cf\u5c0f\u4e8e\u7533\u8bf7\u7684\u6570\u91cf\u65f6\uff0c\u7acb\u523b\u5224\u5b9a\u65e0\u8db3\u591f\u8d44\u6e90\uff0c\u8fd4\u56deNotEnoughResource\u4ee5\u53ca\u76f8\u5e94\u7684\u63d0\u793a\u4fe1\u606f\uff0c\u4e0d\u518d\u8fdb\u884c\u540e\u7eed\u6b65\u9aa4\u7684\u5224\u5b9a\u3002"),(0,n.kt)("p",{parentName:"li"}," ","\u2002","ii. \u4ee5\u4e0a\u6b65\u9aa4\u91cc\uff0c\u5982\u679c\u76f4\u5230\u6700\u540e\u5269\u4f59\u53ef\u7528\u6570\u91cf\u90fd\u5927\u4e8e\u7533\u8bf7\u7684\u6570\u91cf\uff0c\u5219\u5224\u5b9a\u6709\u8db3\u591f\u8d44\u6e90\uff0c\u8fdb\u884c\u4e0b\u4e00\u6b65\u9501\u5b9a\u8d44\u6e90\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e3a\u6210\u529f\u7533\u8bf7\u5230\u8d44\u6e90\u7684\u8bf7\u6c42\u9501\u5b9a\u8d44\u6e90\u3002\u786e\u8ba4\u8d44\u6e90\u8db3\u591f\u540e\uff0c\u4e3a\u8be5\u7533\u8bf7\u63d0\u524d\u9501\u5b9a\u8d44\u6e90\uff0c\u5e76\u751f\u6210\u552f\u4e00\u6807\u8bc6\u3002"),(0,n.kt)("p",{parentName:"li"},"a) \u4e3a\u4e86\u4fdd\u8bc1\u5e76\u53d1\u573a\u666f\u4e0b\u7684\u6b63\u786e\u6027\uff0c\u8fdb\u884c\u9501\u5b9a\u64cd\u4f5c\u4e4b\u524d\uff0c\u9700\u8981\u52a0\u4e24\u4e2a\u9501\uff08\u9501\u673a\u5236\u7684\u5177\u4f53\u5b9e\u73b0\u5728\u53e6\u5916\u7ae0\u8282\u4e2d\u63cf\u8ff0\uff09\uff1aEM\u9501\u548c\u7528\u6237\u9501\u3002"),(0,n.kt)("p",{parentName:"li"}," ","\u2002","i.\tEM\u9501\u3002\u83b7\u5f97\u8be5\u9501\u4ee5\u540e\uff0c\u5c06\u4e0d\u5141\u8bb8\u5176\u5b83\u9488\u5bf9\u8be5EM\u7684\u8d44\u6e90\u64cd\u4f5c\u3002"),(0,n.kt)("p",{parentName:"li"}," ","\u2002","ii.\t\u7528\u6237\u9501\u3002\u83b7\u5f97\u8be5\u9501\u4ee5\u540e\uff0c\u5c06\u4e0d\u5141\u8bb8\u8be5\u7528\u6237\u7684\u5176\u5b83\u8d44\u6e90\u64cd\u4f5c\u3002"),(0,n.kt)("p",{parentName:"li"},"b) \u5728\u4e24\u4e2a\u9501\u5747\u6210\u529f\u83b7\u5f97\u540e\uff0c\u5c06\u518d\u6b21\u91cd\u590d\u5224\u65ad\u4e00\u904d\u8d44\u6e90\u662f\u5426\u8db3\u591f\uff0c\u5982\u679c\u4f9d\u7136\u8db3\u591f\uff0c\u5219\u7ee7\u7eed\u8fdb\u884c\u540e\u7eed\u6b65\u9aa4\u3002"),(0,n.kt)("p",{parentName:"li"},"c) \u4e3a\u8be5\u8d44\u6e90\u7533\u8bf7\u751f\u6210\u4e00\u4e2aUUID\uff0c\u5e76\u5728linkis_user_resource_meta_data\u8868\u4e2d\u63d2\u5165\u4e00\u6761\u7528\u6237\u8d44\u6e90\u8bb0\u5f55\uff08pre_used_resource\u4e3a\u7533\u8bf7\u7684\u8d44\u6e90\u6570\u91cf\uff0cused_resource\u4e3anull\uff09\u3002"),(0,n.kt)("p",{parentName:"li"},"d) \u5728linkis_module_resource_meta_data\u8868\u4e2d\u66f4\u65b0\u5bf9\u5e94\u7684EM\u8d44\u6e90\u8bb0\u5f55\u5b57\u6bb5\uff08locked_resource,left_resource\uff09\u3002"),(0,n.kt)("p",{parentName:"li"},"e) \u63d0\u4ea4\u4e00\u4e2a\u5b9a\u65f6\u4efb\u52a1\uff0c\u8be5\u4efb\u52a1\u5982\u679c\u4e0d\u88ab\u53d6\u6d88\uff0c\u5219\u5728\u56fa\u5b9a\u65f6\u95f4\u540e\u56de\u6edac\u3001d\u4e24\u6b65\u7684\u64cd\u4f5c\uff0c\u5e76\u5c06UUID\u4f5c\u5e9f\uff0c\u4ee5\u4fbf\u672a\u88ab\u5b9e\u9645\u4f7f\u7528\u7684\u5df2\u9501\u5b9a\u8d44\u6e90\u4e0d\u4f1a\u88ab\u65e0\u9650\u5360\u636e\u3002"),(0,n.kt)("p",{parentName:"li"},"f) \u5c06UUID\u8fd4\u56de\u7ed9\u8d44\u6e90\u7533\u8bf7\u65b9\u3002"),(0,n.kt)("p",{parentName:"li"},"g) \u65e0\u8bba\u4ee5\u4e0a\u6b65\u9aa4\u4e2d\u53d1\u751f\u4e86\u4ec0\u4e48\uff0c\u90fd\u5728\u6700\u540e\u91ca\u653ea\u4e2d\u83b7\u5f97\u7684\u4e24\u4e2a\u9501\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u63a5\u6536\u7528\u6237\u4e0a\u62a5\u7684\u5b9e\u9645\u4f7f\u7528\u8d44\u6e90\u3002"),(0,n.kt)("p",{parentName:"li"},"a) \u63d0\u4f9bresourceInited\u63a5\u53e3\uff0c\u63a5\u53d7UUID\u3001\u7528\u6237\u540d\u3001EM\u5b9e\u4f8b\u4fe1\u606f\u3001\u5b9e\u9645\u4f7f\u7528Resource\u5bf9\u8c61\u548c\u5f15\u64ce\u5b9e\u4f8b\u4fe1\u606f\u4f5c\u4e3a\u53c2\u6570\u3002"),(0,n.kt)("p",{parentName:"li"},"b) \u63a5\u6536\u5230\u4e0a\u62a5\u4fe1\u606f\u540e\uff0c\u83b7\u5f97EM\u9501\u548c\u7528\u6237\u9501\u3002"),(0,n.kt)("p",{parentName:"li"},"c) \u6839\u636eUUID\u67e5\u8be2\u5230\u5bf9\u5e94\u7684\u9501\u5b9a\u8d44\u6e90\u7684\u8bb0\u5f55\uff0c\u5c06pre_used_resource\u66f4\u65b0\u4e3anull\uff0c\u5c06\u5b9e\u9645\u4f7f\u7528\u7684\u8d44\u6e90\u586b\u5199used_resource\u3002"),(0,n.kt)("p",{parentName:"li"},"d) \u66f4\u65b0\u5bf9\u5e94\u7684\u6a21\u5757\u8d44\u6e90\u8bb0\u5f55(\u6062\u590dlocked_resource,\u65b0\u589eused_resource)\u3002"),(0,n.kt)("p",{parentName:"li"},"e) \u5f02\u5e38\u60c5\u51b5\uff1a\u5982\u679c\u627e\u4e0d\u5230\u5bf9\u5e94\u7684UUID\uff0c\u5219\u8ba4\u4e3a\u5df2\u7ecf\u4e22\u5931\u5bf9\u8d44\u6e90\u7684\u9501\u5b9a\uff0c\u8fd4\u56de\u5f02\u5e38\u4fe1\u606f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u63a5\u6536\u7528\u6237\u91ca\u653e\u8d44\u6e90\u7684\u8bf7\u6c42\u3002"),(0,n.kt)("p",{parentName:"li"},"a)\t\u63d0\u4f9bresourceReleased\u63a5\u53e3\uff0c\u63a5\u53d7UUID\u3001\u7528\u6237\u540d\u3001EM\u5b9e\u4f8b\u4f5c\u4e3a\u53c2\u6570\u3002"),(0,n.kt)("p",{parentName:"li"},"b)\t\u63a5\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u83b7\u5f97EM\u9501\u548c\u7528\u6237\u9501\u3002"),(0,n.kt)("p",{parentName:"li"},"c)\t\u6839\u636eUUID\u67e5\u8be2\u5230\u5bf9\u5e94\u7684\u7528\u6237\u8d44\u6e90\u8bb0\u5f55\uff0c\u5220\u9664\u8be5\u884c\u3002"),(0,n.kt)("p",{parentName:"li"},"d)\t\u66f4\u65b0\u5bf9\u5e94\u7684\u6a21\u5757\u8d44\u6e90\u8bb0\u5f55(\u6e05\u7406used_resource\uff0c\u6062\u590dleft_resource)\u3002"))),(0,n.kt)("h2",{id:"5-em\u9501\u4e0e\u7528\u6237\u9501\u7684\u5b9e\u73b0"},"5 EM\u9501\u4e0e\u7528\u6237\u9501\u7684\u5b9e\u73b0"),(0,n.kt)("p",null,"  \u901a\u8fc7linkis_resource_lock\u8868\u6765\u5b9e\u73b0\u9501\uff0c\u5229\u7528\u6570\u636e\u5e93\u672c\u8eab\u7684unique constraint\u673a\u5236\u4fdd\u8bc1\u6570\u636e\u4e0d\u88ab\u62a2\u5199\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"EM\u9501\uff1a\u9488\u5bf9\u5168\u5c40\u9501\u4f4f\u5bf9\u67d0\u4e2aEM\u7684\u67d0\u4e2a\u5b9e\u4f8b\u7684\u64cd\u4f5c\u3002"),(0,n.kt)("p",{parentName:"li"},"a)\t\u83b7\u5f97\u9501\uff1a"),(0,n.kt)("p",{parentName:"li"}," ","\u2002","i. \u68c0\u67e5\u662f\u5426\u5b58\u5728user\u4e3anull\u3001\u4e14application\u548cinstance\u680f\u4f4d\u4e3a\u5bf9\u5e94\u503c\u7684\u8bb0\u5f55\uff0c\u82e5\u6709\uff0c\u5219\u8bf4\u660e\u8be5\u9501\u5df2\u88ab\u5176\u5b83\u5b9e\u4f8b\u83b7\u5f97\uff0c\u8f6e\u8be2\u7b49\u5f85\u3002"),(0,n.kt)("p",{parentName:"li"}," ","\u2002","ii. \u5f53\u53d1\u73b0\u6ca1\u6709\u5bf9\u5e94\u8bb0\u5f55\u65f6\uff0c\u63d2\u5165\u4e00\u6761\u8bb0\u5f55\uff0c\u82e5\u63d2\u5165\u6210\u529f\uff0c\u5219\u8bf4\u660e\u6210\u529f\u83b7\u5f97\u9501\uff1b\u82e5\u63d2\u5165\u9047\u5230\u8fdd\u53cdUniqueConstraint\u9519\u8bef\uff0c\u5219\u8bb0\u5f55\u8f6e\u8be2\u7b49\u5f85\uff0c\u76f4\u5230timeout\u3002"),(0,n.kt)("p",{parentName:"li"},"b)\t\u91ca\u653e\u9501\uff1a"),(0,n.kt)("p",{parentName:"li"}," ","\u2002","i. \u5220\u9664\u81ea\u5df1\u6240\u6301\u6709\u7684\u90a3\u884c\u8bb0\u5f55\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7528\u6237\u9501\uff1a\u9488\u5bf9\u67d0\u4e2a\u7528\u6237\u9501\u4f4f\u5bf9\u67d0\u4e2aEM\u7684\u64cd\u4f5c\u3002"),(0,n.kt)("p",{parentName:"li"},"a)\t\u83b7\u5f97\u9501\uff1a"),(0,n.kt)("p",{parentName:"li"}," ","\u2002","i. \u68c0\u67e5\u662f\u5426\u5b58\u5728user\uff0capplication\u548cinstance\u680f\u4f4d\u4e3a\u5bf9\u5e94\u503c\u7684\u8bb0\u5f55\uff0c\u82e5\u6709\uff0c\u5219\u8bf4\u660e\u8be5\u9501\u5df2\u88ab\u5176\u5b83\u5b9e\u4f8b\u83b7\u5f97\uff0c\u8f6e\u8be2\u7b49\u5f85\u3002"),(0,n.kt)("p",{parentName:"li"}," ","\u2002","ii.\t\u5f53\u53d1\u73b0\u6ca1\u6709\u5bf9\u5e94\u8bb0\u5f55\u65f6\uff0c\u63d2\u5165\u4e00\u6761\u8bb0\u5f55\uff0c\u82e5\u63d2\u5165\u6210\u529f\uff0c\u5219\u8bf4\u660e\u6210\u529f\u83b7\u5f97\u9501\uff1b\u82e5\u63d2\u5165\u5931\u8d25\uff0c\u5219\u8bb0\u5f55\u8f6e\u8be2\u7b49\u5f85\uff0c\u76f4\u5230timeout\u3002"),(0,n.kt)("p",{parentName:"li"},"b)\t\u91ca\u653e\u9501\uff1a"),(0,n.kt)("p",{parentName:"li"}," ","\u2002","i. \u5220\u9664\u81ea\u5df1\u6240\u6301\u6709\u7684\u8bb0\u5f55\u3002"))),(0,n.kt)("h2",{id:"6-rm\u5ba2\u6237\u7aef"},"6 RM\u5ba2\u6237\u7aef"),(0,n.kt)("p",null,"  \u4ee5jar\u5305\u7684\u5f62\u5f0f\uff0c\u63d0\u4f9b\u5ba2\u6237\u7aef\u7ed9\u8d44\u6e90\u4f7f\u7528\u65b9\u548c\u8d44\u6e90\u63d0\u4f9b\u65b9\uff0c\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6240\u6709\u8d44\u6e90\u7c7b\u578b\u7684Java\u7c7b\uff08Resource\u7c7b\u7684\u5b50\u7c7b\uff09\uff0c\u4ee5\u53ca\u76f8\u5e94\u7684json\u5e8f\u5217\u5316\u65b9\u6cd5\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6240\u6709\u8d44\u6e90\u5206\u914d\u7ed3\u679c\u7684Java\u7c7b\uff08ResultResource\u7c7b\u7684\u5b50\u7c7b\uff09\uff0c\u4ee5\u53ca\u76f8\u5e94\u7684json\u5e8f\u5217\u5316\u65b9\u6cd5\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c01\u88c5\u597d\u7684RM\u63a5\u53e3\uff08\u8d44\u6e90\u6ce8\u518c\u3001\u4e0b\u7ebf\u3001\u7533\u8bf7\u4ee5\u53ca\u53ef\u7528\u8d44\u6e90\u548c\u91ca\u653e\u8d44\u6e90\u7684\u8bf7\u6c42\uff09\u3002"),(0,n.kt)("p",{parentName:"li"},"\u8c03\u7528\u5ba2\u6237\u7aef\u7684\u63a5\u53e3\u540e\uff0c\u5ba2\u6237\u7aef\u5c06\u751f\u6210\u5bf9\u5e94\u7684RPC\u547d\u4ee4\uff0c\u901a\u8fc7Sender\u4f20\u9012\u7ed9RM\u7684\u4e00\u4e2a\u5fae\u670d\u52a1\u8fdb\u884c\u5904\u7406\u3002RM\u5904\u7406\u5b8c\u6bd5\u540e\uff0c\u540c\u6837\u901a\u8fc7RPC\u5c06\u7ed3\u679c\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"))),(0,n.kt)("h2",{id:"7-\u591a\u5b9e\u4f8b\u72b6\u6001\u540c\u6b65"},"7 \u591a\u5b9e\u4f8b\u72b6\u6001\u540c\u6b65"),(0,n.kt)("p",null,"\u2002","\u2002","\u7531\u4e8eRM\u5c5e\u4e8e\u5173\u952e\u7684\u5e95\u5c42\u670d\u52a1\uff0c\u4e3a\u4e86\u9632\u6b62\u56e0\u4e3a\u67d0\u4e2aRM\u5b9e\u4f8b\u51fa\u73b0\u5f02\u5e38\u800c\u5f71\u54cd\u6240\u6709\u670d\u52a1\u7684\u8d44\u6e90\u5206\u914d\uff0c\u5fc5\u987b\u4fdd\u8bc1\u540c\u65f6\u6709\u591a\u4e2aRM\u5b9e\u4f8b\u5904\u4e8e\u670d\u52a1\u72b6\u6001\uff0c\u5e76\u4fdd\u8bc1\u4e00\u4e2a\u8bf7\u6c42\u65e0\u8bba\u662f\u88ab\u54ea\u4e2a\u5b9e\u4f8b\u5904\u7406\uff0c\u5747\u80fd\u4fdd\u8bc1\u7ed3\u679c\u7684\u4e00\u81f4\u6027\u3002"),(0,n.kt)("p",null,"\u2002","\u2002","\u7528\u6237\u5728\u8bf7\u6c42RM\u7684\u670d\u52a1\u65f6\uff0c\u5fc5\u987b\u901a\u8fc7\u7f51\u5173\u670d\u52a1\u7684\u8f6c\u53d1\u6765\u8bf7\u6c42\uff0c\u800c\u65e0\u6cd5\u76f4\u63a5\u8bf7\u6c42\u67d0\u4e00\u53f0\u56fa\u5b9a\u7684RM\u5b9e\u4f8b\u3002\u7f51\u5173\u670d\u52a1\u901a\u8fc7\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0\u673a\u5236\uff0c\u8bc6\u522b\u51fa\u6b63\u5e38\u63d0\u4f9b\u670d\u52a1\u7684RM\u5b9e\u4f8b\uff0c\u4ece\u800c\u5c06RPC\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u5176\u4e2d\u4e00\u4e2a\u5b9e\u4f8b\u3002\u8fd9\u5c31\u4fdd\u8bc1\u4e86\u6240\u6709\u8bf7\u6c42\u5747\u4f1a\u88ab\u6b63\u5e38\u72b6\u6001\u7684RM\u5b9e\u4f8b\u5904\u7406\u3002"),(0,n.kt)("p",null,"\u2002","\u2002","RM\u6240\u6709\u7684\u8d44\u6e90\u8bb0\u5f55\u5747\u5b58\u50a8\u5728\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u4e2d\uff0c\u6240\u6709\u7684RM\u5b9e\u4f8b\u5747\u4e0d\u7ef4\u62a4\u81ea\u8eab\u7684\u72b6\u6001\u3002RM\u5728\u5904\u7406\u8bf7\u6c42\u65f6\uff0c\u51e1\u662f\u6d89\u53ca\u72b6\u6001\u53d8\u5316\u7684\uff0c\u90fd\u4f1a\u5728\u52a0\u9501\u540e\uff0c\u4ece\u6570\u636e\u5e93\u5b9e\u65f6\u83b7\u53d6\u72b6\u6001\u4fe1\u606f\uff0c\u5b8c\u6210\u5904\u7406\u903b\u8f91\u540e\u7acb\u523b\u5c06\u72b6\u6001\u66f4\u65b0\u56de\u6570\u636e\u5e93\uff0c\u518d\u91ca\u653e\u9501\u3002\u8fd9\u5c31\u4fdd\u8bc1\u4e86\u591a\u4e2aRM\u540c\u65f6\u5904\u7406\u8bf7\u6c42\u65f6\uff0c\u603b\u80fd\u57fa\u4e8e\u6700\u65b0\u7684\u72b6\u6001\u3002"))}c.isMDXComponent=!0},16282:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rm_architecture_diagram-1c3dbd483ada630bcfe271fdc26a4b5d.png"}}]);