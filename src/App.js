// Global Style 
import GlogbalStyle from './components/GlobalStyle'
//import pages 
import AboutUS from "./pages/AboutUs";
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      
      <GlogbalStyle/>
      <Nav/>
        <AboutUS/>    
</div>
  );
}

export default App;
