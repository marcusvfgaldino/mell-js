modclass = {
    content: null,
    atribute: null,

    add(param, element) {
        this.content = param;
        this.atribute = document.querySelector(element);

        this.makeAdd();
    },

    remove(param, element) {
        this.content = param;
        this.atribute = document.querySelector(element);

        this.makeRemove();
    },

    makeAdd() {
        local = this.atribute;
        local.classList.add(this.content);
    },

    makeRemove() {
        local = this.atribute;
        local.classList.remove(this.content);
    }
}
modelement = {
    atribute: null,

    show(element) {
        this.atribute = document.querySelector(element);

        this.makeShow();
    },

    hide(element) {
        this.atribute = document.querySelector(element);

        this.makeHide();
    },

    remove(element) {
        this.atribute = document.querySelector(element);

        this.makeRemove();
    },

    makeShow() {
        local = this.atribute;
        local.style.display = "block";
    },

    makeHide() {
        local = this.atribute;
        local.style.display = "none";
    },

    makeRemove() {
        local = this.atribute;
        local.parentNode.removeChild(local);
    }
}
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
const modfocus = function(element) {
    atribute = document.querySelector(element)
    atribute.focus()
}
const html = {
    content: null,
    atribute: null,
    loc: null,

    insert(code, element, place) {
        this.content = code;
        this.atribute = document.querySelector(element);
        this.loc = place;

        this.makeInsert();
    },

    delete(element) {
        this.atribute = document.querySelector(element);
        this.makeDelete();
    },

    get(element) {
        this.atribute = document.querySelector(element);
        return this.makeGet();
    },

    makeInsert() {
        local = this.atribute;
        local.insertAdjacentHTML(this.loc, this.content);
    },

    makeDelete() {
        this.atribute.remove();
    },

    makeGet() {
        var content = this.atribute.innerHTML;
        return content;
    }
}
const load  = function (url) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.readyState + " / " + this.status);
            return xhttp.responseText;
         } else {
             console.log(this.readyState + " / " + this.status);
         }
    };
    xhttp.open("GET", url, true);
    xhttp.send(); 
}
const mell =  {
    html: html,
    class: modclass,
    click: click,
    docready: docready,
    load: load,
    element: modelement,
    focus: modfocus
}