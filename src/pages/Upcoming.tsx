
import React, { useState } from 'react';
import { Calendar, Clock, Star, Award, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getUpcomingMovies } from '@/data/movies';

const Upcoming = () => {
  const [showAll, setShowAll] = useState(false);
  const upcomingMovies = getUpcomingMovies();
  const movies2025 = upcomingMovies.filter(movie => movie.year === 2025);
  const movies2026 = upcomingMovies.filter(movie => movie.year === 2026);

  const displayedMovies2025 = showAll ? movies2025 : movies2025.slice(0, 10);
  const displayedMovies2026 = showAll ? movies2026 : movies2026.slice(0, 10);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-800">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-cyan-400" />
              <h1 className="text-2xl font-bold text-white">Telugu Cinema Hub</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">Home</Link>
              <Link to="/reviews" className="text-white hover:text-cyan-400 transition-colors font-medium">All Reviews</Link>
              <Link to="/top-rated" className="text-white hover:text-cyan-400 transition-colors font-medium">Top Rated</Link>
              <Link to="/latest" className="text-white hover:text-cyan-400 transition-colors font-medium">Latest Movies</Link>
              <Link to="/upcoming" className="text-cyan-400 font-medium">Upcoming</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming <span className="text-cyan-400">Telugu Movies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get ready for over 100 most anticipated Telugu movies coming in 2025 and 2026.
            </p>
            <div className="mt-6">
              <Badge className="bg-cyan-500 text-white text-lg px-4 py-2">
                {upcomingMovies.length}+ Upcoming Movies
              </Badge>
            </div>
          </div>

          {/* 2025 Movies */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Coming in <span className="text-cyan-400">2025</span>
              <Badge className="ml-4 bg-indigo-500 text-white">{movies2025.length} Movies</Badge>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedMovies2025.map((movie) => (
                <Card key={movie.id} className="bg-white/10 backdrop-blur-md border-cyan-500/30 hover:bg-white/20 transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-cyan-500 text-white font-semibold text-xs">
                        {movie.status}
                      </Badge>
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="bg-indigo-500 text-white font-semibold text-xs">
                        {movie.language}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-bold text-white line-clamp-2">
                        {movie.title}
                      </h4>
                      <div className="flex items-center space-x-1 text-cyan-400 ml-2">
                        <Calendar className="h-3 w-3" />
                        <span className="text-xs font-medium">{movie.releaseDate}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs">Directed by {movie.director}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {movie.genre.slice(0, 2).map((g) => (
                        <Badge key={g} variant="outline" className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 text-xs">
                          {g}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-gray-300 text-xs line-clamp-2">{movie.description}</p>
                    
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400">Starring:</p>
                      <p className="text-xs text-gray-300 line-clamp-1">{movie.cast.join(', ')}</p>
                    </div>
                    
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs py-2">
                      <Eye className="h-3 w-3 mr-1" />
                      Get Notified
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 2026 Movies */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Coming in <span className="text-cyan-400">2026</span>
              <Badge className="ml-4 bg-indigo-500 text-white">{movies2026.length} Movies</Badge>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedMovies2026.map((movie) => (
                <Card key={movie.id} className="bg-white/10 backdrop-blur-md border-cyan-500/30 hover:bg-white/20 transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-cyan-500 text-white font-semibold text-xs">
                        {movie.status}
                      </Badge>
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="bg-indigo-500 text-white font-semibold text-xs">
                        {movie.language}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-bold text-white line-clamp-2">
                        {movie.title}
                      </h4>
                      <div className="flex items-center space-x-1 text-cyan-400 ml-2">
                        <Calendar className="h-3 w-3" />
                        <span className="text-xs font-medium">{movie.releaseDate}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs">Directed by {movie.director}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {movie.genre.slice(0, 2).map((g) => (
                        <Badge key={g} variant="outline" className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 text-xs">
                          {g}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-gray-300 text-xs line-clamp-2">{movie.description}</p>
                    
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400">Starring:</p>
                      <p className="text-xs text-gray-300 line-clamp-1">{movie.cast.join(', ')}</p>
                    </div>
                    
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs py-2">
                      <Eye className="h-3 w-3 mr-1" />
                      Get Notified
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Load More Button */}
          {!showAll && (
            <div className="text-center">
              <Button 
                onClick={() => setShowAll(true)}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Show All {upcomingMovies.length} Upcoming Movies
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Upcoming;
