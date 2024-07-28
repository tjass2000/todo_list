//Functions to add items to list
function onAddItem() {
    var list = (document.getElementById("list"));
    var listItem = document.createElement("li");
    var listItemText = (document.getElementById("listItemText"));
    if (listItemText.value === "") {
        window.alert("Please enter something to create a list!!");
        return;
    }
    var deleteBtn = (document.createElement("button"));
    var editBtn = (document.createElement("button"));
    var actionBtnContainer = (document.createElement("div"));
    var listContainer = (document.getElementById("listContainer"));
    deleteBtn.setAttribute("id", "deleteListItem");
    deleteBtn.setAttribute("class", "fa fa-remove");
    editBtn.setAttribute("id", "editListItem");
    editBtn.setAttribute("class", "fa fa-edit");
    actionBtnContainer.setAttribute("class", "actionBtnContainer");
    // deleteBtn.innerHTML = "X";
    // editBtn.innerHTML = "Edit";
    listItem.innerHTML = listItemText.value;
    deleteBtn.addEventListener("click", function (oEvent) { return onDeleteItem(oEvent); });
    editBtn.addEventListener("click", function (oEvent) { return onEditItem(oEvent); });
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
    var list = (document.getElementById("list"));
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
    var editBtn = (document.createElement("button"));
    editBtn.setAttribute("id", "editListItem");
    editBtn.setAttribute("class", "fa fa-edit");
    // editBtn.innerHTML = "Edit";
    editBtn.addEventListener("click", function (oEvent) { return onEditItem(oEvent); });
    actionBtnGroup.appendChild(editBtn);
}
//Function to edit item in list
function onEditItem(oEvent) {
    var currEditBtn = oEvent.target;
    var currListItm = currEditBtn.parentElement.parentElement;
    var actionBtnGroup = currEditBtn.parentElement;
    actionBtnGroup.removeChild(actionBtnGroup.children[1]);
    // currListItm.removeChild(currListItm.firstChild);
    var saveBtn = (document.createElement("button"));
    saveBtn.setAttribute("id", "saveListItem");
    saveBtn.setAttribute("class", "fa fa-save");
    // saveBtn.innerHTML = "Save";
    saveBtn.addEventListener("click", function (oEvent) { return onSaveItem(oEvent); });
    actionBtnGroup.appendChild(saveBtn);
    // currEditBtn.innerHTML = "Save";
    // currEditBtn.removeEventListener("click", onEditItem, true);
    // currEditBtn.addEventListener("click", onSaveItem);
    var itemInput = (document.createElement("input"));
    //itemInput.setAttribute("type", "text");
    // var currListItm = oEvent.target.parentElement;
    itemInput.value = currListItm.firstChild.textContent;
    itemInput.setAttribute("class", "editInputField");
    // document.getElementById("list").insertBefore(currListItm.firstChild)
    currListItm.firstChild.textContent = "";
    currListItm.insertBefore(itemInput, actionBtnGroup);
}
//Add Button
var addBtn = (document.getElementById("addButton"));
addBtn.addEventListener("click", onAddItem);
