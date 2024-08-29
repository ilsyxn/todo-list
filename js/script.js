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

        let buttonsContainer = document.createElement("div");
        buttonsContainer.appendChild(getPinButton(li));
        buttonsContainer.appendChild(getDeleteButton());

        li.appendChild(buttonsContainer);

        li.addEventListener("click", function () {
            select(li);
        });

        liste.appendChild(li);
        eingabe.value = "";
    }
  }

  function getPinButton(li) {
    let pin = document.createElement("button");
    let icon = document.createElement("img");
    pin.setAttribute("id", "pin-btn");
    icon.setAttribute("src", "img/pin.png");
    icon.setAttribute("width", "22");
    pin.appendChild(icon);

    pin.addEventListener("click", function (event) {
      event.stopPropagation(); 
      liste.removeChild(li);
      liste.insertBefore(li, liste.firstChild); 
    });

    return pin;
  }

  function getDeleteButton() {
    let del = document.createElement("button");
    let icon = document.createElement("img");
    del.setAttribute("id", "delete-btn");
    icon.setAttribute("src", "img/trash.png");
    icon.setAttribute("width", "22");
    del.appendChild(icon);

    del.addEventListener("click", function (event) {
      event.stopPropagation(); // Verhindert, dass das Li-Element auch angeklickt wird
      liste.removeChild(del.closest("li")); // Entfernt das Li-Element
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
