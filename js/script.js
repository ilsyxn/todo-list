document.addEventListener("DOMContentLoaded", function () {

    let eingabe = document.getElementById("eingabe");
    let addButton = document.getElementById("add-btn");
    let todo = document.getElementById("todo");

    function addTask(){
        
        if (eingabe.value != "") {
            let li = document.createElement("li");
            let del = document.createElement("button");
            let icn = document.createElement("img");

            icn.setAttribute("src", "img/trash.png");
            icn.setAttribute("width", "25px");

            del.appendChild(icn);
            del.setAttribute("class", "del-btn");

            del.addEventListener("click", function(event){
                li.remove();
            });

            li.textContent = eingabe.value;
            li.setAttribute("class", "task");
            li.addEventListener("click", function(){
                let newClass = (li.getAttribute("class") == "task") ? "checked-task" : "task";
                li.setAttribute("class", newClass); 
            });

            li.appendChild(del);

            eingabe.value = "";

            todo.appendChild(li);

    } }

    addButton.addEventListener("click", addTask);


    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
        addTask();
        }
    });
});