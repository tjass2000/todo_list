//Functions to add items to list
function onAddItem(): void {
  var list: HTMLUListElement = <HTMLUListElement>(
    document.getElementById("list")
  );
  var listItem: HTMLLIElement = <HTMLLIElement>document.createElement("li");
  var listItemText: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("listItemText")
  );
  if (listItemText.value === "") {
    window.alert("Please enter something to create a list!!");
    return;
  }
  var deleteBtn: HTMLButtonElement = <HTMLButtonElement>(
    document.createElement("button")
  );
  var editBtn: HTMLButtonElement = <HTMLButtonElement>(
    document.createElement("button")
  );

  var actionBtnContainer: HTMLDivElement = <HTMLDivElement>(
    document.createElement("div")
  );

  var listContainer: HTMLDivElement = <HTMLDivElement>(
    document.getElementById("listContainer")
  );

  deleteBtn.setAttribute("id", "deleteListItem");
  deleteBtn.setAttribute("class", "fa fa-remove");
  editBtn.setAttribute("id", "editListItem");
  editBtn.setAttribute("class", "fa fa-edit");
  actionBtnContainer.setAttribute("class", "actionBtnContainer");

  // deleteBtn.innerHTML = "X";
  // editBtn.innerHTML = "Edit";
  listItem.innerHTML = listItemText.value;

  deleteBtn.addEventListener("click", (oEvent) => onDeleteItem(oEvent));
  editBtn.addEventListener("click", (oEvent) => onEditItem(oEvent));

  // listItem.appendChild(deleteBtn);
  // listItem.appendChild(editBtn);
  actionBtnContainer.appendChild(deleteBtn);
  actionBtnContainer.appendChild(editBtn);
  listItem.appendChild(actionBtnContainer);
  list.appendChild(listItem);
  listContainer.appendChild(list);
}

//Function to delete item from list
function onDeleteItem(oEvent) {
  var currListItm = oEvent.target.parentElement.parentElement;
  var list: HTMLUListElement = <HTMLUListElement>(
    document.getElementById("list")
  );
  list.removeChild(currListItm);
}

//Function to save item in list
function onSaveItem(oEvent) {
  var currSaveBtn = oEvent.target;
  var currListItm = currSaveBtn.parentElement.parentElement;
  var actionBtnGroup = oEvent.target.parentElement;
  var inputFieldVal = currListItm.children[0].value;
  currListItm.removeChild(currListItm.children[0]);
  actionBtnGroup.removeChild(actionBtnGroup.children[1]);
  currListItm.firstChild.textContent = inputFieldVal;

  var editBtn: HTMLButtonElement = <HTMLButtonElement>(
    document.createElement("button")
  );
  editBtn.setAttribute("id", "editListItem");
  editBtn.setAttribute("class", "fa fa-edit");
  // editBtn.innerHTML = "Edit";
  editBtn.addEventListener("click", (oEvent) => onEditItem(oEvent));
  actionBtnGroup.appendChild(editBtn);
}

//Function to edit item in list
function onEditItem(oEvent) {
  var currEditBtn = oEvent.target;
  var currListItm = currEditBtn.parentElement.parentElement;
  var actionBtnGroup = currEditBtn.parentElement;

  actionBtnGroup.removeChild(actionBtnGroup.children[1]);
  // currListItm.removeChild(currListItm.firstChild);

  var saveBtn: HTMLButtonElement = <HTMLButtonElement>(
    document.createElement("button")
  );
  saveBtn.setAttribute("id", "saveListItem");
  saveBtn.setAttribute("class", "fa fa-save");
  // saveBtn.innerHTML = "Save";
  saveBtn.addEventListener("click", (oEvent) => onSaveItem(oEvent));
  actionBtnGroup.appendChild(saveBtn);
  // currEditBtn.innerHTML = "Save";
  // currEditBtn.removeEventListener("click", onEditItem, true);
  // currEditBtn.addEventListener("click", onSaveItem);
  var itemInput: HTMLInputElement = <HTMLInputElement>(
    document.createElement("input")
  );
  //itemInput.setAttribute("type", "text");
  // var currListItm = oEvent.target.parentElement;
  itemInput.value = currListItm.firstChild.textContent;
  itemInput.setAttribute("class", "editInputField");
  // document.getElementById("list").insertBefore(currListItm.firstChild)
  currListItm.firstChild.textContent = "";
  currListItm.insertBefore(itemInput, actionBtnGroup);
}

//Add Button
var addBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("addButton")
);
addBtn.addEventListener("click", onAddItem);
