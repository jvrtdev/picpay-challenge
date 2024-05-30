import Login from "@/components/Login";
import SignUp from "@/components/Sign-up";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Tabs defaultValue="account" className="p-10  flex items-center flex-col">
        <TabsList className="text-black">
          <TabsTrigger value="sign-up">Cadastro</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-up"><SignUp /></TabsContent>
        <TabsContent value="login"><Login /></TabsContent>
      </Tabs>

      
    </main>
  );
}
