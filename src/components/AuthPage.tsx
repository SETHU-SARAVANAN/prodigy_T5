import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Heart, Users, Camera, MessageCircle } from "lucide-react";

interface AuthPageProps {
  onAuthSuccess: () => void;
}

const AuthPage = ({ onAuthSuccess }: AuthPageProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (type: 'login' | 'signup') => {
    setIsLoading(true);
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      onAuthSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex items-center justify-center gap-12">
        {/* Hero Section */}
        <div className="hidden lg:flex flex-col items-center text-white space-y-8 flex-1">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              SocialSphere
            </h1>
            <p className="text-xl text-white/90 max-w-md">
              Connect, share, and discover amazing moments with friends around the world
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Heart className="w-8 h-8 mx-auto mb-3 text-pink-300" />
              <h3 className="font-semibold text-white">Share Moments</h3>
              <p className="text-sm text-white/80 mt-2">Post photos, videos, and stories</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-blue-300" />
              <h3 className="font-semibold text-white">Connect</h3>
              <p className="text-sm text-white/80 mt-2">Follow friends and discover new people</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Camera className="w-8 h-8 mx-auto mb-3 text-green-300" />
              <h3 className="font-semibold text-white">Create</h3>
              <p className="text-sm text-white/80 mt-2">Capture and edit beautiful content</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <MessageCircle className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-semibold text-white">Engage</h3>
              <p className="text-sm text-white/80 mt-2">Like, comment, and interact</p>
            </div>
          </div>
        </div>

        {/* Auth Form */}
        <div className="w-full max-w-md">
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Welcome to SocialSphere
              </CardTitle>
              <CardDescription>
                Join millions of users sharing their stories
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Enter your password" />
                  </div>
                  <Button 
                    variant="gradient" 
                    className="w-full mt-6" 
                    size="lg"
                    onClick={() => handleAuth('login')}
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullname">Full Name</Label>
                    <Input id="fullname" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="Choose a username" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" placeholder="Create a password" />
                  </div>
                  <Button 
                    variant="gradient" 
                    className="w-full mt-6" 
                    size="lg"
                    onClick={() => handleAuth('signup')}
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4 pt-6 border-t">
              <div className="text-center text-sm text-muted-foreground">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;