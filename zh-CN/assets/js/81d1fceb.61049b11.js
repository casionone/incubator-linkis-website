"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[46801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(n),k=r,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||i;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},61618:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},l="\u4efb\u52a1\u63d0\u4ea4\u6267\u884c Rest API \u6587\u6863",p={unversionedId:"api/linkis-task-operator",id:"version-1.0.3/api/linkis-task-operator",isDocsHomePage:!1,title:"\u4efb\u52a1\u63d0\u4ea4\u6267\u884c Rest API \u6587\u6863",description:"- Linkis Restful\u63a5\u53e3\u7684\u8fd4\u56de\uff0c\u90fd\u9075\u5faa\u4ee5\u4e0b\u7684\u6807\u51c6\u8fd4\u56de\u683c\u5f0f\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/api/linkis-task-operator.md",sourceDirName:"api",slug:"/api/linkis-task-operator",permalink:"/zh-CN/docs/1.0.3/api/linkis-task-operator",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/api/linkis-task-operator.md",tags:[],version:"1.0.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4efb\u52a1\u63d0\u4ea4\u6267\u884c JDBC API \u6587\u6863",permalink:"/zh-CN/docs/1.0.3/api/jdbc-api"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.0.3/architecture/overview"}},s=[{value:"1. \u63d0\u4ea4\u6267\u884c",id:"1-\u63d0\u4ea4\u6267\u884c",children:[]},{value:"2. \u83b7\u53d6\u72b6\u6001",id:"2-\u83b7\u53d6\u72b6\u6001",children:[]},{value:"3. \u83b7\u53d6\u65e5\u5fd7",id:"3-\u83b7\u53d6\u65e5\u5fd7",children:[]},{value:"4. \u83b7\u53d6\u8fdb\u5ea6",id:"4-\u83b7\u53d6\u8fdb\u5ea6",children:[]},{value:"5. kill\u4efb\u52a1",id:"5-kill\u4efb\u52a1",children:[]}],o={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4efb\u52a1\u63d0\u4ea4\u6267\u884c-rest-api-\u6587\u6863"},"\u4efb\u52a1\u63d0\u4ea4\u6267\u884c Rest API \u6587\u6863"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linkis Restful\u63a5\u53e3\u7684\u8fd4\u56de\uff0c\u90fd\u9075\u5faa\u4ee5\u4e0b\u7684\u6807\u51c6\u8fd4\u56de\u683c\u5f0f\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "",\n "status": 0,\n "message": "",\n "data": {}\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"method\uff1a\u8fd4\u56de\u8bf7\u6c42\u7684Restful API URI\uff0c\u4e3b\u8981\u662f WebSocket \u6a21\u5f0f\u9700\u8981\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"status\uff1a\u8fd4\u56de\u72b6\u6001\u4fe1\u606f\uff0c\u5176\u4e2d\uff1a-1\u8868\u793a\u6ca1\u6709\u767b\u5f55\uff0c0\u8868\u793a\u6210\u529f\uff0c1\u8868\u793a\u9519\u8bef\uff0c2\u8868\u793a\u9a8c\u8bc1\u5931\u8d25\uff0c3\u8868\u793a\u6ca1\u8be5\u63a5\u53e3\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,r.kt)("li",{parentName:"ul"},"data\uff1a\u8fd4\u56de\u5177\u4f53\u7684\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"message\uff1a\u8fd4\u56de\u8bf7\u6c42\u7684\u63d0\u793a\u4fe1\u606f\u3002\u5982\u679cstatus\u975e0\u65f6\uff0cmessage\u8fd4\u56de\u7684\u662f\u9519\u8bef\u4fe1\u606f\uff0c\u5176\u4e2ddata\u6709\u53ef\u80fd\u5b58\u5728stack\u5b57\u6bb5\uff0c\u8fd4\u56de\u5177\u4f53\u7684\u5806\u6808\u4fe1\u606f\u3002 ")),(0,r.kt)("p",null,"\u66f4\u591a\u5173\u4e8e Linkis Restful \u63a5\u53e3\u7684\u89c4\u8303\uff0c\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/community/development-specification/api"},"Linkis Restful \u63a5\u53e3\u89c4\u8303")),(0,r.kt)("h3",{id:"1-\u63d0\u4ea4\u6267\u884c"},"1. \u63d0\u4ea4\u6267\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/execute"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "executeApplicationName": "hive", //\u5f15\u64ce\u7c7b\u578b\n    "requestApplicationName": "dss", //\u5ba2\u6237\u7aef\u670d\u52a1\u7c7b\u578b\n    "executionCode": "show tables",\n    "params": {"variable": {}, "configuration": {}},\n    "runType": "hql", //\u8fd0\u884c\u7684\u811a\u672c\u7c7b\u578b\n   "source": {"scriptPath":"file:///tmp/hadoop/1.hql"}\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/submit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "executionContent": {"code": "show tables", "runType":  "sql"},\n    "params": {"variable": {}, "configuration": {}},\n    "source":  {"scriptPath": "file:///mnt/bdp/hadoop/1.hql"},\n    "labels": {\n        "engineType": "spark-2.4.3",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/execute",\n "status": 0,\n "message": "\u8bf7\u6c42\u6267\u884c\u6210\u529f",\n "data": {\n   "execID": "030418IDEhivelocalhost010004:10087IDE_hadoop_21",\n   "taskID": "123"  \n }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"execID\u662f\u7528\u6237\u4efb\u52a1\u63d0\u4ea4\u5230 Linkis \u4e4b\u540e\uff0c\u4e3a\u8be5\u4efb\u52a1\u751f\u6210\u7684\u552f\u4e00\u6807\u8bc6\u6267\u884cID\uff0c\u4e3a String \u7c7b\u578b\uff0c\u8fd9\u4e2aID\u53ea\u5728\u4efb\u52a1\u8fd0\u884c\u65f6\u6709\u7528\uff0c\u7c7b\u4f3cPID\u7684\u6982\u5ff5\u3002ExecID \u7684\u8bbe\u8ba1\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"(requestApplicationName\u957f\u5ea6)(executeAppName\u957f\u5ea6)(Instance\u957f\u5ea6)${requestApplicationName}${executeApplicationName}${entranceInstance\u4fe1\u606fip+port}${requestApplicationName}_${umUser}_${index}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"taskID \u662f\u8868\u793a\u7528\u6237\u63d0\u4ea4task\u7684\u552f\u4e00ID\uff0c\u8fd9\u4e2aID\u7531\u6570\u636e\u5e93\u81ea\u589e\u751f\u6210\uff0c\u4e3a Long \u7c7b\u578b"))),(0,r.kt)("h3",{id:"2-\u83b7\u53d6\u72b6\u6001"},"2. \u83b7\u53d6\u72b6\u6001"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/status"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u793a\u4f8b"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/{execID}/status",\n "status": 0,\n "message": "\u83b7\u53d6\u72b6\u6001\u6210\u529f",\n "data": {\n   "execID": "${execID}",\n   "status": "Running"\n }\n}\n')),(0,r.kt)("h3",{id:"3-\u83b7\u53d6\u65e5\u5fd7"},"3. \u83b7\u53d6\u65e5\u5fd7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/log?fromLine=${fromLine}&size=${size}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570fromLine\u662f\u6307\u4ece\u7b2c\u51e0\u884c\u5f00\u59cb\u83b7\u53d6\uff0csize\u662f\u6307\u8be5\u6b21\u8bf7\u6c42\u83b7\u53d6\u51e0\u884c\u65e5\u5fd7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u793a\u4f8b\uff0c\u5176\u4e2d\u8fd4\u56de\u7684fromLine\u9700\u8981\u4f5c\u4e3a\u4e0b\u6b21\u8bf7\u6c42\u8be5\u63a5\u53e3\u7684\u53c2\u6570"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/${execID}/log",\n  "status": 0,\n  "message": "\u8fd4\u56de\u65e5\u5fd7\u4fe1\u606f",\n  "data": {\n    "execID": "${execID}",\n    "log": ["error\u65e5\u5fd7","warn\u65e5\u5fd7","info\u65e5\u5fd7", "all\u65e5\u5fd7"],\n    "fromLine": 56\n  }\n}\n')),(0,r.kt)("h3",{id:"4-\u83b7\u53d6\u8fdb\u5ea6"},"4. \u83b7\u53d6\u8fdb\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/progress"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u793a\u4f8b"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/{execID}/progress",\n  "status": 0,\n  "message": "\u8fd4\u56de\u8fdb\u5ea6\u4fe1\u606f",\n  "data": {\n    "execID": "${execID}",\n    "progress": 0.2,\n    "progressInfo": [\n        {\n            "id": "job-1",\n            "succeedTasks": 2,\n            "failedTasks": 0,\n            "runningTasks": 5,\n            "totalTasks": 10\n        },\n        {\n            "id": "job-2",\n            "succeedTasks": 5,\n            "failedTasks": 0,\n            "runningTasks": 5,\n            "totalTasks": 10\n        }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"5-kill\u4efb\u52a1"},"5. kill\u4efb\u52a1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/kill"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/{execID}/kill",\n "status": 0,\n "message": "OK",\n "data": {\n   "execID":"${execID}"\n  }\n}\n')))}u.isMDXComponent=!0}}]);