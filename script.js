let boxes = document.querySelectorAll(".box");
let turnO = true;//true for player O
let resultContainer= document.querySelector(".result-container")
let result = document.querySelector(".result") 
let newGameBtn = document.querySelector(".new-btn")
let resetBtn= document.querySelector(".reset-btn")
let drawMsg= document.querySelector(".draw-msg")
let count=0
let winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
]
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            
        } else if (!turnO) {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        count++;
        draw();
    })
});
const disableBoxes=() =>{
    for (const box of boxes) {
        box.disabled=true;
    }
}
const enableBoxes=() =>{
    for (const box of boxes) {
        box.disabled=false;
    }
}
const checkWinner=() =>{
   for (let pattern of winningPatterns) {
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "")
      if (pos1 == pos2 && pos2 == pos3) {
        result.innerText = `Winner:${pos1}`;
        resultContainer.classList.remove("hide");
        disableBoxes();
      } 
   }
}

const draw=() =>{
    if (count==9) {
    // result.innerText='Draw'
    // resultContainer.classList.remove("hide");
    // disableBoxes();
        drawMsg.classList.remove("hide-draw")
    }
}

function resetGame(){
    boxes.forEach(box =>{
        box.innerText = "";
    })
    count=0;
    drawMsg.classList.add("hide-draw")
    enableBoxes();
}
newGameBtn.addEventListener("click",()=>{
    resetGame();
    resultContainer.classList.add("hide");
    
})
resetBtn.addEventListener("click",()=>{
    resetGame();
} )

