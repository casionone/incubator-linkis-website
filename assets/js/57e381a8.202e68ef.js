"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[34040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15238:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Linkis Console Compile",sidebar_position:4},i=void 0,l={unversionedId:"development/web-build",id:"version-1.2.0/development/web-build",isDocsHomePage:!1,title:"Linkis Console Compile",description:"Start the process",source:"@site/versioned_docs/version-1.2.0/development/web-build.md",sourceDirName:"development",slug:"/development/web-build",permalink:"/docs/latest/development/web-build",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.2.0/development/web-build.md",tags:[],version:"1.2.0",sidebarPosition:4,frontMatter:{title:"Linkis Console Compile",sidebar_position:4},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"How To Quickly Implement A New Engine",permalink:"/docs/latest/development/new-engine-conn"},next:{title:"Swwager Annotation Instructions",permalink:"/docs/latest/development/swwager-instructions"}},c=[{value:"Start the process",id:"start-the-process",children:[{value:"1. Install Node.js",id:"1-install-nodejs",children:[]},{value:"2. The installation project",id:"2-the-installation-project",children:[]},{value:"3. Configuration",id:"3-configuration",children:[]},{value:"4. Package the project",id:"4-package-the-project",children:[]},{value:"5. Run the project",id:"5-run-the-project",children:[]},{value:"6. Common problem",id:"6-common-problem",children:[]}]}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"start-the-process"},"Start the process"),(0,r.kt)("h3",{id:"1-install-nodejs"},"1. Install Node.js"),(0,r.kt)("p",null,"Download Node.js to your computer and install it. Download link: ",(0,r.kt)("a",{parentName:"p",href:"http://nodejs.cn/download/"},"http://nodejs.cn/download/")," (It is recommended to use the latest stable version)\n",(0,r.kt)("strong",{parentName:"p"},"This step only needs to be performed the first time you use it. ")),(0,r.kt)("h3",{id:"2-the-installation-project"},"2. The installation project"),(0,r.kt)("p",null,"Execute the following commands in the terminal command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone git@github.com:apache/incubator-linkis.git\ncd incubator-linkis/web\nnpm install\n")),(0,r.kt)("p",null,"Introduction to the instruction:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pull the project package from the remote git repository  to the local computer"),(0,r.kt)("li",{parentName:"ol"},"Enter the web root directory of the project: cd Linkis/web"),(0,r.kt)("li",{parentName:"ol"},"Dependencies required to install the project: npm install")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This step only needs to be performed the first time you use it. ")),(0,r.kt)("h3",{id:"3-configuration"},"3. Configuration"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If it is a local runtime, this step can be skipped."))),(0,r.kt)("p",null,"You need to make some configuration in the code, such as the back-end interface address, etc., such as the .env.development file in the root directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// back-end interface address\nVUE_APP_MN_CONFIG_PREFIX=http://yourIp:yourPort/yourPath\n")),(0,r.kt)("p",null,"For specific explanation of the configuration, please refer to the official vue-cli document: ",(0,r.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E5%92%8C%E6%A8%A1%E5%BC%8F"},"Environment Variables and Modes")),(0,r.kt)("h3",{id:"4-package-the-project"},"4. Package the project"),(0,r.kt)("p",null,"You can package the project by executing the following commands on the terminal command line to generate compressed code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run build\n")),(0,r.kt)("p",null,'After the command is successfully executed, a "dist" folder and a "*-${getVersion()}-dist.zip" compressed file will appear in the project web directory. The directory dist/dist is the packaged code. You can Put the folder directly into your static server, or refer to the installation document and use the script to deploy and install.'),(0,r.kt)("h3",{id:"5-run-the-project"},"5. Run the project"),(0,r.kt)("p",null,"If you want to run the project on a local browser and change the code to view the effect, you need to execute the following commands in the terminal command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run serve\n")),(0,r.kt)("p",null,"In the browser (Chrome browser is recommended) to access the application through the link: ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/"),".\nWhen you run the project in this way, the effect of your code changes will be dynamically reflected in the browser."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: Because the project is developed separately from the front and back ends, when running on a local browser, the browser needs to be set to cross domains to access the back-end interface. For specific setting, please refer to ",(0,r.kt)("a",{parentName:"strong",href:"https://www.jianshu.com/p/56b1e01e6b6a"},"solve the chrome cross domain problem"),".")),(0,r.kt)("h3",{id:"6-common-problem"},"6. Common problem"),(0,r.kt)("h4",{id:"61-npm-install-cannot-succeed"},"6.1 npm install cannot succeed"),(0,r.kt)("p",null,"If you encounter this situation, you can use the domestic Taobao npm mirror:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install -g cnpm --registry=https://registry.npm.taobao.org\n")),(0,r.kt)("p",null,"Then, replace the npm install command by executing the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cnpm install\n")),(0,r.kt)("p",null,"Note that when the project is started and packaged, you can still use the npm run build and npm run serve commands"))}p.isMDXComponent=!0}}]);