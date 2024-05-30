import prisma from "../../../prisma/client";
import { WalletReqTypes } from "./@types";


class WalletService {

  async createWallet(data: WalletReqTypes){
    return await prisma.wallet.create({
      data: {
        id: data.id,
        balance: 0,
        ownerId: data.id,
        type: data.wallet_type
      }
    })
  }


  async getWalletById(id: number){
    return await prisma.wallet.findUnique({
      where: {
        id: id
      }
    })
  }
  async getWallets(){
    return await prisma.wallet.findMany()
  }

  async updateBalanceWallet(amount: number, id: number) {
    return await prisma.wallet.update({
      where: {
        id: id 
      },
      data: {
        balance: amount
      }
    })
  }

}

export default new WalletService();