
import React, { useState } from 'react';
import { Search, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MovieCard from '@/components/MovieCard';
import CategoryFilter from '@/components/CategoryFilter';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allMovies = [
    {
      id: 1,
      title: "RRR",
      director: "S.S. Rajamouli",
      year: 2022,
      rating: 9.2,
      genre: ["Action", "Drama", "History"],
      description: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920s.",
      image: "https://images.unsplash.com/photo-1489599849989-7a5e91bf0d82?w=800&h=400&fit=crop",
      cast: ["N.T. Rama Rao Jr.", "Ram Charan", "Alia Bhatt"],
      language: "Telugu",
      duration: "187 min",
      trailerUrl: "https://www.youtube.com/watch?v=f_vbAtFSEc0"
    },
    {
      id: 2,
      title: "Pushpa: The Rise",
      director: "Sukumar",
      year: 2021,
      rating: 8.7,
      genre: ["Action", "Crime", "Thriller"],
      description: "A laborer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling.",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      cast: ["Allu Arjun", "Fahadh Faasil", "Rashmika Mandanna"],
      language: "Telugu",
      duration: "179 min",
      trailerUrl: "https://www.youtube.com/watch?v=pKctjlxbFDQ"
    },
    {
      id: 3,
      title: "Baahubali 2",
      director: "S.S. Rajamouli",
      year: 2017,
      rating: 9.0,
      genre: ["Action", "Drama"],
      description: "When Shiva, the son of Baahubali, learns about his heritage, he begins to look for answers.",
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
      cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
      language: "Telugu",
      duration: "167 min",
      trailerUrl: "https://www.youtube.com/watch?v=sOEg_YZQsTI"
    },
    {
      id: 4,
      title: "Arjun Reddy",
      director: "Sandeep Reddy Vanga",
      year: 2017,
      rating: 8.1,
      genre: ["Drama", "Romance"],
      description: "A short-tempered house surgeon gets used to drugs and drinks when his girlfriend is forced to marry another person.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      cast: ["Vijay Deverakonda", "Shalini Pandey"],
      language: "Telugu",
      duration: "182 min",
      trailerUrl: "https://www.youtube.com/watch?v=2wXy3p9W8H8"
    },
    {
      id: 5,
      title: "Eega",
      director: "S.S. Rajamouli",
      year: 2012,
      rating: 8.3,
      genre: ["Fantasy", "Romance"],
      description: "A man is reincarnated as a fly and seeks revenge on his killer.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
      cast: ["Nani", "Samantha Ruth Prabhu", "Sudeep"],
      language: "Telugu",
      duration: "134 min",
      trailerUrl: "https://www.youtube.com/watch?v=KHqEG_JlSbE"
    },
    {
      id: 6,
      title: "Jersey",
      director: "Gowtam Tinnanuri",
      year: 2019,
      rating: 8.6,
      genre: ["Drama", "Sport"],
      description: "A failed cricketer decides to revive his cricketing career in his late 30s despite everyone being skeptical of his ability to do so.",
      image: "https://images.unsplash.com/photo-1552057426-c4d48c24e314?w=400&h=600&fit=crop",
      cast: ["Nani", "Shraddha Srinath"],
      language: "Telugu",
      duration: "157 min",
      trailerUrl: "https://www.youtube.com/watch?v=BrhOuetWV0k"
    }
  ];

  const categories = ['all', 'action', 'drama', 'romance', 'thriller', 'fantasy', 'sport'];

  const filteredMovies = allMovies.filter(movie => {
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
              <Link to="/" className="text-white hover:text-orange-400 transition-colors font-medium">Home</Link>
              <Link to="/reviews" className="text-orange-400 font-medium">All Reviews</Link>
              <Link to="/top-rated" className="text-white hover:text-orange-400 transition-colors font-medium">Top Rated</Link>
              <Link to="/latest" className="text-white hover:text-orange-400 transition-colors font-medium">Latest Movies</Link>
              <Link to="/upcoming" className="text-white hover:text-orange-400 transition-colors font-medium">Upcoming</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              All Movie <span className="text-orange-400">Reviews</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse through our comprehensive collection of Telugu movie reviews and ratings.
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

          {/* Movies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
