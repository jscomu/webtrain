import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './Home'
import Idea from "./Idea";
import Guess from "./Guess";
import Ground from "./Ground";
import Space from "./Space";

import reacticon from '/img/reacticon.png'

function App() {

  return (
    <>
    <div className="bgGradation">
      <nav className="navbar">
        <div className="tit">
            ExcitingCoding
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Space">Space</Link></li>
            <li><Link to="/idea">Idea</Link></li>
            <li><Link to="/Guess">Guess</Link></li>
            <li><Link to="/Ground">Ground</Link></li>
        </ul>
        <ul>
            <li><img src={reacticon} width='16' /></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Space" element={<Space />} />
        <Route path="/idea" element={<Idea />} />
        <Route path="/Guess" element={<Guess />} />
        <Route path="/Ground" element={<Ground />} />
      </Routes>
    </div>
    </>
  )
}

export default App
