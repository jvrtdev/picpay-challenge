import { Request, Response } from "express";
import TransactionService from "../service/TransactionService";
import WalletService from "../service/WalletService";
import { addAmountWalletDestinationBalance, removeAmountWalletSourceBalance } from "../functions/transferOperations";


class TransactionController {
  
  async makeTransfer(req: Request, res: Response) {
    try {
      const newTransfer = await TransactionService.newTransfer(req.body);
      const destinationWallet = await WalletService.getWalletById(newTransfer.destinationWalletId);
      const sourceWallet = await WalletService.getWalletById(newTransfer.sourceWalletId);
      
      const newValueBalanceSrcWallet = removeAmountWalletSourceBalance(newTransfer.amount, sourceWallet?.balance?? 0);
      const newValueBalanceDestinationWallet = addAmountWalletDestinationBalance(newTransfer.amount, destinationWallet?.balance?? 0);

      const updatedWalletSrc = await WalletService.updateBalanceWallet(newValueBalanceSrcWallet, newTransfer.sourceWalletId);
      const updatedWalletDestination = await WalletService.updateBalanceWallet(newValueBalanceDestinationWallet, newTransfer.destinationWalletId);

      return res.json({
        message: "Transferencia concluida!",
        destinatario: updatedWalletDestination,
        remetente: updatedWalletSrc,
        valor: newTransfer.amount
      })

    } catch(error) {
      return res.status(400).json( error );
    }
  }
  
}

export default new TransactionController();