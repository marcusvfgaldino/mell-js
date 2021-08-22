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