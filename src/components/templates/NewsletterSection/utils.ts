import axios from "axios";

const KoreanErrorMessage = {
  "Email not found": "인증번호를 보낸 이메일이 없어요.",
  "Email already exists": "이미 등록된 이메일이에요.",
  "Email already confirmed": "이미 인증된 이메일이에요.",
  "Invalid confirmation code": "인증번호가 틀렸어요.",
};

export const getNewsletterErrorMessage = (error: any, locale: string) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.data?.message) {
      const errorMessage = error.response.data.message;
      if (
        locale === "ko" &&
        Object.keys(KoreanErrorMessage).includes(error.response.data.message)
      )
        return KoreanErrorMessage[
          errorMessage as keyof typeof KoreanErrorMessage
        ];
      return error.response.data.message;
    }
  }
  return "Unknown error occurred";
};
