"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[67285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62797:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Division of Microservices",sidebar_position:11},l=void 0,o={unversionedId:"microservice-division",id:"microservice-division",isDocsHomePage:!1,title:"Division of Microservices",description:"Introduction to service",source:"@site/community/microservice-division.md",sourceDirName:".",slug:"/microservice-division",permalink:"/community/microservice-division",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/community/microservice-division.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Division of Microservices",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"How to Write Unit Test Code",permalink:"/community/how-to-write-unit-test-code"},next:{title:"Site Map",permalink:"/community/site-map"}},c=[{value:"Introduction to service",id:"introduction-to-service",children:[]},{value:"Basic terms explained",id:"basic-terms-explained",children:[]}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction-to-service"},"Introduction to service"),(0,r.kt)("p",null,"Linkis is developed based on the microservice architecture, and its services can be divided into 3 types of service groups (groups): computing governance service group, public enhancement service group and microservice governance service group."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Computation Governance Services: The core service for processing tasks, supporting the 3 main stages of the computing task/request processing flow (submit->prepare->execute);"),(0,r.kt)("li",{parentName:"ul"},"Public Enhancement Services: Provide basic support services, including context services, engine/udf material management services, historical tasks and other public services and data source management services;"),(0,r.kt)("li",{parentName:"ul"},"Microservice Governance Services: Customized Spring Cloud Gateway, Eureka. Provides a base for microservices.")),(0,r.kt)("p",null,"The microservices included in each service group (group) are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Belonging to the microservice group (group)"),(0,r.kt)("th",{parentName:"tr",align:null},"Service name"),(0,r.kt)("th",{parentName:"tr",align:null},"Main functions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MGS"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-mg-eureka"),(0,r.kt)("td",{parentName:"tr",align:null},"Responsible for service registration and discovery, other upstream components will also reuse the linkis registry, such as dss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MGS"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-mg-gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"As the gateway entrance of Linkis, it is mainly responsible for request forwarding and user access authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CGS"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-cg-entrance"),(0,r.kt)("td",{parentName:"tr",align:null},"The task submission entry is a service responsible for receiving, scheduling, forwarding execution requests, and life cycle management of computing tasks, and can return calculation results, logs, and progress to the caller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CGS"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-cg-linkismanager"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides AppManager (application management), ResourceManager (resource management), LabelManager (label management) capabilities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CGS"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-cg-engineconnplugin"),(0,r.kt)("td",{parentName:"tr",align:null},"The engine connector plug-in provides the basic function support for freely extending the Linkis engine, and allows the introduction of new engines into the execution life cycle of computing middleware by implementing the established plug-in interfaces, enabling new engines to be implemented Rapid Deployment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CGS"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"The manager of EngineConn, which provides the life cycle management of the engine, and reports the load information and its own health status to the ResourceManager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CGS"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-cg-engineconn"),(0,r.kt)("td",{parentName:"tr",align:null},"is the actual connection service with the underlying computing storage engine (Hive/Spark), and contains session information with the actual engine. For the underlying computing storage engine, it acts as a client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PES"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-ps-publicservice"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide functions such as unified configuration management, context service, BML material library, data source management, microservice management and historical task query for other microservice modules")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PES"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-ps-cs"),(0,r.kt)("td",{parentName:"tr",align:null},"Context service, solving a data application development process, data and information sharing across multiple services")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PES"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"Only provides metadata query service Provides the basic query function of database data metadata, provides http interface externally, and provides rpc service internally, which is convenient for the data source management module to call through rpc to conduct Data source connection test")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PES"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"Data source management service Perform basic management of data sources, and provide http interfaces such as adding, querying, modifying, and connection testing of external data sources. The rpc service is provided internally, which is convenient for the data element management module to call through rpc and query the necessary information needed to establish a connection to the database")))),(0,r.kt)("h2",{id:"basic-terms-explained"},"Basic terms explained"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Introduction"),(0,r.kt)("th",{parentName:"tr",align:null},"Full name in English"),(0,r.kt)("th",{parentName:"tr",align:null},"Full name in Chinese"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CG/cg"),(0,r.kt)("td",{parentName:"tr",align:null},"Computation Governance"),(0,r.kt)("td",{parentName:"tr",align:null},"Computation Governance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MG/mg"),(0,r.kt)("td",{parentName:"tr",align:null},"Microservice Governance"),(0,r.kt)("td",{parentName:"tr",align:null},"Microservice Governance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PS/ps"),(0,r.kt)("td",{parentName:"tr",align:null},"Public Service"),(0,r.kt)("td",{parentName:"tr",align:null},"Public Service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CS/cs"),(0,r.kt)("td",{parentName:"tr",align:null},"Context Service"),(0,r.kt)("td",{parentName:"tr",align:null},"Unified Context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DSS/dss"),(0,r.kt)("td",{parentName:"tr",align:null},"DataSphere Studio"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Application Integrated Development Framework")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EC/ec"),(0,r.kt)("td",{parentName:"tr",align:null},"EngineConn"),(0,r.kt)("td",{parentName:"tr",align:null},"Engine Connector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ECM/ecm"),(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnManager"),(0,r.kt)("td",{parentName:"tr",align:null},"Management of Engine Connectors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ECP/ecp"),(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnPlugin"),(0,r.kt)("td",{parentName:"tr",align:null},"Engine Connector Plugin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RM/rm"),(0,r.kt)("td",{parentName:"tr",align:null},"ResourceManager"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource manager for managing node resources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PES/pes"),(0,r.kt)("td",{parentName:"tr",align:null},"Public Enhancement Services"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DMS/dms"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Source Manager Service"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Source Management Service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MDS/mds"),(0,r.kt)("td",{parentName:"tr",align:null},"MetaData Manager Service"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata Management Service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BML/bml"),(0,r.kt)("td",{parentName:"tr",align:null},"BigData Material library"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UJES"),(0,r.kt)("td",{parentName:"tr",align:null},"Unified Job Execute Service"),(0,r.kt)("td",{parentName:"tr",align:null},"Unified Job Execute Service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DDL/ddl"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Definition Language"),(0,r.kt)("td",{parentName:"tr",align:null},"Database Definition Language")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DML/dml"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Manipulation Language"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Manipulation Language")))))}m.isMDXComponent=!0}}]);