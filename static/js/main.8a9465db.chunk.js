(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,n,o){},15:function(t,n,o){},16:function(t,n,o){},18:function(t,n,o){"use strict";o.r(n);var e=o(1),c=o.n(e),a=o(4),l=o.n(a),u=(o(14),o(5)),i=o(6),r=o(9),s=o(7),b=(o(15),o(16),o(8)),j=o(3),x=o.n(j);function p(t,n,o){var e=x()(t),c=x()(n);if("+"===o)return e.plus(c).toString();if("-"===o)return e.minus(c).toString();if("x"===o)return e.times(c).toString();if("\xf7"===o)return e.div(c).toString();if("%"===o)return e.mod(c).toString();throw Error("Unknown operation '".concat(o,"'"))}function d(t,n){return"AC"===n?{total:"",next:"",operation:""}:n.match(/[0-9]+/)?"0"===n&&"0"===t.next?{}:t.operation?t.next?{next:t.next+n}:{next:n}:t.next?{next:t.next+n,total:null}:{next:n,total:null}:"."===n?t.next?t.next.includes(".")?{}:{next:"".concat(t.next,".")}:t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total)}:{total:"0."}:"="===n?t.next&&t.operation?{total:p(t.total,t.next,t.operation),next:null,operation:""}:{}:"+/-"===n?t.next?{next:(-1*parseFloat(t.next)).toString()}:t.total?{total:(-1*parseFloat(t.total)).toString()}:{}:t.operation?{total:p(t.total,t.next,t.operation),next:null,operation:n}:t.next?{total:t.next,next:null,operation:n}:{operation:n}}var f=o(0),h=function(){var t=Object(e.useState)({}),n=Object(b.a)(t,2),o=n[0],c=o.total,a=o.next,l=o.operation,u=n[1],i=u.setTotal,r=u.setNext,s=u.setOperation,j={total:c,next:a,operation:l},x=function(t){null!=t.total&&i(t.total),r(t.next),null!=t.operation&&s(t.operation)};return Object(f.jsxs)("div",{className:"calculator-container",children:[Object(f.jsx)("div",{className:"display-area",children:Object(f.jsxs)("p",{className:"display-results",children:[c,l,a]})}),Object(f.jsxs)("div",{className:"buttons-container",children:[Object(f.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){x(d(j,"AC"))},children:"AC"}),Object(f.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){x(d(j,"+/-"))},children:"+/-"}),Object(f.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){x(d(j,"%"))},children:"%"}),Object(f.jsx)("button",{type:"button",className:"operator-button",onClick:function(){x(d(j,"\xf7"))},children:"\xf7"}),Object(f.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){x(d(j,"7"))},children:"7"}),Object(f.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){x(d(j,"8"))},children:"8"}),Object(f.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){x(d(j,"9"))},children:"9"}),Object(f.jsx)("button",{type:"button",className:"operator-button",onClick:function(){x(d(j,"x"))},children:"x"}),Object(f.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){x(d(j,"4"))},children:"4"}),Object(f.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){x(d(j,"5"))},children:"5"}),Object(f.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){x(d(j,"6"))},children:"6"}),Object(f.jsx)("button",{type:"button",className:"operator-button",onClick:function(){x(d(j,"-"))},children:"-"}),Object(f.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){x(d(j,"1"))},children:"1"}),Object(f.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){x(d(j,"2"))},children:"2"}),Object(f.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){x(d(j,"3"))},children:"3"}),Object(f.jsx)("button",{type:"button",className:"operator-button",onClick:function(){x(d(j,"+"))},children:"+"}),Object(f.jsx)("button",{type:"button",className:"calculator-button zero",onClick:function(){x(d(j,"0"))},children:"0"}),Object(f.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){x(d(j,"."))},children:"."}),Object(f.jsx)("button",{type:"button",className:"operator-button",onClick:function(){x(d(j,"="))},children:"="})]})]})},O=function(t){Object(r.a)(o,t);var n=Object(s.a)(o);function o(){return Object(u.a)(this,o),n.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(h,{})})}}]),o}(c.a.Component),m=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,19)).then((function(n){var o=n.getCLS,e=n.getFID,c=n.getFCP,a=n.getLCP,l=n.getTTFB;o(t),e(t),c(t),a(t),l(t)}))};l.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.8a9465db.chunk.js.map