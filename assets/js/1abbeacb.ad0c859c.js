"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[27684],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(t),m=r,p=g["".concat(c,".").concat(m)]||g[m]||d[m]||i;return t?a.createElement(p,o(o({ref:n},u),{},{components:t})):a.createElement(p,o({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77875:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={title:"EngineConn Design",sidebar_position:3},o="EngineConn architecture design",l={unversionedId:"architecture/computation-governance-services/engine/engine-conn",id:"version-1.1.2/architecture/computation-governance-services/engine/engine-conn",isDocsHomePage:!1,title:"EngineConn Design",description:"EngineConn: Engine connector, a module that provides functions such as unified configuration management, context service, physical library, data source management, microservice management, and historical task query for other microservice modules.",source:"@site/versioned_docs/version-1.1.2/architecture/computation-governance-services/engine/engine-conn.md",sourceDirName:"architecture/computation-governance-services/engine",slug:"/architecture/computation-governance-services/engine/engine-conn",permalink:"/docs/1.1.2/architecture/computation-governance-services/engine/engine-conn",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.2/architecture/computation-governance-services/engine/engine-conn.md",tags:[],version:"1.1.2",sidebarPosition:3,frontMatter:{title:"EngineConn Design",sidebar_position:3},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"EngineConnPlugin (ECP) Design",permalink:"/docs/1.1.2/architecture/computation-governance-services/engine/engine-conn-plugin"},next:{title:"Job Submission",permalink:"/docs/1.1.2/architecture/computation-governance-services/job-submission-preparation-and-execution-process"}},c=[{value:"linkis-computation-engineconn interactive engine connector",id:"linkis-computation-engineconn-interactive-engine-connector",children:[]},{value:"linkis-engineconn-common engine connector common module",id:"linkis-engineconn-common-engine-connector-common-module",children:[]},{value:"The core logic of linkis-engineconn-core engine connector",id:"the-core-logic-of-linkis-engineconn-core-engine-connector",children:[]},{value:"linkis-engineconn-launch engine connector startup module",id:"linkis-engineconn-launch-engine-connector-startup-module",children:[]},{value:"The core logic of the linkis-executor-core executor",id:"the-core-logic-of-the-linkis-executor-core-executor",children:[]},{value:"linkis-callback-service callback logic",id:"linkis-callback-service-callback-logic",children:[]},{value:"linkis-accessible-executor can be accessed executor",id:"linkis-accessible-executor-can-be-accessed-executor",children:[]}],s={toc:c};function u(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"engineconn-architecture-design"},"EngineConn architecture design"),(0,r.kt)("p",null,"EngineConn: Engine connector, a module that provides functions such as unified configuration management, context service, physical library, data source management, microservice management, and historical task query for other microservice modules."),(0,r.kt)("p",null,"EngineConn architecture diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EngineConn",src:t(35983).Z})),(0,r.kt)("h1",{id:"introduction-to-the-second-level-module"},"Introduction to the second-level module:"),(0,r.kt)("h2",{id:"linkis-computation-engineconn-interactive-engine-connector"},"linkis-computation-engineconn interactive engine connector"),(0,r.kt)("p",null,"The ability to provide interactive computing tasks."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnTask"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the interactive computing tasks submitted to EngineConn")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ComputationExecutor"),(0,r.kt)("td",{parentName:"tr",align:null},"Defined interactive Executor, with interactive capabilities such as status query and task kill.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TaskExecutionService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides management functions for interactive computing tasks")))),(0,r.kt)("h2",{id:"linkis-engineconn-common-engine-connector-common-module"},"linkis-engineconn-common engine connector common module"),(0,r.kt)("p",null,"Define the most basic entity classes and interfaces in the engine connector. EngineConn is used to create a connection session for the underlying computing storage engine, which contains the session information between the engine and the specific cluster, and is the client that communicates with the specific engine."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Core function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineCreationContext"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the context information of EngineConn during startup")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConn"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the specific information of EngineConn, such as type, specific connection information with layer computing storage engine, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineExecution"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide Executor creation logic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnHook"),(0,r.kt)("td",{parentName:"tr",align:null},"Define the operations before and after each phase of engine startup")))),(0,r.kt)("h2",{id:"the-core-logic-of-linkis-engineconn-core-engine-connector"},"The core logic of linkis-engineconn-core engine connector"),(0,r.kt)("p",null,"Defines the interfaces involved in the core logic of EngineConn."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnManager"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide related interfaces for creating and obtaining EngineConn")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExecutorManager"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide related interfaces for creating and obtaining Executor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ShutdownHook"),(0,r.kt)("td",{parentName:"tr",align:null},"Define the operation of the engine shutdown phase")))),(0,r.kt)("h2",{id:"linkis-engineconn-launch-engine-connector-startup-module"},"linkis-engineconn-launch engine connector startup module"),(0,r.kt)("p",null,"Defines the logic of how to start EngineConn."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core class"),(0,r.kt)("th",{parentName:"tr",align:null},"core function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnServer"),(0,r.kt)("td",{parentName:"tr",align:null},"EngineConn microservice startup class")))),(0,r.kt)("h2",{id:"the-core-logic-of-the-linkis-executor-core-executor"},"The core logic of the linkis-executor-core executor"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"  Defines the core classes related to the actuator. The executor is a real computing scene executor, responsible for submitting user code to EngineConn.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Executor"),(0,r.kt)("td",{parentName:"tr",align:null},"It is the actual computational logic execution unit and provides a top-level abstraction of the various capabilities of the engine.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnAsyncEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines EngineConn-related asynchronous events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnSyncEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines EngineConn-related synchronization events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnAsyncListener"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines EngineConn related asynchronous event listener")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnSyncListener"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines EngineConn related synchronization event listener")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnAsyncListenerBus"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the listener bus for EngineConn asynchronous events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnSyncListenerBus"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the listener bus for EngineConn synchronization events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExecutorListenerBusContext"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the context of the EngineConn event listener")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LabelService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide label reporting function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ManagerService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides the function of information transfer with LinkisManager")))),(0,r.kt)("h2",{id:"linkis-callback-service-callback-logic"},"linkis-callback-service callback logic"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnCallback"),(0,r.kt)("td",{parentName:"tr",align:null},"Define EngineConn's callback logic")))),(0,r.kt)("h2",{id:"linkis-accessible-executor-can-be-accessed-executor"},"linkis-accessible-executor can be accessed executor"),(0,r.kt)("p",null,"Executor that can be accessed. You can interact with it through RPC requests to get its status, load, concurrency and other basic indicators Metrics data."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LogCache"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide log cache function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AccessibleExecutor"),(0,r.kt)("td",{parentName:"tr",align:null},"The Executor that can be accessed can interact with it through RPC requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NodeHealthyInfoManager"),(0,r.kt)("td",{parentName:"tr",align:null},"Manage Executor's Health Information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NodeHeartbeatMsgManager"),(0,r.kt)("td",{parentName:"tr",align:null},"Manage the heartbeat information of Executor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NodeOverLoadInfoManager"),(0,r.kt)("td",{parentName:"tr",align:null},"Manage Executor load information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Listener"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides events related to Executor and the corresponding listener definition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnTimedLock"),(0,r.kt)("td",{parentName:"tr",align:null},"Define Executor level lock")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AccessibleService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides the start-stop and status acquisition functions of Executor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExecutorHeartbeatService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides heartbeat related functions of Executor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LockService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide lock management function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LogService"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide log management functions")))))}u.isMDXComponent=!0},35983:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/engineconn-01-ae1b256647d437b3e9f9323b0c762e17.png"}}]);