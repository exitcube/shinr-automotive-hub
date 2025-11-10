import { ReactNode } from "react";
import Header from "../shinr/header";
import Footer from "../shinr/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
