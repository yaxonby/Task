import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


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
          "username": "Test User 2",
          "email": "test_user_2@example.com",
          "text": "Hello from user 2!",
          "status": 0,
          "image_path": "https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836666_3.jpg",
          "complete":false
          }
                ]
          };

ReactDOM.render(<App taskList={taskList}/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
