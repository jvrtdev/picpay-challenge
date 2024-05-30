export function addAmountWalletDestinationBalance(amount: number, balanceDestinationId: number){
  if(balanceDestinationId != null) {
    return balanceDestinationId + amount;
  }
  return amount;
}

export function removeAmountWalletSourceBalance(amountTranfer: number, balance: number) {
  if(balance != null){
    return balance - amountTranfer
  }
  return 0
}