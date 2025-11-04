import Footer from "@/components/footer";
import Header from "@/components/header";
import AuthHandler from "@/handlers/auth-handler";
import { Outlet } from "react-router";

export const PublicLayout = () => {
  return (
    <div className="w-full">
      <AuthHandler></AuthHandler>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
