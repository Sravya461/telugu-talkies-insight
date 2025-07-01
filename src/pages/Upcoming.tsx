
import React, { useState } from 'react';
import { Calendar, Clock, Star, Award, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Upcoming = () => {
  const upcomingMovies2025 = [
    {
      id: 101,
      title: "Pushpa 2: The Rule",
      director: "Sukumar",
      releaseDate: "March 2025",
      genre: ["Action", "Crime", "Thriller"],
      description: "The continuation of Pushpa's journey as he rises to become a powerful smuggler.",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      cast: ["Allu Arjun", "Fahadh Faasil", "Rashmika Mandanna"],
      language: "Telugu",
      status: "Post-Production"
    },
    {
      id: 102,
      title: "Salaar Part 2",
      director: "Prashanth Neel",
      releaseDate: "June 2025",
      genre: ["Action", "Thriller"],
      description: "The second part of the Salaar saga continues with more intense action.",
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
      cast: ["Prabhas", "Prithviraj Sukumaran", "Shruti Haasan"],
      language: "Telugu",
      status: "Filming"
    },
    {
      id: 103,
      title: "Devara Part 2",
      director: "Koratala Siva",
      releaseDate: "August 2025",
      genre: ["Action", "Drama"],
      description: "The second installment of Jr. NTR's action drama Devara.",
      image: "https://images.unsplash.com/photo-1489599849989-7a5e91bf0d82?w=400&h=600&fit=crop",
      cast: ["Jr. NTR", "Janhvi Kapoor", "Saif Ali Khan"],
      language: "Telugu",
      status: "Pre-Production"
    },
    {
      id: 104,
      title: "Kalki 2898 AD Part 2",
      director: "Nag Ashwin",
      releaseDate: "December 2025",
      genre: ["Sci-Fi", "Action", "Drama"],
      description: "The epic continuation of the futuristic mythology saga.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      cast: ["Prabhas", "Deepika Padukone", "Amitabh Bachchan"],
      language: "Telugu",
      status: "Filming"
    }
  ];

  const upcomingMovies2026 = [
    {
      id: 201,
      title: "RRR 2",
      director: "S.S. Rajamouli",
      releaseDate: "April 2026",
      genre: ["Action", "Drama", "History"],
      description: "The highly anticipated sequel to the blockbuster RRR.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
      cast: ["Ram Charan", "Jr. NTR", "Alia Bhatt"],
      language: "Telugu",
      status: "Pre-Production"
    },
    {
      id: 202,
      title: "Baahubali 3",
      director: "S.S. Rajamouli",
      releaseDate: "October 2026",
      genre: ["Action", "Drama", "Fantasy"],
      description: "The third installment in the epic Baahubali franchise.",
      image: "https://images.unsplash.com/photo-1552057426-c4d48c24e314?w=400&h=600&fit=crop",
      cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
      language: "Telugu",
      status: "Announced"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-orange-400" />
              <h1 className="text-2xl font-bold text-white">Telugu Cinema Hub</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-orange-400 transition-colors font-medium">Home</Link>
              <Link to="/reviews" className="text-white hover:text-orange-400 transition-colors font-medium">All Reviews</Link>
              <Link to="/top-rated" className="text-white hover:text-orange-400 transition-colors font-medium">Top Rated</Link>
              <Link to="/latest" className="text-white hover:text-orange-400 transition-colors font-medium">Latest Movies</Link>
              <Link to="/upcoming" className="text-orange-400 font-medium">Upcoming</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming <span className="text-orange-400">Telugu Movies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get ready for the most anticipated Telugu movies coming in 2025 and 2026.
            </p>
          </div>

          {/* 2025 Movies */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Coming in <span className="text-orange-400">2025</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {upcomingMovies2025.map((movie) => (
                <Card key={movie.id} className="bg-white/10 backdrop-blur-md border-purple-500/30 hover:bg-white/20 transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-orange-500 text-white font-semibold">
                        {movie.status}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-purple-500 text-white font-semibold">
                        {movie.language}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-bold text-white">
                        {movie.title}
                      </h4>
                      <div className="flex items-center space-x-1 text-orange-400">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{movie.releaseDate}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">Directed by {movie.director}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {movie.genre.map((g) => (
                        <Badge key={g} variant="outline" className="border-orange-400/30 text-orange-400 bg-orange-400/10">
                          {g}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-gray-300 text-sm">{movie.description}</p>
                    
                    <div className="space-y-2">
                      <p className="text-xs text-gray-400">Starring:</p>
                      <p className="text-sm text-gray-300">{movie.cast.join(', ')}</p>
                    </div>
                    
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                      <Eye className="h-4 w-4 mr-2" />
                      Get Notified
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 2026 Movies */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Coming in <span className="text-orange-400">2026</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingMovies2026.map((movie) => (
                <Card key={movie.id} className="bg-white/10 backdrop-blur-md border-purple-500/30 hover:bg-white/20 transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-orange-500 text-white font-semibold">
                        {movie.status}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-purple-500 text-white font-semibold">
                        {movie.language}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-bold text-white">
                        {movie.title}
                      </h4>
                      <div className="flex items-center space-x-1 text-orange-400">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{movie.releaseDate}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">Directed by {movie.director}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {movie.genre.map((g) => (
                        <Badge key={g} variant="outline" className="border-orange-400/30 text-orange-400 bg-orange-400/10">
                          {g}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-gray-300 text-sm">{movie.description}</p>
                    
                    <div className="space-y-2">
                      <p className="text-xs text-gray-400">Starring:</p>
                      <p className="text-sm text-gray-300">{movie.cast.join(', ')}</p>
                    </div>
                    
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                      <Eye className="h-4 w-4 mr-2" />
                      Get Notified
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upcoming;
