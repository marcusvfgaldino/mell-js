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

    makeInsert() {
        local = this.atribute;
        local.insertAdjacentHTML(this.loc, this.html);
    },

    makeDelete() {
        this.atribute.remove();
    }
}
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
const click = function(element, event) {
    atribute =  document.querySelector(element);
    atribute.onclick = make(event);
}

function make(event) {
    return event;
}
const mell =  {
    html: html,
    class: modclass,
    click: click
}