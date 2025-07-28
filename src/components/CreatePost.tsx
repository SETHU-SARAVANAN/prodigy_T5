import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { 
  Image, 
  Video, 
  Smile, 
  MapPin,
  X
} from "lucide-react";

interface CreatePostProps {
  onPost: (post: any) => void;
}

const CreatePost = ({ onPost }: CreatePostProps) => {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPosting, setIsPosting] = useState(false);

  const handleImageSelect = () => {
    // Simulate image selection
    const sampleImages = [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop"
    ];
    setSelectedImage(sampleImages[Math.floor(Math.random() * sampleImages.length)]);
  };

  const handlePost = async () => {
    if (!content.trim() && !selectedImage) return;
    
    setIsPosting(true);
    
    // Simulate posting delay
    setTimeout(() => {
      const newPost = {
        id: Date.now().toString(),
        user: {
          name: "You",
          username: "yourUsername",
          avatar: ""
        },
        content: content,
        image: selectedImage,
        timestamp: "now",
        likes: 0,
        comments: 0,
        isLiked: false,
        isBookmarked: false
      };
      
      onPost(newPost);
      setContent("");
      setSelectedImage(null);
      setIsPosting(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-card border-0 bg-card">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start space-x-3 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="" alt="Your avatar" />
            <AvatarFallback className="bg-gradient-primary text-white">
              U
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px] border-0 bg-transparent resize-none focus-visible:ring-0 text-base"
              maxLength={500}
            />
          </div>
        </div>

        {/* Selected Image Preview */}
        {selectedImage && (
          <div className="relative mb-4">
            <img 
              src={selectedImage} 
              alt="Selected" 
              className="w-full rounded-lg aspect-square object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-primary"
              onClick={handleImageSelect}
            >
              <Image className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary">
              <Smile className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary">
              <MapPin className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-xs text-muted-foreground">
              {content.length}/500
            </span>
            <Button 
              variant="gradient" 
              size="sm"
              onClick={handlePost}
              disabled={(!content.trim() && !selectedImage) || isPosting}
            >
              {isPosting ? "Posting..." : "Post"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreatePost;