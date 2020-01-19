classadd = {
    class: null,
    atribute: null,

    init(param, element) {
        this.class = param;
        this.atribute = document.querySelector(element);

        this.make();
    },

    make() {
        local = this.atribute;
        local.classList.add(this.loc, this.html);
    }
}