import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './Home'
import Footer from "./Footer";
import Idea from "./Idea";

function App() {

  return (
    <>
    <div class="movewrap">
      <div class="moving">
      <nav className="navbar">
        <div className="tit">
            ExcitingCoding
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/idea">Idea</Link></li>
        </ul>
        <ul>
            <li>☏</li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/idea" element={<Idea />} />
      </Routes>
      <Footer />
    </div></div>
    </>
  )
}

export default App
