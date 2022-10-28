"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[57083],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11932:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const o={title:"installation package directory structure",sidebar_position:4.5},a=void 0,c={unversionedId:"deployment/unpack-hierarchical-structure",id:"version-1.1.3/deployment/unpack-hierarchical-structure",isDocsHomePage:!1,title:"installation package directory structure",description:"Linkis installation package decompressed directory structure",source:"@site/versioned_docs/version-1.1.3/deployment/unpack-hierarchical-structure.md",sourceDirName:"deployment",slug:"/deployment/unpack-hierarchical-structure",permalink:"/docs/1.1.3/deployment/unpack-hierarchical-structure",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.3/deployment/unpack-hierarchical-structure.md",tags:[],version:"1.1.3",sidebarPosition:4.5,frontMatter:{title:"installation package directory structure",sidebar_position:4.5},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"Installation Directory Structure",permalink:"/docs/1.1.3/deployment/installation-hierarchical-structure"},next:{title:"Source Code Directory Structure",permalink:"/docs/1.1.3/deployment/sourcecode-hierarchical-structure"}},s=[{value:"Linkis installation package decompressed directory structure",id:"linkis-installation-package-decompressed-directory-structure",children:[]}],l={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"linkis-installation-package-decompressed-directory-structure"},"Linkis installation package decompressed directory structure"),(0,i.kt)("p",null,"Download the officially released ",(0,i.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/download/main"},"Compilation Complete Package"),", and the decompressed directory structure is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\n\u251c\u2500\u2500 bin\n\u2502 \u251c\u2500\u2500 checkEnv.sh //deployment environment verification script\n\u2502 \u251c\u2500\u2500 common.sh\n\u2502 \u2514\u2500\u2500 install.sh //script to execute the installation\n\u251c\u2500\u2500 deploy-config\n\u2502 \u251c\u2500\u2500 db.sh //database connection configuration\n\u2502 \u2514\u2500\u2500 linkis-env.sh //related environment configuration information\n\u251c\u2500\u2500 DISCLAIMER\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 licenses\n\u251c\u2500\u2500 linkis-package //microservice related startup configuration files, dependencies, scripts, linkis-cli, etc.\n\u2502 \u251c\u2500\u2500 bin\n\u2502 \u251c\u2500\u2500 conf\n\u2502 \u251c\u2500\u2500 db\n\u2502 \u251c\u2500\u2500 lib\n\u2502 \u2514\u2500\u2500 sbin\n\u251c\u2500\u2500 NOTICE\n\u251c\u2500\u2500 README_CN.md\n\u2514\u2500\u2500 README.md\n\n")))}p.isMDXComponent=!0}}]);