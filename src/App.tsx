
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Determine if we should use HashRouter for compatibility with traditional hosting
const useHashRouter = window.location.hostname !== 'localhost' && 
                      !window.location.hostname.includes('codesandbox') &&
                      !window.location.hostname.includes('stackblitz');

const App = () => {
  const Router = useHashRouter ? HashRouter : BrowserRouter;
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
