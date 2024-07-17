//Functions to add items to list
function onAddItem() {
    var list = (document.getElementById("list"));
    var listItem = document.createElement("li");
    var listItemText = (document.getElementById("listItemText"));
    var deleteBtn = (document.createElement("button"));
    var editBtn = (document.createElement("button"));
    var listContainer = (document.getElementById("listContainer"));
    deleteBtn.setAttribute("id", "deleteListItem");
    editBtn.setAttribute("id", "editListItem");
    deleteBtn.innerHTML = "X";
    editBtn.innerHTML = "Edit";
    listItem.innerHTML = listItemText.value;
    deleteBtn.addEventListener("click", function (oEvent) { return onDeleteItem(oEvent); });
    editBtn.addEventListener("click", function (oEvent) { return onEditItem(oEvent); });
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);
    list.appendChild(listItem);
    listContainer.appendChild(list);
}
//Function to delete item from list
function onDeleteItem(oEvent) {
    var currListItm = oEvent.target.parentElement;
    var list = (document.getElementById("list"));
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
    var editBtn = (document.createElement("button"));
    editBtn.setAttribute("id", "editListItem");
    editBtn.innerHTML = "Edit";
    editBtn.addEventListener("click", function (oEvent) { return onEditItem(oEvent); });
    currListItm.appendChild(editBtn);
}
//Function to edit item in list
function onEditItem(oEvent) {
    var currEditBtn = oEvent.target;
    var currListItm = currEditBtn.parentElement;
    currListItm.removeChild(currListItm.children[1]);
    var saveBtn = (document.createElement("button"));
    saveBtn.setAttribute("id", "saveListItem");
    saveBtn.innerHTML = "Save";
    saveBtn.addEventListener("click", function (oEvent) { return onSaveItem(oEvent); });
    currListItm.appendChild(saveBtn);
    // currEditBtn.innerHTML = "Save";
    // currEditBtn.removeEventListener("click", onEditItem, true);
    // currEditBtn.addEventListener("click", onSaveItem);
    var itemInput = (document.createElement("input"));
    //itemInput.setAttribute("type", "text");
    // var currListItm = oEvent.target.parentElement;
    itemInput.value = currListItm.firstChild.textContent;
    // document.getElementById("list").insertBefore(currListItm.firstChild)
    currListItm.firstChild.textContent = "";
    currListItm.insertBefore(itemInput, currListItm.firstChild);
}
//Add Button
var addBtn = (document.getElementById("addButton"));
addBtn.addEventListener("click", onAddItem);
