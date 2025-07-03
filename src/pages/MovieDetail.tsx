
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Calendar, Clock, Users, Play, ArrowLeft, Share2, Heart, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { movies } from '@/data/movies';

const MovieDetail = () => {
  const { id } = useParams();
  
  // Find the movie by ID from the movies data
  const movie = movies.find(m => m.id === parseInt(id || '1')) || movies[0];

  const handleTrailerClick = () => {
    if (movie.trailerUrl) {
      window.open(movie.trailerUrl, '_blank');
    } else {
      // Fallback YouTube search
      const searchQuery = `${movie.title} ${movie.year} trailer`;
      window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  const [isLiked, setIsLiked] = React.useState(false);
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${movie.title} - Telugu Cinema Hub Review`,
          text: `Check out this amazing Telugu movie: ${movie.title} (${movie.year}) - Rating: ${movie.rating}/10`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Movie link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    // Here you could add API call to save like status
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Here you could add API call to save bookmark status
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-800">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/reviews" className="flex items-center space-x-2">
              <ArrowLeft className="h-6 w-6 text-cyan-400" />
              <span className="text-white font-medium">Back to Reviews</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleShare}
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLike}
                className={`border-cyan-500/30 hover:bg-cyan-500/20 ${isLiked ? 'bg-red-500 text-white' : 'text-cyan-400'}`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleBookmark}
                className={`border-cyan-500/30 hover:bg-cyan-500/20 ${isBookmarked ? 'bg-blue-500 text-white' : 'text-cyan-400'}`}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Movie Hero Section */}
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Movie Poster */}
            <div className="lg:col-span-1">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Movie Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {movie.title}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2 bg-cyan-500 rounded-full px-4 py-2">
                    <Star className="h-5 w-5 text-white fill-white" />
                    <span className="text-white font-bold text-lg">{movie.rating}</span>
                  </div>
                  <Badge className="bg-indigo-500 text-white font-semibold px-3 py-1">
                    {movie.language}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-cyan-400 font-semibold">Year</div>
                  <div className="text-white">{movie.year}</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 font-semibold">Duration</div>
                  <div className="text-white">{movie.duration}</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 font-semibold">Box Office</div>
                  <div className="text-white">{movie.boxOffice || 'N/A'}</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 font-semibold">Budget</div>
                  <div className="text-white">{movie.budget || 'N/A'}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {movie.genre.map((g) => (
                  <Badge key={g} variant="outline" className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10">
                    {g}
                  </Badge>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-2">Director</h3>
                  <p className="text-white text-lg">{movie.director}</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-2">Starring</h3>
                  <p className="text-white text-lg">{movie.cast.join(', ')}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={handleTrailerClick}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Watch Trailer
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20"
                >
                  Add to Watchlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Review Section */}
      <section className="py-12 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Full Review</h2>
            <Card className="bg-white/10 backdrop-blur-md border-cyan-500/30">
              <CardContent className="p-8">
                <p className="text-gray-200 text-lg leading-relaxed">
                  {movie.description} This {movie.language} film directed by {movie.director} showcases excellent cinematography and compelling performances from {movie.cast.join(', ')}. The movie delivers on multiple fronts with its engaging storyline, technical brilliance, and memorable characters. With a runtime of {movie.duration}, it maintains good pacing throughout and keeps the audience engaged. The film's rating of {movie.rating}/10 reflects its quality and audience appreciation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Movie Details Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Movie Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-cyan-500/30">
                <CardContent className="p-6">
                  <h3 className="text-cyan-400 font-semibold mb-4">Production Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Producer:</span>
                      <span className="text-white">{movie.producer || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Music:</span>
                      <span className="text-white">{movie.music || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Cinematography:</span>
                      <span className="text-white">{movie.cinematography || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Release Date:</span>
                      <span className="text-white">{movie.releaseDate || `${movie.year}`}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-cyan-500/30">
                <CardContent className="p-6">
                  <h3 className="text-cyan-400 font-semibold mb-4">Box Office Performance</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Budget:</span>
                      <span className="text-white">{movie.budget || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Box Office:</span>
                      <span className="text-white">{movie.boxOffice || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Rating:</span>
                      <span className="text-white">{movie.rating}/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Language:</span>
                      <span className="text-white">{movie.language}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
