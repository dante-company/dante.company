import { API } from "@api";
import { useMutation } from "react-query";

interface Params {
  email: string;
  locale?: string;
}

export const register = async (params: Params) => {
  const { data } = await API.post("/newsletters", params);
  return data;
};

export const useRegister = () => {
  const mutation = useMutation(register);
  return mutation;
};
