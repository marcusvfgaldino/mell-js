const insert = {
    html: null,
    atribute: null,
    loc: null,

    init(content, element, place) {
        this.html = content;
        this.atribute = document.querySelector(element);
        this.loc = place;

        this.make();
    },

    make() {
        local = this.atribute;
        local.insertAdjacentHTML(this.loc, this.html);
    }
}
const remove = {
    atribute: null,

    init(element) {
        this.atribute = document.querySelector(element);
        
        this.make();
    },

    make() {
        this.atribute.remove();
    }

}
const mell =  {
    insert: insert,
    remove: remove
}