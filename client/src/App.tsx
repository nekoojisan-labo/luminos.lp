import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import VisualEffects from "@/components/VisualEffects";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import Columns from "./pages/Columns";
import ColumnDetail from "./pages/ColumnDetail";
import Contact from "./pages/Contact";
import Line from "./pages/Line";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/columns" component={Columns} />
        <Route path="/columns/ai-basics" component={ColumnDetail} />
        <Route path="/contact" component={Contact} />
        <Route path="/line" component={Line} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <VisualEffects />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
