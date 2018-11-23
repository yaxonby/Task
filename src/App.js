import React, { Component } from 'react';
import Login from "./Component/Login";
import CreateNewTask from "./Component/CreateNewTask";
import ViewListTask from "./Component/ViewListTask";
import FilterTask  from "./Component/FilterTask";
//import axios from "axios";
import './App.css';

let taskList;
let count=0;
let idTask=2;
let total_task_count;

class App extends Component {

constructor(props) {
super(props)

this.state={ username: "", email:"", text:"", image_path:"",
list: this.LoadTaskFromServer(),
//list: this.props.taskList.list,
loginUsername:"", loginPassword:"", administration: false,
NumberEditTask: null, viewTask:3}

this.userNameHandleChange = this.userNameHandleChange.bind(this);
this.emailNandleChange = this.emailNandleChange.bind(this);
this.taskHandleChange = this.taskHandleChange.bind(this);
//this.imageHandleChange = this.imageHandleChange.bind(this);
this.AddTaskToList = this.AddTaskToList.bind(this);
this.NewStateFilter=this.NewStateFilter.bind(this);
this.Entrance=this.Entrance.bind(this);
this.loginUserNameHandleChange=this.loginUserNameHandleChang.bind(this);
this.loginPasswordHandleChange=this.loginPasswordHandleChange.bind(this);
this.AddCompleteTask=this.AddCompleteTask.bind(this);
this.EditAdministrationTask=this.EditAdministrationTask.bind(this);
this.SaveEditAdministrationTask=this.SaveEditAdministrationTask.bind(this);
this.LoadTaskFromServer=this.LoadTaskFromServer.bind(this);
//this.PreviousViewTask=this.PreviousViewTask.bind(this);
//this.NextViewTask=this.NextViewTask.bind(this);
  }

LoadTaskFromServer (
//значения сортировки по умолчанию
url="https://uxcandy.com/~shapoval/test-task-backend/?developer=Yuriy",
sort_field="username",
sort_direction="asc",
page=1
) {
console.log(url, sort_field, sort_direction, page);
  const request = new XMLHttpRequest();
  var loadlistjson;

  function req() {
      if (request.readyState == 4) {
        const status = request.status;
          if (status == 200) {
          console.log(request.response);
           loadlistjson = JSON.parse(request.response).message.tasks
           total_task_count = JSON.parse(request.response).message.total_task_count
            console.log(loadlistjson)
          console.log(total_task_count)  
          } else { console.log("Ответ сервера " + request.statusText)}
      }
  }
  url="https://uxcandy.com/~shapoval/test-task-backend/?developer=Yuriy"+"&"+"sort_field="+
  sort_field+"&"+"sort_direction="+sort_direction+"&"+"page="+page ;
  request.open("GET", url, false);
  request.onreadystatechange = req;
  request.send();

    console.log(loadlistjson)
  for (let i=0; i<loadlistjson.length; i++) {
    loadlistjson[i].complete=false
    console.log(typeof(loadlistjson[i].complete))
  }

if (count===0) {count=count+1; return loadlistjson}
else {this.setState({list: loadlistjson  })}

  };

  userNameHandleChange(event) {
    this.setState({    username: event.target.value})
  };

  emailNandleChange(event) {
    this.setState({      email: event.target.value  })
  };
  taskHandleChange(event) {
    this.setState({      text: event.target.value  })
  };
//  imageHandleChange(event) {
//    this.setState({        image_path: document.getElementById("fileLoad").files[0]    })
//  };

AddTaskToList() {

      let newTask={
//       id:  idTask,
       username: this.state.username,
       email: this.state.email,
       text: this.state.text,
       image_path: document.getElementById("fileLoad").files[0],
       complete: false
      }

      console.log(newTask)
//let newTaskAddToList=[ ...this.state.list, newTask     ]

this.setState({username: "", email:"", text:"", image_path:""})


var form = new FormData();
form.append("username", newTask.username);
form.append("email", newTask.email);
form.append("text", newTask.text);
form.append("image", newTask.image_path );

const request = new XMLHttpRequest();
function reqReadyStateChange() {
if (request.readyState == 4 && request.status == 200)   {
console.log(JSON.parse(request.response));}
}
request.open("POST", "https://uxcandy.com/~shapoval/test-task-backend/create?developer=Yuriy", false);
//    request.setRequestHeader('Content-Type', 'multipart/form-data');
//    request.setRequestHeader("Content-Type", "text/plain");
request.onreadystatechange = reqReadyStateChange;
console.log(form)
request.send(form);

this.LoadTaskFromServer ()
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
  if (element.id==elemarray.id) {indexStateList=index}
});
console.log(indexStateList)
console.log(element.id)
console.log(this.state.list)
console.log(this.state.list[indexStateList])
newList[indexStateList].complete=!newList[indexStateList].complete


//при загрузке с index.js
/*
let newList=this.state.list

newList[element.id].complete=!newList[element.id].complete
*/
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
   complete: element.complete
  }

let newTaskAddToList=[ ...this.state.list]
newTaskAddToList[element.id]=newTask
this.setState({username: "", email:"", text:"", image_path:"", NumberEditTask: null,
list: newTaskAddToList  })
};

NewStateFilter(listSort) {
   this.setState({list: listSort})
 };

  render() {
//console.log(count)
  //  if (count=0) {this.LoadTaskFromServer(); count=count+1;
//    console.log(count)}

//    const self=this;
//    function PreviewListTask() {    }

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

    AddTaskToList={this.AddTaskToList}
    userNameHandleChange={this.userNameHandleChange}
    emailNandleChange={this.emailNandleChange}
    taskHandleChange={this.taskHandleChange}
//    imageHandleChange={this.imageHandleChange}
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
