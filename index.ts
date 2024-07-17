//Functions to add items to list
function onAddItem(): void {
  var list: HTMLUListElement = <HTMLUListElement>(
    document.getElementById("list")
  );
  var listItem: HTMLLIElement = <HTMLLIElement>document.createElement("li");
  var listItemText: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("listItemText")
  );
  var deleteBtn: HTMLButtonElement = <HTMLButtonElement>(
    document.createElement("button")
  );
  var editBtn: HTMLButtonElement = <HTMLButtonElement>(
    document.createElement("button")
  );

  var listContainer: HTMLDivElement = <HTMLDivElement>(
    document.getElementById("listContainer")
  );

  deleteBtn.setAttribute("id", "deleteListItem");
  editBtn.setAttribute("id", "editListItem");

  deleteBtn.innerHTML = "X";
  editBtn.innerHTML = "Edit";
  listItem.innerHTML = listItemText.value;

  deleteBtn.addEventListener("click", (oEvent) => onDeleteItem(oEvent));
  editBtn.addEventListener("click", (oEvent) => onEditItem(oEvent));

  listItem.appendChild(deleteBtn);
  listItem.appendChild(editBtn);
  list.appendChild(listItem);
  listContainer.appendChild(list);
}

//Function to delete item from list
function onDeleteItem(oEvent) {
  var currListItm = oEvent.target.parentElement;
  var list: HTMLUListElement = <HTMLUListElement>(
    document.getElementById("list")
  );
  list.removeChild(currListItm);
}

//Function to save item in list
function onSaveItem(oEvent) {
  var currSaveBtn = oEvent.target;
  var currListItm = currSaveBtn.parentElement;
  var inputFieldVal = currListItm.children[0].value;
  currListItm.removeChild(currListItm.children[0]);
  currListItm.removeChild(currListItm.children[1]);
  currListItm.firstChild.textContent = inputFieldVal;

  var editBtn: HTMLButtonElement = <HTMLButtonElement>(
    document.createElement("button")
  );
  editBtn.setAttribute("id", "editListItem");
  editBtn.innerHTML = "Edit";
  editBtn.addEventListener("click", (oEvent) => onEditItem(oEvent));
  currListItm.appendChild(editBtn);
}

//Function to edit item in list
function onEditItem(oEvent) {
  var currEditBtn = oEvent.target;
  var currListItm = currEditBtn.parentElement;
  currListItm.removeChild(currListItm.children[1]);

  var saveBtn: HTMLButtonElement = <HTMLButtonElement>(
    document.createElement("button")
  );
  saveBtn.setAttribute("id", "saveListItem");
  saveBtn.innerHTML = "Save";
  saveBtn.addEventListener("click", (oEvent) => onSaveItem(oEvent));
  currListItm.appendChild(saveBtn);
  // currEditBtn.innerHTML = "Save";
  // currEditBtn.removeEventListener("click", onEditItem, true);
  // currEditBtn.addEventListener("click", onSaveItem);
  var itemInput: HTMLInputElement = <HTMLInputElement>(
    document.createElement("input")
  );
  //itemInput.setAttribute("type", "text");
  // var currListItm = oEvent.target.parentElement;
  itemInput.value = currListItm.firstChild.textContent;
  // document.getElementById("list").insertBefore(currListItm.firstChild)
  currListItm.firstChild.textContent = "";
  currListItm.insertBefore(itemInput, currListItm.firstChild);
}

//Add Button
var addBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("addButton")
);
addBtn.addEventListener("click", onAddItem);
