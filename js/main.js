const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            currentImage: 0,

            slides: [
                './img/01.jpg',
                './img/02.jpg',
                './img/03.jpg',
                './img/04.jpg',
                './img/05.jpg',
            ],

            autoplay: false,
        };
    },

    methods: {
        nextSlide() {
            if (this.currentImage < this.slides.length - 1) {
                this.currentImage++
            } else {
                this.currentImage = 0
            }
        },

        prevSlide() {
            if (this.currentImage > 0) {
                this.currentImage--
            } else {
                this.currentImage = this.slides.length - 1
            }
        },

        setAutoplay() {
            this.autoplay = setInterval(() => {
                this.nextSlide();
            }, 3000);
        },

        stopAutoplay() {
            clearInterval(this.autoplay);
        },

        clickMiniature(index) {
            this.currentImage = index;
        }
    },

    mounted() {
        this.setAutoplay();
    }
});
app.mount('#app');