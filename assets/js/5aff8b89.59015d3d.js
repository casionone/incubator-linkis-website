"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[90371],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),p=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||r;return a?i.createElement(d,o(o({ref:t},l),{},{components:a})):i.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},27268:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const r={title:"PPMC/Committer Related Permission Configuration",sidebar_position:8},o=void 0,s={unversionedId:"ppmc-related-permission-configuration",id:"ppmc-related-permission-configuration",isDocsHomePage:!1,title:"PPMC/Committer Related Permission Configuration",description:"PPMC (Podling Project Management Committee)/Committer member, bind github account process/and main email subscription",source:"@site/community/ppmc-related-permission-configuration.md",sourceDirName:".",slug:"/ppmc-related-permission-configuration",permalink:"/community/ppmc-related-permission-configuration",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/community/ppmc-related-permission-configuration.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"PPMC/Committer Related Permission Configuration",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"ICLA Signing Process",permalink:"/community/how-to-sign-apache-icla"},next:{title:"How to Write Unit Test Code",permalink:"/community/how-to-write-unit-test-code"}},c=[{value:"1. Binding github account process",id:"1-binding-github-account-process",children:[{value:"1.1 Process overview",id:"11-process-overview",children:[]},{value:"1.2 Associate apache Id with github account",id:"12-associate-apache-id-with-github-account",children:[]},{value:"1.3 Enable 2FA authentication (login token)",id:"13-enable-2fa-authentication-login-token",children:[]},{value:"1.4 Open permission application on gitbox",id:"14-open-permission-application-on-gitbox",children:[]},{value:"1.5 Related Links Documentation",id:"15-related-links-documentation",children:[]}]},{value:"2. Configure emails and email subscriptions",id:"2-configure-emails-and-email-subscriptions",children:[{value:"2.1 Associate your own mailbox",id:"21-associate-your-own-mailbox",children:[]},{value:"2.2 Configure forwarding address",id:"22-configure-forwarding-address",children:[]},{value:"2.2 Subscribe to related mailing lists",id:"22-subscribe-to-related-mailing-lists",children:[]}]}],p={toc:c};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"PPMC (Podling Project Management Committee)/Committer member, bind github account process/and main email subscription")),(0,n.kt)("h2",{id:"1-binding-github-account-process"},"1. Binding github account process"),(0,n.kt)("h3",{id:"11-process-overview"},"1.1 Process overview"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Associate the apache account with the github account"),(0,n.kt)("li",{parentName:"ol"},"Securely enable 2FA authentication for github personal accounts"),(0,n.kt)("li",{parentName:"ol"},"Open permission application on gitbox")),(0,n.kt)("h3",{id:"12-associate-apache-id-with-github-account"},"1.2 Associate apache Id with github account"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Way 1"),"\nLog in to ",(0,n.kt)("a",{parentName:"p",href:"https://id.apache.org"},"https://id.apache.org")," and set the ","[Your GitHub Username]"," field in LDAP to your own GitHub ID. Enter your password Click submit changes."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153324492-cc4e4348-5e4b-450f-a23f-6c208e1a26fb.png",alt:"Open-Apache's-GitHub-warehouse1"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Way 2"),"\nVisit ",(0,n.kt)("a",{parentName:"p",href:"https://whismy.apache.org/roster/committer/xxx"},"https://whismy.apache.org/roster/committer/xxx")," (replace with your apache id) to modify the corresponding data."),(0,n.kt)("h3",{id:"13-enable-2fa-authentication-login-token"},"1.3 Enable 2FA authentication (login token)"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"github personal account security Enable 2FA authentication (login token)")),(0,n.kt)("p",null,"Two-factor authentication (2FA) refers to a method of authenticating users by combining passwords and physical items (credit cards, SMS mobile phones, tokens, or biometric indicators such as fingerprints). To keep the committer account secure, we require you to enable 2FA on GitHub to authenticate logged in users and contribute code. For details, please refer to 2FA.\nYou need to install TOTP software on the mobile phone, search for TOTP in the application market (Microsoft Authenticator is available for Android), and IOS Apple mobile phone personally recommends downloading the authy token software, which can be backed up in the cloud by binding the mobile phone. Mobile SMS is also supported, but the github configuration page does not have a mobile phone number +86 in China by default. For the front-end code bypass when you need to modify the configuration, see ",(0,n.kt)("a",{parentName:"p",href:"https://www.programmerall.com/article/5457100195/"},"https://www.programmerall.com/article/5457100195/")," ."),(0,n.kt)("p",null,"step1 Visit the personal account security settings page ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/settings/security"},"https://github.com/settings/security")," and select the fourth item ","[Account security]"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325044-4b68a5c0-959a-4077-abdf-5ad5e67aa26a.png",alt:"open-Apache's-GitHub-warehouse4"})),(0,n.kt)("p",null,"step2 Select\u3010Set up using an app\u3011Next step"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325063-ea61ad8c-cbbc-4053-8a37-35d315dc3b00.png",alt:"open-Apache's-GitHub-warehouse5"})),(0,n.kt)("p",null,"Step3 enter the qr code binding page, scan the code with the pre-downloaded totp type app (such as Google identity authenticator\u3001Microsoft Authenticator), and input the 6 displayed on the mobile phone as the token"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325084-b57d3647-a6a5-4e15-9e9c-3c2f632c0655.png",alt:"open-Apache's-GitHub-warehouse6"})),(0,n.kt)("p",null,"step4 Download recover codes, then enter the success page and click done to bind successfully"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325124-a523bd8c-f6d5-44ce-8372-3804d9c693c6.png",alt:"open-Apache's-GitHub-warehouse7"})),(0,n.kt)("p",null,"Notice\nWhen 2FA verification is turned on, you need to use the username/password + mobile phone authentication code to log in to GitHub.\nWhen 2FA authentication is enabled, a private access token needs to be generated for git submission and other operations. At this point, you will use username + private access token instead of username + password to submit code (subsequent configuration as needed).\nFor details, see Creating a Private Token."),(0,n.kt)("p",null,"If 2FA is turned off in the future, you will be delisted from this project, and you will not be able to access our repository and the fork repository from our private repository."),(0,n.kt)("h3",{id:"14-open-permission-application-on-gitbox"},"1.4 Open permission application on gitbox"),(0,n.kt)("p",null,"step1 Visit ",(0,n.kt)("a",{parentName:"p",href:"https://gitbox.apache.org/setup/"},"https://gitbox.apache.org/setup/")," to authorize the associated apache account"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325227-f917e9c3-16ea-42d4-8432-4b63fd5849da.png",alt:"open-Apache's-GitHub-warehouse8"})),(0,n.kt)("p",null,"step 2 Authorize the associated github account"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325245-e2eea319-278f-4254-afb8-7e1ec418f004.png",alt:"open-Apache's-GitHub-warehouse9"})),(0,n.kt)("p",null,"step3 mfa status check"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325267-71761576-9467-49a1-809b-2a5c0fc1a681.png",alt:"open-Apache's-GitHub-warehouse10"})),(0,n.kt)("p",null,'Notice\nAfter successful execution, the following figure is shown. After the success, the write permission will be activated within about an hour. If MFA Status says "User not a member of the ASF GitHub organisation. Please make sure you are a part of the ASF Organisation on GitHub and have 2FA enabled. Visit id.apache.org and set your GitHub ID to be invited to the org .\u201d Please check whether ',"[Associating apache and github accounts]"," is completed/2FA is enabled, if it is normal, please verify it later, because there is a delay in acquiring MFA status for new members."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325293-654c1cd4-7b2c-44be-94b0-9520e2ea05c1.png",alt:"open-Apache's-GitHub-warehouse11"})),(0,n.kt)("p",null,"After the successful invitation, the personal github account information can be seen that the affiliated organization has apache"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153324664-6633b5be-a5b5-400a-b9db-685c4eeab8ad.png",alt:"open-Apache's-GitHub-warehouse3"})),(0,n.kt)("h3",{id:"15-related-links-documentation"},"1.5 Related Links Documentation"),(0,n.kt)("p",null,"[github uses TOTP to enable 2FA authentication]"," ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication"},"https://docs.github.com/cn/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication")),(0,n.kt)("p",null,"[Create a private token]"," ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token")),(0,n.kt)("p",null,"[Introduction to gitbox]"," ",(0,n.kt)("a",{parentName:"p",href:"https://gitbox.apache.org"},"https://gitbox.apache.org")),(0,n.kt)("p",null,"[apache and github]"," ",(0,n.kt)("a",{parentName:"p",href:"https://infra.apache.org/apache-github.html"},"https://infra.apache.org/apache-github.html")),(0,n.kt)("p",null,"\u3010git github &gitbox \u3011",(0,n.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INFRA/Git%2C+GitHub+and+Gitbox"},"https://cwiki.apache.org/confluence/display/INFRA/Git%2C+GitHub+and+Gitbox")),(0,n.kt)("h2",{id:"2-configure-emails-and-email-subscriptions"},"2. Configure emails and email subscriptions"),(0,n.kt)("h3",{id:"21-associate-your-own-mailbox"},"2.1 Associate your own mailbox"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"See ",(0,n.kt)("a",{parentName:"p",href:"https://infra.apache.org/committer-email.html"},"https://infra.apache.org/committer-email.html")," for details"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Method 1: Log in to ",(0,n.kt)("a",{parentName:"li",href:"https://id.apache.org/"},"https://id.apache.org/"),", fill in your own email address in the ",(0,n.kt)("inlineCode",{parentName:"li"},"Forwarding email address")," field (usually the address provided in the Independent Contributor License Agreement (ICLA) you provided), Save changes"),(0,n.kt)("li",{parentName:"ul"},"Method 2: Log in to ",(0,n.kt)("a",{parentName:"li",href:"https://whismy.apache.org/roster/committer/__self"},"https://whismy.apache.org/roster/committer/__self"),"__ and double-click ",(0,n.kt)("inlineCode",{parentName:"li"},"Email forwarded to")," to edit"))),(0,n.kt)("h3",{id:"22-configure-forwarding-address"},"2.2 Configure forwarding address"),(0,n.kt)("p",null,"You cannot use your Apache email address directly. You must set up forwarding for this address. When writing to your ASF address, the email will be forwarded to your forwarding address. When you reply, the message goes back through the ASF system, so people you write with will see it's coming from your ASF address\n. Configure in your email environment"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"Server: mail-relay.apache.org Port: 587 (STARTTLS), 465 (SSL) User/Pass: {Your LDAP credentials}\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(69860).Z})),(0,n.kt)("h3",{id:"22-subscribe-to-related-mailing-lists"},"2.2 Subscribe to related mailing lists"),(0,n.kt)("p",null,"As a member of PPMC, you need to actively participate in community construction, promote the healthy development of the community, undertake the responsibility and governance of the project, and this part of the work is often carried out by email (discussion/voting/answering questions, etc.),\nEvery PPMC member is required to subscribe to the following mailing lists:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subscribe Mail"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unsubscribe Mail"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mail Archive"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"mailto:dev@linkis.apache.org"},"dev@linkis.apache.org")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Linkis community activity information, project discussion announcements, etc."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"mailto:dev-subscribe@linkis.apache.org"},"Subscribe")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"mailto:dev-unsubscribe@linkis.apache.org"},"unsubscribe")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"http://mail-archives.apache.org/mod_mbox/linkis-dev"},"archive"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"mailto:private@linkis.apache.org"},"private@linkis.apache.org")),(0,n.kt)("td",{parentName:"tr",align:"left"},"This mailing list is private, visible inside PPMC, mainly for internal discussions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Subscribe]","(mailto:private-subscribe@ linkis.apache.org)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"mailto:private-unsubscribe@linkis.apache.org"},"unsubscribe")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"http://mail-archives.apache.org/mod_mbox/linkis-private"},"archive"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Public emails from the incubator community, mainly related to incubation projects"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Subscribe]","(mailto:",(0,n.kt)("a",{parentName:"td",href:"mailto:general-subscribe@incubator.apache."},"general-subscribe@incubator.apache.")," org)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"mailto:general-unsubscribe@incubator.apache.org"},"unsubscribe")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"http://mail-archives.apache.org/mod_mbox/incubator-general"},"archive"))))),(0,n.kt)("p",null,"Subscription operations can be found in the guide ",(0,n.kt)("a",{parentName:"p",href:"/community/how-to-subscribe"},"Subscribe to the mailing list")),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Note: ",(0,n.kt)("a",{parentName:"p",href:"mailto:private@linkis.apache.org"},"private@linkis.apache.org")," subscriptions need to be reviewed by the mail moderator (",(0,n.kt)("a",{parentName:"p",href:"mailto:shaofengshi@apache.org"},"shaofengshi@apache.org"),"), so please attach personal name information to the content of the mail when subscribing for moderator review."))),(0,n.kt)("p",null,"If the above subscription is unsuccessful, you can try to use the web-side tool: ",(0,n.kt)("a",{parentName:"p",href:"https://whismy.apache.org/committers/subscribe.cgi"},"https://whismy.apache.org/committers/subscribe.cgi")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(79289).Z})),(0,n.kt)("p",null,"Mailing list subscriptions, PPMC members can view here: ",(0,n.kt)("a",{parentName:"p",href:"https://whismy.apache.org/roster/ppmc/linkis"},"https://whismy.apache.org/roster/ppmc/linkis")))}l.isMDXComponent=!0},69860:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mail-relay-1f2eabdddc519c075b52d3b1eca7dfe0.png"},79289:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/subscribe-6582a13d3b388415b07d58fdb98bbe84.png"}}]);