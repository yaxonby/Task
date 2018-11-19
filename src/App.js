
import React, { Component } from 'react';
import './App.css';

let idTask=2;

class App extends Component {

constructor(props) {
super(props)
this.state={ username: "", email:"", text:"", image_path:"" ,
list: this.taskList.list, loginUsername:"", loginPassword:"", administration: false,
NumberEditTask: null }

console.log(this.userNameHandleChange);
this.userNameHandleChange = this.userNameHandleChange.bind(this);
console.log(this.userNameHandleChange);
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

  }

 taskList=this.props.taskList

  userNameHandleChange(event) {
    this.setState({
      username: event.target.value
  })
    console.log(this.state);
  };

  emailNandleChange(event) {
    this.setState({
        email: event.target.value
    })
    console.log(this.state);
  };
  taskHandleChange(event) {
    this.setState({
        text: event.target.value
    })
    console.log(this.state);
  };
  imageHandleChange(event) {
    this.setState({
        image_path: event.target.value
    })
    console.log(this.state);
  };

AddTaskToList() {

    console.log(this.state)

      let newTask={
       id:  idTask,
       username: this.state.username,
       email: this.state.email,
       text: this.state.text,
       image_path: this.state.image_path,
       complete: false
      }
          console.log("newTask",newTask)
console.log("this.stateList=", this.state.list
//this.taskList
)
     let newTaskAddToList=[
        ...this.state.list, newTask
     ]
            this.setState({
username: "", email:"", text:"", image_path:"" ,
              list: newTaskAddToList
          })
     console.log("newTaskAddToList=", newTaskAddToList)
    };


    Entrance () {

  if (this.state.loginUsername==="admin" && this.state.loginPassword==="123") {  console.log("вошел администратор");
  this.setState({
    administration: true
})
}

};

  loginUserNameHandleChang(event) {
    this.setState({
      loginUsername: event.target.value
  })
    }
  loginPasswordHandleChange(event) {
    this.setState({
      loginPassword: event.target.value
  })
  }

AddCompleteTask (element) {
let newList=this.state.list
newList[element.id].complete=!newList[element.id].complete
  this.setState({
    list: newList
})
}

EditAdministrationTask (task) {

  this.setState({
    NumberEditTask: task.id
})
console.log(this.state.NumberEditTask)
}

    FilterUserNameList() {
//      [...state.ItemToCart.filter(function(x) {
//       return (x.id!==action.payload.id)}), action.payload]

    }

  render() {
    const self=this

    function PreviewListTask() {
    }

    return (

  <div>

  <form onSubmit={this.handleSubmit}>

          {self.state.administration ?  <div> Добро пожаловать, администратор. </div> :
          <div>
            Логин:    <input type="text"  value={this.state.loginUsername} onChange={this.loginUserNameHandleChange} placeholder="Вася"/>
            Пароль:   <input type="text"  value={this.state.loginPassword} onChange={this.loginPasswordHandleChange} placeholder="Пароль"/>
            <button onClick={this.Entrance}> Войти </button>
        </div>
          }
        </form>


  <form action="handler.php">
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
  </form>

<ul >
{}
{this.state.list.map(function(element, index) {
  return (<li key={index}>
  {self.state.administration ? <button onClick={self.EditAdministrationTask.bind(null, element)}> Редактировать </button> : <div> </div>}
{console.log("self.state.NumberEditTask",self.state.NumberEditTask, "element.id", element.id)}
    { (self.state.NumberEditTask==="element.id") ?  <input type="text"  value={this.state.username} onChange={this.userNameHandleChange} placeholder="Вася"/> : element.username}
    {element.email}
    {element.text}
    <img src={element.image_path} alt="картинка" width="100px" height="80px"/>
    <button onClick={self.AddCompleteTask.bind(null, element)}> {(element.complete)? "выполнено" : "не выполнено"} </button>

  { self.state.administration ? <button onClick={self.EditAdministrationTask.bind(null, element)}> Сохранить </button> : <div> </div>}
          </li>)
        })}
</ul>
      </div>
    );
  }
}

export default App;




/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/
