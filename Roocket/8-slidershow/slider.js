class slider {
    slideIndex = 1;

    constructor(option) {
        this.option = option;
        this.intialStuff();

        this.createNextAndPrevBtns();
        this.createDots();

        this.showSlides(1);
    }

    intialStuff() {
        let { el: sliderElement, slideClass, auto } = this.option;

        if (!sliderElement) throw Error('slider element is not exists');
        Number.isInteger(auto) ? this.auto = auto : this.auto = 0;

        this.sliders = [...sliderElement.children].filter(elm => elm.classList.contains(slideClass))
    }
}