"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[52126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"\u6d4b\u8bd5\u89c4\u7ea6",sidebar_position:7},a=void 0,c={unversionedId:"development/development-specification/unit-test",id:"development/development-specification/unit-test",title:"\u6d4b\u8bd5\u89c4\u7ea6",description:"1. \u3010\u5f3a\u5236\u3011\u5de5\u5177\u7c7b\u548c\u670d\u52a1\u5185\u90e8\u63a5\u53e3\u4e00\u5b9a\u8981\u6709\u6d4b\u8bd5\u6837\u4f8b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/development-specification/unit-test.md",sourceDirName:"development/development-specification",slug:"/development/development-specification/unit-test",permalink:"/zh-CN/docs/1.3.1/development/development-specification/unit-test",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/development-specification/unit-test.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u6d4b\u8bd5\u89c4\u7ea6",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u8def\u5f84\u89c4\u8303",permalink:"/zh-CN/docs/1.3.1/development/development-specification/path-usage"},next:{title:"\u7248\u672c\u548c\u65b0\u7279\u6027\u89c4\u8303",permalink:"/zh-CN/docs/1.3.1/development/development-specification/version-feature-specifications"}},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u3010",(0,o.kt)("strong",{parentName:"li"},"\u5f3a\u5236"),"\u3011\u5de5\u5177\u7c7b\u548c\u670d\u52a1\u5185\u90e8\u63a5\u53e3\u4e00\u5b9a\u8981\u6709\u6d4b\u8bd5\u6837\u4f8b\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u3010",(0,o.kt)("strong",{parentName:"li"},"\u5f3a\u5236"),"\u3011\u5355\u5143\u6d4b\u8bd5\u9700\u8981\u80fd\u591f\u81ea\u52a8\u5316\uff08\u901a\u8fc7 mvn\u7f16\u8bd1\u5373\u53ef\u89e6\u53d1\uff09\u3001\u72ec\u7acb\u6027(\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u95f4\u4e0d\u53ef\u76f8\u4e92\u8c03\u7528)\u3001\u53ef\u91cd\u590d\u6267\u884c(\u53ef\u4ee5\u591a\u6b21\u6267\u884c\uff0c\u7ed3\u679c\u4e00\u6837)\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u3010",(0,o.kt)("strong",{parentName:"li"},"\u5f3a\u5236"),"\u3011\u4e00\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u5e94\u8be5\u53ea\u6d4b\u8bd5\u4e00\u4e2a\u65b9\u6cd5\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u3010",(0,o.kt)("strong",{parentName:"li"},"\u5f3a\u5236"),"\u3011\u6d4b\u8bd5\u7528\u4f8b\u5f02\u5e38\u4e0d\u53ef\u4ee5catch\uff0c\u9700\u8981\u5411\u4e0a\u629b\u51fa\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u3010",(0,o.kt)("strong",{parentName:"li"},"\u5f3a\u5236"),"\u3011\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801\u5fc5\u987b\u5199\u5728\u5982\u4e0b\u5de5\u7a0b\u76ee\u5f55\uff1asrc/test/java or scala\uff0c\u4e0d\u5141\u8bb8\u5199\u5728\u5176\u4ed6\u5f55\u4e0b\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u3010\u63a8\u8350\u3011\u5355\u5143\u6d4b\u8bd5\u9700\u8981\u8003\u8651\u8fb9\u754c\u6761\u4ef6\uff0c\u5982\u65e5\u671f\u9700\u8981\u8003\u8651\u6708\u672b\u548c2\u6708\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u3010\u63a8\u8350\u3011\u5bf9\u4e8e\u6570\u636e\u5e93\u76f8\u5173\u7684\u5355\u5143\u6d4b\u8bd5\uff0c\u8981\u8003\u8651\u6570\u636e\u56de\u6eda\u3002")))}u.isMDXComponent=!0}}]);