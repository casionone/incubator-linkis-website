"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[48671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,c=m["".concat(p,".").concat(d)]||m[d]||k[d]||l;return n?a.createElement(c,i(i({ref:t},o),{},{components:n})):a.createElement(c,i({ref:t},o))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99859:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Task Submission and Execution Rest Api",sidebar_position:3},i="Linkis Task submission and execution Rest API document",s={unversionedId:"api/linkis-task-operator",id:"version-1.2.0/api/linkis-task-operator",isDocsHomePage:!1,title:"Task Submission and Execution Rest Api",description:"- The return of the Linkis Restful interface follows the following standard return format:",source:"@site/versioned_docs/version-1.2.0/api/linkis-task-operator.md",sourceDirName:"api",slug:"/api/linkis-task-operator",permalink:"/docs/latest/api/linkis-task-operator",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.2.0/api/linkis-task-operator.md",tags:[],version:"1.2.0",sidebarPosition:3,frontMatter:{title:"Task Submission and Execution Rest Api",sidebar_position:3},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"Login Api",permalink:"/docs/latest/api/login-api"},next:{title:"Task Submission And Execution Of JDBC API",permalink:"/docs/latest/api/jdbc-api"}},p=[{value:"1. Submit task",id:"1-submit-task",children:[]},{value:"2. Get Status",id:"2-get-status",children:[]},{value:"3. Get Logs",id:"3-get-logs",children:[]},{value:"4. Get Progress and resource",id:"4-get-progress-and-resource",children:[]},{value:"5. Kill Task",id:"5-kill-task",children:[]},{value:"6. Get task info",id:"6-get-task-info",children:[]},{value:"7. Get result set info",id:"7-get-result-set-info",children:[]},{value:"8. Get result content",id:"8-get-result-content",children:[]},{value:"9. Get Result by stream",id:"9-get-result-by-stream",children:[]},{value:"10. Compatible with 0.x task submission interface",id:"10-compatible-with-0x-task-submission-interface",children:[]}],u={toc:p};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linkis-task-submission-and-execution-rest-api-document"},"Linkis Task submission and execution Rest API document"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The return of the Linkis Restful interface follows the following standard return format:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "",\n "status": 0,\n "message": "",\n "data": {}\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Convention"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"method: Returns the requested Restful API URI, which is mainly used in WebSocket mode."),(0,r.kt)("li",{parentName:"ul"},"status: return status information, where: -1 means no login, 0 means success, 1 means error, 2 means verification failed, 3 means no access to the interface."),(0,r.kt)("li",{parentName:"ul"},"data: return specific data."),(0,r.kt)("li",{parentName:"ul"},"message: return the requested prompt message. If the status is not 0, the message returned is an error message, and the data may have a stack field, which returns specific stack information.")),(0,r.kt)("p",null,"For more information about the Linkis Restful interface specification, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"/community/development-specification/api"},"Linkis Restful Interface Specification")),(0,r.kt)("h3",{id:"1-submit-task"},"1. Submit task"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/submit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Parameters"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "executionContent": {\n    "code": "show tables",\n    "runType": "sql"\n  },\n  "params": {\n    "variable": {// task variable \n      "testvar": "hello" \n    },\n    "configuration": {\n      "runtime": {// task runtime params \n        "jdbc.url": "XX"\n      },\n      "startup": { // ec start up params \n        "spark.executor.cores": "4"\n      }\n    }\n  },\n  "source": { //task source information\n    "scriptPath": "file:///tmp/hadoop/test.sql"\n  },\n  "labels": {\n    "engineType": "spark-2.4.3",\n    "userCreator": "hadoop-IDE"\n  }\n}\n')),(0,r.kt)("p",null,"-Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/submit",\n "status": 0,\n "message": "Request executed successfully",\n "data": {\n   "execID": "030418IDEhivelocalhost010004:10087IDE_hadoop_21",\n   "taskID": "123"\n }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"execID is the unique identification execution ID generated for the task after the user task is submitted to Linkis. It is of type String. This ID is only useful when the task is running, similar to the concept of PID. The design of ExecID is ",(0,r.kt)("inlineCode",{parentName:"p"},"(requestApplicationName length)(executeAppName length)(Instance length)${requestApplicationName}${executeApplicationName}${entranceInstance information ip+port}${requestApplicationName}_${umUser}_${index}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"taskID is the unique ID that represents the task submitted by the user. This ID is generated by the database self-increment and is of Long type"))),(0,r.kt)("h3",{id:"2-get-status"},"2. Get Status"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/status"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sample Response"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/{execID}/status",\n "status": 0,\n "message": "Get status successful",\n "data": {\n   "execID": "${execID}",\n   "status": "Running"\n }\n}\n')),(0,r.kt)("h3",{id:"3-get-logs"},"3. Get Logs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/log?fromLine=${fromLine}&size=${size}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The request parameter fromLine refers to the number of lines from which to get, and size refers to the number of lines of logs that this request gets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sample Response, where the returned fromLine needs to be used as a parameter for the next request of this interface"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/${execID}/log",\n  "status": 0,\n  "message": "Return log information",\n  "data": {\n    "execID": "${execID}",\n  "log": ["error log","warn log","info log", "all log"],\n  "fromLine": 56\n  }\n}\n')),(0,r.kt)("h3",{id:"4-get-progress-and-resource"},"4. Get Progress and resource"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/progressWithResource"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sample Response"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/entrance/exec_id018017linkis-cg-entrance127.0.0.1:9205IDE_hadoop_spark_2/progressWithResource",\n  "status": 0,\n  "message": "OK",\n  "data": {\n    "yarnMetrics": {\n      "yarnResource": [\n        {\n          "queueMemory": 9663676416,\n          "queueCores": 6,\n          "queueInstances": 0,\n          "jobStatus": "COMPLETED",\n          "applicationId": "application_1655364300926_69504",\n          "queue": "default"\n        }\n      ],\n      "memoryPercent": 0.009,\n      "memoryRGB": "green",\n      "coreRGB": "green",\n      "corePercent": 0.02\n    },\n    "progress": 0.5,\n    "progressInfo": [\n      {\n        "succeedTasks": 4,\n        "failedTasks": 0,\n        "id": "jobId-1(linkis-spark-mix-code-1946915)",\n        "totalTasks": 6,\n        "runningTasks": 0\n      }\n    ],\n    "execID": "exec_id018017linkis-cg-entrance127.0.0.1:9205IDE_hadoop_spark_2"\n  }\n}\n')),(0,r.kt)("h3",{id:"5-kill-task"},"5. Kill Task"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/kill"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sample Response"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/{execID}/kill",\n "status": 0,\n "message": "OK",\n "data": {\n   "execID":"${execID}"\n  }\n}\n')),(0,r.kt)("h3",{id:"6-get-task-info"},"6. Get task info"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/{id}/get"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"task id"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sample Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "task": {\n                "taskID": 1,\n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "FAILED",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"7-get-result-set-info"},"7. Get result set info"),(0,r.kt)("p",null,"Support for multiple result sets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/filesystem/getDirFileTrees"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"result directory"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sample Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/filesystem/getDirFileTrees",\n  "status": 0,\n  "message": "OK",\n  "data": {\n    "dirFileTrees": {\n      "name": "1946923",\n      "path": "hdfs:///tmp/hadoop/linkis/2022-07-06/211446/IDE/1946923",\n      "properties": null,\n      "children": [\n        {\n          "name": "_0.dolphin",\n          "path": "hdfs:///tmp/hadoop/linkis/2022-07-06/211446/IDE/1946923/_0.dolphin",//result set 1\n          "properties": {\n            "size": "7900",\n            "modifytime": "1657113288360"\n          },\n          "children": null,\n          "isLeaf": true,\n          "parentPath": "hdfs:///tmp/hadoop/linkis/2022-07-06/211446/IDE/1946923"\n        },\n        {\n          "name": "_1.dolphin",\n          "path": "hdfs:///tmp/hadoop/linkis/2022-07-06/211446/IDE/1946923/_1.dolphin",//result set 2\n          "properties": {\n            "size": "7900",\n            "modifytime": "1657113288614"\n          },\n          "children": null,\n          "isLeaf": true,\n          "parentPath": "hdfs:///tmp/hadoop/linkis/2022-07-06/211446/IDE/1946923"\n        }\n      ],\n      "isLeaf": false,\n      "parentPath": null\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"8-get-result-content"},"8. Get result content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/filesystem/openFile"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"result path"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"charset"),(0,r.kt)("td",{parentName:"tr",align:null},"Charset"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page"),(0,r.kt)("td",{parentName:"tr",align:null},"page number"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"ref"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"page size"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"ref"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sample Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/filesystem/openFile",\n  "status": 0,\n  "message": "OK",\n  "data": {\n    "metadata": [\n      {\n        "columnName": "count(1)",\n        "comment": "NULL",\n        "dataType": "long"\n      }\n    ],\n    "totalPage": 0,\n    "totalLine": 1,\n    "page": 1,\n    "type": "2",\n    "fileContent": [\n      [\n        "28"\n      ]\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"9-get-result-by-stream"},"9. Get Result by stream"),(0,r.kt)("p",null,"Get the result as a CSV or Excel file"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/filesystem/resultsetToExcel"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoFormat"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"charset"),(0,r.kt)("td",{parentName:"tr",align:null},"charset"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"csvSeerator"),(0,r.kt)("td",{parentName:"tr",align:null},"csv Separator"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"row limit"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"ref"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nullValue"),(0,r.kt)("td",{parentName:"tr",align:null},"null value"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputFileName"),(0,r.kt)("td",{parentName:"tr",align:null},"Output file name"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputFileType"),(0,r.kt)("td",{parentName:"tr",align:null},"Output file type csv or excel"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"result path"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quoteRetouchEnable"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to quote modification"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sheetName"),(0,r.kt)("td",{parentName:"tr",align:null},"sheet name"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"binary stream\n")),(0,r.kt)("h3",{id:"10-compatible-with-0x-task-submission-interface"},"10. Compatible with 0.x task submission interface"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/execute"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request Parameters")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "executeApplicationName": "hive", //Engine type\n    "requestApplicationName": "dss", //Client service type\n    "executionCode": "show tables",\n    "params": {\n      "variable": {// task variable \n        "testvar": "hello"\n      },\n      "configuration": {\n        "runtime": {// task runtime params \n          "jdbc.url": "XX"\n        },\n        "startup": { // ec start up params \n          "spark.executor.cores": "4"\n        }\n      }\n    },\n    "source": { //task source information\n      "scriptPath": "file:///tmp/hadoop/test.sql"\n    },\n    "labels": {\n      "engineType": "spark-2.4.3",\n      "userCreator": "hadoop-IDE"\n    },\n    "runType": "hql", //The type of script to run\n    "source": {"scriptPath":"file:///tmp/hadoop/1.hql"}\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sample Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/execute",\n "status": 0,\n "message": "Request executed successfully",\n "data": {\n   "execID": "030418IDEhivelocalhost010004:10087IDE_hadoop_21",\n   "taskID": "123"\n }\n}\n')))}o.isMDXComponent=!0}}]);