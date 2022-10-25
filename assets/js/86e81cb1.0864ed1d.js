"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[31435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60707:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"Service isolation Design",sidebar_position:2},l=void 0,o={unversionedId:"architecture/microservice-governance-services/service_isolation",id:"version-1.2.0/architecture/microservice-governance-services/service_isolation",isDocsHomePage:!1,title:"Service isolation Design",description:"1. General",source:"@site/versioned_docs/version-1.2.0/architecture/microservice-governance-services/service_isolation.md",sourceDirName:"architecture/microservice-governance-services",slug:"/architecture/microservice-governance-services/service_isolation",permalink:"/docs/latest/architecture/microservice-governance-services/service_isolation",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.2.0/architecture/microservice-governance-services/service_isolation.md",tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{title:"Service isolation Design",sidebar_position:2},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"Gateway Design",permalink:"/docs/latest/architecture/microservice-governance-services/gateway"},next:{title:"Compile And Package",permalink:"/docs/latest/development/linkis-compile-and-package"}},s=[{value:"1. General",id:"1-general",children:[{value:"Requirements Background",id:"requirements-background",children:[]},{value:"Target",id:"target",children:[]}]},{value:"2. Design",id:"2-design",children:[{value:"2.1 Technical Architecture",id:"21-technical-architecture",children:[]},{value:"2.2 Business Architecture",id:"22-business-architecture",children:[]}]},{value:"3. Module Design",id:"3-module-design",children:[{value:"Core execution flow",id:"core-execution-flow",children:[]}]},{value:"4. DDL:",id:"4-ddl",children:[]},{value:"5. How to use:",id:"5-how-to-use",children:[{value:"add route label for entrance",id:"add-route-label-for-entrance",children:[]},{value:"Use route label",id:"use-route-label",children:[]},{value:"Use non-existing label",id:"use-non-existing-label",children:[]},{value:"without label",id:"without-label",children:[]}]},{value:"6. Non-functional design:",id:"6-non-functional-design",children:[{value:"6.1 Security",id:"61-security",children:[]},{value:"6.2 Performance",id:"62-performance",children:[]},{value:"6.3 Capacity",id:"63-capacity",children:[]},{value:"6.4 High Availability",id:"64-high-availability",children:[]}]}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-general"},"1. General"),(0,i.kt)("h3",{id:"requirements-background"},"Requirements Background"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","Linkis now performs load balancing based on the ribbon when it forwards services in the Gateway, but in some cases, there are some important business tasks that want to achieve service level isolation, if the service is based on the ribbon There will be problems in equilibrium. For example, tenant A wants his tasks to be routed to a specific Linkis-CG-Entrance service, so that when other instances are abnormal, the Entrance of service A will not be affected.\n","\xa0","\xa0","\xa0","\xa0","\xa0","In addition, tenants and isolation of support services can also quickly isolate an abnormal service and support scenarios such as grayscale upgrades."),(0,i.kt)("h3",{id:"target"},"Target"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Support forwarding the service according to the routing label by parsing the label of the request"),(0,i.kt)("li",{parentName:"ol"},"Tag Registration and Modification of Support Services")),(0,i.kt)("h2",{id:"2-design"},"2. Design"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","This feature adds two modules, linkis-mg-gateway and instance-label, which are mainly modified points, designed to add the forwarding logic of Gateway, and instance-label to support services and labels register."),(0,i.kt)("h3",{id:"21-technical-architecture"},"2.1 Technical Architecture"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","The overall technical architecture mainly modifies the point. The RestFul request needs to carry label parameter information such as routing label, and then the corresponding label will be parsed when the Gateway forwards to complete the route forwarding of the interface. The whole is shown in the figure below\n",(0,i.kt)("img",{alt:"arc",src:n(4920).Z})),(0,i.kt)("p",null,"A few notes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If there are multiple corresponding services marked with the same roteLabel, it will be forwarded randomly"),(0,i.kt)("li",{parentName:"ol"},"If the corresponding routeLabel does not have a corresponding service, the interface fails directly"),(0,i.kt)("li",{parentName:"ol"},"If the interface does not have a routeLabel, based on the original forwarding logic, it will not route to the service marked with a specific label")),(0,i.kt)("h3",{id:"22-business-architecture"},"2.2 Business Architecture"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","This feature is mainly to complete the Restful tenant isolation and forwarding function. The modules designed by the function point are as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Component name"),(0,i.kt)("th",{parentName:"tr",align:null},"First-level module"),(0,i.kt)("th",{parentName:"tr",align:null},"Second-level module"),(0,i.kt)("th",{parentName:"tr",align:null},"Function point"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Linkis"),(0,i.kt)("td",{parentName:"tr",align:null},"MG"),(0,i.kt)("td",{parentName:"tr",align:null},"Gateway"),(0,i.kt)("td",{parentName:"tr",align:null},"Parse the route label in the restful request parameters, and complete the forwarding function of the interface according to the route label")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Linkis"),(0,i.kt)("td",{parentName:"tr",align:null},"PS"),(0,i.kt)("td",{parentName:"tr",align:null},"InstanceLabel"),(0,i.kt)("td",{parentName:"tr",align:null},"InstanceLabel service, completes the association between services and labels")))),(0,i.kt)("h2",{id:"3-module-design"},"3. Module Design"),(0,i.kt)("h3",{id:"core-execution-flow"},"Core execution flow"),(0,i.kt)("p",null,"[Input]"," The input is the restful request requesting Gatway, and only the request with the roure label to be used in the parameter will be processed.\n","[Processing process]"," The Gateway will determine whether the request has a corresponding RouteLabel, and if it exists, it will be forwarded based on the RouteLabel.\nThe call sequence diagram is as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Time",src:n(20060).Z})),(0,i.kt)("h2",{id:"4-ddl"},"4. DDL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS `linkis_ps_instance_label`;\nCREATE TABLE `linkis_ps_instance_label` (\n  `id` int(20) NOT NULL AUTO_INCREMENT,\n  `label_key` varchar(32) COLLATE utf8_bin NOT NULL COMMENT 'string key',\n  `label_value` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'string value',\n  `label_feature` varchar(16) COLLATE utf8_bin NOT NULL COMMENT 'store the feature of label, but it may be redundant',\n  `label_value_size` int(20) NOT NULL COMMENT 'size of key -> value map',\n  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'update unix timestamp',\n  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'update unix timestamp',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `label_key_value` (`label_key`,`label_value`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\nDROP TABLE IF EXISTS `linkis_ps_instance_info`;\nCREATE TABLE `linkis_ps_instance_info` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `instance` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'structure like ${host|machine}:${port}',\n  `name` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'equal application name in registry',\n  `update_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'update unix timestamp',\n  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'create unix timestamp',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `instance` (`instance`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\nDROP TABLE IF EXISTS `linkis_ps_instance_label_relation`;\nCREATE TABLE `linkis_ps_instance_label_relation` (\n  `id` int(20) NOT NULL AUTO_INCREMENT,\n  `label_id` int(20) DEFAULT NULL COMMENT 'id reference linkis_ps_instance_label -> id',\n  `service_instance` varchar(128) NOT NULL COLLATE utf8_bin COMMENT 'structure like ${host|machine}:${port}',\n  `update_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'update unix timestamp',\n  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'create unix timestamp',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n")),(0,i.kt)("h2",{id:"5-how-to-use"},"5. How to use:"),(0,i.kt)("h3",{id:"add-route-label-for-entrance"},"add route label for entrance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'echo "spring.eureka.instance.metadata-map.route=et1" >> $LINKIS_CONF_DIR/linkis-cg-entrance.properties\nsh $LINKIS_HOME/sbin/linkis-damemon.sh restart cg-entrance\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Time",src:n(20060).Z})),(0,i.kt)("h3",{id:"use-route-label"},"Use route label"),(0,i.kt)("p",null,"submit task:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'url:/api/v1/entrance/submit\n{\n    "executionContent": {"code": "echo 1", "runType": "shell"},\n    "params": {"variable": {}, "configuration": {}},\n    "source": {"scriptPath": "ip"},\n    "labels": {\n        "engineType": "shell-1",\n        "userCreator": "peacewong-IDE",\n        "route": "et1"\n    }\n}\n')),(0,i.kt)("p",null,"will be routed to a fixed service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "method": "/api/entrance/submit",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "taskID": 45158,\n        "execID": "exec_id018030linkis-cg-entrancelocalhost:9205IDE_peacewong_shell_0"\n    }\n}\n')),(0,i.kt)("p",null,"or linkis-cli:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'sh bin/linkis-cli -submitUser hadoop -engineType shell-1 -codeType shell -code "whoami" -labelMap route=et1 --gatewayUrl http://127.0.0.1:9101\n')),(0,i.kt)("h3",{id:"use-non-existing-label"},"Use non-existing label"),(0,i.kt)("p",null,"submit task:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'url:/api/v1/entrance/submit\n{\n    "executionContent": {"code": "echo 1", "runType": "shell"},\n    "params": {"variable": {}, "configuration": {}},\n    "source": {"scriptPath": "ip"},\n    "labels": {\n        "engineType": "shell-1",\n        "userCreator": "peacewong-IDE",\n        "route": "et1"\n    }\n}\n')),(0,i.kt)("p",null,"will get the error"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "method": "/api/rest_j/v1/entrance/submit",\n    "status": 1,\n    "message": "GatewayErrorException: errCode: 11011 ,desc: Cannot route to the corresponding service, URL: /api/rest_j/v1/entrance/submit RouteLabel: [{\\"stringValue\\":\\"et2\\",\\" labelKey\\":\\"route\\",\\"feature\\":null,\\"modifiable\\":true,\\"featureKey\\":\\"feature\\",\\"empty\\":false}] ,ip: localhost ,port: 9101 ,serviceKind: linkis-mg-gateway",\n    "data": {\n        "data": "{\\r\\n \\"executionContent\\": {\\"code\\": \\"echo 1\\", \\"runType\\": \\"shell\\"},\\r\\n \\"params \\": {\\"variable\\": {}, \\"configuration\\": {}},\\r\\n \\"source\\": {\\"scriptPath\\": \\"ip\\"},\\r\\ n \\"labels\\": {\\r\\n \\"engineType\\": \\"shell-1\\",\\r\\n \\"userCreator\\": \\"peacewong-IDE\\",\\r\\n \\" route\\": \\"et2\\"\\r\\n }\\r\\n}"\n    }\n}\n')),(0,i.kt)("h3",{id:"without-label"},"without label"),(0,i.kt)("p",null,"submit task:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'url:/api/v1/entrance/submit\n{\n    "executionContent": {"code": "echo 1", "runType": "shell"},\n    "params": {"variable": {}, "configuration": {}},\n    "source": {"scriptPath": "ip"},\n    "labels": {\n        "engineType": "shell-1",\n        "userCreator": "peacewong-IDE"\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\nwill route to untagged entranceservices\n{\n    "method": "/api/entrance/submit",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "taskID": 45159,\n        "execID": "exec_id018018linkis-cg-entrancelocalhost2:9205IDE_peacewong_shell_0"\n    }\n}\n\n')),(0,i.kt)("h2",{id:"6-non-functional-design"},"6. Non-functional design:"),(0,i.kt)("h3",{id:"61-security"},"6.1 Security"),(0,i.kt)("p",null,"No security issues are involved, restful requires login authentication"),(0,i.kt)("h3",{id:"62-performance"},"6.2 Performance"),(0,i.kt)("p",null,"It has little impact on Gateway forwarding performance, and caches the corresponding label and instance data"),(0,i.kt)("h3",{id:"63-capacity"},"6.3 Capacity"),(0,i.kt)("p",null,"not involving"),(0,i.kt)("h3",{id:"64-high-availability"},"6.4 High Availability"),(0,i.kt)("p",null,"not involving"))}u.isMDXComponent=!0},4920:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/service_isolation_arc-26d9a3fbd9716c27367293e47738ff13.png"},20060:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/service_isolation_time-537a90a7dc1d8cb4531074f4fdecce12.png"}}]);