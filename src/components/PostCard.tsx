import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Heart, 
  MessageCircle, 
  Share, 
  Bookmark, 
  MoreHorizontal,
  Send
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PostCardProps {
  post: {
    id: string;
    user: {
      name: string;
      username: string;
      avatar?: string;
    };
    content: string;
    image?: string;
    timestamp: string;
    likes: number;
    comments: number;
    isLiked?: boolean;
    isBookmarked?: boolean;
  };
}

const PostCard = ({ post }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked || false);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleComment = () => {
    if (newComment.trim()) {
      // Handle comment submission
      setNewComment("");
      setShowComments(true);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-card border-0 bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-3">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.user.avatar} alt={post.user.name} />
            <AvatarFallback className="bg-gradient-primary text-white">
              {post.user.name[0]}
            </AvatarFallback>
          </Avatar>
          <Link to={`/profile/${post.user.username}`}>
            <div>
              <p className="font-semibold text-sm hover:underline">{post.user.name}</p>
              <p className="text-xs text-muted-foreground">@{post.user.username}</p>
            </div>
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Follow</DropdownMenuItem>
            <DropdownMenuItem>Copy link</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-sm leading-relaxed">{post.content}</p>
      </div>

      {/* Image */}
      {post.image && (
        <div className="relative">
          <img 
            src={post.image} 
            alt="Post content" 
            className="w-full aspect-square object-cover"
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between p-4 pt-3">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={handleLike}
          >
            <Heart 
              className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} 
            />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Share className="h-5 w-5" />
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8"
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          <Bookmark 
            className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} 
          />
        </Button>
      </div>

      {/* Likes and timestamp */}
      <div className="px-4 pb-2">
        <p className="font-semibold text-sm">
          {likes.toLocaleString()} {likes === 1 ? 'like' : 'likes'}
        </p>
        <p className="text-xs text-muted-foreground mt-1">{post.timestamp}</p>
      </div>

      {/* Comments */}
      {showComments && (
        <div className="border-t border-border">
          <div className="p-4 space-y-3">
            {/* Sample comments */}
            <div className="flex items-start space-x-3">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="bg-muted text-xs">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-semibold">johndoe</span> Amazing shot! 🔥
                </p>
              </div>
            </div>
            
            {/* Add comment */}
            <div className="flex items-center space-x-3 pt-2 border-t border-border">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="bg-gradient-primary text-white text-xs">
                  U
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 flex items-center space-x-2">
                <Input
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="border-0 bg-transparent p-0 focus-visible:ring-0"
                  onKeyPress={(e) => e.key === 'Enter' && handleComment()}
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6"
                  onClick={handleComment}
                >
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default PostCard;