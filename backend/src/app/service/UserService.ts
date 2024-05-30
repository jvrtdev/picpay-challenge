import prisma from "../../../prisma/client";
import { CreateAccountTypes, WalletReqTypes } from "./@types";

class UserService {
  
  async createAccount(data: CreateAccountTypes){
    return await prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        documentType: data.document_type,
        documentNumber: data.document_number,
        name: data.name,
      }
    })
  }


  async getUserById(userId: number){
    return await prisma.user.findUnique({
      where: {
        id: +userId
      }
    })
  }

  async loginUser(login: string, password: string) {
    if(login.includes('@')){
      return await prisma.user.findUnique({
            where: {
              email: login,
              password: password 
            }
          })
    }
    return await prisma.user.findUnique({
      where: {
        documentNumber: login,
        password: password
      }
    })
    
  }

  async getAllUsers(){
    return await prisma.user.findMany();
  }

  async updateUser(id: number, data: CreateAccountTypes){
    return await prisma.user.update({
      where: { id },
      data,
    })
  }

  async deleteUser(id: number){
    await prisma.wallet.delete({
      where: {
        id: id,
        ownerId: id
      }
    })
    return await prisma.user.delete({
      where: { id }
    })
  }
  
}

export default new UserService();