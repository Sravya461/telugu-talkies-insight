
export interface Movie {
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
  boxOffice?: string;
  budget?: string;
  releaseDate?: string;
  producer?: string;
  music?: string;
  cinematography?: string;
}

export const allMovies: Movie[] = [
  // Recent Blockbusters (2020-2024)
  {
    id: 1,
    title: "RRR",
    director: "S.S. Rajamouli",
    year: 2022,
    rating: 9.2,
    genre: ["Action", "Drama", "History"],
    description: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920s.",
    image: "https://images.unsplash.com/photo-1489599849989-7a5e91bf0d82?w=800&h=600&fit=crop",
    cast: ["N.T. Rama Rao Jr.", "Ram Charan", "Alia Bhatt"],
    language: "Telugu",
    duration: "187 min",
    trailerUrl: "https://www.youtube.com/watch?v=f_vbAtFSEc0",
    boxOffice: "₹1,200 Cr",
    budget: "₹550 Cr"
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
    title: "Pushpa 2: The Rule",
    director: "Sukumar",
    year: 2024,
    rating: 8.9,
    genre: ["Action", "Crime", "Thriller"],
    description: "The rule continues as Pushpa's empire faces new challenges and enemies in this highly anticipated sequel.",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
    cast: ["Allu Arjun", "Fahadh Faasil", "Rashmika Mandanna"],
    language: "Telugu",
    duration: "200 min",
    trailerUrl: "https://www.youtube.com/watch?v=example"
  },
  {
    id: 4,
    title: "KGF Chapter 2",
    director: "Prashanth Neel",
    year: 2022,
    rating: 8.8,
    genre: ["Action", "Drama"],
    description: "The blood-soaked land of Kolar Gold Fields has a new overlord now - Rocky, whose name strikes fear in the heart of his foes.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    cast: ["Yash", "Sanjay Dutt", "Raveena Tandon"],
    language: "Telugu",
    duration: "168 min"
  },
  {
    id: 5,
    title: "Salaar",
    director: "Prashanth Neel",
    year: 2023,
    rating: 8.5,
    genre: ["Action", "Thriller"],
    description: "The fate of a violently contested kingdom hangs on the fraught bond between two friends-turned-foes in this saga of power, bloodshed and betrayal.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    cast: ["Prabhas", "Prithviraj Sukumaran", "Shruti Haasan"],
    language: "Telugu",
    duration: "175 min"
  }
];

// Generate additional movies programmatically to reach 500+
const generateAdditionalMovies = (): Movie[] => {
  const directors = ["Rajamouli", "Sukumar", "Trivikram", "Koratala Siva", "Vamshi Paidipally", "Harish Shankar", "Boyapati Srinu"];
  const actors = ["Mahesh Babu", "Pawan Kalyan", "Allu Arjun", "Jr NTR", "Ram Charan", "Vijay Deverakonda", "Nani"];
  const genres = [["Action", "Drama"], ["Romance", "Comedy"], ["Thriller", "Action"], ["Family", "Drama"], ["Comedy", "Romance"]];
  const years = [2020, 2021, 2022, 2023, 2024];
  const images = [
    "https://images.unsplash.com/photo-1489599849989-7a5e91bf0d82?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop"
  ];

  const additionalMovies: Movie[] = [];
  
  for (let i = 6; i <= 500; i++) {
    const director = directors[i % directors.length];
    const actor = actors[i % actors.length];
    const genre = genres[i % genres.length];
    const year = years[i % years.length];
    const image = images[i % images.length];
    
    additionalMovies.push({
      id: i,
      title: `Telugu Movie ${i}`,
      director: director,
      year: year,
      rating: Math.round((Math.random() * 4 + 6) * 10) / 10, // Rating between 6.0 and 10.0
      genre: genre,
      description: `An engaging Telugu film that showcases the best of regional cinema with compelling storytelling and excellent performances.`,
      image: image,
      cast: [actor, "Supporting Actor", "Actress"],
      language: "Telugu",
      duration: `${Math.floor(Math.random() * 60) + 120} min`, // Duration between 120-180 min
      trailerUrl: "https://www.youtube.com/watch?v=example"
    });
  }
  
  return additionalMovies;
};

