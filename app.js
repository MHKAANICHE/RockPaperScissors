const playerGame = document.querySelectorAll('.player-game')
const cpuGame = document.querySelector('#cpu-game')
const result = document.querySelector('#result')
const score = document.querySelector('#score')

let playerScore = 0

function run(){
    console.log(cpuGame);


    let playerHand ;
    let cpuHand;
    let player = playerGame.forEach(play => 
        play.addEventListener('click', () => {
        // graphic action - css
        result.classList.remove('winner');  
        result.classList.remove('loser');  
        result.classList.remove('draw');  

        // Convert player Hand to numerical attribute 
        // 0 : Rock // 1 : paper // 2 : Scissor
        if (play.id == 'rock') {playerHand = 0; }
        else 
            if (play.id == 'paper') {playerHand = 1; }
            else
                if (play.id == 'scissor') {playerHand = 2; }
        console.log(play.id,' // playerHand :', playerHand);
        // Generate Random Hand : 
        cpuHand = Math.floor(Math.random()*3);
            // convert numerical attribute to Hand name
            // 0 : Rock // 1 : papper // 2 : Scissor
        if (cpuHand == 0 ) {cpuGame.innerHTML = 'Rock'; }
        else 
            if (cpuHand == 1 ) {cpuGame.innerHTML = 'Paper'; }
            else
                if (cpuHand == 2 ) {cpuGame.innerHTML = 'Scissor'; }
        // Game logic (win) :
        // paper - Rock    1-0 (sum : 1)
        // scissor - paper 2-1 (sum : 3)
        // rock - scissor  0-2 (sum : 2) (!!)
        // Draw Cases
        if (playerHand == cpuHand ){result.innerHTML='DROW'; result.classList.add('draw');  }
        else 
            // General Win Cases
            if (playerHand > cpuHand && (playerHand+cpuHand)%2 != 0) {
                    result.innerHTML='WIN';
                    result.classList.add('winner');  
                    playerScore++}
            else
                // specific Win case
                if (playerHand==0 && cpuHand==2)  {
                    result.innerHTML='WIN'; 
                    result.classList.add('winner');  
                    playerScore++}
                else
                    // Lost cases
                    {result.innerHTML='LOST'; 
                    result.classList.add('loser');  
                    playerScore--}
        // Display score 
        score.innerHTML = playerScore ;
    }
    ))

 
 
    

}

run()
