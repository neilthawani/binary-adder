(this["webpackJsonpbinary-adder"]=this["webpackJsonpbinary-adder"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),s=t(1),i=t.n(s),c=t(7),l=t.n(c),o=(t(13),t(2)),r=t(3),u=t(5),b=t(4),d=function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"toggleIsOn",value:function(){this.props.sendDecimalChange(this.props.twoToExp)}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"box-object",children:[Object(a.jsx)("div",{className:this.props.isOn?"box active":"box",onClick:this.toggleIsOn.bind(this),children:Object(a.jsx)("h3",{className:"box-number",children:this.props.isOn?"1":"0"})}),Object(a.jsx)("p",{className:"box-label",children:Math.pow(2,this.props.twoToExp)}),Object(a.jsxs)("p",{className:"box-label",children:["2",Object(a.jsx)("sup",{children:this.props.twoToExp})]})]})}}]),t}(s.Component),O=function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).state={decimalValue:0,boxExpOptions:[{value:7,isOn:!1},{value:6,isOn:!1},{value:5,isOn:!1},{value:4,isOn:!1},{value:3,isOn:!1},{value:2,isOn:!1},{value:1,isOn:!1},{value:0,isOn:!1}]},a}return Object(r.a)(t,[{key:"sendDecimalChange",value:function(e){this.setState((function(n){return{boxExpOptions:n.boxExpOptions.map((function(n){return n.value===e?{value:e,isOn:!n.isOn}:n}))}}))}},{key:"decimalValue",value:function(){return this.state.boxExpOptions.reduce((function(e,n,t,a){return n.isOn&&(e+=Math.pow(2,n.value)),e}),0)}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"content-container",children:[Object(a.jsx)("div",{className:"box-container",children:this.state.boxExpOptions.map((function(n,t,s){return Object(a.jsx)(d,{twoToExp:n.value,isOn:n.isOn,sendDecimalChange:e.sendDecimalChange.bind(e)},t)}))}),Object(a.jsxs)("div",{className:"decimal-content",children:[Object(a.jsx)("span",{className:"decimal-value",children:this.decimalValue()}),Object(a.jsx)("span",{className:"decimal-info",children:"(decimal value)"})]}),Object(a.jsx)("div",{className:"feedback-content",children:Object(a.jsx)("span",{className:"feedback-text",children:Object(a.jsx)("a",{href:"mailto:neilthawani@gmail.com",children:"Feedback?"})})})]})}}]),t}(s.Component);var h=function(){return Object(a.jsx)("div",{className:"app-container",children:Object(a.jsx)(O,{})})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(n){var t=n.getCLS,a=n.getFID,s=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),a(e),s(e),i(e),c(e)}))};l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.a96ee14a.chunk.js.map