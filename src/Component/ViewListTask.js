import React from "react"
import {Component} from "react"


export default class ViewListTask extends Component {

	render () {
		const {username, email, text, image_path, list, viewTask,
					userNameHandleChange, emailNandleChange,taskHandleChange, imageHandleChange,
					administration, EditAdministrationTask, NumberEditTask,
					AddCompleteTask, SaveEditAdministrationTask}=this.props;

		return (
			<div className="ViewListTaskClass">
			<ul className="ViewListTaskClassUl">

			{list.map(function(element, index) {
      if (index<(viewTask) &&  index>(viewTask-4))  {
			  return (
          <li key={index} className="ViewListTaskClassLi">
			    {administration ? <button onClick={EditAdministrationTask.bind(null, element)}> Редактировать </button> : <div> </div>}
			    {(NumberEditTask===element.id) ? <div>
			      <input type="text"  value={username} onChange={userNameHandleChange} placeholder={element.username}/>
			      Почта  <input type="email"  value={email} onChange={emailNandleChange}  placeholder={element.email} /> <br />
			      Задача <input type="text"  value={text} onChange={taskHandleChange}  placeholder={element.text}/> <br />
			      Загрузить иконку  <input type="file" value={image_path} id="fileLoad" onChange={imageHandleChange}/>  </div>:
			    element.username + element.email + element.text }
			    <img src={element.image_path} alt="картинка" width="100px" height="80px"/>
			    <button onClick={AddCompleteTask.bind(null, element)}> {(element.complete)? "выполнено" : "не выполнено"} </button>
			      { administration ? <button onClick={SaveEditAdministrationTask.bind(null, element)}> Сохранить </button> : <div></div>}
			          </li>)}
                else {
                }
			        })}
			</ul>
			</div>
		)
	}
}
