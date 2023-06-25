import { NextPage } from "next";
import { redirect } from "next/navigation";

const MainPage: NextPage = () => {
  redirect("/ko");
};

export default MainPage;
