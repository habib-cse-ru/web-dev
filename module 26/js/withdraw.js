// first call the deposite id 
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // console.log("Id is clicked ");
    const withdrawtField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawtField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    // console.log(depositeAmount);
    // update the deposite amount 
    const totalWithdrawElement = document.getElementById('total-withdraw');
    const previousTotalWithdrawString = totalWithdrawElement.innerText;
    const previousTotalWithdraw= parseFloat(previousTotalWithdrawString);
    const totalWithdraw = withdrawAmount + previousTotalWithdraw;
    totalWithdrawElement.innerText =  totalWithdraw;
    // this is the total money section 
    const totalBalanceElement = document.getElementById('total-amount');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    newTotalBalance = totalBalance - withdrawAmount;
    totalBalanceElement.innerText = newTotalBalance;
    // set the deposite to zero 
    withdrawtField.value = "";



})