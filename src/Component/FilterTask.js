import React from "react"
import {Component} from "react"


export default class FilterTask extends Component {

	render () {
const {list, NewStateFilter, viewTask, self}=this.props

function FilterStatusTaskList() {
		let listSort=list.sort(function(a, b) {
				 return a.status-b.status;
			 });
			NewStateFilter(listSort)
	};

function FilterUserNameList() {
				 let listSort=list.sort(function(s,t) {
				 let a = s.username.toLowerCase();
				 let b = t.username.toLowerCase();
				 if (a < b) return -1;
				 if (a > b) return 1;
				 return 0;
				 });
			NewStateFilter(listSort)
		}

function FilterEmailUserList(){
		// сортировка по почте
			let listSort= list.sort(function(s,t) { // Сортировка без учета регистра символов
				 let a = s.email.toLowerCase();
				 let b = t.email.toLowerCase();
				 if (a < b) return -1;
				 if (a > b) return 1;
				 return 0;
				 });
	NewStateFilter(listSort)
	}

function NextViewTask () {
if (viewTask) {
let viewNumberTask=viewTask+3
self.setState({
	viewTask: viewNumberTask
})
}
};

function PreviousViewTask () {
if (viewTask) {
let viewNumberTask=viewTask-3
self.setState({
	viewTask: viewNumberTask
})
}
};

		return (
			<div className="FilterTaskClass">
			<button onClick={FilterUserNameList}> фильтр по имени пользователя </button>
			<button onClick={FilterEmailUserList}> фильтр по email пользователя </button>
			<button onClick={FilterStatusTaskList}> фильтр по статусу </button>
<br /><br />
       <p> Задачи</p>
			<button onClick={PreviousViewTask}> приведущие </button>
			<button onClick={NextViewTask}> следующие </button>
			</div>
		)
	}
}
