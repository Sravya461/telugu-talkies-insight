
import React from 'react';
import { Star, Calendar, Clock, Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

interface FeaturedMovieProps {
  movie: Movie;
}

const FeaturedMovie: React.FC<FeaturedMovieProps> = ({ movie }) => {
  const handleTrailerClick = () => {
    if (movie.trailerUrl) {
      window.open(movie.trailerUrl, '_blank');
    }
  };

  const handleReviewClick = () => {
    window.location.href = `/movie/${movie.id}`;
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-black/60 to-transparent">
      <div className="absolute inset-0">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-4 mb-4">
            <Badge className="bg-orange-400 text-black font-semibold px-3 py-1">
              Featured Movie
            </Badge>
            <div className="flex items-center space-x-2 bg-black/50 rounded-full px-3 py-1">
              <Star className="h-5 w-5 text-orange-400 fill-orange-400" />
              <span className="text-white font-bold text-lg">{movie.rating}</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {movie.title}
          </h2>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-300">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{movie.year}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>{movie.duration}</span>
            </div>
            <span>•</span>
            <span>Directed by {movie.director}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genre.map((g) => (
              <Badge key={g} variant="outline" className="border-white/30 text-white bg-white/10">
                {g}
              </Badge>
            ))}
          </div>
          
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            {movie.description}
          </p>
          
          <div className="mb-8">
            <p className="text-sm text-gray-400 mb-2">Starring:</p>
            <p className="text-white text-lg">{movie.cast.join(', ')}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={handleTrailerClick}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Trailer
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleReviewClick}
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Info className="h-5 w-5 mr-2" />
              Full Review
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
