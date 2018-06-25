
Tetragona.forEach(accept_drag);
piece.forEach(make_dragable);

function accept_drag(item){
    item.setAttribute("ondrop", "drop(event)");
    item.setAttribute("ondragover", "allowDrop(event)");
}

function make_dragable(item, index){
    item.setAttribute("draggable", "true");
    item.setAttribute("ondragstart", "drag(event)");
    item.setAttribute("id", index);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var attacker = document.getElementById(data);
    console.log(attacker.color, attacker.pown);
      
    if (ev.target.firstChild && (ev.target.firstChild.parentNode.color != attacker.color)){
        ev.target.firstChild.parentNode.parentNode.replaceChild(document.getElementById(data),ev.target.firstChild.parentNode);
        
    }
    else if (ev.target.firstChild ){
        console.log("There is already other child");
        console.log(ev.target.firstChild);
    }
    else
        ev.target.appendChild(document.getElementById(data));
}

