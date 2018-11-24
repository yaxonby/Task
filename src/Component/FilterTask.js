import React from "react"
import {Component} from "react"


let url="https://uxcandy.com/~shapoval/test-task-backend/?developer=Yuriy";
//значения сортировки по умолчанию
let sort_field="username"
let sort_direction="asc";
let page=1;


export default class FilterTask extends Component {

	render () {

const {list, NewStateFilter, viewTask, self, LoadTaskFromServer, total_task_count}=this.props

function FilterStatusTaskList() {

	sort_field="status";
	LoadTaskFromServer(
	url,
	sort_field,
	sort_direction,
	page
	)


//старая реализация
/*
		let listSort=list.sort(function(a, b) {
				 return a.status-b.status;
			 });
			NewStateFilter(listSort)
			*/
	};

function FilterUserNameList() {

sort_field="username";
LoadTaskFromServer(
url,
sort_field,
sort_direction,
page
)

/*
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
//url="https://uxcandy.com/~shapoval/test-task-backend/?developer=Yuriy&sort_field=id&sort_direction=asc&page=2"
	request.open("GET", url, false);
	//  "https://uxcandy.com/~shapoval/test-task-backend/?developer=Yuriy&sort_field=id&sort_direction=asc&page=1"

//	sort_field (id | username | email | status) - поле, по которому выполняется сортировка
//	sort_direction (asc | desc) - направление сортировки
//	page - номер страницы для пагинации
console.log(page)
console.log(url)
	request.onreadystatechange = req;
	request.send();
	  console.log(loadlistjson)
	for (let i=0; i<loadlistjson.length; i++) {
	  loadlistjson[i].complete=false
	  console.log(typeof(loadlistjson[i].complete))
	}
	let taskList={  list: loadlistjson};
*/

//старая реализация на клиенте
/*
				 let listSort=list.sort(function(s,t) {
				 let a = s.username.toLowerCase();
				 let b = t.username.toLowerCase();
				 if (a < b) return -1;
				 if (a > b) return 1;
				 return 0;
				 });
			NewStateFilter(listSort)
			*/
		}

function FilterEmailUserList(){

	sort_field="email";
	LoadTaskFromServer(
	url,
	sort_field,
	sort_direction,
	page
	)

		// сортировка по почте
		/*
			let listSort= list.sort(function(s,t) { // Сортировка без учета регистра символов
				 let a = s.email.toLowerCase();
				 let b = t.email.toLowerCase();
				 if (a < b) return -1;
				 if (a > b) return 1;
				 return 0;
				 });
	NewStateFilter(listSort)
	*/
	}

function NextViewTask () {
	console.log(page, total_task_count)
if (page<total_task_count) {
	page=page+1;
LoadTaskFromServer(
	url,
	sort_field,
	sort_direction,
	page)
}
};

	//старая реализация на клиенте
/*
if (viewTask) {
let viewNumberTask=viewTask+3
self.setState({
	viewTask: viewNumberTask
})
}
*/
//};

function PreviousViewTask () {
	console.log(page, total_task_count)
	if (page>0) {
	page=page-1;

	LoadTaskFromServer(
	url,
	sort_field,
	sort_direction,
	page
	)
	}

	//старая реализация на клиенте
	/*
if (viewTask) {
let viewNumberTask=viewTask-3
self.setState({
	viewTask: viewNumberTask
})
}
*/
};


function FilterAscDescTaskList () {

		if (sort_direction==="asc") {sort_direction="desc"}
		else {sort_direction="asc"}
		LoadTaskFromServer(
		url,
		sort_field,
		sort_direction,
		page
		)
};

		return (
			<div className="FilterTaskClass">
		 <button onClick={PreviousViewTask}> приведущие </button>
		 <button onClick={NextViewTask}> следующие </button>
		 <br />
			<button onClick={FilterUserNameList}> фильтр по имени пользователя </button>
			<button onClick={FilterEmailUserList}> фильтр по email пользователя </button>
			<button onClick={FilterStatusTaskList}> фильтр по статусу </button>
			<button onClick={FilterAscDescTaskList}> направление сортировки </button>
			</div>
		)
	}
}
