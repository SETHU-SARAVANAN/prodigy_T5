import { useState } from "react";
import AuthPage from "@/components/AuthPage";
import Layout from "@/components/Layout";
import Feed from "@/components/Feed";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser] = useState({
    id: "1",
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    avatar: ""
  });

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AuthPage onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <Layout currentUser={currentUser} onLogout={handleLogout}>
      <Feed />
    </Layout>
  );
};

export default Index;
