import React from "react"
import {Component} from "react"


export default class ViewListTask extends Component {
 constructor (props) {
 super(props)
	}
	render () {
		const {username, email, text, image_path, list,
					userNameHandleChange, emailNandleChange,taskHandleChange, imageHandleChange,
					administration, EditAdministrationTask, NumberEditTask,
					AddCompleteTask, SaveEditAdministrationTask}=this.props;

		return (
			<div>

			<ul>

			{list.map(function(element, index) {

			if (list.length>3) {

			}
			else {
			  return (<li key={index}>

			    {administration ? <button onClick={EditAdministrationTask.bind(null, element)}> Редактировать </button> : <div> </div>}
			    {console.log("self.state.NumberEditTask", NumberEditTask, "element.id", element.id)}
			    {(NumberEditTask==element.id) ? <div>
			      <input type="text"  value={username} onChange={userNameHandleChange} placeholder={element.username}/>
			      Почта  <input type="email"  value={email} onChange={emailNandleChange}  placeholder={element.email} /> <br />
			      Задача <input type="text"  value={text} onChange={taskHandleChange}  placeholder={element.text}/> <br />
			      Загрузить иконку  <input type="text" value={image_path} onChange={imageHandleChange}/>  </div>:
			    element.username + element.email + element.text }
			    <img src={element.image_path} alt="картинка" width="100px" height="80px"/>
			    <button onClick={AddCompleteTask.bind(null, element)}> {(element.complete)? "выполнено" : "не выполнено"} </button>
			      { administration ? <button onClick={SaveEditAdministrationTask.bind(null, element)}> Сохранить </button> : <div></div>}
			          </li>)
			        }
			        })}
			</ul>


			</div>
		)
	}
}
