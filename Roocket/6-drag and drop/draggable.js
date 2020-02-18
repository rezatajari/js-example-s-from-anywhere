class draggable {
    constructor(options) {
        this.setupList(options);

        for (let listItem of options.el.children) {
            this.addDnDHandlers(listItem);
        }

    }


    setupList(options) {
        let { list, el: element, template } = options;

        if (!element) throw Error('the list is not exist');
        if (!list) throw Error('the data is not exist');
        if (!Array.isArray(list)) throw Error('the list is not an array, please insert an array');
        if (!template) throw Error('please add a Template function');
        if (typeof template !== "function") throw Error('please add a function as template');

        list.forEach(item => element.innerHTML += template(item))
    }

    addDnDHandlers(element) {
        element.setAttribute('draggable', true);

        element.addEventListener('dragstart', this.handleDragStart.bind(this));
        element.addEventListener('drageneter', this.handleDragEneter.bind(this));
        element.addEventListener('dragover', this.handleDragOver.bind(this));
        element.addEventListener('dragLeave', this.handleDragLeave.bind(this));
        element.addEventListener('drop', this.handleDragDrop.bind(this));
        element.addEventListener('dragend', this.handleDragEnd.bind(this));
    }

    handleDragStart(e) {

    }

    handleDragEneter(e) {

    }

    handleDragOver(e) {

    }

    handleDragLeave(e) {

    }

    handleDragDrop(e) {

    }

    handleDragEnd(e) {

    }
}