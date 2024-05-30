'use client'
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button"
import { DataSignUpProps } from "@/@types/signup"
import { SubmitHandler, useForm, Controller } from "react-hook-form"
import useSendDataSignUp, { sendDataSignUp } from "@/services/send-data-signup"
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query"
import api from "@/services/api"
import { toast } from "sonner"
import { useRouter } from "next/navigation"


export default function SignUp(){
  const {
  register,
  handleSubmit,
  watch,
  formState: { errors }, control
  } = useForm<DataSignUpProps>()

  
  const { mutate, isPending, isSuccess, isError, error } = useSendDataSignUp();
  const { push } = useRouter();

  if(isSuccess) {
      toast.success("Sucesso na criacao");

    }
  const onSubmit: SubmitHandler<DataSignUpProps> = (data) => {
    mutate(data);
    
    
  } 

  return(
      <form onSubmit={handleSubmit(onSubmit)}>
         {isPending && toast.info("Criando conta...")}
         {isSuccess && 'eai menor'}
         {isError && toast.error("Erro na criacao")}

        <div className="mb-4">
          <label htmlFor="name">Nome</label>
          <Input id="name" placeholder="Digite seu nome" type="text" 
          {...register("name", {required: true})}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <Input id="email" placeholder="Digite seu email" type="email" 
          {...register("email", {required: true})}
          />
        </div>


        <div className="mb-4">
          <label htmlFor="wallettype">Tipo de conta</label>
          <Controller
            name="wallet_type"
            control={control}
            defaultValue="Costumer"
            render={({ field }) => (
              <Select onValueChange={field.onChange}>
                <SelectTrigger className="">
                  <SelectValue placeholder="Conta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Costumer">Comum</SelectItem>
                  <SelectItem value="Retailer">Empresa</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          
        </div>

        <div className="mb-4">
          <label htmlFor="doctype">Tipo</label>
          <Controller
            name="document_type"
            control={control}
            defaultValue="CPF"
            render={({ field }) => ( 
              <Select onValueChange={field.onChange}>
                <SelectTrigger className="">
                  <SelectValue placeholder="CPF/CNPJ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CPF">CPF</SelectItem>
                  <SelectItem value="CNPJ">CNPJ</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          
        </div>

        <div className="mb-4">
          <label htmlFor="docnumber">Numero CPF/CNPJ</label>
          <Input id="docnumber" placeholder="Numero do documento" type="text"
          {...register("document_number", {required: true})}
          />

        </div>
        <div className="mb-4">
          <label htmlFor="password">Senha</label>
          <Input id="password" placeholder="Senha" type="password"
          {...register("password", {required: true})}
          />
        </div>

        <div className="mb-4">
          <Button type="submit">
            Enviar
          </Button>
        </div>

      </form>
  )
}