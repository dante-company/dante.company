(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{2431:function(){},9790:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(5846),u=n.n(r),o=n(6008),l=n(6006),f=n(3427);let i="locale";function a(t){if("object"==typeof t)return null==t.host&&null==t.hostname;{let e=/^[a-z]+:/i.test(t);return!e}}function c(t,e){let n;return"string"==typeof t?n=s(e,t):(n={...t},t.pathname&&(n.pathname=s(e,t.pathname))),n}function s(t,e){let n="/"+t;return"/"!==e&&(n+=e),n}var h=(0,l.forwardRef)(function({href:t,locale:e,prefetch:n,...r},s){let h=(0,o.usePathname)(),p=function(){let t=(0,o.useParams)();return(null==t?void 0:t[i])?t[i]:(0,f.Z)()}(),m=e!==p,[d,v]=(0,l.useState)(()=>a(t)&&e?c(t,e):t);return(0,l.useEffect)(()=>{h&&v(function(t,e,n=e,r){if(!a(t)||function(t){let e="object"==typeof t?t.pathname:t;return null!=e&&!e.startsWith("/")}(t))return t;let u=e!==n,o=null==e||function(t,e){let n=`/${t}`;return e===n||e.startsWith(`${n}/`)}(e,r);return(o||u)&&null!=e?c(t,e):t}(t,e,p,null!=h?h:void 0))},[p,t,e,h]),m&&(n=!1),l.createElement(u(),{ref:s,href:d,prefetch:n,...r})})},4769:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var r=n(3794),u=n(6006),o=n(5310);function l({children:t,locale:e,now:n,...l}){let f;try{f=(0,r.useRouter)()}catch(t){}if(!e&&f&&(e=f.locale),"string"==typeof n&&(n=new Date(n)),!e)throw Error(void 0);return u.createElement(o.Z,{locale:e,now:n,...l},t)}},104:function(t,e,n){Promise.resolve().then(n.bind(n,9790)),Promise.resolve().then(n.bind(n,4769))}},function(t){t.O(0,[592,253,769,744],function(){return t(t.s=104)}),_N_E=t.O()}]);