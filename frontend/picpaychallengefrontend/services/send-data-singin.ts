import { DataSingInProps } from "@/@types/signup";
import api from "./api";
import { useMutation } from "@tanstack/react-query";


  const sendDataSignIn = async (data: DataSingInProps) => {
    return await api.post<DataSingInProps>("/api/login", data);
  };

export default function useSendDataSignIn() {
  return useMutation({
    mutationFn: sendDataSignIn
  });
}
