import { Button } from "./ui/button";
import { Input } from "./ui/input";




export default function Login() {
  return (
    <div>
      <form>
        <div className="mb-4">
          <label htmlFor="login">Login</label>
          <Input type="text" id="login" placeholder="CPF/CNPJ ou Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Senha</label>
          <Input type="password" id="password" placeholder="Digite sua senha" />
        </div>
          <Button type="submit">Enviar</Button>
      </form>
    </div>
  )
}
