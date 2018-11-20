import React from "react"
import {Component} from "react"


export default class CreateNewTask extends Component {

	render () {
		const {username, email, text, image_path,
			userNameHandleChange, emailNandleChange,
			taskHandleChange, imageHandleChange, AddTaskToList}=this.props
		return (
			<div>

			<label>
					<p><b>Новая задача</b></p>
					<div>
						Имя:   <input type="text"  value={username} onChange={userNameHandleChange} placeholder="Вася"/> <br />
						Почта:  <input type="email"  value={email} onChange={emailNandleChange}  placeholder="email@mail.com" /> <br />
						Задача: <input type="text"  value={text} onChange={taskHandleChange}  placeholder="Сходить в кино"/> <br />
						Загрузить иконку:  <input type="file" value={image_path} onChange={imageHandleChange}/>
				 </div>
			</label>
			<button onClick={AddTaskToList}> Предварительный просмотр</button>
			<button onClick={AddTaskToList}> Отправить задачу </button> <br /> <br />




			</div>
		)
	}
}
