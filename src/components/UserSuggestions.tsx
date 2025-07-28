import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const suggestedUsers = [
  {
    id: "1",
    name: "David Park",
    username: "davidp",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    mutualFriends: 5,
    isVerified: true
  },
  {
    id: "2",
    name: "Lisa Zhang",
    username: "lisaz",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    mutualFriends: 12,
    isVerified: false
  },
  {
    id: "3",
    name: "Ryan Miller",
    username: "ryanm",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    mutualFriends: 3,
    isVerified: false
  }
];

const UserSuggestions = () => {
  const [followedUsers, setFollowedUsers] = useState<string[]>([]);

  const handleFollow = (userId: string) => {
    setFollowedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <Card className="shadow-card border-0 bg-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Suggested for you</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestedUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-gradient-primary text-white">
                  {user.name[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center space-x-1">
                  <p className="font-semibold text-sm">{user.name}</p>
                  {user.isVerified && (
                    <div className="w-3 h-3 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-[8px] text-white">✓</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  @{user.username} • {user.mutualFriends} mutual friends
                </p>
              </div>
            </div>
            <Button 
              variant={followedUsers.includes(user.id) ? "default" : "outline"} 
              size="sm" 
              className="text-xs"
              onClick={() => handleFollow(user.id)}
            >
              {followedUsers.includes(user.id) ? "Following" : "Follow"}
            </Button>
          </div>
        ))}
        <Button variant="ghost" className="w-full text-primary text-sm mt-4">
          See all suggestions
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserSuggestions;