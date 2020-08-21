var ul = document.getElementById("myList");
var li;
var itemId;
var item;

addTask = function() {
    let item;
    if(document.getElementById("task").value != ""){
        item = document.getElementById("task");
        console.log(item)
        itemId = ul.childElementCount;
        li = createItemEl(item.value,itemId);
        li.appendChild(createRemoveTask(itemId));
        ul.appendChild(li);
        item.value = "";
    }
}

removeTask = function(itemId) {
    for(i = 0; i < ul.children.length; i++){
        if(ul.children[i].getAttribute("index") == itemId){
            ul.children[i].remove();
        }
    }
}

createItemEl = function(itemValue, itemId){
    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}

createRemoveTask = function(itemId){
    let btn = document.createElement("button");
    btn.setAttribute("onclick","removeTask("+itemId+")");
    btn.innerHTML="X";
    return btn;
}