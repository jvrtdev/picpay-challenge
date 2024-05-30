import { Request, Response } from "express";
import WalletService from "../service/WalletService";
import { addAmountWalletDestinationBalance } from "../functions/transferOperations";


class WalletController {

  async addAmountOnWallet(req: Request, res: Response) {

    try {
      const { id, amount } = req.body;

      const getWallet = await WalletService.getWalletById(id);
      const addBalanceOnWallet = addAmountWalletDestinationBalance(amount, getWallet?.balance?? 0);

      const updatedWallet = await WalletService.updateBalanceWallet(addBalanceOnWallet, id);

      res.status(200).json({
        message: "Quantia adicionada",
        valor: amount,
        saldo: updatedWallet.balance
      })

      
    } catch(error) {
      res.status(400).json(error)
    }
  }

  async getAllWallets(req: Request, res: Response){
    try{
      const getWallets = await WalletService.getWallets();
      res.json(getWallets);
    } catch(error) {
      res.status(400).json(error);
    }
  }
}

export default new WalletController();