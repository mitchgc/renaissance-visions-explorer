import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import SuccessStories from "./pages/SuccessStories";
import NotFound from "./pages/NotFound";
import ChoicesInCommunity from "./pages/services/ChoicesInCommunity";
import SupportedLiving from "./pages/services/SupportedLiving";
import VeryHighNeedsFunding from "./pages/services/VeryHighNeedsFunding";
import HostedFunding from "./pages/services/HostedFunding";
import PrivateSupport from "./pages/services/PrivateSupport";
import ResidentialServices from "./pages/services/ResidentialServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.MODE === 'production' ? '/renaissance-visions-explorer' : undefined}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/services/choices-in-community" element={<ChoicesInCommunity />} />
          <Route path="/services/supported-living" element={<SupportedLiving />} />
          <Route path="/services/very-high-needs-funding" element={<VeryHighNeedsFunding />} />
          <Route path="/services/hosted-funding" element={<HostedFunding />} />
          <Route path="/services/private-support" element={<PrivateSupport />} />
          <Route path="/services/residential-services" element={<ResidentialServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
