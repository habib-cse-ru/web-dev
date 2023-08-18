
// function to call the  inoute  field value 
function getInputValueById(inputId){
    const amountField = document.getElementById(inputId);
    const amountString = amountField.value;
    const amount = parseFloat(amountString);
    return amount;
}
// function to get the value of element by id 
function getElementValueById(elementId){
    const amountElement = document.getElementById(elementId);
    const amountString = amountElement.innerText;
    const amount = parseFloat(amountString);
    return amount;
}
// function to update the value of money 
function setElementValueBuId(elementId, value){
    const amountElement = document.getElementById(elementId);
    amountElement.innerText = value;
}






