function addPlayerById(btnId,nameId){
document.getElementById(btnId).addEventListener('click',function(){
        // 1.where to add
    
const playerList=document.getElementById('player-list')

let list = playerList.childNodes;
let extraList=list.length
let liNumber=extraList-1

if(liNumber<5){
    const li=document.createElement('li')
playerList.appendChild(li)
const name=document.getElementById(nameId).innerText
li.innerText=name
playerList.appendChild(li)
}else{
    alert("please select less than or equal 5 Stiker")
}



  

//    ---------------









})
}
// disbale button
function myFunction(id) {
    document.getElementById(id).disabled = true;
    
  }

  


function getValueFromInputById(inputId){
    const element=document.getElementById(inputId)
    const elementVauleString=element.value;
    const elementValue=parseFloat(elementVauleString)
    if(isNaN(elementValue)){
        return 0;
    }
    else{
        element.value=''
    return elementValue
    }

}

function getFieldValueById(fieldId){
    const element=document.getElementById(fieldId)
    const expenseValueString=element.innerText
    const expense=parseFloat(expenseValueString)
   
    return expense;
}


// --------------



