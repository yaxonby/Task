LoadTaskFromServer=(
    //значения сортировки по умолчанию
    url="https://uxcandy.com/~shapoval/test-task-backend/?developer=Yuriy",
    sort_field="username",
    sort_direction="asc",
    page=1
    )=> {

fetch(url)
.then((response)=>{console.log(response)})
    }





/*

      const request = new XMLHttpRequest();
      var loadlistjson;
    
      function req() {
          if (request.readyState === 4) {
            const status = request.status;
              if (status === 200) {
               loadlistjson = JSON.parse(request.response).message.tasks
               total_task_count = JSON.parse(request.response).message.total_task_count
              } else { console.log("Ответ сервера " + request.statusText)}
          }
      }
      url="https://uxcandy.com/~shapoval/test-task-backend/?developer=Yuriy"+"&"+"sort_field="+sort_field+"&"+"sort_direction="+sort_direction+"&"+"page="+page ;
      request.open("GET", url, false);
      request.onreadystatechange = req;
      request.send();
    
        for (let i=0; i<loadlistjson.length; i++) {
        loadlistjson[i].complete=false
        };
    
    if (count===0) {count=count+1; return loadlistjson}
    else {this.setState({list: loadlistjson  })}
      };