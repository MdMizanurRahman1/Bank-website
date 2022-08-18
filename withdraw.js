

//step 1
document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);


    //step 7
    withdrawField.value = '';


    if (isNaN(newWithdrawAmount)) {
        alert('Please input a number')
        return;
    }

    //step 3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalAmountString = withdrawTotalElement.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalAmountString);



    //step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Insufficient Amount');
        return;
    }
    //step 4
    const currentWithdrawTotal = previousWithdrawTotalAmount + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    //step 6 calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;


    //step 6-5 new balance set
    balanceTotalElement.innerText = newBalanceTotal;



})