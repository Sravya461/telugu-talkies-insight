
import React, { useState } from 'react';
import { Search, Award } from 'lucide-react';
import { Input } from '@/components/ui/input';
import MovieCard from '@/components/MovieCard';
import FeaturedMovie from '@/components/FeaturedMovie';
import CategoryFilter from '@/components/CategoryFilter';
import AdvancedFeatures from '@/components/AdvancedFeatures';
import { Link } from 'react-router-dom';
import { movies, getLatestMovies } from '@/data/movies';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [featuredMovieIndex, setFeaturedMovieIndex] = useState(0);

  const latestMovies = getLatestMovies();
  const featuredMovie = latestMovies[featuredMovieIndex] || movies[0];

  // Auto-rotate featured movie every 2 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedMovieIndex((prevIndex) => 
        (prevIndex + 1) % Math.min(latestMovies.length, 10) // Rotate among first 10 movies
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [latestMovies.length]);

  const categories = ['all', 'action', 'drama', 'romance', 'thriller', 'comedy', 'family'];

  const filteredMovies = latestMovies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         movie.director.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           movie.genre.some(g => g.toLowerCase().includes(selectedCategory));
    return matchesSearch && matchesCategory;
  });

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
              <Link to="/" className="text-orange-400 font-medium">Home</Link>
              <Link to="/reviews" className="text-white hover:text-orange-400 transition-colors font-medium">All Reviews</Link>
              <Link to="/top-rated" className="text-white hover:text-orange-400 transition-colors font-medium">Top Rated</Link>
              <Link to="/latest" className="text-white hover:text-orange-400 transition-colors font-medium">Latest Movies</Link>
              <Link to="/upcoming" className="text-white hover:text-orange-400 transition-colors font-medium">Upcoming</Link>
              <Link to="/contact" className="text-white hover:text-orange-400 transition-colors font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              Discover the Best of <span className="text-orange-400">Telugu Cinema</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your ultimate destination for Telugu movie reviews, ratings, and recommendations. 
              Find your next favorite film from Tollywood's finest collection of 500+ movies.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search movies, directors, actors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-purple-500/30 text-white placeholder-gray-400 h-12"
                />
              </div>
              <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>

          {/* Featured Movie */}
          <FeaturedMovie movie={featuredMovie} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-gray-300">Movies Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">50K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">25+</div>
              <div className="text-gray-300">Years of Cinema</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">100+</div>
              <div className="text-gray-300">Directors Featured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <AdvancedFeatures />

      {/* Movies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Latest Reviews & Ratings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMovies.slice(0, 12).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/reviews">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                View All 500+ Movies
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-purple-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-6 w-6 text-orange-400" />
                <span className="text-xl font-bold text-white">Telugu Cinema Hub</span>
              </div>
              <p className="text-gray-400">
                Your trusted source for Telugu movie reviews and recommendations with 500+ movies covered.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/reviews" className="hover:text-orange-400 transition-colors">Action Movies</Link></li>
                <li><Link to="/reviews" className="hover:text-orange-400 transition-colors">Romance</Link></li>
                <li><Link to="/reviews" className="hover:text-orange-400 transition-colors">Thriller</Link></li>
                <li><Link to="/reviews" className="hover:text-orange-400 transition-colors">Drama</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/reviews" className="hover:text-orange-400 transition-colors">Movie Reviews</Link></li>
                <li><Link to="/top-rated" className="hover:text-orange-400 transition-colors">Ratings</Link></li>
                <li><Link to="/latest" className="hover:text-orange-400 transition-colors">Latest Updates</Link></li>
                <li><Link to="/upcoming" className="hover:text-orange-400 transition-colors">Upcoming Movies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact Us</Link></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Telugu Cinema Hub. All rights reserved. Made for Telugu movie lovers with 500+ movies and 24 advanced features.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
