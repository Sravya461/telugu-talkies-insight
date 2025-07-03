
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
  // Local Telugu Films
  {
    id: 6,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    rating: 8.1,
    genre: ["Romance", "Drama"],
    description: "A short-tempered house surgeon gets used to drugs and drinks when his girlfriend is forced to marry another person.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    cast: ["Vijay Deverakonda", "Shalini Pandey"],
    language: "Telugu",
    duration: "182 min",
    trailerUrl: "https://www.youtube.com/results?search_query=Arjun+Reddy+trailer"
  },
  {
    id: 7,
    title: "Geetha Govindam",
    director: "Parasuram",
    year: 2018,
    rating: 7.8,
    genre: ["Romance", "Comedy"],
    description: "A young lecturer facing a mild harassment issue attempts to get a beautiful girl and at last finds true love.",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
    cast: ["Vijay Deverakonda", "Rashmika Mandanna"],
    language: "Telugu",
    duration: "143 min"
  },
  // Telugu Dubbed Movies
  {
    id: 8,
    title: "Baahubali: The Beginning (Telugu)",
    director: "S.S. Rajamouli",
    year: 2015,
    rating: 8.0,
    genre: ["Action", "Drama", "Fantasy"],
    description: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring tribes.",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
    cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
    language: "Telugu",
    duration: "159 min",
    boxOffice: "₹650 Cr"
  },
  {
    id: 9,
    title: "K.G.F: Chapter 1 (Telugu Dubbed)",
    director: "Prashanth Neel",
    year: 2018,
    rating: 8.2,
    genre: ["Action", "Drama"],
    description: "Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their Savior, the government sees him as a threat.",
    image: "https://images.unsplash.com/photo-1552057426-c4d48c24e314?w=400&h=600&fit=crop",
    cast: ["Yash", "Srinidhi Shetty", "Ramachandra Raju"],
    language: "Telugu Dubbed",
    duration: "156 min"
  },
  {
    id: 10,
    title: "Vikram (Telugu Dubbed)",
    director: "Lokesh Kanagaraj",
    year: 2022,
    rating: 8.4,
    genre: ["Action", "Thriller", "Crime"],
    description: "Members of a black ops team must track and eliminate a gang of masked murderers.",
    image: "https://images.unsplash.com/photo-1594736797933-d0589ba19468?w=400&h=600&fit=crop",
    cast: ["Kamal Haasan", "Vijay Sethupathi", "Fahadh Faasil"],
    language: "Telugu Dubbed",
    duration: "174 min"
  }
];

