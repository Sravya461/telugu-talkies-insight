
import React from 'react';
import { Star, Calendar, Clock, Users, Play, Info } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  director: string;
  year: number;
  rating: number;
  genre: string[];
  description: string;
  image: string;
  cast: string[];
  language: string;
  duration: string;
  trailerUrl?: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const handleTrailerClick = () => {
    if (movie.trailerUrl) {
      window.open(movie.trailerUrl, '_blank');
    }
  };

  const handleReviewClick = () => {
    // Navigate to individual movie review page
    window.location.href = `/movie/${movie.id}`;
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-purple-500/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
            <Star className="h-4 w-4 text-orange-400 fill-orange-400" />
            <span className="text-white font-semibold">{movie.rating}</span>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-orange-400 text-black font-semibold">
            {movie.language}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
            {movie.title}
          </h3>
          <span className="text-gray-300 text-sm">{movie.year}</span>
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
        
        <p className="text-gray-300 text-sm line-clamp-3">{movie.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{movie.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{movie.cast.length} stars</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-xs text-gray-400">Starring:</p>
          <p className="text-sm text-gray-300">{movie.cast.join(', ')}</p>
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={handleTrailerClick}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold"
          >
            <Play className="h-4 w-4 mr-2" />
            Watch Trailer
          </Button>
          <Button 
            onClick={handleReviewClick}
            variant="outline" 
            className="flex-1 border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
          >
            <Info className="h-4 w-4 mr-2" />
            Full Review
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
