 //page components 
 import AboutSection from '../components/AboutSection';
 import ServicesSection from '../components/ServicesSerction';
 import FaqSection from '../components/FaqSection';
 //animation
 import { motion } from 'framer-motion';
import { PageAnimation } from './animation'; 
 const AboutUs = () => {
    return (
     <motion.div exit="exit" variants={PageAnimation} initial="hidden" animate="show">

        <AboutSection />
        <ServicesSection/>   
        <FaqSection/>   
    </motion.div>
    );
  };

export default AboutUs