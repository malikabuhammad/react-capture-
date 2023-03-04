// Global Style 
import GlogbalStyle from './components/GlobalStyle'
//import pages 
import AboutUS from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//Router 
import { Route, Routes , useLocation } from 'react-router-dom';

import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      
      <GlogbalStyle/>
      <Nav/>
<Routes >

      <Route path="/" element={<AboutUS/>} exact>
      

          </Route>
          <Route path="/work"  element={<OurWork/>} >
         
          </Route>
          <Route path="/contact" element={<ContactUs/>} >
          

          </Route>
</Routes >
</div>
  );
}

export default App;
