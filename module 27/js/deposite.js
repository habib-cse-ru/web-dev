document.getElementById('btn-deposit').addEventListener('click',function(){
    console.log("deposite is called ");
// collect previous deposit amount 
    const previousDepositElement = document.getElementById('total-deposit');
    const previousDepositString = previousDepositElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositString);
    // this is to get the input deposit amount 
    const newDepositeElement = document.getElementById('deposit-field');
    const newDepositString = newDepositeElement.value ;
    const newDepositAmount = parseFloat(newDepositString);
    // this is upgrade the value ?
    const totalDeposit = previousDepositAmount + newDepositAmount;
    // this to set the value and upgrade it to eposite fielld 
    previousDepositElement.innerText = totalDeposit;
    newDepositeElement.value = ""; 
    // get the main the total balance 
    const balanceElement = document.getElementById('balance');
    const balanceString = balanceElement.innerText;
    const balanceAmount = parseFloat(balanceString);
    const newBalance = balanceAmount + newDepositAmount;
    balanceElement.innerText = newBalance;

})