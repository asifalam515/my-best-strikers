document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerElement=document.getElementById('per-player-field')
    const perPlayerCostString=perPlayerElement.value;
    const perPlayerCost=parseFloat(perPlayerCostString)


    // number of player:
    const numberOfPlayer=5;
    
    // take player expense field
    const playerExpenseElement=document.getElementById('player-expense-field')
    const previousPlayerExpenseString=playerExpenseElement.innerText
    const previousPlayerExpense=parseFloat(previousPlayerExpenseString)
 

// calculation:
const cost=(numberOfPlayer*perPlayerCost)+previousPlayerExpense

// set to the player expense field:
playerExpenseElement.innerText=cost
    

// clear the input field
    perPlayerElement.value=''
})