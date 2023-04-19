'use strict';

// selecting elements
const player00 = document.querySelector('.player--0')
const player01 = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

const score = [0,0];
let current = 0;
let activeplayer =0;
let play = true

const switchPlayer = () => { // tạo hàm thay đổi người chơi
    current = 0;
    document.getElementById(`current--${activeplayer}`).textContent = current; // trả điểm người chơi lại = 0
    activeplayer = activeplayer === 0 ? 1 : 0; // 
    player00.classList.toggle('player--active') // toggle ở đây sẽ kiểm tra .class trong element nếu có thì xóa không thì add
    player01.classList.toggle('player--active')
}
diceEl.classList.add('hidden') // hide the dice
score0El.textContent = 0 // cho điểm cơ bản = 0
score1El.textContent = 0 

btnRoll.addEventListener('click', function(){ // tạo sự kiện click chuột với btnRoll
    if(play) {
        //1 . generate random number
        let rolldice = Math.trunc(Math.random()*6)+1 
    
        //2 . display dice
        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${rolldice}.png`; // dùng src để đưa hình ảnh vào 

        //3 if rolled to 1
        if(rolldice !== 1) { //  kết quả dice không phải 1 
        current +=rolldice; // điểm hiện tại cộng dồn với dice
        document.getElementById(`current--${activeplayer}`)
            .textContent = current; // display current score of an activeplayer
        }else {
        switchPlayer()   
        }
    }
})

btnHold.addEventListener('click', function (){
    if (play) {
        score[activeplayer] += current;    // score của người chơi hiện tại = + dồn của current
        if (score[activeplayer] >= 50) { // set winner 
        play = false;
        diceEl.classList.add('hidden') // hide the dice

        document.querySelector(`.player--${activeplayer}`)
            .classList.add('player--winner');               // change color winner
        document.querySelector(`#score--${activeplayer}`)
            .textContent = score[activeplayer];             // display score 
        } else
        document.querySelector(`#score--${activeplayer}`)
            .textContent = score[activeplayer]; // display score 
        switchPlayer()
    }
})

btnNew.addEventListener('click', function (){
    play = true;
    score[1] = 0;// cho điểm cơ bản = 0
    score[0] = 0;
    score0El.textContent = score[0]
    score1El.textContent = score[0]
    if (player01.classList.contains('player--active')) switchPlayer();
    if (player00.classList.contains('player--winner')) {
        player00.classList.remove('player--winner'); // change color winner
    } else if (player01.classList.contains('player--winner')) {
        player01.classList.remove('player--winner');
    }
})