// Generate additional movies programmatically to reach 500+
const generateAdditionalMovies = (): Movie[] => {
  const directors = ["Rajamouli", "Sukumar", "Trivikram", "Koratala Siva", "Vamshi Paidipally", "Harish Shankar", "Boyapati Srinu", "Anil Ravipudi", "Maruthi", "Krish"];
  const actors = ["Mahesh Babu", "Pawan Kalyan", "Allu Arjun", "Jr NTR", "Ram Charan", "Vijay Deverakonda", "Nani", "Ravi Teja", "Bellamkonda Sreenivas", "Nithiin"];
  const actresses = ["Rashmika Mandanna", "Pooja Hegde", "Samantha", "Kajal Aggarwal", "Tamannaah", "Shruti Haasan", "Kiara Advani", "Janhvi Kapoor"];
  const genres = [["Action", "Drama"], ["Romance", "Comedy"], ["Thriller", "Action"], ["Family", "Drama"], ["Comedy", "Romance"], ["Crime", "Thriller"], ["Historical", "Drama"]];
  const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
  const languages = ["Telugu", "Telugu Dubbed", "Telugu"];
  const images = [
    "https://images.unsplash.com/photo-1489599849989-7a5e91bf0d82?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552057426-c4d48c24e314?w=400&h=600&fit=crop"
  ];

  const movieTitles = [
    "Rangasthalam", "Ala Vaikunthapurramuloo", "Sarileru Neekevvaru", "Sye Raa Narasimha Reddy", "Jersey", "Maharshi", "Fidaa", "Premam", "Ninnu Kori", "MCA", "Tholi Prema", "Taxiwaala", "C/o Kancharapalem", "96 (Telugu)", "Mahanati", "Bharat Ane Nenu", "Aravinda Sametha", "F2", "Venky Mama", "Saaho", "World Famous Lover", "Ala Vaikunthapurramuloo", "Disco Raja", "V", "Tenet (Telugu)", "Wonder Woman 1984 (Telugu)", "Krack", "Master (Telugu)", "Uppena", "Vakeel Saab", "Narappa", "Most Eligible Bachelor", "Shyam Singha Roy", "Akhanda", "Bheemla Nayak", "Acharya", "F3", "Liger", "Godfather", "The Ghost", "Sarkaaru Vaari Paata", "Major", "Sita Ramam", "Karthikeya 2", "Ante Sundaraniki", "Virata Parvam", "Thank You", "Bimbisara", "Pakka Commercial", "18 Pages", "Radhe Shyam", "Beast (Telugu)", "KGF Chapter 2 (Telugu)", "Heropanti 2 (Telugu)", "Runway 34 (Telugu)", "Gangubai Kathiawadi (Telugu)", "The Kashmir Files (Telugu)", "Jhund (Telugu)", "Bachchhan Paandey (Telugu)", "Morbius (Telugu)", "Doctor Strange 2 (Telugu)", "Thor Love and Thunder (Telugu)", "Minions Rise of Gru (Telugu)", "Jurassic World Dominion (Telugu)", "Top Gun Maverick (Telugu)", "Lightyear (Telugu)", "Elvis (Telugu)", "Nope (Telugu)", "Bullet Train (Telugu)", "Don't Worry Darling (Telugu)", "The Woman King (Telugu)", "Avatar 2 (Telugu)", "Black Panther 2 (Telugu)", "Black Adam (Telugu)", "Ticket to Paradise (Telugu)", "Halloween Ends (Telugu)", "Smile (Telugu)", "Terrifier 2 (Telugu)", "Barbarian (Telugu)", "Pearl (Telugu)", "X (Telugu)", "Scream 5 (Telugu)", "The Batman (Telugu)", "Uncharted (Telugu)", "Turning Red (Telugu)", "Encanto (Telugu)", "Spider-Man No Way Home (Telugu)", "Eternals (Telugu)", "Dune (Telugu)", "No Time to Die (Telugu)", "Venom 2 (Telugu)", "Fast 9 (Telugu)", "Godzilla vs Kong (Telugu)", "Zack Snyder Justice League (Telugu)", "Tom and Jerry (Telugu)", "Wonder Woman 1984 (Telugu)", "Soul (Telugu)", "Mulan (Telugu)", "Tenet (Telugu)", "Wonder Woman (Telugu)", "Aquaman (Telugu)", "Shazam (Telugu)", "Captain Marvel (Telugu)", "Avengers Endgame (Telugu)", "Avengers Infinity War (Telugu)", "Black Panther (Telugu)", "Thor Ragnarok (Telugu)", "Spider-Man Homecoming (Telugu)", "Guardians of Galaxy 2 (Telugu)", "Doctor Strange (Telugu)", "Captain America Civil War (Telugu)", "Ant-Man (Telugu)", "Avengers Age of Ultron (Telugu)", "Guardians of Galaxy (Telugu)", "Captain America Winter Soldier (Telugu)", "Thor Dark World (Telugu)", "Iron Man 3 (Telugu)", "Avengers (Telugu)", "Captain America First Avenger (Telugu)", "Thor (Telugu)", "Iron Man 2 (Telugu)", "Iron Man (Telugu)", "Incredible Hulk (Telugu)"
  ];

  const additionalMovies: Movie[] = [];
  
  for (let i = 11; i <= 500; i++) {
    const director = directors[i % directors.length];
    const actor = actors[i % actors.length];
    const actress = actresses[i % actresses.length];
    const genre = genres[i % genres.length];
    const year = years[i % years.length];
    const language = languages[i % languages.length];
    const image = images[i % images.length];
    const movieTitle = movieTitles[(i - 11) % movieTitles.length] || `Telugu Movie ${i}`;
    
    additionalMovies.push({
      id: i,
      title: movieTitle,
      director: director,
      year: year,
      rating: Math.round((Math.random() * 4 + 6) * 10) / 10,
      genre: genre,
      description: `An engaging ${language === 'Telugu Dubbed' ? 'dubbed' : 'original'} Telugu film that showcases compelling storytelling, excellent performances, and high production values. This movie delivers entertainment with its unique narrative and memorable characters.`,
      image: image,
      cast: [actor, actress, "Supporting Actor"],
      language: language,
      duration: `${Math.floor(Math.random() * 60) + 120} min`,
      trailerUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(movieTitle + ' trailer')}`
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
  
  // Filter movies from current date onwards
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  
  return upcomingMovies.filter(movie => {
    const [month, year] = movie.releaseDate.split(' ');
    const movieYear = parseInt(year);
    const movieMonth = new Date(Date.parse(month + " 1, 2000")).getMonth() + 1;
    
    if (movieYear > currentYear) return true;
    if (movieYear === currentYear && movieMonth >= currentMonth) return true;
    
    return false;
  }).sort((a, b) => {
    // Sort by release date
    const [monthA, yearA] = a.releaseDate.split(' ');
    const [monthB, yearB] = b.releaseDate.split(' ');
    const dateA = new Date(parseInt(yearA), new Date(Date.parse(monthA + " 1, 2000")).getMonth());
    const dateB = new Date(parseInt(yearB), new Date(Date.parse(monthB + " 1, 2000")).getMonth());
    return dateA.getTime() - dateB.getTime();
  });
};
