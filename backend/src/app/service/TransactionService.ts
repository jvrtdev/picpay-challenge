import prisma from "../../../prisma/client";
import { TransferReqTypes } from "./@types";


class TransactionService{

  async newTransfer(data: TransferReqTypes){
    return await prisma.transaction.create({
      data: {
        amount: data.amount,
        sourceWalletId: data.src_wallet_id,
        destinationWalletId: data.destination_wallet_id
       }
    })
  }


}

export default new TransactionService();