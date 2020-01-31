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