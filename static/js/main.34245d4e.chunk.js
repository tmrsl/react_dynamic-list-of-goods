(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r),a=n(2),s=n(6),c=n(7),i=n(10),u=n(9),d=n(1),p=n.n(d),l=n(3),f=n.n(l),b=(n(16),function(t){return new Promise((function(e){setTimeout(e,t)}))}),h=function(){var t=Object(a.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(1e3);case 2:return t.next=4,fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json");case 4:if((e=t.sent).ok){t.next=7;break}throw new Error("Ooops. Error: ".concat(e.status));case 7:return t.abrupt("return",e.json());case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return e=t.sent,t.abrupt("return",e.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return e=t.sent,t.abrupt("return",e.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=(n(17),n(0)),v=function(t){var e=t.goods;return Object(g.jsx)("ul",{className:"list",children:e.map((function(t){return Object(g.jsx)("li",{style:{color:t.color},className:"list__item",children:t.name},t.id)}))})},_=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={goods:[],isLoading:!1,loadingErr:!1},t.loadGoods=function(){var e=Object(a.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({goods:[],loadingErr:!1,isLoading:!0}),e.prev=1,e.next=4,n();case 4:r=e.sent,t.setState({goods:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.setState({loadingErr:!0});case 11:return e.prev=11,t.setState({isLoading:!1}),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}(),t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goods,r=e.loadingErr,o=e.isLoading;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{className:"App__title",children:"Dynamic List of Goods"}),Object(g.jsxs)("div",{className:"App__wrapper",children:[Object(g.jsx)("button",{type:"button",onClick:function(){return t.loadGoods(h)},className:"App__button App__button--all",children:"Get all the goods"}),Object(g.jsx)("button",{type:"button",onClick:function(){return t.loadGoods(j)},className:"App__button App__button--5first",children:"Get 5 first products"}),Object(g.jsx)("button",{type:"button",onClick:function(){return t.loadGoods(m)},className:"App__button App__button--red",children:"Get red goods"})]}),Object(g.jsxs)("div",{className:"App__goodsList",children:[o&&Object(g.jsx)("div",{className:"App__goodsList--loading",children:"Loading..."}),0!==n.length&&Object(g.jsx)(v,{goods:this.state.goods}),r&&Object(g.jsx)("div",{className:"App__goodsList--error",children:"Loading error"})]})]})}}]),n}(f.a.Component),x=_;o.a.render(Object(g.jsx)(x,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.34245d4e.chunk.js.map