(this.webpackJsonpupdate=this.webpackJsonpupdate||[]).push([[0],{181:function(e,t,a){e.exports=a(386)},186:function(e,t,a){},386:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=(a(186),a(81),a(388)),o=a(35),u=a(177),m=a(21),s=a(394),p=a(393),d=a(390),f=a(391),E=a(387),b=a(104),v=a.n(b),g=a(148),h=a(389);function j(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))}var k=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),u=o[0],s=o[1],d=Object(n.useState)([]),f=Object(m.a)(d,2),b=f[0],k=f[1],y=function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,j(t.originFileObj);case 3:t.preview=e.sent;case 4:s(t.url||t.preview),c(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=r.a.createElement("div",null,r.a.createElement(p.a,null),r.a.createElement("div",{className:"ant-upload-text"},"Upload"));return r.a.createElement("div",{className:"clearfix"},r.a.createElement(E.a,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",listType:"picture-card",fileList:b,onPreview:y,onChange:function(e){var t=e.fileList;return k(t)}},b.length>=8?null:w),r.a.createElement(h.a,{visible:l,footer:null,onCancel:function(){c(!1)}},r.a.createElement("img",{alt:"example",style:{width:"100%"},src:u})))},y=d.a.TextArea;function w(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||f.a.error("You can only upload JPG/PNG file!");var a=e.size/1024/1024<2;return a||f.a.error("Image must smaller than 2MB!"),t&&a}function B(e){return r.a.createElement("div",{className:"titleWrap"},r.a.createElement("div",{className:"delWrap"},r.a.createElement("h3",null,"M\u1ee5c ",e.index),r.a.createElement(o.a,{type:"danger",style:{marginLeft:16},onClick:e.onDelete},"X\xf3a m\u1ee5c")),r.a.createElement("br",null),r.a.createElement(d.a,{placeholder:"\u0110\u1ec1 m\u1ee5c",allowClear:!0,onChange:function(){}}),r.a.createElement("br",null),r.a.createElement(y,{placeholder:"N\u1ed9i dung",allowClear:!0,onChange:function(){}}),r.a.createElement("br",null),r.a.createElement(d.a,{placeholder:"Quote n\u1ebfu c\xf3",allowClear:!0,onChange:function(){}}),r.a.createElement("br",null),r.a.createElement(d.a,{placeholder:"Link youtube n\u1ebfu c\xf3",allowClear:!0,onChange:function(){}}),r.a.createElement("br",null),r.a.createElement("h4",null,"H\xecnh cho m\u1ee5c n\xe0y:"),r.a.createElement(k,null))}var O=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(m.a)(c,2),f=i[0],b=i[1],v=Object(n.useState)(""),g=Object(m.a)(v,2),h=(g[0],g[1]),j=Object(n.useState)(""),k=Object(m.a)(j,2),O=(k[0],k[1],Object(n.useState)("")),C=Object(m.a)(O,2),A=(C[0],C[1]),x=Object(n.useState)([]),L=Object(m.a)(x,2),N=L[0],S=L[1],U=r.a.createElement("div",null,f?r.a.createElement(s.a,null):r.a.createElement(p.a,null),r.a.createElement("div",{className:"ant-upload-text"},"Upload"));return r.a.createElement("div",null,r.a.createElement("div",{className:"btnWrap"},r.a.createElement(o.a,{type:"primary"},"Th\xeam m\u1edbi"),r.a.createElement(o.a,{type:"primary",style:{marginLeft:16}},"L\u01b0u")),r.a.createElement("br",null),r.a.createElement(d.a,{placeholder:"Ti\xeau \u0111\u1ec1",allowClear:!0,onChange:function(e){return h(e)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",beforeUpload:w,onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}(e.file.originFileObj,(function(e){b(!1),l(e)})):b(!0)}},a?r.a.createElement("img",{src:a,alt:"avatar",style:{width:"100%"}}):U),r.a.createElement("br",null),r.a.createElement(y,{placeholder:"M\xf4 t\u1ea3",allowClear:!0,onChange:function(e){return A(e)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(o.a,{type:"primary",onClick:function(){S([].concat(Object(u.a)(N),[{title:"",content:"",ytbURL:"",pictureLinks:[]}]))}},"Th\xeam m\u1ee5c"),r.a.createElement("br",null),N.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("br",null),r.a.createElement(B,{index:t+1,onDelete:function(){return function(e){N.splice(e,1),N.forEach((function(e,t){return e.index=t+1})),S([N]),console.log(N)}(t)}}))})))},C=i.a.Meta,A=[{title:"AAAA",cover:"https://nguoinoitieng.tv/images/nnt/96/0/bby1.jpg",description:"BBBBBBBB fnkjskfjkjf ksnfknvkjr jnkncue"},{title:"AAAA",cover:"https://nguoinoitieng.tv/images/nnt/96/0/bby1.jpg",description:"BBBBBBBB fnkjskfjkjf ksnfknvkjr jnkncue"},{title:"AAAA",cover:"https://nguoinoitieng.tv/images/nnt/96/0/bby1.jpg",description:"BBBBBBBB fnkjskfjkjf ksnfknvkjr jnkncue"}];var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"leftHalf"},A.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(i.a,{style:{width:"100%"},cover:r.a.createElement("img",{alt:"example",src:e.cover,width:"100%",height:"150"})},r.a.createElement(C,{title:e.title,description:e.description})),r.a.createElement("br",null),r.a.createElement(o.a,{type:"primary",block:!0},"S\u1eeda"),r.a.createElement("br",null),r.a.createElement("br",null))}))),r.a.createElement("div",{className:"rightHalf"},r.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(109),N=a.n(L);N.a.initializeApp({apiKey:"AIzaSyCIbYZAKvEmY9ns42xafyV54BFU6qUCmKI",authDomain:"dau-giau.firebaseapp.com",databaseURL:"https://dau-giau.firebaseio.com",projectId:"dau-giau",storageBucket:"dau-giau.appspot.com",messagingSenderId:"801715659405",appId:"1:801715659405:web:cb3eecc4840cd11abaf8c4",measurementId:"G-XCRXMT5JYZ"}),N.a.analytics(),c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){}},[[181,1,2]]]);
//# sourceMappingURL=main.28c171b0.chunk.js.map