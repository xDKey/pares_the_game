(this.webpackJsonppares_the_game=this.webpackJsonppares_the_game||[]).push([[0],{22:function(e,r,t){},23:function(e,r,t){},24:function(e,r,t){},25:function(e,r,t){"use strict";t.r(r);var n={};t.r(n),t.d(n,"flip",(function(){return d})),t.d(n,"reset",(function(){return u}));var o=t(1),c=(t(0),t(4)),i=t.n(c),a=t(3),d=function(e){return{type:"FLIP",id:e}},u=function(){return{type:"RESET"}},s=(t(22),t(23),Object(a.b)((function(e){return{}}),n)((function(e){var r=e.id,t=e.color,n=e.isFlipped,c=e.isOpened,i=e.flip,a=c?"card opened":"card",d={backgroundColor:n?t:null};return Object(o.jsx)("div",{className:a,style:d,onClick:function(){return i(r)}})}))),l=Object(a.b)((function(e){return{cards:e.cards}}))((function(e){return e.cards.map((function(e){return Object(o.jsx)(s,{id:e.id,color:e.color,isFlipped:e.isFlipped,isOpened:e.isOpened},e.id)}))})),p=Object(a.b)((function(e){return{score:e.score,maxScore:e.maxScore}}),n)((function(e){var r=e.score,t=e.maxScore,n=e.reset;return r>=t&&(setTimeout((function(){return alert("Congratulation! You win!")}),2e3),setTimeout(n,5e3)),Object(o.jsx)("div",{className:"game-field",children:Object(o.jsx)(l,{})})})),f=t(5),m=t(2),b=function(e){for(var r=e.length-1;r>0;r--){var t=Math.floor(Math.random()*(r+1)),n=[e[t],e[r]];e[r]=n[0],e[t]=n[1]}return e},h=function(){var e=Math.floor(255*Math.random()),r=Math.floor(255*Math.random()),t=Math.floor(255*Math.random());return"rgb( ".concat(e,", ").concat(r,", ").concat(t," ) ")},j={round:1,selectedItem:null,score:0,maxScore:16,cards:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,r=[],t=1;t<=e;t+=2)for(var n=h(),o=t;o<=t+1;o++)r.push({id:o,group:t,color:n,isFlipped:!1,isOpened:!1});return b(r)}()};Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),t=r.length>>>0;if("function"!==typeof e)throw new TypeError("predicate must be a function");for(var n=arguments[1],o=0;o<t;){var c=r[o];if(e.call(n,c,o,r))return c;o++}},configurable:!0,writable:!0});var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,r=arguments.length>1?arguments[1]:void 0;if("FLIP"===r.type){var t=e.cards.find((function(e){return e.id===r.id}));if(t.isFlipped||t.isOpened)return e;var n={},o=e.round+1;return e.round%2===1&&(n={round:o,selectedItem:t.group,score:e.score,maxScore:e.maxScore,cards:e.cards.map((function(e){return e.id===r.id?Object(m.a)(Object(m.a)({},e),{},{isFlipped:!0}):Object(m.a)(Object(m.a)({},e),{},{isFlipped:!1})}))}),e.round%2===0&&(t.group===e.selectedItem&&(n={round:o,score:e.score+2,maxScore:e.maxScore,selectedItem:e.selectedItem,cards:e.cards.map((function(t){return t.id===r.id||t.group===e.selectedItem?Object(m.a)(Object(m.a)({},t),{},{isFlipped:!0,isOpened:!0}):t}))}),t.group!==e.selectedItem&&(n={round:o,score:e.score,maxScore:e.maxScore,selectedItem:e.selectedItem,cards:e.cards.map((function(e){return e.id===r.id?Object(m.a)(Object(m.a)({},e),{},{isFlipped:!0}):e}))})),n}return"RESET"===r.type?j:e},v=(t(24),Object(f.b)(O));i.a.render(Object(o.jsx)(a.a,{store:v,children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.fbec912f.chunk.js.map