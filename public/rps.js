let userScore =0;

let computerScore =0;
let round=0;
let choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userS=document.querySelector("#user-score");
let computerS=document.querySelector("#computer-score");
let moves= document.querySelector(".moves");


let cRock=document.querySelector("#c-rock");
let cPaper=document.querySelector("#c-paper");
let cScissors=document.querySelector("#c-scissors");

let uRock=document.querySelector("#u-rock");
let uPaper=document.querySelector("#u-paper");
let uScissors=document.querySelector("#u-scissors");
let input= document.querySelectorAll(".input");

let rCount=document.querySelector("#r-count");
let reset= document.querySelector("#reset");

const resetGame = function(){
    moves.classList.add("hide");
    userScore =0;
    computerScore =0;
    round=0;
    userS.innerText=userScore;
    computerS.innerText=computerScore;
    rCount.innerText=round;
    reset.classList.add("hide");
    msg.innerText="play your move";
    msg.style.backgroundColor=" #480CA8";

    
    


}

const drawGame= function(){
    //console.log("draw");
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor = "black";
    moves.classList.remove("hide");

   


};

let updateScore=function(x,userChoice,compChoice){
    if(x==true){
        userScore++;
        userS.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        moves.classList.remove("hide");
       

    }
    else{
        computerScore++;
        computerS.innerText=computerScore;
         msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor = "red";
         moves.classList.remove("hide");
             
    }

    
    
}

const computerChoice= function(){
    const option=["rock", "paper", "scissors"];
    const randomIx=Math.floor(Math.random()*3);
    return option[randomIx];
};

const playgame=function(x){
    const computerInput=computerChoice();
  //  console.log(x);
  //  console.log(computerInput);
    
    if(computerInput == x){
        
        drawGame();
    }
    
    else {
    let userWin=true;
   
    if(x=="rock"){
        userWin= computerInput=="paper"?false:true;
      //  console.log(userWin);

    }
    else if(x=="paper"){
        userWin= computerInput=="scissors"?false:true;
       // console.log(userWin);

    }
    else{
        userWin= computerInput=="rock"?false:true;
       // console.log(userWin);
    }


    
    updateScore(userWin,x,computerInput);
}
showhand(x,computerInput);

};

choices.forEach((choice)=>{
    choice.addEventListener("click", function(){
        round ++;
        rCount.innerText=round;
        reset.classList.remove("hide");
        let userInput = choice.getAttribute("id");
       
        playgame(userInput);

    });
});




let showhand= function(u,c){
    if(u=="rock"&&c=="rock"){

       
        uPaper.classList.add("hide");
        cPaper.classList.add("hide");
        uScissors.classList.add("hide");
        cScissors.classList.add("hide");

        uRock.classList.remove("hide");
        cRock.classList.remove("hide");

        

    }
    if(u=="paper"&& c=="paper"){
        uRock.classList.add("hide");
        cRock.classList.add("hide");
       
        uScissors.classList.add("hide");
        cScissors.classList.add("hide");


        uPaper.classList.remove("hide");
        cPaper.classList.remove("hide");

    }
    else if(u=="scissors"&& c=="scissors"){

        uRock.classList.add("hide");
        cRock.classList.add("hide");
        uPaper.classList.add("hide");
        cPaper.classList.add("hide");
      
    


        uScissors.classList.remove("hide");
        cScissors.classList.remove("hide");

    }
    else if(u=="rock" && c=="paper"){
  uRock.classList.add("hide");
        cRock.classList.add("hide");
        uPaper.classList.add("hide");
      
        uScissors.classList.add("hide");
        cScissors.classList.add("hide");


        uRock.classList.remove("hide");
        cPaper.classList.remove("hide");

    }
    else if(u=="rock" && c=="scissors"){

       
        cRock.classList.add("hide");
        uPaper.classList.add("hide");
        cPaper.classList.add("hide");
        uScissors.classList.add("hide");
       


        uRock.classList.remove("hide");
        cScissors.classList.remove("hide");

    }
    else if(u=="paper" && c=="scissors"){

        uRock.classList.add("hide");
        cRock.classList.add("hide");
      
        cPaper.classList.add("hide");
        uScissors.classList.add("hide");
     

        uPaper.classList.remove("hide");
        cScissors.classList.remove("hide");

    }
    else if(u=="paper" && c=="rock"){

        uRock.classList.add("hide");
       
      
        cPaper.classList.add("hide");
        uScissors.classList.add("hide");
        cScissors.classList.add("hide");


        uPaper.classList.remove("hide");
        cRock.classList.remove("hide");

    }
    else if(u=="scissors" && c=="rock"){


        uRock.classList.add("hide");
      
        uPaper.classList.add("hide");
        cPaper.classList.add("hide");
       
        cScissors.classList.add("hide");


        uScissors.classList.remove("hide");
        cRock.classList.remove("hide");

    }
    else if(u=="scissors" && c=="paper"){

        uRock.classList.add("hide");
        cRock.classList.add("hide");
        uPaper.classList.add("hide");
        
       
        cScissors.classList.add("hide");


        uScissors.classList.remove("hide");
        cPaper.classList.remove("hide");

    }

}


reset.addEventListener("click", resetGame)