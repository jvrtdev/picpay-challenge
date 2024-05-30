import { Request, Response } from "express";
import UserService from "../service/UserService";
import WalletService from "../service/WalletService";
import { generateToken } from "../functions/jwt";



class UserController {

  async CreateAccount(req: Request, res: Response){
    const data = req.body;
    
    try {
      const newUser = await UserService.createAccount(data);

      const newWallet = await WalletService.createWallet(
        {
          id: newUser.id,
          balance: 0,
          owner_id: newUser.id,
          wallet_type: req.body.wallet_type
        }
      )
      return res.json({"Usuario criado com sucesso!": [newUser, newWallet]});

    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  async LoginAccount(req: Request, res: Response) {
    const data = req.body;

    try{
      const findUser = await UserService.loginUser(data.login, data.password);
      
      if(findUser !== null){
        const payload = {id: findUser?.id, docnumber: findUser?.documentNumber, password: findUser?.password}
        const newtoken =  generateToken(payload);
        return res.status(202).setHeader('Authorization', newtoken).json(findUser);
      }
      return res.status(401).send("Login ou senha incorretos ou inexistentes")

    } catch(error) {
      return res.status(400).json(error)
    }

  }

  async GetAllUsers(req: Request, res: Response){
    try{
      const allUsers = await UserService.getAllUsers();
      return res.status(200).json(allUsers);
    
    }catch (error){
      return res.status(400).json({"Erro": error});
    } 
  }

  async GetUserById(req: Request, res: Response){
    try{
      const paramsId = +req.params.id;

      const newUserId = await UserService.getUserById(paramsId);
      
      return res.json(newUserId);
    } catch (error){
      return res.status(400).json({ erro: error})
    }
  }

  async UpdateUser(req:Request, res: Response){
    try{
      const paramsId = +req.params.id;

      const updatedUser = await UserService.updateUser(paramsId, req.body);

      return res.json(updatedUser);

    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async DeleteUser(req: Request, res: Response){
    try{
      const paramsId = +req.params.id;

      const deletedUser = await UserService.deleteUser(paramsId);

      return res.json(deletedUser);
    } catch (error) {
      return res.status(400).json(error)
    }
  }

}

export default new UserController();