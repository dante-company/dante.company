import { API } from "@api";
import { useMutation } from "react-query";

interface Params {
  email: string;
  confirmationCode: string;
}

export const confirm = async (params: Params) => {
  const { data } = await API.post("/newsletters/confirm", params);
  return data;
};

export const useConfirm = () => {
  const mutation = useMutation(confirm);
  return mutation;
};
