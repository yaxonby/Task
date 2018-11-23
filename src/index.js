import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from "jquery";
//import axios from "axios";


//получение списка задач с сервера. Работает!


/*
//Добавление задачи на сервер через axios. В разработке.
function AddTaskToServer () {

  axios.post('https://uxcandy.com/~shapoval/test-task-backend/create?developer=yuriy', {
      username: "Test User",
      email: "test_user_1@example.com",
      text: "Hello, world!",
      image_path: "https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836540_1.jpg"
  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
      console.log(error);
  });
*/

  // добавление задач на сервер через XMLHttpRequest. В разработке.



/*
        var form = new FormData();
        form.append("username", "Example");
        form.append("email", "example@example.com");
        form.append("text", "Some text");
       form.append("image", document.getElementById("fileLoad").files[0]);

        const request = new XMLHttpRequest();
        function reqReadyStateChange() {
        if (request.readyState == 4 && request.status == 200)   {
        console.log(JSON.parse(request.response));}
        }
        request.open("POST", "https://uxcandy.com/~shapoval/test-task-backend/create?developer=Example", false);
    //    request.setRequestHeader('Content-Type', 'multipart/form-data');
    //    request.setRequestHeader("Content-Type", "text/plain");
        request.onreadystatechange = reqReadyStateChange;
        console.log(form)
        request.send(form);

*/


/*

let taskList={  list: [
            {"id": 0,
            "username": "Test User",
            "email": "test_user_1@example.com",
            "text": "Hello, world!",
            "status": 10,
            "image_path": "https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836540_1.jpg",
            "complete":false},
           {
          "id": 1,
          "username": "ATest User 2",
          "email": "test_user_2@example.com",
          "text": "Hello from user 2!",
          "status": 0,
          "image_path": "https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836666_3.jpg",
          "complete":false
          }
                ]
          };
*/

ReactDOM.render(<App />, document.getElementById('root'));


//taskList={taskList}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
