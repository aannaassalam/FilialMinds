import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features';
import ReportSection from '../components/ReportSection';
import BlogSection from '../components/BlogSection';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer'


function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <ReportSection />
      <BlogSection />
      <Accordion />
      <Footer />
    </div>
  );
}

export default HomePage;