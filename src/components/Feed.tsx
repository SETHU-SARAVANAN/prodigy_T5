import { useState } from "react";
import PostCard from "./PostCard";
import CreatePost from "./CreatePost";
import UserSuggestions from "./UserSuggestions";
import TrendingTopics from "./TrendingTopics";

const mockPosts = [
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
  },
  {
    id: "2",
    user: {
      name: "Alex Chen",
      username: "alexc",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    content: "Working on a new web project using React and TypeScript. The development experience is getting better every day! Who else is excited about the latest updates? 💻✨",
    timestamp: "4 hours ago",
    likes: 89,
    comments: 23,
    isLiked: true,
    isBookmarked: true
  },
  {
    id: "3",
    user: {
      name: "Emma Wilson",
      username: "emmaw",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    content: "Homemade pasta night! 🍝 There's something so satisfying about making everything from scratch. Recipe in my bio if anyone's interested!",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop",
    timestamp: "6 hours ago",
    likes: 456,
    comments: 34,
    isLiked: false,
    isBookmarked: false
  },
  {
    id: "4",
    user: {
      name: "Marcus Rodriguez",
      username: "marcusr",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    content: "Finally conquered that guitar solo I've been practicing for months! 🎸 The journey of learning music never ends, but these small victories make it all worth it.",
    timestamp: "8 hours ago",
    likes: 167,
    comments: 18,
    isLiked: true,
    isBookmarked: false
  }
];

const Feed = () => {
  const [posts, setPosts] = useState(mockPosts);

  const handleNewPost = (newPost: any) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Hidden on mobile */}
        <div className="hidden lg:block">
          <UserSuggestions />
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <CreatePost onPost={handleNewPost} />
          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Right Sidebar - Hidden on mobile */}
        <div className="hidden lg:block">
          <TrendingTopics />
        </div>
      </div>
    </div>
  );
};

export default Feed;