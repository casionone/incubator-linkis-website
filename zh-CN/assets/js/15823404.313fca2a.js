"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[49336],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),k=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=k(e.components);return r.createElement(s.Provider,{value:n},e.children)},o="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),o=k(t),d=a,m=o["".concat(s,".").concat(d)]||o[d]||c[d]||i;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[o]="string"==typeof e?e:a,l[1]=p;for(var k=2;k<i;k++)l[k]=t[k];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25994:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={title:"Spark\u5f15\u64ce",sidebar_position:2},l=void 0,p={unversionedId:"engine-usage/spark",id:"version-0.11.0/engine-usage/spark",isDocsHomePage:!1,title:"Spark\u5f15\u64ce",description:"1 Spark\u5f15\u64ce\u7684\u4f7f\u7528",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/engine-usage/spark.md",sourceDirName:"engine-usage",slug:"/engine-usage/spark",permalink:"/zh-CN/docs/0.11.0/engine-usage/spark",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/engine-usage/spark.md",tags:[],version:"0.11.0",sidebarPosition:2,frontMatter:{title:"Spark\u5f15\u64ce",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Python\u5f15\u64ce",permalink:"/zh-CN/docs/0.11.0/engine-usage/python"},next:{title:"\u767b\u9646 Api",permalink:"/zh-CN/docs/0.11.0/api/login-api"}},s=[{value:"1 Spark\u5f15\u64ce\u7684\u4f7f\u7528",id:"1-spark\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"1.1 \u73af\u5883\u53d8\u91cf\u914d\u7f6e",id:"11-\u73af\u5883\u53d8\u91cf\u914d\u7f6e",children:[]},{value:"1.2 \u542f\u52a8\u4f9d\u8d56\u670d\u52a1",id:"12-\u542f\u52a8\u4f9d\u8d56\u670d\u52a1",children:[]},{value:"1.3\t\u81ea\u5b9a\u4e49\u53c2\u6570\u914d\u7f6e",id:"13\u81ea\u5b9a\u4e49\u53c2\u6570\u914d\u7f6e",children:[]},{value:"1.4 \u524d\u7aef\u90e8\u7f72",id:"14-\u524d\u7aef\u90e8\u7f72",children:[]},{value:"1.5 spark\u542f\u52a8\u53c2\u6570\u914d\u7f6e",id:"15-spark\u542f\u52a8\u53c2\u6570\u914d\u7f6e",children:[]},{value:"1.6 \u8fd0\u884c\u5b9e\u4f8b",id:"16-\u8fd0\u884c\u5b9e\u4f8b",children:[]}]},{value:"2 Spark\u5f15\u64ce\u7684\u5b9e\u73b0\u65b9\u5f0f",id:"2-spark\u5f15\u64ce\u7684\u5b9e\u73b0\u65b9\u5f0f",children:[]},{value:"3 spark\u7248\u672c\u7684\u9002\u914d",id:"3-spark\u7248\u672c\u7684\u9002\u914d",children:[]},{value:"4 \u672a\u6765\u7684\u76ee\u6807",id:"4-\u672a\u6765\u7684\u76ee\u6807",children:[]}],k={toc:s};function u(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-spark\u5f15\u64ce\u7684\u4f7f\u7528"},"1 Spark\u5f15\u64ce\u7684\u4f7f\u7528"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis\u7684Spark\u6267\u884c\u5f15\u64ce\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u5411Yarn\u96c6\u7fa4\u63d0\u4ea4spark\u4f5c\u4e1a\u5e76\u53cd\u9988\u65e5\u5fd7\u3001\u8fdb\u5ea6\u3001\u72b6\u6001\u548c\u7ed3\u679c\u96c6\u7684\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Spark\u6267\u884c\u5f15\u64ce\u652f\u6301\u7528\u6237\u63d0\u4ea4sparksql\u3001pyspark\u4ee5\u53cascala\u4e09\u79cd\u7c7b\u578b\u7684\u4f5c\u4e1a\uff0c\u9ed8\u8ba4\u91c7\u7528yarn-client\u65b9\u5f0f\u63d0\u4ea4\u4f5c\u4e1a\uff0c\u5e76\u4ee5\u5f15\u64ce\u7684\u5f62\u5f0f\u4e3a\u7528\u6237\u7ef4\u7cfb\u4e00\u4e2a\u6216\u591a\u4e2aspark\u4f1a\u8bdd\u3002"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u7528\u6237\u4e0b\u8f7dLinkis\u7684release\u5305\u5e76\u89e3\u538b\u5b89\u88c5\u4e4b\u540e\uff0c\u9700\u8981\u6b63\u786e\u542f\u52a8\u82e5\u5e72\u7279\u5b9a\u7684\u670d\u52a1\u624d\u80fd\u7528\u4e8e\u6267\u884cspark\u4f5c\u4e1a\u3002"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u4e0b\u9762\u662f\u5177\u4f53\u6b65\u9aa4\u3002"),(0,a.kt)("h3",{id:"11-\u73af\u5883\u53d8\u91cf\u914d\u7f6e"},"1.1 \u73af\u5883\u53d8\u91cf\u914d\u7f6e"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Spark\u5f15\u64ce\u4f9d\u8d56\u7684\u73af\u5883\u53d8\u91cf:HADOOP_HOME\u3001HADOOP_CONF_DIR\u3001HIVE_CONF_DIR\u3001SPARK_HOME\u4ee5\u53caSPARK_CONF_DIR\u3002"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u5728\u542f\u52a8SparkEngineManager\u7684\u5fae\u670d\u52a1\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4ee5\u4e0a\u73af\u5883\u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u5982\u679c\u60a8\u6ca1\u6709\u8bbe\u7f6e\uff0c\u8bf7\u5148\u5728/home/${USER}/.bash_rc \u6216 linkis-ujes-spark-enginemanager/conf\u76ee\u5f55\u4e2d\u7684 linkis.properties\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u3002\u5982\u4ee5\u4e0b\u6240\u793a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"  HADOOP_HOME=${\u771f\u5b9e\u7684hadoop home}\n  HADOOP_CONF_DIR=${\u771f\u5b9e\u7684hadoop\u914d\u7f6e\u76ee\u5f55}\n  HIVE_CONF_DIR=${\u771f\u5b9e\u7684hive\u914d\u7f6e\u76ee\u5f55}\n  SPARK_CONF_DIR=${\u771f\u5b9e\u7684hive\u914d\u7f6e\u76ee\u5f55}\n  SPARK_HOME=${\u771f\u5b9e\u7684spark\u5b89\u88c5\u76ee\u5f55 }\n")),(0,a.kt)("h3",{id:"12-\u542f\u52a8\u4f9d\u8d56\u670d\u52a1"},"1.2 \u542f\u52a8\u4f9d\u8d56\u670d\u52a1"),(0,a.kt)("p",null,"Spark\u5f15\u64ce\u7684\u542f\u52a8\uff0c\u9700\u8981\u4f9d\u8d56\u4ee5\u4e0b\u7684Linkis\u5fae\u670d\u52a1:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1)\u3001Eureka: \u7528\u4e8e\u670d\u52a1\u6ce8\u518c\u4e8e\u53d1\u73b0\u3002"),(0,a.kt)("li",{parentName:"ul"},"2)\u3001Linkis-gateway: \u7528\u4e8e\u7528\u6237\u8bf7\u6c42\u8f6c\u53d1\u3002"),(0,a.kt)("li",{parentName:"ul"},"3)\u3001Linkis-publicService: \u63d0\u4f9b\u6301\u4e45\u5316\u3001udf\u7b49\u57fa\u7840\u529f\u80fd\u3002"),(0,a.kt)("li",{parentName:"ul"},"4)\u3001Linkis-ResourceManager:\u63d0\u4f9bLinkis\u7684\u8d44\u6e90\u7ba1\u7406\u529f\u80fd\u3002")),(0,a.kt)("h3",{id:"13\u81ea\u5b9a\u4e49\u53c2\u6570\u914d\u7f6e"},"1.3\t\u81ea\u5b9a\u4e49\u53c2\u6570\u914d\u7f6e"),(0,a.kt)("p",null,"\u542f\u52a8spark\u7684\u76f8\u5173\u5fae\u670d\u52a1\u4e4b\u524d\uff0c\u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u5173\u4e8espark\u5f15\u64ce\u7684\u76f8\u5173\u914d\u7f6e\u53c2\u6570\u3002"),(0,a.kt)("p",null,"Linkis\u8003\u8651\u5230\u7528\u6237\u5e0c\u671b\u80fd\u591f\u66f4\u81ea\u7531\u5730\u8bbe\u7f6e\u53c2\u6570\uff0c\u63d0\u4f9b\u4e86\u8bb8\u591a\u7684\u914d\u7f6e\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u4e0b\u8868\u6709\u4e00\u4e9b\u5e38\u7528\u7684\u53c2\u6570\uff0cSpark\u5f15\u64ce\u652f\u6301\u914d\u7f6e\u66f4\u591a\u7684\u53c2\u6570\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\uff0c\u5982\u60a8\u6709\u8c03\u4f18\u9700\u6c42\uff0c\u6b22\u8fce\u9605\u8bfb\u8c03\u4f18\u624b\u518c\u3002"),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728linkis.properties\u4e2d\u914d\u7f6e\u8fd9\u4e9b\u53c2\u6570\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u8003\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.memory.max"),(0,a.kt)("td",{parentName:"tr",align:null},"40G"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6307\u5b9asparkEM\u542f\u52a8\u7684\u6240\u6709\u5f15\u64ce\u7684\u5ba2\u6237\u7aef\u7684\u603b\u5185\u5b58")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.cores.max"),(0,a.kt)("td",{parentName:"tr",align:null},"20"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6307\u5b9asparkEM\u542f\u52a8\u7684\u6240\u6709\u5f15\u64ce\u7684\u5ba2\u6237\u7aef\u7684\u603bCPU\u6838\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.engine.instances.max"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6307\u5b9asparkEM\u53ef\u4ee5\u542f\u52a8\u7684\u5f15\u64ce\u4e2a\u6570")))),(0,a.kt)("h3",{id:"14-\u524d\u7aef\u90e8\u7f72"},"1.4 \u524d\u7aef\u90e8\u7f72"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u5fae\u670d\u52a1\u90e8\u7f72\u542f\u52a8\u6210\u529f\u540e\uff0c\u7528\u6237\u5982\u9700\u901a\u8fc7web\u6d4f\u89c8\u5668\u6765\u63d0\u4ea4\u81ea\u5df1\u7684sparkSQL\u3001pyspark\u6216Scala\u4ee3\u7801\uff0c\u53ef\u4ee5\u901a\u8fc7\u90e8\u7f72\u914d\u7f6e\u5fae\u4f17\u53e6\u4e00\u6b3e\u5f00\u6e90\u7684\u524d\u7aef\u4ea7\u54c1",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis/blob/master/docs/zh_CN/ch1/%E5%89%8D%E5%8F%B0%E9%83%A8%E7%BD%B2%E6%96%87%E6%A1%A3.md"},"Scriptis"),"\uff0c\u8be5\u4ea7\u54c1\u8ba9\u7528\u6237\u80fd\u5728web\u9875\u9762\u4e0a\u7f16\u8f91\u3001\u63d0\u4ea4\u4ee3\u7801\uff0c\u5e76\u80fd\u591f\u5b9e\u65f6\u63a5\u6536\u540e\u53f0\u7ed9\u7684\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\uff0cScriptis\u8fd8\u6709\u4e00\u4e2a\u7ba1\u7406\u53f0\u529f\u80fd\uff0c\u7528\u4e8e\u914d\u7f6espark\u5f15\u64ce\u7684\u542f\u52a8\u53c2\u6570\u3002"),(0,a.kt)("h3",{id:"15-spark\u542f\u52a8\u53c2\u6570\u914d\u7f6e"},"1.5 spark\u542f\u52a8\u53c2\u6570\u914d\u7f6e"),(0,a.kt)("p",null,"Scriptis\u9875\u9762\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u53ef\u4ee5\u8bbe\u7f6e\u542f\u52a8\u53c2\u6570\u7684\u914d\u7f6e\u9875\u9762\uff0c\u5176\u4e2d\u53ef\u4ee5\u8bbe\u7f6eDriver\u7684\u5185\u5b58\u5927\u5c0f\uff0c\u4ee5\u53caexecutor\u7684\u4e2a\u6570\u4ee5\u53ca\u5185\u5b58\u548cCPU\u6838\u6570\u7b49\uff0c\u8fd9\u4e9b\u53c2\u6570\u90fd\u4f1a\u88ab\u8bfb\u53d6\uff0c\u7528\u4e8e\u542f\u52a8\u4e00\u4e2aspark\u5f15\u64ce\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Spark\u542f\u52a8\u53c2\u6570\u914d\u7f6e\u56fe",src:t(21753).Z}),(0,a.kt)("br",null),"\n\u56fe1 \u7ba1\u7406\u53f0\u914d\u7f6e\u754c\u9762"),(0,a.kt)("h3",{id:"16-\u8fd0\u884c\u5b9e\u4f8b"},"1.6 \u8fd0\u884c\u5b9e\u4f8b"),(0,a.kt)("p",null,"\u5728web\u6d4f\u89c8\u5668\u4e2d\uff0c\u6253\u5f00scriptis\u7684\u5730\u5740\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u5de6\u4fa7\u680f\u7684\u5de5\u4f5c\u7a7a\u95f4\u65b0\u5efasql\u3001scala\u6216\u8005pyspark\u811a\u672c\uff0c\u5728\u811a\u672c\u7f16\u8f91\u533a\u57df\u7f16\u5199\u5b8c\u811a\u672c\u4ee3\u7801\u4e4b\u540e\uff0c\u70b9\u51fb\u8fd0\u884c\uff0c\u5c31\u53ef\u4ee5\u5c06\u81ea\u5df1\u7684\u4ee3\u7801\u63d0\u4ea4\u5230Linkis\u540e\u53f0\u6267\u884c\uff0c\u63d0\u4ea4\u4e4b\u540e\uff0c\u540e\u53f0\u4f1a\u901a\u8fc7websocket\u65b9\u5f0f\u5b9e\u65f6\u5c06\u65e5\u5fd7\u3001\u8fdb\u5ea6\u3001\u72b6\u6001\u7b49\u4fe1\u606f\u63a8\u9001\u7ed9\u7528\u6237\u3002\u5e76\u5728\u5b8c\u6210\u4e4b\u540e\uff0c\u5c06\u7ed3\u679c\u5c55\u793a\u7ed9\u7528\u6237\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Spark\u8fd0\u884c\u6548\u679c\u56fe1",src:t(2713).Z}),(0,a.kt)("br",null)),(0,a.kt)("center",null,"\u56fe2 Spark\u8fd0\u884c\u6548\u679c\u56fe1"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Spark\u8fd0\u884c\u6548\u679c\u56fe2",src:t(19238).Z}),(0,a.kt)("br",null),"\n\u56fe3 Spark\u8fd0\u884c\u6548\u679c\u56fe2"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Spark\u8fd0\u884c\u6548\u679c\u56fe3",src:t(73014).Z}),(0,a.kt)("br",null),"\n\u56fe4 Spark\u8fd0\u884c\u6548\u679c\u56fe3"),(0,a.kt)("h2",{id:"2-spark\u5f15\u64ce\u7684\u5b9e\u73b0\u65b9\u5f0f"},"2 Spark\u5f15\u64ce\u7684\u5b9e\u73b0\u65b9\u5f0f"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis-Python\u6267\u884c\u5f15\u64ce\u7684\u5b9e\u73b0\uff0c\u662f\u53c2\u7167",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/0.11.0/development/new-engine-conn"},"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce"),"\u5b9e\u73b0\u4e86Entrance\u3001EngineManager\u548cEngine\u4e09\u4e2a\u6a21\u5757\u7684\u5fc5\u8981\u63a5\u53e3\u3002"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u5728EngineManager\u6a21\u5757\uff0c\u6211\u4eec\u9009\u62e9\u91c7\u7528spark-submit\u8fd9\u547d\u4ee4\u6765\u8fdb\u884c\u542f\u52a8java\u8fdb\u7a0b\uff0c\u6240\u4ee5Linkis\u91c7\u53d6\u4e86\u91cd\u5199ProcessEngineBuilder\u7684build\u65b9\u6cd5\uff0c\u5c06\u7528\u6237\u914d\u7f6e\u7684spark\u7684\u542f\u52a8\u53c2\u6570\u4e0espark-submit\u547d\u4ee4\u8fdb\u884c\u6574\u5408,\u6784\u6210\u4e00\u4e2a\u542f\u52a8spark\u5f15\u64ce\u7684\u547d\u4ee4\uff0c\u7136\u540e\u6267\u884c\u8be5\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u5728Engine\u6a21\u5757\uff0cLinkis\u9ed8\u8ba4\u91c7\u7528\u4e86yarn-client\u6a21\u5f0f\u8fdb\u884c\u542f\u52a8spark\u7684\u4f1a\u8bdd\u3002Spark\u7684Driver\u8fdb\u7a0b\u4f1a\u4ee5Linkis\u5f15\u64ce\u7684\u5f62\u5f0f\u5b58\u5728\u5e76\u4e3a\u542f\u52a8\u7684\u7528\u6237\u6240\u62e5\u6709\u3002"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u83b7\u53d6\u5230SparkSession\u7684\u5b9e\u4f8b\u4e4b\u540e\uff0c\u901a\u8fc7spark\u63d0\u4f9b\u7684API\u53ef\u4ee5\u83b7\u53d6\u5230Driver\u8fdb\u7a0b\u7684SparkContext\u5b9e\u4f8b\uff0c\u901a\u8fc7SparkContext\u5b9e\u4f8b\u6211\u4eec\u53ef\u4ee5\u8fdb\u884c\u8fdb\u5ea6\u7684\u8ba1\u7b97\u83b7\u53d6\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u5c06\u7528\u6237\u7684\u4efb\u52a1\u53d6\u6d88\u3002"),(0,a.kt)("p",null,"Spark\u6267\u884c\u5f15\u64ce\u73b0\u5728\u652f\u6301\u4e09\u79cd\u7c7b\u578b\u7684spark\u4f5c\u4e1a\uff0csparksql, scala\u4ee5\u53capyspark\u3002Engine\u6a21\u5757\u4e2d\u7684\u4ee3\u7801\u4e2d\u5b9e\u73b0\u4e86\u4e09\u4e2aSparkExecutor\u5206\u522b\u6267\u884c\uff0csql\u4f7f\u7528SparkSession\u65b9\u5f0f\u63d0\u4ea4\uff0cscala\u4f7f\u7528Console\u65b9\u5f0f\u63d0\u4ea4\uff0cpyspark\u4f7f\u7528py4j\u7684\u65b9\u5f0f\u63d0\u4ea4\u3002"),(0,a.kt)("h2",{id:"3-spark\u7248\u672c\u7684\u9002\u914d"},"3 spark\u7248\u672c\u7684\u9002\u914d"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis0.5.0\u548cLinkis0.6.0\u7684release\u7248\u672c\u53ea\u652f\u6301spark2.1.0\u3002"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u4eceLinkis0.7.0\u5f00\u59cb\uff0cspark\u5f00\u59cb\u9002\u914dspark2.4+\u3002"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u5f53\u7136\uff0c\u5982\u679c\u60a8\u96c6\u7fa4\u4e2d\u4f7f\u7528\u7684spark\u7248\u672c\u5982\u679c\u548c\u6211\u4eec\u652f\u6301\u7248\u672c\u662f\u4e0d\u9002\u914d\u7684\u8bdd\uff0c\u53ef\u80fd\u9700\u8981\u60a8\u66f4\u6539\u9876\u5c42pom.xml\u7684spark.version \u53d8\u91cf\uff0c\u7136\u540e\u91cd\u65b0\u7f16\u8bd1\u6253\u5305\u3002"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u5982\u679c\u9047\u5230\u542f\u52a8\u8fd0\u884c\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u52a0\u7fa4\u5411\u6211\u4eec\u54a8\u8be2\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5fae\u4fe1\u53caQQ\u7fa4",src:t(10601).Z}),(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"4-\u672a\u6765\u7684\u76ee\u6807"},"4 \u672a\u6765\u7684\u76ee\u6807"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1.\u90e8\u7f72\u65b9\u5f0f\u66f4\u52a0\u7b80\u5355\uff0c\u5c1d\u8bd5\u4f7f\u7528\u5bb9\u5668\u5316\u7684\u65b9\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"2.\u652f\u6301spark jar\u5305\u65b9\u5f0f\u7684\u63d0\u4ea4"),(0,a.kt)("li",{parentName:"ul"},"3.\u66f4\u597d\u5730\u652f\u6301spark\u7684yarn-cluster\u65b9\u5f0f\u7684\u63d0\u4ea4\u3002")))}u.isMDXComponent=!0},10601:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/group-8e93c2460f179fabea51336c34b1ddd2.png"},21753:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/spark_conf-26116fec8d022b3e44c5dab02b093aa0.png"},2713:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/spark_run1-70df1decddcfb87664f83455b1104d86.png"},19238:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/spark_run2-3f4ce5658f49cf53efecf02d866ddcea.png"},73014:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/spark_run3-d7c957f26bc7605b191d51f56d725d6d.png"}}]);