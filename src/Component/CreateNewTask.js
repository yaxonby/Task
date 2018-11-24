import React from "react"
import {Component} from "react"


export default class CreateNewTask extends Component {

	render () {
		const {username, email, text, image_path,
			userNameHandleChange, emailNandleChange,
			taskHandleChange, imageHandleChange, AddTaskToList, imageCheck}=this.props


window.onload = function() {

  var photo_input = document.getElementById('fileLoad');
let self;
			photo_input.onchange = function() {
			    var reader = new FileReader();
			    reader.onload = function(e) {
			      var img = document.createElement('img');
			      img.onload = function() {
							console.log(this); self=this;
			        console.log(this.width+'x'+this.height); // наконец-то результат
						if (this.width>320 || this.height>240) {this.width=320; this.height=240}
console.log(this)

					  };
				//		console.log(self)
				//		console.log(self.width+'x'+self.height)
			      img.src = e.target.result;
			    }
			    reader.readAsDataURL(this.files[0])
			  }
			}


		return (
			<div>

			<label>
					<p><b>Новая задача</b></p>
					<div>
						Имя:   <input type="text"  value={username} onChange={userNameHandleChange} placeholder="Вася"/> <br />
						Почта:  <input type="email"  value={email} onChange={emailNandleChange}  placeholder="email@mail.com" /> <br />
						Задача: <input type="text"  value={text} onChange={taskHandleChange}  placeholder="Сходить в кино"/> <br />
						Загрузить иконку:  <input type="file"  id="fileLoad" />
						{imageCheck ? <div> </div> :
							<div> Неверный формат файла. Выберите картинку. Допускаются image/jpeg. </div>}
				 </div>
			</label>
			<button onClick={AddTaskToList}> Предварительный просмотр</button>
			<button onClick={AddTaskToList}> Отправить задачу </button> <br /> <br />

			</div>
		)
	}
}

// onClick={imageHandleChange} value={image_path}
