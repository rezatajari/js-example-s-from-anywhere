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

    createNextAndPrevBtns() {
        let { el: sliderElement } = this.option;

        sliderElement.insertAdjacentHTML('beforeend', `
            <a class="next">&#10095;</a>
            <a class="prev">&#10094;</a>
        `);

        sliderElement.querySelector('.next').addEventListener('click', () => this.incrementSlide());
        sliderElement.querySelector('.prev').addEventListener('click', () => this.decrementSlide());
    }

    incrementSlide = () => this.showSlides(this.slideIndex += 1);
    decrementSlide = () => this.showSlides(this.slideIndex - +1);

    createDots() {
        let { el: sliderElement } = this.option;

        let dotElements = [...this.sliders].map((slider, index) => `<span class="dot" data-slide="${index+1}"></span>`);

        let dots = document.createElement('div');
        dots.classList.add('dots');
        dots.innerHTML = `${dotElements.join('')}`;

        sliderElement.after(dots);

        this.dots = dots.querySelectorAll('.dot');
        this.dots.forEach(dot => dot.addEventListener('click', e => console.log(e)))
    }

    showSlides(number) {
        if (number > this.sliders.length) this.slideIndex = 1;
        if (number < 1) this.slideIndex = this.sliders.length;
    }
}