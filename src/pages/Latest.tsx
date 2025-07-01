
import React from 'react';
import { Award, Clock, Calendar } from 'lucide-react';
import MovieCard from '@/components/MovieCard';
import { Link } from 'react-router-dom';

const Latest = () => {
  const latestMovies = [
    {
      id: 7,
      title: "Salaar",
      director: "Prashanth Neel",
      year: 2023,
      rating: 8.4,
      genre: ["Action", "Thriller"],
      description: "A gang leader tries to keep a promise made to his dying friend and takes on the other criminal gangs.",
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
      cast: ["Prabhas", "Prithviraj Sukumaran", "Shruti Haasan"],
      language: "Telugu",
      duration: "175 min",
      trailerUrl: "https://www.youtube.com/watch?v=K4-WXYnoVCk"
    },
    {
      id: 8,
      title: "Jawan",
      director: "Atlee",
      year: 2023,
      rating: 8.2,
      genre: ["Action", "Thriller"],
      description: "A high-octane action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society.",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      cast: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi"],
      language: "Telugu",
      duration: "169 min",
      trailerUrl: "https://www.youtube.com/watch?v=fsW1z9QThsA"
    },
    {
      id: 9,
      title: "Dasara",
      director: "Srikanth Odela",
      year: 2023,
      rating: 7.9,
      genre: ["Action", "Drama"],
      description: "Set in the backdrop of Singareni collieries near Godavarikhani, the film follows Dharani as he takes on a local rowdy.",
      image: "https://images.unsplash.com/photo-1489599849989-7a5e91bf0d82?w=400&h=600&fit=crop",
      cast: ["Nani", "Keerthy Suresh", "Dheekshith Shetty"],
      language: "Telugu",
      duration: "155 min",
      trailerUrl: "https://www.youtube.com/watch?v=KB6Xx7MWP9E"
    },
    {
      id: 10,
      title: "Waltair Veerayya",
      director: "Bobby Kolli",
      year: 2023,
      rating: 7.8,
      genre: ["Action", "Comedy"],
      description: "A fisherman who engages in smuggling accepts a request to help a police officer catch a gangster.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      cast: ["Chiranjeevi", "Ravi Teja", "Shruti Haasan"],
      language: "Telugu",
      duration: "144 min",
      trailerUrl: "https://www.youtube.com/watch?v=M9ktdOD-ETg"
    },
    {
      id: 11,
      title: "Bheemla Nayak",
      director: "Saagar K Chandra",
      year: 2022,
      rating: 7.6,
      genre: ["Action", "Drama"],
      description: "Things change when the egos of an upright police officer and a retired army havildar clash.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
      cast: ["Pawan Kalyan", "Rana Daggubati", "Nithya Menen"],
      language: "Telugu",
      duration: "150 min",
      trailerUrl: "https://www.youtube.com/watch?v=vV_7kbjuBFQ"
    },
    {
      id: 12,
      title: "Radhe Shyam",
      director: "Radha Krishna Kumar",
      year: 2022,
      rating: 7.4,
      genre: ["Romance", "Drama"],
      description: "In 1970s Italy, a palmist falls in love with a doctor but their relationship is challenged by fate.",
      image: "https://images.unsplash.com/photo-1552057426-c4d48c24e314?w=400&h=600&fit=crop",
      cast: ["Prabhas", "Pooja Hegde", "Bhagyashree"],
      language: "Telugu",
      duration: "138 min",
      trailerUrl: "https://www.youtube.com/watch?v=1nm7rxG6QKA"
    }
  ];

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
              <Link to="/reviews" className="text-white hover:text-orange-400 transition-colors font-medium">All Reviews</Link>
              <Link to="/top-rated" className="text-white hover:text-orange-400 transition-colors font-medium">Top Rated</Link>
              <Link to="/latest" className="text-orange-400 font-medium">Latest Movies</Link>
              <Link to="/upcoming" className="text-white hover:text-orange-400 transition-colors font-medium">Upcoming</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-12 w-12 text-orange-400 mr-4" />
              <h2 className="text-4xl font-bold text-white">
                Latest <span className="text-orange-400">Telugu Movies</span>
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay updated with the most recent Telugu movie releases and reviews.
            </p>
          </div>

          {/* Latest Movies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestMovies.map((movie) => (
              <div key={movie.id} className="relative">
                <div className="absolute -top-2 -right-2 z-10">
                  <div className="bg-green-500 text-white rounded-full px-3 py-1 text-xs font-bold flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    NEW
                  </div>
                </div>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Latest;
