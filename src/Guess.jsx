
import imgSpace from '/img/spaceship.png'
//import './Idea.css'
import { useState } from 'react';

function Guess() {

  const [score,setScore] = useState(0);
  const [guess,setGuess] = useState('');

  const checkNumber =()=>{
    const randomNumber = Math.floor(Math.random() * 10)+1;
    if (Number(guess) === randomNumber){
      setScore(()=>score+1);
    }
  }

  return (
    <>
    What number (between 1 and 10) am I thinking of? 
      <input value={guess} 
             type="number" 
             min="1" 
             max="10" 
             onChange={(e)=>setGuess(e.target.value)} 
      />
      <button onClick={checkNumber}>Guess!</button>
      <p>Your score: {score}</p>
    </>
  )
}

export default Guess
