const click = function(element, event) {
    atribute =  document.querySelector(element);
    atribute.onclick = make(event);
}

function make(event) {
    return event;
}