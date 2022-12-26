"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[14819],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=i.createContext({}),l=function(e){var t=i.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),h=n,v=d["".concat(a,".").concat(h)]||d[h]||u[h]||s;return r?i.createElement(v,c(c({ref:t},p),{},{components:r})):i.createElement(v,c({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,c=new Array(s);c[0]=h;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[d]="string"==typeof e?e:n,c[1]=o;for(var l=2;l<s;l++)c[l]=r[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},95439:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=r(87462),n=(r(67294),r(3905));const s={title:"CS Architecture",sidebar_position:1},c=void 0,o={unversionedId:"architecture/public-enhancement-services/context-service/context-service",id:"version-1.0.3/architecture/public-enhancement-services/context-service/context-service",isDocsHomePage:!1,title:"CS Architecture",description:"ContextService Architecture",source:"@site/versioned_docs/version-1.0.3/architecture/public-enhancement-services/context-service/context-service.md",sourceDirName:"architecture/public-enhancement-services/context-service",slug:"/architecture/public-enhancement-services/context-service/context-service",permalink:"/docs/1.0.3/architecture/public-enhancement-services/context-service/context-service",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.3/architecture/public-enhancement-services/context-service/context-service.md",tags:[],version:"1.0.3",sidebarPosition:1,frontMatter:{title:"CS Architecture",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CS Cache Architecture",permalink:"/docs/1.0.3/architecture/public-enhancement-services/context-service/context-service-cache"},next:{title:"CS Client Design",permalink:"/docs/1.0.3/architecture/public-enhancement-services/context-service/context-service-client"}},a=[{value:"<strong>ContextService Architecture</strong>",id:"contextservice-architecture",children:[{value:"<strong>Horizontal Division</strong>",id:"horizontal-division",children:[]},{value:"<strong>Vertical Division</strong>",id:"vertical-division",children:[]}]},{value:"<strong>UML Class Diagram</strong>",id:"uml-class-diagram",children:[]},{value:"<strong>Scheduler thread model</strong>",id:"scheduler-thread-model",children:[]}],l={toc:a};function p(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contextservice-architecture"},(0,n.kt)("strong",{parentName:"h2"},"ContextService Architecture")),(0,n.kt)("h3",{id:"horizontal-division"},(0,n.kt)("strong",{parentName:"h3"},"Horizontal Division")),(0,n.kt)("p",null,"Horizontally divided into three modules: Restful, Scheduler, Service"),(0,n.kt)("h4",{id:"restful-responsibilities"},"Restful Responsibilities:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Encapsulate the request as httpjob and submit it to the Scheduler\n")),(0,n.kt)("h4",{id:"scheduler-responsibilities"},"Scheduler Responsibilities:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Find the corresponding service through the ServiceName of the httpjob protocol to execute the job\n")),(0,n.kt)("h4",{id:"service-responsibilities"},"Service Responsibilities:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"The module that actually executes the request logic, encapsulates the ResponseProtocol, and wakes up the wait thread in Restful\n")),(0,n.kt)("h3",{id:"vertical-division"},(0,n.kt)("strong",{parentName:"h3"},"Vertical Division")),(0,n.kt)("p",null,"Vertically divided into 4 modules: Listener, History, ContextId, Context:"),(0,n.kt)("h4",{id:"listener-responsibilities"},"Listener responsibilities:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Responsible for the registration and binding of the client side (write to the database and register in the CallbackEngine)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Heartbeat interface, return Array","[ListenerCallback]"," through CallbackEngine"))),(0,n.kt)("h4",{id:"history-responsibilities"},"History Responsibilities:"),(0,n.kt)("p",null,"Create and remove history, operate Persistence for DB persistence"),(0,n.kt)("h4",{id:"contextid-responsibilities"},"ContextId Responsibilities:"),(0,n.kt)("p",null,"Mainly docking with Persistence for ContextId creation, update and removal, etc."),(0,n.kt)("h4",{id:"context-responsibility"},"Context responsibility:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For removal, reset and other methods, first operate Persistence for DB persistence, and update ContextCache")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Encapsulate the query condition and go to the ContextSearch module to obtain the corresponding ContextKeyValue data"))),(0,n.kt)("p",null,"The steps for requesting access are as follows:\n",(0,n.kt)("img",{src:r(46017).Z})),(0,n.kt)("h2",{id:"uml-class-diagram"},(0,n.kt)("strong",{parentName:"h2"},"UML Class Diagram")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(19527).Z})),(0,n.kt)("h2",{id:"scheduler-thread-model"},(0,n.kt)("strong",{parentName:"h2"},"Scheduler thread model")),(0,n.kt)("p",null,"Need to ensure that Restful's thread pool is not filled"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(37125).Z})),(0,n.kt)("p",null,"The sequence diagram is as follows:\n",(0,n.kt)("img",{src:r(16638).Z})))}p.isMDXComponent=!0},46017:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/linkis-contextservice-service-01-0485b2ab2a1dda7825e8a6e80fbd32a6.png"},19527:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/linkis-contextservice-service-02-2f79607f5b69bcfd7b73000d5ae61eb5.png"},37125:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/linkis-contextservice-service-03-95159d79adfcbe6ac360043ec9b419b8.png"},16638:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/linkis-contextservice-service-04-d44ddd66397a140d8935e93ca5fd272a.png"}}]);