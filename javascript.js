function addTask() {
    const task = document.getElementById("taskInput").value;
            if (task.length > 0) {
                document.getElementById("taskList").innerHTML += "<div class='task'>" +"<div class='margin'>" +task +"</div> "+"<button onclick='deleteTask(this)'>DELETE</button></div>";
            }
            document.getElementById("taskInput").value = "";
        }
        function deleteTask(element) {
            element.parentElement.remove();
        }
