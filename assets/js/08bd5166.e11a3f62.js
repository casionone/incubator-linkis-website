"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[48360],{13919:(e,t,a)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{Z:()=>r,b:()=>n})},44996:(e,t,a)=>{a.d(t,{C:()=>i,Z:()=>c});var n=a(52263),r=a(13919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(e,t,a,n){let{forcePrependBaseUrl:i=!1,absolute:c=!1}=void 0===n?{}:n;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(i)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+o:o}(t,e,a,n)}}function c(e,t){void 0===t&&(t={});const{withBaseUrl:a}=i();return a(e,t)}},72389:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(9913);function i(){return(0,n.useContext)(r._)}},9586:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var n=a(67294),r=a(72389),i=a(44996);const c=JSON.parse('{"zh-CN":{"common":{"getStart":"\u5f00\u59cb","description":"\u63cf\u8ff0","learnMore":"\u4e86\u89e3\u66f4\u591a","coreFeatures":"\u6838\u5fc3\u7279\u6027","connectivity":"\u8fde\u901a","scalability":"\u6269\u5c55","controllability":"\u7ba1\u63a7","orchestration":"\u7f16\u6392","reusability":"\u590d\u7528","ourUsers":"Our Users","readMore":"\u9605\u8bfb\u66f4\u591a","download":"\u4e0b\u8f7d","releaseDate":"\u53d1\u5e03\u65e5\u671f","newFeatures":"\u65b0\u7279\u6027","enhancement":"\u589e\u5f3a\u70b9","bugFixs":"Bug\u4fee\u590d","changeLog":"\u8be6\u7ec6\u53d8\u66f4"},"home":{"banner":{"slogan":"Linkis \u6784\u5efa\u4e86\u4e00\u5c42\u8ba1\u7b97\u4e2d\u95f4\u4ef6\uff0c\u65b9\u4fbf\u4e0a\u5c42\u5e94\u7528\u4e0e\u5e95\u5c42\u6570\u636e\u5f15\u64ce\u4e4b\u95f4\u7684\u8fde\u63a5\u3001\u6cbb\u7406\u548c\u7f16\u6392\u3002"},"introduce":{"title":"\u8ba1\u7b97\u4e2d\u95f4\u4ef6\u6982\u5ff5","before":"\u6ca1\u6709Linkis\u4e4b\u524d","after":"\u6709Linkis\u4e4b\u540e","beforeText":"\u4e0a\u5c42\u5e94\u7528\u4ee5\u7d27\u8026\u5408\u65b9\u5f0f\u76f4\u8fde\u5e95\u5c42\u5f15\u64ce\uff0c\u4f7f\u5f97\u6570\u636e\u5e73\u53f0\u53d8\u6210\u590d\u6742\u7684\u7f51\u72b6\u7ed3\u6784","afterText":"\u901a\u8fc7\u8ba1\u7b97\u4e2d\u95f4\u4ef6\u5c06\u5e94\u7528\u5c42\u548c\u5f15\u64ce\u5c42\u89e3\u8026\uff0c\u4ee5\u6807\u51c6\u5316\u53ef\u590d\u7528\u65b9\u5f0f\u7b80\u5316\u590d\u6742\u7684\u7f51\u72b6\u8c03\u7528\u5173\u7cfb\uff0c\u964d\u4f4e\u6570\u636e\u5e73\u53f0\u590d\u6742\u5ea6"},"description":{"standardizedInterfaces":"\u6807\u51c6\u63a5\u53e3","computationGovernance":"\u8ba1\u7b97\u6cbb\u7406","paragraph1":"Linkis \u5728\u4e0a\u5c42\u5e94\u7528\u548c\u5e95\u5c42\u5f15\u64ce\u4e4b\u95f4\u6784\u5efa\u4e86\u4e00\u5c42\u8ba1\u7b97\u4e2d\u95f4\u4ef6\u3002\u901a\u8fc7\u4f7f\u7528Linkis \u63d0\u4f9b\u7684REST/WebSocket/JDBC \u7b49\u6807\u51c6\u63a5\u53e3\uff0c\u4e0a\u5c42\u5e94\u7528\u53ef\u4ee5\u65b9\u4fbf\u5730\u8fde\u63a5\u8bbf\u95eeSpark, Presto, Flink \u7b49\u5e95\u5c42\u5f15\u64ce\u3002","paragraph2":"Linkis\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u8fde\u901a\u3001\u590d\u7528\u3001\u7f16\u6392\u3001\u6269\u5c55\u548c\u6cbb\u7406\u7ba1\u63a7\u80fd\u529b\uff0c\u4ee5\u6807\u51c6\u5316\u53ef\u590d\u7528\u7684\u65b9\u5f0f\u89e3\u51b3 OLAP\u3001OLTP(\u5b9e\u73b0\u4e2d)\u3001Streaming\u7b49\u4e0d\u540c\u7c7b\u578b\u5f15\u64ce\u7684\u8ba1\u7b97\u6cbb\u7406\u95ee\u9898\u3002"},"core":{"connectivity":"\u7b80\u5316\u8fd0\u7ef4\u73af\u5883\uff1b\u89e3\u8026\u4e0a\u4e0b\u5c42\uff0c\u5e95\u5c42\u53d8\u5316\u900f\u660e\u5316\uff1b\u6253\u901a\u7528\u6237\u8d44\u6e90\u548c\u8fd0\u884c\u65f6\u73af\u5883\uff0c\u544a\u522b\u5e94\u7528\u5b64\u5c9b","scalability":"\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u67b6\u6784\u4f53\u7cfb\uff0c\u89e3\u51b3\u9ad8\u5e76\u53d1\u3001\u9ad8\u53ef\u7528\u3001\u591a\u79df\u6237\u7b49\u95ee\u9898\uff1b\u57fa\u4e8eEngineConn\u63d2\u4ef6\u53ef\u5feb\u901f\u5bf9\u63a5\u65b0\u5f15\u64ce","controllability":"\u6536\u655b\u5f15\u64ce\u5165\u53e3\uff0c\u7edf\u4e00\u8eab\u4efd\u9a8c\u8bc1\u3001\u9ad8\u5371\u9632\u63a7\u3001\u5ba1\u8ba1\u8bb0\u5f55;\u57fa\u4e8e\u6807\u7b7e\u7684\u591a\u7ea7\u7cbe\u7ec6\u5316\u8d44\u6e90\u63a7\u5236\u548c\u56de\u6536\u80fd\u529b","orchestration":"\u57fa\u4e8eOrchestrator \u670d\u52a1\u7684\u6df7\u7b97\u3001\u53cc\u6d3b\u8ba1\u7b97\u7b56\u7565\u8bbe\u8ba1(\u5b9e\u73b0\u4e2d)","reusability":"\u6781\u5927\u964d\u4f4e\u4e0a\u5c42\u5e94\u7528\u7684\u540e\u53f0\u4ee3\u7801\u91cf\uff1b\u53ef\u57fa\u4e8eLinkis \u5feb\u901f\u9ad8\u6548\u6253\u9020\u6570\u636e\u5e73\u53f0\u5de5\u5177\u5957\u4ef6"}}},"en":{"common":{"getStart":"Get Start","description":"Description","learnMore":"Learn More","coreFeatures":"Core Features","connectivity":"Connectivity","scalability":"Scalability","controllability":"Controllability","orchestration":"Orchestration","reusability":"Reusability","ourUsers":"Our Users","readMore":"Read More","download":"Download","releaseDate":"Release Date","newFeatures":"New Features","enhancement":"Enhancement","bugFixs":"Bug Fixs","changeLog":"Change Log"},"home":{"banner":{"slogan":"Linkis builds a computation middleware layer to facilitate connection, governance and orchestration between the upper applications and the underlying data engines."},"introduce":{"title":"Computation Middleware","before":"Before","after":"After","beforeText":"Each upper application directly connects to and accesses various underlying engines in a tightly coupled way, which makes big data platform a complex network architecture.","afterText":"Build a common layer of \\"computation middleware\\" between the numerous upper-layer applications and the countless underlying engines to resolve these complex connection problems in a standardized reusable way\\n"},"description":{"standardizedInterfaces":"Standardized Interfaces","computationGovernance":"Computation Governance","paragraph1":"Linkis provides standardized interfaces (REST, JDBC, WebSocket etc.) to easily connect to various underlying engines (Spark, Presto, Flink, etc.), and acts as a proxy between the upper applications layer and underlying engines layer.","paragraph2":"Linkis is able to facilitate the connectivity, governance and orchestration capabilities of different kind of engines like OLAP, OLTP (developing), Streaming, and handle all these \\"computation governance\\" affairs in a standardized reusable way."},"core":{"connectivity":"Simplify the operation environment; decouple the upper and lower layers, which make the upper layer insensitive when bottom layers changed","scalability":"Distributed microservice architecture with great scalability and extensibility; quickly integrate with the new underlying engine","controllability":"Converge engine entrance, unify identity verification, high-risk prevention and control, audit records; label-based multi-level refined resource control and recovery capabilities","orchestration":"Computing strategy design based on active-active, mixed computing, transcation Orchestrator Service","reusability":"Highly reduced the back-end development workload of upper-level applications development; Swiftly and efficiently build a data platform tool suite based on Linkis"}}}}'),o={github:{projectUrl:"https://github.com/apache/incubator-linkis",projectReleaseUrl:"https://github.com/apache/incubator-linkis/releases",projectIssueUrl:"https://github.com/apache/incubator-linkis/issues",projectPrUrl:"https://github.com/apache/incubator-linkis/pulls"}};function l(){const e=(0,r.Z)()&&0===location.pathname.indexOf("/zh-CN/")?"zh-CN":"en",t=null==c?void 0:c[e];return n.createElement("div",null,n.createElement("div",{className:"home-page slogan"},n.createElement("div",{className:"ctn-block"},n.createElement("div",{className:"banner text-center"},n.createElement("h1",{className:"home-title"},n.createElement("span",{className:"apache"},"Apache")," ",n.createElement("span",{className:"linkis"},"Linkis")," ",n.createElement("span",{className:"badge"},"Incubating")),n.createElement("p",{className:"home-desc"},t.home.banner.slogan),n.createElement("div",{className:"botton-row center"},"en"===e&&n.createElement("a",{href:"/docs/latest/deployment/quick-deploy",className:"corner-botton blue-fill"},t.common.getStart),"zh-CN"===e&&n.createElement("a",{href:"/zh-CN/docs/latest/deployment/quick-deploy",className:"corner-botton blue-fill"},t.common.getStart),n.createElement("a",{href:o.github.projectUrl,target:"_blank",className:"corner-botton blue"},n.createElement("img",{className:"button-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABkvfSiAAAE2klEQVRIDa1WSyykWRQ+qrwf8YzQ3iTKWyrxmoWoWJHMoqIRKWErs7AYk1jIWDS9YCdshQWxQMsIYUE6Wm1qiJAIimjSqPaI8hrEu+Z8d9xKVak2mDnJrfvXueee79zzuteFXkApKSlqNzc3rYuLSz6PCN7y7nHbd4vFYrq/v9fz+GN5eXn+39S5PCeQmppaykAfGUT1nJxcY9BVHr8vLS0NSp7j7BQwIyMjjgX7FApFHoM57nn2P5+Y7u7uDN7e3rqZmZlNR+En2tRqdQELfXp4eAiGsASUM3hQCnLkST7W2Fizq6vr+9nZ2S/4L0kpPzA/gk2wsG9iYiJ5eXnR1dUVMbgYUhZAGOBLEPz39fWlmJgY8vHxodPTU29eq4yLi5ve2dn5Zt0rP3JycuJub29ncTJsampqgpW0uLhI/f39tLu7SxxP8vPzI3aXADs/P6eLiwsBymGgkpISio+Pp/X1daqvrxfyHFMz68seGRkR7nWVgJeXl32sMJj9TwkJCaRSqcjT05PS0tIoPT2dVldXKTo6moKCgkipVAoQNpD29vbIbDZTbm4uRUQggUl4BqeEd1g2+OvXr33M/glrAvAxG/PAgIvc3d3tXAVAANvGDLIgGIY9jmvwxvX1tZDhWOZpNJrSqampQQU4bMVHscI/2Mj+J1hvS44Kn1vDyTAkwSP7+/sCQ5GVlaVmhqgzWArLuNDFLDe8doY7MzMz7RKN9aqqq6vVCg6qVipE/CIjI0mr1Yo4SP5r5/DwcKqoqCB2pRUUp1xZWdEq+FT5UiEAOY2twZf8t8woKwBDp6Sbm5t8Bcfmn9RiLsogNDRUzFLorXNAQAAFBgZakw96gIWkkY1Y6EYx/x/EobK600bfO5GlkgGwk5MTZ4JS5MUzGgIaA7xmQxbE8LtkYBGFjLL4r3RwcECHh4d2gIy1C3iTVI6SWFtbI4PBIFlvmlHw4+PjdHZ2JroSlKDkPDw8TAoG0UutKG7OJOrt7SXu8pL9qhmxGxoaosnJSSsYFICfnJysVxYXF59ub2/XwJ0hISHCBSaTiTBQR2FhYbDsRaBbW1s0MDAgBlxqGz8chGvzV3Efcq80snIVijUqKooGBwdpc3NTNAHUE1smeiZ3JdHQbdER87m5OXFD8E1P3Kjp+PjYVkTUIpfJql6vTxL3YUFBwR5fP+UIMpq0RqMhbAYorIZCNPTCwsInTRrZ2NLSQqxMeIVvHQEmey9ih+JnT/4yPT29LAD58bPMV0/R0dFRJDK0qKhItDYYgJaEi7WyslJ0ITvT+Q/uRhiE6wsgckg5lFpsbKyhs7PzN/Cs9yG7U9fT0zNrNBqD5+fnRT9FE4d7kHVwpzNCnNDCnBFOx43cXFtbqxsdHRUi1ifGxMTEiU6n+3NjY6OShxIlIu9BJBNaFZLIGfFjiRYWFuzcDTDWcVtTU/NzWVnZgtz35BHV2NhYMDw8/ImFg/39/eUzgTo6OigpKUnus5vb29upu7tbAMqYcRjMdXV178vLy+0eUXZ9B1qam5u/VFVVZfPbxYB3DLIQsURa/4gAAkJy4OLmzDY0NDRkO4L9aL+V39raWsqZaeRnhIUfU6zXObW1tVn49BZ2nbGrq6vUquCtH2NjY2rO3g8M95nHKo+/Hge+P3PtfYDMS/T/DaQGbM8QvzFuAAAAAElFTkSuQmCC",alt:"github"}),n.createElement("span",null,"GitHub")))))),n.createElement("div",{className:"home-page introduce"},n.createElement("div",{className:"ctn-block"},n.createElement("h1",{className:"home-block-title text-center"},t.home.introduce.title),n.createElement("div",{className:"concept home-block"},n.createElement("div",{className:"concept-item before"},n.createElement("h3",{className:"concept-title"},t.home.introduce.before),n.createElement("div",{className:"concept-ctn"},n.createElement("p",{className:"home-paragraph"},t.home.introduce.beforeText),n.createElement("div",{className:"before-image"},"en"===e&&n.createElement("img",{src:(0,i.Z)("/home/before_linkis_en.png"),alt:"before",className:"concept-image"}),"zh-CN"===e&&n.createElement("img",{src:(0,i.Z)("/home/before_linkis_zh.png"),alt:"before",className:"concept-image"})))),n.createElement("div",{className:"concept-item after"},n.createElement("h3",{className:"concept-title"},t.home.introduce.after),n.createElement("div",{className:"concept-ctn"},n.createElement("p",{className:"home-paragraph"},t.home.introduce.afterText),"en"===e&&n.createElement("img",{src:(0,i.Z)("/home/after_linkis_en.png"),alt:"before",className:"concept-image"}),"zh-CN"===e&&n.createElement("img",{src:(0,i.Z)("/home/after_linkis_zh.png"),alt:"before",className:"concept-image"})))))),n.createElement("div",{className:"home-page"},n.createElement("div",{className:"ctn-block description"},n.createElement("h1",{className:"home-block-title text-center"},t.common.description),n.createElement("div",{className:"home-block",style:{position:"relative"}},n.createElement("div",{className:"top-desc"},n.createElement("h3",{className:"home-paragraph-title"},t.home.description.standardizedInterfaces),n.createElement("p",{className:"home-paragraph"},t.home.description.paragraph1)),n.createElement("div",{className:"bold-dot",style:{top:"64px",left:"416px"}}),n.createElement("div",{className:"bold-dot",style:{top:"728px",left:"240px"}}),n.createElement("img",{src:(0,i.Z)("/home/description.png"),alt:"description",className:"description-image"}),n.createElement("svg",{width:"860",height:"860",viewBox:"0 0 100 100"},n.createElement("circle",{cx:"50",cy:"50",r:"49.8",className:"dotted"})),n.createElement("div",{className:"top-desc"},n.createElement("h3",{className:"home-paragraph-title"},t.home.description.computationGovernance),n.createElement("p",{className:"home-paragraph"},t.home.description.paragraph2)),n.createElement("div",{className:"botton-row center"},"en"===e&&n.createElement("a",{href:"/docs/latest/introduction",className:"corner-botton blue-fill"},t.common.learnMore),"zh-CN"===e&&n.createElement("a",{href:"/zh-CN/docs/latest/introduction",className:"corner-botton blue-fill"},t.common.learnMore))))),n.createElement("div",{className:"home-page feature"},n.createElement("div",{className:"ctn-block"},n.createElement("h1",{className:"home-block-title text-center"},t.common.coreFeatures),n.createElement("div",{className:"features home-block text-center"},n.createElement("div",{className:"feature-item connectivity"},n.createElement("h3",{className:"item-title"},t.common.connectivity),n.createElement("p",{className:"item-desc"},t.home.core.connectivity)),n.createElement("div",{className:"feature-item scalability"},n.createElement("h3",{className:"item-title"},t.common.scalability),n.createElement("p",{className:"item-desc"},t.home.core.scalability)),n.createElement("div",{className:"feature-item controllability"},n.createElement("h3",{className:"item-title"},t.common.controllability),n.createElement("p",{className:"item-desc"},t.home.core.controllability)),n.createElement("div",{className:"feature-item orchestration"},n.createElement("h3",{className:"item-title"},t.common.orchestration),n.createElement("p",{className:"item-desc"},t.home.core.orchestration)),n.createElement("div",{className:"feature-item reusability"},n.createElement("h3",{className:"item-title"},t.common.reusability),n.createElement("p",{className:"item-desc"},t.home.core.reusability))))))}}}]);