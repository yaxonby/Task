import React, { Component } from 'react';
import Login from "./Component/Login";
import CreateNewTask from "./Component/CreateNewTask";
import ViewListTask from "./Component/ViewListTask";
import FilterTask  from "./Component/FilterTask";
import md5 from "blueimp-md5";
import './App.css';

//let taskList;
let count=0;
//let idTask=2;
let total_task_count;

class App extends Component {

constructor(props) {
super(props)

this.state={ username: "", email:"", text:"", image_path:"",
list: this.LoadTaskFromServer(),
loginUsername:"", loginPassword:"", administration: false,
NumberEditTask: null, viewTask:3,  imageCheck:true, preView:false}

this.userNameHandleChange = this.userNameHandleChange.bind(this);
this.emailNandleChange = this.emailNandleChange.bind(this);
this.taskHandleChange = this.taskHandleChange.bind(this);
this.AddTaskToList = this.AddTaskToList.bind(this);
this.NewStateFilter=this.NewStateFilter.bind(this);
this.Entrance=this.Entrance.bind(this);
this.loginUserNameHandleChange=this.loginUserNameHandleChang.bind(this);
this.loginPasswordHandleChange=this.loginPasswordHandleChange.bind(this);
this.AddCompleteTask=this.AddCompleteTask.bind(this);
this.EditAdministrationTask=this.EditAdministrationTask.bind(this);
this.SaveEditAdministrationTask=this.SaveEditAdministrationTask.bind(this);
this.LoadTaskFromServer=this.LoadTaskFromServer.bind(this);
this.PreViewTaskToList=this.PreViewTaskToList.bind(this);
};

LoadTaskFromServer (
//значения сортировки по умолчанию
url="https://uxcandy.com/~shapoval/test-task-backend/?developer=Yuriy",
sort_field="username",
sort_direction="asc",
page=1
) {

 
  const request = new XMLHttpRequest();
  var loadlistjson;

  function req() {
      if (request.readyState === 4) {
        const status = request.status;
          if (status === 200) {
           loadlistjson = JSON.parse(request.response).message.tasks
           total_task_count = JSON.parse(request.response).message.total_task_count
          } else { console.log("Ответ сервера " + request.statusText)}
      }
  }
  url="https://uxcandy.com/~shapoval/test-task-backend/?developer=Yuriy"+"&"+"sort_field="+sort_field+"&"+"sort_direction="+sort_direction+"&"+"page="+page ;
  request.open("GET", url, false);
  request.onreadystatechange = req;
  request.send();

 
  fetch(url)
  .then((response)=>{
  response.json().then((data)=> console.log('data-', data))
  })
  .catch((err)=> console.log("error...", err))



    for (let i=0; i<loadlistjson.length; i++) {
    loadlistjson[i].complete=false
    };

if (count===0) {count=count+1; return loadlistjson}
else {this.setState({list: loadlistjson  })}
  };

  userNameHandleChange(event) {
    this.setState({username: event.target.value})
  };

