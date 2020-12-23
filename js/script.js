const count = document.querySelector('.click-count h2 span');
const card = document.querySelectorAll('.card');

let arr = [];
let right = [];
let point = 0;

function countplus() {
    count.textContent++;
}

function reset() {
    for (let i = 0; i < card.length; i++) {
        card[i].classList.remove('hide');
    }
}

function resetAll() {
    for (let i = 0; i < card.length; i++) {
        card[i].classList.remove('complete');
        point = 0;
        count.textContent = 0;
    }
}


function correct(el) {
    arr.sort((a, b) => {
        if (a == b) {
            for (let i = 0; i < right.length; i++) {
                right[i].classList.add('complete');
                point += .5;
            }
        }
    })
}

function congrats() {
    if (point == 4) {
        setTimeout(() => {
            alert(`You win, click count: ${count.textContent}`);
            resetAll();
        }, 200);
    }
}

let togcount = 0;
card.forEach((me) => {
    me.addEventListener('click', () => {
        me.classList.toggle('hide');
        countplus();
        arr.push(me.textContent);
        right.push(me);
        correct(me);
        congrats();
        togcount++;
        while (togcount == 2) {
            setTimeout(() => {
                reset();
                arr = [];
                right = [];
            }, 200);
            togcount = 0;
        }
        console.log(point);
    })
});