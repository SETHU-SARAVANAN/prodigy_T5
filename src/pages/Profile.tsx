import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "@/components/PostCard";
import { ArrowLeft, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockProfile = {
  id: "1",
  name: "Sarah Johnson",
  username: "sarahj",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e4ca7c?w=150&h=150&fit=crop&crop=face",
  bio: "Nature lover 🌲 | Photographer 📸 | Adventure seeker ⛰️",
  followers: 1254,
  following: 891,
  posts: 287,
  isVerified: true
};

const mockUserPosts = [
  {
    id: "1",
    user: {
      name: "Sarah Johnson",
      username: "sarahj",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e4ca7c?w=150&h=150&fit=crop&crop=face"
    },
    content: "Just finished an amazing sunrise hike! The view from the top was absolutely breathtaking. Nothing beats starting the day in nature 🌅⛰️ #hiking #sunrise #nature",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    timestamp: "2 hours ago",
    likes: 234,
    comments: 12,
    isLiked: false,
    isBookmarked: false
  }
];

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isFollowing, setIsFollowing] = useState(false);

  // Get current user data from navigation state or use mock data
  const currentUser = location.state?.currentUser || {
    id: "1",
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    avatar: ""
  };

  // Use current user data if viewing own profile, otherwise use mock data
  const isOwnProfile = username === currentUser.username;
  const profile = isOwnProfile ? {
    id: currentUser.id,
    name: currentUser.name,
    username: currentUser.username,
    avatar: currentUser.avatar,
    bio: "Welcome to my profile! 👋",
    followers: 42,
    following: 38,
    posts: 12,
    isVerified: false
  } : mockProfile;

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="font-bold text-xl">{profile.name}</h1>
              <p className="text-sm text-muted-foreground">{profile.posts} posts</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Profile Info */}
        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <Avatar className="h-20 w-20">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback className="bg-gradient-primary text-white text-xl">
                {profile.name[0]}
              </AvatarFallback>
            </Avatar>
            {!isOwnProfile && (
              <div className="flex space-x-2">
                <Button 
                  variant={isFollowing ? "outline" : "default"}
                  onClick={handleFollow}
                >
                  {isFollowing ? "Following" : "Follow"}
                </Button>
                <Button variant="outline">Message</Button>
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h2 className="font-bold text-xl">{profile.name}</h2>
              {profile.isVerified && (
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">✓</span>
                </div>
              )}
            </div>
            <p className="text-muted-foreground">@{profile.username}</p>
            <p className="mt-2">{profile.bio}</p>
          </div>

          <div className="flex space-x-8">
            <div className="text-center">
              <p className="font-bold text-lg">{profile.posts.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">{profile.followers.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">{profile.following.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Following</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="posts" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="replies">Replies</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="space-y-6 mt-6">
            {mockUserPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </TabsContent>
          
          <TabsContent value="replies" className="mt-6">
            <div className="text-center py-8 text-muted-foreground">
              <p>No replies yet</p>
            </div>
          </TabsContent>
          
          <TabsContent value="likes" className="mt-6">
            <div className="text-center py-8 text-muted-foreground">
              <p>Liked posts appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;