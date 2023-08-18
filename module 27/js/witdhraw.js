document.getElementById('btn-withdraw').addEventListener('click',function(){
    console.log("withdraw is clicded");
    // get the new widthraw amount ?
    const newWithdrawElement = document.getElementById('withdraw-field');
    const newWithdrawString = newWithdrawElement.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);
    // get the total amount in the account 
    const balanceElement = document.getElementById('balance');
    const balanceString = balanceElement.innerText;
    const balanceAmount = parseFloat(balanceString);
    // check if the withdraw amount is bigger then the amount account has 
    if(newWithdrawAmount>balanceAmount){
        alert("YOUUUUUUU  DON'T HAVE THE MONEY !!!!!");
        return;
    }
    // update the total deposite amount and the total amount 
    const previousWithdrawElement = document.getElementById('total-withdraw');
    const previousWithdrawString = previousWithdrawElement.innerText;
    const previousWithdrawAmount  = parseFloat(previousWithdrawString);
    const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    previousWithdrawElement.innerText = totalWithdraw;
    const netBalance = balanceAmount - newWithdrawAmount;
    balanceElement.innerText = netBalance;
    newWithdrawElement.value = "";


})