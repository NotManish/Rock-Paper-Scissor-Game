let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");
const choice=document.querySelector(".choice");

 
choices.forEach(function(choice){
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
});

const genComputerChoice= ()=>{
//rock,paper,scissor
 const options=["rock","paper","scissors"];
 const randIndx=Math.floor(Math.random()*3);
 return options[randIndx];

}
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw. Play Again.";
    msg.style.backgroundColor="plum";
}
const showWinner=(userWin)=>{
    if(userWin){
        console.log("You win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You win !";
        msg.style.backgroundColor="Green";
    }else{
        console.log("You lose");
        computerScore++;
        compScorePara.innerText=computerScore;
        msg.innerText="You lose !";
        msg.style.backgroundColor="red";
    }
}
let displayChoice=(userChoice,compChoice)=>{
    let choiceSelectorUser=document.querySelector("#"+userChoice);
    let choiceSelectorComp=document.querySelector("#"+compChoice);
    let displayuser=document.querySelector("#userimage");
    let displaycomputer=document.querySelector("#computerimage");
    displayuser.innerHTML=choiceSelectorUser.innerHTML;
    displaycomputer.innerHTML=choiceSelectorComp.innerHTML;
    
}
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genComputerChoice();
    console.log("computer choice=",compChoice);
    if(userChoice === compChoice){
        drawGame();
        displayChoice(userChoice,compChoice);

    }else{
        let userWin=true;
        if(userChoice==="rock"){
            // computer choice is either scissors or paper
            userWin=compChoice==="paper"? false: true;
        }else if(userChoice==="paper"){
            // computer choice is either rock or scissors
            userWin=compChoice==="rock"?true:false;
        }else{
            // user choice is scissors
            // computer choice is either paper or rock
            userWin= compChoice==="paper"?true:false;
        }
        showWinner(userWin);
        displayChoice(userChoice,compChoice);

    }

}
let modeButton=document.querySelector("#mode");
let curr_mode="light";
modeButton.addEventListener("click",()=>{
    let body=document.querySelector("body");
    if(curr_mode==="light"){
        // body.classList.add("dark");
        // body.classList.remove("light")
        body.className="dark"
        curr_mode="dark";
        
     }else{
        // body.classList.add("light");
        // body.classList.remove("dark");
        body.className="light";
        curr_mode="light";
     }
   
})
