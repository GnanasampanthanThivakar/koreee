import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Facilities from '@/components/Facilities';
import Benefits from '@/components/Benefits';
import About from '@/components/About';
import Community from '@/components/Community';
import Programs from '@/components/Programs';
import Pricing from '@/components/Pricing';
import Events from '@/components/Events';
import JoinCTA from '@/components/JoinCTA';
import Gallery from '@/components/Gallery';
import Register from '@/components/Register';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Facilities />
        <Benefits />
        <About />
        <Community />
        <Programs />
        <Pricing />
        <Events />
        <JoinCTA />
        <Gallery />
        <Register />
      </main>
      <Footer />
    </>
  );
}
