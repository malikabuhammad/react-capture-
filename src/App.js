// Global Style 
import GlogbalStyle from './components/GlobalStyle'
//import pages 
import AboutUS from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Router 
import { Route, Routes ,useLocation } from 'react-router-dom';
//Animation 
import { AnimatePresence } from 'framer-motion';
import Nav from './components/Nav';
function App() {
  const location=useLocation();
  console.log(location);
  return (
    <div className="App">
      
      <GlogbalStyle/>
      <Nav/>
      <AnimatePresence  mode='wait'>

<Routes location={location} key={location.pathname}>

      <Route path="/" element={<AboutUS/>} exact>
      

          </Route>
          <Route path="/work" exact element={<OurWork/>}  >
         
          </Route>
          <Route path='/work/:id' element={<MovieDetail/>}>
            
          </Route>
          <Route path="/contact" element={<ContactUs/>} >
          

          </Route>
          
</Routes >
</AnimatePresence>

</div>
  );
}

export default App;
