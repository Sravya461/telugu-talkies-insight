
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
    }
  ];

  return (
    <section className="py-16 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            24 Advanced <span className="text-orange-400">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover all the powerful features that make Telugu Cinema Hub your ultimate movie companion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-purple-500/30 hover:bg-white/20 transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-orange-500 to-purple-500 p-2 rounded-lg text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-16">
          <Card className="bg-white/10 backdrop-blur-md border-purple-500/30 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-orange-400 text-2xl">Try Our Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="bg-purple-500 hover:bg-purple-600"
                >
                  {isDarkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                  Toggle Theme
                </Button>
                <Button 
                  onClick={() => setNotifications(!notifications)}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  {notifications ? 'Disable' : 'Enable'} Notifications
                </Button>
                <Button className="bg-green-500 hover:bg-green-600">
                  <Heart className="h-4 w-4 mr-2" />
                  Add to Favorites
                </Button>
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              
              <div className="text-center">
                <Badge className="bg-orange-400 text-black font-semibold px-4 py-2">
                  {notifications ? 'Notifications Enabled' : 'Notifications Disabled'}
                </Badge>
                <Badge className="bg-purple-400 text-white font-semibold px-4 py-2 ml-2">
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