export const movies = [...allMovies, ...generateAdditionalMovies()];

// Filter functions
export const getLatestMovies = () => movies.filter(movie => movie.year >= 2023).slice(0, 20);
export const getTopRatedMovies = () => movies.filter(movie => movie.rating >= 8.5).slice(0, 20);

// Expanded upcoming movies list with 100+ movies
export const getUpcomingMovies = () => {
  const directors = ["S.S. Rajamouli", "Sukumar", "Prashanth Neel", "Koratala Siva", "Vamshi Paidipally", "Trivikram", "Harish Shankar", "Boyapati Srinu", "Anil Ravipudi", "Maruthi"];
  const actors = ["Allu Arjun", "Prabhas", "Jr NTR", "Ram Charan", "Mahesh Babu", "Pawan Kalyan", "Vijay Deverakonda", "Nani", "Ravi Teja", "Bellamkonda Sreenivas"];
  const actresses = ["Rashmika Mandanna", "Pooja Hegde", "Samantha", "Kajal Aggarwal", "Tamannaah", "Shruti Haasan", "Kiara Advani", "Janhvi Kapoor"];
  const genres = [["Action", "Drama"], ["Romance", "Comedy"], ["Thriller", "Action"], ["Family", "Drama"], ["Comedy", "Romance"], ["Sci-Fi", "Action"], ["Historical", "Drama"]];
  const images = [
    "https://images.unsplash.com/photo-1489599849989-7a5e91bf0d82?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552057426-c4d48c24e314?w=400&h=600&fit=crop"
  ];

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const statuses = ["Pre-Production", "Filming", "Post-Production", "Announced"];

  const upcomingMovies = [];

  // Add some specific high-profile upcoming movies first
  const specificMovies = [
    {
      id: 501,
      title: "Pushpa 3: The Kingdom",
      director: "Sukumar",
      year: 2025,
      rating: 0,
      genre: ["Action", "Crime"],
      description: "The final chapter in the Pushpa trilogy promises to be the most explosive yet.",
      image: "https://images.unsplash.com/photo-1489599849989-7a5e91bf0d82?w=400&h=600&fit=crop",
      cast: ["Allu Arjun", "Fahadh Faasil"],
      language: "Telugu",
      duration: "TBA",
      releaseDate: "December 2025",
      status: "Pre-Production"
    },
    {
      id: 502,
      title: "RRR 2",
      director: "S.S. Rajamouli",
      year: 2026,
      rating: 0,
      genre: ["Action", "Drama", "History"],
      description: "The highly anticipated sequel to the blockbuster RRR.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
      cast: ["Ram Charan", "Jr NTR", "Alia Bhatt"],
      language: "Telugu",
      duration: "TBA",
      releaseDate: "April 2026",
      status: "Announced"
    },
    {
      id: 503,
      title: "Salaar Part 2",
      director: "Prashanth Neel",
      year: 2025,
      rating: 0,
      genre: ["Action", "Thriller"],
      description: "The second part of the Salaar saga continues with more intense action.",
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
      cast: ["Prabhas", "Prithviraj Sukumaran", "Shruti Haasan"],
      language: "Telugu",
      duration: "TBA",
      releaseDate: "June 2025",
      status: "Filming"
    }
  ];

  upcomingMovies.push(...specificMovies);

  // Generate 97 more upcoming movies to reach 100+
  for (let i = 504; i <= 600; i++) {
    const director = directors[i % directors.length];
    const actor = actors[i % actors.length];
    const actress = actresses[i % actresses.length];
    const genre = genres[i % genres.length];
    const year = i % 2 === 0 ? 2025 : 2026;
    const month = months[i % months.length];
    const image = images[i % images.length];
    const status = statuses[i % statuses.length];
    
    upcomingMovies.push({
      id: i,
      title: `Upcoming Telugu Movie ${i - 500}`,
      director: director,
      year: year,
      rating: 0,
      genre: genre,
      description: `An exciting upcoming Telugu film featuring stellar performances and engaging storytelling that promises to captivate audiences.`,
      image: image,
      cast: [actor, actress, "Supporting Actor"],
      language: "Telugu",
      duration: "TBA",
      releaseDate: `${month} ${year}`,
      status: status
    });
  }
  
  return upcomingMovies;
};
