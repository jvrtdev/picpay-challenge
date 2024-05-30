import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface AppContextProps {
  children: ReactNode;
}

export const AppContext = ({ children }: AppContextProps) => {
  const queryClient = new QueryClient();
  return(
    <>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </>
  )

}