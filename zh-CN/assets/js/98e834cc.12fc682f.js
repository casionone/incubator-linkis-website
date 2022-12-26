"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[81370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),k=l,h=c["".concat(p,".").concat(k)]||c[k]||d[k]||i;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},98806:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const i={title:"\u7ed3\u679c\u96c6\u6587\u4ef6\u5b58\u50a8",sidebar_position:3},a=void 0,o={unversionedId:"architecture/storage/resultset-file",id:"version-0.11.0/architecture/storage/resultset-file",isDocsHomePage:!1,title:"\u7ed3\u679c\u96c6\u6587\u4ef6\u5b58\u50a8",description:"\u7ed3\u679c\u96c6\u6587\u4ef6\u5b58\u50a8\u65b9\u6848\u2014\u2014Dolphin\u6587\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/storage/resultset-file.md",sourceDirName:"architecture/storage",slug:"/architecture/storage/resultset-file",permalink:"/zh-CN/docs/0.11.0/architecture/storage/resultset-file",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/storage/resultset-file.md",tags:[],version:"0.11.0",sidebarPosition:3,frontMatter:{title:"\u7ed3\u679c\u96c6\u6587\u4ef6\u5b58\u50a8",sidebar_position:3},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"\u8bbf\u95ee\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u67b6\u6784",permalink:"/zh-CN/docs/0.11.0/architecture/storage/remote-file-system-architecture-design"},next:{title:"UJES\u8bbe\u8ba1",permalink:"/zh-CN/docs/0.11.0/architecture/ujes/ujes-design"}},p=[{value:"1 \u80cc\u666f",id:"1-\u80cc\u666f",children:[]},{value:"2 \u601d\u8def",id:"2-\u601d\u8def",children:[]},{value:"3 \u5b9e\u73b0",id:"3-\u5b9e\u73b0",children:[{value:"3.1 \u6570\u636e\u5199\u5165Dolphin",id:"31-\u6570\u636e\u5199\u5165dolphin",children:[]},{value:"3.2 \u8bfb\u53d6Dolphin\u6587\u4ef6",id:"32-\u8bfb\u53d6dolphin\u6587\u4ef6",children:[]},{value:"3.3  \u8df3\u8bfb",id:"33--\u8df3\u8bfb",children:[]},{value:"3.4 \u5e8f\u5217\u5316",id:"34-\u5e8f\u5217\u5316",children:[]}]}],u={toc:p};function s(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7ed3\u679c\u96c6\u6587\u4ef6\u5b58\u50a8\u65b9\u6848\u2014\u2014Dolphin\u6587\u4ef6")),(0,l.kt)("h2",{id:"1-\u80cc\u666f"},"1 \u80cc\u666f"),(0,l.kt)("p",null,"Linkis\u9762\u4e34\u5c06\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\u5b58\u50a8\u5230\u6587\u4ef6\u91cc\u9762\u7684\u9700\u6c42\uff0c\u5982\uff1a\u5c06Hive\u8868\u6570\u636e\u5b58\u50a8\u5230\u6587\u4ef6\uff0c\u5e76\u5e0c\u671b\u80fd\u4fdd\u5b58\u5b57\u6bb5\u7684\u7c7b\u578b\u3001\u5217\u540d\u548ccomment\u7b49\u5143\u6570\u636e\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u73b0\u6709\u7684\u6587\u4ef6\u5b58\u50a8\u65b9\u6848\u4e00\u822c\u53ea\u652f\u6301\u7279\u5b9a\u7684\u6570\u636e\u7c7b\u578b\u8fdb\u884c\u5b58\u50a8\uff0c\u5982\uff1aORC\u652f\u6301\u6570\u636e\u8868\u4f46\u662f\u4e0d\u652f\u6301\u975e\u7ed3\u6784\u5316\u6570\u636e\u7684\u4fdd\u5b58\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u652f\u6301\u4fdd\u5b58\u7279\u6b8a\u5b57\u7b26\uff0c\u4e5f\u662f\u4fc3\u4f7f\u6211\u4eec\u5b9a\u4e49\u65b0\u6587\u4ef6\u683c\u5f0f\u7684\u539f\u56e0\u3002\u5982\uff1atextFile\u4e2d\u5982\u679c\u67d0\u4e2a\u5b57\u6bb5\u6709\u6362\u884c\u7b26\u7b49\u7279\u6b8a\u5b57\u7b26\uff0c\u89e3\u6790\u8bfb\u53d6\u65f6\u4f1a\u5bfc\u81f4\u5185\u5bb9\u5f02\u5e38\u3002"),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u5982\u679c\u6587\u4ef6\u5185\u5bb9\u8fc7\u5927\uff0cLinkis\u901a\u5e38\u5e0c\u671b\u63d0\u4f9b\u5206\u9875\u529f\u80fd\uff0c\u73b0\u6709\u7684\u6587\u4ef6\u5b58\u50a8\u65b9\u6848\u53ea\u652f\u6301\u8df3\u8fc7\u591a\u5c11\u5b57\u8282\uff0c\u4e0d\u652f\u6301\u8df3\u8fc7\u591a\u5c11\u884c\uff0c\u6216\u8005\u53ea\u8bfb\u53d6\u6587\u4ef6\u4e2d\u7684\u67d0\u4e00\u884c\u3002"),(0,l.kt)("h2",{id:"2-\u601d\u8def"},"2 \u601d\u8def"),(0,l.kt)("p",null,"Linkis\u5b9a\u4e49\u4e86\u4e00\u79cd\u5b58\u50a8\u591a\u79cd\u6570\u636e\u7c7b\u578b\u7684\u6587\u4ef6\u5b58\u50a8\u683c\u5f0fDolphin\u6587\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Dolphin\u6587\u4ef6\u683c\u5f0f",src:n(29850).Z})),(0,l.kt)("p",null,"Dolphin\u7684\u6587\u4ef6\u7ed3\u6784\u5982\u4e0a\u56fe\u6240\u793a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6587\u4ef6\u5f00\u5934\u5b58\u50a8Dolphin\u6807\u8bc6\uff0c\u7528\u4e8e\u533a\u5206\u662f\u5426\u8be5\u6587\u4ef6\u662fDolphin\u6587\u4ef6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Metadata\uff1a\u5185\u5bb9\u5143\u6570\u636e\u4fe1\u606f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"index Data: \u884c\u957f\u7d22\u5f15")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"RowData: \u884c\u6570\u636e\u3002"),(0,l.kt)("p",{parentName:"li"},"RowData\u5b58\u50a8\u4e86\u4e00\u884c\u6570\u636e\uff0c\u5982\uff1a\u5b58\u50a8\u4e86\u8868\u683c\u67d0\u884c\u7684\u6570\u636e\uff0c\u5305\u62ec\u884c\u6570\u636e\u957f\u5ea6\u548c\u884c\u6570\u636e\u7684Byte\u4fe1\u606f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"PostData: \u6587\u4ef6\u57fa\u672c\u4fe1\u606f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"PostDataLen\uff1a\u57fa\u672c\u4fe1\u606f\u957f\u5ea6"))),(0,l.kt)("p",null,"\u5176\u4e2dPostData\u662f\u6587\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u4e3b\u8981\u7531\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"type\uff1a\u5b58\u50a8\u5185\u5bb9\u7684\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Codec\uff1a\u7f16\u7801\u683c\u5f0f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Statistical information\uff1a\u6587\u4ef6\u5185\u5bb9\u7edf\u8ba1\u4fe1\u606f\u5305\u62ec\u884c\u6570\uff0c\u6700\u5927\u6700\u5c0f\u503c\u7b49\u3002"))),(0,l.kt)("h2",{id:"3-\u5b9e\u73b0"},"3 \u5b9e\u73b0"),(0,l.kt)("p",null,"Dolphin\u6587\u4ef6\u7684\u8bfb\u5165\u548c\u5199\u5165\u7684\u5177\u4f53\u6d41\u7a0b\u5982\u4e0b\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Dolphin\u6587\u4ef6\u8bfb\u5199\u6d41\u7a0b\u56fe",src:n(66163).Z})),(0,l.kt)("h3",{id:"31-\u6570\u636e\u5199\u5165dolphin"},"3.1 \u6570\u636e\u5199\u5165Dolphin"),(0,l.kt)("p",null,"\u7528\u6237\u9700\u8981\u5c06\u4e00\u79cd\u6587\u4ef6\u5185\u5bb9(\u6bd4\u5982\uff1atable)\u5b58\u50a8\u5230Dolphin\u6587\u4ef6\u65f6\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,"1\u3001\u5199\u5165Dolphin\u6587\u4ef6\u6807\u8bc6"),(0,l.kt)("p",null,"2\u3001\u5199\u5165\u6570\u636e\u7c7b\u578bType"),(0,l.kt)("p",null,"3\u3001\u901a\u8fc7\u5e8f\u5217\u5316\u5668\uff08Serializer\uff09\uff0c\u5199\u5165Metadata\uff08\u5143\u6570\u636e\uff09\u5982table\u7684\u5217\u540d\uff0c\u6bcf\u5217\u7684\u7c7b\u578b\uff0c\u5217\u6ce8\u91ca\u7b49\uff1b"),(0,l.kt)("p",null,"4\u3001\u4f20\u5165\u4e00\u884c\u6570\u636e\u5230DolphinWriter \uff0cDolphinWriter\u901a\u8fc7\u5e8f\u5217\u5316\u5668\uff08Serializer\uff09\u5e8f\u5217\u5316\u8be5\u884c\u6570\u636e\u83b7\u5f97\u8be5\u884c\u884c\u957f\u548c\u5e8f\u5217\u5316\u540e\u7684Bytes\u5199\u5165\u5230Dolphin\u6587\u4ef6\uff1b"),(0,l.kt)("p",null,"5\u3001\u5728\u5199\u5165\u8be5\u884c\u6570\u636e\u540e\u4f1a\u66f4\u65b0\u7edf\u8ba1\u4fe1\u606f\uff08Statistical information\uff09\uff0c\u589e\u52a0\u884c\u8bb0\u5f55\u6570\uff0c\u66f4\u65b0\u6bcf\u5217\u6700\u5927\u6700\u5c0f\u503c\u7b49\uff1b"),(0,l.kt)("p",null,"6\u3001DolphinWriter\u5c06\u7edf\u8ba1\u4fe1\u606f\uff0c\u7f16\u7801\u4fe1\u606f\u7b49\u7ec4\u6210PostData\uff08\u57fa\u672c\u4fe1\u606f\uff09\u5199\u5165\u5230Dolphin\u6587\u4ef6\uff1b"),(0,l.kt)("p",null,"7\u3001\u5199\u5165PostData\u7684\u957f\u5ea6\uff0c\u5b8c\u6210\u5199\u5165\u64cd\u4f5c\u3002"),(0,l.kt)("h3",{id:"32-\u8bfb\u53d6dolphin\u6587\u4ef6"},"3.2 \u8bfb\u53d6Dolphin\u6587\u4ef6"),(0,l.kt)("p",null,"\u7528\u6237\u8bfb\u53d6Dolphin\u6587\u4ef6\u5185\u5bb9\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,"1\u3001\u8bfb\u53d6Dolphin\u6587\u4ef6\u6807\u8bc6\uff0c\u5982\u679c\u4e0d\u662fDolphin\u6587\u4ef6\u5219\u629b\u51fa\u5f02\u5e38\uff1b"),(0,l.kt)("p",null,"2\u3001\u5982\u679c\u7528\u6237\u53ea\u9700\u8981\u8bfb\u53d6Statistical information\uff0c\u5219\u8bfb\u53d6PostData\u7684\u957f\u5ea6\uff0c\u5e76\u4f9d\u636e\u8be5\u957f\u5ea6\u83b7\u53d6PostData\u3002"),(0,l.kt)("p",null," \u901a\u8fc7PostData\uff0c\u5c06\u57fa\u672c\u4fe1\u606f\u8fdb\u884c\u89e3\u6790\u4e3a\u5bf9\u5e94\u7684Type\uff0cCodec\uff0cMetaData\uff0cStatistical information\u3002"),(0,l.kt)("p",null," \u8fd4\u56de\uff0c\u5b8c\u6210\u672c\u6b21\u8bfb\u53d6\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"3\u3001\u5982\u679c\u7528\u6237\u5e0c\u671b\u8bfb\u53d6\u6570\u636e\uff0c\u5219\u5148\u8bfb\u53d6\u6570\u636e\u7c7b\u578bType\u3002"),(0,l.kt)("p",null,"4\u3001\u8bfb\u53d6Metadata\u4fe1\u606f\uff0c\u901a\u8fc7Type\u83b7\u53d6\u89e3\u5e8f\u5217\u5316\u5668(Deserializer)\uff0c\u5c06\u8bfb\u53d6\u7684Bytes\u6570\u636e\u5c01\u88c5\u6210MetaData"),(0,l.kt)("p",null,"5\u3001\u8bfb\u53d6\u884c\u957f\u7d22\u5f15\uff0c\u5e76\u901a\u8fc7\u884c\u957f\u7d22\u5f15\u8bfb\u53d6\u884cBytes\u3002\u901a\u8fc7Type\u83b7\u53d6\u89e3\u5e8f\u5217\u5316\u5668(Deserializer)\uff0c\u5c06Bytes\u8f6c\u5316\u4e3aRecord\u6570\u636e\uff0c\u5c06Record\u548cMetaData\u5c01\u88c5RowData\uff1b"),(0,l.kt)("p",null,"6\u3001\u5c06\u8bfb\u53d6\u7684RowData\u884c\u5185\u5bb9\u7ed9\u5230\u7528\u6237\u5c31\u5b8c\u6210\u6574\u4e2a\u8bfb\u53d6\u3002"),(0,l.kt)("h3",{id:"33--\u8df3\u8bfb"},"3.3  \u8df3\u8bfb"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u95ee"),"\uff1a\u5982\u4f55\u8bfb\u53d6\u67d0\u4e00\u884c\uff1f\u5982\u4f55\u4ece\u591a\u5c11\u884c\u5f00\u59cb\u8bfb\uff1f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7b54"),"\uff1a \u5728\u5199\u5165\u4e00\u884c\u65f6\u4f1a\u5148\u5199\u5165\u884c\u957f\u7d22\u5f15\uff0c\u8fd9\u6837\u5728\u8bfb\u53d6\u65f6\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u884c\u957f\u7d22\u5f15\u8fdb\u884c\u7d22\u5f15\u8bfb\u53d6\u548c\u8df3\u884c\u8bfb\u53d6\uff1b"),(0,l.kt)("h3",{id:"34-\u5e8f\u5217\u5316"},"3.4 \u5e8f\u5217\u5316"),(0,l.kt)("p",null,"\u5e8f\u5217\u5316\u5668(Serializer)\u4f1a\u5c06\u6570\u636e\u5e8f\u5217\u5316\u4e3abyte\u6570\u7ec4\uff0c\u89e3\u5e8f\u5217\u5316\u5668(Deserializer)\u4f1a\u5c06byte\u6570\u7ec4\u89e3\u6790\u4e3a\u5b57\u7b26\u4e32\u6570\u636e\uff0c\u5b9e\u73b0\u5bf9\u7279\u6b8a\u5b57\u7b26\u7684\u6b63\u786e\u8bfb\u5199\uff1b"),(0,l.kt)("p",null,"\u5e8f\u5217\u5316\u5668(Serializer)\u548c\u89e3\u5e8f\u5217\u5316\u5668(Deserializer)\u4e0e\u7c7b\u578b(Type)\u662f\u5173\u8054\u7684\uff0c\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u5b9a\u4e49\u4e0d\u540c\u7684Serializer\u548cDeserializer\u3002"),(0,l.kt)("p",null,"Dolphin\u63d0\u4f9b\u4e86\u901a\u7528\u63a5\u53e3\u7528\u4e8e\u7528\u6237\u81ea\u5b9a\u4e49\u5b9e\u73b0\u5bf9\u5176\u4ed6\u7c7b\u578b\u6587\u4ef6\u7684\u652f\u6301\u3002"))}s.isMDXComponent=!0},29850:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dolphin_file-02dc6c26b8bc0df9a45f776f5817a290.png"},66163:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dolphin_progress-6f961646aef7157ca821afaa38d2570e.png"}}]);