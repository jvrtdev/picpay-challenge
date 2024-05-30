import { DataSignUpProps } from "@/@types/signup";
import api from "./api";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";


  export const sendDataSignUp = async (data: DataSignUpProps) => {
    return await api.post<DataSignUpProps>("/api/create", data);
    
  };

export default function useSendDataSignUp() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: sendDataSignUp,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    
  })
}
