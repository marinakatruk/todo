(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,function(e,t,n){e.exports={list:"list_list__1k9GO",listItem:"list_listItem__FCmRU",deleteButton:"list_deleteButton__2mixh",completeButton:"list_completeButton__151GN"}},,,function(e,t,n){e.exports={container:"App_container__eSJ6i",form:"App_form__33OEa",input:"App_input__13lVr"}},,,,function(e,t,n){e.exports={button:"button_button__2vIJC"}},function(e,t,n){e.exports={itemCounter:"counter_itemCounter__2EOQL"}},function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(8),c=n.n(l),r=n(6),i=n(3),m=n(5),u=n.n(m),s=n(2),p=n.n(s),d=function(e){var t=e.items,n=e.removeItem,a=e.completeItem;return o.a.createElement("ul",{className:p.a.list},t.map((function(e,t){return o.a.createElement("li",{className:p.a.listItem,key:t,index:t},o.a.createElement("span",{style:{textDecoration:e.isCompleted?"line-through":""}},e.text),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return a(t)},type:"button",className:p.a.completeButton},"\u2714"),o.a.createElement("button",{onClick:function(){return n(t)},type:"button",className:p.a.deleteButton,value:e.text},"\xd7")))})))},_=n(9),f=n.n(_),b=function(e){var t=e.type,n=e.text,a=e.color,l=e.onClick;return o.a.createElement("button",{type:t,className:f.a.button,style:{backgroundColor:"".concat(a)},onClick:l},n)},E=n(10),v=n.n(E),C=function(e){var t=e.items,n=e.total,a=e.completed;return o.a.createElement("div",{className:v.a.itemCounter,style:{display:0===t.length?"none":""}},"Total:",o.a.createElement("span",null,n),"Completed:",o.a.createElement("span",null,a))};var h=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),m=Object(i.a)(c,2),s=m[0],p=m[1],_=Object(a.useState)(0),f=Object(i.a)(_,2),E=f[0],v=f[1],h=Object(a.useState)(0),x=Object(i.a)(h,2),y=x[0],O=x[1];return o.a.createElement("div",{className:u.a.container},o.a.createElement("h1",null,"ToDo App"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s&&(!function(e){var t=[].concat(Object(r.a)(n),[{text:e,isCompleted:!1}]);l(t),v(E+1)}(s),p(""))},className:u.a.form},o.a.createElement("input",{className:u.a.input,type:"text",placeholder:"New item",value:s,onChange:function(e){return p(e.target.value)}}),o.a.createElement(b,{type:"submit",text:"Add",color:"#00BFFF"})),o.a.createElement("h2",null,"Your ToDo List"),o.a.createElement(d,{items:n,removeItem:function(e){var t=Object(r.a)(n);!0===t[e].isCompleted&&O(y-1),t.splice(e,1),l(t),v(E-1)},completeItem:function(e){var t=Object(r.a)(n);t[e].isCompleted?(t[e].isCompleted=!1,l(t),O(y-1)):(t[e].isCompleted=!0,l(t),O(y+1))}}),o.a.createElement(C,{total:E,completed:y,items:n}),o.a.createElement(b,{onClick:function(){l([]),v(0),O(0)},type:"reset",text:"Clear All",color:"#FF6347"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.d77d8fce.chunk.js.map