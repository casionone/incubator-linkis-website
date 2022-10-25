"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[18505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(n),p=i,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14306:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"EC History List Architecture Design",sidebar_position:4},o=void 0,c={unversionedId:"architecture/computation-governance-services/linkis-manager/ec-history-arc",id:"architecture/computation-governance-services/linkis-manager/ec-history-arc",isDocsHomePage:!1,title:"EC History List Architecture Design",description:"1. General",source:"@site/docs/architecture/computation-governance-services/linkis-manager/ec-history-arc.md",sourceDirName:"architecture/computation-governance-services/linkis-manager",slug:"/architecture/computation-governance-services/linkis-manager/ec-history-arc",permalink:"/docs/1.3.0/architecture/computation-governance-services/linkis-manager/ec-history-arc",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/architecture/computation-governance-services/linkis-manager/ec-history-arc.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"EC History List Architecture Design",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Label Manager",permalink:"/docs/1.3.0/architecture/computation-governance-services/linkis-manager/label-manager"},next:{title:"EngineConn Design",permalink:"/docs/1.3.0/architecture/computation-governance-services/engine/engine-conn"}},s=[{value:"1. General",id:"1-general",children:[{value:"Requirements Background",id:"requirements-background",children:[]},{value:"Target",id:"target",children:[]}]},{value:"2. Design",id:"2-design",children:[{value:"2.1 Technical Architecture",id:"21-technical-architecture",children:[]},{value:"2.2 Business Architecture",id:"22-business-architecture",children:[]}]},{value:"3. Module Design",id:"3-module-design",children:[{value:"Core execution flow",id:"core-execution-flow",children:[]}]},{value:"4. DDL:",id:"4-ddl",children:[]},{value:"5. Interface design:",id:"5-interface-design",children:[]},{value:"6. Non-functional design:",id:"6-non-functional-design",children:[{value:"6.1 Security",id:"61-security",children:[]},{value:"6.2 Performance",id:"62-performance",children:[]},{value:"6.3 Capacity",id:"63-capacity",children:[]},{value:"6.4 High Availability",id:"64-high-availability",children:[]}]}],l={toc:s};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-general"},"1. General"),(0,i.kt)("h3",{id:"requirements-background"},"Requirements Background"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","Now LinkisManager only records the information and resource usage of the running EengineConn, but this information is lost after the task ends. It is inconvenient to do some statistics and view of historical ECs, or to view logs of ECs that have ended. It is more important to record the historical EC."),(0,i.kt)("h3",{id:"target"},"Target"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Complete the persistence of EC information and resource information to DB storage"),(0,i.kt)("li",{parentName:"ol"},"Support the viewing and searching of historical EC information through restful"),(0,i.kt)("li",{parentName:"ol"},"Support to view the logs of EC that has ended")),(0,i.kt)("h2",{id:"2-design"},"2. Design"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","The main modification of this feature is the RM and AM modules under LinkisManager, and a new information record table is added. It will be described in detail below."),(0,i.kt)("h3",{id:"21-technical-architecture"},"2.1 Technical Architecture"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","Because this implementation needs to record EC information and resource information, and resource information is divided into three concepts, such as requesting resources, actual use of resources, and release of resources, and all need to be recorded. Therefore, this implementation is based on the life cycle of the EC in the ResourceManager. When the EC completes the above three stages, the update operation of the EC information is added. The whole is shown in the figure below\n",(0,i.kt)("img",{alt:"arc",src:n(71470).Z})),(0,i.kt)("h3",{id:"22-business-architecture"},"2.2 Business Architecture"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","This feature is mainly to complete the information recording of historical EC and support the log viewing of historical technical EC. The modules designed by the function point are as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Component name"),(0,i.kt)("th",{parentName:"tr",align:null},"First-level module"),(0,i.kt)("th",{parentName:"tr",align:null},"Second-level module"),(0,i.kt)("th",{parentName:"tr",align:null},"Function point"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Linkis"),(0,i.kt)("td",{parentName:"tr",align:null},"LinkisManager"),(0,i.kt)("td",{parentName:"tr",align:null},"ResourceManager"),(0,i.kt)("td",{parentName:"tr",align:null},"Complete the EC information record when the EC requests resources, reports the use of resources, and releases resources")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Linkis"),(0,i.kt)("td",{parentName:"tr",align:null},"LinkisManager"),(0,i.kt)("td",{parentName:"tr",align:null},"AppManager"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides an interface to list and search all historical EC information")))),(0,i.kt)("h2",{id:"3-module-design"},"3. Module Design"),(0,i.kt)("h3",{id:"core-execution-flow"},"Core execution flow"),(0,i.kt)("p",null,"[Input]"," The input is mainly the information input when creating the engine, requesting resources, reporting the actual use of resources after the engine starts, and releasing resources when the engine exits, mainly including the requested label, resource, ec unique ticketid, and resource type.\n","[Processing process]"," The information recording service processes the input data, and parses the corresponding engine information, user, creator, and log path through tags. Confirm the resource request, use, and release by the resource type. Then talk about the information stored in the DB.\nThe call sequence diagram is as follows:\n",(0,i.kt)("img",{alt:"Time",src:n(60073).Z})),(0,i.kt)("h2",{id:"4-ddl"},"4. DDL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"# EC information resource record table\nDROP TABLE IF EXISTS `linkis_cg_ec_resource_info_record`;\nCREATE TABLE `linkis_cg_ec_resource_info_record` (\n    `id` INT(20) NOT NULL AUTO_INCREMENT,\n    `label_value` VARCHAR(255) NOT NULL COMMENT 'ec labels stringValue',\n    `create_user` VARCHAR(128) NOT NULL COMMENT 'ec create user',\n    `service_instance` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'ec instance info',\n    `ecm_instance` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'ecm instance info ',\n    `ticket_id` VARCHAR(100) NOT NULL COMMENT 'ec ticket id',\n    `log_dir_suffix` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'log path',\n    `request_times` INT(8) COMMENT 'resource request times',\n    `request_resource` VARCHAR(255) COMMENT 'request resource',\n    `used_times` INT(8) COMMENT 'resource used times',\n    `used_resource` VARCHAR(255) COMMENT 'used resource',\n    `release_times` INT(8) COMMENT 'resource released times',\n    `released_resource` VARCHAR(255) COMMENT 'released resource',\n    `release_time` datetime DEFAULT NULL COMMENT 'released time',\n    `used_time` datetime DEFAULT NULL COMMENT 'used time',\n    `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',\n    PRIMARY KEY (`id`),\n    KEY (`ticket_id`),\n    UNIQUE KEY `label_value_ticket_id` (`ticket_id`, `label_value`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n")),(0,i.kt)("h2",{id:"5-interface-design"},"5. Interface design:"),(0,i.kt)("p",null,"The API interface of the engine history management page, refer to the document Management console to add a history engine page\n",(0,i.kt)("a",{parentName:"p",href:"https://linkis.apache.org/docs/latest/api/http/linkis-cg-linkismanager-api/ec-resource-management-api"},"https://linkis.apache.org/docs/latest/api/http/linkis-cg-linkismanager-api/ec-resource-management-api")),(0,i.kt)("h2",{id:"6-non-functional-design"},"6. Non-functional design:"),(0,i.kt)("h3",{id:"61-security"},"6.1 Security"),(0,i.kt)("p",null,"No security issues are involved, restful requires login authentication"),(0,i.kt)("h3",{id:"62-performance"},"6.2 Performance"),(0,i.kt)("p",null,"Less impact on engine life cycle performance"),(0,i.kt)("h3",{id:"63-capacity"},"6.3 Capacity"),(0,i.kt)("p",null,"Requires regular cleaning"),(0,i.kt)("h3",{id:"64-high-availability"},"6.4 High Availability"),(0,i.kt)("p",null,"not involving"))}u.isMDXComponent=!0},71470:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ecHistoryArc-d98b1d7f7525fcefaa2410be4373d292.png"},60073:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ecHistoryTime-98c214fdbdfa3dadc6826e96848217c1.png"}}]);