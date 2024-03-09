
import Navbar from './components/NavbarSection/Navbar.jsx';
import HeroMain from './components/HeroSection/HeroMain.jsx';
import ServicesMain from './components/ServicesSection/ServicesMain.jsx';
import Testimonials from './components/TestimonialSection/TestimonialsMain.jsx'
import PricingMain from './components/PricingSection/PricingMain.jsx'
import ContactMain from './components/ContaceSection/ContactMain.jsx';
import FooterMain from './components/FooterSection/FooterMain.jsx';

function App() {
  return (
    <div className="App">
      {/************ this is Navbar Section  *************/}
      <div className='navbar__section sticky top-0 bg-black h-20 z-50'>
      <Navbar/>
      </div>

      {/************ this is Hero/Banner Section  *************/}
      <div className='hero__section bg-[#f1f5f9] py-14'>
        <HeroMain/>
      </div>

      {/************ this is Services Section  *************/}
      <div id='services' className='services__section py-9 lg:py-16 bg-[#e2e8f0]'>
        <ServicesMain/>
      </div>

      {/************ this is Testimonials Section  *************/}
      <div className='festimonials__section pt-12 pb-6 md:py-12 lg:py-16'>
        <Testimonials/>
      </div>

      {/************ this is Pricing Section  *************/}
      <div className='pricing__section py-9 lg:py-16 bg-[#e2e8f0]'>
        <PricingMain/>
      </div>

      {/************ this is Contace Section  *************/}
      <div className='contact__section pb-9 lg:pt-4 lg:pb-16 bg-[#e2e8f0] flex items-center relative'>
        <div className='w-full h-[300px] absolute bg-[#0bb827]  z-0'></div>
        <ContactMain/>
      </div>

       {/************ this is Footer Section  *************/}
       <div className='footer__section bg-[#000000] pt-12 pb-7 lg:py-20'>
        <FooterMain/>
      </div>

    </div>
  );
}

export default App;
