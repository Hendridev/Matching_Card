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

function checkme(me) {
    right.reduce((a, b) => {
        if (a == b) {
            alert("use your brain my fellow");
            me.classList.remove('complete');
            count.textContent--;
            point -= 1;
        }
    })
}

function shuffle() {
    card.forEach((me) => {
        let orderit = Math.floor(Math.random() * 12);
        me.style.order = orderit;
    })
};
shuffle();

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
    if (point == 6) {
        setTimeout(() => {
            alert(`You win, click count: ${count.textContent}`);
            resetAll();
            shuffle();
        }, 200);
    }
}

let togcount = 0;
card.forEach((me) => {
    me.addEventListener('click', () => {
        // check double click
        me.classList.toggle('hide')
        countplus();
        arr.push(me.textContent);
        right.push(me);
        correct(me);
        checkme(me);
        congrats();
        togcount++;
        while (togcount == 2) {
            setTimeout(() => {
                reset();
            }, 200);
            arr = [];
            right = [];
            togcount = 0;
        }
        console.log(togcount);
    })

});