import React from "react"
import {Component} from "react"


export default class ViewListTask extends Component {
//username, email, image_path,
	render () {
		const { text,  list, viewTask,
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
			      {element.username} &ensp; {element.email} &ensp;
			      Задача <input type="text"  value={text} onChange={taskHandleChange}  placeholder={element.text}/> <br />
			      </div>: <div style={{display:"inline"}}>
			     {element.username} &ensp; {element.email} &ensp; {element.text} </div>}

			    <img src={element.image_path} alt="картинка" width="100px" height="80px"/>
			    <button onClick={AddCompleteTask.bind(null, element)}> {(element.status===0)? "выполнено" : "не выполнено"} </button>
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
