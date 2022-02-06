document.getElementById('deposit-btn').addEventListener('click',function(){

    const depositAmount = document.getElementById('deposit-amount')
    
    const newDepositAmountInText = depositAmount.value
    const newDepositAmountInNumber = parseFloat(newDepositAmountInText)
    
    
    const totalDepositAmount = document.getElementById('deposit-field')
    const previousDepositTotalInText =  totalDepositAmount.innerText
    const previousDepositTotalInNumber = parseFloat(previousDepositTotalInText)
    
    const newDepositTotal = previousDepositTotalInNumber + newDepositAmountInNumber 
    
    
    
    totalDepositAmount.innerText = newDepositTotal;
    
    depositAmount.value =''
    
    //update balance
    
    const balanceTotal = document.getElementById('balance-amount')
    const previousBalanceInText = balanceTotal.innerText
    const previousBalanceInNumber =parseFloat(previousBalanceInText)
    const newBalance = previousBalanceInNumber + newDepositAmountInNumber
    
    balanceTotal.innerText = newBalance
    
            
    })
    
    
    document.getElementById('withdraw-btn').addEventListener('click',function(){
    
    const withdrawAmount = document.getElementById('withdraw-amount')
    
    const newWithdrawAmountInText = withdrawAmount.value
    
    const newWithdrawAmountInNumber = parseFloat(newWithdrawAmountInText)
    
    const totalWithdrawField =  document.getElementById('withdraw-field')
    
    const previousWithdrawFieldInText = totalWithdrawField.innerText
    
    
    const previousWithdrawFieldInNumber = parseFloat(previousWithdrawFieldInText)
    
    
    const newWithdrawFieldAmount = newWithdrawAmountInNumber + previousWithdrawFieldInNumber  ;
    
    totalWithdrawField.innerText= newWithdrawFieldAmount
    
    withdrawAmount.value = ''
    
    const balance = document.getElementById('balance-amount')
    const balanceInText = balance.innerText
    const balanceInNumber = parseFloat(balanceInText)
    
    const newBalance = balanceInNumber -  newWithdrawAmountInNumber
    balance.innerText = newBalance
    
    })