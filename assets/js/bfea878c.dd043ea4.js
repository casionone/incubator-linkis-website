"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[62316],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),k=o,b=p["".concat(s,".").concat(k)]||p[k]||d[k]||i;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},26718:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"WebSocket Request",sidebar_position:2},s=void 0,l={unversionedId:"architecture/websocket",id:"version-0.11.0/architecture/websocket",isDocsHomePage:!1,title:"WebSocket Request",description:"Gateway's multi-WebSocket request forward implementation",source:"@site/versioned_docs/version-0.11.0/architecture/websocket.md",sourceDirName:"architecture",slug:"/architecture/websocket",permalink:"/docs/0.11.0/architecture/websocket",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/architecture/websocket.md",tags:[],version:"0.11.0",sidebarPosition:2,frontMatter:{title:"WebSocket Request",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"RM design",permalink:"/docs/0.11.0/architecture/rm"},next:{title:"Asynchronous Log Live Push",permalink:"/docs/0.11.0/architecture/commons/real-time-log-push"}},u=[{value:"1 feature point",id:"1-feature-point",children:[]},{value:"2 Zuul&#39;s Bug",id:"2-zuuls-bug",children:[]},{value:"3 Spring Cloud Gateway Limitations",id:"3-spring-cloud-gateway-limitations",children:[]},{value:"4 Linkis Solution",id:"4-linkis-solution",children:[{value:"4.1 WebSocket Receiver",id:"41-websocket-receiver",children:[]},{value:"4.2 Rulers",id:"42-rulers",children:[]},{value:"4.3 WebSocket transponder",id:"43-websocket-transponder",children:[]}]}],d={toc:u};function p(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Gateway's multi-WebSocket request forward implementation")),(0,i.kt)("h2",{id:"1-feature-point"},"1 feature point"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Frontend Client and Background WebSocket Microservice more than 1 N support")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WebSocket Channel All Life Cycle Management"))),(0,i.kt)("h2",{id:"2-zuuls-bug"},"2 Zuul's Bug"),(0,i.kt)("p",null,"Forward WebSocket request is not supported at all."),(0,i.kt)("h2",{id:"3-spring-cloud-gateway-limitations"},"3 Spring Cloud Gateway Limitations"),(0,i.kt)("p",null,"A WebSocket client can only forward the request to a specific background service and cannot complete a WebSocket client via the gateway API to multiple WebSocket microservices."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Limitations of Spring Cloud Gateway",src:n(63367).Z})),(0,i.kt)("h2",{id:"4-linkis-solution"},"4 Linkis Solution"),(0,i.kt)("p",null,"Linkis implemented in Spring Cloud Gateway in WebSocket router transponder to set up WebSocket connections with clients and automatically analyze client WebSocket requests and pass rules to which backend microservice the request is forwarded to the corresponding backend service instance."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Linkis&#39;s Gateway Scheme",src:n(88577).Z})),(0,i.kt)("p",null,"WebSocket router transponder to build up WebSocket requests for clients, down to multiple WebSocket microservice instances for back-end backenders. In order to implement WebSocket request based on rules to forward clients, the architecture of WebSocket router transponder is\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"WebSocket router schema",src:n(72138).Z})),(0,i.kt)("h3",{id:"41-websocket-receiver"},"4.1 WebSocket Receiver"),(0,i.kt)("p",null,"1) WebSocket receiver is a global filter for Spring Cloud Gateway, which receives client's WebSocket connection request and creates a 1-WebSocket channel for client communication with Spring Cloud Gateway."),(0,i.kt)("p",null,"2) At the same time, it listens to the WebSocket channel, sends clients to send incoming requests, obtain essential basic information (such as requests to addresses, uri and users), provide a simple encapsulation and pass to the rulers for processing."),(0,i.kt)("h3",{id:"42-rulers"},"4.2 Rulers"),(0,i.kt)("p",null,"1) Rulers receive a notification from WebSocket Recipient, start processing using rules"),(0,i.kt)("p",null,"2) URL Ruler"),(0,i.kt)("p",null,"Linkis defines the client's requested text frame (TextWebSocketFrame) as a JSON string for the following\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"\"{'method': '/api/v1/${service}/${uriPath}', 'data': '}\"\n")),(0,i.kt)("p",null," where:"),(0,i.kt)("p",null," This method is the actual request URI, the previous /api fixed as an API request, v1 refers to the version of the API, service is the name of the requested service, uriPath is the actual request URI."),(0,i.kt)("p",null," Data is actual requested data."),(0,i.kt)("p",null," Get service information by parsing method, pass to step 4."),(0,i.kt)("p",null,"3) If the client requests a text frame (TextWebSocketFrame) does not conform to the standard format of the URL Ruler or if the URL Ruler cannot parse service information, then load the user-defined rule to parse service. If all custom rulers cannot parse service messages, then a solution error will be dropped to the client directly; otherwise service information will be passed to the next step directly"),(0,i.kt)("p",null,"4) Access to service information by step 2 or step 3, when the ruler obtains a list of all healthy microservices from the discovery service (e.g. Eureka), finds all examples of the microservice and selects one of the smallest payload instance to the WebSocket transponder by means of a load equilibrium approach."),(0,i.kt)("h3",{id:"43-websocket-transponder"},"4.3 WebSocket transponder"),(0,i.kt)("p",null,"The WebSocket Forwarders are distributed as WebSocket Manager and WebSocket Request Forwarder."),(0,i.kt)("p",null,"1) WebSocket Manager"),(0,i.kt)("p",null,"The WebSocket Manager is responsible for managing the 1-to-1WebSocket connection channel between clients and WebSocket receivers, and the 1-to-multiWebSocket connection channel between WebSocket transponder and backend microservice instances."),(0,i.kt)("p",null,"If the client disconnects with WebSocket receiver, the WebSocket Manager will immediately disconnect all related WebSocket transponders from the backend microservice instance by 1 to/multi-WebSocket;"),(0,i.kt)("p",null,"At the same time, in order to keep all WebSocket transponders and backend microservice instances from being freed for being idle, the WebSocket Manager will always send the backend microservice instance for PingWebSocketFrame."),(0,i.kt)("p",null,"2) WebSocket Request Rotor"),(0,i.kt)("p",null,"WebSocket Request Forwarders get microservice instance information from the Ruler"),(0,i.kt)("p",null,"Here you need to take note of the distinction between service and service instances\uff1aa microservice has multiple instances. Each instance has exactly the same functionality."),(0,i.kt)("p",null,"Seek from the WebSocket Manager for the client and the microservice service if there is already a WebSocket transponder to the WebSocket connection channel of the microservice and, if it exists, use the webSocket connection channel to forward the client's request text frame (TextWebSocketFrame); otherwise, create a completely new webSocket connection for the client and this microservice instance and bind the new WebSocket connection and the client to the WebSocket receiver 1 for the 1 WebSocket connection to the web Socket, and then push the information back to the client via the link between the client and the WebSocket receiver."))}p.isMDXComponent=!0},88577:function(e,t,n){t.Z=n.p+"assets/images/gateway-c4db1465125ec63afcace275841398aa.png"},63367:function(e,t,n){t.Z=n.p+"assets/images/spring_cloud_gateway-5250ad1ad9a0d2edae087f6b20263567.png"},72138:function(e,t,n){t.Z=n.p+"assets/images/websocket-e5769a175829ee32b9f1a99a510597d9.png"}}]);