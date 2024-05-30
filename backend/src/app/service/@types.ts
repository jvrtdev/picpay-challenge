//tipagem de como chega o req.body 

export interface CreateAccountTypes {
  id?: number;
  email: string;
  password: string;
  document_type: any;
  document_number: string;
  name: string;
  wallet_type?: any;
}

export interface WalletReqTypes{
  id: number;     
  balance: number;
  owner_id: number;
  wallet_type: any;   
}

export interface TransferReqTypes{
  amount: number;
  src_wallet_id: number;
  destination_wallet_id: number;
}