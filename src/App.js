import React, { Component } from 'react';
import Login from "./Component/Login"
import CreateNewTask from "./Component/CreateNewTask"
import ViewListTask from "./Component/ViewListTask"
import FilterTask  from "./Component/FilterTask"

import './App.css';


let idTask=2;


class App extends Component {

constructor(props) {
super(props)
console.log(this.state)

this.state={ username: "", email:"", text:"", image_path:"",
list: this.props.taskList.list, loginUsername:"", loginPassword:"", administration: false,
NumberEditTask: null, viewTask:3}

this.userNameHandleChange = this.userNameHandleChange.bind(this);
this.emailNandleChange = this.emailNandleChange.bind(this);
this.taskHandleChange = this.taskHandleChange.bind(this);
this.imageHandleChange = this.imageHandleChange.bind(this);
this.AddTaskToList = this.AddTaskToList.bind(this);
this.NewStateFilter=this.NewStateFilter.bind(this);
this.Entrance=this.Entrance.bind(this);
this.loginUserNameHandleChange=this.loginUserNameHandleChang.bind(this);
this.loginPasswordHandleChange=this.loginPasswordHandleChange.bind(this);
this.AddCompleteTask=this.AddCompleteTask.bind(this);
this.EditAdministrationTask=this.EditAdministrationTask.bind(this);
this.SaveEditAdministrationTask=this.SaveEditAdministrationTask.bind(this);
//this.PreviousViewTask=this.PreviousViewTask.bind(this);
//this.NextViewTask=this.NextViewTask.bind(this);
  }

  userNameHandleChange(event) {
    this.setState({    username: event.target.value})
  };

  emailNandleChange(event) {
    this.setState({      email: event.target.value  })
  };
  taskHandleChange(event) {
    this.setState({      text: event.target.value  })
  };
  imageHandleChange(event) {
    this.setState({        image_path: event.target.value    })
  };

AddTaskToList() {

      let newTask={
       id:  idTask,
       username: this.state.username,
       email: this.state.email,
       text: this.state.text,
       image_path: this.state.image_path,
       complete: false
      }
let newTaskAddToList=[ ...this.state.list, newTask     ]
this.setState({username: "", email:"", text:"", image_path:"",  list: newTaskAddToList  })
    };

    Entrance () {
  if (this.state.loginUsername==="" && this.state.loginPassword==="") {
  this.setState({  administration: true})
  }
};

  loginUserNameHandleChang(event) {
    console.log(event);
    this.setState({  loginUsername: event.target.value  })
  };

  loginPasswordHandleChange(event) {
    this.setState({  loginPassword: event.target.value  })
};

AddCompleteTask (element) {
let newList=this.state.list
newList[element.id].complete=!newList[element.id].complete
  this.setState({    list: newList})
};

EditAdministrationTask (element) {

this.setState({    NumberEditTask: element.id});
console.log("this.state.NumberEditTask", this.state.NumberEditTask)
console.log("id", element.id)
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
console.log("newTaskAddToList=", newTaskAddToList)
newTaskAddToList[element.id]=newTask

this.setState({username: "", email:"", text:"", image_path:"", NumberEditTask: null,
list: newTaskAddToList  })

 console.log("newTaskAddToList=", newTaskAddToList)
 console.log("state=", this.state)

};



NewStateFilter(listSort) {
console.log("пришло")
   this.setState({list: listSort})
 };

  render() {

    const self=this;
    function PreviewListTask() {    }

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
    imageHandleChange={this.imageHandleChange} />


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

/>

      </div>
    );
  }
}

export default App;

/*





*/
