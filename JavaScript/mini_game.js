

const gallery_container = document.querySelector('.gallery_container');
const gallery_control_container = document.querySelector('.gallery_control');
const gallery_control = ['previous', 'next'];
const gallery_item = document.querySelectorAll('.gallery_item');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }
    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery_item_1');
            el.classList.remove('gallery_item_2');
            el.classList.remove('gallery_item_3');
            el.classList.remove('gallery_item_4');
            el.classList.remove('gallery_item_5');
            el.classList.remove('gallery_item_6');
            el.classList.remove('gallery_item_7');
            el.classList.remove('gallery_item_8');
            el.classList.remove('gallery_item_9');
            el.classList.remove('gallery_item_10');
            el.classList.remove('gallery_item_11');
            el.classList.remove('gallery_item_12');
        });

        this.carouselArray.slice(0, 12).forEach((el, i) => {
            el.classList.add(`gallery_item_${i + 1}`);
        })
    }
    setCurrentState(direction) {
        if (direction.className == 'gallery_control_previous') {
            this.carouselArray.unshift(this.carouselArray.pop())
        }
        else {
            this.carouselArray.push(this.carouselArray.shift())
        }
        this.updateGallery();
    }

    run() {
        this.carouselArray.push(this.carouselArray.shift())
        this.updateGallery();

    }
};
const example = new Carousel(gallery_control_container, gallery_item, gallery_control)
let audio = new Audio('audio/card_sound.mp3')
audio.volume = 0.5
let audio2 = new Audio('audio/card_sound2.mp3')
audio2.autoplay = true
let mini_game_sound = new Audio('audio/mini_game_sound.mp3');
mini_game_sound.autoplay = true;
mini_game_sound.volume = 0.3;
let show_card_sound = new Audio('audio/show_card_sound.mp3')



window.addEventListener('load', () => {
    let items = document.querySelectorAll('.gallery_item')
    let count = 0;
    items.forEach(items => {
        items.style.pointerEvents = "none";
    })
    let x = localStorage.getItem('zodiac');
    let b = 0
    if (x == 'Sagittarius') {
        b = 54
    }
    if (x == 'Cancer') {
        b = 51
    }
    if (x == 'Pisces') {
        b = 53
    }
    if (x == 'Aries') {
        b = 47
    }
    if (x == 'Leo') {
        b = 48
    }
    if (x == 'Capricorn') {
        b = 52
    }
    if (x == 'Scorpio') {
        b = 56
    }
    if (x == 'Aquarius') {
        b = 58
    }
    if (x == 'Taurus') {
        b = 55
    }
    if (x == 'Gemini') {
        b = 50
    }
    if (x == 'Virgo') {
        b = 45
    }
    if (x == 'Libra') {
        b = 49
    }

    const loop = () => {
        example.run();
        count++;
        if (count < b) {
            if (count <= 30) {
                setTimeout(loop, 50);
            }
            if (count > 30 && count <= 35) {
                items.forEach(items => {
                    items.style.transitionProperty = 'all';
                    items.style.transitionDuration = '0.1s';
                })
                setTimeout(loop, 100);
            }
            if (count > 35 && count <= 38) {
                items.forEach(items => {
                    items.style.transitionProperty = 'all';
                    items.style.transitionDuration = '0.13s';
                })

                setTimeout(loop, 130);
            }
            if (count > 38 && count <= b - 7) {
                items.forEach(items => {
                    items.style.transitionProperty = 'all';
                    items.style.transitionDuration = '0.15s';
                })

                setTimeout(loop, 150);
            }
            if (count > b - 7 && count <= b - 6) {
                items.forEach(items => {
                    items.style.transitionProperty = 'all';
                    items.style.transitionDuration = '0.2s';
                })
                audio.play();
                setTimeout(loop, 200);
            }
            if (count > b - 6 && count <= b - 5) {
                items.forEach(items => {
                    items.style.transitionProperty = 'all';
                    items.style.transitionDuration = '0.3s';
                })
                audio.play();
                setTimeout(loop, 300);
            }
            if (count > b - 5 && count <= b - 4) {
                items.forEach(items => {
                    items.style.transitionProperty = 'all';
                    items.style.transitionDuration = '0.4s';
                })
                audio.play();
                setTimeout(loop, 400);
            }

            if (count > b - 4 && count <= b - 3) {
                items.forEach(items => {
                    items.style.transitionProperty = 'all';
                    items.style.transitionDuration = '0.55s';
                })
                audio.play();
                setTimeout(loop, 550);
            }
            if (count > b - 3 && count <= b - 2) {
                items.forEach(items => {
                    items.style.transitionProperty = 'all';
                    items.style.transitionDuration = '0.75s';
                })
                audio.play();
                setTimeout(loop, 750);
            }
            if (count > b - 2 && count <= b - 1) {
                items.forEach(items => {
                    items.style.transitionProperty = 'all';
                    items.style.transitionDuration = '0.9';
                })
                audio.play();
                setTimeout(loop, 900);
                setTimeout(function () {
                    let show_card = document.querySelector('.gallery_item_3')
                    show_card.style.pointerEvents = "";
                    show_card.addEventListener('mouseover', function () {
                        show_card_sound.play();
                        mini_game_sound.pause();
                    })
                    show_card.addEventListener('mouseout', function () {
                        show_card_sound.pause();
                    })
                }, 2000)
            }
        }
    };
    setTimeout(loop, 300); // bắt đầu vòng lặp với delay ban đầu là 1000ms
});