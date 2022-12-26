"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[43837],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=p(t),u=i,g=k["".concat(o,".").concat(u)]||k[u]||d[u]||r;return t?a.createElement(g,s(s({ref:n},c),{},{components:t})):a.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[k]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},37450:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=t(87462),i=(t(67294),t(3905));const r={title:"Involve SkyWaling into Linkis",sidebar_position:7},s=void 0,l={unversionedId:"deployment/involve-skywalking-into-linkis",id:"version-1.1.1/deployment/involve-skywalking-into-linkis",isDocsHomePage:!1,title:"Involve SkyWaling into Linkis",description:"This article describes how to enable SkyWalking when starting the Linkis service to facilitate subsequent distributed trace and troubleshooting.",source:"@site/versioned_docs/version-1.1.1/deployment/involve-skywalking-into-linkis.md",sourceDirName:"deployment",slug:"/deployment/involve-skywalking-into-linkis",permalink:"/docs/1.1.1/deployment/involve-skywalking-into-linkis",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.1/deployment/involve-skywalking-into-linkis.md",tags:[],version:"1.1.1",sidebarPosition:7,frontMatter:{title:"Involve SkyWaling into Linkis",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Linkis Console Deployment",permalink:"/docs/1.1.1/deployment/web-install"},next:{title:"DataSource",permalink:"/docs/1.1.1/deployment/start-metadatasource"}},o=[{value:"1. Introduction to SkyWalking",id:"1-introduction-to-skywalking",children:[{value:"1.1 What is SkyWalking",id:"11-what-is-skywalking",children:[]},{value:"1.2 SkyWalking Architecture",id:"12-skywalking-architecture",children:[]}]},{value:"2. Deploy the SkyWalking backend",id:"2-deploy-the-skywalking-backend",children:[]},{value:"3. Linkis service start and enable SkyWalking",id:"3-linkis-service-start-and-enable-skywalking",children:[]},{value:"4. Result display",id:"4-result-display",children:[]}],p={toc:o};function c(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article describes how to enable SkyWalking when starting the Linkis service to facilitate subsequent distributed trace and troubleshooting."),(0,i.kt)("h2",{id:"1-introduction-to-skywalking"},"1. Introduction to SkyWalking"),(0,i.kt)("h3",{id:"11-what-is-skywalking"},"1.1 What is SkyWalking"),(0,i.kt)("p",null,"SkyWalking is an open source observability platform used to collect, analyze, aggregate and visualize data from services and cloud native infrastructures. SkyWalking provides an easy way to maintain a clear view of your distributed systems, even across Clouds. It is a modern APM, specially designed for cloud native, container based distributed systems."),(0,i.kt)("h3",{id:"12-skywalking-architecture"},"1.2 SkyWalking Architecture"),(0,i.kt)("p",null,"The following figure is the overall architecture of SkyWalking."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(4086).Z})),(0,i.kt)("p",null,"SkyWalking is logically split into four parts: Probes, Platform backend, Storage and UI."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Probe"),"s collect data and reformat them for SkyWalking requirements (different probes support different sources)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Platform backend")," supports data aggregation, analysis and streaming process covers traces, metrics, and logs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Storage")," houses SkyWalking data through an open/plugable interface. You can choose an existing implementation, such as ElasticSearch, H2, MySQL, TiDB, InfluxDB, or implement your own. Patches for new storage implementors welcome!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"UI")," is a highly customizable web based interface allowing SkyWalking end users to visualize and manage SkyWalking data.")),(0,i.kt)("p",null,"Using SkyWalking in Linkis requires that the user already has the Backend service and the corresponding Storage. The Probe can be integrated when the Linkis service is started. There are three main ways of Probe integration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Language based native agent"),". These agents run in target service user spaces, such as a part of user codes. For example, the SkyWalking Java agent uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"-javaagent")," command line argument to manipulate codes in runtime, where ",(0,i.kt)("inlineCode",{parentName:"li"},"manipulate")," means to change and inject user\u2019s codes. Another kind of agents uses certain hook or intercept mechanism provided by target libraries. As you can see, these agents are based on languages and libraries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Service Mesh probes"),". Service Mesh probes collect data from sidecar, control plane in service mesh or proxy. In the old days, proxy is only used as an ingress of the whole cluster, but with the Service Mesh and sidecar, we can now perform observability functions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"3rd-party instrument library"),". SkyWalking accepts many widely used instrument libraries data formats. It analyzes the data, transfers it to SkyWalking\u2019s formats of trace, metrics or both. This feature starts with accepting Zipkin span data. See ",(0,i.kt)("a",{parentName:"li",href:"https://skywalking.apache.org/docs/main/latest/en/setup/backend/zipkin-trace"},"Receiver for Zipkin traces")," for more information.")),(0,i.kt)("p",null,"We used ",(0,i.kt)("strong",{parentName:"p"},"Language based native agent")," when Linkis integrated SkyWalking, that is, the method of java agent. Below we will show you how to enable SkyWalking in Linkis service."),(0,i.kt)("h2",{id:"2-deploy-the-skywalking-backend"},"2. Deploy the SkyWalking backend"),(0,i.kt)("p",null,"The SkyWalking backend is a prerequisite for enabling SkyWalk. The following is a brief demonstration of how to install the SkyWalking backend."),(0,i.kt)("p",null,"First download SkyWalking APM from SkyWalking's ",(0,i.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/downloads/"},"Downloads")," page."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(16028).Z})),(0,i.kt)("p",null,"After downloading, unzip it directly, and we get the following directory structure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls\nbin config config-examples LICENSE licenses logs NOTICE oap-libs README.txt tools webapp\n")),(0,i.kt)("p",null,"The backend uses the H2 in-memory database as the backend storage by default, and does not need to modify the configuration. Start as follows."),(0,i.kt)("p",null,"Start Backend"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash bin/startup.sh\n")),(0,i.kt)("p",null,"Start WebApp"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash bin/webappService.sh\n")),(0,i.kt)("p",null,"The UI starts on port 8080 by default. You can also modify the listening port by modifying the webapp.yml file in the webapp directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 8080\n\nspring:\n  cloud:\n    gateway:\n      routes:\n        - id: oap-route\n          uri: lb://oap-service\n          predicates:\n            - Path=/graphql/**\n    discovery:\n      client:\n        simple:\n          instances:\n            oap-service:\n              - uri: http://127.0.0.1:12800\n            # - uri: http://<oap-host-1>:<oap-port1>\n            # - uri: http://<oap-host-2>:<oap-port2>\n\n  mvc:\n    throw-exception-if-no-handler-found: true\n\n  web:\n    resources:\n      add-mappings: true\n\nmanagement:\n  server:\n    base-path: /manage\n")),(0,i.kt)("h2",{id:"3-linkis-service-start-and-enable-skywalking"},"3. Linkis service start and enable SkyWalking"),(0,i.kt)("p",null,"It is assumed here that the service deployment of Linkis is relatively clear. If it is not clear, it can be asynchronous:"),(0,i.kt)("p",null,"To start SkyWalking in Linkis, you first need to download the Java agent of SkyWalking, we can download it from the ",(0,i.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/downloads/"},"Downloads")," page."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(98970).Z})),(0,i.kt)("p",null,"After downloading, unzip it directly, the internal file structure is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tree skywalking-agent\n$ skywalking-agent\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 NOTICE\n\u251c\u2500\u2500 activations\n\u2502 \u251c\u2500\u2500 apm-toolkit-kafka-activation-8.8.0.jar\n\u2502 \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 bootstrap-plugins\n\u2502 \u251c\u2500\u2500 apm-jdk-http-plugin-8.8.0.jar\n\u2502 \u2514\u2500\u2500 apm-jdk-threading-plugin-8.8.0.jar\n\u251c\u2500\u2500 config\n\u2502 \u2514\u2500\u2500 agent.config\n\u251c\u2500\u2500 licenses\n\u2502 \u2514\u2500\u2500 LICENSE-asm.txt\n\u251c\u2500\u2500 logs\n\u251c\u2500\u2500 optional-plugins\n\u2502 \u251c\u2500\u2500 apm-customize-enhance-plugin-8.8.0.jar\n\u2502 \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 optional-reporter-plugins\n\u2502 \u251c\u2500\u2500 kafka-reporter-plugin-8.8.0.jar\n\u2502 \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 plugins\n\u2502 \u251c\u2500\u2500 apm-activemq-5.x-plugin-8.8.0.jar\n\u2502 \u251c\u2500\u2500 ...\n\u2514\u2500\u2500 skywalking-agent.jar\n\n")),(0,i.kt)("p",null,"Modify the configuration item ",(0,i.kt)("inlineCode",{parentName:"p"},"SKYWALKING_AGENT_PATH")," in linkis-env.sh of Linkis. Set it to the path to ",(0,i.kt)("inlineCode",{parentName:"p"},"skywalking-agent.jar"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"SKYWALKING_AGENT_PATH=/path/to/skywalking-agent.jar\n")),(0,i.kt)("p",null,"Then start Linkis."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash linkis-start-all.sh\n")),(0,i.kt)("h2",{id:"4-result-display"},"4. Result display"),(0,i.kt)("p",null,"The UI port of Linkis starts at port 8080 by default. After Linkis opens SkyWalking and opens the UI, if you can see the following picture, it means success."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(62063).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(6699).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(36670).Z})))}c.isMDXComponent=!0},16028:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/SkyWalking_APM_Download-8d74253784919cf585ceaac291eb7ea4.png"},98970:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/SkyWalking_Agent_Download-74a7666cd2ff6d33cfa8862ce341bc01.png"},4086:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/SkyWalking_Architecture-24ff5ca3454b0bbd684f10e594af7378.png"},36670:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/SkyWalking_Topology-9f1a2d3d9626efa5dc1c6f03edf52e32.png"},62063:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/SkyWalking_UI_Dashboard-c7fdd2d1476e627e822105e72f53bf99.png"},6699:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/SkyWalking_UI_Dashboard2-e02aa14b783823a4839c991f59f16121.png"}}]);