(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),i=a.n(r),o=(a(17),a(1)),c=a(2),s=a(4),m=a(3),u=a(5),d=(a(8),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={completed:"false"},a.checked=function(){"false"===a.state.completed?a.setState({completed:"completed"}):a.setState({completed:"false"})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("tr",null,l.a.createElement("td",{className:this.state.completed},this.props.id+1),l.a.createElement("td",{onClick:this.checked}," ",l.a.createElement("span",{className:this.state.completed},this.props.listitems.note),"  "),l.a.createElement("td",null,l.a.createElement("span",{role:"img","aria-label":"delete",onClick:function(){return e.props.remove(e.props.listitems.note)}},"\u274c")))}}]),t}(n.Component)),h=a(9),p=a.n(h),E=a(10),f=a.n(E),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={listData:{note:""},ListItem:[]},a.updateForm=function(e){var t=e.target.value,n=a.state.listData,l=Object.assign({},n);l[e.target.name]=t,a.setState({listData:l})},a.submitForm=function(e){e.preventDefault();var t=a.state.ListItem.slice(0);if(""!==a.state.listData.note.trim())t.push(a.state.listData),a.setState({ListItem:t,listData:{note:""}});else{var n=f()(p.a);n.fire({title:l.a.createElement("p",null,"Hello World"),footer:"Copyright 2018",onOpen:function(){n.clickConfirm()}}).then(function(){return n.fire(l.a.createElement("p",null,"Type what you want to do"))})}},a.clearAll=function(e){e.preventDefault(),a.setState({ListItem:[]})},a.removeItem=function(e){var t=a.state.ListItem.filter(function(t){return t.note!==e});a.setState({ListItem:t})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this,a=this.state.ListItem.map(function(e,a){return l.a.createElement(d,{key:a,id:a,listitems:e,remove:t.removeItem})});return window.localStorage.setItem("ListItem",JSON.stringify(this.state.ListItem)),e=0===this.state.ListItem.length?l.a.createElement("div",{id:"empty"},l.a.createElement("br",null)," ",l.a.createElement("hr",null)," ",l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("h2",null,"  You have no task to do "),l.a.createElement("hr",null)," ",l.a.createElement("br",null)," ",l.a.createElement("hr",null)," ",l.a.createElement("br",null)):l.a.createElement("div",{id:"tableContents"},l.a.createElement("hr",null),l.a.createElement("div",{className:"vl"}),l.a.createElement("div",{className:"vl2"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Task"),l.a.createElement("th",null,"Remove"))),l.a.createElement("tbody",null,a)),l.a.createElement("hr",null),l.a.createElement("button",{id:"ClearBtn",onClick:this.clearAll},"clear list ")),l.a.createElement("div",{id:"mainDiv"},l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement("span",{id:"firstText"},"My to do")," ",l.a.createElement("span",{id:"twoText"},"list")),l.a.createElement("form",{onSubmit:this.submitForm},l.a.createElement("input",{type:"text",name:"note",placeholder:"what you will do next",onChange:this.updateForm,value:this.state.listData.note}),l.a.createElement("button",{id:"addbtn",type:"submit"},"Add"))),e)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.fe093843.chunk.js.map