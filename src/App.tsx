import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Works from "./pages/Works";
import WorkDetail from "./pages/WorkDetail";
import Research from "./pages/Research";
import ResearchDetail from "./pages/ResearchDetail";
import Credentials from "./pages/Credentials";
import CredentialsDetail from "./pages/CredentialsDetail";
import Positions from "./pages/Positions";
import PositionDetail from "./pages/PositionDetail";
import Experience from "./pages/Experience";
import ExperienceDetail from "./pages/ExperienceDetail";
import Contact from "./pages/Contact";
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
          <Route path="/works" element={<Works />} />
          <Route path="/works/:slug" element={<WorkDetail />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:slug" element={<ResearchDetail />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/credentials/:slug" element={<CredentialsDetail />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/positions/:slug" element={<PositionDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:slug" element={<ExperienceDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
