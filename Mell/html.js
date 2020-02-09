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