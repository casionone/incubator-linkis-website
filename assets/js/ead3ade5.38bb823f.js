"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[40561],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),p=s(a),c=r,k=p["".concat(o,".").concat(c)]||p[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[p]="string"==typeof e?e:r,i[1]=m;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},81236:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"Version Overview",sidebar_position:.1},i=void 0,m={unversionedId:"release",id:"version-1.1.0/release",isDocsHomePage:!1,title:"Version Overview",description:"- Datasource Management Service Architecture Documentation",source:"@site/versioned_docs/version-1.1.0/release.md",sourceDirName:".",slug:"/release",permalink:"/docs/1.1.0/release",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.0/release.md",tags:[],version:"1.1.0",sidebarPosition:.1,frontMatter:{title:"Version Overview",sidebar_position:.1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/1.1.0/introduction"},next:{title:"Quick Deployment",permalink:"/docs/1.1.0/deployment/quick-deploy"}},o=[{value:"Configuration Item",id:"configuration-item",children:[]},{value:"DB Table Changes",id:"db-table-changes",children:[]}],s={toc:o};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/architecture/public-enhancement-services/datasource-manager"},"Datasource Management Service Architecture Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/architecture/public-enhancement-services/metadata-manager"},"Metadata Management Services Architecture Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/deployment/start-metadatasource"},"Data source introduction & function usage guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/user-guide/linkis-datasource-client"},"Guidelines for using the datasource client")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/api/http/data-source-manager-api"},"Data source http interface documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/api/http/metadatamanager-api"},"Metadata http interface documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/deployment/involve-skywalking-into-linkis"},"Start SkyWalking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/download/release-notes-1.1.0"},"Release-notes"))),(0,r.kt)("h2",{id:"configuration-item"},"Configuration Item"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Module Name (Service Name)"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"New"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mdm.service.lib.dir"),(0,r.kt)("td",{parentName:"tr",align:null},"/lib/linkis-public-enhancements/linkis-ps-metadatamanager/service"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the relative path to load the data source jar package, will be called by reflection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"New"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mdm.service.instance.expire-in-seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the expiration time for loading sub-services, after which the service will not be loaded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"New"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.dsm.app.name"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the name of the data source information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"New"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mdm.service.app.name"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"Service name for setting metadata information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"New"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mdm.service.kerberos.principle"),(0,r.kt)("td",{parentName:"tr",align:null},"hadoop/",(0,r.kt)("a",{parentName:"td",href:"mailto:HOST@EXAMPLE.COM"},"HOST@EXAMPLE.COM")),(0,r.kt)("td",{parentName:"tr",align:null},"set kerberos principle for linkis-metadata hive service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"New"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mdm.service.user"),(0,r.kt)("td",{parentName:"tr",align:null},"hadoop"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the access user of hive service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"New"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mdm.service.kerberos.krb5.path"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Set the kerberos krb5 path used by the hive service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"New"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mdm.service.temp.location"),(0,r.kt)("td",{parentName:"tr",align:null},"classpath:/tmp"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the temporary path of kafka and hive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"New"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mdm.service.sql.driver"),(0,r.kt)("td",{parentName:"tr",align:null},"com.mysql.jdbc.Driver"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the driver of mysql service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"New"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mdm.service.sql.url"),(0,r.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://%s:%s/%s"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the url format of mysql service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"New"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mdm.service.sql.connect.timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"3000"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the connection timeout time for mysql service to connect to mysql service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"New"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mdm.service.sql.socket.timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"6000"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the socket timeout time for mysql service to open mysql service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-metadatamanager"),(0,r.kt)("td",{parentName:"tr",align:null},"New"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mdm.service.temp.location"),(0,r.kt)("td",{parentName:"tr",align:null},"/tmp/keytab"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the local temporary storage path of the service, mainly to store the authentication files downloaded from the bml material service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"New"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.dsm.auth.admin"),(0,r.kt)("td",{parentName:"tr",align:null},"hadoop"),(0,r.kt)("td",{parentName:"tr",align:null},"datasourcemanager part of the interface permission authentication user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"Modified"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.engineconn.max.free.time"),(0,r.kt)("td",{parentName:"tr",align:null},"1h -> 0.5h"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum idle time of EngineConn changed from 1h to 0.5h")))),(0,r.kt)("h2",{id:"db-table-changes"},"DB Table Changes"),(0,r.kt)("p",null,"For details, see the upgrade schema",(0,r.kt)("inlineCode",{parentName:"p"},"db/upgrade/1.1.0_schema")," file in the corresponding branch of the code repository (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis"},"https://github.com/apache/incubator-linkis"),")."))}d.isMDXComponent=!0}}]);