(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{169:function(t,e,a){"use strict";a.r(e);var n=a(2),s=a.n(n),r=a(13),i=a.n(r),o=(a(78),a(79),a(17)),c=a(18),l=a(24),d=a(23),u=a(14),b=a.n(u),h=a(16),j=a(73),m=a(4),p={option:function(t){return Object(h.a)(Object(h.a)({},t),{},{color:"#5d6d7e"})},control:function(t){return Object(h.a)(Object(h.a)({},t),{},{border:0,boxShadow:"none",color:"#5d6d7e"})},singleValue:function(t){return Object(h.a)(Object(h.a)({},t),{},{color:"#5d6d7e"})}},g=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).handleSymbolChange=function(e){t.setState({symbol:e.label}),t.props.getSymbol(e.label)},t.state={symbol:"",options:[]},b.a.get("/currencies").then((function(e){t.setState({options:e.data.currencies})})),t}return Object(c.a)(a,[{key:"render",value:function(){var t=this.state.symbol.selectedOption;return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{children:["Enter symbol:",Object(m.jsx)(j.a,{value:t,options:this.state.options,className:"Select",onChange:this.handleSymbolChange,placeholder:"'BTC'",styles:p})]})})}}]),a}(s.a.Component),y=a(53),f=a(50),O=a.n(f),x=(a(111),function(t){var e=new Date;e.setHours(0),e.setMinutes(0),e.setSeconds(0);var a=new Date;a.setMinutes(a.getMinutes()-1);var s=Object(n.useState)(e),r=Object(y.a)(s,2),i=r[0],o=r[1],c=Object(n.useState)(a),l=Object(y.a)(c,2),d=l[0],u=l[1];return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("a",{style:{marginRight:"15px"},children:"Enter buying date:"}),Object(m.jsx)(O.a,{className:"Input",selected:i,onChange:function(e){return function(e){o(e),console.log(e),t.getStartDate(e.getTime(),e.toLocaleString())}(e)},timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("a",{style:{marginRight:"15px"},children:"Enter selling date:"}),Object(m.jsx)(O.a,{className:"Input",selected:d,onChange:function(e){return function(e){u(e),console.log(e),t.getEndDate(e.getTime(),e.toLocaleString())}(e)},timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0})]})]})}),v=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).handleAmountChange=function(e){t.props.getAmount(e.target.value)},t.state={amount:0},t}return Object(c.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("a",{style:{marginRight:"15px"},children:"Enter amount:"}),Object(m.jsx)("a",{style:{fontSize:"21px"},children:"$ "}),Object(m.jsx)("input",{className:"Input",value:this.state.value,onChange:this.handleAmountChange,placeholder:"'1000'"})]})})}}]),a}(s.a.Component),S=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a),(t=e.call(this)).formatter=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),t.updateSymbol=function(e){t.setState({symbol:e})},t.updateAmount=function(e){t.setState({amount:e})},t.updateStartDate=function(e,a){t.setState({buydate:e,buydatestring:a})},t.updateEndDate=function(e,a){t.setState({selldate:e,selldatestring:a})},t.buttonClick=function(){t.setState({isLoading:!0}),b.a.get("/profit").then((function(e){t.setState({isLoading:!1,profit:e.data.profit})})),b.a.post("/symbol",{symbol:t.state.symbol}),b.a.post("/buydate",{buydate:t.state.buydate}),b.a.post("/selldate",{selldate:t.state.selldate}),b.a.post("/amount",{amount:t.state.amount}),isFinite(String(t.state.amount))||t.setState({error:1}),t.state.buydate>(new Date).getTime()?t.setState({error:2}):t.state.selldate>(new Date).getTime()?t.setState({error:3}):t.state.buydate>t.state.selldate&&t.setState({error:4})};var n=new Date;n.setHours(0),n.setMinutes(0),n.setSeconds(0);var s=new Date;return s.setMinutes(s.getMinutes()-1),t.state={symbol:"",buydate:n.getTime(),buydatestring:n.toLocaleString(),selldate:s.getTime(),selldatestring:s.toLocaleString(),amount:0,profit:0,isLoading:null,error:0},t}return Object(c.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Body",children:[Object(m.jsx)(g,{getSymbol:this.updateSymbol}),Object(m.jsx)(v,{getAmount:this.updateAmount}),Object(m.jsx)(x,{getStartDate:this.updateStartDate,getEndDate:this.updateEndDate}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"Button",onClick:this.buttonClick,children:"Get Profit!"})}),"error"===this.state.profit&&0===this.state.error&&Object(m.jsx)("div",{style:{color:"#F1948A"},children:"This currency is not supported this far back!"}),1===this.state.error&&Object(m.jsx)("div",{style:{color:"#F1948A"},children:"Entered amount is invalid!"}),2===this.state.error&&Object(m.jsx)("div",{style:{color:"#F1948A"},children:"Buying date is past current time!"}),3===this.state.error&&Object(m.jsx)("div",{style:{color:"#F1948A"},children:"Selling date is past current time!"}),4===this.state.error&&Object(m.jsx)("div",{style:{color:"#F1948A"},children:"Buying date is past selling date!"}),!0===this.state.isLoading&&!this.state.error&&"error"!==this.state.profit&&Object(m.jsx)("div",{children:"Loading..."}),!1===this.state.isLoading&&!this.state.error&&"error"!==this.state.profit&&Object(m.jsxs)("div",{children:["The amount of profit from buying"," ",this.formatter.format(this.state.amount)," of"," ",this.state.symbol.toUpperCase()," from ",this.state.buydatestring," ","to ",this.state.selldatestring," is:"," ",Object(m.jsx)("div",{className:"Profit",children:this.state.profit<0?Object(m.jsx)("a",{style:{color:"#F1948A"},children:this.formatter.format(this.state.profit)}):Object(m.jsx)("a",{style:{color:"#73c6b6"},children:this.formatter.format(this.state.profit)})})]})]})}}]),a}(s.a.Component);var C=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)("header",{className:"Header",children:"Cryptocurrency Profit Calculator"}),Object(m.jsxs)("header",{className:"SubHeader",children:["Get the amount of profit from investing in any cryptocurrency at any date and time!",Object(m.jsx)("hr",{className:"Hr"})]}),Object(m.jsx)(S,{})]})})},D=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,174)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),r(t),i(t)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),D()},78:function(t,e,a){},79:function(t,e,a){}},[[169,1,2]]]);
//# sourceMappingURL=main.b3ab2755.chunk.js.map