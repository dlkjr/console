"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1581],{1581:function(e,t,a){a.r(t);var n=a(29439),s=a(1413),i=a(72791),l=a(40986),o=a(75952),c=a(11135),r=a(25787),u=a(61889),d=a(45248),f=a(23814),m=a(37516),x=a(21435),Z=a(56028),h=a(81207),p=a(56578),j=a(87995),v=a(25469),b=a(80184);t.default=(0,r.Z)((function(e){return(0,c.Z)((0,s.Z)((0,s.Z)({},f.DF),f.ID))}))((function(e){var t=e.classes,a=e.open,s=e.enabled,c=e.cfg,r=e.selectedBucket,f=e.closeModalAndRefresh,g=(0,v.TL)(),k=(0,i.useState)(!1),C=(0,n.Z)(k,2),S=C[0],N=C[1],P=(0,i.useState)(!1),q=(0,n.Z)(P,2),B=q[0],w=q[1],y=(0,i.useState)("1"),z=(0,n.Z)(y,2),E=z[0],_=z[1],M=(0,i.useState)("Ti"),D=(0,n.Z)(M,2),T=D[0],F=D[1],I=(0,i.useState)(!1),L=(0,n.Z)(I,2),Q=L[0],R=L[1];(0,i.useEffect)((function(){if(s&&(w(!0),c)){var e=(0,d.Am)(c.quota,!0,!1,!0);_(e.total.toString()),F(e.unit),R(!0)}}),[s,c]),(0,i.useEffect)((function(){R(!B||/^\d*(?:\.\d{1,2})?$/.test(E))}),[B,E]);return(0,b.jsx)(Z.Z,{modalOpen:a,onClose:function(){f()},title:"Enable Bucket Quota",titleIcon:(0,b.jsx)(o.Wqw,{}),children:(0,b.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),function(){if(!S&&Q){var e={enabled:B,amount:parseInt((0,d.Pw)(E,T,!0)),quota_type:"hard"};h.Z.invoke("PUT","/api/v1/buckets/".concat(r,"/quota"),e).then((function(){N(!1),f()})).catch((function(e){N(!1),g((0,j.zb)(e))}))}}()},children:(0,b.jsxs)(u.ZP,{container:!0,children:[(0,b.jsxs)(u.ZP,{item:!0,xs:12,className:t.formScrollable,children:[(0,b.jsx)(u.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,b.jsx)(m.Z,{value:"bucket_quota",id:"bucket_quota",name:"bucket_quota",checked:B,onChange:function(e){w(e.target.checked)},label:"Enabled"})}),B&&(0,b.jsx)(i.Fragment,{children:(0,b.jsx)(u.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,b.jsx)(u.ZP,{container:!0,children:(0,b.jsx)(u.ZP,{item:!0,xs:12,children:(0,b.jsx)(x.Z,{id:"quota_size",name:"quota_size",onChange:function(e){_(e.target.value),e.target.validity.valid?R(!0):R(!1)},label:"Quota",value:E,required:!0,min:"1",overlayObject:(0,b.jsx)(p.Z,{id:"quota_unit",onUnitChange:function(e){F(e)},unitSelected:T,unitsList:(0,d.zQ)(["Ki"]),disabled:!1}),error:Q?"":"Please enter a valid quota"})})})})})]}),(0,b.jsxs)(u.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:[(0,b.jsx)(o.zxk,{id:"cancel",type:"button",variant:"regular",disabled:S,onClick:function(){f()},label:"Cancel"}),(0,b.jsx)(o.zxk,{id:"save",type:"submit",variant:"callAction",disabled:S||!Q,label:"Save"})]}),S&&(0,b.jsx)(u.ZP,{item:!0,xs:12,children:(0,b.jsx)(l.Z,{})})]})})})}))},56028:function(e,t,a){var n=a(29439),s=a(1413),i=a(72791),l=a(78687),o=a(13400),c=a(55646),r=a(5574),u=a(65661),d=a(39157),f=a(11135),m=a(25787),x=a(23814),Z=a(25469),h=a(29823),p=a(28057),j=a(87995),v=a(80184);t.Z=(0,m.Z)((function(e){return(0,f.Z)((0,s.Z)((0,s.Z)({},x.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},x.sN))}))((function(e){var t=e.onClose,a=e.modalOpen,f=e.title,m=e.children,x=e.classes,b=e.wideLimit,g=void 0===b||b,k=e.noContentPadding,C=e.titleIcon,S=void 0===C?null:C,N=(0,Z.TL)(),P=(0,i.useState)(!1),q=(0,n.Z)(P,2),B=q[0],w=q[1],y=(0,l.v9)((function(e){return e.system.modalSnackBar}));(0,i.useEffect)((function(){N((0,j.MK)(""))}),[N]),(0,i.useEffect)((function(){if(y){if(""===y.message)return void w(!1);"error"!==y.type&&w(!0)}}),[y]);var z=g?{classes:{paper:x.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},E="";return y&&(E=y.detailedErrorMsg,(""===y.detailedErrorMsg||y.detailedErrorMsg.length<5)&&(E=y.message)),(0,v.jsxs)(r.Z,(0,s.Z)((0,s.Z)({open:a,classes:x},z),{},{scroll:"paper",onClose:function(e,a){"backdropClick"!==a&&t()},className:x.root,children:[(0,v.jsxs)(u.Z,{className:x.title,children:[(0,v.jsxs)("div",{className:x.titleText,children:[S," ",f]}),(0,v.jsx)("div",{className:x.closeContainer,children:(0,v.jsx)(o.Z,{"aria-label":"close",id:"close",className:x.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,v.jsx)(h.Z,{})})})]}),(0,v.jsx)(p.Z,{isModal:!0}),(0,v.jsx)(c.Z,{open:B,className:x.snackBarModal,onClose:function(){w(!1),N((0,j.MK)(""))},message:E,ContentProps:{className:"".concat(x.snackBar," ").concat(y&&"error"===y.type?x.errorSnackBar:"")},autoHideDuration:y&&"error"===y.type?1e4:5e3}),(0,v.jsx)(d.Z,{className:k?"":x.content,children:m})]}))}))}}]);
//# sourceMappingURL=1581.16dc83a0.chunk.js.map