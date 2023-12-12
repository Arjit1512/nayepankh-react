import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../src/pages/About.jsx';
import Certificates from '../src/pages/Certificates.jsx';
import NR from '../src/pages/NR.jsx';
import Donate from '../src/pages/Donate.jsx';
import Login from "../src/pages/Login.jsx";
import Register from "../src/pages/Register.jsx";
import Home from "./pages/Home";
import Start from "../src/pages/start.jsx";
import Community from "../src/pages/Community.jsx";
import WelcomeMessage from "./pages/WelcomeMessage.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/About.jsx" element={<About />} />
          <Route path="/Certificates.jsx" element={<Certificates />} />
          <Route path="/NR.jsx" element={<NR />} />
          <Route path="/Donate.jsx" element={<Donate />} />
          <Route path="/Community.jsx" element={<Community />} />
          <Route path="/Login.jsx" element ={<Login />} />
          <Route path="/" element={<Start />} />
          <Route path = '/Register.jsx' element={<Register></Register>} ></Route>
          <Route path="/WelcomeMessage.jsx" element={<WelcomeMessage />} />
    
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);