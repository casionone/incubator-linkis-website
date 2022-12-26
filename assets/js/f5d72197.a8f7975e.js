"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[40718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,h=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return n?i.createElement(h,a(a({ref:t},s),{},{components:n})):i.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34517:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={title:"Path Usage Specification",sidebar_position:6},a=void 0,c={unversionedId:"development-specification/path-usage",id:"development-specification/path-usage",isDocsHomePage:!1,title:"Path Usage Specification",description:"Please note: Linkis provides a unified Storage module, so you must follow the Linkis path specification when using the path or configuring the path in the configuration file.",source:"@site/community/development-specification/path-usage.md",sourceDirName:"development-specification",slug:"/development-specification/path-usage",permalink:"/community/development-specification/path-usage",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/community/development-specification/path-usage.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Path Usage Specification",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Concurrent Specification",permalink:"/community/development-specification/concurrent"},next:{title:"Test Specification",permalink:"/community/development-specification/unit-test"}},p=[],l={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please note: Linkis provides a unified Storage module, so you must follow the Linkis path specification when using the path or configuring the path in the configuration file."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("strong",{parentName:"p"},"Compulsory"),"]","When using a file path, whether it is local, HDFS, or HTTP, the schema information must be included. Among them:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Scheme header for local file is: file:///;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Scheme header for HDFS is: hdfs:///;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Scheme header for HTTP is: http:///."))))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"There should be no special characters in the path. Try to use the combination of English characters, underline and numbers.")))}s.isMDXComponent=!0}}]);