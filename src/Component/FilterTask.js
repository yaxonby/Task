import React from "react";
import {Component} from "react";

let url="https://uxcandy.com/~shapoval/test-task-backend/?developer=Yuriy";
//значения сортировки по умолчанию
let sort_field="username";
let sort_direction="asc";
let page=1;

export default class FilterTask extends Component {

	render () {

const {  LoadTaskFromServer, total_task_count}=this.props;

function FilterStatusTaskList() {

	sort_field="status";
	LoadTaskFromServer(
	url,
	sort_field,
	sort_direction,
	page
);

	};

function FilterUserNameList() {

sort_field="username";
LoadTaskFromServer(
url,
sort_field,
sort_direction,
page
);

		};

function FilterEmailUserList(){

	sort_field="email";
	LoadTaskFromServer(
	url,
	sort_field,
	sort_direction,
	page
);
};

function NextViewTask () {
if (page<total_task_count) {
	page=page+1;
LoadTaskFromServer(
	url,
	sort_field,
	sort_direction,
	page);
};
};


function PreviousViewTask () {
	if (page>1) {
	page=page-1;

	LoadTaskFromServer(
	url,
	sort_field,
	sort_direction,
	page
);
};
};


function FilterAscDescTaskList () {

		if (sort_direction==="asc") {sort_direction="desc"}
		else {sort_direction="asc"};
		LoadTaskFromServer(
		url,
		sort_field,
		sort_direction,
		page
	);
};

		return (
			<div className="FilterTaskClass">
		 <button onClick={PreviousViewTask}> приведущие задачи</button>
		  &#8195; &#8195;  &#8195; &#8195;  &#8195; &#8195; &#8195;
			&#8195; страница {page} из {total_task_count}
      &#8195; &#8195; &#8195; &#8195; &#8195; &#8195; &#8195; &#8195; &#8195;
		 <button onClick={NextViewTask} style={{display:"inline"}}> следующие задачи</button>
		 <br />
			<button onClick={FilterUserNameList}> фильтр по имени  </button>
			<button onClick={FilterEmailUserList}> фильтр по email  </button>
			<button onClick={FilterStatusTaskList}> фильтр по статусу </button>&#8195; &#8195;
			<button onClick={FilterAscDescTaskList}> направление сортировки (по убыванию/возрастанию)</button>
			</div>
		)
	}
}
