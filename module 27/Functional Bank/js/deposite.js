document.getElementById('btn-deposit').addEventListener('click',function(){
    // total deposit amout 
    const newDepositeAmount = getInputValueById('deposit-field'); 
    const previousTotalAmount = getElementValueById('balance');
    const newTotalBalance = previousTotalAmount + newDepositeAmount;
    setElementValueBuId('balance',newTotalBalance);
    // update the depostit amount 
    const previousTotalDeposit = getElementValueById('total-deposit');
    const totalDpositAmount = previousTotalDeposit + newDepositeAmount;
    setElementValueBuId("total-deposit",totalDpositAmount);
    document.getElementById('deposit-field').value = ""; 

})