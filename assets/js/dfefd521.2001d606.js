"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[49495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=i,g=h["".concat(c,".").concat(p)]||h[p]||d[p]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},89205:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"EngineConn History Features",sidebar_position:5,tags:["Feature"]},o=void 0,s={unversionedId:"architecture/computation-governance-services/engine/engine-conn-history",id:"version-1.2.0/architecture/computation-governance-services/engine/engine-conn-history",isDocsHomePage:!1,title:"EngineConn History Features",description:"1. Functional requirements",source:"@site/versioned_docs/version-1.2.0/architecture/computation-governance-services/engine/engine-conn-history.md",sourceDirName:"architecture/computation-governance-services/engine",slug:"/architecture/computation-governance-services/engine/engine-conn-history",permalink:"/docs/latest/architecture/computation-governance-services/engine/engine-conn-history",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.2.0/architecture/computation-governance-services/engine/engine-conn-history.md",tags:[{label:"Feature",permalink:"/docs/latest/tags/feature"}],version:"1.2.0",sidebarPosition:5,frontMatter:{title:"EngineConn History Features",sidebar_position:5,tags:["Feature"]},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"Start  engineConn",permalink:"/docs/latest/architecture/computation-governance-services/engine/add-an-engine-conn"},next:{title:"EngineConn Metrics reporting feature",permalink:"/docs/latest/architecture/computation-governance-services/engine/engine-conn-metrics"}},c=[{value:"1. Functional requirements",id:"1-functional-requirements",children:[{value:"1.1 Requirement Background",id:"11-requirement-background",children:[]},{value:"1.2 Goals",id:"12-goals",children:[]}]},{value:"2. Overall Design",id:"2-overall-design",children:[{value:"2.1 Technical Architecture",id:"21-technical-architecture",children:[]},{value:"2.2 Business Architecture",id:"22-business-architecture",children:[]}]},{value:"3. Module Design",id:"3-module-design",children:[{value:"Core execution flow",id:"core-execution-flow",children:[]}]},{value:"4. Data structure:",id:"4-data-structure",children:[]},{value:"5. Interface Design",id:"5-interface-design",children:[]},{value:"6. Non-functional design",id:"6-non-functional-design",children:[{value:"6.1 Security",id:"61-security",children:[]},{value:"6.2 Performance",id:"62-performance",children:[]},{value:"6.3 Capacity",id:"63-capacity",children:[]},{value:"6.4 High Availability",id:"64-high-availability",children:[]}]}],l={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-functional-requirements"},"1. Functional requirements"),(0,i.kt)("h3",{id:"11-requirement-background"},"1.1 Requirement Background"),(0,i.kt)("p",null,"Before version 1.1.3, LinkisManager only recorded the information and resource usage of the running EngineConn, but the information was lost after the task was completed. If you need to do some statistics and view of historical ECs, or to view the logs of ECs that have ended, it is too cumbersome, so it is more important to record historical ECs."),(0,i.kt)("h3",{id:"12-goals"},"1.2 Goals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Complete the storage of EC information and resource information persistent to DB"),(0,i.kt)("li",{parentName:"ul"},"Supports viewing and searching of historical EC information through the restful interface"),(0,i.kt)("li",{parentName:"ul"},"Support to view logs of EC that has ended")),(0,i.kt)("h2",{id:"2-overall-design"},"2. Overall Design"),(0,i.kt)("p",null,"The main changes in this feature are the RM and AM modules under LinkisManager, and an information record table has been added."),(0,i.kt)("h3",{id:"21-technical-architecture"},"2.1 Technical Architecture"),(0,i.kt)("p",null,"Because this implementation needs to record EC information and resource information, and resource information is divided into three concepts, such as requesting resources, actually using resources, and releasing resources, and all of them need to be recorded. Therefore, the general plan for this implementation is: based on the EC in the life cycle of the ResourceManager to implement, and when the EC completes the above three stages, the update operation of the EC information is added. The overall picture is shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"engineconn-history-01.png",src:n(39207).Z})),(0,i.kt)("h3",{id:"22-business-architecture"},"2.2 Business Architecture"),(0,i.kt)("p",null,"This feature is mainly to complete the information recording of historical ECs and support the log viewing of historical technical ECs. The modules designed by the function point are as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"First-level module"),(0,i.kt)("th",{parentName:"tr",align:null},"Second-level module"),(0,i.kt)("th",{parentName:"tr",align:null},"Function point"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LinkisManager"),(0,i.kt)("td",{parentName:"tr",align:null},"ResourceManager"),(0,i.kt)("td",{parentName:"tr",align:null},"Complete the EC information record when the EC requests resources, reports the use of resources, and releases resources")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LinkisManager"),(0,i.kt)("td",{parentName:"tr",align:null},"AppManager"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides an interface to list and search all historical EC information")))),(0,i.kt)("h2",{id:"3-module-design"},"3. Module Design"),(0,i.kt)("h3",{id:"core-execution-flow"},"Core execution flow"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[","Input] The input is mainly for the requested resource when the engine is created, the real used resource reported after the engine is started, and the information input when the resource is released when the engine exits, mainly including the requested label, resource, EC's unique ticketid, resource type etc."),(0,i.kt)("li",{parentName:"ul"},"[","Processing process] Information recording service, which processes the input data, and parses the corresponding engine information, user, creator, and log path through tags. Confirm the resource request, use, and release by the resource type. Then talk about the information stored in the DB.")),(0,i.kt)("p",null,"The call sequence diagram is as follows:\n",(0,i.kt)("img",{alt:"engineconn-history-02.png",src:n(45047).Z})),(0,i.kt)("h2",{id:"4-data-structure"},"4. Data structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"# EC information resource record table\nDROP TABLE IF EXISTS `linkis_cg_ec_resource_info_record`;\nCREATE TABLE `linkis_cg_ec_resource_info_record` (\n    `id` INT(20) NOT NULL AUTO_INCREMENT,\n    `label_value` VARCHAR(255) NOT NULL COMMENT 'ec labels stringValue',\n    `create_user` VARCHAR(128) NOT NULL COMMENT 'ec create user',\n    `service_instance` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'ec instance info',\n    `ecm_instance` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'ecm instance info ',\n    `ticket_id` VARCHAR(100) NOT NULL COMMENT 'ec ticket id',\n    `log_dir_suffix` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'log path',\n    `request_times` INT(8) COMMENT 'resource request times',\n    `request_resource` VARCHAR(255) COMMENT 'request resource',\n    `used_times` INT(8) COMMENT 'resource used times',\n    `used_resource` VARCHAR(255) COMMENT 'used resource',\n    `release_times` INT(8) COMMENT 'resource released times',\n    `released_resource` VARCHAR(255) COMMENT 'released resource',\n    `release_time` datetime DEFAULT NULL COMMENT 'released time',\n    `used_time` datetime DEFAULT NULL COMMENT 'used time',\n    `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',\n    PRIMARY KEY (`id`),\n    KEY (`ticket_id`),\n    UNIQUE KEY `label_value_ticket_id` (`ticket_id`, `label_value`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n")),(0,i.kt)("h2",{id:"5-interface-design"},"5. Interface Design"),(0,i.kt)("p",null,"Engine history management page API interface, refer to the document Add history engine page to the management console"),(0,i.kt)("h2",{id:"6-non-functional-design"},"6. Non-functional design"),(0,i.kt)("h3",{id:"61-security"},"6.1 Security"),(0,i.kt)("p",null,"No security issues are involved, the restful interface requires login authentication"),(0,i.kt)("h3",{id:"62-performance"},"6.2 Performance"),(0,i.kt)("p",null,"Less impact on engine life cycle performance"),(0,i.kt)("h3",{id:"63-capacity"},"6.3 Capacity"),(0,i.kt)("p",null,"Requires regular cleaning"),(0,i.kt)("h3",{id:"64-high-availability"},"6.4 High Availability"),(0,i.kt)("p",null,"not involving"))}u.isMDXComponent=!0},39207:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/engineconn-history-01-1119992944d440f3f2ceb54928f70512.png"},45047:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/engineconn-history-02-77087d017474194bfd1832adbf8490b3.png"}}]);