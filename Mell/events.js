const click = function(element, event) {
    atribute =  document.querySelector(element);
    atribute.onclick = make(event);
}

const docready = function(event) {
    document.addEventListener("DOMContentLoaded", make(event));
}

function make(event) {
    return event;
}