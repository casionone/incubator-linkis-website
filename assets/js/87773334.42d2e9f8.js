"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[30103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8446:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"Linkis-Client Architecture Design",sidebar_position:4},o=void 0,l={unversionedId:"architecture/computation-governance-services/linkis-cli",id:"version-1.1.0/architecture/computation-governance-services/linkis-cli",isDocsHomePage:!1,title:"Linkis-Client Architecture Design",description:"Provide users with a lightweight client that submits tasks to Linkis for execution.",source:"@site/versioned_docs/version-1.1.0/architecture/computation-governance-services/linkis-cli.md",sourceDirName:"architecture/computation-governance-services",slug:"/architecture/computation-governance-services/linkis-cli",permalink:"/docs/1.1.0/architecture/computation-governance-services/linkis-cli",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.0/architecture/computation-governance-services/linkis-cli.md",tags:[],version:"1.1.0",sidebarPosition:4,frontMatter:{title:"Linkis-Client Architecture Design",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Entrance Architecture Design",permalink:"/docs/1.1.0/architecture/computation-governance-services/entrance"},next:{title:"Overview",permalink:"/docs/1.1.0/architecture/public-enhancement-services/overview"}},s=[],c={toc:s};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provide users with a lightweight client that submits tasks to Linkis for execution."),(0,i.kt)("h4",{id:"linkis-client-architecture-diagram"},"Linkis-Client architecture diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(28499).Z})),(0,i.kt)("h4",{id:"second-level-module-introduction"},"Second-level module introduction"),(0,i.kt)("h5",{id:"linkis-computation-client"},"Linkis-Computation-Client"),(0,i.kt)("p",null,"Provides an interface for users to submit execution tasks to Linkis in the form of SDK."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Action"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the requested attributes, methods and parameters included")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Result"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the properties of the returned result, the methods and parameters included")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UJESClient"),(0,i.kt)("td",{parentName:"tr",align:null},"Responsible for request submission, execution, status, results and related parameters acquisition")))),(0,i.kt)("h5",{id:"linkis-cli"},"Linkis-Cli"),(0,i.kt)("p",null,"Provides a way for users to submit tasks to Linkis in the form of a shell command terminal."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Common"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the parent class and interface of the instruction template parent class, the instruction analysis entity class, and the task submission and execution links")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Core"),(0,i.kt)("td",{parentName:"tr",align:null},"Responsible for parsing input, task execution and defining output methods")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Application"),(0,i.kt)("td",{parentName:"tr",align:null},"Call linkis-computation-client to perform tasks, and pull logs and final results in real time")))))}u.isMDXComponent=!0},28499:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-client-01-1ac14b684c9af9906731ffc6bc0b9448.png"}}]);