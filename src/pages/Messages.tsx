import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Search, MoreHorizontal, Send, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockConversations = [
  {
    id: "1",
    user: {
      name: "Sarah Johnson",
      username: "sarahj",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e4ca7c?w=150&h=150&fit=crop&crop=face"
    },
    lastMessage: "Hey! How's the hiking trip going?",
    timestamp: "2m ago",
    unread: 2
  },
  {
    id: "2",
    user: {
      name: "Mike Chen",
      username: "mikechen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    lastMessage: "Thanks for sharing that article!",
    timestamp: "1h ago",
    unread: 0
  },
  {
    id: "3",
    user: {
      name: "Emma Wilson",
      username: "emmaw",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    lastMessage: "Let's catch up soon!",
    timestamp: "3h ago",
    unread: 1
  }
];

const Messages = () => {
  const navigate = useNavigate();
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
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
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="font-bold text-xl">Messages</h1>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto h-[calc(100vh-80px)] flex">
        {/* Conversations List */}
        <div className="w-80 border-r border-border">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search messages..." 
                className="pl-10 bg-muted/50"
              />
            </div>
          </div>
          <div className="space-y-1">
            {mockConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors ${
                  selectedConversation === conversation.id ? 'bg-muted' : ''
                }`}
                onClick={() => setSelectedConversation(conversation.id)}
              >
                <div className="flex items-start space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={conversation.user.avatar} alt={conversation.user.name} />
                    <AvatarFallback className="bg-gradient-primary text-white">
                      {conversation.user.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-sm truncate">{conversation.user.name}</p>
                      <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <div className="bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage 
                      src={mockConversations.find(c => c.id === selectedConversation)?.user.avatar} 
                      alt="User" 
                    />
                    <AvatarFallback className="bg-gradient-primary text-white">
                      {mockConversations.find(c => c.id === selectedConversation)?.user.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">
                      {mockConversations.find(c => c.id === selectedConversation)?.user.name}
                    </p>
                    <p className="text-sm text-muted-foreground">Active now</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                <div className="text-center text-sm text-muted-foreground">
                  Start of conversation
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-2xl px-4 py-2 max-w-xs">
                    Hey! How are you doing?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl px-4 py-2 max-w-xs">
                    I'm doing great! Thanks for asking. How about you?
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button 
                    size="icon" 
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Select a conversation</h3>
                <p className="text-muted-foreground">Choose a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;