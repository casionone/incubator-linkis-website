"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[46254],{20830:(e,t,n)=>{n.d(t,{W:()=>r});var a=n(67294);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},18617:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294);const r="iconExternalLink_wgqa",l=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},46254:(e,t,n)=>{n.d(t,{Z:()=>ye});var a=n(67294),r=n(86010),l=n(16550),o=n(24973),c=n(941);const s="skipToContent_OuoZ";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const m=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.k6)();return(0,c.SL)((n=>{let{location:a}=n;e.current&&!a.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var u=n(87462);function d(e){let{width:t=20,height:n=20,className:r,...l}=e;return a.createElement("svg",(0,u.Z)({className:r,viewBox:"0 0 24 24",width:t,height:n,fill:"currentColor"},l),a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}const h="announcementBar_axC9",f="announcementBarPlaceholder_xYHE",b="announcementBarClose_A3A1",v="announcementBarContent_6uhP";const g=function(){const{isClosed:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!n)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:m}=n;return!l||m&&e?null:a.createElement("div",{className:h,style:{backgroundColor:s,color:i},role:"banner"},m&&a.createElement("div",{className:f}),a.createElement("div",{className:v,dangerouslySetInnerHTML:{__html:l}}),m?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",b),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(d,{width:14,height:14})):null)};var E=n(81036),p=n(72389);const k={toggle:"toggle_iYfV"},Z=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(k.toggle,k.dark),style:n},t)},y=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(k.toggle,k.light),style:n},t)},_=(0,a.memo)((e=>{let{className:t,icons:n,checked:l,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(l),[m,u]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":m,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>d.current?.click()},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>u(!0),onBlur:()=>u(!1),onKeyDown:e=>{"Enter"===e.key&&d.current?.click()}}))}));function w(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.LU)(),o=(0,p.Z)();return a.createElement(_,(0,u.Z)({disabled:!o,icons:{checked:a.createElement(Z,{icon:t,style:n}),unchecked:a.createElement(y,{icon:r,style:l})}},e))}var C=n(85350),N=n(77898);const S=e=>{const t=(0,l.TH)(),[n,r]=(0,a.useState)(e),o=(0,a.useRef)(!1),[s,i]=(0,a.useState)(0),m=(0,a.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return(0,N.Z)(((t,n)=>{const a=t.scrollY,l=n?.scrollY;if(!e)return;if(a<s)return void r(!0);if(o.current)return o.current=!1,void r(!1);l&&0===a&&r(!0);const c=document.documentElement.scrollHeight-s,i=window.innerHeight;l&&a>=l?r(!1):a+i<c&&r(!0)}),[s,o]),(0,c.SL)((t=>{e&&!t.location.hash&&r(!0)})),(0,a.useEffect)((()=>{e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:n}};const L=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])};var D=n(93783),I=n(96730),T=n(68044),A=n(55537);const B=e=>{let{width:t=30,height:n=30,className:r,...l}=e;return a.createElement("svg",(0,u.Z)({className:r,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},l),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))};function x(e){let{width:t=20,height:n=20,className:r,...l}=e;return a.createElement("svg",(0,u.Z)({className:r,viewBox:"0 0 413.348 413.348",width:t,height:n,fill:"currentColor"},l),a.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}const P="toggle_2i4l",M="navbarHideable_RReh",R="navbarHidden_FBwS",O="navbarSidebarToggle_AVbO",U="navbarSidebarCloseSvg_+9jJ",V="right";function $(){return(0,c.LU)().navbar.items}function H(){const{colorMode:{disableSwitch:e}}=(0,c.LU)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=(0,C.Z)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?r():n()),[n,r]),disabled:e}}function j(e){let{sidebarShown:t,toggleSidebar:n}=e;L(t);const l=$(),s=H(),i=function(e){let{sidebarShown:t,toggleSidebar:n}=e;const r=(0,c.g8)()?.({toggleSidebar:n}),l=(0,c.D9)(r),[o,s]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{r&&!l&&s(!0)}),[r,l]);const i=!!r;return(0,a.useEffect)((()=>{i?t||s(!0):s(!1)}),[t,i]),{shown:o,hide:(0,a.useCallback)((()=>{s(!1)}),[]),content:r}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(A.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&a.createElement(w,{className:O,checked:s.isDarkTheme,onChange:s.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(x,{width:20,height:20,className:U}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map(((e,t)=>a.createElement(T.Z,(0,u.Z)({mobile:!0},e,{onClick:n,key:t})))))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}const F=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.LU)(),n=function(){const e=(0,D.Z)(),t="mobile"===e,[n,r]=(0,a.useState)(!1);(0,c.Rb)((()=>{n&&r(!1)}));const l=(0,a.useCallback)((()=>{r((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:n}}(),l=H(),o=(0,I.useActivePlugin)(),{navbarRef:s,isNavbarVisible:i}=S(e),m=$(),d=m.some((e=>"search"===e.type)),{leftItems:h,rightItems:f}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??V))),rightItems:e.filter((e=>"right"===(e.position??V)))}}(m);return a.createElement("nav",{ref:s,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[M]:e,[R]:e&&!i})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},(m?.length>0||o)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(B,null)),a.createElement(A.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),h.map(((e,t)=>a.createElement(T.Z,(0,u.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},f.map(((e,t)=>a.createElement(T.Z,(0,u.Z)({},e,{key:t})))),!l.disabled&&a.createElement(w,{className:P,checked:l.isDarkTheme,onChange:l.toggle}),!d&&a.createElement(E.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(j,{sidebarShown:n.shown,toggleSidebar:n.toggle}))};var K=n(36742),W=n(44996),q=n(13919);const z="footerLogoLink_SRtH";var Y=n(98465),G=n(18617);function X(e){let{to:t,href:n,label:r,prependBaseUrlToHref:l,...o}=e;const c=(0,W.Z)(t),s=(0,W.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(K.Z,(0,u.Z)({className:"footer__link-item"},n?{href:l?s:n}:{to:c},o),n&&!(0,q.Z)(n)?a.createElement("span",null,r,a.createElement(G.Z,null)):r)}const J=e=>{let{sources:t,alt:n}=e;return a.createElement(Y.Z,{className:"footer__logo",alt:n,sources:t})};const Q=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,W.Z)(l.src),dark:(0,W.Z)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(X,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(K.Z,{href:l.href,className:z},a.createElement(J,{alt:l.alt,sources:o})):a.createElement(J,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var ee=n(10412);const te=(0,c.WA)("theme"),ne="light",ae="dark",re=e=>e===ae?ae:ne,le=e=>{(0,c.WA)("theme").set(re(e))},oe=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[r,l]=(0,a.useState)((e=>ee.Z.canUseDOM?re(document.documentElement.getAttribute("data-theme")):re(e))(e)),o=(0,a.useCallback)((()=>{l(ne),le(ne)}),[]),s=(0,a.useCallback)((()=>{l(ae),le(ae)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",re(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=te.get();null!==e&&l(re(e))}catch(e){console.error(e)}}),[l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;l(t?ae:ne)}))}),[]),{isDarkTheme:r===ae,setLightTheme:o,setDarkTheme:s}};var ce=n(82924);const se=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=oe();return a.createElement(ce.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},ie="docusaurus.tab.",me=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)(`${ie}${e}`).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(ie)){const n=t.substring(ie.length);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},ue=(0,a.createContext)(void 0);const de=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=me();return a.createElement(ue.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function he(e){let{children:t}=e;return a.createElement(se,null,a.createElement(c.pl,null,a.createElement(de,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t)))))}var fe=n(99105),be=n(52263);function ve(e){let{locale:t,version:n,tag:r}=e;const l=t;return a.createElement(fe.Z,null,l&&a.createElement("meta",{name:"docsearch:language",content:l}),n&&a.createElement("meta",{name:"docsearch:version",content:n}),r&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var ge=n(41217);function Ee(){const{i18n:{defaultLocale:e,locales:t}}=(0,be.Z)(),n=(0,c.l5)();return a.createElement(fe.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function pe(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,be.Z)(),r=function(){const{siteConfig:{url:e}}=(0,be.Z)(),{pathname:t}=(0,l.TH)();return e+(0,W.Z)(t)}(),o=t?`${n}${t}`:r;return a.createElement(fe.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function ke(e){const{siteConfig:{favicon:t},i18n:{currentLocale:n,localeConfigs:r}}=(0,be.Z)(),{metadatas:l,image:o}=(0,c.LU)(),{title:s,description:i,image:m,keywords:d,searchMetadatas:h}=e,f=(0,W.Z)(t),b=(0,c.pe)(s),v=n,g=r[n].direction;return a.createElement(a.Fragment,null,a.createElement(fe.Z,null,a.createElement("html",{lang:v,dir:g}),t&&a.createElement("link",{rel:"shortcut icon",href:f}),a.createElement("title",null,b),a.createElement("meta",{property:"og:title",content:b}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o&&a.createElement(ge.Z,{image:o}),m&&a.createElement(ge.Z,{image:m}),a.createElement(ge.Z,{description:i,keywords:d}),a.createElement(pe,null),a.createElement(Ee,null),a.createElement(ve,(0,u.Z)({tag:c.HX,locale:n},h)),a.createElement(fe.Z,null,l.map(((e,t)=>a.createElement("meta",(0,u.Z)({key:`metadata_${t}`},e))))))}const Ze=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const ye=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return Ze(),a.createElement(he,null,a.createElement(ke,e),a.createElement(m,null),a.createElement(g,null),a.createElement(F,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(Q,null))}},55537:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(36742),o=n(98465),c=n(44996),s=n(52263),i=n(941);const m=e=>{const{siteConfig:{title:t}}=(0,s.Z)(),{navbar:{title:n,logo:m={src:""}}}=(0,i.LU)(),{imageClassName:u,titleClassName:d,...h}=e,f=(0,c.Z)(m.href||"/"),b={light:(0,c.Z)(m.src),dark:(0,c.Z)(m.srcDark||m.src)};return r.createElement(l.Z,(0,a.Z)({to:f},h,m.target&&{target:m.target}),m.src&&r.createElement(o.Z,{className:u,sources:b,alt:m.alt||n||t}),null!=n&&r.createElement("b",{className:d},n))}},5525:(e,t,n)=>{n.d(t,{O:()=>u,Z:()=>f});var a=n(87462),r=n(67294),l=n(86010),o=n(36742),c=n(44996),s=n(18617),i=n(13919),m=n(68044);function u(e){let{activeBasePath:t,activeBaseRegex:n,to:l,href:m,label:u,activeClassName:d="",prependBaseUrlToHref:h,...f}=e;const b=(0,c.Z)(l),v=(0,c.Z)(t),g=(0,c.Z)(m,{forcePrependBaseUrl:!0}),E=u&&m&&!(0,i.Z)(m),p="dropdown__link--active"===d;return r.createElement(o.Z,(0,a.Z)({},m?{href:h?g:m}:{isNavLink:!0,activeClassName:f.className?.includes(d)?"":d,to:b,...t||n?{isActive:(e,t)=>n?new RegExp(n).test(t.pathname):t.pathname.startsWith(v)}:null},f),E?r.createElement("span",null,u,r.createElement(s.Z,p&&{width:12,height:12})):u)}function d(e){let{className:t,isDropdownItem:n=!1,...o}=e;const c=r.createElement(u,(0,a.Z)({className:(0,l.Z)(n?"dropdown__link":"navbar__item navbar__link",t)},o));return n?r.createElement("li",null,c):c}function h(e){let{className:t,isDropdownItem:n,...o}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(u,(0,a.Z)({className:(0,l.Z)("menu__link",t)},o)))}const f=function(e){let{mobile:t=!1,position:n,...l}=e;const o=t?h:d;return r.createElement(o,(0,a.Z)({},l,{activeClassName:l.activeClassName??(0,m.E)(t)}))}},76400:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),r=n(67294),l=n(5525),o=n(96730),c=n(86010),s=n(68044),i=n(941),m=n(18780);function u(e){let{docId:t,label:n,docsPluginId:u,...d}=e;const{activeVersion:h,activeDoc:f}=(0,o.useActiveDocContext)(u),{preferredVersion:b}=(0,i.J)(u),v=(0,o.useLatestVersion)(u),g=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${a}`)}return a}((0,m.uniq)([h,b,v].filter(Boolean)),t),E=(0,s.E)(d.mobile);return r.createElement(l.Z,(0,a.Z)({exact:!0},d,{className:(0,c.Z)(d.className,{[E]:f?.sidebar&&f.sidebar===g.sidebar}),activeClassName:E,label:n??g.id,to:g.path}))}},59308:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),r=n(67294),l=n(5525),o=n(23154),c=n(96730),s=n(941),i=n(24973);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function u(e){let{mobile:t,docsPluginId:n,dropdownActiveClassDisabled:u,dropdownItemsBefore:d,dropdownItemsAfter:h,...f}=e;const b=(0,c.useActiveDocContext)(n),v=(0,c.useVersions)(n),g=(0,c.useLatestVersion)(n),{preferredVersion:E,savePreferredVersionName:p}=(0,s.J)(n);const k=function(){const e=v.map((e=>{const t=b?.alternateDocVersions[e.name]||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===b?.activeVersion,onClick:()=>{p(e.name)}}}));return[...d,...e,...h]}(),Z=b.activeVersion??E??g,y=t&&k?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):Z.label,_=t&&k?void 0:m(Z).path;return k.length<=1?r.createElement(l.Z,(0,a.Z)({},f,{mobile:t,label:y,to:_,isActive:u?()=>!1:void 0})):r.createElement(o.Z,(0,a.Z)({},f,{mobile:t,label:y,to:_,items:k,isActive:u?()=>!1:void 0}))}},47250:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87462),r=n(67294),l=n(5525),o=n(96730),c=n(941);function s(e){let{label:t,to:n,docsPluginId:s,...i}=e;const m=(0,o.useActiveVersion)(s),{preferredVersion:u}=(0,c.J)(s),d=(0,o.useLatestVersion)(s),h=m??u??d,f=t??h.label,b=n??(e=>e.docs.find((t=>t.id===e.mainDocId)))(h).path;return r.createElement(l.Z,(0,a.Z)({},i,{label:f,to:b}))}},23154:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),l=n(86010),o=n(941),c=n(5525),s=n(68044);function i(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function m(e){let{items:t,position:n,className:o,...i}=e;const m=(0,r.useRef)(null),u=(0,r.useRef)(null),[d,h]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]),r.createElement("div",{ref:m,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===n,"dropdown--show":d})},r.createElement(c.O,(0,a.Z)({className:(0,l.Z)("navbar__link",o)},i,{onClick:i.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),h(!d))}}),i.children??i.label),r.createElement("ul",{ref:u,className:"dropdown__menu"},t.map(((e,n)=>r.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:e=>{if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);const t=m.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active"},e,{key:n}))))))}function u(e){let{items:t,className:n,position:m,...u}=e;const d=(0,o.be)(),h=i(t,d),{collapsed:f,toggleCollapsed:b,setCollapsed:v}=(0,o.uR)({initialState:()=>!h});return(0,r.useEffect)((()=>{h&&v(!h)}),[d,h]),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":f})},r.createElement(c.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",n)},u,{onClick:e=>{e.preventDefault(),b()}}),u.children??u.label),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},t.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:u.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const d=function(e){let{mobile:t=!1,...n}=e;const a=t?u:m;return r.createElement(a,n)}},68044:(e,t,n)=>{n.d(t,{Z:()=>v,E:()=>b});var a=n(67294),r=n(5525),l=n(23154),o=n(87462),c=n(96196),s=n(52263),i=n(941);const m="iconLanguage_EbrZ";function u(e){let{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:r,...u}=e;const{i18n:{currentLocale:d,locales:h,localeConfigs:f}}=(0,s.Z)(),b=(0,i.l5)();function v(e){return f[e].label}const g=[...n,...h.map((e=>{const t=`pathname://${b.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:v(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],E=t?"Languages":v(d);return a.createElement(l.Z,(0,o.Z)({},u,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(c.Z,{className:m}),a.createElement("span",null,E)),items:g}))}var d=n(81036);function h(e){let{mobile:t}=e;return t?null:a.createElement(d.Z,null)}const f={default:()=>r.Z,localeDropdown:()=>u,search:()=>h,dropdown:()=>l.Z,docsVersion:()=>n(47250).Z,docsVersionDropdown:()=>n(59308).Z,doc:()=>n(76400).Z};const b=e=>e?"menu__link--active":"navbar__link--active";function v(e){let{type:t,...n}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=(e=>{const t=f[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()})(r);return a.createElement(l,n)}},82924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(67294).createContext(void 0)},98465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),c=n(85350);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const t=(0,o.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:m,alt:u="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:u,className:(0,l.Z)(s.themedImage,s[`themedImage--${e}`],m)},d)))))}},77898:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(10412);const l=()=>r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null,o=function(e,t){void 0===t&&(t=[]);const n=(0,a.useRef)(l()),r=()=>{const t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)}},85350:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(82924);const l=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},81036:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(87462),r=n(67294),l=n(73935),o=n(52263),c=n(16550),s=n(44996),i=n(36742),m=n(99105),u=n(6397);function d(){return r.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var h=n(20830),f=["translations"];function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(s){c=!0,r=s}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function E(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p="Ctrl";var k=r.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,l=E(e,f),o=a.buttonText,c=void 0===o?"Search":o,s=a.buttonAriaLabel,i=void 0===s?"Search":s,m=v((0,r.useState)(null),2),u=m[0],g=m[1];return(0,r.useEffect)((function(){"undefined"!=typeof navigator&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?g("\u2318"):g(p))}),[]),r.createElement("button",b({type:"button",className:"DocSearch DocSearch-Button","aria-label":i},l,{ref:t}),r.createElement("span",{className:"DocSearch-Button-Container"},r.createElement(h.W,null),r.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),r.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&r.createElement(r.Fragment,null,r.createElement("kbd",{className:"DocSearch-Button-Key"},u===p?r.createElement(d,null):u),r.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))})),Z=n(96730),y=n(941);function _(){const{locale:e,tags:t}=function(){const{i18n:e}=(0,o.Z)(),t=(0,Z.useAllDocsData)(),n=(0,Z.useActivePluginAndVersion)(),a=(0,y.Oh)(),r=[y.HX,...Object.keys(t).map((function(e){const r=n?.activePlugin?.pluginId===e?n.activeVersion:void 0,l=a[e],o=t[e].versions.find((e=>e.isLast)),c=r??l??o;return(0,y.os)(e,c.name)}))];return{locale:e.currentLocale,tags:r}}();return[`language:${e}`,t.map((e=>`docusaurus_tag:${e}`))]}var w=n(24973);const C="searchBox_NKBi";let N=null;function S(e){let{hit:t,children:n}=e;return r.createElement(i.Z,{to:t.url},n)}function L(e){let{state:t,onClose:n}=e;const{generateSearchPageLink:a}=(0,u.Z)();return r.createElement(i.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function D(e){let{contextualSearch:t,...i}=e;const{siteMetadata:u}=(0,o.Z)(),d=_(),h=i.searchParameters?.facetFilters??[],f=t?[...d,...h]:h,b={...i.searchParameters,facetFilters:f},{withBaseUrl:v}=(0,s.C)(),g=(0,c.k6)(),E=(0,r.useRef)(null),p=(0,r.useRef)(null),[Z,y]=(0,r.useState)(!1),[D,I]=(0,r.useState)(null),T=(0,r.useCallback)((()=>N?Promise.resolve():Promise.all([n.e(12431).then(n.bind(n,12431)),Promise.all([n.e(40532),n.e(46945)]).then(n.bind(n,46945)),Promise.all([n.e(40532),n.e(95256)]).then(n.bind(n,95256))]).then((e=>{let[{DocSearchModal:t}]=e;N=t}))),[]),A=(0,r.useCallback)((()=>{T().then((()=>{E.current=document.createElement("div"),document.body.insertBefore(E.current,document.body.firstChild),y(!0)}))}),[T,y]),B=(0,r.useCallback)((()=>{y(!1),E.current.remove()}),[y]),x=(0,r.useCallback)((e=>{T().then((()=>{y(!0),I(e.key)}))}),[T,y,I]),P=(0,r.useRef)({navigate(e){let{itemUrl:t}=e;g.push(t)}}).current,M=(0,r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:v(`${t.pathname}${t.hash}`)}})))).current,R=(0,r.useMemo)((()=>e=>r.createElement(L,(0,a.Z)({},e,{onClose:B}))),[B]),O=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",u.docusaurusVersion),e)),[u.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,l=e.onInput,o=e.searchButtonRef;r.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key.toLowerCase()&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&l&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&l(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,l,o])}({isOpen:Z,onOpen:A,onClose:B,onInput:x,searchButtonRef:p});const U=(0,w.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(m.Z,null,r.createElement("link",{rel:"preconnect",href:`https://${i.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),r.createElement("div",{className:C},r.createElement(k,{onTouchStart:T,onFocus:T,onMouseOver:T,onClick:A,ref:p,translations:{buttonText:U,buttonAriaLabel:U}})),Z&&(0,l.createPortal)(r.createElement(N,(0,a.Z)({onClose:B,initialScrollY:window.scrollY,initialQuery:D,navigator:P,transformItems:M,hitComponent:S,resultsFooterComponent:R,transformSearchClient:O},i,{searchParameters:b})),E.current))}const I=function(){const{siteConfig:e}=(0,o.Z)();return r.createElement(D,e.themeConfig.algolia)}},6397:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(16550),r=n(10412),l=n(52263);const o=function(){const e=(0,a.k6)(),t=(0,a.TH)(),{siteConfig:{baseUrl:n}={}}=(0,l.Z)();return{searchValue:r.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}}}}]);