const count = document.querySelector('.click-count h2 span');
const card = document.querySelectorAll('.card');

let arr = [];
let right = [];

function countplus() {
    count.textContent++;
}

function reset() {
    for (let i = 0; i < card.length; i++) {
        card[i].classList.remove('hide');
    }
}

function correct(el) {
    arr.sort((a, b) => {
        if (a == b) {

        }
    })
}

let togcount = 0;
card.forEach((me) => {
    me.addEventListener('click', () => {
        me.classList.toggle('hide');
        countplus();
        arr.push(me.textContent);
        togcount++;
        while (togcount == 2) {
            setTimeout(() => {
                reset();
                arr = [];
            }, 200);
            togcount = 0;
        }
        console.log(me);
    })
});