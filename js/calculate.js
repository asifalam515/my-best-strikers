document.getElementById('calculate-btn').addEventListener('click',function(){
    
    const perPlayerCost=getValueFromInputById('per-player-field')

// Player number 
const playerList=document.getElementById('player-list')



let list = playerList.childNodes;
let extraList=list.length
let liNumber=extraList-1


 

    // number of player:
    const numberOfPlayer=liNumber
    
    // take player expense field
    const playerExpenseElement=document.getElementById('player-expense-field')
   
   
 

// calculation:
const playerCost=(numberOfPlayer*perPlayerCost)+0



// set to the player expense field:
playerExpenseElement.innerText=playerCost
})

