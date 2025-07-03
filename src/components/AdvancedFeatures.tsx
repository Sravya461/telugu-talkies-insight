
import React, { useState } from 'react';
import { Search, Filter, Star, Bookmark, Share2, Heart, Download, Eye, Clock, Calendar, Users, Award, TrendingUp, Play, Shuffle, Settings, Bell, Globe, Moon, Sun, Volume2, Maximize, Minimize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AdvancedFeatures = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Advanced Search",
      description: "Search by actor, director, genre, year, or rating"
    },
    {
      icon: <Filter className="h-6 w-6" />,
      title: "Smart Filters",
      description: "Filter movies by multiple criteria simultaneously"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Rating System",
      description: "Rate movies and see aggregated user ratings"
    },
    {
      icon: <Bookmark className="h-6 w-6" />,
      title: "Watchlist",
      description: "Save movies to watch later with personal notes"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Social Sharing",
      description: "Share reviews and movie recommendations"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Favorites",
      description: "Mark movies as favorites for quick access"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Offline Mode",
      description: "Download reviews for offline reading"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Recently Viewed",
      description: "Track your browsing history"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Watch Time Tracker",
      description: "Track total time spent watching movies"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Release Calendar",
      description: "Never miss upcoming movie releases"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Reviews",
      description: "Read and write community-driven reviews"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Awards Tracker",
      description: "Track awards and nominations for movies"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Trending Movies",
      description: "See what's popular in Telugu cinema"
    },
    {
      icon: <Play className="h-6 w-6" />,
      title: "Trailer Integration",
      description: "Watch trailers directly from movie pages"
    },
    {
      icon: <Shuffle className="h-6 w-6" />,
      title: "Random Discovery",
      description: "Discover random movies based on preferences"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Personalization",
      description: "Customize your experience and preferences"
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Notifications",
      description: "Get notified about new releases and reviews"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-language",
      description: "Support for multiple regional languages"
    },
    {
      icon: isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />,
      title: "Dark/Light Mode",
      description: "Toggle between dark and light themes"
    },
    {
      icon: <Volume2 className="h-6 w-6" />,
      title: "Audio Reviews",
      description: "Listen to audio versions of reviews"
    },
    {
      icon: <Maximize className="h-6 w-6" />,
      title: "Full Screen Mode",
      description: "Immersive full-screen viewing experience"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Profiles",
      description: "Create and customize your user profile"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Critics vs Audience",
      description: "Compare critic and audience ratings"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Movie Calendar",
      description: "Plan your movie watching schedule"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Voice Search",
      description: "Search movies using voice commands"
    },
    {
      icon: <Filter className="h-6 w-6" />,
      title: "Advanced Sorting",
      description: "Sort by release date, rating, popularity, alphabetical"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Custom Rating Scale",
      description: "Use different rating systems (5-star, 10-point, etc.)"
    },
    {
      icon: <Bookmark className="h-6 w-6" />,
      title: "Multiple Watchlists",
      description: "Create and organize multiple themed watchlists"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Export Lists",
      description: "Export your movie lists to various formats"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Mood-based Recommendations",
      description: "Get movie suggestions based on your current mood"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Bulk Download",
      description: "Download multiple reviews and data at once"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "View History Analytics",
      description: "Detailed analytics of your viewing patterns"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time-based Filters",
      description: "Filter movies by duration, decade, or era"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Reminder System",
      description: "Set reminders for movie releases and screenings"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Social Groups",
      description: "Join and create movie discussion groups"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Achievement System",
      description: "Unlock badges and achievements for movie watching"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Box Office Tracking",
      description: "Track real-time box office performance"
    },
    {
      icon: <Play className="h-6 w-6" />,
      title: "Video Reviews",
      description: "Watch and create video reviews"
    },
    {
      icon: <Shuffle className="h-6 w-6" />,
      title: "Smart Recommendations",
      description: "AI-powered personalized movie recommendations"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Advanced Preferences",
      description: "Detailed customization of all app features"
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Smart Notifications",
      description: "Intelligent notifications based on your interests"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Regional Content",
      description: "Explore movies from different Telugu regions"
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Custom Themes",
      description: "Create and share custom color themes"
    },
    {
      icon: <Volume2 className="h-6 w-6" />,
      title: "Audio Descriptions",
      description: "Audio descriptions for accessibility"
    },
    {
      icon: <Maximize className="h-6 w-6" />,
      title: "Picture-in-Picture",
      description: "Watch trailers while browsing other content"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Family Accounts",
      description: "Create separate profiles for family members"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Professional Reviews",
      description: "Access reviews from professional critics"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Festival Tracking",
      description: "Track movies in film festivals"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Barcode Scanner",
      description: "Scan movie DVDs/Blu-rays for instant info"
    },
    {
      icon: <Filter className="h-6 w-6" />,
      title: "Content Warnings",
      description: "Filter content based on sensitivity preferences"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Detailed Analytics",
      description: "Comprehensive viewing and rating analytics"
    },
    {
      icon: <Bookmark className="h-6 w-6" />,
      title: "Quick Actions",
      description: "Keyboard shortcuts for faster navigation"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Social Media Integration",
      description: "Share directly to social media platforms"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Wishlist Management",
      description: "Manage movies you want to watch"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Cloud Sync",
      description: "Sync your data across all devices"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Preview Mode",
      description: "Quick preview of movie details without opening"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Session Timer",
      description: "Track how long you spend browsing movies"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Anniversary Tracking",
      description: "Track movie anniversaries and milestones"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaborative Lists",
      description: "Create and share lists with friends"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry News",
      description: "Stay updated with Telugu film industry news"
    }
  ];

  return (
    <section className="py-16 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            58 Advanced <span className="text-accent">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover all the powerful features that make Telugu Cinema Hub your ultimate movie companion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-md border-primary/30 hover:bg-card/80 transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg text-primary-foreground group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-foreground text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-16">
          <Card className="bg-card/50 backdrop-blur-md border-primary/30 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-accent text-2xl">Try Our Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="bg-primary hover:bg-primary/80"
                >
                  {isDarkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                  Toggle Theme
                </Button>
                <Button 
                  onClick={() => setNotifications(!notifications)}
                  className="bg-accent hover:bg-accent/80 text-accent-foreground"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  {notifications ? 'Disable' : 'Enable'} Notifications
                </Button>
                <Button className="bg-secondary hover:bg-secondary/80">
                  <Heart className="h-4 w-4 mr-2" />
                  Add to Favorites
                </Button>
                <Button className="bg-muted hover:bg-muted/80">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              
              <div className="text-center">
                <Badge className="bg-accent text-accent-foreground font-semibold px-4 py-2">
                  {notifications ? 'Notifications Enabled' : 'Notifications Disabled'}
                </Badge>
                <Badge className="bg-primary text-primary-foreground font-semibold px-4 py-2 ml-2">
                  {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
