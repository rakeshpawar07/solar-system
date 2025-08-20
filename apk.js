
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container hide");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn0 = true;

}

const boxes = document.querySelectorAll('.box');

boxes.forEach(button => {
  button.addEventListener('click', () => {
    console.log("btn was clicked");
    if(turn0){
        button.innerText = "O";
        turn0 = false;
    }
    else{
        button.innerText = "X";
        turn0 = true;
    }
    button.disabled = true;
    checkWinner();

  });
});

const disableBoxes = () =>{
   11144
}



  


const showWinner = (_winner) => {
    msg.innerText = `Congratulations, Winner is,${_winner}`;
    msgContainer.classList.remove("hide");
};



const checkWinner = () => {
    for( let pattern of winPatterns ){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
        
    }

};