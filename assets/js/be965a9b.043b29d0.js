"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[28448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={title:"Cluster Deployment",sidebar_position:2},i="Introduction to Distributed Deployment Scheme",o={unversionedId:"deployment/cluster-deployment",id:"version-1.0.2/deployment/cluster-deployment",title:"Cluster Deployment",description:"Linkis's stand-alone deployment is simple, but it cannot be used in a production environment, because too many processes on the same server will make the server too stressful. The choice of deployment plan is related to the company's user scale, user habits, and the number of simultaneous users of the cluster. Generally speaking, we will choose the deployment method based on the number of simultaneous users using Linkis and the user's preference for the execution engine.",source:"@site/versioned_docs/version-1.0.2/deployment/cluster-deployment.md",sourceDirName:"deployment",slug:"/deployment/cluster-deployment",permalink:"/docs/1.0.2/deployment/cluster-deployment",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/deployment/cluster-deployment.md",tags:[],version:"1.0.2",sidebarPosition:2,frontMatter:{title:"Cluster Deployment",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Quick Deployment",permalink:"/docs/1.0.2/deployment/quick-deploy"},next:{title:"EngineConnPlugin Installation",permalink:"/docs/1.0.2/deployment/engine-conn-plugin-installation"}},s={},m=[{value:"1.Multi-node deployment method reference",id:"1multi-node-deployment-method-reference",level:2},{value:"2.Linkis microservices distributed deployment configuration parameters",id:"2linkis-microservices-distributed-deployment-configuration-parameters",level:2}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-distributed-deployment-scheme"},"Introduction to Distributed Deployment Scheme"),(0,r.kt)("p",null,"Linkis's stand-alone deployment is simple, but it cannot be used in a production environment, because too many processes on the same server will make the server too stressful. The choice of deployment plan is related to the company's user scale, user habits, and the number of simultaneous users of the cluster. Generally speaking, we will choose the deployment method based on the number of simultaneous users using Linkis and the user's preference for the execution engine."),(0,r.kt)("h2",{id:"1multi-node-deployment-method-reference"},"1.Multi-node deployment method reference"),(0,r.kt)("p",null,"Linkis1.0 still maintains the SpringCloud-based microservice architecture, in which each microservice supports multiple active deployment schemes. Of course, different microservices play different roles in the system. Some microservices are called frequently, and more It may be in a high load situation. *",(0,r.kt)("em",{parentName:"p"},"On the machine where EngineConnManager is installed, the memory load of the machine will be relatively high because the user's engine process will be started, and the load of other types of microservices on the machine will be relatively low.")," *For this kind of microservices, we recommend starting multiple distributed deployments. The total resources dynamically used by Linkis can be calculated as follows."),(0,r.kt)("p",null,"EngineConnManager Total resources used = total memory + total number of cores =\nNumber of people online at the same time ","*"," (All types of engines occupy memory) ","*","maximum concurrency per user + number of people online at the same time ","*","\n(total memory occupied by all types of engine conns) ","*","maximum concurrency per user"),(0,r.kt)("p",null,"For example, when only spark, hive, and python engines are used and the maximum concurrency of a single user is 1, 50 people are used at the same time, Spark's driver memory is 1G, and Hive\nClient memory 1G, python client 1G, each engine uses 1 core, then it is 50 ","*","(1+1+1)G ","*","\n1 + 50 ","*","(1+1+1) cores","*","1 = 150G memory + 150 CPU cores."),(0,r.kt)("p",null,"During distributed deployment, the memory occupied by the microservice itself can be calculated according to each 2G memory. In the case of a large number of users, it is recommended to increase the memory of ps-publicservice to 6G, and it is recommended to reserve 10G of memory as a buffer.\nThe following configuration assumes that ",(0,r.kt)("strong",{parentName:"p"},"each user starts two engines at the same time as an example"),". ",(0,r.kt)("strong",{parentName:"p"},"For a machine with 64G memory"),", the reference configuration is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"10-50 people online at the same time")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Server configuration recommended")," 4 servers, named S1, S2, S3, S4")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1, S2"),(0,r.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S3, S4"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka high availability deployment")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"50-100 people online at the same time")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Server configuration recommendation"),": 6 servers, named S1, S2, S3, S4, S5, S6")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1-S4"),(0,r.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S5, S6"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka high availability deployment")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The number of simultaneous users 100-300")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Recommended server configuration"),": 12 servers, named S1, S2...S12"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1-S10"),(0,r.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S11, S12"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka high availability deployment")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"300-500 people at the same time")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Server configuration recommendation"),": 20 servers, named S1, S2...S20")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1-S18"),(0,r.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S19, S20"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka high-availability deployment, some microservices can be expanded if the request volume is tens of thousands, and the current active-active deployment can support thousands of users in the industry")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"More than 500 users at the same time (estimated based on 800 people online at the same time)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Server configuration recommendation"),": 34 servers, named S1, S2...S34")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1-S32"),(0,r.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S33, S34"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka high-availability deployment, some microservices can be expanded if the request volume is tens of thousands, and the current active-active deployment can support thousands of users in the industry")))),(0,r.kt)("h2",{id:"2linkis-microservices-distributed-deployment-configuration-parameters"},"2.Linkis microservices distributed deployment configuration parameters"),(0,r.kt)("p",null,"In linkis1.0, we have optimized and integrated the startup parameters. Some important startup parameters of each microservice are loaded through the conf/linkis-env.sh file, such as the microservice IP, port, registry address, etc. The way to modify the parameters has changed a little. Take the active-active deployment of the machines ",(0,r.kt)("strong",{parentName:"p"},"server1 and server2")," as an example, in order to allow eureka to register with each other."),(0,r.kt)("p",null,"On the server1 machine, you need to change the value in ",(0,r.kt)("strong",{parentName:"p"},"conf/linkis-env.sh")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EUREKA_URL=http://$EUREKA_INSTALL_IP:$EUREKA_PORT/eureka/")),(0,r.kt)("p",null,"change into:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EUREKA_URL=http://$EUREKA_INSTALL_IP:$EUREKA_PORT/eureka/,http:/server2:port/eureka/")),(0,r.kt)("p",null,"In the same way, on the server2 machine, you need to change the value in ",(0,r.kt)("strong",{parentName:"p"},"conf/linkis-env.sh")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EUREKA_URL=http://$EUREKA_INSTALL_IP:$EUREKA_PORT/eureka/")),(0,r.kt)("p",null,"change into:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EUREKA_URL=http://$EUREKA_INSTALL_IP:$EUREKA_PORT/eureka/,http:/server1:port/eureka/")),(0,r.kt)("p",null,"After the modification, start the microservice, enter the eureka registration interface from the web side, you can see that the microservice has been successfully registered to eureka, and the DS\nReplicas will also display the replica nodes adjacent to the cluster."))}u.isMDXComponent=!0}}]);