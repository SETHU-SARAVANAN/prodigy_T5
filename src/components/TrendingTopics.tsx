import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const trendingTopics = [
  {
    id: "1",
    tag: "#WebDevelopment",
    posts: "12.4K posts",
    growth: "+15%"
  },
  {
    id: "2",
    tag: "#Photography",
    posts: "8.9K posts",
    growth: "+8%"
  },
  {
    id: "3",
    tag: "#Travel",
    posts: "15.2K posts",
    growth: "+23%"
  },
  {
    id: "4",
    tag: "#Fitness",
    posts: "6.7K posts",
    growth: "+12%"
  },
  {
    id: "5",
    tag: "#Cooking",
    posts: "4.3K posts",
    growth: "+5%"
  }
];

const TrendingTopics = () => {
  return (
    <div className="space-y-6">
      <Card className="shadow-card border-0 bg-card">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Trending Now</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={topic.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <div className="flex items-center space-x-3">
                <span className="text-lg font-bold text-muted-foreground">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-sm text-primary">{topic.tag}</p>
                  <p className="text-xs text-muted-foreground">{topic.posts}</p>
                </div>
              </div>
              <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                {topic.growth}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-card border-0 bg-card">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 cursor-pointer hover:shadow-md transition-shadow">
            <p className="font-semibold text-sm">Create a Story</p>
            <p className="text-xs text-muted-foreground mt-1">Share a moment that disappears in 24h</p>
          </div>
          <div className="p-3 rounded-lg bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 cursor-pointer hover:shadow-md transition-shadow">
            <p className="font-semibold text-sm">Go Live</p>
            <p className="text-xs text-muted-foreground mt-1">Start a live video with your followers</p>
          </div>
          <div className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 cursor-pointer hover:shadow-md transition-shadow">
            <p className="font-semibold text-sm">Create Event</p>
            <p className="text-xs text-muted-foreground mt-1">Invite friends to an upcoming event</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendingTopics;