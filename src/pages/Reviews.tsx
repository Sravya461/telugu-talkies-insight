
import React, { useState } from 'react';
import { Search, Award } from 'lucide-react';
import { Input } from '@/components/ui/input';
import MovieCard from '@/components/MovieCard';
import CategoryFilter from '@/components/CategoryFilter';
import { Link } from 'react-router-dom';
import { movies } from '@/data/movies';

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'action', 'drama', 'romance', 'thriller', 'comedy', 'family'];

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         movie.cast.some(actor => actor.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           movie.genre.some(g => g.toLowerCase().includes(selectedCategory));
    
    return matchesSearch && matchesCategory;
  });

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
              <Link to="/reviews" className="text-cyan-400 font-medium">All Reviews</Link>
              <Link to="/top-rated" className="text-white hover:text-cyan-400 transition-colors font-medium">Top Rated</Link>
              <Link to="/latest" className="text-white hover:text-cyan-400 transition-colors font-medium">Latest Movies</Link>
              <Link to="/upcoming" className="text-white hover:text-cyan-400 transition-colors font-medium">Upcoming</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              All Movie <span className="text-cyan-400">Reviews</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of over 500 Telugu movie reviews and ratings
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
                  className="pl-10 bg-white/10 border-cyan-500/30 text-white placeholder-gray-400 h-12"
                />
              </div>
              <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-300 text-lg">
              Showing {filteredMovies.length} movies {searchTerm && `for "${searchTerm}"`}
            </p>
          </div>

          {/* Movies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMovies.slice(0, 20).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          {/* Load More Button */}
          {filteredMovies.length > 20 && (
            <div className="text-center mt-12">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Load More Movies
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
