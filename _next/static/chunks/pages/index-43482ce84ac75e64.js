(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)i.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(n=(function(){return r}).apply(t,[]))&&(e.exports=n)}()},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7182)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,i){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(2648).Z,r=n(7273).Z,a=i(n(7294)),s=n(4532),l=n(3353),o=n(1410),c=n(9064),d=n(370),u=n(9955),h=n(4224),p=n(508),m=n(1516),f=n(4266);let g=new Set;function _(e,t,n,i,r){if(r||l.isLocalURL(t)){if(!i.bypassPrefetchedCheck){let r=void 0!==i.locale?i.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+r;if(g.has(a))return;g.add(a)}Promise.resolve(e.prefetch(t,n,i)).catch(e=>{})}}function x(e){return"string"==typeof e?e:o.formatUrl(e)}let j=a.default.forwardRef(function(e,t){let n,i;let{href:o,as:g,children:j,prefetch:b,passHref:y,replace:v,shallow:I,scroll:N,locale:T,onClick:E,onMouseEnter:S,onTouchStart:M,legacyBehavior:C=!1}=e,P=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=j,C&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let w=!1!==b,R=a.default.useContext(u.RouterContext),L=a.default.useContext(h.AppRouterContext),A=null!=R?R:L,k=!R,{href:O,as:H}=a.default.useMemo(()=>{if(!R){let e=x(o);return{href:e,as:g?x(g):e}}let[e,t]=s.resolveHref(R,o,!0);return{href:e,as:g?s.resolveHref(R,g):t||e}},[R,o,g]),D=a.default.useRef(O),F=a.default.useRef(H);C&&(i=a.default.Children.only(n));let B=C?i&&"object"==typeof i&&i.ref:t,[V,U,W]=p.useIntersection({rootMargin:"200px"}),G=a.default.useCallback(e=>{(F.current!==H||D.current!==O)&&(W(),F.current=H,D.current=O),V(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[H,B,O,W,V]);a.default.useEffect(()=>{A&&U&&w&&_(A,O,H,{locale:T},k)},[H,O,U,T,w,null==R?void 0:R.locale,A,k]);let J={ref:G,onClick(e){C||"function"!=typeof E||E(e),C&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,n,i,r,s,o,c,d,u){let{nodeName:h}=e.currentTarget,p="A"===h.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!d&&!l.isLocalURL(n)))return;e.preventDefault();let m=()=>{"beforePopState"in t?t[r?"replace":"push"](n,i,{shallow:s,locale:c,scroll:o}):t[r?"replace":"push"](i||n,{forceOptimisticNavigation:!u})};d?a.default.startTransition(m):m()}(e,A,O,H,v,I,N,T,k,w)},onMouseEnter(e){C||"function"!=typeof S||S(e),C&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),A&&(w||!k)&&_(A,O,H,{locale:T,priority:!0,bypassPrefetchedCheck:!0},k)},onTouchStart(e){C||"function"!=typeof M||M(e),C&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),A&&(w||!k)&&_(A,O,H,{locale:T,priority:!0,bypassPrefetchedCheck:!0},k)}};if(c.isAbsoluteUrl(H))J.href=H;else if(!C||y||"a"===i.type&&!("href"in i.props)){let e=void 0!==T?T:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&m.getDomainLocale(H,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);J.href=t||f.addBasePath(d.addLocale(H,e,null==R?void 0:R.defaultLocale))}return C?a.default.cloneElement(i,J):a.default.createElement("a",Object.assign({},P,J),n)});t.default=j,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:o}=e,c=o||!a,[d,u]=i.useState(!1),h=i.useRef(null),p=i.useCallback(e=>{h.current=e},[]);i.useEffect(()=>{if(a){if(c||d)return;let e=h.current;if(e&&e.tagName){let i=function(e,t,n){let{id:i,observer:r,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},i=l.find(e=>e.root===n.root&&e.margin===n.margin);if(i&&(t=s.get(i)))return t;let r=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:r},l.push(n),s.set(n,t),t}(n);return a.set(e,t),r.observe(e),function(){if(a.delete(e),r.unobserve(e),0===a.size){r.disconnect(),s.delete(i);let e=l.findIndex(e=>e.root===i.root&&e.margin===i.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:n});return i}}else if(!d){let e=r.requestIdleCallback(()=>u(!0));return()=>r.cancelIdleCallback(e)}},[c,n,t,d,h.current]);let m=i.useCallback(()=>{u(!1)},[]);return[p,d,m]};var i=n(7294),r=n(29);let a="function"==typeof IntersectionObserver,s=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=a.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:i}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=i({},r,e)),r=i({},r,t);let o=r.loader,c=()=>null!=o?o().then(s):Promise.resolve(s(()=>null));return(r.loadableGenerated&&delete(r=i({},r,r.loadableGenerated)).loadableGenerated,"boolean"!=typeof r.ssr||r.ssr)?n(i({},r,{loader:c})):(delete r.webpack,delete r.modules,l(n,r))},t.noSSR=l;var i=n(6495).Z,r=n(2648).Z,a=(r(n(7294)),r(n(8976)));function s(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=(0,n(2648).Z)(n(7294));let r=i.default.createContext(null);t.LoadableContext=r},8976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(6495).Z,r=(0,n(2648).Z)(n(7294)),a=n(2254);let s=[],l=[],o=!1;function c(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),i=null;function s(){if(!i){let t=new d(e,n);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!o){let e=n.webpack?n.webpack():n.modules;e&&l.push(t=>{for(let n of e)if(-1!==t.indexOf(n))return s()})}function c(e,t){!function(){s();let e=r.default.useContext(a.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let l=r.default.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),r.default.useMemo(()=>{var t;return l.loading||l.error?r.default.createElement(n.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:i.retry}):l.loaded?r.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return c.preload=()=>s(),c.displayName="LoadableComponent",r.default.forwardRef(c)}(c,e)}function h(e,t){let n=[];for(;e.length;){let i=e.pop();n.push(i(t))}return Promise.all(n).then(()=>{if(e.length)return h(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{h(s).then(e,t)}),u.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(o=!0,t());h(l,e).then(n,n)})},window.__NEXT_PRELOADREADY=u.preloadReady,t.default=u},7182:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eu}});var i=n(5893);let r={GITHUB:"https://github.com/porinky0424",QIITA:"https://qiita.com/porinky0424",TWITTER:"https://twitter.com/daichi_sendai2",METALIFE:"https://metalife.co.jp/",MANABITIMES:"https://manabitimes.jp/",PYTRIS:"https://github.com/porinky0424/py-tris",REVERSI:"https://github.com/porinky0424/reversi-bot",PYCAML:"https://github.com/porinky0424/pycaml",PAPER:{NLP2023:"https://www.anlp.jp/proceedings/annual_meeting/2023/pdf_dir/P9-5.pdf"},BEND:"https://www.wantedly.com/companies/company_7765230",TEAM_LAB:"https://www.team-lab.com/",DCC:"https://github.com/porinky0424/dcc",CYGAMES:"https://www.cygames.co.jp/",REVERSI_DEMO:"https://porinky0424.github.io/reversi-bot-front/"},a=["ABOUT","EXPERIENCES","RESEARCH","HOBBY"],s={[a[0]]:"About",[a[1]]:"Experiences",[a[2]]:"Research",[a[3]]:"Hobby"};var l=n(1664),o=n.n(l),c=n(9316),d=n.n(c);function u(e){let{src:t,alt:n,href:r}=e;return(0,i.jsx)(o(),{href:r,className:d().icon,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("img",{src:t,alt:null!=n?n:"",style:{objectFit:"contain"}})})}var h=n(6996),p=n.n(h);function m(){return(0,i.jsxs)("div",{className:p().bottomFooter,children:[(0,i.jsx)("div",{className:p().sectionItems,children:a.map((e,t)=>(0,i.jsx)(o(),{href:"#".concat(a[t]),className:p().item,children:(0,i.jsx)("p",{children:s[e]})},t))}),(0,i.jsxs)("div",{className:p().links,children:[(0,i.jsx)(u,{src:"./github-mark.png",href:r.GITHUB}),(0,i.jsx)(u,{src:"./qiita.png",href:r.QIITA}),(0,i.jsx)(u,{src:"./twitter.png",href:r.TWITTER})]}),(0,i.jsxs)("p",{className:p().copyright,children:[(0,i.jsx)("span",{className:p().mark,children:"\xa9"})," Copyright 2023 Daichi Kato."]})]})}var f=n(7294);function g(){let[e,t]=(0,f.useState)(!1);return(0,f.useEffect)(()=>{let e=()=>{window.innerWidth<768?t(!0):t(!1)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),{smallerThanTablet:e}}var _=n(3753),x=n.n(_);function j(){let{smallerThanTablet:e}=g();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:x().mainVisual,children:[(0,i.jsx)("div",{className:x().imagewrapper,children:(0,i.jsx)("img",{className:x().image,src:e?"./mainVisualSP.png":"./mainVisual.png",alt:"main visual",style:{objectFit:"cover"}})}),(0,i.jsxs)("div",{className:x().content,children:[(0,i.jsxs)("p",{className:x().belonging,children:["M1 student at",(0,i.jsx)("br",{}),"The University of Tokyo, Japan"]}),(0,i.jsx)("p",{className:x().name,children:"Daichi KATO"})]})]}),(0,i.jsx)("div",{className:x().mainVisualMargin})]})}var b=n(799);function y(e){let[t,n]=(0,f.useState)(e.JP),{languageKey:i}=(0,b.Qg)();return(0,f.useEffect)(()=>{n(e[i])},[e,i]),{selectedData:t}}var v=n(4184),I=n.n(v),N=n(4259),T=n.n(N);function E(e){let{title:t,href:n,period:r,children:a}=e,{smallerThanTablet:s}=g();return(0,i.jsxs)("div",{className:T().highlightedItem,children:[(0,i.jsx)("div",{className:I()(T().leftborder,{_titleH2MarginLeft:!s})}),(0,i.jsxs)("div",{className:I()({_contentMarginLeft:!s,_titleH2MarginLeft:s}),children:[(0,i.jsxs)("div",{className:T().content,children:[n?(0,i.jsx)(o(),{className:T().title,href:n,target:"_blank",rel:"noopener noreferrer",children:t}):(0,i.jsx)("div",{className:T().title,children:t}),r&&(0,i.jsxs)("p",{className:T().period,children:[r.start," ~ ",r.end]})]}),a]})]})}var S=n(4049),M=n.n(S);function C(e){let{title:t}=e;return(0,i.jsx)("h1",{className:M().title,children:t})}var P=n(3744),w=n.n(P);function R(e){let{title:t}=e;return(0,i.jsx)("h2",{className:I()(w().title,"_titleH2MarginLeft"),children:t})}var L=n(9013),A=n.n(L);let k={JP:{text:["名前 :","加藤大地 (Daichi KATO)","所属 :","東京大学 情報理工学系研究科 コンピュータ科学専攻 修士1年","専攻 :","自然言語処理","Webエンジニアとして","研究、機械学習、競プロ、趣味の開発で","低レイヤーな実装、処理速度が求められる環境で","その他","応用情報技術者試験 取得予定"],history:[{title:"宮城県　仙台第二高等学校",period:{start:"2016/04",end:"2019/03"}},{title:"東京大学　理学部情報科学科",period:{start:"2019/04",end:"2023/03"}},{title:"東京大学大学院　情報理工学系研究科コンピュータ科学専攻",period:{start:"2023/04",end:"現在"}}]},EN:{text:["Name :","Daichi KATO (加藤 大地)","Affiliation :","Department of Computer Science, Graduate School of Information Science and Technology, The University of Tokyo, M1","Major :","NLP (Natural Language Processing)","As a Web engineer :","In research, ML, competitive programming, and personal development :","In environments that require low-layer implementation and processing speed :","Others :","Applied Information Technology Engineer Examination (応用情報技術者試験) Expected to be acquired"],history:[{title:"Sendai Daini High School, Miyagi",period:{start:"2016/04",end:"2019/03"}},{title:"Department of Information Science, The University of Tokyo",period:{start:"2019/04",end:"2023/03"}},{title:"Department of Computer Science, Graduate School of Information Science and Technology, The University of Tokyo",period:{start:"2023/04",end:"Present"}}]}};function O(){let{smallerThanTablet:e}=g(),{selectedData:t}=y(k);return(0,i.jsxs)("div",{className:A().sectionAbout,children:[(0,i.jsx)(C,{title:"About"}),(0,i.jsx)(R,{title:"Profile"}),(0,i.jsxs)("div",{className:I()(A().line,{[A().Flex]:!e,_contentMarginLeft:!e}),children:[(0,i.jsx)("p",{className:A().left,children:t.text[0]}),(0,i.jsx)("p",{className:A().right,children:t.text[1]})]}),(0,i.jsxs)("div",{className:I()(A().line,{[A().Flex]:!e,_contentMarginLeft:!e}),children:[(0,i.jsx)("p",{className:A().left,children:t.text[2]}),(0,i.jsx)("p",{className:A().right,children:t.text[3]})]}),(0,i.jsxs)("div",{className:I()(A().line,{[A().Flex]:!e,_contentMarginLeft:!e}),children:[(0,i.jsx)("p",{className:A().left,children:t.text[4]}),(0,i.jsx)("p",{className:A().right,children:t.text[5]})]}),(0,i.jsxs)("div",{className:I()(A().links,{_contentMarginLeft:!e}),children:[(0,i.jsx)(u,{src:"./github-mark.png",href:r.GITHUB}),(0,i.jsx)(u,{src:"./qiita.png",href:r.QIITA}),(0,i.jsx)(u,{src:"./twitter.png",href:r.TWITTER})]}),(0,i.jsx)(R,{title:"History"}),t.history.map((e,t)=>(0,i.jsx)(E,{title:e.title,period:e.period},t)),(0,i.jsx)(R,{title:"Skills"}),(0,i.jsx)("div",{className:I()(A().line,{_contentMarginLeft:!e}),children:(0,i.jsx)("p",{children:t.text[6]})}),(0,i.jsxs)("ul",{className:I()(A().line,{_contentMarginLeft:!e}),children:[(0,i.jsx)("li",{children:"TypeScript & React & Next.js, Vue.js"}),(0,i.jsx)("li",{children:"HTML/CSS"}),(0,i.jsx)("li",{children:"PHP & Laravel"}),(0,i.jsx)("li",{children:"AWS, GCP"}),(0,i.jsx)("li",{children:"Three.js & React Three Fiber, Phaser"})]}),(0,i.jsx)("div",{className:I()(A().line,{_contentMarginLeft:!e}),children:(0,i.jsx)("p",{children:t.text[7]})}),(0,i.jsxs)("ul",{className:I()(A().line,{_contentMarginLeft:!e}),children:[(0,i.jsx)("li",{children:"Python & PyTorch"}),(0,i.jsx)("li",{children:"Unity (with C#)"})]}),(0,i.jsx)("div",{className:I()(A().line,{_contentMarginLeft:!e}),children:(0,i.jsx)("p",{children:t.text[8]})}),(0,i.jsxs)("ul",{className:I()(A().line,{_contentMarginLeft:!e}),children:[(0,i.jsx)("li",{children:"Rust"}),(0,i.jsx)("li",{children:"C, C++"}),(0,i.jsx)("li",{children:"OCaml"})]}),(0,i.jsx)("div",{className:I()(A().line,{_contentMarginLeft:!e}),children:(0,i.jsx)("p",{children:t.text[9]})}),(0,i.jsx)("ul",{className:I()(A().line,{_contentMarginLeft:!e}),children:(0,i.jsx)("li",{children:"TOEFL : 92"})})]})}var H=n(2262),D=n.n(H);function F(e){let{imageSrc:t,imageAlt:n,title:r,content:a,href:s,long:l}=e;return(0,i.jsxs)("div",{className:D().imageItem,children:[(0,i.jsxs)(o(),{href:s,className:I()(D().imagewrapper,{[D().Long]:l}),target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)("div",{className:D().image,children:(0,i.jsx)("img",{style:{objectFit:"cover"},src:t,alt:null!=n?n:""})}),(0,i.jsx)("div",{className:D().titleTip,children:(0,i.jsx)("p",{className:D().title,children:r})})]}),(0,i.jsx)("p",{className:D().content,children:a})]})}var B=n(1854),V=n.n(B);let U={JP:{images:[{imageSrc:"./metalife.png",title:"2Dコミュニケーションツール「MetaLife」",content:"構想、要件定義、設計、実装、保守全てのフェーズに参加しています。",href:r.METALIFE},{imageSrc:"./manabitimes.png",title:"Webメディア「資格Times」「学びTimes」",content:"メディアサイトのみならず、CMSのフロント・バック両方の実装&保守を行なっています。",href:r.MANABITIMES},{imageSrc:"./pytris.png",title:"Pythonで動くぷよぷよテトリスAI「py-tris」",content:"OSのAPI等も駆使しつつ、実機上で実際に動くAIなので、人間と対戦することもできます。",href:r.PYTRIS,long:!0},{imageSrc:"./reversi.png",title:"Rust & Three.jsで動くリバーシAI",content:"ロジックの部分がRust and WebAssembly、UIの部分がReact & Three.jsで動く対戦型リバーシAIです。そこそこ強いです。",href:r.REVERSI},{imageSrc:"./pycaml.png",title:"OCamlサブセット言語用コンパイラ「pycaml」",content:"プログラム言語理論に基づく最適化も実装された、PythonとOCamlによるコンパイラです。",href:r.PYCAML}],internship:[{title:"株式会社ベンド　フルスタックエンジニア",href:r.BEND,period:{start:"2020/12",end:"Present"},children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"フロントエンドを中心に、バックエンド・サーバー等広く業務に携わっています。"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"ゲームライクな2DコミュニケーションWebアプリ「MetaLife」の開発"}),(0,i.jsx)("li",{children:"「資格Times」「学びTimes」の運用"})]})]})},{title:"チームラボ株式会社　フロントエンドエンジニア",href:r.TEAM_LAB,period:{start:"2023/02",end:"2023/03"},children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"2週間の短期インターンに参加し、フロントエンドサイドの開発チームに参加して、実務に取り組みました。"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Webサイトのシステムリプレース"}),(0,i.jsx)("li",{children:"内部・外部のミーティング参加"}),(0,i.jsx)("li",{children:"新規アプリのWebView実装"})]})]})}],partTimeJob:[{title:"株式会社Cygames",href:r.CYGAMES,period:{start:"2021/04",end:"Present"}}],personal:[{title:"ぷよぷよテトリスAI",href:r.PYTRIS,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"大学の同期と、ゲームソフト「ぷよぷよテトリス」内で動く、AIを作成しました。"}),(0,i.jsxs)("p",{children:["メモリ読み込みによる情報抽出",(0,i.jsx)("br",{}),"→ルールベースのアルゴリズムによる動きの決定",(0,i.jsx)("br",{}),"→仮想コントローラーから入力",(0,i.jsx)("br",{}),"という流れで動きます。"]})]})},{title:"リバーシAI",href:r.REVERSI,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"ロジックの部分がRust and WebAssembly、UIの部分がReact & Three.jsで動く対戦型リバーシAIです。"}),(0,i.jsx)("p",{children:"自分はオセロ初心者ですが、定石や経験則等を調べて、Botとして実現しました。"}),(0,i.jsxs)("p",{children:[(0,i.jsx)(o(),{href:r.REVERSI_DEMO,target:"_blank",rel:"noopener noreferrer",children:"こちらのページ"}),"でDEMOをいじることができます。"]})]})},{title:"C言語のサブセット用のミニコンパイラ (WIP)",href:r.DCC,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Rui Ueyamaさんの記事に沿って、"}),(0,i.jsx)("p",{children:"C言語のサブセット言語をRISC-Vベースのアセンブリにコンパイルするコンパイラを、"}),(0,i.jsx)("p",{children:"Rustで実装中です。"})]})}],educational:[{title:"OCamlのサブセット用のコンパイラ",href:r.PYCAML,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"チーム4人で課題プログラムを動かすCPUアーキテクチャを作る「CPU実験」の中で、"}),(0,i.jsx)("p",{children:"コンパイラ係として、OCamlのサブセット言語のコンパイラを作成しました。"}),(0,i.jsx)("p",{children:"PythonとOCamlで実装しました。"})]})}]},EN:{images:[{imageSrc:"./metalife.png",title:"2D Communication Tool ''MetaLife''",content:"I have been involved in all phases of the project, including conceptualization, requirements definition, design, implementation, and maintenance.",href:r.METALIFE},{imageSrc:"./manabitimes.png",title:"Web Media ''Shikaku Times'' ''Manabi Times''",content:"I am responsible for both front and back-end implementation and maintenance of the websites and their CMS.",href:r.MANABITIMES},{imageSrc:"./pytris.png",title:"Puyo Puyo Tetris AI Scratched in Python ''py-tris''",content:"This AI runs on the application using OS APIs and other tools. It is also capable of playing against humans in the application.",href:r.PYTRIS,long:!0},{imageSrc:"./reversi.png",title:"Reversi AI Scratched in Rust & Three.js",content:"Logic is implemented in Rust and WebAssembly, UI is implemented in React & Three.js. Reasonably strong.",href:r.REVERSI},{imageSrc:"./pycaml.png",title:"Compiler for the Subset of OCaml ''pycaml''",content:"This compiler, built using Python and OCaml, incorporates optimizations based on programming language theory.",href:r.PYCAML}],internship:[{title:"Full Stack Engineer at Bend Inc.",href:r.BEND,period:{start:"2020/12",end:"Present"},children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"My primary focus is on front-end development. I am also deeply involved in various tasks, including back-end and server management."}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Development of the game-like 2D communication web app, ''MetaLife''"}),(0,i.jsx)("li",{children:"Running ''Shikaku Times'', ''Manabi Times''"})]})]})},{title:"Front-End Engineer at teamLab",href:r.TEAM_LAB,period:{start:"2023/02",end:"2023/03"},children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"I participated in a two-week short-term internship and joined the front-end development team to work on practical tasks."}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"System replacement of a website"}),(0,i.jsx)("li",{children:"Participation in both internal and external meetings"}),(0,i.jsx)("li",{children:"Webview implementation for a new app"})]})]})}],partTimeJob:[{title:"Cygames Inc.",href:r.CYGAMES,period:{start:"2021/04",end:"Present"}}],personal:[{title:"Puyo Puyo Tetris AI",href:r.PYTRIS,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"I created an AI that runs in the ''Puyo Puyo Tetris'' game with my university classmates."}),(0,i.jsxs)("p",{children:["It works as follows:",(0,i.jsx)("br",{}),"Information extraction by reading memory",(0,i.jsx)("br",{}),"→ Movement decision by rule-based algorithm",(0,i.jsx)("br",{}),"→ Input via a virtual controller"]})]})},{title:"Reversi AI",href:r.REVERSI,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Logic is implemented in Rust and WebAssembly, UI is implemented in React & Three.js."}),(0,i.jsx)("p",{children:"Although I am a very biginner in Reversi, I looked for established tactics and rules of thumb, etc., and realized them as a bot."}),(0,i.jsxs)("p",{children:["You can play the DEMO in"," ",(0,i.jsx)(o(),{href:r.REVERSI_DEMO,target:"_blank",rel:"noopener noreferrer",children:"this page"}),"."]})]})},{title:"Mini-Compiler for the subset language of C-lang (WIP)",href:r.DCC,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Along with Rui Ueyama's article,"}),(0,i.jsx)("p",{children:"I am in the process of implementing a compiler in Rust that compiles a subset language of C-lang into a RISC-V based assembly."})]})}],educational:[{title:"Compiler for the subset language of OCaml",href:r.PYCAML,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"In the ''CPU Experiment'', in which a team of four people creates a CPU architecture to run a given program, in my role as a compiler developer, I built a compiler for the subset language of OCaml."}),(0,i.jsx)("p",{children:"I implemented this in Python and OCaml."})]})}]}};function W(){let{selectedData:e}=y(U);return(0,i.jsxs)("div",{className:V().sectionExperiences,children:[(0,i.jsx)(C,{title:"Experiences"}),(0,i.jsx)("div",{className:V().images,children:e.images.map((e,t)=>(0,i.jsx)(F,{imageSrc:e.imageSrc,title:e.title,content:e.content,href:e.href,long:e.long},t))}),(0,i.jsx)(R,{title:"Internship"}),e.internship.map((e,t)=>(0,i.jsx)(E,{title:e.title,href:e.href,period:e.period,children:e.children},t)),(0,i.jsx)(R,{title:"Part-Time Job"}),e.partTimeJob.map((e,t)=>(0,i.jsx)(E,{title:e.title,href:e.href,period:e.period},t)),(0,i.jsx)(R,{title:"Personal Projects"}),e.personal.map((e,t)=>(0,i.jsx)(E,{title:e.title,href:e.href,children:e.children},t)),(0,i.jsx)(R,{title:"Educational Projects"}),e.educational.map((e,t)=>(0,i.jsx)(E,{title:e.title,href:e.href,children:e.children},t))]})}var G=n(5704),J=n.n(G);let Y={JP:{text:["ラーメン巡り","ハンドボール、サッカー","ジム","ゲーム（ドラクエ、テトリス）、漫画"]},EN:{text:["Going around for ramen","Handball, Football","Training at the gym","Video Games (Dragon Quest, Tetris), Comic Books"]}};function K(){let{selectedData:e}=y(Y),{smallerThanTablet:t}=g();return(0,i.jsxs)("div",{className:J().sectionHobby,children:[(0,i.jsx)(C,{title:"Hobby"}),(0,i.jsxs)("ul",{className:I()(J().line,{_contentMarginLeft:!t}),children:[(0,i.jsx)("li",{children:e.text[0]}),(0,i.jsx)("li",{children:e.text[1]}),(0,i.jsx)("li",{children:e.text[2]}),(0,i.jsx)("li",{children:e.text[3]})]})]})}var z=n(6857),Z=n.n(z);let q={JP:{text:["創発言語","ニューラルネットワークで構成されたエージェント同士に会話させ、","人工的に発生させた言語を解析する「創発言語」の分野を研究しています。","人間の脳の構造を模倣したエージェントを使って、「創発言語」の中に、","自然言語の文法構造のようなものを創発させられないか、構想しています。"]},EN:{text:["Emergent Communication (Emergent Language)",'I am researching the "Emergent Language" field,',"where I analyze the language artificially generated by having agents composed of neural networks talk to each other.","I plan to use an agent that mimics the structure of the human brain","to generate something like the grammatical structure of natural language in an emergent language."]}};function Q(){let{selectedData:e}=y(q),{smallerThanTablet:t}=g();return(0,i.jsxs)("div",{className:Z().sectionResearch,children:[(0,i.jsx)(C,{title:"Research"}),(0,i.jsx)(R,{title:"Interest"}),(0,i.jsx)("div",{className:I()(Z().line,{_contentMarginLeft:!t}),children:(0,i.jsx)("p",{className:Z().h3,children:e.text[0]})}),(0,i.jsxs)("div",{className:I()(Z().line,{_contentMarginLeft:!t}),children:[(0,i.jsx)("p",{children:e.text[1]}),(0,i.jsx)("p",{children:e.text[2]})]}),(0,i.jsxs)("div",{className:I()(Z().line,{_contentMarginLeft:!t}),children:[(0,i.jsx)("p",{children:e.text[3]}),(0,i.jsx)("p",{children:e.text[4]})]}),(0,i.jsx)(R,{title:"Publications"}),(0,i.jsx)("div",{className:I()(Z().line,{_contentMarginLeft:!t}),children:(0,i.jsx)("p",{className:Z().h3,children:"Domestic Conference (Non-refereed)"})}),(0,i.jsx)("div",{className:I()(Z().line,{_contentMarginLeft:!t}),children:(0,i.jsx)("p",{children:"2023"})}),(0,i.jsxs)("div",{className:I()(Z().line,{_contentMarginLeft:!t}),children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:Z().Highlight,children:"加藤大地"}),", 上田亮, 宮尾祐介."," "]}),(0,i.jsx)("p",{children:"「簡素なモデルでの創発言語の接触によるクレオール単純化の再現」"}),(0,i.jsxs)("p",{children:["言語処理学会第29回年次大会(NLP2023). [",(0,i.jsx)("a",{href:r.PAPER.NLP2023,children:"paper"}),"]"]})]})]})}var X=n(8562);let $={JP:"日本語",EN:"English"};var ee=n(7174),et=n.n(ee);function en(){let[e,t]=(0,f.useState)(!1),{languageKey:n,setLanguageKey:r}=(0,b.Qg)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:et().languageSelector,onClick:()=>{t(e=>!e)},children:[(0,i.jsx)("img",{className:et().image,src:"./world.svg",alt:"languageSelector"}),(0,i.jsx)("span",{className:I()(et().opener,{[et().Open]:e})})]}),(0,i.jsx)("div",{className:et().modalwrapper,children:e&&(0,i.jsx)("div",{className:et().modal,children:Object.entries($).map(e=>{let[a,s]=e;return(0,i.jsx)("div",{className:I()(et().item,{[et().Selected]:n===a}),onClick:()=>{r(a),t(!1)},children:(0,i.jsx)("p",{className:et().text,children:s})},a)})})})]})}var ei=n(7298),er=n.n(ei);function ea(){let e=(0,f.useRef)(null),t=(0,f.useRef)(null),{smallerThanTablet:n}=g();!function(e,t){let{mainSectionIndex:n}=(0,X.Nl)(),[i,r]=(0,f.useState)(!1);(0,f.useEffect)(()=>{let e=()=>{r(e=>!e)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,f.useEffect)(()=>{if(e.current&&t.current){let i=t.current.children[n];e.current.style.left="".concat(i.offsetLeft+8,"px"),e.current.style.width="".concat(i.getBoundingClientRect().width-16,"px")}},[n,i])}(e,t);let[l,c]=(0,f.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:er().topHeader,children:n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:er().opener,onClick:()=>{c(e=>!e)},children:[(0,i.jsx)("span",{className:I()(er().top,{[er().Open]:l})}),(0,i.jsx)("span",{className:I()(er().center,{[er().Open]:l})}),(0,i.jsx)("span",{className:I()(er().bottom,{[er().Open]:l})})]}),(0,i.jsx)(o(),{className:er().name,href:"#",onClick:()=>{c(!1)},children:"Daichi KATO"}),(0,i.jsx)("div",{className:er().languageselector,children:(0,i.jsx)(en,{})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o(),{className:er().name,href:"#",children:"Daichi KATO"}),(0,i.jsxs)("div",{className:er().sectionItems,children:[(0,i.jsx)("div",{className:er().bar,ref:e}),(0,i.jsx)("div",{className:er().wrapper,ref:t,children:a.map((e,t)=>(0,i.jsx)(o(),{href:"#".concat(a[t]),className:er().item,children:(0,i.jsx)("p",{children:s[e]})},t))})]}),(0,i.jsx)("div",{className:er().languageselector,children:(0,i.jsx)(en,{})})]})}),l&&(0,i.jsxs)("div",{className:er().container,children:[(0,i.jsx)("div",{className:er().sections,children:a.map((e,t)=>(0,i.jsx)(o(),{href:"#".concat(a[t]),className:er().item,onClick:()=>{c(!1)},children:(0,i.jsx)("p",{children:s[e]})},t))}),(0,i.jsxs)("div",{className:I()(er().links,"_contentMarginLeft"),children:[(0,i.jsx)(u,{src:"./github-mark.png",href:r.GITHUB}),(0,i.jsx)(u,{src:"./qiita.png",href:r.QIITA}),(0,i.jsx)(u,{src:"./twitter.png",href:r.TWITTER})]})]})]})}var es=n(5152),el=n.n(es),eo=n(8981),ec=n.n(eo);let ed=el()(()=>Promise.all([n.e(989),n.e(233)]).then(n.bind(n,7233)),{loadableGenerated:{webpack:()=>[7233]},ssr:!1});function eu(){let e=(0,f.useRef)(null),t=(0,f.useRef)(null),n=(0,f.useRef)(null),r=(0,f.useRef)(null);return!function(e){let{setMainSectionIndex:t}=(0,X.Nl)(),n=(0,f.useRef)(null),i=(0,f.useCallback)(e=>{e!==n.current&&(n.current=e,t(e))},[t]),r=(0,f.useCallback)(()=>{if(e.every(e=>!!e.current)){let t=Math.floor(window.innerHeight/2);if(t<e[0].current.getBoundingClientRect().top){i(0);return}if(e.forEach((e,n)=>{if(e.current.getBoundingClientRect().top<=t&&t<=e.current.getBoundingClientRect().bottom){i(n);return}}),e.slice(-1)[0].current.getBoundingClientRect().bottom<=t){i(a.length-1);return}}},[e,i]);(0,f.useEffect)(()=>{if(e.length!==a.length)throw Error("All refs should be passed to `useMainSection.`");return r(),window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}})}([e,t,n,r]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("section",{className:ec().topHeader,children:(0,i.jsx)(ea,{})}),(0,i.jsx)("section",{id:"mainVisual",className:ec().mainVisual,children:(0,i.jsx)(j,{})}),(0,i.jsxs)("div",{id:"mainContainer",className:ec().mainContainer,children:[(0,i.jsx)("section",{id:a[0],className:ec().sectionAbout,ref:e,children:(0,i.jsx)(O,{})}),(0,i.jsx)("section",{id:a[1],className:ec().sectionExperiences,ref:t,children:(0,i.jsx)(W,{})}),(0,i.jsx)("section",{id:a[2],className:ec().sectionResearch,ref:n,children:(0,i.jsx)(Q,{})}),(0,i.jsx)("section",{id:a[3],className:ec().sectionHobby,ref:r,children:(0,i.jsx)(K,{})})]}),(0,i.jsx)("section",{className:ec().bottomFooter,children:(0,i.jsx)(m,{})}),(0,i.jsx)("div",{id:"canvas",className:ec().canvasWrapper,children:(0,i.jsx)(ed,{})})]})}},4259:function(e){e.exports={highlightedItem:"HighlightedItem_highlightedItem__cHJsT",leftborder:"HighlightedItem_leftborder__APscz",content:"HighlightedItem_content__smJmD",title:"HighlightedItem_title__Ybolt",period:"HighlightedItem_period__hT_jO"}},2262:function(e){e.exports={imageItem:"ImageItem_imageItem__Xdn98",imagewrapper:"ImageItem_imagewrapper__WJMIB",Long:"ImageItem_Long__uD1uP",image:"ImageItem_image__IR3li",titleTip:"ImageItem_titleTip__P51N3",title:"ImageItem_title__tfhB4",content:"ImageItem_content__c0hJg"}},7174:function(e){e.exports={languageSelector:"LanguageSelector_languageSelector__yKMy0",image:"LanguageSelector_image__iwEbz",opener:"LanguageSelector_opener__d3aZm",Open:"LanguageSelector_Open__hnLy8",modalwrapper:"LanguageSelector_modalwrapper__WMts_",modal:"LanguageSelector_modal__U02UH",item:"LanguageSelector_item__hDoEL",Selected:"LanguageSelector_Selected__KCU1M"}},9316:function(e){e.exports={icon:"LinkIcon_icon__Kexuj"}},4049:function(e){e.exports={title:"TitleH1_title__BPP2q"}},3744:function(e){e.exports={title:"TitleH2_title__00_Bs"}},6996:function(e){e.exports={bottomFooter:"BottomFooter_bottomFooter__PXRCO",sectionItems:"BottomFooter_sectionItems__Lc3Sb",item:"BottomFooter_item__sBgiu",links:"BottomFooter_links__8Pw5Z",copyright:"BottomFooter_copyright__FAKTW",mark:"BottomFooter_mark__MX0NH"}},3753:function(e){e.exports={mainVisual:"MainVisual_mainVisual__IgF2J",imagewrapper:"MainVisual_imagewrapper__1idWW",image:"MainVisual_image__bDuUv",content:"MainVisual_content__LjK8m",belonging:"MainVisual_belonging__jFV7w",name:"MainVisual_name__9dKlR",mainVisualMargin:"MainVisual_mainVisualMargin__HNsiQ"}},9013:function(e){e.exports={sectionAbout:"SectionAbout_sectionAbout__7z2zJ",line:"SectionAbout_line__2fckj",left:"SectionAbout_left__u9WRh",right:"SectionAbout_right__0vpb4",Flex:"SectionAbout_Flex___fhqo",links:"SectionAbout_links__RHCD_"}},1854:function(e){e.exports={sectionExperiences:"SectionExperiences_sectionExperiences__Psxx_",images:"SectionExperiences_images__eoB0_"}},5704:function(e){e.exports={sectionHobby:"SectionHobby_sectionHobby__rdvWp",line:"SectionHobby_line__K9GMA"}},6857:function(e){e.exports={sectionResearch:"SectionResearch_sectionResearch__8ICH2",line:"SectionResearch_line___rziY",h3:"SectionResearch_h3__Txu4R",Highlight:"SectionResearch_Highlight__NAh0n"}},7298:function(e){e.exports={topHeader:"TopHeader_topHeader__6R59l",opener:"TopHeader_opener__PZDsR",top:"TopHeader_top__X_Txa",Open:"TopHeader_Open__lx1rf",center:"TopHeader_center__8r35E",bottom:"TopHeader_bottom__iGN1p",name:"TopHeader_name__w5jog",sectionItems:"TopHeader_sectionItems__QO9Nf",bar:"TopHeader_bar__QCsDE",wrapper:"TopHeader_wrapper__SoiX2",item:"TopHeader_item__u9Tky",languageselector:"TopHeader_languageselector__SXDS6",container:"TopHeader_container__DolhG",sections:"TopHeader_sections__9kaaH",links:"TopHeader_links__S0kZJ"}},8981:function(e){e.exports={topHeader:"index_topHeader__T6d1s",mainContainer:"index_mainContainer__DkU7y",canvasWrapper:"index_canvasWrapper__Dag8d"}},5152:function(e,t,n){e.exports=n(5677)},1664:function(e,t,n){e.exports=n(5569)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);