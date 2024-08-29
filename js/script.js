document.addEventListener("DOMContentLoaded", function () {
  let knopf = document.getElementById("add-btn");
  let liste = document.getElementById("liste");
  let eingabe = document.getElementById("eingabe");
  let editBtn = document.getElementById("edit-btn");
  let selected = [];
  let edit = false;

  function addTask() {
    if (eingabe.value != "") {
      let li = document.createElement("li");
      li.textContent = eingabe.value;
      li.appendChild(getDeleteButton());
      li.addEventListener("click", function () {
        select(li);
      });
      liste.appendChild(li);
      eingabe.value = "";
    }
  }

  function getDeleteButton() {
    let del = document.createElement("button");
    let icon = document.createElement("img");
    del.setAttribute("id", "delete-btn");
    icon.setAttribute("src", "img/trash.png");
    icon.setAttribute("width", "22");
    del.appendChild(icon);
    del.addEventListener("click", function () {
      liste.removeChild(del.parentNode);
    });
    return del;
  }

  function select(elem) {
    if (edit) {
      if (selected.includes(elem)) {
        selected = selected.filter((item) => item !== elem);
        elem.style.backgroundColor = "";
      } else {
        selected.push(elem);
        elem.style.backgroundColor = "#e3ebfb";
      }
    }
  }

  function toggleButton() {
    knopf.textContent = edit ? "DELETE" : "ADD";

    if (!edit){
      liste.childNodes.forEach((elem) => elem.style.backgroundColor = "");
      selected = [];
    }
  }

  function deleteSelected() {
    selected.forEach((elem) => {
      liste.removeChild(elem);
    });
    selected = [];
  }

  knopf.addEventListener("click", function () {
    if (!edit) {
      addTask();
    } else {
      deleteSelected();
    }
  });
  editBtn.addEventListener("click", function () {
    edit = !edit;
    toggleButton();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  eingabe.addEventListener("click", function () {
    if (edit) {
      edit = false;
      toggleButton();
    }
  });
});
