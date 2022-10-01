document.getElementById('btn-calculate-total').addEventListener('click',function(){
 const managerCost= getValueFromInputById("manager-input-field")
const coachCost=getValueFromInputById("coach-input-field")


// get total amount field:
const  totalAmountElement=document.getElementById("total-amount")


// get player cost
const playerCostField=document.getElementById('player-expense-field')
const playerExpenseValueString=playerCostField.innerText
const playerExpenseValue=parseFloat(playerExpenseValueString)

// total
const totalCost=playerExpenseValue+managerCost+coachCost
totalAmountElement.innerText=totalCost


})
