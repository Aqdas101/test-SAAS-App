import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/*
        The task explicitly states to locate and update an `<h1>` tag within App.tsx.
        However, the provided "EXISTING CONTENT" for App.tsx does not contain a direct `<h1>` tag.
        Given the "SPECIFIC CHANGE FOR THIS FILE" context implying the `<h1>` resides in App.tsx
        as the "primary application heading", we infer it should be placed here,
        typically after the Header and before the main Hero component, and update its text.
      */}
      <h1>Grow Your Business Faster with Smart AI Tools</h1>
      <Hero />
      <Services />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;