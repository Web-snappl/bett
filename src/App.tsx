import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Okna from "./pages/Okna";
import Drzwi from "./pages/Drzwi";
import Rolety from "./pages/Rolety";
import BramyGarazowe from "./pages/BramyGarazowe";
import ONas from "./pages/ONas";
import Kontakt from "./pages/Kontakt";
import Salon from "./pages/Salon";
import Oferta from "./pages/Oferta";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci";
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
          <Route path="/okna" element={<Okna />} />
          <Route path="/drzwi" element={<Drzwi />} />
          <Route path="/rolety" element={<Rolety />} />
          <Route path="/bramy-garazowe" element={<BramyGarazowe />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/salon" element={<Salon />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;