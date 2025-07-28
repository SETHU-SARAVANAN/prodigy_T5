import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
  currentUser: any;
  onLogout: () => void;
}

const Layout = ({ children, currentUser, onLogout }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentUser={currentUser} onLogout={onLogout} />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;