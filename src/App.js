import './App.css';
import Navbar from './Navbar';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import About from './pages/About';
import {Route, Routes} from "react-router-dom";

function App() {

  let Component;

  switch (window.location.pathname) {
    case "/":
      Component = Home 
      break
    case "/pricing":
      Component = Pricing 
      break
    case "/about":
      Component = About
      break
  }

  return (
    <div className="App">
      <>
      <Navbar/>
      <div className='container'>
      <Component/>
      </div>
      </>
    </div>
  );
}

export default App;