  emailNandleChange(event) {
    this.setState({email: event.target.value  })
  };
  taskHandleChange(event) {
    this.setState({text: event.target.value  })
  };

AddTaskToList() {
let imageFile=document.getElementById("fileLoad").files[0];
if (imageFile.type==="image/jpeg") {
console.log("imageFile.clientWidth", imageFile.clientWidth);
console.log("imageFile.clientHeight", imageFile.clientHeight)
  this.setState({  imageCheck: true, preView:false})
      let newTask={
       username: this.state.username,
       email: this.state.email,
       text: this.state.text,
       image_path: imageFile,
       complete: false
      }

this.setState({username: "", email:"", text:"", image_path:""})
var form = new FormData();
form.append("username", newTask.username);
form.append("email", newTask.email);
form.append("text", newTask.text);
form.append("image", newTask.image_path );

const request = new XMLHttpRequest();
function reqReadyStateChange() {
if (request.readyState === 4 && request.status === 200)   {
console.log(JSON.parse(request.response));
}
}
request.open("POST", "https://uxcandy.com/~shapoval/test-task-backend/create?developer=Yuriy", false);
request.onreadystatechange = reqReadyStateChange;
console.log(form)
request.send(form);
this.LoadTaskFromServer ()
}
else { this.setState({  imageCheck: false}) }
  };

Entrance () {
  if (this.state.loginUsername==="admin" && this.state.loginPassword==="123") {
  this.setState({  administration: true})
  }
};

loginUserNameHandleChang(event) {
    this.setState({  loginUsername: event.target.value  })
  };

loginPasswordHandleChange(event) {
    this.setState({  loginPassword: event.target.value  })
};


AddCompleteTask (element) {
// new при загрузке с сервера. Работает.
let newList=this.state.list
let indexStateList
newList.findIndex(function (elemarray, index, array) {
  if (element.id===elemarray.id) {indexStateList=index}
});

if (newList[indexStateList].status===0) {
  newList[indexStateList].status=10
}
else  {newList[indexStateList].status=0}

newList[indexStateList].complete=!newList[indexStateList].complete

  this.setState({    list: newList})
};

EditAdministrationTask (element) {
this.setState({    NumberEditTask: element.id});
}

SaveEditAdministrationTask (element) {
  let newTask={
   id:  element.id,
   username: this.state.username,
   email: this.state.email,
   text: this.state.text,
   image_path: this.state.image_path,
   complete: element.complete,
   status: element.status
  }

let url="https://uxcandy.com/~shapoval/test-task-backend/edit/"+newTask.id+"?developer=Yuriy";
console.log("url=", url)

let params_string=
    "status=" +
    encodeURIComponent(newTask.status)  +
    "&text=" +
    encodeURIComponent(newTask.text) +
    "&token=" +
    encodeURIComponent("beejee");
let signature=md5(params_string);


let form = new FormData();
  form.append("status", encodeURIComponent(newTask.status));
  form.append("text", encodeURIComponent(newTask.text));
  form.append("token", encodeURIComponent("beejee"));
  form.append("signature", signature);

  const request = new XMLHttpRequest();
  function reqReadyStateChange() {
  if (request.readyState === 4 && request.status === 200)   {
  console.log(JSON.parse(request.response));}
}
  request.open("POST", url, false);
  request.onreadystatechange = reqReadyStateChange;
  request.send(form);
  this.setState({username: "", email:"", text:"", image_path:"", NumberEditTask: null })
  this.LoadTaskFromServer ()

};

NewStateFilter(listSort) {
   this.setState({list: listSort})
 };

 PreViewTaskToList() {
  this.setState({preView:true})
window.onload = function() {
  let imageFile=document.getElementById("fileLoad").files[0];

        if (imageFile.type==="image/jpeg") {
  console.log("imageFile.clientWidth", imageFile.clientWidth);
  console.log("imageFile.clientHeight", imageFile.clientHeight)
    this.setState({  imageCheck: true,
                     image_path:imageFile}) }
    else {
      this.setState({  imageCheck: false})
      }
    }
 }

  render() {
    return (
  <div>
<Login
    administration={this.state.administration}
    loginUsername={this.state.loginUsername}
    loginPassword={this.state.loginPassword}
    loginUserNameHandleChange={this.loginUserNameHandleChange}
    loginPasswordHandleChange={this.loginPasswordHandleChange}
    Entrance={this.Entrance} />

<CreateNewTask
    username={this.state.username}
    email={this.state.email}
    text={this.state.text}
    image_path={this.state.image_path}
    imageCheck={this.state.imageCheck}
    preView={this.state.preView}

    AddTaskToList={this.AddTaskToList}
    userNameHandleChange={this.userNameHandleChange}
    emailNandleChange={this.emailNandleChange}
    taskHandleChange={this.taskHandleChange}
    PreViewTaskToList={this.PreViewTaskToList}
 />

<ViewListTask
  username={this.state.username}
  email={this.state.email}
  text={this.state.text}
  image_path={this.state.image_path}
  list={this.state.list}
  NumberEditTask={this.state.NumberEditTask}
  viewTask={this.state.viewTask}

  administration={this.state.administration}
  EditAdministrationTask={this.EditAdministrationTask}
  userNameHandleChange={this.userNameHandleChange}
  emailNandleChange={this.emailNandleChange}
  imageHandleChange={this.imageHandleChange}
  taskHandleChange={this.taskHandleChange}
  AddCompleteTask={this.AddCompleteTask}
  SaveEditAdministrationTask={this.SaveEditAdministrationTask}
/>

<FilterTask
list={this.state.list}
NewStateFilter={this.NewStateFilter}
viewTask={this.state.viewTask}
self={this}
LoadTaskFromServer={this.LoadTaskFromServer}
total_task_count={total_task_count}
/>
      </div>
    );
  }
}

export default App;
