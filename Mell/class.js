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