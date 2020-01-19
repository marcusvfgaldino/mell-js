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