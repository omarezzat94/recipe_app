(this.webpackJsonprecipeapp=this.webpackJsonprecipeapp||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(29),a(14)),s=a.n(o),l=a(18),m=a(12),u=(a(31),a(41)),p=function(e){var t=e.title,a=(e.calories,e.image),n=e.ingredients;return r.a.createElement(u.a,{className:"shadow-sm rounded",style:{width:"20rem"}},r.a.createElement(u.a.Img,{variant:"top",src:a}),r.a.createElement(u.a.Body,null,r.a.createElement(u.a.Title,{className:"mb-2"},t),r.a.createElement(u.a.Text,null,n.map((function(e){return r.a.createElement("li",null,e.text)})))))},d=a(40),f=a(39),h=a(42),b=a(38);var v=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),u=o[0],v=o[1],E=Object(n.useState)(""),g=Object(m.a)(E,2),w=g[0],y=g[1];Object(n.useEffect)((function(){j()}),[w]);var j=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(w,"&app_id=").concat("dc3d691f","&app_key=").concat("d5cd505cbe187512f8889563afdffbb0"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{bg:"primary",variant:"dark"},r.a.createElement(d.a.Brand,{href:"#home"},"Recipe App"),r.a.createElement(f.a,{inline:!0,fixed:"top",onSubmit:function(e){e.preventDefault(),y(u),v("")},onChange:function(e){v(e.target.value)}},r.a.createElement(f.a.Control,{type:"text",placeholder:"Search",value:u,className:"mr-sm-3"}),r.a.createElement(h.a,{variant:"dark",className:"search-button",type:"submit"},"Search"))),r.a.createElement(b.a,{className:"mt-5"},a.map((function(e){return r.a.createElement(p,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.0a8049e0.chunk.js.map