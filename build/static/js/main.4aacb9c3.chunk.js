(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n,i=a(0),s=a.n(i),l=a(8),o=a.n(l),r=(a(15),a(2)),c=a(3),d=a(6),m=a(4),u=a(5),h=a(1),g=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.administration,a=e.loginUsername,n=e.loginPassword,i=e.loginUserNameHandleChange,l=e.loginPasswordHandleChange,o=e.Entrance;return s.a.createElement("div",null,t?s.a.createElement("div",null," \u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440. "):s.a.createElement("div",{className:"loginClass"},"\u041b\u043e\u0433\u0438\u043d:    ",s.a.createElement("input",{type:"text",value:a,onChange:i,placeholder:"\u0412\u0430\u0441\u044f"}),"\u041f\u0430\u0440\u043e\u043b\u044c:   ",s.a.createElement("input",{type:"text",value:n,onChange:l,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),s.a.createElement("button",{onClick:o}," \u0412\u043e\u0439\u0442\u0438 ")))}}]),t}(i.Component),p=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.userNameHandleChange,n=t.username,i=t.email,l=t.text,o=t.emailNandleChange,r=t.taskHandleChange,c=(t.imageHandleChange,t.AddTaskToList),d=t.imageCheck,m=t.preView,u=t.PreViewTaskToList;return window.onload=function(){document.getElementById("fileLoad").files[0],document.getElementById("fileLoad").onchange=function(){var t=new FileReader;t.onload=function(t){(e=document.createElement("img")).onload=function(){this,console.log(this.width+"x"+this.height),(this.width>320||this.height>240)&&(this.width=320,this.height=240)},e.src=t.target.result},t.readAsDataURL(this.files[0])}},s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",null,s.a.createElement("b",null,"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430")),s.a.createElement("div",null,"\u0418\u043c\u044f   ",s.a.createElement("input",{type:"text",value:n,onChange:a,placeholder:"\u0412\u0430\u0441\u044f"})," ",s.a.createElement("br",null),"\u041f\u043e\u0447\u0442\u0430  ",s.a.createElement("input",{type:"email",value:i,onChange:o,placeholder:"email@mail.com"})," ",s.a.createElement("br",null),"\u0417\u0430\u0434\u0430\u0447\u0430 ",s.a.createElement("input",{type:"text",value:l,onChange:r,placeholder:"\u0421\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u043a\u0438\u043d\u043e"})," ",s.a.createElement("br",null),"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u043a\u043e\u043d\u043a\u0443  ",s.a.createElement("input",{type:"file",id:"fileLoad"}),d?s.a.createElement("div",null," "):s.a.createElement("div",null," \u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0444\u0430\u0439\u043b\u0430. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443. \u0414\u043e\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f image/jpeg. "))),m?s.a.createElement("div",null,n," \u2003 ",i," \u2003 ",l,s.a.createElement("button",{onClick:c}," \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443 ")):s.a.createElement("button",{onClick:u}," \u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"))}}]),t}(i.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.list,n=e.viewTask,i=(e.userNameHandleChange,e.emailNandleChange,e.taskHandleChange),l=(e.imageHandleChange,e.administration),o=e.EditAdministrationTask,r=e.NumberEditTask,c=e.AddCompleteTask,d=e.SaveEditAdministrationTask;return s.a.createElement("div",{className:"ViewListTaskClass"},s.a.createElement("ul",{className:"ViewListTaskClassUl"},a.map(function(e,a){if(a<n&&a>n-4)return s.a.createElement("li",{key:a,className:"ViewListTaskClassLi"},l?s.a.createElement("button",{onClick:o.bind(null,e)}," \u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c "):s.a.createElement("div",null," "),r===e.id?s.a.createElement("div",null,e.username," \u2002 ",e.email," \u2002 \u0417\u0430\u0434\u0430\u0447\u0430 ",s.a.createElement("input",{type:"text",value:t,onChange:i,placeholder:e.text})," ",s.a.createElement("br",null)):s.a.createElement("div",{style:{display:"inline"}},e.username," \u2002 ",e.email," \u2002 ",e.text," "),s.a.createElement("img",{src:e.image_path,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",width:"100px",height:"80px"}),s.a.createElement("button",{onClick:c.bind(null,e)}," ",0===e.status?"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e":"\u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"," "),l?s.a.createElement("button",{onClick:d.bind(null,e)}," \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c "):s.a.createElement("div",null))})))}}]),t}(i.Component),v="https://uxcandy.com/~shapoval/test-task-backend/?developer=Yuriy",b="username",C="asc",E=1,T=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.LoadTaskFromServer,a=e.total_task_count;return s.a.createElement("div",{className:"FilterTaskClass"},s.a.createElement("button",{onClick:function(){E>1&&t(v,b,C,E-=1)}}," \u043f\u0440\u0438\u0432\u0435\u0434\u0443\u0449\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"),"\u2003 \u2003  \u2003 \u2003  \u2003 \u2003 \u2003 \u2003 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ",E," \u0438\u0437 ",a,"\u2003 \u2003 \u2003 \u2003 \u2003 \u2003 \u2003 \u2003 \u2003",s.a.createElement("button",{onClick:function(){E<a&&t(v,b,C,E+=1)},style:{display:"inline"}}," \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(){t(v,b="username",C,E)}}," \u0444\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438  "),s.a.createElement("button",{onClick:function(){t(v,b="email",C,E)}}," \u0444\u0438\u043b\u044c\u0442\u0440 \u043f\u043e email  "),s.a.createElement("button",{onClick:function(){t(v,b="status",C,E)}}," \u0444\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0443 "),"\u2003 \u2003",s.a.createElement("button",{onClick:function(){t(v,b,C="asc"===C?"desc":"asc",E)}}," \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 (\u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e/\u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e)"))}}]),t}(i.Component),f=a(9),w=a.n(f),O=(a(17),0),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={username:"",email:"",text:"",image_path:"",list:a.LoadTaskFromServer(),loginUsername:"",loginPassword:"",administration:!1,NumberEditTask:null,viewTask:3,imageCheck:!0,preView:!1},a.userNameHandleChange=a.userNameHandleChange.bind(Object(h.a)(Object(h.a)(a))),a.emailNandleChange=a.emailNandleChange.bind(Object(h.a)(Object(h.a)(a))),a.taskHandleChange=a.taskHandleChange.bind(Object(h.a)(Object(h.a)(a))),a.AddTaskToList=a.AddTaskToList.bind(Object(h.a)(Object(h.a)(a))),a.NewStateFilter=a.NewStateFilter.bind(Object(h.a)(Object(h.a)(a))),a.Entrance=a.Entrance.bind(Object(h.a)(Object(h.a)(a))),a.loginUserNameHandleChange=a.loginUserNameHandleChang.bind(Object(h.a)(Object(h.a)(a))),a.loginPasswordHandleChange=a.loginPasswordHandleChange.bind(Object(h.a)(Object(h.a)(a))),a.AddCompleteTask=a.AddCompleteTask.bind(Object(h.a)(Object(h.a)(a))),a.EditAdministrationTask=a.EditAdministrationTask.bind(Object(h.a)(Object(h.a)(a))),a.SaveEditAdministrationTask=a.SaveEditAdministrationTask.bind(Object(h.a)(Object(h.a)(a))),a.LoadTaskFromServer=a.LoadTaskFromServer.bind(Object(h.a)(Object(h.a)(a))),a.PreViewTaskToList=a.PreViewTaskToList.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"LoadTaskFromServer",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"username",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,l=new XMLHttpRequest;t="https://uxcandy.com/~shapoval/test-task-backend/?developer=Yuriy&sort_field="+a+"&sort_direction="+i+"&page="+s,l.open("GET",t,!1),l.onreadystatechange=function(){4===l.readyState&&(200===l.status?(e=JSON.parse(l.response).message.tasks,n=JSON.parse(l.response).message.total_task_count):console.log("\u041e\u0442\u0432\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 "+l.statusText))},l.send();for(var o=0;o<e.length;o++)e[o].complete=!1;if(0===O)return O+=1,e;this.setState({list:e})}},{key:"userNameHandleChange",value:function(e){this.setState({username:e.target.value})}},{key:"emailNandleChange",value:function(e){this.setState({email:e.target.value})}},{key:"taskHandleChange",value:function(e){this.setState({text:e.target.value})}},{key:"AddTaskToList",value:function(){var e=document.getElementById("fileLoad").files[0];if("image/jpeg"===e.type){console.log("imageFile.clientWidth",e.clientWidth),console.log("imageFile.clientHeight",e.clientHeight),this.setState({imageCheck:!0,preView:!1});var t={username:this.state.username,email:this.state.email,text:this.state.text,image_path:e,complete:!1};this.setState({username:"",email:"",text:"",image_path:""});var a=new FormData;a.append("username",t.username),a.append("email",t.email),a.append("text",t.text),a.append("image",t.image_path);var n=new XMLHttpRequest;n.open("POST","https://uxcandy.com/~shapoval/test-task-backend/create?developer=Yuriy",!1),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&console.log(JSON.parse(n.response))},console.log(a),n.send(a),this.LoadTaskFromServer()}else this.setState({imageCheck:!1})}},{key:"Entrance",value:function(){"admin"===this.state.loginUsername&&"123"===this.state.loginPassword&&this.setState({administration:!0})}},{key:"loginUserNameHandleChang",value:function(e){this.setState({loginUsername:e.target.value})}},{key:"loginPasswordHandleChange",value:function(e){this.setState({loginPassword:e.target.value})}},{key:"AddCompleteTask",value:function(e){var t,a=this.state.list;a.findIndex(function(a,n,i){e.id===a.id&&(t=n)}),0===a[t].status?a[t].status=10:a[t].status=0,a[t].complete=!a[t].complete,this.setState({list:a})}},{key:"EditAdministrationTask",value:function(e){this.setState({NumberEditTask:e.id})}},{key:"SaveEditAdministrationTask",value:function(e){var t={id:e.id,username:this.state.username,email:this.state.email,text:this.state.text,image_path:this.state.image_path,complete:e.complete,status:e.status},a="https://uxcandy.com/~shapoval/test-task-backend/edit/"+t.id+"?developer=Yuriy";console.log("url=",a);var n="status="+encodeURIComponent(t.status)+"&text="+encodeURIComponent(t.text)+"&token="+encodeURIComponent("beejee"),i=w()(n),s=new FormData;s.append("status",encodeURIComponent(t.status)),s.append("text",encodeURIComponent(t.text)),s.append("token",encodeURIComponent("beejee")),s.append("signature",i);var l=new XMLHttpRequest;l.open("POST",a,!1),l.onreadystatechange=function(){4===l.readyState&&200===l.status&&console.log(JSON.parse(l.response))},l.send(s),this.setState({username:"",email:"",text:"",image_path:"",NumberEditTask:null}),this.LoadTaskFromServer()}},{key:"NewStateFilter",value:function(e){this.setState({list:e})}},{key:"PreViewTaskToList",value:function(){this.setState({preView:!0}),window.onload=function(){var e=document.getElementById("fileLoad").files[0];"image/jpeg"===e.type?(console.log("imageFile.clientWidth",e.clientWidth),console.log("imageFile.clientHeight",e.clientHeight),this.setState({imageCheck:!0,image_path:e})):this.setState({imageCheck:!1})}}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(g,{administration:this.state.administration,loginUsername:this.state.loginUsername,loginPassword:this.state.loginPassword,loginUserNameHandleChange:this.loginUserNameHandleChange,loginPasswordHandleChange:this.loginPasswordHandleChange,Entrance:this.Entrance}),s.a.createElement(p,{username:this.state.username,email:this.state.email,text:this.state.text,image_path:this.state.image_path,imageCheck:this.state.imageCheck,preView:this.state.preView,AddTaskToList:this.AddTaskToList,userNameHandleChange:this.userNameHandleChange,emailNandleChange:this.emailNandleChange,taskHandleChange:this.taskHandleChange,PreViewTaskToList:this.PreViewTaskToList}),s.a.createElement(k,{username:this.state.username,email:this.state.email,text:this.state.text,image_path:this.state.image_path,list:this.state.list,NumberEditTask:this.state.NumberEditTask,viewTask:this.state.viewTask,administration:this.state.administration,EditAdministrationTask:this.EditAdministrationTask,userNameHandleChange:this.userNameHandleChange,emailNandleChange:this.emailNandleChange,imageHandleChange:this.imageHandleChange,taskHandleChange:this.taskHandleChange,AddCompleteTask:this.AddCompleteTask,SaveEditAdministrationTask:this.SaveEditAdministrationTask}),s.a.createElement(T,{list:this.state.list,NewStateFilter:this.NewStateFilter,viewTask:this.state.viewTask,self:this,LoadTaskFromServer:this.LoadTaskFromServer,total_task_count:n}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.4aacb9c3.chunk.js.map