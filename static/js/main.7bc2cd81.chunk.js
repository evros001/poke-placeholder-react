(this["webpackJsonppoke-placeholder-react"]=this["webpackJsonppoke-placeholder-react"]||[]).push([[0],[,,,,function(e,t,n){e.exports={container:"Post_container__qmlVI",title:"Post_title__2HFn0",body:"Post_body__Ngja1"}},function(e,t,n){e.exports={container:"PokemonCard_container__3P6tL",title:"PokemonCard_title__fTM21"}},function(e,t,n){e.exports={container:"PokemonList_container__3MkgK",title:"PokemonList_title__2YJxA"}},function(e,t,n){e.exports={container:"PostsList_container__TnTLL",title:"PostsList_title__y0_87"}},function(e,t,n){e.exports={container:"Lists_container__5ka8h",title:"Lists_title__1QL_X"}},,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),c=n.n(r),s=(n(16),n(1)),i=n.n(s),l=n(2),u=n(3);n(5);var p=function(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),o=(n[0],n[1]);Object(a.useEffect)((function(){function t(){return(t=Object(l.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e.overviewUrl));case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,o(a.sprites.front_default);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[])},m=n(6),f=n.n(m);var _=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=50");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),o.a.createElement("section",{className:f.a.container},o.a.createElement("h2",{className:f.a.title},"Pokemon"),n&&n.map((function(e,t){return o.a.createElement(p,{key:t,overviewUrl:e.url,pokemonName:e.name})})))},h=n(4),v=n.n(h);var d=function(e){return o.a.createElement("article",{className:v.a.container},o.a.createElement("h2",{className:v.a.title},e.postTitle),o.a.createElement("p",{className:v.a.body},e.postCopy))},k=n(7),E=n.n(k);var b=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),o.a.createElement("section",{className:E.a.container},o.a.createElement("h2",{className:E.a.title},"Blog Posts"),n&&n.map((function(e){return o.a.createElement(d,{key:e.id,postTitle:e.title,postCopy:e.body})})))},y=n(8),j=n.n(y);var w=function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:j.a.title},"Blog Posts and Pokemon"),o.a.createElement("section",{className:j.a.container},o.a.createElement(b,null),o.a.createElement(_,null)))};n(18);var x=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.7bc2cd81.chunk.js.map