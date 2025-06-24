import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Home'
import Header from "./Header";
import Footer from "./Footer";

function App() {


  return (
    <>
    <div class="movewrap">
      <div class="moving">

        <Home />  
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
