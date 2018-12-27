import React from "react"
import {Component} from "react"


export default class CreateNewTask extends Component {
//image_path,
//imageHandleChange,
	render () {
		const {userNameHandleChange, username, email, text,  emailNandleChange,
			taskHandleChange,  AddTaskToList, imageCheck, preView,
			PreViewTaskToList}=this.props

var img
let imageFile
window.onload = function() {
 imageFile=document.getElementById("fileLoad").files[0];

  var photo_input = document.getElementById('fileLoad');
//let self;
			photo_input.onchange = function() {
			    var reader = new FileReader();
			    reader.onload = function(e) {
			       img = document.createElement('img');
			      img.onload = function() {
				//	 self=this;
			        console.log(this.width+'x'+this.height);
						if (this.width>320 || this.height>240) {this.width=320; this.height=240}
					  };
			      img.src = e.target.result;
			    }
			    reader.readAsDataURL(this.files[0])
			  }
			}

		return (
			<div>

			<div>
					<p><b>Новая задача</b></p>
					<div>
						Имя   <input type="text"  value={username} onChange={userNameHandleChange} placeholder="Вася"/> <br />
						Почта  <input type="email"  value={email} onChange={emailNandleChange}  placeholder="email@mail.com" /> <br />
						Задача <input type="text"  value={text} onChange={taskHandleChange}  placeholder="Сходить в кино"/> <br />
						Загрузить иконку  <input type="file"  id="fileLoad" />
						{imageCheck ? <div> </div> :
							<div> Неверный формат файла. Выберите картинку. Допускаются image/jpeg. </div>}
				 </div>
			</div>

{preView ? <div>
	{username} &emsp; {email} &emsp; {text}
	<button onClick={AddTaskToList}> Отправить задачу </button>
	</div> :
		<button onClick={PreViewTaskToList}> Предварительный просмотр</button>}

			</div>
		)
	}
}
