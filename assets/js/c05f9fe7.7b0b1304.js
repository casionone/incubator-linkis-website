"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[71553],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(a),p=r,g=h["".concat(s,".").concat(p)]||h[p]||u[p]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},22403:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Label Manager",sidebar_position:3},o=void 0,l={unversionedId:"architecture/computation-governance-services/linkis-manager/label-manager",id:"version-1.1.1/architecture/computation-governance-services/linkis-manager/label-manager",isDocsHomePage:!1,title:"Label Manager",description:"LabelManager architecture design",source:"@site/versioned_docs/version-1.1.1/architecture/computation-governance-services/linkis-manager/label-manager.md",sourceDirName:"architecture/computation-governance-services/linkis-manager",slug:"/architecture/computation-governance-services/linkis-manager/label-manager",permalink:"/docs/1.1.1/architecture/computation-governance-services/linkis-manager/label-manager",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.1/architecture/computation-governance-services/linkis-manager/label-manager.md",tags:[],version:"1.1.1",sidebarPosition:3,frontMatter:{title:"Label Manager",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"App Manager",permalink:"/docs/1.1.1/architecture/computation-governance-services/linkis-manager/app-manager"},next:{title:"Resource Manager",permalink:"/docs/1.1.1/architecture/computation-governance-services/linkis-manager/resource-manager"}},s=[{value:"LabelManager architecture design",id:"labelmanager-architecture-design",children:[{value:"Overall architecture schematic",id:"overall-architecture-schematic",children:[]},{value:"1. LabelBuilder parsing process",id:"1-labelbuilder-parsing-process",children:[]},{value:"2. NodeLabelScorer scoring process",id:"2-nodelabelscorer-scoring-process",children:[]}]}],c={toc:s};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"labelmanager-architecture-design"},"LabelManager architecture design"),(0,r.kt)("h4",{id:"brief-description"},"Brief description"),(0,r.kt)("p",null,"LabelManager is a functional module in Linkis that provides label services to upper-level applications. It uses label technology to manage cluster resource allocation, service node election, user permission matching, and gateway routing and forwarding; it includes generalized analysis and processing tools that support various custom Label labels, And a universal tag matching scorer."),(0,r.kt)("h3",{id:"overall-architecture-schematic"},"Overall architecture schematic"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"label_manager_global",src:a(73688).Z}),"  "),(0,r.kt)("h4",{id:"architecture-description"},"Architecture description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LabelBuilder: Responsible for the work of label analysis. It can parse the input label type, keyword or character value to obtain a specific label entity. There is a default generalization implementation class or custom extensions."),(0,r.kt)("li",{parentName:"ul"},"LabelEntities: Refers to a collection of label entities, including cluster labels, configuration labels, engine labels, node labels, routing labels, search labels, etc."),(0,r.kt)("li",{parentName:"ul"},"NodeLabelService: The associated service interface class of instance/node and label, which defines the interface method of adding, deleting, modifying and checking the relationship between the two and matching the instance/node according to the label."),(0,r.kt)("li",{parentName:"ul"},"UserLabelService: Declare the associated operation between the user and the label."),(0,r.kt)("li",{parentName:"ul"},"ResourceLabelService: Declare the associated operations of cluster resources and labels, involving resource management of combined labels, cleaning or setting the resource value associated with the label."),(0,r.kt)("li",{parentName:"ul"},"NodeLabelScorer: Node label scorer, corresponding to the implementation of different label matching algorithms, using scores to indicate node label matching.")),(0,r.kt)("h3",{id:"1-labelbuilder-parsing-process"},"1. LabelBuilder parsing process"),(0,r.kt)("p",null,"Take the generic label analysis class GenericLabelBuilder as an example to clarify the overall process:\nThe process of label parsing/construction includes several steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"According to the input, select the appropriate label class to be parsed."),(0,r.kt)("li",{parentName:"ol"},"According to the definition information of the tag class, recursively analyze the generic structure to obtain the specific tag value type."),(0,r.kt)("li",{parentName:"ol"},"Convert the input value object to the tag value type, using implicit conversion or positive and negative analysis framework."),(0,r.kt)("li",{parentName:"ol"},"According to the return of 1-3, instantiate the label, and perform some post operations according to different label classes.")),(0,r.kt)("h3",{id:"2-nodelabelscorer-scoring-process"},"2. NodeLabelScorer scoring process"),(0,r.kt)("p",null,"In order to select a suitable engine node based on the tag list attached to the Linkis user execution request, it is necessary to make a selection of the matching engine list, which is quantified as the tag matching degree of the engine node, that is, the score.\nIn the label definition, each label has a feature value, namely CORE, SUITABLE, PRIORITIZED, OPTIONAL, and each feature value has a boost value, which is equivalent to a weight and an incentive value.\nAt the same time, some features such as CORE and SUITABLE must be unique features, that is, strong filtering is required during the matching process, and a node can only be associated with one CORE/SUITABLE label.\nAccording to the relationship between existing tags, nodes, and request attached tags, the following schematic diagram can be drawn:\n",(0,r.kt)("img",{alt:"label_manager_scorer",src:a(95791).Z}),"  "),(0,r.kt)("p",null,"The built-in default scoring logic process should generally include the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The input of the method should be two sets of network relationship lists, namely ",(0,r.kt)("inlineCode",{parentName:"li"},"Label -> Node")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Node -> Label"),", where the Node node in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Node -> Label")," relationship must have all the CORE and SUITABLE feature labels, these nodes are also called candidate nodes."),(0,r.kt)("li",{parentName:"ol"},"The first step is to traverse and calculate the relationship list of ",(0,r.kt)("inlineCode",{parentName:"li"},"Node -> Label"),", and traverse the label Label associated with each node. In this step, the label is scored first. If the label is not the label attached to the request, the score is 0.\nOtherwise, the score is divided into: (basic score/the number of times the tag corresponds to the feature value in the request) * the incentive value of the corresponding feature value, where the basic score defaults to 1, and the initial score of the node is the sum of the associated tag scores; where because The CORE/SUITABLE type label must be the only label, and the number of occurrences is always 1."),(0,r.kt)("li",{parentName:"ol"},"After obtaining the initial score of the node, the second step is to traverse the calculation of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Label -> Node")," relationship. Since the first step ignores the effect of unrequested attached labels on the score, the proportion of irrelevant labels will indeed affect the score. This type of label is unified with the UNKNOWN feature, and this feature also has a corresponding incentive value;\nWe set that the higher the proportion of candidate nodes associated with irrelevant labels in the total associated nodes, the more significant the impact on the score, which can further accumulate the initial score of the node obtained in the first step."),(0,r.kt)("li",{parentName:"ol"},"Normalize the standard deviation of the scores of the candidate nodes and sort them.")))}d.isMDXComponent=!0},73688:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/label_manager_global-eb08b6d4ae0c8f67384a47d26b9261eb.png"},95791:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/label_manager_scorer-5c4028cc59bcf35cd3cb24e0d8518e1d.png"}}]);