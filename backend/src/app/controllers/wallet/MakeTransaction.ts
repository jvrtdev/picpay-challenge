import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { Request, Response } from "express";



export default async function MakeTransaction(req: Request, res: Response) {
  const prisma = new PrismaClient()
  try{
    const newTransaction = await prisma.transaction.create({
      data: {
        amount: req.body.amount,
        sourceWalletId: req.body.wallet_id,
        destinationWalletId: req.body.destination_wallet_id,
      }
    })

    const searchDestinationBalanceWallet = await prisma.wallet.findUnique({
      where: {
        id: newTransaction.destinationWalletId
      }
    })

    function serviceAddAmount(){
      if(searchDestinationBalanceWallet?.balance != null) {
        return searchDestinationBalanceWallet.balance + newTransaction.amount
      }
      return newTransaction.amount
    }

    

    const addValueOnBalance = await prisma.wallet.update({
      where: {
        id: newTransaction.destinationWalletId
      },
      data: {
        balance: await serviceAddAmount(),
        ownerId: newTransaction.destinationWalletId,
      }
    })

    res.status(201).json(addValueOnBalance)
  }

  catch(error){
    res.status(400).json(error)
  }
}