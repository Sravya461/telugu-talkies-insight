
import React, { useState } from 'react';
import { Search, Star, Calendar, Clock, Users, Award, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MovieCard from '@/components/MovieCard';
import FeaturedMovie from '@/components/FeaturedMovie';
import CategoryFilter from '@/components/CategoryFilter';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const featuredMovie = {
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
    duration: "187 min"
  };

  const movies = [
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
      duration: "179 min"
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
      duration: "167 min"
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
      duration: "182 min"
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
      duration: "134 min"
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
      duration: "157 min"
    }
  ];

  const categories = ['all', 'action', 'drama', 'romance', 'thriller', 'fantasy'];

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         movie.director.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           movie.genre.some(g => g.toLowerCase().includes(selectedCategory));
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-yellow-400" />
              <h1 className="text-2xl font-bold text-white">Telugu Cinema Hub</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">Home</a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">Reviews</a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">Top Rated</a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">Latest</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              Discover the Best of <span className="text-yellow-400">Telugu Cinema</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your ultimate destination for Telugu movie reviews, ratings, and recommendations. 
              Find your next favorite film from Tollywood's finest collection.
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
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 h-12"
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
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Movies Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
              <div className="text-gray-300">Years of Cinema</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-gray-300">Directors Featured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Latest Reviews & Ratings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-6 w-6 text-yellow-400" />
                <span className="text-xl font-bold text-white">Telugu Cinema Hub</span>
              </div>
              <p className="text-gray-400">
                Your trusted source for Telugu movie reviews and recommendations.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Action Movies</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Romance</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Thriller</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Drama</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Movie Reviews</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Ratings</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Recommendations</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Latest Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Telugu Cinema Hub. All rights reserved. Made for Telugu movie lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
