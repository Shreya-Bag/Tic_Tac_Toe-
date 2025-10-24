const board = document.querySelector('.board');
let turn = "X";
let total_turn =0;
let winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let board_array = new Array(9).fill("E");


//WINNER CHECK

function check_winner(){
    for(let [index0,index1,index2] of winner){
        if(board_array[index0]!="E"&&board_array[index0]===board_array[index1]&& board_array[index1]===board_array[index2]){
            return 1;
        }
    }
    return 0;
}
const printer = (event)=>{
   const element = event.target;
   //whrn board id empty then can place data
   if(board_array[element.id]==="E"){
    total_turn++;
    
    if(turn =='X'){
        element.innerHTML = "X";
        board_array[element.id]="X";
        if(check_winner()){
            board.removeEventListener('click',printer);
            document.getElementById("winningMessage").innerHTML= "Winner is player X";
            return;
        }
        turn = "O";
    }
    else{
        element.innerHTML = "O";
        board_array[element.id]="O";
        if(check_winner()){
            board.removeEventListener('click',printer);
            document.getElementById("winningMessage").innerHTML= "Winner is player O";
            return;
        }
        turn = "X";
    }}
    if(total_turn==9 ){
        document.getElementById("winningMessage").innerHTML= "Match is draw";
    }

}

board.addEventListener('click',printer);

const restart =  document.getElementById("restartButton");
restart.addEventListener("click",()=>{
    const cell = document.getElementsByClassName("cell");
    Array.from(cell).forEach((value)=>{
        value.innerHTML="";
    })
    for(let i=0;i<9;i++){
        board_array[i]="E";
    }
    turn = "X";
    total_turn=0;
    document.getElementById("winningMessage").innerHTML= "";
    board.addEventListener('click',printer);


})