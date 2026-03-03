import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import TechnologyPage from "./pages/TechnologyPage";
import DopytPage from "./pages/DopytPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/produkty" component={ProductsPage} />
      <Route path="/produkty/:slug" component={ProductDetailPage} />
      <Route path="/o-nas" component={AboutPage} />
      <Route path="/technologia" component={TechnologyPage} />
      <Route path="/kontakt" component={ContactPage} />
      <Route path="/dopyt" component={DopytPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
