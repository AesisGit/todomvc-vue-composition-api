(function(e){function t(t){for(var l,r,a=t[0],d=t[1],i=t[2],u=0,p=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(l in d)Object.prototype.hasOwnProperty.call(d,l)&&(e[l]=d[l]);s&&s(t);while(p.length)p.shift()();return c.push.apply(c,i||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],l=!0,a=1;a<o.length;a++){var d=o[a];0!==n[d]&&(l=!1)}l&&(c.splice(t--,1),e=r(r.s=o[0]))}return e}var l={},n={app:0},c=[];function r(t){if(l[t])return l[t].exports;var o=l[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=l,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(o,l,function(t){return e[t]}.bind(null,l));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var s=d;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);var l=o("830f"),n=o("5c40");const c={id:"app"},r={class:"todoapp"};function a(e,t){const o=Object(n["q"])("Header"),l=Object(n["q"])("List"),a=Object(n["q"])("Footer"),d=Object(n["q"])("CopyRight");return Object(n["o"])(),Object(n["e"])("div",c,[Object(n["j"])("section",r,[Object(n["j"])(o),e.todos.length?Object(n["j"])(l,{key:0}):Object(n["f"])("",!0),e.todos.length?Object(n["j"])(a,{key:0}):Object(n["f"])("",!0)]),Object(n["j"])(d)])}var d=o("2f62");const i={class:"header"},s=Object(n["j"])("h1",null,"todos",-1);function u(e,t){return Object(n["o"])(),Object(n["e"])("header",i,[s,Object(n["j"])("input",{class:"new-todo",placeholder:"What needs to be done?",value:e.name,onInput:t[1]||(t[1]=t=>e.handleChange(t)),onKeyup:t[2]||(t[2]=t=>e.handleSubmit(t))},null,40,["value"])])}const p="Enter";var b={data:()=>({name:""}),methods:{handleChange(e){this.name=e.target.value},handleSubmit(e){e.key===p&&(this.onCreate(this.name),this.name="")},...Object(d["b"])(["onCreate"])}};b.render=u;var m=b;const j={class:"main"},O={class:"todo-list"};function f(e,t){const o=Object(n["q"])("Item");return Object(n["o"])(),Object(n["e"])("section",j,[Object(n["j"])("input",{id:"toggle-all",class:"toggle-all",type:"checkbox",checked:e.areAllCompleted,readonly:""},null,8,["checked"]),Object(n["j"])("label",{htmlFor:"toggle-all",onClick:t[1]||(t[1]=t=>e.onCompleteAll(t))}),Object(n["j"])("ul",O,[(Object(n["o"])(!0),Object(n["e"])(n["b"],null,Object(n["p"])(e.visibleTodos,l=>(Object(n["o"])(),Object(n["e"])(o,{key:l.id,todo:l,onRemove:t[2]||(t[2]=t=>e.onRemove(t)),onUpdate:t[3]||(t[3]=t=>e.onUpdate(t))},null,8,["todo"]))),128))])])}var h=o("9ff4");const v={class:"view"};function g(e,t){return Object(n["o"])(),Object(n["e"])("li",{class:{completed:e.todo.completed,editing:e.editing}},[Object(n["j"])("div",v,[Object(n["j"])("input",{class:"toggle",type:"checkbox",checked:e.todo.completed,onChange:t[1]||(t[1]=t=>e.handleCompleted(t))},null,40,["checked"]),Object(n["j"])("label",{onDblclick:t[2]||(t[2]=t=>e.handleEdit(t))},Object(h["C"])(e.todo.name),33),Object(n["j"])("button",{class:"destroy",onClick:t[3]||(t[3]=t=>e.handleRemove(t))})]),e.editing?(Object(n["o"])(),Object(n["e"])("input",{key:0,class:"edit",value:e.name,onInput:t[4]||(t[4]=t=>e.handleChange(t)),onBlur:t[5]||(t[5]=t=>e.handleBlur(t))},null,40,["value"])):Object(n["f"])("",!0)],2)}var C=o("a1e9"),y={props:{todo:{type:Object,required:!0}},setup(e,{emit:t}){const o=Object(C["g"])({editing:!1,name:e.todo.name}),l=()=>t("remove",e.todo.id),n=()=>t("update",{id:e.todo.id,completed:!e.todo.completed}),c=()=>o.editing=!0,r=e=>o.name=e.target.value,a=()=>{t("update",{id:e.todo.id,name:o.name}),o.editing=!1};return{handleRemove:l,handleCompleted:n,handleEdit:c,handleChange:r,handleBlur:a,...Object(C["m"])(o)}}};y.render=g;var k=y,w={components:{Item:k},computed:{...Object(d["c"])(["areAllCompleted","visibleTodos"])},methods:{...Object(d["b"])(["onRemove","onUpdate","onCompleteAll"])}};w.render=f;var S=w;const T={class:"footer"},A={class:"todo-count"},x={class:"filters"};function _(e,t){return Object(n["o"])(),Object(n["e"])("footer",T,[Object(n["j"])("span",A,[Object(n["j"])("strong",null,Object(h["C"])(e.itemsLeft),1),Object(n["j"])("span",null,Object(h["C"])(e.itemText)+" left",1)]),Object(n["j"])("ul",x,[(Object(n["o"])(!0),Object(n["e"])(n["b"],null,Object(n["p"])(e.filterTitles,t=>(Object(n["o"])(),Object(n["e"])("li",{key:t.key},[Object(n["j"])("a",{href:"#",class:{selected:t.key===e.filter},onClick:o=>e.onFilterSelect(t.key)},Object(h["C"])(t.value),11,["onClick"])]))),128))]),e.completedCount?(Object(n["o"])(),Object(n["e"])("button",{key:0,class:"clear-completed",onClick:t[1]||(t[1]=t=>e.onClearCompleted(t))},"Clear completed")):Object(n["f"])("",!0)])}const F={all:"all",active:"active",completed:"completed"};var L={methods:{...Object(d["b"])(["onClearCompleted","onFilterSelect"])},computed:{...Object(d["d"])(["todos","filter"]),...Object(d["c"])(["itemsLeft","completedCount"]),itemText(){return 1===this.itemsLeft?"item":"items"},filterTitles(){return[{key:F.all,value:"All"},{key:F.active,value:"Active"},{key:F.completed,value:"Completed"}]}}};L.render=_;var P=L;const R={class:"info"},q=Object(n["j"])("p",null,"Double-click to edit a todo",-1),I=Object(n["j"])("p",null,[Object(n["i"])("Created by "),Object(n["j"])("a",{href:"http://github.com/blacksonic/"},"blacksonic")],-1),M=Object(n["j"])("p",null,[Object(n["i"])("Part of "),Object(n["j"])("a",{href:"http://todomvc.com"},"TodoMVC")],-1);function J(e,t){return Object(n["o"])(),Object(n["e"])("footer",R,[q,I,M])}const U={};U.render=J;var B=U;const E="todoapp_todos";class D{static loadTodos(){return JSON.parse(window.localStorage.getItem(E)||"[]")}static storeTodos(e){window.localStorage.setItem(E,JSON.stringify(e))}}var H={components:{CopyRight:B,Header:m,List:S,Footer:P},computed:{...Object(d["d"])(["todos"])},methods:{...Object(d["b"])(["onLoad"])},mounted(){this.onLoad(D.loadTodos())},watch:{todos(){D.storeTodos(this.todos)}}};H.render=a;var N=H;o("1d55");function K(e,t){switch(t){case F.all:return[...e];case F.completed:return W(e);case F.active:return V(e);default:return[...e]}}function V(e){return e.filter(e=>!e.completed)}function W(e){return e.filter(e=>e.completed)}const z={visibleTodos:e=>K(e.todos,e.filter),areAllCompleted:e=>e.todos.length&&e.todos.every(e=>e.completed),itemsLeft:e=>V(e.todos).length,completedCount:e=>W(e.todos).length},G={load:"load",create:"create",remove:"remove",update:"update",completeAll:"complete_all",clearCompleted:"clear_completed",selectFilter:"select_filter"};var Q=o("ec26");const X={[G.load]:(e,{todos:t})=>e.todos=t,[G.create]:(e,{name:t})=>e.todos=[...e.todos,{id:Object(Q["a"])(),name:t,completed:!1}],[G.update]:(e,t)=>e.todos=e.todos.map(e=>e.id===t.id?{...e,...t}:e),[G.remove]:(e,{id:t})=>e.todos=e.todos.filter(e=>e.id!==t),[G.completeAll]:e=>{const t=e.todos.length&&W(e.todos).length===e.todos.length;e.todos=e.todos.map(e=>({...e,completed:!t}))},[G.clearCompleted]:e=>e.todos=V(e.todos)},Y={[G.selectFilter]:(e,{filter:t})=>e.filter=t},Z={onLoad:({commit:e},t)=>e(G.load,{todos:t}),onCreate:({commit:e},t)=>e(G.create,{name:t}),onRemove:({commit:e},t)=>e(G.remove,{id:t}),onUpdate:({commit:e},t)=>e(G.update,t),onCompleteAll:({commit:e})=>e(G.completeAll),onClearCompleted:({commit:e})=>e(G.clearCompleted)},$={onFilterSelect:({commit:e},t)=>e(G.selectFilter,{filter:t})},ee={...X,...Y},te={...Z,...$},oe=(e={todos:[],filter:F.all})=>new d["a"].Store({state:e,actions:te,mutations:ee,getters:z}),le=Object(l["a"])(N);le.use(oe()),le.mount("app-root")}});
//# sourceMappingURL=app.2a7c5e0a.js.map