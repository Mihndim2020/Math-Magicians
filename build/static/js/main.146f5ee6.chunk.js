(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,n,e){},15:function(t,n,e){},16:function(t,n,e){},18:function(t,n,e){"use strict";e.r(n);var o=e(1),a=e.n(o),c=e(9),l=e.n(c),i=(e(14),e(2)),r=e(3),u=e(6),s=e(5),b=(e(15),e(16),e(4)),d=e(8),j=e.n(d);function p(t,n,e){var o=j()(t),a=j()(n);if("+"===e)return o.plus(a).toString();if("-"===e)return o.minus(a).toString();if("x"===e)return o.times(a).toString();if("\xf7"===e)return o.div(a).toString();if("%"===e)return o.mod(a).toString();throw Error("Unknown operation '".concat(e,"'"))}function x(t,n){return"AC"===n?{total:null,next:null,operation:null}:n.match(/[0-9]+/)?"0"===n&&"0"===t.next?{}:t.operation?t.next?{next:t.next+n}:{next:n}:t.next?{next:t.next+n,total:null}:{next:n,total:null}:"."===n?t.next?t.next.includes(".")?{}:{next:"".concat(t.next)}:t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total)}:{total:"0."}:"="===n?t.next&&t.operation?{total:p(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===n?t.next?{next:(-1*parseFloat(t.next)).toString()}:t.total?{total:(-1*parseFloat(t.total)).toString()}:{}:t.operation?{total:p(t.total,t.next,t.operation),next:null,operation:n}:t.next?{total:t.next,next:null,operation:n}:{operation:n}}var C=e(0),k=function(t){Object(u.a)(e,t);var n=Object(s.a)(e);function e(t){var o;return Object(i.a)(this,e),(o=n.call(this,t)).state={total:"",next:"",operation:""},o.onClickHandler=o.onClickHandler.bind(Object(b.a)(o)),o}return Object(r.a)(e,[{key:"onClickHandler",value:function(t){null!=t.total&&this.setState({total:t.total}),this.setState({next:t.next}),null!=t.operation&&this.setState({operation:t.operation})}},{key:"render",value:function(){var t=this,n=this.state,e=n.total,o=n.next,a=n.operation;return Object(C.jsxs)("div",{className:"calculator-container",children:[Object(C.jsx)("div",{className:"display-area",children:Object(C.jsxs)("p",{className:"display-results",children:[e,a,o]})}),Object(C.jsxs)("div",{className:"buttons-container",children:[Object(C.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){t.onClickHandler(x(t.state,"AC"))},children:"AC"}),Object(C.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){t.onClickHandler(x(t.state,"+/-"))},children:"+/-"}),Object(C.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){t.onClickHandler(x(t.state,"%"))},children:"%"}),Object(C.jsx)("button",{type:"button",className:"operator-button",onClick:function(){t.onClickHandler(x(t.state,"\xf7"))},children:"\xf7"}),Object(C.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){t.onClickHandler(x(t.state,"7"))},children:"7"}),Object(C.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){t.onClickHandler(x(t.state,"8"))},children:"8"}),Object(C.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){t.onClickHandler(x(t.state,"9"))},children:"9"}),Object(C.jsx)("button",{type:"button",className:"operator-button",onClick:function(){t.onClickHandler(x(t.state,"x"))},children:"x"}),Object(C.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){t.onClickHandler(x(t.state,"4"))},children:"4"}),Object(C.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){t.onClickHandler(x(t.state,"5"))},children:"5"}),Object(C.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){t.onClickHandler(x(t.state,"6"))},children:"6"}),Object(C.jsx)("button",{type:"button",className:"operator-button",onClick:function(){t.onClickHandler(x(t.state,"-"))},children:"-"}),Object(C.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){t.onClickHandler(x(t.state,"1"))},children:"1"}),Object(C.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){t.onClickHandler(x(t.state,"2"))},children:"2"}),Object(C.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){t.onClickHandler(x(t.state,"3"))},children:"3"}),Object(C.jsx)("button",{type:"button",className:"operator-button",onClick:function(){t.onClickHandler(x(t.state,"+"))},children:"+"}),Object(C.jsx)("button",{type:"button",className:"calculator-button zero",onClick:function(){t.onClickHandler(x(t.state,"0"))},children:"0"}),Object(C.jsx)("button",{type:"button",className:"calculator-button",onClick:function(){t.onClickHandler(x(t.state,"."))},children:"."}),Object(C.jsx)("button",{type:"button",className:"operator-button",onClick:function(){t.onClickHandler(x(t.state,"="))},children:"="})]})]})}}]),e}(a.a.Component),h=function(t){Object(u.a)(e,t);var n=Object(s.a)(e);function e(){return Object(i.a)(this,e),n.apply(this,arguments)}return Object(r.a)(e,[{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsx)(k,{})})}}]),e}(a.a.Component),f=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,19)).then((function(n){var e=n.getCLS,o=n.getFID,a=n.getFCP,c=n.getLCP,l=n.getTTFB;e(t),o(t),a(t),c(t),l(t)}))};l.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(h,{})}),document.getElementById("root")),f()}},[[18,1,2]]]);
//# sourceMappingURL=main.146f5ee6.chunk.js.map