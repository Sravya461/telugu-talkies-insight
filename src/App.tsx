
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Reviews from "./pages/Reviews";
import TopRated from "./pages/TopRated";
import Latest from "./pages/Latest";
import Upcoming from "./pages/Upcoming";
import Contact from "./pages/Contact";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
