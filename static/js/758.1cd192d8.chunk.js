"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[758],{403:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),i=n(3329),a=(0,o.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.Z=a},1614:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(4942),o=n(3366),i=n(7462),a=n(2791),u=n(8182),s=n(7312),c=n(1217),d=n(4419),l=n(7078),m=(0,n(4046).ZP)(),h=n(5080),v=n(3329),f=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,h.Z)(),b=m("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,s.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),x=function(e){return(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:p})},Z=function(e,t){var n=e.classes,r=e.fixed,o=e.disableGutters,i=e.maxWidth,a={root:["root",i&&"maxWidth".concat((0,s.Z)(String(i))),r&&"fixed",o&&"disableGutters"]};return(0,d.Z)(a,(function(e){return(0,c.Z)(t,e)}),n)};var g=n(4036),S=n(6934),k=n(1402),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?b:t,s=e.useThemeProps,c=void 0===s?x:s,d=e.componentName,l=void 0===d?"MuiContainer":d,m=n((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,o=t.breakpoints.values[r];return 0!==o&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(o).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},"xs"===n.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,r.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),h=a.forwardRef((function(e,t){var n=c(e),r=n.className,a=n.component,s=void 0===a?"div":a,d=n.disableGutters,h=void 0!==d&&d,p=n.fixed,b=void 0!==p&&p,x=n.maxWidth,g=void 0===x?"lg":x,S=(0,o.Z)(n,f),k=(0,i.Z)({},n,{component:s,disableGutters:h,fixed:b,maxWidth:g}),W=Z(k,l);return(0,v.jsx)(m,(0,i.Z)({as:s,ownerState:k,className:(0,u.Z)(W.root,r),ref:t},S))}));return h}({createStyledComponent:(0,S.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,g.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,k.Z)({props:e,name:"MuiContainer"})}}),y=W},4708:function(e,t,n){var r=n(9439),o=n(7462),i=n(2791),a=n(1402),u=n(6199),s=n(3329),c=function(e,t){return(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode})},d=function(e){return(0,o.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};t.ZP=function(e){var t=(0,a.Z)({props:e,name:"MuiCssBaseline"}),n=t.children,l=t.enableColorScheme,m=void 0!==l&&l;return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)(u.Z,{styles:function(e){return function(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};i&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((function(t){var n,o=(0,r.Z)(t,2),i=o[0],u=o[1];a[e.getColorSchemeSelector(i).replace(/\s*&/,"")]={colorScheme:null==(n=u.palette)?void 0:n.mode}}));var u=(0,o.Z)({html:c(e,i),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,o.Z)({margin:0},d(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},a),s=null==(t=e.components)||null==(n=t.MuiCssBaseline)?void 0:n.styleOverrides;return s&&(u=[u,s]),u}(e,m)}}),n]})}},4507:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7462),o=n(3366),i=n(2791),a=n(4942);var u=i.createContext(null);function s(){return i.useContext(u)}var c=n(1413),d="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",l=n(3329);var m=function(e){var t=e.children,n=e.theme,r=s(),o=i.useMemo((function(){var e=null===r?n:function(e,t){return"function"===typeof t?t(e):(0,c.Z)((0,c.Z)({},e),t)}(r,n);return null!=e&&(e[d]=null!==r),e}),[n,r]);return(0,l.jsx)(u.Provider,{value:o,children:t})},h=n(2564),v=n(9120),f={};function p(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i.useMemo((function(){var i=e&&t[e]||t;if("function"===typeof n){var u=n(i),s=e?(0,r.Z)({},t,(0,a.Z)({},e,u)):u;return o?function(){return s}:s}return e?(0,r.Z)({},t,(0,a.Z)({},e,n)):(0,r.Z)({},t,n)}),[e,t,n,o])}var b=function(e){var t=e.children,n=e.theme,r=e.themeId,o=(0,v.Z)(f),i=s()||f,a=p(r,o,n),u=p(r,i,n,!0);return(0,l.jsx)(m,{theme:u,children:(0,l.jsx)(h.T.Provider,{value:a,children:t})})},x=n(988),Z=["theme"];function g(e){var t=e.theme,n=(0,o.Z)(e,Z),i=t[x.Z];return(0,l.jsx)(b,(0,r.Z)({},n,{themeId:i?x.Z:void 0,theme:i||t}))}}}]);
//# sourceMappingURL=758.1cd192d8.chunk.js.map