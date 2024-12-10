import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Portfolio from '@/pages/Portfolio';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import FloatingContact from '@/components/FloatingContact';
import { Toaster } from '@/components/ui/sonner';
import BackgroundAnimation from '@/components/BackgroundAnimation';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        <div className="min-h-screen relative overflow-hidden">
          <BackgroundAnimation />
          <div className="relative z-10">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <FloatingContact />
            <Footer />
            <Toaster />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;