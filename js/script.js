document.addEventListener("DOMContentLoaded", function () {
  let knopf = document.getElementById("add-btn");
  let liste = document.getElementById("liste");
  let eingabe = document.getElementById("eingabe");

  function addTask() {
    if (eingabe.value != "") {
      let li = document.createElement("li");
      li.textContent = eingabe.value;
      li.appendChild(getDeleteButton());
      liste.appendChild(li);
      eingabe.value = "";
    }
  }

  function getDeleteButton() {
    let del = document.createElement("button");
    del.textContent = "DELETE";
    del.addEventListener("click", function () {
      liste.removeChild(del.parentNode);
    });
    return del;
  }

  knopf.addEventListener("click", addTask);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
