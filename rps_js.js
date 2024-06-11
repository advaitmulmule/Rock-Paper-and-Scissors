const game = () => {
    let pScore = 0;
    let cScore = 0;
    const intro = document.querySelector('.intro');
    const match = document.querySelector('.match');

    const startGame = () => {
        const start = document.querySelector('.intro button');
        start.addEventListener('click', function() {
            intro.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    }

    const randomInt = () => {
        const min = 1;
        const max = 3;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const play = () => {
        const rock = document.querySelector('.rock');
        const paper = document.querySelector('.paper');
        const scissors = document.querySelector('.scissors');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands=document.querySelectorAll('.hands img');

        const anime=()=>{
            hands.forEach(hand =>{
                hand.addEventListener('animationend', () => {
                    playerHand.style.animation = '';
                    computerHand.style.animation = '';
                })
            })
        }

        rock.addEventListener('click', () => {
            playerHand.src = "/rock.png";
            computerHand.src='/rock.png';
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
            anime();
            setTimeout(() => {
                const int = randomInt();
                if (int === 1) {
                    computerHand.src = "/rock.png";
                } else if (int === 2) {
                    computerHand.src = "/paper.png";
                    cScore++;
                    document.querySelector('.computer p').innerHTML = cScore;
                } else {
                    computerHand.src = "/scissors.png";
                    pScore++;
                    document.querySelector('.player p').innerHTML = pScore;
                }
                endGame();
            }, 2000);
        })
        paper.addEventListener('click', () => {
            playerHand.src = "/rock.png";
            computerHand.src='/rock.png';
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
            anime();
            setTimeout(() => {
                playerHand.src="/paper.png";
                const int = randomInt();
                if (int === 1) {
                    computerHand.src = "/rock.png";
                    pScore++;
                    document.querySelector('.player p').innerHTML = pScore;
                } else if (int === 2) {
                    computerHand.src = "/paper.png";
                } else {
                    computerHand.src = "/scissors.png";
                    cScore++;
                    document.querySelector('.computer p').innerHTML = cScore;
                }
                endGame();
            }, 2000);
        })
        scissors.addEventListener('click', () => {
            playerHand.src = "/rock.png";
            computerHand.src='/rock.png';
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
            anime();
            setTimeout(() => {
                playerHand.src='/scissors.png';
                const int = randomInt();
                if (int === 1) {
                    computerHand.src = "/rock.png";
                    cScore++;
                    document.querySelector('.computer p').innerHTML = cScore;
                } else if (int === 2) {
                    computerHand.src = "/paper.png";
                    pScore++;
                    document.querySelector('.player p').innerHTML = pScore;
                } else {
                    computerHand.src = "/scissors.png";
                }
                endGame();
            }, 2000);
        })

        const endGame = () => {
            if (pScore === 5) {
                document.querySelector('.winner').innerHTML = "Congratulations!!! You are the Winner";
                pScore = 0;
                cScore = 0;
                document.querySelector('.player p').innerHTML = pScore;
                document.querySelector('.computer p').innerHTML = cScore;
                return;
            }
            if (cScore === 5) {
                document.querySelector('.winner').innerHTML = "Sorry, Better Luck Next Time!!";
                pScore = 0;
                cScore = 0;
                document.querySelector('.player p').innerHTML = pScore;
                document.querySelector('.computer p').innerHTML = cScore;
                return;
            }
        }
    };

    startGame();
    play();
}

game();