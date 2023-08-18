// first call the deposite id 
document.getElementById('btn-deposite').addEventListener('click',function(){
    // console.log("Id is clicked ");
    // get the deposite amount 
    const depositField = document.getElementById('deposite-field');
    const depositeAmountString = depositField.value;
    const depositeAmount = parseFloat(depositeAmountString);
    // console.log(depositeAmount);
    // update the deposite amount 
    const totalDepositeElement = document.getElementById('total-deposite');
    const previousTotalDepositeString = totalDepositeElement.innerText;
    const previousTotalDeposite = parseFloat(previousTotalDepositeString);
    const totalDeposite = depositeAmount + previousTotalDeposite;
    totalDepositeElement.innerText =  totalDeposite;
    // this is the total money section 
    const totalBalanceElement = document.getElementById('total-amount');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    newTotalBalance = totalBalance + depositeAmount;
    totalBalanceElement.innerText = newTotalBalance;
    // set the deposite to zero 
    depositField.value = "";



})