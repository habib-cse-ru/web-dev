document.getElementById('btn-withdraw').addEventListener('click',function(){
    console.log("withdraw is clicked");
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const balanceAmount = getElementValueById('balance');
    // check if the withdraw amount is bigger then the amount account has 
    document.getElementById('withdraw-field').value = "";
    if(newWithdrawAmount>balanceAmount){
        alert("YOUUUUUUU  DON'T HAVE THE MONEY !!!!!");
        return;
    }
    const previousTotalWithdraw = getElementValueById('total-withdraw');
    const newTotalWithdraw = previousTotalWithdraw + newWithdrawAmount;
    setElementValueBuId('total-withdraw',newTotalWithdraw);
    const newTotalBalance = balanceAmount - newWithdrawAmount;
    setElementValueBuId('balance',newTotalBalance);
    document.getElementById('withdraw-field').value = "";



})