

import React, { Component } from 'react';
import './App.css';

let idTask=2;

class App extends Component {

constructor(props) {
super(props)
console.log(this.state)

this.state={ username: "", email:"", text:"", image_path:"",
list: this.props.taskList.list, loginUsername:"", loginPassword:"", administration: false,
NumberEditTask: null }

this.userNameHandleChange = this.userNameHandleChange.bind(this);
this.emailNandleChange = this.emailNandleChange.bind(this);
this.taskHandleChange = this.taskHandleChange.bind(this);
this.imageHandleChange = this.imageHandleChange.bind(this);
this.AddTaskToList = this.AddTaskToList.bind(this);
this.FilterUserNameList=this.FilterUserNameList.bind(this);
this.Entrance=this.Entrance.bind(this);
this.loginUserNameHandleChange=this.loginUserNameHandleChang.bind(this);
this.loginPasswordHandleChange=this.loginPasswordHandleChange.bind(this);
this.AddCompleteTask=this.AddCompleteTask.bind(this);
this.EditAdministrationTask=this.EditAdministrationTask.bind(this);
this.SaveEditAdministrationTask=this.SaveEditAdministrationTask.bind(this);

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
//let editTask=this.state.list[element.id]

let newTaskAddToList=[ ...this.state.list]
console.log("newTaskAddToList=", newTaskAddToList)
newTaskAddToList[element.id]=newTask

this.setState({username: "", email:"", text:"", image_path:"", NumberEditTask: null,
list: newTaskAddToList  })

 console.log("newTaskAddToList=", newTaskAddToList)
 console.log("state=", this.state)

}

    FilterUserNameList() {
//      [...state.ItemToCart.filter(function(x) {
//       return (x.id!==action.payload.id)}), action.payload]

    }

  render() {
    const self=this
    function PreviewListTask() {    }

    return (

  <div>

        <div>

          {self.state.administration ?  <div> Добро пожаловать, администратор. </div> :
          <div>
            Логин:    <input type="text"  value={this.state.loginUsername} onChange={this.loginUserNameHandleChange} placeholder="Вася"/>
            Пароль:   <input type="text"  value={this.state.loginPassword} onChange={this.loginPasswordHandleChange} placeholder="Пароль"/>
            <button onClick={this.Entrance}> Войти </button>
         </div>
          }
        </div>


        <label>
            <p><b>Новая задача</b></p>
            <div>
              Имя:   <input type="text"  value={this.state.username} onChange={this.userNameHandleChange} placeholder="Вася"/> <br />
              Почта:  <input type="email"  value={this.state.email} onChange={this.emailNandleChange}  placeholder="email@mail.com" /> <br />
              Задача: <input type="text"  value={this.state.text} onChange={this.taskHandleChange}  placeholder="Сходить в кино"/> <br />
              Загрузить иконку:  <input type="text" value={this.state.image_path} onChange={this.imageHandleChange}/>
           </div>
        </label>
    <button onClick={PreviewListTask}> Предварительный просмотр</button>
    <button onClick={this.AddTaskToList}> Отправить задачу </button> <br /> <br />
    <button onClick={this.FilterUserNameList}> по имени пользователя </button>
    <button onClick={this.FilterEmailUserList}> по email пользователя </button>
    <button onClick={this.FilterStatusTaskList}> по статусу </button>


<ul>

{this.state.list.map(function(element, index) {
  return (<li key={index}>

    {self.state.administration ? <button onClick={self.EditAdministrationTask.bind(null, element)}> Редактировать </button> : <div>hi </div>}
    {console.log("self.state.NumberEditTask",self.state.NumberEditTask, "element.id", element.id)}
    {(self.state.NumberEditTask==element.id) ? <div>
      <input type="text"  value={self.state.username} onChange={self.userNameHandleChange} placeholder={element.username}/>
      Почта  <input type="email"  value={self.state.email} onChange={self.emailNandleChange}  placeholder={element.email} /> <br />
      Задача <input type="text"  value={self.state.text} onChange={self.taskHandleChange}  placeholder={element.text}/> <br />
      Загрузить иконку  <input type="text" value={self.state.image_path} onChange={self.imageHandleChange}/>  </div>:
    element.username + element.email + element.text }
    <img src={element.image_path} alt="картинка" width="100px" height="80px"/>

    <button onClick={self.AddCompleteTask.bind(null, element)}> {(element.complete)? "выполнено" : "не выполнено"} </button>

      { self.state.administration ? <button onClick={self.SaveEditAdministrationTask.bind(null, element)}> Сохранить </button> : <div> hi</div>}
          </li>)
        })}
</ul>
      </div>
    );
  }
}

export default App;

/*





*/
