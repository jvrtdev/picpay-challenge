import express, { Request, Response } from 'express';
import cors from 'cors';
import MakeTransaction from './app/controllers/wallet/MakeTransaction';
import UserController from './app/controllers/UserController';
import TransactionController from './app/controllers/TransactionController';
import WalletController from './app/controllers/WalletController';
import Auth from './app/middleware/Auth';

const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send("Api rodando")
})
//user
app.post('/api/create', UserController.CreateAccount);
app.post('/api/login', UserController.LoginAccount);

app.get('/api/user/:id', UserController.GetUserById)
app.get('/api/users', UserController.GetAllUsers)
app.put('/api/user/:id', UserController.UpdateUser)
app.delete('/api/user/:id', UserController.DeleteUser)

//auth


//wallet
app.post('/api/wallet', WalletController.addAmountOnWallet);
app.get('/api/wallet', WalletController.getAllWallets);

//transaction
app.post('/api/transfer', TransactionController.makeTransfer)



export default app;