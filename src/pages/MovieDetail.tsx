
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Calendar, Clock, Users, Play, ArrowLeft, Share2, Heart, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const MovieDetail = () => {
  const { id } = useParams();
  
  // Sample movie data - in a real app, this would be fetched based on the ID
  const movie = {
    id: parseInt(id || '1'),
    title: "RRR",
    director: "S.S. Rajamouli",
    year: 2022,
    rating: 9.2,
    genre: ["Action", "Drama", "History"],
    description: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920s. Set in the backdrop of British colonial rule, the film showcases the friendship between Alluri Sitarama Raju and Komaram Bheem, two real-life heroes who fought against the oppressive regime.",
    image: "https://images.unsplash.com/photo-1489599849989-7a5e91bf0d82?w=800&h=600&fit=crop",
    cast: ["N.T. Rama Rao Jr.", "Ram Charan", "Alia Bhatt", "Ajay Devgan"],
    language: "Telugu",
    duration: "187 min",
    trailerUrl: "https://www.youtube.com/watch?v=f_vbAtFSEc0",
    boxOffice: "₹1,200 Cr",
    budget: "₹550 Cr",
    releaseDate: "25 March 2022",
    producer: "D. V. V. Danayya",
    music: "M. M. Keeravani",
    cinematography: "K. K. Senthil Kumar",
    fullReview: "RRR is a spectacular visual feast that showcases the best of Indian cinema. S.S. Rajamouli has crafted an epic tale that combines history, mythology, and pure entertainment in a way that few filmmakers can achieve. The film's technical brilliance, combined with powerhouse performances from Ram Charan and Jr. NTR, makes it a cinematic experience that transcends language barriers. The action sequences are choreographed with precision, and the emotional core of the story resonates deeply. This is Telugu cinema at its finest."
  };

  const handleTrailerClick = () => {
    if (movie.trailerUrl) {
      window.open(movie.trailerUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-6 w-6 text-orange-400" />
              <span className="text-white font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="border-orange-500/30 text-orange-400">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-orange-500/30 text-orange-400">
                <Bookmark className="h-4 w-4" />
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
                  <div className="flex items-center space-x-2 bg-orange-500 rounded-full px-4 py-2">
                    <Star className="h-5 w-5 text-white fill-white" />
                    <span className="text-white font-bold text-lg">{movie.rating}</span>
                  </div>
                  <Badge className="bg-purple-500 text-white font-semibold px-3 py-1">
                    {movie.language}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-orange-400 font-semibold">Year</div>
                  <div className="text-white">{movie.year}</div>
                </div>
                <div className="text-center">
                  <div className="text-orange-400 font-semibold">Duration</div>
                  <div className="text-white">{movie.duration}</div>
                </div>
                <div className="text-center">
                  <div className="text-orange-400 font-semibold">Box Office</div>
                  <div className="text-white">{movie.boxOffice}</div>
                </div>
                <div className="text-center">
                  <div className="text-orange-400 font-semibold">Budget</div>
                  <div className="text-white">{movie.budget}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {movie.genre.map((g) => (
                  <Badge key={g} variant="outline" className="border-orange-400/30 text-orange-400 bg-orange-400/10">
                    {g}
                  </Badge>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-orange-400 font-semibold mb-2">Director</h3>
                  <p className="text-white text-lg">{movie.director}</p>
                </div>
                <div>
                  <h3 className="text-orange-400 font-semibold mb-2">Starring</h3>
                  <p className="text-white text-lg">{movie.cast.join(', ')}</p>
                </div>
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
                  className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
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
            <Card className="bg-white/10 backdrop-blur-md border-purple-500/30">
              <CardContent className="p-8">
                <p className="text-gray-200 text-lg leading-relaxed">
                  {movie.fullReview}
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
              <Card className="bg-white/10 backdrop-blur-md border-purple-500/30">
                <CardContent className="p-6">
                  <h3 className="text-orange-400 font-semibold mb-4">Production Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Producer:</span>
                      <span className="text-white">{movie.producer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Music:</span>
                      <span className="text-white">{movie.music}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Cinematography:</span>
                      <span className="text-white">{movie.cinematography}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Release Date:</span>
                      <span className="text-white">{movie.releaseDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-purple-500/30">
                <CardContent className="p-6">
                  <h3 className="text-orange-400 font-semibold mb-4">Box Office Performance</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Budget:</span>
                      <span className="text-white">{movie.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Box Office:</span>
                      <span className="text-white">{movie.boxOffice}</span>
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
