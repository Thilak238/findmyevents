(this.webpackJsonpfindmyevents=this.webpackJsonpfindmyevents||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),s=(a(41),a(7)),o=a(8),i=a(10),u=a(9),m=a(15),p=a(1),v=function(e){var t=e.title;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-success mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{style:{color:"Yellow",fontSize:"35px",textAlign:"center",alignContent:"center"},href:"/#",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(m.b,{to:"/",className:"nav-link",style:{color:"aqua",fontSize:"25px"},href:"/#"},r.a.createElement("i",{className:"fas fa-eye"})," View")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(m.b,{to:"/event/add",className:"nav-link",style:{color:"aqua",fontSize:"25px"},href:"/#"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(m.b,{to:"/about",className:"nav-link",style:{color:"aqua",fontSize:"25px"},href:"/#"},r.a.createElement("i",{className:"fas fa-question"}),"About"))))))};v.defaultProps={title:"FindMyEvents"};var d=v,f=a(11),b=a.n(f),h=a(13),E=a(35),y=a(17),N=a(14),w=a.n(N),O=r.a.createContext(),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={events:[],dispatch:function(t){e.setState((function(e){return function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(y.a)(Object(y.a)({},e),{},{events:e.events.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(y.a)(Object(y.a)({},e),{},{events:[t.payload].concat(Object(E.a)(e.events))});default:return e}}(e,t)}))}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({events:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),g=O.Consumer,C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showEventInfo:!1},e.onShowClick=function(t){e.setState({showEventInfo:!e.state.showEventInfo})},e.onDeleteClick=function(){var e=Object(h.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.event,a=t.id,n=t.name,c=t.website,l=this.state.showEventInfo;return r.a.createElement(g,null,(function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h3",null,"Event name : ",n,r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-angle-down"}),r.a.createElement("button",{type:"button",onClick:e.onDeleteClick.bind(e,a,s),style:{float:"right",fontSize:"15px"}},"Delete")),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Website : ",c)):null)}))}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(g,null,(function(e){var t=e.events;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{style:{color:"blue"}},"Events")," List"),t.map((function(e){return r.a.createElement(C,{key:e.id,event:e})})))}))}}]),a}(n.Component),x=a(18),S=a(34),A=a.n(S),D=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,l=e.type,s=e.onChange,o=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:l,className:A()("form-control form-control-lg",{"is-invalid":o}),placeholder:c,name:a,value:n,onChange:s}),o&&r.a.createElement("div",{className:"invalid-feedback"},o))};D.defaultProps={type:"text"};var T=D,q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",website:"",errors:{}},e.onSubmit=function(){var t=Object(h.a)(b.a.mark((function t(a,n){var r,c,l,s,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,l=r.website,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is Required"}}),t.abrupt("return");case 5:if(""!==l){t.next=8;break}return e.setState({errors:{city:"City is Required"}}),t.abrupt("return");case 8:return s={name:c,website:l},t.next=11,w.a.post("https://jsonplaceholder.typicode.com/users",s);case 11:o=t.sent,a({type:"ADD_CONTACT",payload:o.data}),e.setState({name:"",website:"",errors:{}}),e.props.history.push("/");case 15:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(x.a)({},t.target.name,t.target.value))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.website,c=t.errors;return r.a.createElement(g,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"AddEvent"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(T,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,error:c.name}),r.a.createElement(T,{label:"Website",name:"website",placeholder:"Enter Website",value:n,onChange:e.onChange,error:c.website}),r.a.createElement("input",{type:"submit",value:"Add Event",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),z=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Events List"),r.a.createElement("p",{className:"lead"},"Simple app to know your Events"),r.a.createElement("p",{className:"lead-secondary"},"Happy day!"))},I=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Please find a correct URL"),r.a.createElement("p",null,"Sorry this page does not exist"))},L=(a(65),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,{title:"Find My Events"}),r.a.createElement("div",{className:"container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:k}),r.a.createElement(p.a,{exact:!0,path:"/event/add",component:q}),r.a.createElement(p.a,{exact:!0,path:"/about",component:z}),r.a.createElement(p.a,{component:I}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.143b6c52.chunk.js.map