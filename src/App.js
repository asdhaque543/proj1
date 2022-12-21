import AboutUs from './segments/aboutus/about';
import ContactUs from './segments/contactus/contact';
import CTA from './segments/cta/cta';
import Footer from './segments/footer/footer';
import Hero from './segments/hero/hero';
import Services from './segments/services/service';
import Testimonials from './segments/testimonials/testimonials';

function App() {
  return (
    <>
      <Hero />
      <CTA />
      <Services />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
