(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=(n(12),n(4)),s=n.n(r),i=n(5),o=n(6),l=n(10),d=n(9),j=(n(16),n(7)),b=n.n(j),u=n(0),h=function(e){var t=e.myClick,n=e.name;return Object(u.jsx)("li",{className:b.a.li,children:Object(u.jsx)("button",{onClick:t,children:n})})},m=n(2),p=n.n(m),O=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("h2",{children:"No feedback given"})})},x=function(e){var t=e.good,n=e.bad,a=e.neutral,c=t+a+n;return Object(u.jsx)(u.Fragment,{children:c<=0?Object(u.jsx)(O,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("span",{className:p.a.percentage,children:["Good: ",t]}),Object(u.jsxs)("span",{className:p.a.percentage,children:["Neutral: ",a]}),Object(u.jsxs)("span",{className:p.a.percentage,children:["Bad: ",n]}),Object(u.jsxs)("span",{className:p.a.positivePercentage,children:["Positive percentage: ",Math.round(100*t/c),"% "]})]})})},g=n(8),f=n.n(g),k=function(e){return Object(u.jsxs)("div",{className:f.a.section,children:[Object(u.jsx)("h2",{children:e.title}),e.children]})},_=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleGoodIncrement=function(){e.setState({good:e.state.good+1})},e.handleBadIncrement=function(){e.setState({bad:e.state.bad+1})},e.handleNeutralIncrement=function(){e.setState({neutral:e.state.neutral+1})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(k,{title:"Please leave feedback",children:[Object(u.jsxs)("ul",{children:[Object(u.jsx)(h,{name:"Good",myClick:this.handleGoodIncrement}),Object(u.jsx)(h,{name:"Neutral",myClick:this.handleNeutralIncrement}),Object(u.jsx)(h,{name:"Bad",myClick:this.handleBadIncrement})]}),Object(u.jsx)(x,{good:this.state.good,bad:this.state.bad,neutral:this.state.neutral})]})}}]),n}(c.a.Component);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={percentage:"FeedbackCounter_percentage__7TwEp",positivePercentage:"FeedbackCounter_positivePercentage__13iB1"}},7:function(e,t,n){e.exports={buttonsContainer:"ControlFeedback_buttonsContainer__30BS5",li:"ControlFeedback_li__3n3kL"}},8:function(e,t,n){e.exports={section:"Section_section__Q33dy"}}},[[18,1,2]]]);
//# sourceMappingURL=main.251f2e34.chunk.js.map