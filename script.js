function playGame(userChoice){
    const choices = ['rock','paper','scissor'];
    const computerChoice =[Math.floor(Math.random() *3)];
    let result;
    if (userChoice===computerChoice) {
        result="It's a draw!";
    }
    else if(
        (userChoice==='rock' && computerChoice==='scissor')||
        (userChoice==='scissor' && computerChoice==='paper')||
        (userChoice==='paper' && computerChoice==='rock')
    ){
        result="You win."
    }
    else{
        result="you lose."
    }

    document.getElementById('result').textContent = `
    You chose ${userChoice}, computer chose ${computerChoice}. ${result}
  `;
}