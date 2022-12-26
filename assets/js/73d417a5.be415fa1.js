"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[47371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,d=u["".concat(s,".").concat(m)]||u[m]||k[m]||l;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const l={title:"Deploy Linkis with Kubernetes",authors:["jacktao"],tags:["github"]},a=void 0,o={permalink:"/blog/2022/07/16/deploy-linkis-with-kubernetes",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/blog/2022-07-16-deploy-linkis-with-kubernetes.md",source:"@site/blog/2022-07-16-deploy-linkis-with-kubernetes.md",title:"Deploy Linkis with Kubernetes",description:"1. Dependencies and versions",date:"2022-07-16T00:00:00.000Z",formattedDate:"July 16, 2022",tags:[{label:"github",permalink:"/blog/tags/github"}],readingTime:2.03,truncated:!1,authors:[{name:"jacktao",title:"contributors",url:"https://github.com/jacktao007",imageURL:"https://avatars.githubusercontent.com/u/1073365?v=4",key:"jacktao"}],prevItem:{title:"Linkis1.1.1 adapts Hadoop 3.1.1 and deploys other services",permalink:"/blog/2022/08/08/linkis111-compile-integration"},nextItem:{title:"How to add a GitHub Action for the GitHub repository",permalink:"/blog/2022/07/04/how-to-add-auto-bot"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Dependencies and versions")),(0,i.kt)("p",null,"kind github\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind"},"https://github.com/kubernetes-sigs/kind")),(0,i.kt)("p",null,"kind website\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind.sigs.k8s.io/")),(0,i.kt)("p",null,"version:"),(0,i.kt)("p",null,"kind 0.14.0"),(0,i.kt)("p",null,"docker  20.10.17"),(0,i.kt)("p",null,"node v14.19.3"),(0,i.kt)("p",null,"Note:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure that the front and back ends can compile properly")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure that the component depends on the version")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Kind refers to the machine that uses docker container to simulate nodes. When the machine is restarted, the scheduler does not work because the container is changed."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.Install the docker")),(0,i.kt)("p",null,"\uff081\uff09Install the tutorial"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo yum install -y yum-utils device-mapper-persistent-data lvm2\n\nsudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n\nsudo sed -i 's+download.docker.com+mirrors.aliyun.com/docker-ce+' /etc/yum.repos.d/docker-ce.repo\n\nsudo yum makecache fast\n\nsudo yum -y install docker-ce\n\nsystemctl start docker\n\nsystemctl enable docker\n")),(0,i.kt)("p",null,"\uff082\uff09setting image mirrors"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'vi /etc/docker/daemon.json\n\n{\n\n"registry-mirrors": ["http://hub-mirror.c.163.com"],\n\n"insecure-registries": ["https://registry.mydomain.com","http://hub-mirror.c.163.com"]\n\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3.install the kind")),(0,i.kt)("p",null,"\uff081\uff09Manually download the Kind binary"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind/releases"},"https://github.com/kubernetes-sigs/kind/releases")),(0,i.kt)("p",null,"\uff082\uff09Install kind binary"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"chmod +x ./kind\n\nmv kind-linux-amd64 /usr/bin/kind\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4.Install the JDK and Maven")),(0,i.kt)("p",null,"\uff081\uff09Refer to the general installation tutorial to install the following components"),(0,i.kt)("p",null,"jdk 1.8"),(0,i.kt)("p",null,"mavne 3.5+"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5.Install the NodeJS")),(0,i.kt)("p",null,"\uff081\uff09version"),(0,i.kt)("p",null,"node v14.19.3"),(0,i.kt)("p",null,"\uff082\uff09install the nvm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'export http_proxy=http://10.0.0.150:7890\n\nexport https_proxy=http://10.0.0.150:7890\n\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n\nexport NVM_DIR="$HOME/.nvm"\n\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm\n\n[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion\n')),(0,i.kt)("p",null,"\uff083\uff09install the nodejs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nvm ls-remote\n\nnvm install v14.19.3\n")),(0,i.kt)("p",null,"\uff084\uff09setting NPM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm config set registry https://registry.npmmirror.com\n\nnpm config set sass_binary_site https://registry.npmmirror.com/binary.html?path=node-sass/\n")),(0,i.kt)("p",null,"\uff085\uff09Compiler front-end"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install -g yarn\n\nyarn\n\nyarn build\n\nyarn \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"6.Compile linkis")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# 1. When compiling for the first time, execute the following command first\n\n./mvnw -N install\n\n# 2. make the linkis distribution package\n\n# - Option 1: make the linkis distribution package only\n\n./mvnw clean install -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n\n# - Option 2: make the linkis distribution package and docker image\n\n./mvnw clean install -Pdocker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n\n# - Option 3: linkis distribution package and docker image (included web)\n\n./mvnw clean install -Pdocker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true -Dlinkis.build.web=true\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"7.Create the cluster")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dos2unix ./linkis-dist/helm/scripts/*.sh\n\n./linkis-dist/helm/scripts/create-test-kind.sh\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"8.install the helm charts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," ./scripts/install-charts.sh linkis linkis-demo\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"9.Visit the Linkis page")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl port-forward -n linkis  --address=0.0.0.0 service/linkis-demo-web 8087:8087\n\nhttp://10.0.2.101:8087\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"10.Test using the Linkis client")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kubectl -n linkis exec -it linkis-demo-ps-publicservice-77d7685d9-f59ht -- bash\n./linkis-cli -engineType shell-1 -codeType shell -code "echo \\"hello\\" "  -submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"11.install the kubectl")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat <<EOF > /etc/yum.repos.d/kubernetes.repo\n[kubernetes]\nname=Kubernetes\nbaseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/\nenabled=1\ngpgcheck=1\nrepo_gpgcheck=1\ngpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n\nyum install -y --nogpgcheck kubectl\n\nkubectl config view\xa0\xa0\nkubectl config get-contexts\xa0\xa0\nkubectl cluster-info\xa0\xa0\n")))}u.isMDXComponent=!0}}]);