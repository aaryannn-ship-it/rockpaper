let score = JSON.parse(localStorage.getItem('score'));
        if (score === null) {
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            };
        }
         
       
        displayScore();
        
                
                document.querySelector('.js-paper-button')     
                .addEventListener('click', () => {
                    playGmae('paper');
                });
                document.querySelector('.js-rock-button')     
                .addEventListener('click', () => {
                    playGmae('rock');
                });
                document.querySelector('.js-scissors-button')     
                .addEventListener('click', () => {
                    playGmae('scissors');
                });
           
            function playGmae(playerMove){
                result = '';
                pickComputerMove();
            if (playerMove === 'scissors') {
                if (computerMove === 'rock') {
                    result = 'You loose';
                }
                else if (computerMove === 'paper') {
                    result = 'You win';
                }
                else if (computerMove === 'scissors') {
                    result = ' Tie';
                }
               
            }
            else if (playerMove === 'paper') {
                
                if (computerMove === 'rock') {
                    result = 'You win';
                }
                else if (computerMove === 'paper') {
                    result = 'Tie';
                }
                else if (computerMove === 'scissors') {
                    result = 'You loose';
                }
               
            }
            else if (playerMove === 'rock') {
    
                if (computerMove === 'rock') {
                    result = 'Tie';
                }
                else if (computerMove === 'paper') {
                    result = 'You loose';
                }
                else if (computerMove === 'scissors') {
                    result = 'You win';
                }
            }
            if (result === 'You win') {
                score.wins += 1;
            }
            else if (result === 'You loose') {
                score.losses += 1;
            }
            else if (result === 'Tie') {
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));
           
            displayScore();
           
           let resultColor = '';

            if (result === 'You win') {
            resultColor = '#00e676'; // green
            } else if (result === 'You lose') {
            resultColor = '#ff6f61'; // red/coral
            } else if (result === 'Tie') {
            resultColor = '#ffd54f'; // yellow/orange
            }

           document.querySelector('.js-result').innerHTML =
          `<span style="color: ${resultColor}; font-weight: bold;">${result}</span>`;

           document.querySelector('.js-moves').innerHTML = `You choose <strong> ${playerMove}</strong>, computer choose <strong>${computerMove}</strong>`;


            

        }
      
        function displayScore(){
            document.querySelector('.js-score').innerHTML=` Wins: ${score.wins},
         Losses: ${score.losses},Ties: ${score.ties}`;
        }
       

        let computerMove = '';
        function pickComputerMove() {

            const randomNumber = Math.random();
            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'paper';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = 'scissors';
            }
        }
        let resultColor = '';