import Header from "./composants/Header";
import Footer from "./composants/Footer";
import Service from "./Pages/Presentation";
import './App.css'
import Home from "./Pages/Accueil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import Coord from "./composants/Coord";



function App() {
  return (
    <Router>
        <Header />
        <div className="App min-h-screen flex flex-col">
          <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route exact path="/Service" element={ <Service/> }/>
            <Route exact path="/Contact" element={ <Contact/> }/>
            <Route exact path="/Price" element={ <Pricing/> }/>
          </Routes>
        </div>
        
        <Footer/>

    </Router>
    
  );
}

export default App;