//Generating Variable Element
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
//Generating Button Variable
const btnRoll = document.querySelector('.btn--roll');    //1
const btnHold = document.querySelector('.btn--hold');    //2
const btnNew = document.querySelector('.btn--new');     //3
//Generating assign Variable
let current , score , activeplayer ,play;
//Generating Function
//Function #1
const gameDefault = () => {
    current = 0;
    score = [0,0];
    activeplayer = 0;
    play = true;
    document.querySelector('.dice').classList.add('hidden');
    document.querySelector('#current--0').textContent = current;;
    document.querySelector('#current--1').textContent = current;
    document.querySelector('#score--0').textContent = score[0];
    document.querySelector('#score--1').textContent = score[1];
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    if (player1.classList.contains('player--active'))switchPlayer();
}
//Function #2
const switchPlayer = () => {
    current = 0;
    document.querySelector(`#current--${activeplayer}`).textContent = current;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  

}
//Calling Function
gameDefault();

//Generating Roll Dice Button
btnRoll.addEventListener('click',function(){
   if(play) {
        let diceNumber = Math.trunc(Math.random()*6)+1
        document.querySelector('.dice').src = `dice-${diceNumber}.png`
        document.querySelector('.dice').classList.remove('hidden');
        if(diceNumber !== 1){
        current += diceNumber;
        document.querySelector(`#current--${activeplayer}`).textContent = current;
        }else switchPlayer()
    } 
})
//Generating Hold Score Button
btnHold.addEventListener('click',function () {
    if(play) {
        score[activeplayer] += current;
        document.querySelector(`#score--${activeplayer}`).textContent= score[activeplayer];
        if (score[activeplayer] >= 100) {
        play = false;
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
        document.querySelector(`#current--${activeplayer}`).textContent = 0;
        document.querySelector('.dice').classList.add('hidden');
        } else {
            switchPlayer();
            document.querySelector('.dice').classList.add('hidden');
            
        }
    }
})
//Generating New Game Button
btnNew.addEventListener('click',gameDefault);
