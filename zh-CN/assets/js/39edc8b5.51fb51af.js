"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[78779],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),k=i,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||a;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=k;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},14316:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const a={title:"0.x\u52301.0\u7684\u5347\u7ea7\u6307\u5357",sidebar_position:1},l=void 0,o={unversionedId:"upgrade/upgrade-from-0.X-to-1.0-guide",id:"upgrade/upgrade-from-0.X-to-1.0-guide",isDocsHomePage:!1,title:"0.x\u52301.0\u7684\u5347\u7ea7\u6307\u5357",description:"\u672c\u6587\u7b80\u5355\u4ecb\u7ecdLinkis\u4ece0.X\u5347\u7ea7\u52301.0.0(1.0.1/1.0.2)\u7684\u6ce8\u610f\u4e8b\u9879\uff0cLinkis1.0 \u5bf9Linkis\u7684\u591a\u4e2a\u670d\u52a1\u8fdb\u884c\u4e86\u8c03\u6574\uff0c\u6539\u52a8\u8f83\u5927\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd\u4ece0.X\u52301.X\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/upgrade/upgrade-from-0.X-to-1.0-guide.md",sourceDirName:"upgrade",slug:"/upgrade/upgrade-from-0.X-to-1.0-guide",permalink:"/zh-CN/docs/1.3.0/upgrade/upgrade-from-0.X-to-1.0-guide",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/upgrade/upgrade-from-0.X-to-1.0-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"0.x\u52301.0\u7684\u5347\u7ea7\u6307\u5357",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u8c03\u8bd5\u5bb9\u5668\u5316",permalink:"/zh-CN/docs/1.3.0/development/linkis-debug-with-helm-charts"},next:{title:"1.0.3\u4ee5\u4e0a\u7684\u7248\u672c\u5347\u7ea7",permalink:"/zh-CN/docs/1.3.0/upgrade/upgrade-guide"}},s=[{value:"1. \u6ce8\u610f\u4e8b\u9879",id:"1-\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"2. \u670d\u52a1\u5347\u7ea7\u5b89\u88c5",id:"2-\u670d\u52a1\u5347\u7ea7\u5b89\u88c5",children:[]},{value:"3. \u6570\u636e\u5e93\u5347\u7ea7",id:"3-\u6570\u636e\u5e93\u5347\u7ea7",children:[{value:"3.1 \u8868\u7ed3\u6784\u4fee\u6539\u90e8\u5206\uff1a",id:"31-\u8868\u7ed3\u6784\u4fee\u6539\u90e8\u5206",children:[]},{value:"3.2 \u9700\u8981\u65b0\u6267\u884c\u7684sql\uff1a",id:"32-\u9700\u8981\u65b0\u6267\u884c\u7684sql",children:[]},{value:"3.3 publicservice-Configuration\u8868\u4fee\u6539",id:"33-publicservice-configuration\u8868\u4fee\u6539",children:[]}]},{value:"4. \u5b89\u88c5Linkis1.0",id:"4-\u5b89\u88c5linkis10",children:[]}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7b80\u5355\u4ecb\u7ecdLinkis\u4ece0.X\u5347\u7ea7\u52301.0.0(1.0.1/1.0.2)\u7684\u6ce8\u610f\u4e8b\u9879\uff0cLinkis1.0 \u5bf9Linkis\u7684\u591a\u4e2a\u670d\u52a1\u8fdb\u884c\u4e86\u8c03\u6574\uff0c\u6539\u52a8\u8f83\u5927\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd\u4ece0.X\u52301.X\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879\u3002")),(0,i.kt)("h2",{id:"1-\u6ce8\u610f\u4e8b\u9879"},"1. \u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u662f\u9996\u6b21\u63a5\u89e6\u5e76\u4f7f\u7528Linkis\uff0c\u60a8\u53ef\u4ee5\u5ffd\u7565\u8be5\u7ae0\u8282\uff1b\u5982\u679c\u60a8\u5df2\u7ecf\u662f Linkis \u7684\u4f7f\u7528\u7528\u6237\uff0c\u5b89\u88c5\u6216\u5347\u7ea7\u524d\u5efa\u8bae\u5148\u9605\u8bfb\uff1a",(0,i.kt)("a",{parentName:"strong",href:"/zh-CN/docs/1.3.0/architecture/difference-between-1.0-and-0.x"},"Linkis1.0 \u4e0e Linkis0.X \u7684\u533a\u522b\u7b80\u8ff0")),"\u3002"),(0,i.kt)("h2",{id:"2-\u670d\u52a1\u5347\u7ea7\u5b89\u88c5"},"2. \u670d\u52a1\u5347\u7ea7\u5b89\u88c5"),(0,i.kt)("p",null,"\u56e0\u4e3a1.0\u57fa\u672c\u4e0a\u5bf9\u6240\u6709\u670d\u52a1\u8fdb\u884c\u4e86\u5347\u7ea7\uff0c\u5305\u62ec\u670d\u52a1\u540d\u8fdb\u884c\u4e86\u4fee\u6539\uff0c\u6240\u4ee50.X\u52301.X\u5347\u7ea7\u65f6\u670d\u52a1\u9700\u8981\u8fdb\u884c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,i.kt)("p",null,"\u5728\u5b89\u88c5\u65f6\u5982\u679c\u9700\u8981\u4fdd\u75590.X\u7684\u6570\u636e\uff0c\u4e00\u5b9a\u8981\u9009\u62e91\u8df3\u8fc7\u5efa\u8868\u8bed\u53e5\uff08\u89c1\u4e0b\u9762\u4ee3\u7801\uff09\u3002"),(0,i.kt)("p",null,"Linkis1.0 \u7684\u5b89\u88c5\u53ef\u4ee5\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/deployment/quick-deploy"},"\u5982\u4f55\u5feb\u901f\u5b89\u88c5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Do you want to clear Linkis table information in the database?\n 1: Do not execute table-building statements\n 2: Dangerous! Clear all data and rebuild the tables\n other: exit\n\nPlease input the choice: ## choice 1\n")),(0,i.kt)("h2",{id:"3-\u6570\u636e\u5e93\u5347\u7ea7"},"3. \u6570\u636e\u5e93\u5347\u7ea7"),(0,i.kt)("p",null,"  \u670d\u52a1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u9700\u8981\u5bf9\u6570\u636e\u5e93\u8fdb\u884c\u7ed3\u6784\u4fee\u6539\uff0c\u5305\u62ec\u8fdb\u884c\u8868\u7ed3\u6784\u53d8\u66f4\u548c\u65b0\u589e\u8868\u548c\u6570\u636e\uff1a"),(0,i.kt)("h3",{id:"31-\u8868\u7ed3\u6784\u4fee\u6539\u90e8\u5206"},"3.1 \u8868\u7ed3\u6784\u4fee\u6539\u90e8\u5206\uff1a"),(0,i.kt)("p",null,"  linkis_task \u8868\u65b0\u589e\u4e86submit_user\u548clabel_json\u5b57\u6bb5\uff0c\u66f4\u65b0\u8bed\u53e5\u662f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mysql-sql"},"    ALTER TABLE linkis_task ADD submit_user varchar(50) DEFAULT NULL COMMENT 'submitUser name';\n    ALTER TABLE linkis_task ADD `label_json` varchar(200) DEFAULT NULL COMMENT 'label json';\n")),(0,i.kt)("h3",{id:"32-\u9700\u8981\u65b0\u6267\u884c\u7684sql"},"3.2 \u9700\u8981\u65b0\u6267\u884c\u7684sql\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mysql-sql"},"    cd db/module\n    ##\u65b0\u589eenginePlugin\u670d\u52a1\u4f9d\u8d56\u7684\u8868\uff1a\n    source linkis_ecp.sql\n    ##\u65b0\u589epublic service-instanceLabel \u670d\u52a1\u4f9d\u8d56\u7684\u8868\n    source linkis_instance_label.sql\n    ##\u65b0\u589elinkis-manager\u670d\u52a1\u4f9d\u8d56\u7684\u8868\n    source linkis-manager.sql\n")),(0,i.kt)("h3",{id:"33-publicservice-configuration\u8868\u4fee\u6539"},"3.3 publicservice-Configuration\u8868\u4fee\u6539"),(0,i.kt)("p",null,"  \u4e3a\u4e86\u652f\u6301Linkis1.X \u7684\u5168\u6807\u7b7e\u5316\u80fd\u529b\uff0cconfiguration\u6a21\u5757\u76f8\u5173\u6570\u636e\u8868\u5df2\u5168\u90e8\u5347\u7ea7\u4e3a\u6807\u7b7e\u5316\uff0c\u548c0.X\u7684Configuration\u8868\u5b8c\u5168\u4e0d\u540c\uff0c\u9700\u8981\u91cd\u65b0\u6267\u884c\u5efa\u8868\u8bed\u53e5\u548c\u521d\u59cb\u5316\u8bed\u53e5\u3002"),(0,i.kt)("p",null,"  \u8fd9\u610f\u5473\u7740\uff0c",(0,i.kt)("strong",{parentName:"p"},"Linkis0.X \u7528\u6237\u5df2\u6709\u7684\u5f15\u64ce\u914d\u7f6e\u53c2\u6570\uff0c\u5df2\u65e0\u6cd5\u8fc1\u79fb\u5230Linkis1.0\u4e4b\u4e2d"),"\uff08\u5efa\u8bae\u7528\u6237\u91cd\u65b0\u914d\u7f6e\u4e00\u6b21\u5f15\u64ce\u53c2\u6570\uff09\u3002"),(0,i.kt)("p",null,"  \u6267\u884c\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mysql-sql"},"    source linkis_configuration.sql\n")),(0,i.kt)("p",null,"  \u6267\u884c\u521d\u59cb\u5316\u8bed\u53e5\uff0c\u56e0\u4e3a Linkis1.0 \u652f\u6301\u5bf9\u63a5\u591a\u7248\u672c\u7684\u5f15\u64ce\uff0c\u6240\u4ee5\u6267\u884c\u521d\u59cb\u5316\u8bed\u53e5\u65f6\uff0c\u4e00\u5b9a\u9700\u8981\u4fee\u6539\u5bf9\u5e94\u5f15\u64ce\u7684\u7248\u672c\uff0c\u5982\u4e0b\u6240\u793a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mysql-sql"},'    vim linkis_configuration_dml.sql\n    ## \u4fee\u6539\u5bf9\u5e94\u5f15\u64ce\u7684\u9ed8\u8ba4\u7248\u672c\n    SET @SPARK_LABEL="spark-2.4.3";\n    SET @HIVE_LABEL="hive-1.2.1";\n    ## \u4fdd\u5b58\u6267\u884c\u521d\u59cb\u5316\u8bed\u53e5\n    source linkis_configuration_dml.sql\n')),(0,i.kt)("h2",{id:"4-\u5b89\u88c5linkis10"},"4. \u5b89\u88c5Linkis1.0"),(0,i.kt)("p",null,"  \u542f\u52a8Linkis1.0\uff0c\u9a8c\u8bc1\u670d\u52a1\u662f\u5426\u5df2\u6b63\u5e38\u542f\u52a8\u5e76\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\uff1a ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/deployment/quick-deploy"},"\u5982\u4f55\u5feb\u901f\u5b89\u88c5")))}c.isMDXComponent=!0}}]);