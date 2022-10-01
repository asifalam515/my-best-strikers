function getValueFromInputById(inputId){
    const element=document.getElementById(inputId)
    const elementVauleString=element.value;
    const elementValue=parseFloat(elementVauleString)
    element.value=''
    return elementValue

}

function getFieldValueById(fieldId){
    const element=document.getElementById(fieldId)
    const expenseValueString=element.innerText
    const expense=parseFloat(expenseValueString)
   
    return expense;
}