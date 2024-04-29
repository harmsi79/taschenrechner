function insert(operation) {
  document.getElementById("ausgabe").innerHTML += operation;
}

function calculate() {
  let container = document.getElementById("ausgabe");
  let contentInput = container.innerHTML;
  let result = eval(contentInput);
  container.innerHTML = result;
  updateListe(contentInput, result);
  }

function ce() {
  let container = document.getElementById("ausgabe");
  container.innerHTML = "";
}

function updateListe(container, result) {
  let listItem = container + " = " + result + "<br>"
  let list = document.getElementById("list");
  list.innerHTML = listItem + list.innerHTML;
}



