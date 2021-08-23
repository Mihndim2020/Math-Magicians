(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),c=n(17),r=n.n(c),l=n(8),i=(n(27),n(18)),s=n(19),u=n(22),b=n(21),j=(n(28),n(29),n(2)),h=n(0),p=function(){return Object(h.jsxs)("nav",{className:"navBar",children:[Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Math Magician"})}),Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:[{id:1,path:"/",text:"Home"},{id:2,path:"/calculator",text:"Calculator"},{id:3,path:"/quotes",text:"Quote"}].map((function(t){return Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:t.path,activeClassName:"active-link",exact:!0,children:t.text})},t.id)}))})})]})},d=n(10),m=n(15),x=n.n(m);function f(t,e,n){var o=x()(t),a=x()(e);if("+"===n)return o.plus(a).toString();if("-"===n)return o.minus(a).toString();if("x"===n)return o.times(a).toString();if("\xf7"===n)return 0===a?"Error":o.div(a).toString();if("%"===n)return o.mod(a).toString();throw Error("Unknown operation '".concat(n,"'"))}function y(t,e){return"AC"===e?{total:"",next:"",operation:""}:e.match(/[0-9]+/)?"0"===e&&"0"===t.next?{}:t.operation?t.next?{next:t.next+e}:{next:e}:t.next?{next:t.next+e,total:null}:{next:e,total:null}:"."===e?t.next?t.next.includes(".")?{}:{next:"".concat(t.next,".")}:t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total)}:{total:"0."}:"="===e?t.next&&t.operation?{total:f(t.total,t.next,t.operation),next:null,operation:""}:{}:"+/-"===e?t.next?{next:(-1*parseFloat(t.next)).toString()}:t.total?{total:(-1*parseFloat(t.total)).toString()}:{}:t.operation?{total:f(t.total,t.next,t.operation),next:null,operation:e}:t.next?{total:t.next,next:null,operation:e}:{operation:e}}var O=function(){var t=Object(o.useState)(""),e=Object(d.a)(t,2),n=e[0],a=e[1],c=Object(o.useState)(""),r=Object(d.a)(c,2),l=r[0],i=r[1],s=Object(o.useState)(""),u=Object(d.a)(s,2),b=u[0],j=u[1],p={total:n,next:l,operation:b},m=function(t){null!=t.total&&a(t.total),i(t.next),null!=t.operation&&j(t.operation)};return Object(h.jsxs)("div",{className:"calcPage",children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsx)("h3",{children:"Let's do some math!"})}),Object(h.jsxs)("div",{className:"calculator-container",children:[Object(h.jsx)("div",{className:"display-area",children:Object(h.jsxs)("p",{className:"display-results",children:[n,b,l]})}),Object(h.jsxs)("div",{className:"buttons-container",children:[Object(h.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){m(y(p,"AC"))},children:"AC"}),Object(h.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){m(y(p,"+/-"))},children:"+/-"}),Object(h.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){m(y(p,"%"))},children:"%"}),Object(h.jsx)("button",{type:"button",className:"operator-button",onClick:function(){m(y(p,"\xf7"))},children:"\xf7"}),Object(h.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){m(y(p,"7"))},children:"7"}),Object(h.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){m(y(p,"8"))},children:"8"}),Object(h.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){m(y(p,"9"))},children:"9"}),Object(h.jsx)("button",{type:"button",className:"operator-button",onClick:function(){m(y(p,"x"))},children:"x"}),Object(h.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){m(y(p,"4"))},children:"4"}),Object(h.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){m(y(p,"5"))},children:"5"}),Object(h.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){m(y(p,"6"))},children:"6"}),Object(h.jsx)("button",{type:"button",className:"operator-button",onClick:function(){m(y(p,"-"))},children:"-"}),Object(h.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){m(y(p,"1"))},children:"1"}),Object(h.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){m(y(p,"2"))},children:"2"}),Object(h.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){m(y(p,"3"))},children:"3"}),Object(h.jsx)("button",{type:"button",className:"operator-button",onClick:function(){m(y(p,"+"))},children:"+"}),Object(h.jsx)("button",{type:"button",className:"calculator-button zero",onClick:function(){m(y(p,"0"))},children:"0"}),Object(h.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){m(y(p,"."))},children:"."}),Object(h.jsx)("button",{type:"button",className:"operator-button",onClick:function(){m(y(p,"="))},children:"="})]})]})]})},v=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(O,{})})},g=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"homeContent",children:[Object(h.jsx)("h3",{children:"Welcome to our page !"}),Object(h.jsx)("p",{children:"Our team curates a curriculum that helps you learn the most in-demand skills in web development so you can get a great job, no matter where you live.During our full-time, 10-month program, you\u2019ll develop your technical skills, build projects, and improve the soft skills you need to excel in remote teams. the end of Microverse, your personal career coach will support your job search. They help you prepare for interviews, negotiate job offers, and start your career as a software developer. Our team curates a curriculum that helps you learn the most in-demand skills in web development so you can get a great job, no matter where you live.During our full-time, 10-month program, you\u2019ll develop your technical skills, build projects, and improve the soft skills you need to excel in remote teams. the end of Microverse, your personal career coach will support your job search. They help you prepare for interviews, negotiate job offers, and start your career as a software developer"}),Object(h.jsx)("p",{children:"Our team curates a curriculum that helps you learn the most in-demand skills in web development so you can get a great job, no matter where you live.During our full-time, 10-month program, you\u2019ll develop your technical skills, build projects, and improve the soft skills you need to excel in remote teams. the end of Microverse, your personal career coach will support your job search. They help you prepare for interviews, negotiate job offers, and start your career as a software developer. Our team curates a curriculum that helps you learn the most in-demand skills in web development so you can get a great job, no matter where you live.During our full-time, 10-month program, you\u2019ll develop your technical skills, build projects, and improve the soft skills you need to excel in remote teams. the end of Microverse, your personal career coach will support your job search. They help you prepare for interviews, negotiate job offers, and start your career as a software developer"})]})})},k=function(){return Object(h.jsx)("div",{className:"quoteContent",children:"Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -William Paul Thurston"})},C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{}),Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{exact:!0,path:"/",children:Object(h.jsx)(g,{})}),Object(h.jsx)(j.a,{path:"/calculator",children:Object(h.jsx)(v,{})}),Object(h.jsx)(j.a,{path:"/home",children:Object(h.jsx)(g,{})}),Object(h.jsx)(j.a,{path:"/quotes",children:Object(h.jsx)(k,{})})]})]})}}]),n}(a.a.Component),N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),o(t),a(t),c(t),r(t)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(l.a,{children:Object(h.jsx)(C,{})})}),document.getElementById("root")),N()}},[[36,1,2]]]);
//# sourceMappingURL=main.3913ce61.chunk.js.map