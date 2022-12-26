"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[66778],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),p=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return t?i.createElement(k,l(l({ref:n},c),{},{components:t})):i.createElement(k,l({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29823:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var i=t(87462),r=(t(67294),t(3905));const a={title:"Installation Of A Single Service",sidebar_position:1},l=void 0,s={unversionedId:"development/install-server",id:"version-0.11.0/development/install-server",isDocsHomePage:!1,title:"Installation Of A Single Service",description:"1 Obtain the installation package and install it",source:"@site/versioned_docs/version-0.11.0/development/install-server.md",sourceDirName:"development",slug:"/development/install-server",permalink:"/docs/0.11.0/development/install-server",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/development/install-server.md",tags:[],version:"0.11.0",sidebarPosition:1,frontMatter:{title:"Installation Of A Single Service",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Compile And Package",permalink:"/docs/0.11.0/development/compile-and-package"},next:{title:"Start Of A Single Service",permalink:"/docs/0.11.0/development/start-server"}},o=[{value:"1 Obtain the installation package and install it",id:"1-obtain-the-installation-package-and-install-it",children:[]},{value:"2 Modify configuration",id:"2-modify-configuration",children:[{value:"2.1 Modify application.yml",id:"21-modify-applicationyml",children:[]},{value:"2.2 Modify linkis.properties",id:"22-modify-linkisproperties",children:[]}]}],p={toc:o};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-obtain-the-installation-package-and-install-it"},"1 Obtain the installation package and install it"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","By getting the installation package of the corresponding module in our release installation package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," ## 1. Unzip the installation package\ntar -xvzf wedatasphere-linkis-0.11.0-dist.tar.gz\ncd wedatasphere-linkis-0.11.0-dist\n ## 2. Select the corresponding service installation package and go to the corresponding installation directory: $SERVER_HOME\ncp wedatasphere-linkis-0.11.0-dist/share/linkis/linkis-publicservice/linkis-publicservice.zip $SERVER_HOME\n ## 3. Copy the installation package to the corresponding installation directory. For example: publicservice needs to copy linkis-publicservice.zip\n ## Decompress the corresponding service\nunzip $SERVERNAME.zip\n ## 4. The module package is a public package, except for gateway and Eureka, everything else needs to be copied.\ncp ${workDir}/share/linkis/module/module.zip $SERVER_HOME\n ## 5. Unzip the module package\ncd $SERVER_HOME/;unzip module.zip> /dev/null;\n ## 6. Copy the corresponding installation package\ncp module/lib/* $SERVER_HOME/$SERVERNAME/lib/\n\n")),(0,r.kt)("h2",{id:"2-modify-configuration"},"2 Modify configuration"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","After the package is ready, it is to modify the configuration, the configuration mainly modify application.yml and linkis.properties, the configuration is under the conf directory"),(0,r.kt)("h3",{id:"21-modify-applicationyml"},"2.1 Modify application.yml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: $SERVER_PORT #corresponding service port\neureka:\n  client:\n    serviceUrl:\n      defaultZone: $EUREKA_URL #corresponding EUREKA address\n")),(0,r.kt)("h3",{id:"22-modify-linkisproperties"},"2.2 Modify linkis.properties"),(0,r.kt)("p",null,"The linkis.properties modification of each service is different, now all services are listed below and explained:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GateWay:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"    wds.linkis.ldap.proxy.url=$LDAP_URL #LDAP address, login required\n    wds.linkis.ldap.proxy.baseDN=$LDAP_BASEDN\n    wds.linkis.gateway.admin.user=$deployUser #Deployment user, as the administrator user\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PublicService:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"    ##Database connection information\n    wds.linkis.server.mybatis.datasource.url=jdbc:mysql://${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DB}?characterEncoding=UTF-8\n    wds.linkis.server.mybatis.datasource.username=$MYSQL_USER\n    wds.linkis.server.mybatis.datasource.password=$MYSQL_PASSWORD\n    \n    wds.linkis.workspace.filesystem.localuserrootpath=$WORKSPACE_USER_ROOT_PATH ##Workspace directory\n    wds.linkis.workspace.filesystem.hdfsuserrootpath.prefix=$HDFS_USER_ROOT_PATH ##HDFS user root directory\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linkis-Database")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"    ##Database connection information\n    wds.linkis.server.mybatis.datasource.url=jdbc:mysql://${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DB}?characterEncoding=UTF-8\n    wds.linkis.server.mybatis.datasource.username=$MYSQL_USER\n    wds.linkis.server.mybatis.datasource.password=$MYSQL_PASSWORD\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ResourceManager")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"    ##Database connection information\n    wds.linkis.server.mybatis.datasource.url=jdbc:mysql://${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DB}?characterEncoding=UTF-8\n    wds.linkis.server.mybatis.datasource.username=$MYSQL_USER\n    wds.linkis.server.mybatis.datasource.password=$MYSQL_PASSWORD\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Entrance:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"    wds.linkis.entrance.config.logPath=$WORKSPACE_USER_ROOT_PATH\n    wds.linkis.resultSet.store.path=$HDFS_USER_ROOT_PATH\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EngineManager:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"    ##User switching script\n    wds.linkis.enginemanager.sudo.script=$SERVER_HOME/$SERVERNAME/bin/rootScript.sh\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Additional parameters added by SparkEngineManager")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"    ## Configure engine jar\n    wds.linkis.enginemanager.core.jar=$SERVER_HOME/$SERVERNAME/lib/linkis-ujes-spark-engine-version.jar\n    ##Configure main jar\n    wds.linkis.spark.driver.conf.mainjar=$SERVER_HOME/$SERVERNAME/conf:$SERVER_HOME/$SERVERNAME/lib/*\n")))}c.isMDXComponent=!0}}]);