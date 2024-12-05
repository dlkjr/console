(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[7435],{41206:(e,t,o)=>{"use strict";o.d(t,{A:()=>s});var n=o(65043),r=o(89923),i=o(61476),a=o.n(i),c=o(6681),l=o(70579);const s=e=>{let{value:t,label:o="",tooltip:i="",mode:s="json",onChange:p,editorHeight:u=250,helptip:d}=e;return(0,l.jsx)(r.BYM,{value:t,onChange:e=>p(e),mode:s,tooltip:i,editorHeight:u,label:o,helpTools:(0,l.jsx)(n.Fragment,{children:(0,l.jsx)(c.A,{tooltip:"Copy to Clipboard",children:(0,l.jsx)(a(),{text:t,children:(0,l.jsx)(r.$nd,{type:"button",id:"copy-code-mirror",icon:(0,l.jsx)(r.TdU,{}),color:"primary",variant:"regular"})})})}),helpTip:d,helpTipPlacement:"right"})}},27435:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>b});var n=o(65043),r=o(89923),i=o(70579);const a=e=>{let{icon:t,description:o}=e;return(0,i.jsxs)(r.azJ,{sx:{display:"flex","& .min-icon":{marginRight:"10px",height:"23px",width:"23px",marginBottom:"10px"}},children:[t," ",(0,i.jsx)("div",{style:{fontSize:"14px",fontStyle:"italic",color:"#5E5E5E"},children:o})]})},c=()=>(0,i.jsxs)(r.azJ,{sx:{flex:1,border:"1px solid #eaeaea",borderRadius:"2px",display:"flex",flexFlow:"column",padding:"20px"},children:[(0,i.jsxs)(r.azJ,{sx:{fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center",marginBottom:"16px",paddingBottom:"20px","& .min-icon":{height:"21px",width:"21px",marginRight:"15px"}},children:[(0,i.jsx)(r.nag,{}),(0,i.jsx)("div",{children:"Learn more about Policies"})]}),(0,i.jsxs)(r.azJ,{sx:{fontSize:"14px",marginBottom:"15px"},children:[(0,i.jsxs)(r.azJ,{sx:{paddingBottom:"20px"},children:[(0,i.jsx)(a,{icon:(0,i.jsx)(r.n$X,{}),description:"Create Policies"}),(0,i.jsxs)(r.azJ,{sx:{paddingTop:"20px"},children:["MinIO uses Policy-Based Access Control (PBAC) to define the authorized actions and resources to which an authenticated user has access. Each policy describes one or more actions and conditions that outline the permissions of a user or group of users."," "]})]}),(0,i.jsx)(r.azJ,{sx:{paddingBottom:"20px"},children:"MinIO PBAC is built for compatibility with AWS IAM policy syntax, structure, and behavior."}),(0,i.jsx)(r.azJ,{sx:{paddingBottom:"20px"},children:"Each user can access only those resources and operations which are explicitly granted by the built-in role. MinIO denies access to any other resource or action by default."})]})]});var l=o(41206),s=o(48793),p=o(88617),u=o(99161),d=o(64159),f=o(73216),y=o(21383),x=o(95316),h=o(56629);const b=()=>{const e=(0,y.jL)(),t=(0,f.Zp)(),[o,a]=(0,n.useState)(!1),[b,m]=(0,n.useState)(""),[g,j]=(0,n.useState)(x.U),v=""!==b.trim()&&-1===b.indexOf(" ")&&""!==g.trim();return(0,n.useEffect)((()=>{e((0,d.ph)("add_policy"))}),[]),(0,i.jsx)(n.Fragment,{children:(0,i.jsxs)(r.xA9,{item:!0,xs:12,children:[(0,i.jsx)(s.A,{label:(0,i.jsx)(r.EGL,{label:"Policies",onClick:()=>t(u.zZ.POLICIES)}),actions:(0,i.jsx)(p.A,{})}),(0,i.jsx)(r.Mxu,{children:(0,i.jsx)(r.Hbc,{title:"Create Policy",icon:(0,i.jsx)(r.No_,{}),helpBox:(0,i.jsx)(c,{}),children:(0,i.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:n=>{n.preventDefault(),o||(a(!0),h.F.policies.addPolicy({name:b,policy:g}).then((e=>{a(!1),t(`${u.zZ.POLICIES}`)})).catch((t=>{a(!1),e((0,d.C9)({errorMessage:"There was an error creating a Policy ",detailedError:"There was an error creating a Policy: "+(t.error.detailedMessage||"")+". Please check Policy syntax."}))})))},children:(0,i.jsxs)(r.xA9,{container:!0,children:[(0,i.jsx)(r.xA9,{item:!0,xs:12,children:(0,i.jsx)(r.cl_,{id:"policy-name",name:"policy-name",label:"Policy Name",autoFocus:!0,value:b,error:(e=>-1!==e.indexOf(" ")?"Policy name cannot contain spaces":"")(b),onChange:e=>{m(e.target.value)}})}),(0,i.jsx)(r.xA9,{item:!0,xs:12,children:(0,i.jsx)(l.A,{label:"Write Policy",value:g,onChange:e=>{j(e)},editorHeight:"350px",helptip:(0,i.jsx)(n.Fragment,{children:(0,i.jsx)("a",{target:"blank",href:"https://min.io/docs/minio/kubernetes/upstream/administration/identity-access-management/policy-based-access-control.html#policy-document-structure",children:"Guide to access policy structure"})})})}),(0,i.jsx)(r.xA9,{item:!0,xs:12,sx:{textAlign:"right"},children:(0,i.jsxs)(r.azJ,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",marginTop:"20px",gap:"15px"},children:[(0,i.jsx)(r.$nd,{id:"clear",type:"button",variant:"regular",onClick:()=>{m(""),j("")},label:"Clear"}),(0,i.jsx)(r.$nd,{id:"save-policy",type:"submit",variant:"callAction",color:"primary",disabled:o||!v,label:"Save"})]})})]})})})})]})})}},95316:(e,t,o)=>{"use strict";o.d(t,{U:()=>n});const n='{\n    "Version": "2012-10-17",\n    "Statement": [\n        \n    ]\n}'},75270:(e,t,o)=>{"use strict";var n=o(40139),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,i,a,c,l,s,p=!1;t||(t={}),o=t.debug||!1;try{if(a=n(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[t.format]||r.default;window.clipboardData.setData(i,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(u){o&&console.error("unable to copy using execCommand: ",u),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(u){o&&console.error("unable to copy using clipboardData: ",u),o&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),a()}return p}},24480:(e,t,o)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=c(o(65043)),i=c(o(75270)),a=["text","onCopy","options","children"];function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){h(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=x(e);if(t){var i=x(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}(this,o)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function h(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(l,e);var t,o,n,c=f(l);function l(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return h(y(e=c.call.apply(c,[this].concat(o))),"onClick",(function(t){var o=e.props,n=o.text,a=o.onCopy,c=o.children,l=o.options,s=r.default.Children.only(c),p=(0,i.default)(n,l);a&&a(n,p),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t)})),e}return t=l,(o=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=p(e,a),n=r.default.Children.only(t);return r.default.cloneElement(n,s(s({},o),{},{onClick:this.onClick}))}}])&&u(t.prototype,o),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.default.PureComponent);t.CopyToClipboard=b,h(b,"defaultProps",{onCopy:void 0,options:void 0})},61476:(e,t,o)=>{"use strict";var n=o(24480).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},40139:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=7435.242efaf1.chunk.js.map