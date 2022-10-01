document.getElementById('calculate-btn').addEventListener('click',function(){
    
    const perPlayerCost=getValueFromInputById('per-player-field')


    // number of player:
    const numberOfPlayer=5;
    
    // take player expense field
    const playerExpenseElement=document.getElementById('player-expense-field')
    // const previousPlayerExpenseString=playerExpenseElement.innerText
    const previousPlayerExpense=getFieldValueById('player-expense-field')
   
 

// calculation:
const playerCost=(numberOfPlayer*perPlayerCost)+previousPlayerExpense



// set to the player expense field:
playerExpenseElement.innerText=playerCost
})
