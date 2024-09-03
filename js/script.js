document.addEventListener("DOMContentLoaded", function () {
  let eingabe = document.getElementById("eingabe");
  let addButton = document.getElementById("add-btn");
  let todo = document.getElementById("todo");

  function addTask(task) {
    if (task != "") {
      let li = document.createElement("li");
      let del = document.createElement("button");
      let icn = document.createElement("img");

      icn.setAttribute("src", "img/trash.png");
      icn.setAttribute("width", "25px");

      del.appendChild(icn);
      del.setAttribute("class", "del-btn");

      del.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
      });

      li.textContent = task;
      li.setAttribute("class", "task");
      li.addEventListener("click", function () {
        let newClass =
          li.getAttribute("class") == "task" ? "checked-task" : "task";
        li.setAttribute("class", newClass);
      });

      li.appendChild(del);
      todo.appendChild(li);
    }
  }

  function splitTasks(tasks) {
    if (tasks.includes("\n")) {
      return tasks.split(/\r?\n/);
    } else {
      return [tasks]; // Rückgabe eines Arrays mit einem Element
    }
  }

  addButton.addEventListener("click", function () {
    let aufgaben = splitTasks(eingabe.value);

    aufgaben.forEach((item) => {
      addTask(item);
    });

    eingabe.value = ""; // Eingabefeld leeren nach dem Hinzufügen
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let aufgaben = splitTasks(eingabe.value);

      aufgaben.forEach((item) => {
        addTask(item);
      });

      eingabe.value = ""; // Eingabefeld leeren nach dem Hinzufügen
    }
  });
});
