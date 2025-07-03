
import React from 'react';
import { Award, Clock, Calendar } from 'lucide-react';
import MovieCard from '@/components/MovieCard';
import { Link } from 'react-router-dom';

const Latest = () => {
  // Get 2025 movies sorted by release date
  const latest2025Movies = [
    {
      id: 201,
      title: "Pushpa 2: The Rule",
      director: "Sukumar",
      year: 2025,
      rating: 9.2,
      genre: ["Action", "Drama"],
      description: "The continuation of Pushpa's story as he rises to become the most powerful smuggler.",
      image: "https://images.unsplash.com/photo-1594736797933-d0589ba19468?w=400&h=600&fit=crop",
      cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
      language: "Telugu",
      duration: "180 min",
      releaseDate: "January 15, 2025",
      trailerUrl: "https://www.youtube.com/watch?v=pushpa2"
    },
    {
      id: 202,
      title: "Devara Part 2",
      director: "Koratala Siva",
      year: 2025,
      rating: 8.8,
      genre: ["Action", "Thriller"],
      description: "The epic conclusion to Devara's saga with high-octane action sequences.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
      cast: ["Jr. NTR", "Janhvi Kapoor", "Saif Ali Khan"],
      language: "Telugu",
      duration: "165 min",
      releaseDate: "February 20, 2025",
      trailerUrl: "https://www.youtube.com/watch?v=devara2"
    },
    {
      id: 203,
      title: "Game Changer",
      director: "S. Shankar",
      year: 2025,
      rating: 8.5,
      genre: ["Action", "Political"],
      description: "A political thriller about a young IAS officer fighting corruption.",
      image: "https://images.unsplash.com/photo-1489599849989-7a5e91bf0d82?w=400&h=600&fit=crop",
      cast: ["Ram Charan", "Kiara Advani", "Anjali"],
      language: "Telugu",
      duration: "170 min",
      releaseDate: "March 10, 2025",
      trailerUrl: "https://www.youtube.com/watch?v=gamechanger"
    },
    {
      id: 204,
      title: "Spirit",
      director: "Sandeep Reddy Vanga",
      year: 2025,
      rating: 8.7,
      genre: ["Action", "Crime"],
      description: "A cop with a dark past takes on the underworld in this intense thriller.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
      cast: ["Prabhas", "Kareena Kapoor", "Mrunal Thakur"],
      language: "Telugu",
      duration: "155 min",
      releaseDate: "April 25, 2025",
      trailerUrl: "https://www.youtube.com/watch?v=spirit"
    },
    {
      id: 205,
      title: "OG",
      director: "Sujeeth",
      year: 2025,
      rating: 8.3,
      genre: ["Action", "Drama"],
      description: "Pawan Kalyan returns in this high-octane action entertainer.",
      image: "https://images.unsplash.com/photo-1552057426-c4d48c24e314?w=400&h=600&fit=crop",
      cast: ["Pawan Kalyan", "Priyanka Arul Mohan", "Emraan Hashmi"],
      language: "Telugu",
      duration: "160 min",
      releaseDate: "May 30, 2025",
      trailerUrl: "https://www.youtube.com/watch?v=og"
    },
    {
      id: 206,
      title: "Kalki 2898 AD Part 2",
      director: "Nag Ashwin",
      year: 2025,
      rating: 9.0,
      genre: ["Sci-Fi", "Action"],
      description: "The epic continuation of the futuristic saga with stunning visuals.",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      cast: ["Prabhas", "Deepika Padukone", "Amitabh Bachchan"],
      language: "Telugu",
      duration: "175 min",
      releaseDate: "June 15, 2025",
      trailerUrl: "https://www.youtube.com/watch?v=kalki2"
    }
  ];

  // Sort by release date (latest first)
  const sortedMovies = latest2025Movies.sort((a, b) => {
    const dateA = new Date(a.releaseDate);
    const dateB = new Date(b.releaseDate);
    return dateB.getTime() - dateA.getTime();
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
            {sortedMovies.map((movie) => (
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
