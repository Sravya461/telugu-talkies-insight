
import React from 'react';
import { Star, Calendar, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-semibold">{movie.rating}</span>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-yellow-400 text-black font-semibold">
            {movie.language}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
            {movie.title}
          </h3>
          <span className="text-gray-300 text-sm">{movie.year}</span>
        </div>
        <p className="text-gray-400 text-sm">Directed by {movie.director}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {movie.genre.map((g) => (
            <Badge key={g} variant="outline" className="border-yellow-400/30 text-yellow-400">
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
        
        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
          Read Full Review
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
