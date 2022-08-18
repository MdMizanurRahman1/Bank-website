//step 1
document.getElementById('btn-submit').addEventListener('click', function () {
    ///step 2
    const depositInput = document.getElementById('deposit-field');
    const newDepositValueString = depositInput.value;
    const newDepositValue = parseFloat(newDepositValueString);
    //console.log(depositValue);
    //step 3
    const totalValueElement = document.getElementById('total-value');
    const previousTotalValueString = totalValueElement.innerText;
    const previousTotalValue = parseFloat(previousTotalValueString);

    //step 4 add numbers
    const currentDepositTotal = previousTotalValue + newDepositValue;
    totalValueElement.innerText = currentDepositTotal;
    //step 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //step 6 calculate current total balance
    const currentTotalBalance = previousBalanceTotal + newDepositValue;
    balanceTotalElement.innerText = currentTotalBalance;

    // step 7 clear deposit field
    depositInput.value = '';
})